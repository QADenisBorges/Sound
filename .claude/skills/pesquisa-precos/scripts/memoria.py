"""Memória de experiências e placar de estratégias da skill pesquisa-precos.

Comandos:
    python memoria.py buscar --categoria "amplificador automotivo" --termos "taramps 4 canais"
    python memoria.py registrar experiencia.json      (ou via stdin)
    python memoria.py placar [--categoria X]
    python memoria.py modelo                           (imprime o formato de uma experiência)

Os dados ficam em ../aprendizado/experiencias.jsonl (uma pesquisa por linha).

Placar (bandit): cada estratégia (tipo de consulta + fonte) é um "braço". Sucesso =
a estratégia gerou pelo menos uma oferta válida (produto certo, comparável). A taxa é a
média de uma Beta(1+sucessos, 1+falhas); a ordem sugerida usa amostragem de Thompson,
o que mantém exploração natural de estratégias pouco testadas. Com menos de MIN_N
usos na categoria, a estratégia aparece como "explorando" — dado insuficiente para
virar regra.
"""
import argparse
import datetime as dt
import json
import random
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ARQ = Path(__file__).resolve().parent.parent / "aprendizado" / "experiencias.jsonl"
MIN_N = 5

ESTRATEGIAS = ["nome-completo", "marca-modelo", "codigo-fabricante", "modelo-spec", "sinonimos",
               "termos-vendedor", "marketplace-direto", "google-operadores", "google-shopping",
               "equivalentes", "outra"]
FONTES = ["ml", "shopee", "amazon", "magalu", "google", "google-shopping", "fabricante",
          "especializada", "aliexpress", "outra"]

MODELO = {
    "data": "AAAA-MM-DD",
    "pedido": "resumo do pedido do usuário",
    "categoria": "ex.: amplificador automotivo | alto-falante | eletrônico | ferramenta",
    "produto": "marca + modelo identificado (ou 'equivalentes de X')",
    "estrategias": [
        {"tipo": "codigo-fabricante", "fonte": "ml", "consulta": "texto exato usado",
         "ofertas_validas": 4, "ofertas_vistas": 12, "sucesso": True, "nota": "por que funcionou/falhou"}
    ],
    "fontes_falharam": [{"fonte": "amazon", "motivo": "captcha / 403 / sem resultado"}],
    "erros": [{"erro": "comparou versão 1 com versão 2", "causa": "nome parecido",
               "correcao": "checar código do fabricante no título", "detectado_por": "auditor|usuario|eu"}],
    "resultado": {"ofertas_validas": 6, "fontes_cobertas": 4, "melhor_total": 389.90,
                  "frete_confirmado": True, "duracao_min": 12},
    "aprendizado": "lição em uma frase, geral o bastante para outra pesquisa",
    "confianca": "baixa | media | alta",
}


def norm(s):
    s = unicodedata.normalize("NFKD", (s or "").lower())
    return "".join(c for c in s if not unicodedata.combining(c))


def tokens(s):
    return {t for t in re.findall(r"[a-z0-9]+", norm(s)) if len(t) > 2}


def carregar():
    if not ARQ.exists():
        return []
    out = []
    for i, linha in enumerate(ARQ.read_text(encoding="utf-8").splitlines(), 1):
        if linha.strip():
            try:
                out.append(json.loads(linha))
            except json.JSONDecodeError:
                print(f"aviso: linha {i} inválida em {ARQ.name}", file=sys.stderr)
    return out


def cmd_registrar(a):
    raw = open(a.arquivo, encoding="utf-8").read() if a.arquivo else sys.stdin.read()
    exp = json.loads(raw)
    exp.setdefault("data", dt.date.today().isoformat())
    problemas = []
    for e in exp.get("estrategias", []):
        if e.get("tipo") not in ESTRATEGIAS:
            problemas.append(f"tipo desconhecido '{e.get('tipo')}' (use: {', '.join(ESTRATEGIAS)})")
        if e.get("fonte") not in FONTES:
            problemas.append(f"fonte desconhecida '{e.get('fonte')}' (use: {', '.join(FONTES)})")
        if "sucesso" not in e:
            e["sucesso"] = (e.get("ofertas_validas") or 0) > 0
    if not exp.get("categoria"):
        problemas.append("falta 'categoria'")
    if problemas:
        print("Não registrado:\n- " + "\n- ".join(problemas))
        sys.exit(1)
    ARQ.parent.mkdir(parents=True, exist_ok=True)
    with ARQ.open("a", encoding="utf-8") as f:
        f.write(json.dumps(exp, ensure_ascii=False) + "\n")
    print(f"Registrado ({len(carregar())} experiências no total).")


def cmd_buscar(a):
    exps = carregar()
    if not exps:
        print("Memória vazia — nenhuma experiência anterior.")
        return
    cat, q = tokens(a.categoria), tokens(a.termos)
    pont = []
    for e in exps:
        tc = tokens(e.get("categoria"))
        tt = tokens(" ".join([e.get("pedido", ""), e.get("produto", ""), e.get("aprendizado", "")]))
        s = 3 * len(cat & tc) + len(q & tt)
        if s:
            pont.append((s, e))
    pont.sort(key=lambda x: (x[0], x[1].get("data", "")), reverse=True)  # mais relevante, depois mais recente
    if not pont:
        print("Nenhuma experiência parecida. Siga a estratégia padrão.")
        return
    for s, e in pont[: a.n]:
        print(f"## {e.get('data')} — {e.get('categoria')} — {e.get('produto')} (relevância {s}, "
              f"confiança {e.get('confianca', '?')})")
        if e.get("aprendizado"):
            print(f"Aprendizado: {e['aprendizado']}")
        boas = [x for x in e.get("estrategias", []) if x.get("sucesso")]
        ruins = [x for x in e.get("estrategias", []) if not x.get("sucesso")]
        if boas:
            print("Funcionou: " + "; ".join(f"{x['tipo']}@{x['fonte']} \"{x.get('consulta','')}\"" for x in boas))
        if ruins:
            print("Falhou: " + "; ".join(f"{x['tipo']}@{x['fonte']} ({x.get('nota','')})" for x in ruins))
        for f in e.get("fontes_falharam", []):
            print(f"Fonte bloqueada: {f.get('fonte')} — {f.get('motivo')}")
        for er in e.get("erros", []):
            print(f"Erro: {er.get('erro')} → correção: {er.get('correcao')}")
        print()


def cmd_placar(a):
    exps = carregar()
    if a.categoria:
        cat = tokens(a.categoria)
        exps = [e for e in exps if cat & tokens(e.get("categoria"))]
    stats = defaultdict(lambda: [0, 0, 0])  # sucessos, falhas, ofertas válidas
    for e in exps:
        for x in e.get("estrategias", []):
            k = (x.get("tipo"), x.get("fonte"))
            stats[k][0 if x.get("sucesso") else 1] += 1
            stats[k][2] += x.get("ofertas_validas") or 0
    if not stats:
        print("Sem dados de estratégias" + (f" para '{a.categoria}'" if a.categoria else "") + ".")
        return
    linhas = []
    for (tipo, fonte), (s, f, ov) in stats.items():
        n = s + f
        media = (1 + s) / (2 + s + f)
        amostra = random.betavariate(1 + s, 1 + f)
        linhas.append((amostra, tipo, fonte, n, media, ov / n))
    linhas.sort(reverse=True)
    print(f"Experiências consideradas: {len(exps)}\n")
    print("| Ordem sugerida | Estratégia | Fonte | Usos | Taxa de sucesso | Ofertas válidas/uso | Status |")
    print("|---|---|---|---|---|---|---|")
    for i, (_, tipo, fonte, n, media, ovm) in enumerate(linhas, 1):
        status = "confiável" if n >= MIN_N else "explorando"
        print(f"| {i} | {tipo} | {fonte} | {n} | {media:.0%} | {ovm:.1f} | {status} |")
    print("\nA ordem tem um componente aleatório (Thompson): estratégias com poucos usos às vezes "
          "sobem para serem testadas. Só trate como padrão o que estiver 'confiável'.")
    erros = defaultdict(int)
    for e in exps:
        for er in e.get("erros", []):
            erros[er.get("erro")] += 1
    rec = [(n, t) for t, n in erros.items() if n >= 2]
    if rec:
        print("\nErros recorrentes (candidatos a proposta de Nível 3):")
        for n, t in sorted(rec, reverse=True):
            print(f"- {n}× {t}")


def main():
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    b = sub.add_parser("buscar")
    b.add_argument("--categoria", default="")
    b.add_argument("--termos", default="")
    b.add_argument("-n", type=int, default=5)
    r = sub.add_parser("registrar")
    r.add_argument("arquivo", nargs="?")
    p = sub.add_parser("placar")
    p.add_argument("--categoria")
    sub.add_parser("modelo")
    a = ap.parse_args()
    if a.cmd == "modelo":
        print(json.dumps(MODELO, ensure_ascii=False, indent=2))
    else:
        {"buscar": cmd_buscar, "registrar": cmd_registrar, "placar": cmd_placar}[a.cmd](a)


if __name__ == "__main__":
    main()
