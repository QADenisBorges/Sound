# Som do carro — frente ativa 2 vias + traseira + sub (equipamento que já possui)

Iniciado em 05/11/2026. Objetivo do usuário: qualidade, **palco sonoro excelente**, tocar bem em volume baixo e **tocar alto com segurança**, usando só o que já tem.

## Equipamento (4 Ω, exceto o tweeter: ~2 Ω)
| Item | Qtde | Specs conhecidas | A confirmar |
|---|---|---|---|
| Pioneer AVH-A208BT | 1 | 3 pares RCA (F, R, SW); LPF/fase/nível do sub; HPF F/R; posição de audição | tensão RCA, faixas exatas (manual PT) |
| Taramps PRO 2.4BT + AUDIO | 1 | 2 entradas / 4 saídas, LR até 48 dB/oit, PEQ por saída, atraso 8 ms/saída, REM IN → REM OUT | — (`componentes/processadores.md`) |
| SounDigital SD800.4 EVO | 1 | 4 × 132 W @ 4 Ω; ponte 2 × 400 W @ 4 Ω; fusível 40 A; 10 mm² | versão EVO6 × EVO4.0 |
| Taramps TS 400x4 | 1 | 4 × 63 W @ 4 Ω; 4 × 100 W @ 2 Ω; ponte 2 × 200 W @ 4 Ω (site Taramps) | versão (V5/V6), fusível do manual |
| Snake ESV 200 (médio-grave) | 2 | **6"** (confirmado), 200 W RMS, 4 Ω | sensibilidade, Fs/Qts/Xmax |
| Selenium/JBL 6TR4A triaxial 6" | 2 | 60 W AES, 87 dB, Fs 69 Hz, Qts 1,05 (`alto-falantes.md`) | estado (borda, Re) |
| Tweeter Bravox | 2 | ~30 W RMS cada (usuário, "provavelmente"); **~2 Ω no multímetro** (sem capacitor em série) | modelo, Fs; descontar resistência das pontas |
| Sub Protech Light 8" em caixa pronta | 1 | 450 W RMS, 84 dB, Fs 46 Hz, Xmax 8 mm; **bobina dupla, caixa dutada** | leitura nos terminais da caixa (ligação das bobinas); Fb do duto |

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
| Médio ESV 200 | 80 Hz LR24 (subir p/ 100 se a porta vibrar) | 3,5–4 kHz LR24 (ajustar ao tweeter) | por medida de distância | 23 V (132 W) |
| Tweeter Bravox (~2 Ω, capacitor 33 µF em série) | 3,5–4 kHz LR24 (≥ 2× Fs do tweeter) | — | por medida | ≤ 6,3 V (20 W @ 2 Ω) — teto de segurança |
| Traseira 6TR4A | 80–100 Hz (multimídia) | — | — (sem atraso disponível) | 15,5 V (60 W); nível −6 a −10 dB vs frente |
| Sub | subsônico: **não há na multimídia** | 80 Hz | referência (0) | 40 V (400 W, ponte, se fechar 4 Ω nos terminais) |

## Histórico de decisões
- 2026-11-05: Arquitetura proposta com o equipamento existente; nenhum processador novo necessário. Pendências: modelo/tamanho dos ESV 200 e dos tweeters Bravox, caixa do sub (selada/dutada), carro e alternador. O PRO 2.4 e o SD800.4 saem do home theater 2.1 se o projeto seguir — confirmar com o usuário.
- 2026-11-05: Usuário confirmou: ESV 200 = 6"; tweeter ~30 W; sub **bobina dupla, caixa dutada, ~2 Ω** no multímetro (lido como as duas bobinas em paralelo); carro **Fiat Grand Siena, elétrica original**; PRO 2.4 e SD800.4 **saem do home theater** para o carro.
  - Consequência: **sub não pode ir em ponte com 2 Ω** (mínimo 4 Ω em ponte). Se cada bobina for 4 Ω: uma bobina por canal (SD800.4 CH3 e CH4, 4 Ω cada, 2 × 132 W = 264 W, mesmo sinal por Y da saída SW). Se cada bobina for 2 Ω: bobinas em série = 4 Ω → ponte 400 W. Medir cada bobina separada.
  - Caixa dutada sem subsônico (a multimídia não tem, o PRO 2.4 está com as 4 saídas ocupadas): reforço de grave desligado, achar a Fb pela varredura e conferir a excursão abaixo dela antes de subir volume.
  - Elétrica: ~780 W RMS nominais → ~72 A máx. senoidal, ~9–24 A com música; cabe na elétrica original em volume normal; em volume alto com farol/ar ligados, monitorar tensão (voltímetro) — abaixo de ~12 V, baixar.
- 2026-11-05 (correção do usuário): os **~2 Ω eram do tweeter**, não do sub. Anula a conclusão anterior sobre o sub não poder ir em ponte. Sub: medir nos terminais da caixa — ~3,2–3,6 Ω = 4 Ω (ponte 400 W, como já usava); ~6,5–7,2 Ω = 4+4 em série, 8 Ω (uma bobina por canal, 2 × 132 W); ~1,6–1,8 Ω = paralelo (religar em série).
  - Tweeter ~2 Ω: TS400x4 aceita 2 Ω por canal (até 100 W). Ganho alvo 20 W @ 2 Ω = **6,3 V**. Capacitor de proteção recalculado: **33 µF** (≈ 1,9 kHz em 2,5 Ω); corte do DSP em 3,5–4 kHz.
- 2026-11-05: Tweeter medido: pontas 1,3 Ω, leitura 3,2 Ω → **Re ≈ 1,9 Ω** (nominal provável ~2–2,5 Ω). Projeto mantido para o pior caso de 2 Ω: ganho ≤ 6,3 V, capacitor 33 µF. Se na verdade for 4 Ω, os mesmos valores só ficam mais conservadores (10 W; capacitor em ~1,2 kHz). Pontas com 1,3 Ω indicam pontas/bateria ruins no multímetro — leitura com margem de erro.
- 2026-11-05: Pergunta sobre "som de todos os lados com palco": objetivo definido como **palco na frente + ambiência** (traseira como preenchimento, 6–10 dB abaixo, HPF 100–150 Hz). Limitação desta arquitetura: a traseira vem direto da multimídia, sem atraso (as 4 saídas do PRO 2.4 estão na frente), então não dá para usar o efeito de precedência (traseira 10–20 ms atrasada). Alternativa avaliada: tweeter passivo (capacitor) no canal do médio para liberar 2 saídas do PRO 2.4 para a traseira com atraso — perde ajuste independente do tweeter. Mantida a frente ativa; reavaliar depois de ouvir.
