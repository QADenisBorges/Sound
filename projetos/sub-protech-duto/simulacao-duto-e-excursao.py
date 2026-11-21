import numpy as np
rho,c=1.18,343.0
Fs,Qes,Qms,Vas,Bl,Re,Le,Sd,Xmax=46.0,0.61,3.90,10e-3,13.0,3.7,1.63e-3,240e-4,8e-3
Cms=Vas/(rho*c*c*Sd*Sd); Mms=1/((2*np.pi*Fs)**2*Cms); Rms=2*np.pi*Fs*Mms/Qms
def model(f,Vb,Fb,QL=7.0,Ap=39.6e-4):
    w=2*np.pi*f; wb=2*np.pi*Fb
    Cab=Vb/(rho*c*c); Map=1/(wb*wb*Cab); Ral=QL/(wb*Cab)
    Zab=1/(1j*w*Cab+1/(1j*w*Map)+1/Ral)
    Zm=Rms+1j*w*Mms+1/(1j*w*Cms)
    Ze=Re+1j*w*Le
    u=Bl/(Ze*(Zm+Sd*Sd*Zab)+Bl*Bl)       # m/s por volt
    x=u/(1j*w)
    Ud=Sd*u; Up=-Ud*Zab/(1j*w*Map); U0=Ud+Up
    p=rho*w*np.abs(U0)/(2*np.pi*1.0)      # Pa rms por V rms, 1 m, meio espaço
    return np.abs(x)*np.sqrt(2), 20*np.log10(p/2e-5), np.abs(Up)/Ap*np.sqrt(2)
def lr4(f,fc): return (f/fc)**4/(1+(f/fc)**4) if fc else np.ones_like(f)
f=np.arange(15,121,0.25)
def vx(Vb,Fb,fc,fmin=20):
    x,_,_=model(f,Vb,Fb); m=f>=fmin
    xv=(x*lr4(f,fc))[m]; i=np.argmax(xv); return Xmax/xv[i], f[m][i]
print("validação Fb34.5 Vb27:", [(fc, round(vx(27e-3,34.5,fc)[0],1)) for fc in (35,30,28,25,22)])
for Fb in (34.5,32.5):
    print("\nFb",Fb)
    for fc in (0,25,30):
        for fmin in (20,25,30):
            v,fx=vx(27e-3,Fb,fc,fmin); print(f"  HPF {fc or 'nenhum'} | conteúdo >= {fmin} Hz: Xmax com {v:.1f} V (em {fx:.0f} Hz)")
# SPL máximo limitado por Xmax e por 32 V / 25 V
for name,Vb,Fb in (("atual 34,5",27e-3,34.5),("joelho 32,5",27e-3,32.5),("atual+manta 26,4L",26.4e-3,34.9)):
    print("\n",name)
    for fc,vlim in ((25,25.0),(30,32.0),(0,32.0)):
        row=[]
        for f0 in (25,30,35,40,50,60):
            ff=np.array([float(f0)]); x,spl,vp=model(ff,Vb,Fb); h=lr4(ff,fc)
            v=min(vlim, Xmax/(x[0]*h[0])) ; row.append(f"{f0}Hz {spl[0]+20*np.log10(v*h[0]):.1f}dB/{vp[0]*v*h[0]:.0f}m/s")
        print(f"  HPF {fc or 'nenhum'} teto {vlim} V:", " | ".join(row))
