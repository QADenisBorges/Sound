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
| Tweeter **JBL 1TWMS80** (a comprar, decidido em 21/11/2026) | 2 | domo de seda 1", 4 Ω, 90 dB, 1,5–20 kHz (−10 dB), divisor incluso com corte em **3,5 kHz**, "80 W RMS" = potência do amplificador com o divisor | Fs; inclinação do divisor; se o divisor tem chave de atenuação |
| Tweeter Bravox CS50BK + HP5 | 2 | substituído no carro pelo JBL 1TWMS80 (21/11/2026); livre para outro uso | — |
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
Bateria + → fusível principal (até 30 cm da bateria) → cabo principal → bloco distribuidor no porta-malas → SD800.4 (fusível 40 A, 10 mm²), **TS400x4 (fusível 20 A, 6 mm²)**, PRO 2.4 (1,5 mm², fusível **1 A**, valor do manual). Cabo principal: **16 mm² com fusível 80 A** (ideal) ou **reaproveitar o 10 mm² do SD800.4 com fusível 60 A**, se for OFC e estiver bom — a conta (≈690 W usados) dá 64 A só com tom senoidal no máximo e 8–21 A com música; acompanhar com voltímetro. TS400x4 no uso deste projeto: ~15 A máx., 2–5 A com música. Terra: um ponto só na lataria, raspado, < 50 cm, mesma bitola de cada positivo. REM: fio remoto da multimídia → REM IN do PRO 2.4 → REM OUT → REM dos dois módulos.

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
- 2026-11-06: Usuário lembra que **alguns fios já tinham sido removidos** antes da foto: ela não mostra a ligação original completa. Vale só o que o usuário confirmou (sub em ponte); a dúvida sobre CH1/CH2 fica sem efeito para o plano novo.
- 2026-11-06: **Estado atual do carro (usuário):** instalados só a multimídia Pioneer, o par Snake (frente) e o par JBL/Selenium 6TR4A triaxial (traseira), provavelmente no amplificador interno da multimídia. Sub, SD800.4, TS400x4, PRO 2.4 e tweeters Bravox fora do carro. O usuário vai trazer mais informações depois.
- 2026-11-06: Alimentação do TS400x4 definida: mesmo cabo do SD800.4 via bloco distribuidor (não puxar do borne do SD800.4). Ramal 6 mm² com fusível 20 A. Cabo principal atual a conferir (bitola, OFC/CCA e fusível na bateria).
- 2026-11-07: Estudo da caixa ideal do sub Protech Light 8" (detalhes em `componentes/subwoofers.md`). A caixa atual (28 L, Fb ≈52 Hz) faz pico de +6 a +8 dB em 50–60 Hz. Recomendação: **manter a caixa e alongar o duto de 7 cm para ~27 cm (Fb ≈36 Hz)**; caixa nova só se quiser, 18–20 L / Fb 36 Hz. T/S do falante estimados (sem ficha do fabricante) — medir Fs/Qts com multímetro + resistor resolveria a incerteza.
- 2026-11-07: Sub Protech 8" + SD800.4 em ponte **alternam entre casa e carro** (usuário). Caixa única: 28 L, duto 7 cm alongado para ~27 cm (Fb ≈36 Hz) serve aos dois. Casa: subsônico 28 Hz/24 dB no PRO 2.4. Carro: sem subsônico (multimídia não tem) → Bass Boost 0; Fb baixa protege melhor que a atual de 52 Hz. GAIN do SD800.4 tem dois pontos (casa ≠ carro): marcar os dois no knob e regular com tom + multímetro (alvo 40 V) em cada lugar.
- 2026-11-07: Sub com bobinas **em paralelo (2 Ω)** → ponte proibida. Religar em **série (8 Ω)**: ponte ~264 W, **alvo 46 V** (substitui 40 V/400 W). Subsônico de casa 30 Hz. Ver `projetos/sub-protech-duto/projeto.md`.
- 2026-11-07: Caixa aberta: sub de **4 Ω** (etiqueta + 3,7 Ω medido) → ponte 400 W, **alvo 40 V** volta a valer (a nota sobre série/46 V fica anulada).
- 2026-11-21: **Retomada da instalação no carro (usuário).** Vão para o carro: SD800.4, PRO 2.4 (frente) + processamento da multimídia (traseira e sub), 2 tweeters, TS400x4. Proteções citadas: fusível de **1 A** (PRO 2.4, bate com o manual; o "2–5 A" que constava aqui foi corrigido) e um "registro" de **20 A** (entendido como fusível/disjuntor do ramal do TS400x4 — a confirmar). **Já passados no carro:** cabo de força bateria → mala, fio remoto e os fios dos 4 falantes de porta até a mala.
  - Traseira citada como "JBL 4TRMS" (4TRMS80, 4"); o projeto registrava Selenium 6TR4A 6" na traseira e o 4TRMS80 nas caixas de casa — **a confirmar qual está no carro** (muda corte e ganho: 4TRMS80 pede HPF ≥ 120 Hz/24 dB).
  - **Não citados, pendentes:** sub (CH3/CH4 do SD800.4 em ponte); fusível de 40 A do ramal do SD800.4; fusível principal junto à bateria e bitola/material do cabo já passado; bloco distribuidor e ponto de terra; RCAs (3 pares de ~5 m + 2 curtos); fio novo dos tweeters + divisores HP5; isolar as saídas do amplificador interno da multimídia; o que fica no carro × em casa (SD800.4, PRO 2.4 e sub estavam em uso no home theater em 09/11).

## Fiação (proposta de 21/11/2026 — depende das medidas do cabo já passado)
Corrente: SD800.4 no uso do projeto (2 × 132 + 400 W) = 66 A máx. senoidal; TS400x4 (2 × 63 + 2 × 20 W) = 18 A; total ~84 A no pior caso, **10–28 A com música**.
| Trecho | Cabo | Proteção / observação |
|---|---|---|
| Bateria → bloco na mala (já passado, ~5 m) | conferir: **≥ 10 mm² de cobre** (OFC) | fusível principal a ≤ 30 cm da bateria: **60 A** em 10 mm², **80 A** em 16 mm². Se for CCA ou mais fino: trocar (16 mm² OFC é o ideal: 0,43 V de queda a 80 A) |
| Bloco → SD800.4 | 10 mm², ≤ 50 cm | o módulo **não tem fusível embutido**; fusível próprio de 40 A é opcional se o principal for ≤ 60 A e este ramal tiver a mesma bitola do cabo principal |
| Bloco → TS400x4 | 6 mm² (mín. 4 mm²) | fusível/disjuntor **20 A** |
| Bloco → PRO 2.4 | 1,5 mm² | fusível **1 A** |
| Terra (cada aparelho → um ponto só na lataria) | mesma bitola do positivo de cada um, < 50 cm | tinta raspada, terminal olhal, parafuso com arruela dentada |
| Remoto | 0,75 mm² | fio da multimídia (já passado) → REM IN do PRO 2.4; REM OUT → REM do SD800.4 e do TS400x4 |
| RCA multimídia → mala | 3 pares de ~5 m (FL/FR, RL/RR, SW) | pelo lado oposto ao cabo de força |
| RCA PRO 2.4 → módulos | 2 pares de 0,3–0,5 m | saídas 1/2 → SD800.4 CH1/CH2; 3/4 → TS400x4 CH1/CH2 |
| Snake (já passado) | 2,5 mm² ideal; 1,5 mm² aceitável (perda de 0,12 dB em 5 m) | SD800.4 CH1/CH2 |
| Traseira (já passado) | 1,5 mm² (1,0 mm² serve) | TS400x4 CH3/CH4 |
| Tweeters JBL 1TWMS80 (fio novo, ~5–6 m por lado) | 1,0–1,5 mm² | TS400x4 CH1/CH2, **divisor JBL em série, sempre** (pode ficar na mala, ao lado do módulo) |
| Sub | 2,5 mm² | SD800.4 ponte CH4 ⊕ / CH3 ⊖ |

## Plano vigente a partir de 21/11/2026 (substitui o que conflitar acima)
- **Tweeter:** JBL 1TWMS80 no lugar do Bravox. Cruzamento desce de 4,5 kHz para **3,5 kHz**: médio (PRO 2.4 saídas 1/2) HPF 100 Hz + **LPF 3,5 kHz LR24**; tweeter (saídas 3/4) **HPF 3 kHz LR24 no DSP + divisor JBL (3,5 kHz) em série** — ponto de partida, afinar de ouvido/medição e conferir a polaridade no cruzamento.
- **Ganho do TS400x4 CH1/CH2 (tweeter):** começar em **11 V** (30 W em 4 Ω); teto 15,9 V (63 W, dentro dos 80 W que a JBL admite com o divisor). Substitui o ≤ 6,3 V do Bravox.
- **Traseira:** Selenium 6TR4A 6" (confirmado) — TS400x4 CH3/CH4, 15,5 V, HPF 120 Hz na multimídia.
- **Sub:** entra no carro — SD800.4 CH3+CH4 em ponte (CH4 ⊕ / CH3 ⊖), **alvo de ganho 22 V (~120 W)** — corrigido em 21/11: sem subsônico o cone chega ao Xmax com 22 V em 30 Hz (15 V em 25 Hz); os 40 V / 32 V só valem com HPF. LPF 100 Hz na multimídia, Bass Boost 0; Fb da caixa ≈ 34,5 Hz desde 09/11. Para liberar mais potência: subsônico no caminho do sub (ex.: tweeter pelo divisor JBL no canal do médio, liberando as saídas 3/4 do PRO 2.4 para o sub com HPF 30 Hz + limitador).
- **Troca casa ↔ carro:** em casa as saídas 3/4 do PRO 2.4 são do **sub**; no carro são dos **tweeters**. Ordem ao montar no carro: alimentar o PRO 2.4, carregar a memória do carro no app e só então ligar os RCAs nos módulos. O divisor JBL em série é a proteção se a memória errada estiver carregada.

## Histórico (continuação)
- 2026-11-21: Respostas do usuário: **sub entra** no carro; traseira é mesmo o **Selenium 6TR4A 6"** (o "JBL 4TRMS" foi engano); **será comprado o par de tweeters JBL 1TWMS80** (substitui o Bravox no carro); SD800.4, PRO 2.4 e sub **alternam entre casa e carro conforme a necessidade** (decisão do usuário, sem equipamento duplicado).
  - Fusível do SD800.4: o usuário supôs que o módulo já tem fusível. **Não tem** — fotos da unidade (régua só com bornes de falante, +12 V, REM, GND e LED; lado oposto com RCA, ganhos e chaves) e manual EVO6 ("o fusível/disjuntor de proteção deve ser instalado a no máximo 30 cm da bateria"). O que dispensa um fusível só dele é o fusível principal na bateria, se for ≤ 60 A com ramal de 10 mm². A confirmar: existe porta-fusível no cabo já passado e de quanto?
  - Ainda pendente: bitola/material do cabo de força existente; o que é o "registro de 20 A"; bitola dos fios dos falantes e se já estão fora do chicote da multimídia.
- 2026-11-21: Usuário: **já existe um disjuntor junto à bateria** no cabo de força passado; valor a confirmar (pode ser o "registro de 20 A" citado antes — a confirmar). Critério: cabo 10 mm² de cobre → disjuntor **50–60 A**; 16 mm² → até 80 A; abaixo de 40 A desarma com o SD800.4 em volume alto (manual: 40 A com música); acima do que o cabo aguenta, trocar por um menor. Conferir também: valor gravado no corpo/alavanca, bitola impressa na capa do cabo, distância até a bateria (≤ 30 cm) e se é disjuntor automotivo (DC).

## A confirmar no carro (21/11/2026)
| Item | O que olhar | O que muda |
|---|---|---|
| Disjuntor da bateria | valor gravado; se é automotivo (12 V); se é o "registro de 20 A" | 10 mm² → 50–60 A; 16 mm² → até 80 A; fora disso, trocar |
| Cabo de força | 10 ou 16 mm² (impresso na capa); cobre ou CCA (raspar: prateado por dentro = CCA) | CCA ou < 10 mm² → trocar por 16 mm² de cobre |
| Distâncias | disjuntor → bateria (≤ 30 cm); multimídia → mala pelo caminho do RCA; mala → cada tweeter pelo caminho do fio | metragem de RCA e de fio de tweeter; disjuntor longe → reposicionar |
| Snake | etiqueta do ímã: modelo (ESV 200 × ERV 200), impedância, W RMS | corte e ganho do médio (não muda a compra) |
| Fios dos 4 falantes na mala | ver "Conferência dos fios dos falantes" abaixo | define se entra fio novo na lista de compras |

### Conferência dos fios dos falantes (4 pares que chegam à mala)
| # | O que conferir | Como | Resultado esperado |
|---|---|---|---|
| 1 | Bitola | impressa na capa; sem marcação, medir o feixe de cobre desencapado (≈ 0,9 mm = 0,5 mm²; ≈ 1,1 mm = 0,75 mm²; ≈ 1,6 mm = 1,5 mm²; ≈ 2,0 mm = 2,5 mm²) | Snake: ≥ 0,75 mm² (ideal 1,5–2,5); traseira: ≥ 0,5 mm² |
| 2 | Cobre ou CCA | raspar um fio com estilete | cobre por dentro |
| 3 | Qual par é de qual falante e a polaridade | pilha de 1,5 V encostada no par: o cone do falante certo se mexe; cone para fora = fio no + da pilha é o positivo | cada par etiquetado (FE, FD, TE, TD) com o + marcado |
| 4 | Falante íntegro e fio sem curto | multímetro em Ω no par: ~3,2–3,8 Ω; entre cada fio e a lataria: sem continuidade | leitura estável nos 4 pares; nenhum fio encostando na lataria |
| 5 | Soltos da multimídia | olhar atrás da multimídia: fios de falante do chicote desligados e isolados um a um | nenhum falante ligado ao mesmo tempo no módulo e na multimídia |
| 6 | Emendas no caminho | inspeção visual (soleira, sanfona da porta) | soldadas ou com conector, isoladas |
Conta de perda no Snake (132 W, 5 m): 1,5 mm² = 0,12 dB; 0,75 mm² = 0,24 dB; 0,5 mm² = 0,36 dB e 5,7 A no limite do fio — por isso o corte em 0,75 mm².

## Lista de compras (21/11/2026) — sem preços; cotar com `pesquisa-precos`
**Comprar (definido):**
| Item | Especificação | Qtde |
|---|---|---|
| Tweeter JBL 1TWMS80 | par, com os 2 divisores | 1 par |
| Cabo RCA duplo blindado | 5 m (confirmar a medida) | 2 (3 se o RCA antigo do sub não estiver mais no carro) |
| Cabo paralelo de cobre | 2 × 1,5 mm² (tweeters) | ~12 m, menos a sobra de casa |
| Bloco distribuidor de positivo | 1 entrada 10–16 mm², 3 saídas | 1 |
| Cabo vermelho 10 mm² cobre | bloco → SD800.4 | 0,5 m |
| Terminais olhal | para o terra (10 mm², 6 mm², 1,5 mm²) | 3 |
| Abraçadeiras de nylon e fita isolante | fixar os fios | 1 pacote / 1 rolo |

**Comprar só se a conferência pedir:**
| Item | Quando |
|---|---|
| **Disjuntor de 60 A de superfície, tipo B** (bornes de prisioneiro com porca, botão de desarme; AliExpress, R$ 37,09 + R$ 9,29 de imposto = R$ 46,38 + frete, visto em 21/11/2026) — **sugestão final** | disjuntor atual abaixo de 40 A, acima do que o cabo aguenta, ou residencial |
| 2 terminais olhal para cabo de 10 mm², furo do tamanho do prisioneiro do disjuntor (conferir no anúncio; costuma ser M6 ou 1/4") + termorretrátil | junto com o disjuntor tipo B |
| Opcional: porta-fusível MIDI + fusível mini faca de 60 A (~R$ 24–31), em série antes do disjuntor | se quiser o fusível como proteção e o disjuntor só como chave |
| Porta-fusível com fio ≥ 4 mm² + fusível de 20 A | se o "registro de 20 A" for o disjuntor da bateria (TS400x4 ficaria sem proteção de ramal) |
| Cabo 6 mm² vermelho + preto, 0,5 m cada | se o TS400x4 não estiver com o chicote original |
| Cabo de força 16 mm² de cobre, ~5 m | cabo atual CCA ou mais fino que 10 mm² |
| Cabo paralelo de cobre 2 × 1,5 mm² para as portas dianteiras, ~11 m (2 × ~5,5 m; medir) | Snake com fio < 0,75 mm², CCA ou com emenda ruim |
| Cabo paralelo de cobre 2 × 1,0–1,5 mm² para a traseira, ~6 m (2 × ~3 m; medir) | traseira com fio < 0,5 mm², CCA, em curto ou com emenda ruim |
| Espaguete termorretrátil / fita isolante extra | fios do chicote da multimídia ainda ligados (isolar um a um) ou emendas a refazer |

**Já tem (conferir):** fusível de 1 A do PRO 2.4 (confirmar que há porta-fusível do mesmo formato); sobra do paralelo branco 2 × 2,5 mm² (sub, ~1 m); paralelos 2 × 1,0 e 2 × 1,5 mm² e fio fino (alimentação do PRO 2.4 e remoto); 2 RCAs de 1 m de casa (PRO 2.4 → módulos, viajam com o equipamento); cabo de terra do SD800.4 já existente na mala; termorretrátil do kit de solda.

## Conectores rápidos para a troca casa ↔ carro (proposta de 21/11/2026)
Ideia do usuário: deixar o SD800.4 "plug and play". Anúncio avaliado (Shopee, R$ 14,90, print do usuário): conector "anti-erro" de 2 vias (tipo SAE) com rabicho de "fio de 4 mm" — o anúncio não informa corrente nem se 4 mm é diâmetro ou seção.
| Ligação do SD800.4 | Corrente | Conector |
|---|---|---|
| +12 V e GND | 40 A com música, 79 A máx. | **não serve o anti-erro**; usar conector de bateria tipo Anderson de 50 A (2 polos, terminal para 10 mm²) |
| CH1 e CH2 (Snake no carro, JBL em casa) | 5,7 A máx. cada | anti-erro serve |
| Ponte CH3+CH4 (sub) | 10 A máx. | anti-erro serve, se o fio do rabicho for cobre de ≥ 1,5 mm² |
| REM | miliampères | anti-erro serve |
- Rabichos ficam parafusados no módulo de forma permanente; carro e casa (BOB 60A, JBL, sub) recebem a metade oposta. Por ligação: 1 metade no módulo + 1 no carro + 1 em casa → **2 pares por ligação** (4 ligações de anti-erro = 8 pares; 1 Anderson no módulo + 1 no carro + 1 em casa = 3 metades, ou 2 pares).
- O anti-erro impede inverter a polaridade, não impede trocar um conector por outro igual: etiquetar cada um. Conferir a polaridade com o multímetro antes da primeira ligação (nesse tipo de conector a cor do fio pode inverter conforme a metade). Emendas soldadas com termorretrátil. Encaixar e soltar só com o som desligado.
- PRO 2.4: o borne de 4 vias dele já é removível; consumo de 70 mA, qualquer conector serve.
- 2026-11-21: **Decisão do usuário: conector anti-erro só nas saídas de falante** do SD800.4 (CH1, CH2 e ponte do sub) → 3 ligações, **6 pares** (módulo + carro + casa). +12 V, GND e REM continuam nos bornes de parafuso (sem Anderson). Cuidados para o aperta/solta repetido: desligar o disjuntor da bateria antes de soltar o +12 V; terminal tubular (ilhós) de 10 mm² nas pontas do +12 V e do GND e de ~0,75 mm² no REM para os fios não desfiarem.
- 2026-11-21: PRO 2.4: **sem segundo borne** (usuário) — o borne removível de 4 vias viaja com o aparelho e os 4 fios são reapertados em cada lugar; fios etiquetados no carro e em casa para não trocar +12 V de posição. Lista de compras final dos conectores: 6 pares do anti-erro (saídas de falante do SD800.4) + terminais tubulares (10 mm² e ~0,75 mm²).
- 2026-11-21: **Correção do alvo do sub no carro: 22 V, não 40 V.** A ficha real do falante (10/11) já tinha derrubado os 40 V em casa; no carro, sem subsônico, a simulação (`../sub-protech-duto/simulacao-duto-e-excursao.py`) dá Xmax com 22 V para conteúdo até 30 Hz. Alternativa em aberto para recuperar potência: liberar as saídas 3/4 do PRO 2.4 para o sub (tweeter passivo pelo divisor JBL).
- 2026-11-21: Disjuntor principal — usuário avaliou dois modelos de 60 A no mesmo anúncio do AliExpress (R$ 37,09 + ~R$ 9,29 de imposto, prints): **Tipo A** (em linha, cabo preso por parafuso allen, tampas transparentes) × **Tipo B** (de superfície, "Ignition Protected / Waterproof", bornes de prisioneiro com porca e capa de borracha, botão de desarme manual). **Recomendado: Tipo B** — selado e protegido contra faísca (fica no cofre do motor), terminal olhal em prisioneiro não afrouxa com vibração como o parafuso allen, fixa na lataria e o botão serve de chave para desligar antes de soltar o +12 V do módulo. Pede 2 terminais olhal para 10 mm² com furo do tamanho do prisioneiro (conferir no anúncio; costuma ser M6) + termorretrátil. 60 A vale para cabo de cobre de 10 mm² (em 16 mm² também serve); cabo mais fino pede valor menor. Ressalvas: genérico, corrente de desarme não verificada; disjuntor térmico desarma mais cedo com o calor do cofre. Alternativa mais confiável como proteção: porta-fusível com fusível de 60 A de loja nacional. Só comprar se o disjuntor que já está no carro não servir (valor/tipo ainda a confirmar).
- 2026-11-21: **Pesquisa de proteção principal de 60 A** (Amazon e loja NTV abertas na página; ML, Shopee e Magalu não abriram nesta sessão; frete visto só para CEP de SP, a confirmar para a BA):
  | Opção | Preço | Frete visto | Total | Observação |
  |---|---|---|---|---|
  | Porta-fusível MIDI Permak (Amazon, B077SNS25Z) | R$ 12,24 | R$ 11,24 | R$ 23,48 | nacional; fusível não incluso (não confirmado); bitola aceita não informada |
  | Porta-fusível MIDI DNI 7515 (Amazon, B0FYGZW33W) | R$ 16,19 | grátis no 1º pedido | R$ 16,19 | enviado pela Amazon; sem especificação no anúncio |
  | Fusível mini faca/midi 60 A (NTV) | R$ 7,50 | não calculado | provisório | avulso; porta-fusível da NTV esgotado |
  | Disjuntor 60 A tipo B (AliExpress, print do usuário) | R$ 37,09 + R$ 9,29 de imposto | não visto | R$ 46,38 + frete | superfície, bornes de prisioneiro |
  | Disjuntor 60 A Pci Ferramentas (Amazon, B0GFPH7SDM) | R$ 55,10 (R$ 52,34 com cupom de 5 %) | grátis | R$ 55,10 | estoque nacional; anúncio não descreve o tipo nem os bornes |
  | Disjuntor 60 A RVMARINEPAT (Amazon Global, B0DK6JFSB2) | R$ 147,14 | R$ 8,90 | R$ 156,04 | só a listagem foi vista |
  | Disjuntor 60 A Gloaso (Amazon Global, B083LL6HD7) | R$ 179,39 com impostos | R$ 8,90 | R$ 188,29 | superfície, prisioneiros de 1/4", anuncia SAE J1171 / UL1500 |
  Conclusão: não há disjuntor melhor que o tipo B do AliExpress pelo preço (os equivalentes na Amazon custam 3 a 5 vezes mais, sem evidência de construção melhor); a proteção mais confiável e barata é porta-fusível MIDI nacional + fusível mini faca de 60 A (de preferência em loja de som local, para conferir se o cabo de 10 mm² entra e levar fusível reserva). Escolha depende de querer ou não a função de chave.
- 2026-11-21: **Sugestão final da proteção principal registrada na lista de compras:** disjuntor de 60 A tipo B (AliExpress) + 2 olhais de 10 mm²; opcional, porta-fusível MIDI com fusível de 60 A em série. Motivo: o módulo sai e volta do carro, e o botão do disjuntor permite desligar o cabo antes de soltar o +12 V. Vale para cabo de cobre de 10 mm² (ou 16 mm²); a compra continua condicionada à conferência do disjuntor que já está no carro.

