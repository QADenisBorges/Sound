# Som do carro — frente ativa 2 vias + traseira + sub (equipamento que já possui)

Iniciado em 05/11/2026. Objetivo do usuário: qualidade, **palco sonoro excelente**, tocar bem em volume baixo e **tocar alto com segurança**, usando só o que já tem.

## Equipamento (tudo 4 Ω)
| Item | Qtde | Specs conhecidas | A confirmar |
|---|---|---|---|
| Pioneer AVH-A208BT | 1 | 3 pares RCA (F, R, SW); LPF/fase/nível do sub; HPF F/R; posição de audição | tensão RCA, faixas exatas (manual PT) |
| Taramps PRO 2.4BT + AUDIO | 1 | 2 entradas / 4 saídas, LR até 48 dB/oit, PEQ por saída, atraso 8 ms/saída, REM IN → REM OUT | — (`componentes/processadores.md`) |
| SounDigital SD800.4 EVO | 1 | 4 × 132 W @ 4 Ω; ponte 2 × 400 W @ 4 Ω; fusível 40 A; 10 mm² | versão EVO6 × EVO4.0 |
| Taramps TS 400x4 | 1 | 4 × 63 W @ 4 Ω; 4 × 100 W @ 2 Ω; ponte 2 × 200 W @ 4 Ω (site Taramps) | versão (V5/V6), fusível do manual |
| Snake ESV 200 (médio-grave) | 2 | 200 W RMS, 4 Ω (anúncios) | **tamanho (6" ou mais?)**, sensibilidade, Fs/Qts/Xmax |
| Selenium/JBL 6TR4A triaxial 6" | 2 | 60 W AES, 87 dB, Fs 69 Hz, Qts 1,05 (`alto-falantes.md`) | estado (borda, Re) |
| Tweeter Bravox | 2 | — | **modelo**, RMS, sensibilidade, Fs, se tem capacitor/crossover |
| Sub Protech Light 8" em caixa pronta | 1 | 450 W RMS, 84 dB, Fs 46 Hz, Xmax 8 mm | **4 Ω simples?** caixa selada ou dutada |

## Arquitetura proposta
```
AVH-A208BT ─ FL/FR (HPF OFF) ──► PRO 2.4 ─ S1/S2 Médio E/D ─► SD800.4 CH1/CH2 (132 W) ─► ESV 200 (portas dianteiras)
           │                              └ S3/S4 TW E/D ────► TS400x4 CH1/CH2 (63 W, ganho baixo) ─[C prot.]► Bravox (coluna A/painel)
           ├ RL/RR (HPF ~80–100 Hz) ─────────────────────────► TS400x4 CH3/CH4 (63 W) ─► 6TR4A (portas traseiras, preenchimento)
           └ SWL/SWR (LPF 80 Hz, fase, nível) ───────────────► SD800.4 CH3/CH4 ponte (400 W @ 4 Ω) ─► Sub 8"
REM: multimídia → REM IN do PRO 2.4 → REM OUT → REM dos dois módulos (liga depois do processador, sem estalo)
```

## Ajustes iniciais
| Via | HPF | LPF | Atraso | Ganho (tensão alvo, tom senoidal, falante desligado) |
|---|---|---|---|---|
| Médio ESV 200 | 80 Hz LR24 (subir p/ 100 se a porta vibrar) | 3,0 kHz LR24 (ajustar ao tweeter) | por medida de distância | 23 V (132 W) |
| Tweeter Bravox | 3,0–3,5 kHz LR24 (≥ 2× Fs do tweeter) | — | por medida | ≤ 8,9 V (20 W) — teto de segurança |
| Traseira 6TR4A | 80–100 Hz (multimídia) | — | — (sem atraso disponível) | 15,5 V (60 W); nível −6 a −10 dB vs frente |
| Sub | subsônico: **não há na multimídia** | 80 Hz | referência (0) | 40 V (400 W) |

## Histórico de decisões
- 2026-11-05: Arquitetura proposta com o equipamento existente; nenhum processador novo necessário. Pendências: modelo/tamanho dos ESV 200 e dos tweeters Bravox, caixa do sub (selada/dutada), carro e alternador. O PRO 2.4 e o SD800.4 saem do home theater 2.1 se o projeto seguir — confirmar com o usuário.
