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
- 2026-11-05: Usuário quer **envolvimento com música**. Isso exige traseira atrasada (efeito de precedência), que a arquitetura atual não permite. Proposta: **2º processador Taramps PRO 2.4BT** (sem "+AUDIO") dedicado a traseira + sub:
  - Entradas A/B ← multimídia RL/RR (HPF da multimídia desligado; fader vira controle geral de ambiência). Saída SW da multimídia não usada.
  - Saídas 1/2 → TS400x4 CH3/CH4 → 6TR4A: HPF 120–150 Hz, atraso 8 ms (máx. do aparelho; + ~3 ms da distância física), nível −6 a −10 dB.
  - Saídas 3/4 (A+B) → SD800.4 CH3/CH4 em ponte → sub: LPF 80 Hz + **subsônico ~0,8 × Fb, 24 dB/oit** (resolve o risco da caixa dutada).
  - Mesmo modelo nos dois processadores = mesma latência, alinhamento previsível entre frente, traseira e sub.
  - Alternativa gratuita avaliada e descartada: tweeter no mesmo sinal do médio (Y) para liberar 2 saídas — perde LPF do médio e ajuste do tweeter; tweeter de 2 Ω em paralelo com médio no mesmo canal ficaria abaixo de 2 Ω.
  - Aguardando: o usuário decidir a compra; cotar com `pesquisa-precos` (referência de 28/09/2026: R$ 190–235).
- 2026-11-05: Submenus da multimídia analisados (ver `componentes/multimidia.md`). A multimídia tem **alinhamento de tempo por saída (FL, FR, RL, RR, Sub, passo 2,5 cm)** → a traseira pode ser atrasada nela mesma, sem 2º processador, se a distância máxima permitir ~8–10 ms (≥ ~300 cm de diferença). **Não tem subsônico.** Decisão sobre o 2º PRO 2.4 fica para depois do teste: mover o RCA do sub para SWL/SWR, mudar a saída traseira para "Traseiro", conferir os campos RL/RR e a distância máxima.
  - Configuração atual com buraco 63–200 Hz (sub LPF 63, frente HPF 200) e EQ Sertanejo (+6 a +9 dB) — corrigir.

## Plano de ligações (05/11/2026) — configuração antiga da multimídia desconsiderada
Base: 1 PRO 2.4 (frente ativa) + multimídia (traseira com atraso pelo alinhamento de tempo, sub com LPF/fase). 2º PRO 2.4 só se o teste de distância máxima da traseira falhar (< ~300 cm de diferença) ou se quiser subsônico.

### Onde fica cada coisa
- Portas dianteiras: Snake ESV 200 (furação original; conferir aro/adaptador e profundidade).
- Coluna A ou cantos do painel: tweeters Bravox, apontados para o centro do carro, com capacitor 33 µF em série.
- Traseira (porta ou tampão, onde houver furação original): Selenium/JBL 6TR4A.
- Porta-malas, numa placa fixa e ventilada: caixa do sub, SD800.4, TS400x4, PRO 2.4, bloco distribuidor.

### Sinal (RCA)
| De | Para | Cabo |
|---|---|---|
| Multimídia FL / FR | PRO 2.4 entrada A / B | RCA ~5 m |
| Multimídia RL / RR | TS400x4 entrada CH3 / CH4 | RCA ~5 m |
| Multimídia SWL / SWR | SD800.4 entrada CH3 / CH4 | RCA ~5 m |
| PRO 2.4 saída 1 / 2 | SD800.4 entrada CH1 / CH2 | RCA curto |
| PRO 2.4 saída 3 / 4 | TS400x4 entrada CH1 / CH2 | RCA curto |
SD800.4 fica com as 4 entradas ligadas (exigência do manual). Chaves X-OVER do SD800.4 em **F**; crossover do TS400x4 (se tiver) em full/off.

### Falantes
| Módulo / canal | Falante | Cabo |
|---|---|---|
| SD800.4 CH1 / CH2 | ESV 200 esq. / dir. | 2,5 mm² |
| SD800.4 ponte CH4 ⊕ / CH3 ⊖ | Sub (se medir ~3,2–3,6 Ω nos terminais) | 2,5 mm² |
| TS400x4 CH1 / CH2 | Tweeter esq. / dir. com **divisor HP5 do kit em série** (proteção) | 1,5 mm² |
| TS400x4 CH3 / CH4 | 6TR4A esq. / dir. | 1,5 mm² |

### Alimentação
Bateria + → fusível principal 80 A (até 30 cm da bateria) → cabo 16 mm² → bloco no porta-malas → SD800.4 (fusível 40 A, 10 mm²), TS400x4 (fusível do manual, 10 mm²), PRO 2.4 (1,5 mm², fusível pequeno). Terra: um ponto só na lataria, raspado, < 50 cm, mesma bitola de cada positivo. REM: fio remoto da multimídia → REM IN do PRO 2.4 → REM OUT → REM dos dois módulos.

### Multimídia
EQ Uniforme · Loudness Off (depois Baixo, se quiser) · Bass Boost no mínimo · Saída traseira = Traseiro · Subwoofer On · HPF frente **Off** · HPF traseira 120 Hz −24 · Sub LPF **100 Hz** −24, fase testada · Alinhamento: frente no máximo, traseira ~300 cm menor, sub igual à frente (ajuste fino pela fase) · Nível fonte USB 0 · Balanço 0.

### PRO 2.4
Entrada A = esquerda, B = direita. **Roteamento: saídas 1 e 3 = A; saídas 2 e 4 = B — nunca A+B na frente** (somaria esquerda e direita e mataria o estéreo/palco). Saídas 1/2 (médio E/D): HPF **100 Hz** LR24, LPF **4,5 kHz** LR24. Saídas 3/4 (tweeter E/D): HPF **4,5 kHz** LR24 (+ HP5 em série), nível abaixo do médio. Atraso pela distância medida até a cabeça do motorista (o mais longe = 0). Memórias: "Motorista" (com atraso) e "Todos" (sem atraso).

### Ganhos (tom senoidal, falantes desligados)
SD800.4 CH1/CH2: 23 V · SD800.4 ponte: 40 V · TS400x4 CH1/CH2: ≤ 6,3 V · TS400x4 CH3/CH4: 15,5 V.

### Caminho de cada falante (multimídia → falante)
| Falante | Saída da multimídia | Processamento na multimídia | PRO 2.4 (entrada → saída) | Processamento no PRO 2.4 | Módulo (entrada → saída) | Até o falante |
|---|---|---|---|---|---|---|
| ESV 200 esq. | FL | HPF Off · atraso frente | A → 1 | HPF 100 Hz + LPF 4,5 kHz LR24 · atraso · EQ | SD800.4 IN CH1 → CH1 + / − | 2,5 mm² |
| ESV 200 dir. | FR | HPF Off · atraso frente | B → 2 | idem | SD800.4 IN CH2 → CH2 + / − | 2,5 mm² |
| Tweeter esq. | FL | idem | A → 3 | HPF 4,5 kHz LR24 · atraso · nível | TS400x4 IN CH1 → CH1 + / − | 1,5 mm², divisor HP5 em série |
| Tweeter dir. | FR | idem | B → 4 | idem | TS400x4 IN CH2 → CH2 + / − | idem |
| 6TR4A esq. | RL | HPF 120 Hz · atraso traseira (~9 ms) · fader | — | — | TS400x4 IN CH3 → CH3 + / − | 1,5 mm² |
| 6TR4A dir. | RR | idem | — | — | TS400x4 IN CH4 → CH4 + / − | 1,5 mm² |
| Sub | SWL + SWR | LPF 100 Hz · fase · nível do sub | — | — | SD800.4 IN CH3 + CH4 → ponte CH4 ⊕ / CH3 ⊖ | 2,5 mm² |

## Informações de outras conversas (branches, levantadas em 06/11/2026)
- **Tweeter = Bravox do kit CS50BK** (domo 1", 4 Ω nominal, 89 dB, **Fs 2,5 kHz**, 30 W) + **divisor HP5** (tubo, passa-alta 5 kHz Bessel 12 dB/oit, Polyswitch, chave 0/3 dB). Consequência: corte do tweeter **≥ 4,5–5 kHz** (não 3,5 kHz); usar o **HP5 em série como proteção** no lugar do capacitor de 33 µF, com o DSP em ~4,5 kHz LR24 (as duas curvas somam: conferir de ouvido/medição). Re medido 1,9 Ω não bate com 4 Ω nominal → remedir.
- **Snake**: Fs ~94–133 Hz (lojas) → passa-alta do médio em **~100 Hz**, sub cruzando em ~100 Hz. Grafia "ERV 200" × "ESV 200" a conferir.
- **Sub**: caixa ≈28 L, duto 7 × 10 cm, **Fb ≈52 Hz** → subsônico ideal 42 Hz/24 dB, que a multimídia não tem.
- **TS400x4**: crossover fixo 90 Hz/12 dB (ver se há Full/Off); fusível 20 A.
- **Conflitos a resolver com o usuário:**
  1. Projeto `carro-grand-siena-3vias` (14/10/2026): 3 vias ativo com DSP de 8 canais; definido comprar Hertz MP 70.3 (médio 3") + Audison AP 1 (tweeter), ~R$ 2.221. Foi comprado / ainda vale?
  2. Branch de 01/11/2026: tweeters Bravox iriam para o **home theater** com um processador de 8 saídas "já decidido".
  3. Branch de 01/11/2026: futuros tweeters JBL 1TWMS80 citados; Bravox "nunca usados".
- 2026-11-06: **Decisão do usuário: por enquanto o carro fica em 2 vias** (Snake + tweeter Bravox CS50BK na frente; projeto 3 vias com Hertz MP 70.3 + Audison AP 1 adiado). Bravox ficam no carro. Plano ajustado: médio 100 Hz–4,5 kHz, tweeter ≥ 4,5 kHz com o divisor HP5 em série (no lugar do capacitor de 33 µF), sub LPF 100 Hz. Ganho do tweeter mantido em ≤ 6,3 V até remedir o Re (1,9 Ω medido × 4 Ω nominal). Diagrama atualizado.
- 2026-11-06: **Ligação antiga do SD800.4 fotografada antes de desmontar** (`fotos/2026-11-06-ligacao-antiga/sd800.4-regua-antes.jpg`). Leitura pela ordem da régua registrada em `componentes/amplificadores.md` (GND · REM · +12 | CH4 + − · CH3 + − · CH2 + − · CH1 + −, aqui vista de cabeça para baixo — confirmar pelas letras impressas): da esquerda para a direita na foto, CH1− (fio transparente) · CH1+ (vermelho fino) · CH2− (transparente) · CH2+ (vermelho fino) · **CH3− (branco)** · CH3+ vazio · CH4− vazio · **CH4+ (azul-claro)** · +12 V (vermelho grosso) · REM (azul) · GND (cabo com capa preta/espiral). Sub em ponte = branco (−) no CH3⊖ e azul-claro (+) no CH4⊕: correto. CH1/CH2 alimentavam algum par de falantes — a confirmar qual (Snake ou 6TR4A) e de onde vinha o sinal dessas entradas, já que a multimídia mandava só sinal de sub (RL/RR em "Subwoofer").
