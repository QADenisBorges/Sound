#!/usr/bin/env python3
"""Calculadora de som: impedância, corrente, bitola de cabo, duto, SPL, ganho e excursão.

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
    sens = a.sensibilidade
    if a.ref == "2.83v":
        if not a.impedancia:
            print("Com --ref 2.83v informe --impedancia (nominal da caixa) para converter para 1 W.")
            return
        # 2,83 V em Z ohms entrega 2,83²/Z W (8 Ω → 1 W; 4 Ω → 2 W)
        p_ref = 2.83 ** 2 / a.impedancia
        sens = a.sensibilidade - 10 * math.log10(p_ref)
        print(f"{fmt(a.sensibilidade,1)} dB/2,83V/1m em {fmt(a.impedancia,1)} Ω = {fmt(p_ref,2)} W de referência "
              f"→ {fmt(sens,1)} dB/1W/1m (sensibilidade real, comparável entre caixas)")
    s = sens + 10 * math.log10(a.potencia) - 20 * math.log10(a.distancia)
    s_tot = s + 10 * math.log10(a.caixas) if a.caixas > 1 else s
    print(f"Sensibilidade {fmt(sens,1)} dB/1W/1m | {fmt(a.potencia,0)} W | {fmt(a.distancia,1)} m")
    print(f"SPL estimado por caixa (campo livre): {fmt(s,1)} dB")
    if a.caixas > 1:
        print(f"Com {a.caixas} caixas (soma de energia): ~{fmt(s_tot,1)} dB")
    print("Em ambiente fechado a queda com a distância é menor; em carro, o ganho de cabine soma no grave.")


def ganho(a):
    v = math.sqrt(a.rms * a.impedancia)
    print(f"{fmt(a.rms,0)} W RMS em {fmt(a.impedancia,1)} Ω → tensão alvo na saída: {fmt(v,1)} V AC (medir com tom senoidal, falantes desconectados)")


def _passa_alta(s, filtro, fc):
    """Resposta complexa do passa-alta ativo. LR4 = dois Butterworth de 2ª ordem em cascata (Q 0,707 cada)."""
    w = 2 * math.pi * fc

    def sec2(q):
        return (s / w) ** 2 / ((s / w) ** 2 + s / (w * q) + 1)

    def sec1():
        return (s / w) / (s / w + 1)

    return {
        "bw1": lambda: sec1(),
        "bw2": lambda: sec2(math.sqrt(2) / 2),
        "bw3": lambda: sec2(1.0) * sec1(),
        "bw4": lambda: sec2(0.5412) * sec2(1.3066),
        "lr2": lambda: sec2(0.5),
        "lr4": lambda: sec2(math.sqrt(2) / 2) ** 2,
    }[filtro]()


def excursao(a):
    if a.filtro and not a.corte:
        print("Com --filtro informe --corte (Hz).")
        return
    rho_c2 = 1.18 * 343.0 ** 2
    sd = a.sd / 1e4
    cms = (a.vas / 1000) / (rho_c2 * sd ** 2)
    mms = a.mms / 1000 if a.mms else 1 / ((2 * math.pi * a.fs) ** 2 * cms)
    rms = 2 * math.pi * a.fs * mms / a.qms
    k = 1 / cms + (rho_c2 * sd ** 2 / (a.volume / 1000) if a.volume else 0)
    amort = rms + a.bl ** 2 / a.re
    if a.volume:
        print(f"Caixa selada de {fmt(a.volume,1)} L: Fc ≈ {fmt(math.sqrt(k / mms) / (2 * math.pi),0)} Hz, "
              f"Qtc ≈ {fmt(math.sqrt(k * mms) / amort,2)}")
    else:
        print("Sem caixa informada: baffle infinito/porta (para caixa dutada use o WinISD; abaixo da Fb a excursão dispara)")
    filtro = f"{a.filtro.upper()} em {fmt(a.corte,0)} Hz" if a.filtro else "sem filtro"
    v1 = math.sqrt(a.impedancia)  # 1 W na impedância nominal

    def x_pico(f, v_rms):  # mm, usando a tensão de PICO (V_RMS × √2), porque Xmax é pico
        s = 1j * 2 * math.pi * f
        z = amort + s * mms + k / s
        x = abs(a.bl * v_rms * math.sqrt(2) / a.re / (z * s))
        if a.filtro:
            x *= abs(_passa_alta(s, a.filtro, a.corte))
        return x * 1e3

    freqs = [10 * 100 ** (i / 600) for i in range(601)]  # 10 Hz a 1 kHz
    x1, f1 = max((x_pico(f, v1), f) for f in freqs)
    print(f"Filtro: {filtro} | pior frequência ≈ {fmt(f1,0)} Hz")
    print(f"Excursão de pico com 1 W ({fmt(v1,2)} V RMS em {fmt(a.impedancia,1)} Ω): {fmt(x1,2)} mm")
    if a.xmax:
        p = (a.xmax / x1) ** 2
        print(f"Xmax de {fmt(a.xmax,2)} mm (pico) atingido com ~{fmt(p,1)} W ({fmt(math.sqrt(p * a.impedancia),1)} V RMS) nessa frequência")
    v = a.tensao if a.tensao else (math.sqrt(a.potencia * a.impedancia) if a.potencia else None)
    if v:
        xv = x1 * v / v1
        rel = f" = {fmt(xv / a.xmax,1)} × Xmax" if a.xmax else ""
        print(f"Com {fmt(v,1)} V RMS ({fmt(v * v / a.impedancia,0)} W): {fmt(xv,2)} mm de pico{rel}")
    print("Xmax é deslocamento de pico: comparar excursão RMS com ele superestima em 2× a potência segura.")


def crossover(a):
    w = 2 * math.pi * a.freq
    z = a.impedancia
    print(f"Crossover passivo {a.ordem}ª ordem em {fmt(a.freq,0)} Hz, falante de {fmt(z,1)} Ω (use a impedância real do falante nessa frequência, se souber)")
    if a.ordem == 1:
        print(f"  Passa-baixa (woofer): indutor em série {fmt(z / w * 1e3, 3)} mH")
        print(f"  Passa-alta (tweeter): capacitor em série {fmt(1 / (w * z) * 1e6, 2)} µF")
        print("  Polaridade: ambos normais.")
    else:
        q = {"butterworth": math.sqrt(2) / 2, "lr": 0.5}[a.tipo]
        # filtro de 2ª ordem carregado pelo falante: L = Z/(ω·Q), C = Q/(ω·Z)
        l = z / (w * q) * 1e3
        c = q / (w * z) * 1e6
        print(f"  Tipo {a.tipo}: indutor série {fmt(l,3)} mH + capacitor paralelo {fmt(c,2)} µF (woofer)")
        print(f"                capacitor série {fmt(c,2)} µF + indutor paralelo {fmt(l,3)} mH (tweeter)")
        print("  Polaridade: tweeter INVERTIDO (2ª ordem defasa 180° no corte).")
    print("  Arredonde para valores comerciais próximos; capacitor de poliéster/polipropileno, indutor com núcleo de ar.")


def lpad(a):
    k = 10 ** (-a.db / 20)
    rs = a.impedancia * (1 - k)
    rp = a.impedancia * k / (1 - k)
    print(f"Atenuador (L-pad) de {fmt(a.db,1)} dB para falante de {fmt(a.impedancia,1)} Ω:")
    print(f"  Resistor em série: {fmt(rs,2)} Ω | resistor em paralelo com o falante: {fmt(rp,2)} Ω (use resistores de fio de 10 W)")


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
    s.add_argument("--ref", choices=["1w", "2.83v"], default="1w",
                   help="referência da sensibilidade: 1w (dB/1W/1m) ou 2.83v (dB/2,83V/1m, exige --impedancia)")
    s.add_argument("--impedancia", type=float, help="impedância nominal da caixa (Ω), usada com --ref 2.83v")
    s.set_defaults(f=spl)

    s = sp.add_parser("ganho", help="tensão alvo para regular ganho")
    s.add_argument("--rms", type=float, required=True)
    s.add_argument("--impedancia", type=float, required=True)
    s.set_defaults(f=ganho)

    s = sp.add_parser("excursao", help="excursão de pico × Xmax (caixa selada ou sem caixa), com passa-alta ativo")
    s.add_argument("--re", type=float, required=True, help="resistência da bobina (Ω)")
    s.add_argument("--bl", type=float, required=True, help="fator de força Bl (T·m)")
    s.add_argument("--sd", type=float, required=True, help="área do cone (cm²)")
    s.add_argument("--fs", type=float, required=True, help="ressonância ao ar livre (Hz)")
    s.add_argument("--vas", type=float, required=True, help="Vas (L)")
    s.add_argument("--qms", type=float, default=4.0, help="Qms (padrão 4; pouco influi)")
    s.add_argument("--mms", type=float, help="Mms (g); se omitido, sai de Fs e Vas")
    s.add_argument("--volume", type=float, help="volume líquido da caixa selada (L); omitido = sem caixa")
    s.add_argument("--xmax", type=float, help="Xmax (mm, pico)")
    s.add_argument("--filtro", choices=["bw1", "bw2", "bw3", "bw4", "lr2", "lr4"], help="passa-alta ativo")
    s.add_argument("--corte", type=float, help="frequência do passa-alta (Hz)")
    s.add_argument("--impedancia", type=float, default=4, help="impedância nominal, para converter W em V (padrão 4)")
    s.add_argument("--potencia", type=float, help="potência a avaliar (W)")
    s.add_argument("--tensao", type=float, help="tensão a avaliar (V RMS), ex.: o alvo do ganho")
    s.set_defaults(f=excursao)

    s = sp.add_parser("crossover", help="valores de crossover passivo (1ª ou 2ª ordem)")
    s.add_argument("--freq", type=float, required=True, help="frequência de corte (Hz)")
    s.add_argument("--impedancia", type=float, required=True)
    s.add_argument("--ordem", type=int, choices=[1, 2], default=2)
    s.add_argument("--tipo", choices=["butterworth", "lr"], default="butterworth", help="só para 2ª ordem")
    s.set_defaults(f=crossover)

    s = sp.add_parser("lpad", help="atenuador L-pad para tweeter")
    s.add_argument("--db", type=float, required=True, help="atenuação desejada (dB)")
    s.add_argument("--impedancia", type=float, required=True)
    s.set_defaults(f=lpad)

    s = sp.add_parser("autonomia", help="autonomia de bateria")
    s.add_argument("--ah", type=float, required=True)
    s.add_argument("--tensao", type=float, default=12)
    s.add_argument("--consumo", type=float, required=True, help="consumo médio (W)")
    s.set_defaults(f=autonomia)

    a = p.parse_args()
    a.f(a)


if __name__ == "__main__":
    main()
