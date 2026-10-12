# Selenium 6TR4A (ficha oficial rev. 03/06) em caixa selada + crossover do 2.1
# Rodar: python simulacao-6tr4a.py
import math
Fs, Qts, Vas = 69, 1.05, 12.53
def bw2hp(s,f0,Q=0.7071): w=2*math.pi*f0; return (s/w)**2/((s/w)**2+s/(w*Q)+1)
def bw2lp(s,f0,Q=0.7071): w=2*math.pi*f0; return 1/((s/w)**2+s/(w*Q)+1)
def lr4lp(s,f0): return bw2lp(s,f0)**2
def caixa(vb):
    a=math.sqrt(1+Vas/vb); return Fs*a, Qts*a
fs=[40,50,63,80,90,100,110,125,140,160,200,250]
for vb in (6, 10, 15, 20):
    fc,qtc=caixa(vb)
    print(f'\n=== Caixa {vb} L líquidos: Fc {fc:.0f} Hz, Qtc {qtc:.2f}')
    for fx in (90, 100, 110):
        sat=lambda s: bw2hp(s,fx)*bw2hp(s,80)*bw2hp(s,fc,qtc)   # processador BW2 + chave HP80 do módulo + caixa
        sub=lambda s: lr4lp(s,fx)
        for pol in (1,-1):
            print(f' corte {fx} pol{pol:+d} '+' '.join('%d:%+.1f'%(f,20*math.log10(abs(sat(1j*2*math.pi*f)+pol*sub(1j*2*math.pi*f)))) for f in fs))
