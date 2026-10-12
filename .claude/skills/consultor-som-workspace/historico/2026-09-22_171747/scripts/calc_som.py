#!/usr/bin/env python3
"""Calculadora de som: impedância, corrente, bitola de cabo, duto, SPL e ganho.

Uso: python calc_som.py <comando> [opções]   (python calc_som.py <comando> -h para ajuda)
"""
import argparse
import math
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

RHO = {"cobre": 0.0172, "cca": 0.028}  # ohm·mm²/m
BITOLAS_MM2 = [0.75, 1.0, 1.5, 2.5, 4, 6, 10, 16, 21.2, 25, 33.6, 35, 50, 53.5, 70, 95]
AWG = {53.5: "0 AWG", 33.6: "2 AWG", 21.2: "4 AWG", 13.3: "6 AWG", 8.4: "8 AWG", 5.3: "10 AWG"}


def fmt(x, casas=2):
    return f"{x:,.{casas}f}".replace(",", "X").replace(".", ",").replace("X", ".")


def impedancia(a):
    if a.serie:
        z = sum(a.serie)
        print(f"Série {a.serie}: {fmt(z)} Ω")
    if a.paralelo:
        z = 1 / sum(1 / v for v in a.paralelo)
        print(f"Paralelo {a.paralelo}: {fmt(z)} Ω")
    if a.dvc:
        bob, n = a.dvc
        n = int(n)
        print(f"{n} sub(s) de bobina dupla {fmt(bob,1)}+{fmt(bob,1)} Ω — combinações possíveis:")
        por_sub = {"bobinas em série": bob * 2, "bobinas em paralelo": bob / 2}
        for nome, zs in por_sub.items():
            if n == 1:
                print(f"  {nome}: {fmt(zs)} Ω")
            else:
                print(f"  {nome}, subs em paralelo: {fmt(zs / n)} Ω | subs em série: {fmt(zs * n)} Ω")
    if not (a.serie or a.paralelo or a.dvc):
        print("Informe --serie, --paralelo ou --dvc")


def corrente(a):
    i = a.rms / (a.tensao * a.eficiencia)
    print(f"Potência de saída: {fmt(a.rms,0)} W RMS | alimentação {fmt(a.tensao,1)} V | eficiência {fmt(a.eficiencia*100,0)}%")
    print(f"Corrente máxima contínua (senoidal, potência cheia): {fmt(i,1)} A")
    print(f"Corrente média típica com música (1/8 a 1/3): {fmt(i/8,1)} – {fmt(i/3,1)} A")
    print("Dimensione cabo e fusível pela corrente máxima; alternador/bateria pela média + consumo do carro.")


def cabo(a):
    rho = RHO[a.material]
    area = rho * a.comprimento * a.corrente / a.queda
    comercial = next((b for b in BITOLAS_MM2 if b >= area), None)
    print(f"Corrente {fmt(a.corrente,1)} A | comprimento do circuito {fmt(a.comprimento,1)} m | queda máx {fmt(a.queda,2)} V | {a.material}")
    print(f"Área mínima: {fmt(area)} mm²")
    if comercial:
        extra = f" ({AWG[comercial]})" if comercial in AWG else ""
        print(f"Bitola comercial sugerida: {fmt(comercial,1)} mm²{extra}")
    else:
        print("Acima de 95 mm² — use cabos em paralelo ou reduza o comprimento/corrente.")
    if a.fusivel:
        print("Fusível: escolha o valor que protege o cabo escolhido (≤ capacidade do cabo) e ≥ corrente máxima do sistema.")


def cabo_falante(a):
    rho = RHO[a.material]
    rmax = 0.05 * a.impedancia
    area = rho * 2 * a.comprimento / rmax
    comercial = next((b for b in BITOLAS_MM2 if b >= area), None)
    print(f"Falante {fmt(a.impedancia,1)} Ω, {fmt(a.comprimento,1)} m de distância (ida e volta = {fmt(2*a.comprimento,1)} m)")
    print(f"Área mínima (resistência ≤ 5% da impedância): {fmt(area)} mm² → sugestão {fmt(comercial,1)} mm²")


def duto(a):
    k = a.k
    lv = (23562.5 * a.diametro ** 2 * a.n) / (a.fb ** 2 * a.volume) - k * a.diametro
    area_cm2 = a.n * math.pi * (a.diametro / 2) ** 2
    vol_duto_l = area_cm2 * max(lv, 0) / 1000
    print(f"Caixa {fmt(a.volume,1)} L líquidos | sintonia {fmt(a.fb,1)} Hz | {a.n} duto(s) de {fmt(a.diametro,1)} cm")
    if lv <= 0:
        print("Comprimento negativo: duto largo demais para esse volume/sintonia. Reduza o diâmetro.")
        return
    print(f"Comprimento de cada duto: {fmt(lv,1)} cm (k={k})")
    print(f"Área total de duto: {fmt(area_cm2,1)} cm² | volume ocupado pelos dutos: {fmt(vol_duto_l,2)} L (descontar do volume bruto)")
    if a.sd and a.xmax:
        # velocidade de pico no duto na Fb (aprox.): v = 2π·f·Sd·Xmax / Aduto
        v = 2 * math.pi * a.fb * (a.sd / 1e4) * (a.xmax / 1e3) / (area_cm2 / 1e4)
        aviso = "OK" if v < 17 else "ALTA — risco de ruído de sopro, aumente a área do duto"
        print(f"Velocidade de pico estimada no duto (falante em Xmax): {fmt(v,1)} m/s → {aviso}")
    if lv > 100:
        print("Duto muito longo: considere diâmetro menor ou duto em fenda dobrado; verifique se cabe na caixa.")


def spl(a):
    s = a.sensibilidade + 10 * math.log10(a.potencia) - 20 * math.log10(a.distancia)
    s_tot = s + 10 * math.log10(a.caixas) if a.caixas > 1 else s
    print(f"Sensibilidade {fmt(a.sensibilidade,1)} dB/1W/1m | {fmt(a.potencia,0)} W | {fmt(a.distancia,1)} m")
    print(f"SPL estimado por caixa (campo livre): {fmt(s,1)} dB")
    if a.caixas > 1:
        print(f"Com {a.caixas} caixas (soma de energia): ~{fmt(s_tot,1)} dB")
    print("Em ambiente fechado a queda com a distância é menor; em carro, o ganho de cabine soma no grave.")


def ganho(a):
    v = math.sqrt(a.rms * a.impedancia)
    print(f"{fmt(a.rms,0)} W RMS em {fmt(a.impedancia,1)} Ω → tensão alvo na saída: {fmt(v,1)} V AC (medir com tom senoidal, falantes desconectados)")


def autonomia(a):
    h = a.ah * a.tensao * 0.8 / a.consumo
    print(f"Bateria {fmt(a.ah,0)} Ah @ {fmt(a.tensao,1)} V, consumo médio {fmt(a.consumo,0)} W → ~{fmt(h,1)} h (usando 80% da capacidade)")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = p.add_subparsers(dest="cmd", required=True)

    s = sp.add_parser("impedancia", help="série, paralelo e bobina dupla")
    s.add_argument("--serie", type=float, nargs="+")
    s.add_argument("--paralelo", type=float, nargs="+")
    s.add_argument("--dvc", type=float, nargs=2, metavar=("OHMS_POR_BOBINA", "N_SUBS"))
    s.set_defaults(f=impedancia)

    s = sp.add_parser("corrente", help="corrente de alimentação de um amplificador")
    s.add_argument("--rms", type=float, required=True)
    s.add_argument("--tensao", type=float, default=12.6)
    s.add_argument("--eficiencia", type=float, default=0.8)
    s.set_defaults(f=corrente)

    s = sp.add_parser("cabo", help="bitola de cabo de alimentação por queda de tensão")
    s.add_argument("--corrente", type=float, required=True)
    s.add_argument("--comprimento", type=float, required=True, help="metros do circuito que conduz a corrente")
    s.add_argument("--queda", type=float, default=0.5, help="queda de tensão máxima (V)")
    s.add_argument("--material", choices=RHO, default="cobre")
    s.add_argument("--fusivel", action="store_true")
    s.set_defaults(f=cabo)

    s = sp.add_parser("cabo-falante", help="bitola de cabo de falante")
    s.add_argument("--impedancia", type=float, required=True)
    s.add_argument("--comprimento", type=float, required=True, help="distância amplificador→falante (m)")
    s.add_argument("--material", choices=RHO, default="cobre")
    s.set_defaults(f=cabo_falante)

    s = sp.add_parser("duto", help="comprimento de duto circular")
    s.add_argument("--volume", type=float, required=True, help="volume líquido (L)")
    s.add_argument("--fb", type=float, required=True, help="sintonia (Hz)")
    s.add_argument("--diametro", type=float, required=True, help="diâmetro interno (cm)")
    s.add_argument("--n", type=int, default=1, help="número de dutos")
    s.add_argument("--k", type=float, default=0.732, help="correção de ponta")
    s.add_argument("--sd", type=float, help="área do cone Sd (cm²) para estimar velocidade")
    s.add_argument("--xmax", type=float, help="Xmax (mm) para estimar velocidade")
    s.set_defaults(f=duto)

    s = sp.add_parser("spl", help="nível de pressão sonora estimado")
    s.add_argument("--sensibilidade", type=float, required=True)
    s.add_argument("--potencia", type=float, required=True)
    s.add_argument("--distancia", type=float, default=1)
    s.add_argument("--caixas", type=int, default=1)
    s.set_defaults(f=spl)

    s = sp.add_parser("ganho", help="tensão alvo para regular ganho")
    s.add_argument("--rms", type=float, required=True)
    s.add_argument("--impedancia", type=float, required=True)
    s.set_defaults(f=ganho)

    s = sp.add_parser("autonomia", help="autonomia de bateria")
    s.add_argument("--ah", type=float, required=True)
    s.add_argument("--tensao", type=float, default=12)
    s.add_argument("--consumo", type=float, required=True, help="consumo médio (W)")
    s.set_defaults(f=autonomia)

    a = p.parse_args()
    a.f(a)


if __name__ == "__main__":
    main()
