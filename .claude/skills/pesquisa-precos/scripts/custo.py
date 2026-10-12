"""Custo total de aquisição e ranking de ofertas.

Uso:
    python custo.py ofertas.json [--cotacao-usd 5.40] [--icms 0.20] [--qtd-desejada 4]
    python custo.py --exemplo          # imprime um JSON de exemplo

Entrada: lista JSON de ofertas. Campos (só preco e loja são obrigatórios):
    produto, loja, vendedor, link
    preco          preço do anúncio em R$ (o conjunto, se for kit)
    qtd            unidades no anúncio (padrão 1)
    frete          R$; null = não confirmado (custo vira PROVISÓRIO); 0 = grátis confirmado
    desconto       R$ de cupom/desconto CONFIRMADO na página (padrão 0)
    internacional  true se vem do exterior (padrão false)
    imposto_incluso true se a página já mostra o preço com impostos (Remessa Conforme)
    preco_usd      valor em US$ do produto+frete, se o anúncio internacional estiver em dólar
    atende         atende aos requisitos obrigatórios? (padrão true)
    equivalente    é o mesmo produto/equivalente real? (padrão true)
    risco          "baixo" | "medio" | "alto"
    estado, garantia, prazo, pagamento, obs, verificado_em

Saída: tabela markdown ranqueada + destaques (mais barata, menor risco).
A regra de imposto de importação é uma ESTIMATIVA com parâmetros padrão
(vigentes até 2025 — conferir): até US$ 50 → II 20%; acima → II 60% com
dedução de US$ 20; ICMS "por dentro" sobre (valor + II). Prefira sempre o
total com impostos mostrado no checkout da plataforma.
"""
import argparse
import json
import sys

sys.stdout.reconfigure(encoding="utf-8")

RISCO_ORDEM = {"baixo": 0, "medio": 1, "médio": 1, "alto": 2, None: 1}

EXEMPLO = [
    {"produto": "Taramps TS 400x4", "loja": "Mercado Livre", "vendedor": "Taramps Loja Oficial",
     "preco": 389.90, "frete": 0, "desconto": 0, "risco": "baixo", "estado": "novo",
     "garantia": "1 ano fabricante", "link": "https://...", "verificado_em": "2026-10-05"},
    {"produto": "Taramps TS 400x4", "loja": "Shopee", "vendedor": "loja_x",
     "preco": 339.00, "frete": None, "risco": "medio", "estado": "novo", "link": "https://..."},
    {"produto": "Placa TPA3116 2x50W", "loja": "AliExpress", "vendedor": "Store Y",
     "preco": 0, "preco_usd": 12.5, "internacional": True, "imposto_incluso": False,
     "frete": 0, "risco": "medio", "link": "https://..."},
]


def brl(v):
    if v is None:
        return "?"
    s = f"{v:,.2f}"
    return "R$ " + s.replace(",", "X").replace(".", ",").replace("X", ".")


def imposto_importacao(valor_brl, valor_usd, cotacao, icms):
    """Retorna (imposto_total_brl, nota) — estimativa."""
    if valor_usd is None:
        if not cotacao:
            return None, "imposto não estimado: falta --cotacao-usd"
        valor_usd = valor_brl / cotacao
    if valor_brl is None or valor_brl == 0:
        if not cotacao:
            return None, "imposto não estimado: falta --cotacao-usd"
        valor_brl = valor_usd * cotacao
    if valor_usd <= 50:
        ii = valor_brl * 0.20
    else:
        ii = max(valor_brl * 0.60 - 20 * (valor_brl / valor_usd), 0)
    base = (valor_brl + ii) / (1 - icms)
    icms_v = base * icms
    return ii + icms_v, f"imposto ESTIMADO (II {ii:.2f} + ICMS {icms:.0%} {icms_v:.2f})"


def calcular(o, cotacao, icms):
    qtd = o.get("qtd") or 1
    preco = o.get("preco") or 0
    frete = o.get("frete")
    desconto = o.get("desconto") or 0
    notas = []
    provisorio = frete is None
    if provisorio:
        notas.append("frete não confirmado")
    imposto = 0.0
    if o.get("internacional") and not o.get("imposto_incluso"):
        usd = o.get("preco_usd")
        if preco == 0 and usd is not None and cotacao:
            preco = usd * cotacao
        base_brl = preco + (frete or 0)
        imp, nota = imposto_importacao(base_brl, usd, cotacao, icms)
        notas.append(nota)
        if imp is None:
            provisorio = True
        else:
            imposto = imp
    total = preco + (frete or 0) - desconto + imposto
    return {
        **o,
        "preco_calc": preco,
        "imposto": imposto,
        "total": total,
        "unitario": total / qtd,
        "provisorio": provisorio,
        "notas": notas,
    }


def ranquear(ofertas):
    validas = [o for o in ofertas if o.get("atende", True) and o.get("equivalente", True)]
    excluidas = [o for o in ofertas if o not in validas]
    # custo por unidade primeiro; risco desempata. Provisórias não passam à frente
    # de confirmadas com o mesmo valor.
    validas.sort(key=lambda o: (o["unitario"], RISCO_ORDEM.get(o.get("risco"), 1), o["provisorio"]))
    return validas, excluidas


def tabela(validas, n=None):
    cab = ("| # | Produto | Loja / vendedor | Preço | Frete | Imposto | Desconto | Total | Unit. "
           + (f"| Para {n} un. " if n else "") + "| Estado | Risco | Obs. | Link |")
    linhas = [cab, "|" + "---|" * (14 if n else 13)]
    for i, o in enumerate(validas, 1):
        total = brl(o["total"]) + (" *(provisório)*" if o["provisorio"] else "")
        frete = "grátis" if o.get("frete") == 0 else brl(o.get("frete"))
        obs = "; ".join([x for x in [o.get("garantia"), o.get("prazo"), o.get("pagamento"),
                                     o.get("obs")] + o["notas"] if x])
        linhas.append(
            f"| {i} | {o.get('produto','')} | {o.get('loja','')} / {o.get('vendedor','?')} "
            f"| {brl(o['preco_calc'])} | {frete} | {brl(o['imposto']) if o['imposto'] else '—'} "
            f"| {brl(o.get('desconto') or 0) if o.get('desconto') else '—'} | {total} "
            f"| {brl(o['unitario']) if (o.get('qtd') or 1) > 1 else '—'} "
            + (f"| {brl(o['unitario'] * n)}{' *(est.)*' if n % (o.get('qtd') or 1) else ''} " if n else "")
            + f"| {o.get('estado','?')} "
            f"| {o.get('risco','?')} | {obs} | {o.get('link','')} |")
    return "\n".join(linhas)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("arquivo", nargs="?")
    ap.add_argument("--cotacao-usd", type=float)
    ap.add_argument("--icms", type=float, default=0.20,
                    help="alíquota ICMS de importação do estado de destino (padrão 0.20 — conferir)")
    ap.add_argument("--qtd-desejada", type=int,
                    help="unidades que o usuário quer: adiciona coluna com o custo para N (frete "
                         "multiplicado junto; se N não for múltiplo do kit, marcado como estimativa)")
    ap.add_argument("--exemplo", action="store_true")
    a = ap.parse_args()
    if a.exemplo:
        print(json.dumps(EXEMPLO, ensure_ascii=False, indent=2))
        return
    raw = open(a.arquivo, encoding="utf-8").read() if a.arquivo else sys.stdin.read()
    ofertas = [calcular(o, a.cotacao_usd, a.icms) for o in json.loads(raw)]
    validas, excluidas = ranquear(ofertas)
    print(tabela(validas, a.qtd_desejada))
    if validas:
        barata = validas[0]
        confirmadas = [o for o in validas if not o["provisorio"]]
        seguras = sorted(validas, key=lambda o: (RISCO_ORDEM.get(o.get("risco"), 1), o["unitario"]))
        print(f"\nMais barata: #1 {barata.get('loja')} — {brl(barata['total'])}"
              + (" (PROVISÓRIO: confirmar frete/imposto)" if barata["provisorio"] else ""))
        if confirmadas and confirmadas[0] is not barata:
            c = confirmadas[0]
            print(f"Mais barata com custo confirmado: {c.get('loja')} — {brl(c['total'])}")
        s = seguras[0]
        if s is not barata:
            dif = s["unitario"] - barata["unitario"]
            print(f"Menor risco: {s.get('loja')} / {s.get('vendedor','?')} — {brl(s['total'])} "
                  f"({brl(dif)} a mais por unidade que a mais barata)")
    if excluidas:
        print("\nFora do ranking (não atende ou não é equivalente):")
        for o in excluidas:
            print(f"- {o.get('produto')} @ {o.get('loja')}: {o.get('obs','')}")


if __name__ == "__main__":
    main()
