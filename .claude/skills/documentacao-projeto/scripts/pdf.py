#!/usr/bin/env python3
"""Gera e confere os PDFs de um guia (compras, montagem, referência).

Uso (a partir da pasta Som):
  python .claude/skills/documentacao-projeto/scripts/pdf.py projetos/<projeto>/guia
  python ... pdf.py <guia> --so-conferir                  # não gera; confere os PDFs da versão atual
  python ... pdf.py <guia> --png montagem:13 --png compras:10   # salva PNG das páginas para olhar
  python ... pdf.py <guia> --apagar-antigos               # apaga os PDFs de versões anteriores

Lê meta.arquivo e meta.versao do dados.js e grava <arquivo>-<parte>-v<versao>.pdf na pasta do guia.
Usa o servidor local da porta 8765 (preview "guia-som"); se não estiver no ar, sobe um temporário
servindo a raiz do Som (a pasta que tem documentacao/modelo/guia.js).

Confere: marcação crua ({{p:..}}, **, undefined, NaN), página quase vazia (transbordo do passo
anterior) e PDFs de versões antigas. Sai com código 1 se houver erro.
"""
import argparse
import glob
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.request

sys.stdout.reconfigure(encoding='utf-8')

PARTES = ['compras', 'montagem', 'referencia']
NAVEGADORES = [
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'google-chrome', 'chromium', 'chrome', 'msedge',
    '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
]


def achar_navegador():
    for n in NAVEGADORES:
        if os.path.isfile(n):
            return n
        w = shutil.which(n)
        if w:
            return w
    sys.exit('Chrome ou Edge não encontrado.')


def achar_raiz(guia):
    d = os.path.abspath(guia)
    while True:
        if os.path.isfile(os.path.join(d, 'documentacao', 'modelo', 'guia.js')):
            return d
        pai = os.path.dirname(d)
        if pai == d:
            sys.exit('Não achei a raiz (pasta com documentacao/modelo/guia.js) acima de ' + guia)
        d = pai


def ler_meta(guia):
    t = open(os.path.join(guia, 'dados.js'), encoding='utf-8').read()
    m = re.search(r'\bmeta\s*:\s*\{(.*?)\n\s*\}', t, re.S)
    bloco = m.group(1) if m else t

    def campo(k):
        r = re.search(r"\b" + k + r"\s*:\s*'([^']*)'", bloco)
        return r.group(1) if r else None

    arquivo, versao = campo('arquivo') or campo('id'), campo('versao')
    if not arquivo or not versao:
        sys.exit('dados.js sem meta.arquivo (ou meta.id) e meta.versao.')
    return arquivo, versao


def no_ar(url):
    try:
        urllib.request.urlopen(url, timeout=3)
        return True
    except Exception:
        return False


def gerar(nav, url, saida):
    if os.path.exists(saida):
        os.remove(saida)
    perfil = tempfile.mkdtemp(prefix='guia-chrome-')
    try:
        extra = ['--no-sandbox'] if hasattr(os, 'geteuid') and os.geteuid() == 0 else []  # Linux como root (sessão na nuvem)
        subprocess.run([nav, *extra, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                        '--run-all-compositor-stages-before-draw', '--virtual-time-budget=8000',
                        '--user-data-dir=' + perfil, '--print-to-pdf=' + saida, url],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=180)
    finally:
        shutil.rmtree(perfil, ignore_errors=True)
    return os.path.exists(saida)


def conferir(pdf, pymupdf):
    erros, avisos = [], []
    d = pymupdf.open(pdf)
    for i, pg in enumerate(d, 1):
        t = pg.get_text()
        corpo = re.sub(r'^\s*\d+\s*/\s*\d+\s*$', '', t, flags=re.M).strip()  # tira o "13 / 32"
        for crua in sorted(set(re.findall(r'\{\{[^}]*\}\}|\*\*|\bundefined\b|\bNaN\b|\[object Object\]', t))):
            erros.append(f'pág. {i}: marcação crua "{crua}"')
        inicio = ' '.join(corpo.split())[:70]
        passo_curto = re.match(r'(\d+\.\d+|ETAPA)\b', inicio)  # página que começa um passo ou etapa pode ser curta
        if i > 1 and len(corpo) < 400 and not passo_curto and not pg.get_images() and len(pg.get_drawings()) < 15:
            avisos.append(f'pág. {i}: quase vazia ({len(corpo)} caracteres). Transbordo da anterior? Começa com: "{inicio}"')
    n = d.page_count
    d.close()
    return n, erros, avisos


def main():
    ap = argparse.ArgumentParser(description='Gera e confere os PDFs de um guia.')
    ap.add_argument('guia', help='pasta do guia (com dados.js e compras/montagem/referencia.html)')
    ap.add_argument('--porta', type=int, default=8765)
    ap.add_argument('--so-conferir', action='store_true', help='não gera; só confere os PDFs existentes')
    ap.add_argument('--png', action='append', default=[], metavar='PARTE:PAG', help='salva a página em PNG (ex.: montagem:13)')
    ap.add_argument('--apagar-antigos', action='store_true', help='apaga os PDFs de versões anteriores')
    a = ap.parse_args()

    guia = os.path.abspath(a.guia)
    raiz = achar_raiz(guia)
    arquivo, versao = ler_meta(guia)
    rel = os.path.relpath(guia, raiz).replace(os.sep, '/')
    base = f'http://127.0.0.1:{a.porta}/{rel}/'
    pdfs = {p: os.path.join(guia, f'{arquivo}-{p}-v{versao}.pdf') for p in PARTES}
    print(f'Guia: {rel}  ·  {arquivo} v{versao}')

    servidor = None
    falhou = False
    try:
        if not a.so_conferir:
            if not no_ar(base + 'compras.html'):
                servidor = subprocess.Popen([sys.executable, '-m', 'http.server', str(a.porta), '--bind', '127.0.0.1', '--directory', raiz],
                                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                for _ in range(40):
                    if no_ar(base + 'compras.html'):
                        break
                    time.sleep(0.25)
                else:
                    sys.exit('O servidor local não respondeu em ' + base)
                print(f'(servidor temporário na porta {a.porta})')
            nav = achar_navegador()
            for p in PARTES:
                if not gerar(nav, base + p + '.html', pdfs[p]):
                    print(f'ERRO: {p}: o PDF não foi gerado')
                    falhou = True
    finally:
        if servidor:
            servidor.terminate()

    try:
        import pymupdf
    except ImportError:
        try:
            import fitz as pymupdf
        except ImportError:
            pymupdf = None
            print('(PyMuPDF não instalado: pip install pymupdf. Conferência de páginas pulada.)')

    for p in PARTES:
        f = pdfs[p]
        if not os.path.exists(f):
            print(f'ERRO: falta {os.path.basename(f)}')
            falhou = True
            continue
        kb = os.path.getsize(f) // 1024
        if pymupdf is None:
            print(f'{p}: {os.path.basename(f)} ({kb} KB)')
            continue
        n, erros, avisos = conferir(f, pymupdf)
        print(f'{p}: {n} páginas ({kb} KB)')
        for e in erros:
            print('  ERRO: ' + e)
        for v in avisos:
            print('  aviso: ' + v)
        falhou = falhou or bool(erros)

    if a.png:
        if pymupdf is None:
            print('PNG precisa do PyMuPDF.')
        else:
            pasta = os.path.join(tempfile.gettempdir(), 'guia-png')
            os.makedirs(pasta, exist_ok=True)
            for pedido in a.png:
                p, _, pag = pedido.partition(':')
                if p not in pdfs or not pag.isdigit() or not os.path.exists(pdfs[p]):
                    print(f'PNG: pedido inválido "{pedido}" (use parte:página)')
                    continue
                d = pymupdf.open(pdfs[p])
                k = int(pag)
                if not 1 <= k <= d.page_count:
                    print(f'PNG: {p} tem {d.page_count} páginas')
                    continue
                saida = os.path.join(pasta, f'{arquivo}-{p}-p{k}.png')
                d[k - 1].get_pixmap(dpi=70).save(saida)
                d.close()
                print('PNG: ' + saida)

    antigos = [f for p in PARTES for f in glob.glob(os.path.join(guia, f'{arquivo}-{p}-v*.pdf')) if f not in pdfs.values()]
    for f in antigos:
        if a.apagar_antigos:
            os.remove(f)
            print('apagado: ' + os.path.basename(f))
        else:
            print('versão antiga: ' + os.path.basename(f) + ' (use --apagar-antigos)')

    sys.exit(1 if falhou else 0)


if __name__ == '__main__':
    main()
