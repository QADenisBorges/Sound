import math
Re=3.3; Qes=0.81; Qts=0.65; Qms=1/(1/Qts-1/Qes); a=math.sqrt(1+2.06/3.5)
fc=98*a; Qtc=Qts*a; Qmc=Qms*a; Qec=Qes*a; Rres=Re*Qmc/Qec
C=340e-6
def bw2hp(s,f0,Q=0.7071): w=2*math.pi*f0; return (s/w)**2/((s/w)**2+s/(w*Q)+1)
def bw2lp(s,f0,Q=0.7071): w=2*math.pi*f0; return 1/((s/w)**2+s/(w*Q)+1)
def lr4hp(s,f0): return bw2hp(s,f0)**2
def lr4lp(s,f0): return bw2lp(s,f0)**2
def box(s): return bw2hp(s,fc,Qtc)
def zd(s): w=2*math.pi*fc; return Re+Rres*(s/(w*Qmc))/((s/w)**2+s/(w*Qmc)+1)
def cap(s): Zc=1/(s*C); return zd(s)/(zd(s)+Zc)
cen={
 'A fase1 hoje: sat HP80+cap+caixa | sub LP80': (lambda s: bw2hp(s,80)*cap(s)*box(s), lambda s: bw2lp(s,80)),
 'B plano atual: sat Peace LR4 110+HP80+cap+caixa | sub LR4 110': (lambda s: lr4hp(s,110)*bw2hp(s,80)*cap(s)*box(s), lambda s: lr4lp(s,110)),
 'C: sat HP80+caixa, sem cap, sem HP no Peace | sub LR4 110': (lambda s: bw2hp(s,80)*box(s), lambda s: lr4lp(s,110)),
 'D: sat HP80+caixa | sub LR4 100': (lambda s: bw2hp(s,80)*box(s), lambda s: lr4lp(s,100)),
 'E: sat HP80+cap+caixa | sub LR4 110': (lambda s: bw2hp(s,80)*cap(s)*box(s), lambda s: lr4lp(s,110)),
}
fs=[40,50,63,80,100,110,125,140,160,200,250,315]
print('Z pico caixa JBL ~%.1f ohm em %.0f Hz; Qtc %.2f'%(Re+Rres,fc,Qtc))
for n,(hs,hl) in cen.items():
  print('\n'+n)
  for pol in (1,-1):
    print(' pol%+d '%pol+' '.join('%d:%+.1f'%(f,20*math.log10(abs(hs(1j*2*math.pi*f)+pol*hl(1j*2*math.pi*f)))) for f in fs))
  print(' sat   '+' '.join('%d:%+.1f'%(f,20*math.log10(abs(hs(1j*2*math.pi*f)))) for f in fs))
  print(' sub   '+' '.join('%d:%+.1f'%(f,20*math.log10(abs(hl(1j*2*math.pi*f)))) for f in fs))

print('\n==== extras')
cen2={
 'F: sat Peace BW2 110+HP80+caixa (sem cap) | sub LR4 110': (lambda s: bw2hp(s,110)*bw2hp(s,80)*box(s), lambda s: lr4lp(s,110)),
 'G: sat Peace LR4 110+HP80+caixa (sem cap) | sub LR4 110': (lambda s: lr4hp(s,110)*bw2hp(s,80)*box(s), lambda s: lr4lp(s,110)),
 'H: sat Peace BW2 120+HP80+caixa | sub LR4 120': (lambda s: bw2hp(s,120)*bw2hp(s,80)*box(s), lambda s: lr4lp(s,120)),
}
for n,(hs,hl) in cen2.items():
  print('\n'+n)
  for pol in (1,-1):
    print(' pol%+d '%pol+' '.join('%d:%+.1f'%(f,20*math.log10(abs(hs(1j*2*math.pi*f)+pol*hl(1j*2*math.pi*f)))) for f in fs))
  print(' sat   '+' '.join('%d:%+.1f'%(f,20*math.log10(abs(hs(1j*2*math.pi*f)))) for f in fs))
# excursao: 1W, 2pi, Sd 50cm2, x relativo
Sd=0.005
for f in (80,100,125,160,200):
  s=1j*2*math.pi*f
  spl=87+20*math.log10(abs(box(s)))
  p=20e-6*10**(spl/20)
  x=p*math.sqrt(2)*2*math.pi/(1.2*(2*math.pi*f)**2*Sd)
  print('f %d: SPL1W %.1f  x_pico %.2f mm @1W ; @60W %.1f mm'%(f,spl,x*1000,x*1000*math.sqrt(60)))
