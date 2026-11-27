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
| Disjuntor da bateria | **conferido em 22/11: Tramontina TR3kA C50 — 50 A, curva C, residencial (240/415 V~, IP20)** | valor serve para 10 mm²; o tipo não (sem vedação, bornes expostos) → trocar pelo tipo B de 60 A |
| Cabo de força | **medido com régua em 22/11: feixe de cobre aberto ~5,5–6,5 mm, capa ~6,5 mm (vermelha com camada interna branca) → classe 10 mm²; fios cor de cobre** | fica o cabo; proteção de 50–60 A; bloco e olhais para 10 mm² |
| Distâncias | rota informada em 22/11: lado esquerdo do painel → soleira esquerda, por baixo do acabamento → traseira. Estimativa: ~5 m até a mala (o RCA atual chega com sobra); disjuntor → bateria ainda não medido | RCA de 5 m; fio de tweeter ~12 m (esq. ~5 m + dir. ~6,5 m) |
| Snake | **conferido em 22/11: Snake Pro "God of War" ESV 200, Steel Pro Series, 6", 4 Ω, 400 W programa musical (= 200 W RMS)** | nada muda: ganho 23 V (132 W), HPF 100 Hz |
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
| Cabo RCA duplo blindado | 5 m (confirmar a medida) | **2** (o RCA antigo, ASX de capa transparente, continua no carro — conferido em 22/11) |
| Cabo paralelo de cobre | 2 × 1,5 mm² (tweeters) | ~12 m, menos a sobra de casa |
| Bloco distribuidor de positivo | 1 entrada 10–16 mm², 3 saídas | 1 |
| Cabo vermelho 10 mm² cobre | bloco → SD800.4 | 0,5 m |
| Terminais olhal | para o terra (10 mm², 6 mm², 1,5 mm²) | 3 |
| Ponta Torx para os parafusos do forro da porta (provável T20 ou T25; testar no jogo de bits que já possui) | tirar o forro da porta dianteira | 1, se o jogo não tiver |
| Soquete sextavado para o parafuso do cinto (medir a cabeça; provável 17 mm) + catraca ou cabo de força | para soltar a ancoragem do cinto e tirar o acabamento lateral | 1 |
| Terminais tubulares (ilhós) | 10 mm² (2: +12 V e terra do SD800.4) e ~0,75–1,5 mm² (remoto e fios de falante) | 1 cartela sortida |
| Abraçadeiras de nylon e fita isolante | fixar os fios | 1 pacote / 1 rolo |
| Fita de tecido para chicote (tipo feltro, antirruído) — **opcional** | só se entrar fio novo dentro da porta; na soleira e no painel, abraçadeiras bastam | 1 rolo |

**Comprar só se a conferência pedir:**
| Item | Quando |
|---|---|
| **Disjuntor de superfície, tipo B, de 50 A (preferido) ou 60 A** (bornes de prisioneiro com porca, botão de desarme; AliExpress, R$ 37,09 + R$ 9,29 de imposto = R$ 46,38 + frete, visto em 21/11/2026) — **sugestão final** | **condição atendida em 22/11: o disjuntor atual é residencial → comprar** (confirmar antes que o cabo é cobre de ≥ 10 mm²) |
| 2 terminais olhal para cabo de 10 mm², furo do tamanho do prisioneiro do disjuntor (conferir no anúncio; costuma ser M6 ou 1/4") + termorretrátil | junto com o disjuntor tipo B |
| Opcional: porta-fusível MIDI + fusível mini faca de 60 A (~R$ 24–31), em série antes do disjuntor | se quiser o fusível como proteção e o disjuntor só como chave |
| Porta-fusível com fio ≥ 4 mm² + fusível de 20 A | se o "registro de 20 A" for o disjuntor da bateria (TS400x4 ficaria sem proteção de ramal) |
| Cabo 6 mm² vermelho + preto, 0,5 m cada | se o TS400x4 não estiver com o chicote original |
| Cabo de força 16 mm² de cobre, ~5 m | cabo atual CCA ou mais fino que 10 mm² |
| Cabo paralelo de cobre 2 × 1,5 mm² para as portas dianteiras, ~11 m (2 × ~5,5 m; medir) | **condição atendida em 22/11: um par está prensado na soleira, com a capa ferida e cobre esverdeado → trocar** (com os ~12 m dos tweeters, um rolo de 25 m cobre tudo) |
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
- 2026-11-22: **Disjuntor atual fotografado** (`fotos/2026-11-22-disjuntor/`): **Tramontina TR3kA C50** — monopolar, 50 A, curva C, 240/415 V~, 3 kA, NBR NM 60898, **IP20** (residencial, de quadro). Fica no cofre, perto de um reservatório branco, com o cabo em conduíte corrugado; no positivo da bateria o cabo entra por um terminal olhal no parafuso da abraçadeira, com trecho enrolado em fita.
  - Valor: 50 A serve para cabo de cobre de 10 mm² e fica acima dos 40 A do SD800.4 com música. Em corrente contínua o disparo magnético sobe ~1,4× (curva C: ~350–700 A em vez de 250–500 A) — um curto no fim do cabo (~600 A estimados) pode depender do disparo térmico, que leva segundos.
  - Tipo: não é próprio para o cofre — IP20 (sem vedação contra água e poeira), bornes de parafuso com +12 V exposto perto da lataria, sem fixação prevista para vibração. Não é emergência (funcionou até aqui), mas é a condição de troca já prevista: **substituir pelo tipo B de 60 A**.
  - O "registro de 20 A" citado em 21/11 não é este: fica como proteção do ramal do TS400x4.
  - Ainda a conferir: bitola e material do cabo (feixe de cobre no borne: ~4–4,5 mm = 10 mm²; ~5–6 mm = 16 mm²; ~3–3,5 mm = 6 mm²), distância bateria → disjuntor, se o disjuntor está fixado e o que há sob a fita junto à bateria (emenda?).
- 2026-11-22: **Conferência no carro por fotos** (`fotos/2026-11-22-conferencia/`, 10 fotos, sem medidas informadas):
  - **Snake:** etiqueta "Snake Pro · God of War · 6" · 4 Ω · Steel Pro Series · **ESV 200** · 400 watts musical program · Made in Brazil" → modelo e impedância confirmados; 400 W de programa = 200 W RMS. Falante fotografado fora da porta, com fio transparente soldado nos terminais.
  - **Cabo de força (vermelho) e terra (preto, com trechos em fita):** chegam à mala com as **pontas desencapadas e desfiadas, lado a lado**. Pela proporção com os dedos o feixe de cobre tem ~4–5 mm (compatível com 10 mm², sem fechar entre 6 e 10 mm²); fios de cor de cobre (aparenta cobre; raspar para confirmar). Medida com régua pendente.
  - **Terra:** o cabo preto vai a um parafuso de ancoragem de cinto de segurança/banco, sob o carpete. Funciona eletricamente, mas é parafuso de segurança com torque próprio: preferir ponto dedicado na lataria da mala, tinta raspada, olhal, < 50 cm dos módulos. Conferir se há olhal e metal limpo.
  - **Remoto:** fio azul fino, ponta desencapada.
  - **RCA:** um par (capa transparente rosada, marca ASX, plugues dourados/vermelho) presente → faltam 2 pares de 5 m.
  - **Fios de falante:** paralelos de capa transparente acastanhada, finos (aparentam ~0,5–0,75 mm²), pontas torcidas; bitola a medir (feixe de cobre) e identificar cada par (teste da pilha).
  - **Caixinha preta** por onde passam vermelho, preto e azul, junto a uma cinta: a identificar (peça do cinto ou da instalação?).
  - Cuidado imediato: ponta do vermelho isolada com fita e disjuntor desligado enquanto o cabo estiver solto na mala.
- 2026-11-22 (2ª leva de fotos, `fotos/2026-11-22-conferencia/11…19`):
  - **Cabo de força:** régua ao lado da ponta — feixe de cobre desfiado com ~5,5–6,5 mm (compacto, ~4,5 mm), capa externa ~6,5 mm, dupla (vermelha + branca por dentro), fios cor de cobre também no corte → **classe 10 mm² de cobre** (não é 16 mm²; 6 mm² pouco provável). Medida por foto, com o feixe aberto: margem de ± 1 bitola. Proteção: 50 ou 60 A; preferir **50 A** do mesmo disjuntor tipo B pela margem (bitola sem marcação). Bloco distribuidor e olhais dimensionados para 10 mm².
  - **Rota (usuário):** os fios saem do lado esquerdo do painel e seguem pela soleira esquerda, por baixo do acabamento, até a traseira (foto 11: fios de falante, azul do remoto e RCA juntos). Distância não medida; estimativa ~5 m (o RCA ASX atual chega à traseira com sobra enrolada). A confirmar: o cabo de força vem pelo mesmo lado? Se sim e aparecer ruído de alternador, RCA novo pelo lado direito.
  - **Fios de falante:** ponta fotografada com feixe de ~1 mm (≈ 0,5–0,75 mm²). Servem (perda ≤ 0,36 dB no Snake); troca por 2 × 1,5 mm² é melhoria opcional, a fazer junto com a passagem dos fios dos tweeters, pela mesma rota.
  - **"Caixinha preta" = fivelas do cinto de segurança traseiro** (foto 17). O terra está no parafuso de ancoragem dessas fivelas.
  - **Ferramenta que falta:** chave para o parafuso sextavado da ancoragem do cinto (foto 19), necessária para soltar o cinto e tirar o acabamento lateral. Medir a cabeça entre faces (provável 17 mm) → soquete + catraca ou cabo de força. Item de segurança: reapertar com o torque de fábrica (valor do Grand Siena não confirmado; típico de ancoragem de cinto ~40 N·m) e não deixar terminal de terra sob a ancoragem — aproveitar para levar o terra a um ponto próprio na lataria da mala.
- 2026-11-22: **Fio de falante prensado** (foto 20): um dos pares de capa transparente está esmagado na soleira, com a capa deformada/ferida e o cobre esverdeado no ponto (oxidação: entrou umidade). Risco: curto entre os dois condutores ou com a lataria (módulo em proteção) e rompimento do fio com o tempo. Ação: identificar de qual falante é (teste da pilha) e **trocar esse lance** por 2 × 1,5 mm² — ou, provisoriamente, cortar o trecho ferido e emendar com solda + termorretrátil. Refazer o caminho para o fio não ficar sob a borda do acabamento/borracha da porta. Como os fios são finos e antigos e os acabamentos serão abertos para os tweeters, recomendado trocar os dois lances dos Snake de uma vez (rolo de 25 m de 2 × 1,5 mm²: ~12 m tweeters + ~11 m Snake). Conferir os demais pares ao longo da soleira em busca de outros pontos esmagados ou verdes.
- 2026-11-22: **Usuário: nada será executado agora — as fotos de hoje são só levantamento.** As ações registradas (troca do disjuntor, do lance prensado, terra em ponto próprio, soquete do cinto) ficam como pendências para o dia da instalação. Único cuidado que vale desde já: pontas desencapadas na traseira isoladas com fita (cabo vermelho e fios de falante) e disjuntor desligado enquanto nada estiver ligado ali.
  - Levantamento fechado: disjuntor (Tramontina C50 residencial), cabo de força (classe 10 mm², cobre), Snake (ESV 200, 4 Ω), RCA existente (1 par), rota (soleira esquerda, ~5 m), terra (parafuso das fivelas do cinto), fios de falante (finos; um prensado).
  - Em aberto: distância bateria → disjuntor; se o cabo de força corre pelo mesmo lado dos RCAs; qual falante é o do fio prensado; medida da cabeça do parafuso do cinto; se os fios dos falantes estão fora do chicote da multimídia.
- 2026-11-22 (levantamento, fotos 21–24):
  - **Passagem para a porta dianteira:** os fios entram na porta pela **coifa de borracha (sanfona) do chicote original**, entre a coluna e a porta (foto 23, com conector branco do chicote à vista). É a "fiação reforçada" que o usuário não identificou: tubo de borracha que protege os fios do abre-e-fecha. Consequência para a troca do fio dos Snake: passar 2 × 1,5 mm² por dentro da coifa é a parte difícil; alternativa prática é levar o fio novo até o pé da coluna e emendar (solda + termorretrátil) no par que já atravessa a coifa — o trecho fino que sobra (~1 m) custa menos de 0,1 dB.
  - **Parafuso do forro da porta** (foto 24, em rebaixo redondo com 3 rasgos em volta): cabeça **Torx** (estrela de 6 pontas), já um pouco gasta. Os 3 rasgos são do plástico, não pedem chave especial. Tamanho a confirmar no jogo de bits (provável T20 ou T25): usar a ponta que entra justa, sem folga, com pressão, para não espanar.
  - **Atrás da multimídia** (foto 22): fios de falante de capa transparente passando por cima, conector do chicote com cola quente e plugues RCA (vermelho e dourado) soltos. Não dá para afirmar pela foto se os falantes estão fora do chicote da multimídia: continua em aberto.
  - Etiqueta na coluna: **fabricação 2014**. Rota confirmada: painel inferior esquerdo (tampa da caixa de fusíveis, foto 21) → soleira esquerda.
- 2026-11-22: Usuário avaliou um **kit de ferramentas de 46 peças com catraca** (anúncio "Quicko", não aberto por mim). Pelo padrão desses kits (encaixe de 1/4", soquetes de 4 a 14 mm, bits Phillips/fenda/Torx/Allen, extensões): cobre o Torx do forro da porta, o 10 mm do terminal da bateria, Allen dos bornes do SD800.4 e parafusos pequenos; **não cobre o parafuso do cinto** (provável 17 mm, e apertado demais para catraca de 1/4"). Para o cinto: chave estrela/combinada de 17 mm ou soquete de 17 mm com encaixe de 1/2" e cabo de força — depois de medir a cabeça. Conferir no anúncio: encaixe 1/4", soquetes 4–14 mm, Torx T20/T25/T30 inclusos.
- 2026-11-22: **Pesquisa de kit de ferramentas** (Amazon, preços da listagem de busca; páginas dos produtos bloqueadas pela verificação da Amazon, então o conteúdo de cada kit **não foi conferido**; frete visto para CEP de SP; ML, Shopee e Magalu não consultados):
  | Opção | Preço | Observação |
  |---|---|---|
  | Kit 46 peças 1/4" (B0HKLNH6ZQ) + jogo Eda 1/2" 12 peças, 10–24 mm, com catraca e extensão (B0FQFSYCMV) | R$ 37,90 + R$ 54,15 = **R$ 92,05** | melhor custo-benefício; duas maletas |
  | Kit 46 peças + jogo de chaves combinadas 8, 10, 12, 13, 14 e 17 mm (B0H324N4NG) | R$ 132,90 | uma compra só; entrega mais demorada (8/dez) |
  | Fasterr FST002, 94 peças, 1/4" + 1/2" (B0DP3837V2) | R$ 246,90 | kit único; 4,4 estrelas |
  | Sparta, 94 peças, 1/4" + 1/2", 2 catracas (B0F3LFR8GD) | R$ 279,86 | kit único de marca conhecida no Brasil |
  | Stels, 94 peças, 1/4" + 1/2" (B0777L84WS) | R$ 377,00 | 4,9 estrelas |
  Conferir no anúncio antes de comprar: soquete de 17 mm no encaixe de 1/2", pontas Torx T20/T25/T30, Allen. Nenhum kit traz espátulas plásticas de acabamento, alicate de crimpar terminais nem torquímetro.
- 2026-11-22 (levantamento, foto 25): **dentro da porta, os fios estão envolvidos em fita de tecido cinza (feltro) em espiral**, presos por presilhas plásticas brancas — é o acabamento do chicote original (evita ruído e desgaste por atrito na lata). O usuário não vai abrir a porta agora. Para a instalação: fios novos dentro da porta devem ser envolvidos com fita de tecido para chicote e presos nas mesmas presilhas/abraçadeiras, sem ficar soltos nem perto do mecanismo do vidro.
- 2026-11-22: **Decisão do usuário: comprar o kit de 46 peças + chaves combinadas 8, 10, 12, 13, 14 e 17 mm** (Amazon B0H324N4NG, R$ 132,90 na listagem, entrega prevista 8/dez). Cobre o Torx do forro e, pela chave combinada de 17 mm, o parafuso do cinto — **desde que a cabeça meça 17 mm entre faces** (ainda não medida; se for outra medida, falta uma chave avulsa). Conteúdo do kit não conferido na página.
- 2026-11-22: **Pendência (a pedido do usuário): conferir o kit de ferramentas pelo computador, depois.** Abrir a página do kit de 46 peças + chaves combinadas (Amazon B0H324N4NG, R$ 132,90 na listagem) e confirmar: chave combinada de 17 mm, pontas Torx T20/T25/T30, vendedor, frete e prazo para o CEP 48608-410. Antes, medir a cabeça do parafuso do cinto. Compra ainda não feita.
- 2026-11-22: Esclarecido ao usuário: **fita de tecido é opcional** (obrigatória só se passar fio novo por dentro da porta; com a emenda no pé da coluna, a porta não é aberta e o chicote original fica como está). **Fio novo é necessário:** 2 × 1,5 mm² para os tweeters (~12 m) e para o lance prensado; trocar os dois lances dos Snake continua recomendado. O trecho de fio dentro da porta não precisa ser trocado.
- 2026-11-22: **Recomendação sobre trocar os fios (aguardando decisão do usuário): não trocar todos.** Ficam: cabo de força (classe 10 mm², cobre), cabo de terra (muda só o ponto), remoto, RCA existente e os dois lances da traseira (6TR4A como preenchimento, 60 W: fio fino perde ~0,2 dB em 3 m). Trocam: os dois lances dos Snake (2 × 1,5 mm², um deles pode ser o prensado). Entram novos: fio dos tweeters e 2 RCAs. Exceção: se o lance prensado for de um traseiro, troca-se esse também (~3 m; o rolo de 25 m ainda cobre: 12 + 11 = 23 m, sobram 2 m — nesse caso faltaria ~1 m, comprar 30 m ou medir antes).
- 2026-11-22 (levantamento, fotos 26–27): **fiação original das portas dianteiras.**
  - Há **conector original de 2 vias** para o alto-falante da porta e outro, pequeno, para o **tweeter de fábrica** (fios lilás finos). O tweeter antigo estava ligado descascando o fio lilás do conector (foto 27: cobre exposto no meio do fio — isolar com fita/termorretrátil).
  - **Caminho atual do Snake (usuário):** falante → fio fino original dentro da porta → tubo de borracha (coifa) → embaixo do painel → emenda no cabo "normal" que segue para a mala. Confirma a proposta: o fio novo de 2 × 1,5 mm² emenda embaixo do painel e o trecho fino da porta fica.
  - **Pergunta do usuário:** dá para manter a ligação por conector (sem descascar fio)? Sim: chicote adaptador que encaixa no conector original e termina em terminais faston para o falante ("plug/chicote adaptador de alto-falante Fiat"; modelo exato a conferir comparando com a foto — **pendência de pesquisa**), ou conector de 2 vias genérico (o anti-erro já previsto) emendado no fio.
  - **Atenção para o tweeter ativo:** na fiação de fábrica o tweeter da porta costuma estar em paralelo com o alto-falante da mesma porta. Se estiver (testar continuidade entre o fio do conector do tweeter e o do conector do falante), ele **não serve para o tweeter ativo** (que precisa de par próprio vindo do TS400x4): nesse caso o tweeter vai na coluna/painel com fio novo, sem passar pela porta. O conector original do tweeter só é aproveitável na alternativa **passiva** (tweeter pelo divisor JBL no mesmo canal do Snake), que em troca libera as saídas 3/4 do PRO 2.4 para o sub com subsônico — decisão em aberto.
- 2026-11-22: **Decisão do usuário: instalação nova** (fiação nova, sem aproveitar os conectores/fios originais das portas para o som; tweeter ativo com fio próprio, como no plano). Pergunta: o cabo de 10 mm² alimenta o SD800.4 e o TS400x4 juntos? **Sim.** No uso do projeto (Snake 2 × 132 W + sub a 22 V ≈ 120 W no SD800.4; tweeters + traseira ≈ 186 W no TS400x4): ~38 A + ~20 A = **~58 A no pior caso (tom contínuo)** e **7–19 A com música**; queda no cabo (5 m, 8,6 mΩ) de 0,5 V no pior caso e ~0,15–0,2 V com música. Dentro do que o cabo e a proteção de 50–60 A aguentam. Só se o sub passar a usar os 400 W (com subsônico) o pior caso sobe para ~84 A e 0,72 V de queda — aí 16 mm² (0,45 V) passa a valer a pena; até lá, não.
- 2026-11-22 (levantamento, foto 28): **bateria Ecoflex, livre de manutenção** (etiqueta verde; "12" visível, provável 12 meses de garantia). **Capacidade (Ah) e corrente de partida (CCA) ilegíveis na foto — a informar.** Terminal de um dos polos aparece solto ao lado da bateria (usuário trabalhando no carro). Para o projeto: com o motor ligado quem alimenta o som é o alternador (7–19 A com música, dentro da elétrica original); a bateria pesa com o motor desligado — numa bateria de partida de 50–60 Ah, ~10–15 A de som levam a ~50 % de carga em cerca de 2 h, então limitar o uso com motor desligado e acompanhar pelo voltímetro do PRO 2.4 (alerta em ~12,0 V). Conferências de saúde: 12,4–12,7 V em repouso; 13,8–14,4 V com o motor ligado.

## Estimativa de custo da instalação (22/11/2026)
Mão de obra própria (R$ 0). Preços de listagem ou estimativa, sem frete confirmado para o CEP do usuário; equipamentos que já possui não entram. Tratamento do sub (manta butílica) fica fora desta conta.

| Item | Qtde | Mínimo | Máximo | Origem do preço |
|---|---|---|---|---|
| Par de tweeters JBL 1TWMS80 (com divisores) | 1 par | R$ 150,00 | R$ 315,00 | estimativa — não consegui abrir anúncio; única referência vista foi R$ 314,60 num resumo de busca (21/11) |
| Disjuntor de superfície tipo B, 50 A | 1 | R$ 46,38 | R$ 60,00 | AliExpress, R$ 37,09 + R$ 9,29 de imposto vistos no seu print (21/11); frete não visto |
| Cabo RCA duplo blindado de 5 m | 2 | R$ 39,80 | R$ 84,22 | Amazon, listagem de 22/11: R$ 19,90 a R$ 42,11 cada (Taramps a R$ 29,44) |
| Cabo paralelo de cobre 2 × 1,5 mm², 25 m | 1 rolo | R$ 42,74 | R$ 180,07 | Amazon, listagem de 22/11: R$ 42,74 (sem garantia de ser cobre) a R$ 180,07 (Technoise cobre puro); certificado Belcabos a R$ 121,59 |
| Bloco distribuidor (par: positivo e terra) | 1 par | R$ 57,85 | R$ 66,40 | Amazon, listagem de 22/11 |
| Cabo vermelho de cobre 10 mm², 0,5 m | 0,5 m | R$ 5,00 | R$ 10,00 | estimativa (loja de material elétrico, por metro) |
| Terminais olhal 10 mm², furo M6 (kit com 20) | 1 kit | R$ 21,90 | R$ 21,90 | Amazon, listagem de 22/11 |
| Terminais tubulares (ilhós) 0,5–10 mm², com ou sem alicate de crimpar | 1 kit | R$ 33,00 | R$ 64,58 | Amazon, listagem de 22/11: R$ 33,00 só os terminais; R$ 53,10 a R$ 64,58 com alicate |
| Conectores de 2 vias anti-erro | 6 pares | R$ 40,00 | R$ 89,40 | Shopee, R$ 14,90 no seu print (se for por par, 6 × 14,90 = R$ 89,40); kit com vários, estimativa |
| Porta-fusível com fusível de 20 A (ramal do TS400x4) | 1 | R$ 0,00 | R$ 29,00 | R$ 0 se o seu de 20 A servir; Amazon, listagem de 22/11: até R$ 29,00 (pacote com 10) |
| Abraçadeiras de nylon e fita isolante | 1 pacote + 1 rolo | R$ 15,00 | R$ 30,00 | estimativa |
| Kit de ferramentas 46 peças + chaves combinadas | 1 | R$ 132,90 | R$ 132,90 | Amazon, listagem de 22/11 (compra ainda a conferir) |
| **Total do necessário** | | **R$ 584,57** | **R$ 1083,47** | soma das linhas acima |

Opcionais:

| Item | Qtde | Mínimo | Máximo | Origem do preço |
|---|---|---|---|---|
| Fita de tecido para chicote | 1 rolo | R$ 15,00 | R$ 30,00 | estimativa |
| Espátulas plásticas para soltar acabamento | 1 jogo | R$ 15,00 | R$ 30,00 | estimativa |
| **Total dos opcionais** | | **R$ 30,00** | **R$ 60,00** | |

Com os opcionais: R$ 614,57 a R$ 1143,47.
- 2026-11-22: **Pedido do usuário: com os cabos novos, um plugue no falante para tirar só o falante e a fiação ficar — sem perder qualidade.** Resposta: conector bem feito não tira qualidade (contato de 1–3 mΩ por terminal; par ≈ 6 mΩ em 4 Ω = 0,013 dB, contra 0,12 dB do próprio fio de 5 m). O que estraga é contato frouxo ou oxidado (porta pega umidade).
  - **Recomendado (portas — Snake e 6TR4A): terminal faston fêmea isolado direto nos terminais do falante**, crimpado no fio de 1,5 mm² (faston azul, 1,5–2,5 mm²), com termorretrátil. Um só contato por fio, sem rabicho. Medir a largura das linguetas do falante (costuma ser 6,3 mm no positivo e 4,8 mm no negativo — larguras diferentes já impedem inverter).
  - **Alternativa (plugue no meio do fio): conector automotivo selado de 2 vias** (tipo à prova d'água), um rabicho curto soldado no falante. Um contato a mais, perda igualmente desprezível; vale se o falante for sair com frequência.
  - Tweeters (coluna/painel, lugar seco): conector de 2 vias simples ou faston pequeno entre o divisor JBL e o fio.
  - Cuidados: crimpar firme (puxar para testar), fazer uma "barriga" no fio antes do conector para a água não escorrer até ele, nada de emenda só torcida com fita.
  - Lista de compras: + fastons fêmea isolados azuis (6,3 mm e 4,8 mm, ~10 de cada; estimativa R$ 10–20) — ou 4 conectores selados de 2 vias (estimativa R$ 20–40). Não entram no total da estimativa de 22/11.
- 2026-11-22: **Decisão do usuário: conector automotivo de 2 vias nos falantes** (fiação fica, sai só o falante). Especificação: conector automotivo **selado** (à prova d'água) de 2 vias, com trava, para fio de 1,5 mm², ≥ 10 A; de preferência **já com rabicho** (fio de cobre ≥ 0,75 mm², ~15–20 cm) para emendar com solda + termorretrátil — a versão em kit (carcaça + terminais + vedações) exige alicate próprio para terminal aberto. Quantidade: **6 pares** (2 Snake, 2 traseiros, 2 tweeters). Montagem: metade com rabicho soldada/ligada ao falante, outra metade na fiação; mesma metade (macho ou fêmea) em todos os falantes; "barriga" no fio antes do conector; conferir polaridade com a pilha depois de montar. Estimativa: R$ 30–60 pelos 6 pares (não cotado; fora do total de 22/11). Os fastons deixam de ser necessários (só se o rabicho for ligado às linguetas sem solda).
- 2026-11-22: **Conector avaliado (print do Mercado Livre, sem preço visível):** kit com 4 "chicotes 2 vias injetado fio 4 mm", marca **Permak**, 23 cm, fio de cobre, terminais de latão, capa e conector de PVC, peça KIT4PERMAK2VIAS35/Z2, descrito para "instalação e retirada de caixas de som". Avaliação: **serve** para os falantes e também para as saídas do SD800.4 (cobre, bitola folgada, marca nacional; perda desprezível). Ressalvas: é injetado, **não selado** — na porta, posicionar no alto, com "barriga" no fio e um pouco de graxa dielétrica/vaselina nos contatos de latão; confirmar se cada "unidade" é o par macho + fêmea; conferir a polaridade com o multímetro (nesse formato a cor pode inverter conforme a metade). Quantidade: 6 pares para os falantes = 2 kits; se padronizar também as 3 saídas do SD800.4 (2 pares por ligação = 6 pares), total 12 pares = **3 kits** — substitui os conectores anti-erro da Shopee.
- 2026-11-22: **Fechado com o usuário: conector único no sistema — chicote Permak de 2 vias injetado (fio 4 mm), 3 kits de 4 = 12 pares.** Uso: 6 pares nos falantes (2 Snake, 2 traseiros, 2 tweeters) + 6 pares nas 3 saídas do SD800.4 (CH1, CH2 e sub; módulo + carro + casa). Substitui os conectores anti-erro da Shopee e os conectores selados. Cuidados mantidos: conector no alto da porta, "barriga" no fio, graxa dielétrica nos contatos, polaridade conferida com multímetro, etiqueta em cada conector. Preço a cotar — na estimativa de 22/11, a linha "Conectores de 2 vias anti-erro, 6 pares, R$ 40,00 a R$ 89,40" passa a ser "3 kits Permak" e o total será refeito quando houver o preço.

## Lista de itens da instalação — consolidada em 22/11/2026 (substitui as listas anteriores)
**Comprar:**
| # | Item | Qtde | Observação |
|---|---|---|---|
| 1 | Par de tweeters JBL 1TWMS80, com os divisores | 1 par | divisor sempre em série |
| 2 | Disjuntor de superfície tipo B, 50 A | 1 | no lugar do Tramontina C50 residencial |
| 3 | Cabo RCA duplo blindado, 5 m | 2 (ou 3, para trocar também o antigo) | são 3 pares da multimídia à mala (frente, traseira, sub); 1 já está passado. Os 2 curtos (PRO 2.4 → módulos) são os de 1 m que já possui |
| 4 | Cabo paralelo de cobre **2 × 1,5 mm²** | **rolo de 25 m** (decisão de 25/11) | tweeters novos (~11 m); o restante (~14 m) repõe só os lances existentes reprovados na conferência (bitola, CCA, curto) — Snake primeiro. Snake e traseiros reaproveitam o fio já passado, sem as partes ruins. Plano B do anúncio: ML MLB5251047257, R$ 95,00 |
| 5 | **Bloco distribuidor com porta-fusível Technoise** (positivo; 2 × 0/4 AWG → 4 × 4/8 AWG, mini-ANL) — escolhido em 25/11 | 1 | Shopee (Extreme Audio) R$ 151,05 no Pix: https://shopee.com.br/product/388765779/18599184965 · ML R$ 174,00: https://www.mercadolivre.com.br/bloco-distribuidor-porta-fusivel-technoise-carro/up/MLBU3902437533. Conferir com o vendedor da Shopee se vem 1 peça ou o par |
| 5a | Fusíveis mini-ANL 40 A (SD800.4) e 20 A (TS400x4) | 1 de cada (+ reserva) | os 4 que vêm no bloco são de 60 A (avaliação na Shopee); ex.: ML MLBU4052228102 (5 un., R$ 28,90, escolher o valor) |
| 5b | Ilhós ou redutor de 10 mm² para a entrada do bloco | 1 | a entrada é de 0/4 AWG; o cabo de 10 mm² fica folgado sem ele |
| 5c | Bloco de terra simples (barramento sem fusível) | 1 | o Technoise é só o positivo; pode ser um do par Tuning Cars (Amazon, R$ 57,85 o par em 22/11) |
| 6 | Cabo vermelho de cobre 10 mm² | 0,5 m | bloco → SD800.4 |
| 7 | Terminais olhal para 10 mm², furo M6 | 1 kit | disjuntor (2) e ponto de terra; conferir o prisioneiro do disjuntor |
| 8 | Terminais tubulares (ilhós) 0,5–10 mm² com alicate | 1 kit | pontas do +12 V, terra, remoto e falantes nos bornes |
| 9 | Chicote Permak de 2 vias injetado (fio 4 mm) | 3 kits de 4 | 6 pares nos falantes + 6 nas saídas do SD800.4 |
| 10 | Abraçadeiras de nylon e fita isolante | 1 pacote + 1 rolo | fixação dos fios |
| 11 | Kit de ferramentas 46 peças + chaves combinadas (até 17 mm) | 1 | conferir o anúncio e medir o parafuso do cinto antes |
| 12 | Fita de tecido para chicote (feltro, antirruído) | 1 rolo | envolver os fios novos no painel e na soleira |
| 13 | Espátulas plásticas para soltar acabamento | 1 jogo | tirar forros e soleiras sem marcar o plástico |
| 14 | Graxa dielétrica (ou vaselina) | 1 bisnaga | contatos dos conectores Permak, principalmente nas portas |
| 15 | Porta-fusível de linha para fusível de vidro 5 × 20 mm (PRO 2.4, fusível de 1 A) | 1 | ligado na 3ª saída do bloco Technoise (rabicho com ilhós); dele o fio de 1,5 mm² vai ao PRO 2.4 |
| 16 | Termorretrátil vermelho **4 mm**, 1 m (Shopee, "Termo Retrátil Vermelho 4mm X 1 Metro Profissional Com Nf") — https://shopee.com.br/Termo-Retr%C3%A1til-Vermelho-4mm-X-1-Metro-Profissional-Com-Nf-i.406725711.22398883749 | 1 m (ver obs.) | adicionado pelo usuário em 25/11; preço não visto (Shopee pede login). Serve para emenda de **um condutor** de 1,5 mm² (solda + termo) e nas emendas dos Permak; não serve para o cabo de 10 mm² nem para cobrir o par paralelo inteiro. ~36 emendas × ~3 cm ≈ 1,1 m → 1 m é justo: somar ao que já tem do kit de solda ou levar 2 m |

**Comprar só se precisar:**
| Item | Quando |
|---|---|
| Cabo de 6 mm², vermelho e preto, 0,5 m cada | se o TS400x4 não estiver com o chicote original |
| Chave avulsa para o parafuso do cinto | se a cabeça não medir 17 mm |
| Mais ~5 m de cabo 2 × 1,5 mm² | se o lance prensado for de um falante traseiro |

**Já tem:** SD800.4, PRO 2.4BT + AUDIO, multimídia Pioneer, par Snake ESV 200, par Selenium 6TR4A, sub Protech 8" na caixa; cabo de força (classe 10 mm²), cabo de terra e fio remoto já passados; 1 RCA de 5 m já passado e 2 RCAs de 1 m (viajam com o equipamento); fusível de 1 A do PRO 2.4 (confirmar o porta-fusível); sobra de cabo 2 × 2,5 mm² para o sub; fio fino para alimentação do PRO 2.4 e remoto; termorretrátil, ferro de solda, multímetro e jogo de bits.
- 2026-11-22: A pedido do usuário, **fita de tecido, espátulas plásticas e graxa dielétrica saíram dos opcionais e entraram na lista de compra** (itens 12 a 14). Na estimativa de 22/11, os dois primeiros estavam como opcionais (R$ 15–30 cada); a graxa não estava (estimativa R$ 10–25).
- 2026-11-22: Usuário lembra que **os alto-falantes já têm fios soldados nos terminais**. Na montagem dos conectores Permak, esse fio vira o rabicho do falante: cortar deixando ~15–20 cm e emendar nele a metade do conector (solda + termorretrátil), sem mexer na solda do terminal. Só refazer a solda no terminal se o fio estiver escurecido/esverdeado ou com a capa ferida. Não muda a lista de compras.
- 2026-11-23: Respostas do usuário às conferências antes da compra: (1) parafuso do cinto — **assume que o kit de ferramentas cobre** (chave de 17 mm), sem medir agora; se não servir, compra-se a chave avulsa; (2) explicado o que é "prisioneiro" (pino roscado fixo do disjuntor, onde entra o olhal e aperta a porca); (3) conferir se a unidade do kit Permak é o par completo — **depois**; (4) **porta-fusível do fusível de 1 A será comprado** → item 15 da lista.
- 2026-11-23: Usuário: o porta-fusível do PRO 2.4 será para **fusível de vidro 5 × 20 mm** (o fusível de 1 A que possui é desse formato). Serve: 1 A cobre os 70 mA do processador com folga. Porta-fusível de linha (com rabicho), instalado no +12 V do PRO 2.4, junto ao bloco distribuidor; levar 1 ou 2 fusíveis de 1 A de reserva.
- 2026-11-23: Usuário perguntou por que só 2 RCAs. Conta: 5 ligações RCA no sistema — 3 longas da multimídia à mala (FL/FR → PRO 2.4; RL/RR → TS400x4 CH3/CH4; SW → SD800.4 CH3/CH4) e 2 curtas na mala (PRO 2.4 saídas 1/2 → SD800.4 CH1/CH2; saídas 3/4 → TS400x4 CH1/CH2). Das longas, 1 já está passada (ASX) → comprar 2; as curtas são os 2 RCAs de 1 m de casa. Opção: comprar 3 longos e aposentar o antigo (cabo simples e sem data), aproveitando que os acabamentos estarão abertos.
- 2026-11-26: Usuário acha que o carro pode ter **3 RCAs**, não 1. Fotos de 22/11 revisadas (01, 02, 05, 08, 11 e 22, ampliadas): **só aparece 1 par** — na mala, um plugue vermelho e um dourado (foto 01; as várias voltas rosadas são a sobra enrolada do mesmo cabo duplo ASX); atrás da multimídia, também um vermelho e um dourado (foto 22, desfocada). As fotos não mostram tudo (carpete, atrás da multimídia fora do quadro). **A conferir no carro:** contar os plugues na ponta da mala — cada par tem 2 (vermelho + branco/dourado); 3 pares = 6 plugues. Se forem 3 pares em bom estado, não precisa comprar RCA longo.
  - **Fechado com o usuário (26/11): o carro tem só 1 RCA** (o ASX). Continua valendo comprar **2 RCAs de 5 m** (ou 3, para aposentar o ASX e deixá-lo como reserva — decisão ainda em aberto).
- 2026-11-26: Ideias do usuário: (1) **usar o RCA ASX existente na traseira** (RL/RR → TS400x4 CH3/CH4) — aprovado: o cabo antigo fica no sinal menos crítico (preenchimento) e os 2 RCAs novos vão na frente (FL/FR → PRO 2.4) e no sub (SW → SD800.4). A conta não muda: comprar 2. (2) **Traseira 6TR4A no amplificador interno da multimídia** (~14–22 W RMS por canal × 60 W AES do falante): **serve como preenchimento** — sem risco para o falante; HPF 120 Hz, atraso e fader da multimídia continuam valendo na saída de alto-falante; em volume máximo a traseira distorce antes da frente (baixar o fader). Consequências: o fio do traseiro tem de ir ao painel (chicote original, se estiver inteiro — testar continuidade do conector da multimídia até o falante), não à mala; o ASX vira reserva; o TS400x4 ficaria só com os tweeters (2 dos 4 canais livres — em janeiro, avaliar módulo de 2 canais). Recomendado: começar com a traseira na multimídia e só levar ao TS400x4 se faltar pressão; o ASX continua passado até a mala para essa troca ser só plugar. Decisão do usuário pendente.
- 2026-11-26: **Nova divisão de canais (ideia do usuário), avaliada e aprovada pelo consultor** — substitui a arquitetura de 21/11 nos módulos e o item (1) acima (ASX na traseira):
  | Módulo / canal | Falante | Sinal | Ganho (tensão alvo) |
  |---|---|---|---|
  | TS400x4 CH1+CH2 em ponte | Snake esq. (200 W @ 4 Ω) | PRO 2.4 saída 1 | até **28 V** (200 W); começar em ~25 V |
  | TS400x4 CH3+CH4 em ponte | Snake dir. | PRO 2.4 saída 2 | idem |
  | SD800.4 CH1 / CH2 | Tweeter JBL 1TWMS80 esq. / dir., divisor JBL em série | PRO 2.4 saídas 3 / 4 | **11 V** (teto 15,9 V) — o mesmo alvo das JBL de casa nesses canais: o GAIN CH1-CH2 pode ficar na mesma marca (conferir com multímetro na 1ª troca) |
  | SD800.4 CH3+CH4 em ponte | Sub | multimídia SWL/SWR | 22 V (sem subsônico) |
  | Multimídia (amplificador interno, saída traseira) | 6TR4A traseiros | — | fader; HPF 120 Hz e atraso na multimídia |
  - Ganhos: Snake recebe a potência nominal (200 × 132 W, +1,8 dB); todos os 8 canais usados (o TS400x4 deixa de ficar com 2 canais ociosos); traseira não precisa de módulo.
  - **RCA:** longos = 2 (FL/FR → PRO 2.4; SW → SD800.4 CH3/CH4); o carro tem 1 (ASX) → mínimo 1 novo; **recomendado 2 novos** e o ASX passado como reserva. Curtos: os 2 de 1 m (PRO 2.4 → módulos); talvez 2 adaptadores Y, se a ponte do TS400x4 pedir sinal nas duas entradas do par.
  - **Conferir no manual do TS400x4 na compra:** como se liga a entrada em ponte (só a entrada do 1º canal do par ou as duas); crossover fixo de 90 Hz/12 dB — usar **HP** (ou Full/Off, se houver; HP 90 Hz somado ao HPF de 100 Hz do DSP fica um pouco mais íngreme, ajuste de ouvido); fusível do manual (20 A, registrado em 01/11) com os Snake a 200 W: ~37 A só com tom senoidal no máximo, ~5–10 A com música — se queimar em volume alto, é sinal de excesso; ramal de 6 mm² serve.
  - **Elétrica:** pior caso (tom senoidal) ~57 A, com música ~8–20 A — igual ao plano anterior; disjuntor de 50 A e cabo de 10 mm² continuam.
  - Traseira na multimídia: fio do 6TR4A até o painel (chicote original, se estiver inteiro — testar continuidade); os fios traseiros que chegam à mala ficam sem uso. Saídas dianteiras de alto-falante da multimídia isoladas (frente vem dos módulos).
  - Conectores Permak: sem mudança de quantidade; no carro, a metade do SD800.4 CH1/CH2 passa a ir aos tweeters (antes, Snake).
  - Potência esperada nos traseiros (multimídia): ~14–22 W RMS por canal (limpo ~10–15 W); no uso como preenchimento, ~0,5–2 W em volume normal e ~2–5 W alto. 6TR4A (60 W) sem risco; perto do volume máximo a traseira distorce antes da frente → baixar o fader.
- 2026-11-26: Pergunta: tweeter Bravox junto do 6TR4A na traseira? **Não** — o 6TR4A é triaxial (já toca agudo); agudo atrás puxa o palco para trás; em paralelo no canal da multimídia a carga cairia para ~2 Ω (ou ~1,3 Ω, se o Bravox for mesmo ~2 Ω). **Decisão do usuário: segue o plano acima, sem Bravox** (ficam de reserva ou para o home theater).

## Plano em fases (decidido pelo usuário em 23/11/2026)
Objetivo: **desmontar soleiras e acabamentos uma única vez.** Depois disso, só abrir portas e coluna para colocar os falantes.

**Fase 1 — dezembro/2026: só a passagem dos fios** (sem instalar equipamento). Tudo com plugue, pontas jogadas para a traseira.
| Lance | Destino na frente | Qtde | Metragem estimada |
|---|---|---|---|
| Tweeter esq. e dir. | coluna A | 2 | ~12 m |
| Midrange dedicado futuro esq. e dir. (reserva para o 3 vias) | mesmo lugar dos tweeters | 2 | ~12 m |
| Snake esq. e dir. | pé da coluna, junto à passagem para a porta | 2 | ~11 m |
| JBL/Selenium traseiros esq. e dir. | junto à passagem para a porta traseira | 2 | ~6 m |
| **Total de cabo 2 × 1,5 mm²** | | 8 lances | **~41 m → comprar 50 m** |
Entra na mesma abertura (acrescentado pelo consultor): os **cabos RCA** (2 novos; o antigo fica passado como reserva, ou 3 novos); **etiqueta nas duas pontas de cada lance** (TW-E, TW-D, MID-E, MID-D, SNK-E, SNK-D, TR-E, TR-D); ~50 cm de sobra enrolada em cada ponta; um **cordão-guia de nylon** deixado ao longo da soleira para puxar fio futuro sem desmontar; metade do conector Permak já emendada na ponta do lado do falante; pontas da traseira isoladas e identificadas. Os fios antigos só saem quando os módulos entrarem (se o som atual, pela multimídia, depender deles).
Compras da fase 1: 25 m de cabo paralelo de cobre 2 × 1,5 mm² (decisão de 25/11, ver histórico); 2 ou 3 RCAs de 5 m; conectores Permak (8 pares nos falantes + 6 nas saídas do SD800.4 = 14 pares → **4 kits de 4**); fita de tecido, abraçadeiras, fita isolante; espátulas plásticas; kit de ferramentas; cordão de nylon (~15 m); etiquetas/fita crepe e caneta permanente. (Solda, termorretrátil e multímetro: já tem.)

**Fase 2 — janeiro/2027 em diante: equipamentos e alimentação.** **Módulo Taramps TS 400x4 (ainda não comprado; compra em janeiro)**, disjuntor tipo B 50 A, bloco distribuidor com porta-fusível Technoise (+ fusíveis mini-ANL de 40 A e 20 A) e bloco de terra simples, cabo vermelho 10 mm² (0,5 m), olhais, ilhós com alicate, porta-fusível 5 × 20 mm, graxa dielétrica, tweeters JBL 1TWMS80. Trabalho: mala (módulos, bloco, terra em ponto próprio), cofre (disjuntor), portas e coluna (falantes e tweeters nos plugues).

- 2026-11-23: Plano em fases registrado. Mudanças em relação ao que estava fechado: fios **novos também para os traseiros** (antes ficavam os antigos); **par extra para midrange futuro**; cabo paralelo sobe de 25 m para 50 m; conectores Permak sobem de 3 para 4 kits. A confirmar com o usuário: 2 ou 3 RCAs novos; se o som atual precisa continuar funcionando até janeiro.
- 2026-11-23: **Pesquisa do cabo 2 × 1,5 mm², 50 m** (Amazon, páginas dos produtos abertas; frete grátis visto para CEP de SP, a confirmar para a BA; ML e Magalu não abriram):
  | Opção | Formato | Preço no Pix | Preço cheio | Vendedor | Observação |
  |---|---|---|---|---|---|
  | Belcabos PP 2 × 1,50, 50 m (B0B7KB35YJ) | PP redondo | R$ 227,52 | R$ 239,50 | Sulbel Materiais Elétricos | cobre, NBR NM 247-5 na descrição; 4,1 estrelas (9) |
  | Technoise "cobre puro cristal" 2 × 1,5 mm, 50 m (B0GZHTFN4Y) | paralelo | R$ 232,97 | R$ 245,23 | Emove Shop, enviado pela Amazon | descrição cita a marca CRK (contradição com o campo marca); 7 em estoque |
  | Sil Silflex PP 2 × 1,5 mm, 50 m (B0HKB5SQMH) | PP redondo | R$ 284,05 | R$ 299,00 | Eletrisa Materiais Elétricos, enviado pela Amazon | 100 % cobre; 5,0 estrelas (1) |
  | Technoise paralelo 16 AWG, 50 m (B0H1MMZBTV) | paralelo | R$ 405,57 | R$ 426,92 | só listagem | — |
  Pista não conferida (resumo de busca, Mercado Livre): **Sil cordão paralelo 2 × 1,5 mm, rolo de 50 m, R$ 175,50** — a melhor relação marca/preço se confirmar na página. Rolos de 50 m a R$ 55–62 descartados: 50 m de 2 × 1,5 mm² têm 1,34 kg de cobre, que sozinho custa mais que isso. Formato: preferir **paralelo** (chato) ao PP (redondo, com capa externa): são 8 lances juntos na soleira.
- 2026-11-23: Usuário: **o subwoofer já está com cabo de 2,5 mm² "blindado"** (entendido como cabo com capa externa, tipo PP; a confirmar se há malha de blindagem de fato). Bitola certa para o sub (10 A a 400 W; 5,5 A no alvo de 22 V) — o cabo fica. Blindagem não faz diferença em fio de falante (sinal forte, baixa impedância); se houver malha, deixar sem ligar. A sobra de 2 × 2,5 mm² deixa de ser necessária para o sub.
- 2026-11-23: Pergunta do usuário: dá para ter "efeito 3D" em 2 vias? **Sim** para largura, voz centralizada e boa parte da profundidade (frente ativa + atraso por saída no PRO 2.4); **limite: altura do palco**, porque a voz sai do Snake na porta — é o que o midrange dedicado futuro resolve (fios de reserva na fase 1). Prioridades de ajuste registradas: (1) atraso por falante medido até a cabeça do motorista; (2) tweeter na coluna apontado para o centro; (3) cruzamento em 3,5 kHz; (4) traseira como ambiência, 6–10 dB abaixo e 10–20 ms atrasada. Duas memórias: motorista e todos.

## Outros branches com informação do carro (levantamento de 23/11/2026) — a reconciliar com o usuário
Existem 23 branches além do `main` e do de trabalho. Os antigos (até 05/11) têm raiz diferente do `main` e não fundem direto; o conteúdo precisa ser copiado.
| Branch | Data | Conteúdo | Situação |
|---|---|---|---|
| `ccr-1272f8ba-nfxoqj` | 17/11 | `projetos/som-carro/lista-compras.md` + "alimentação fechada" no projeto: lista de compras da instalação elétrica | **não está no main; conflita com decisões de 21–23/11** |
| `ccr-f554e6d9-otcrxi` | 01/11 | `projetos/home-theater-2.1/fiacao-modular.md` e `rack-modular.html`: "pod" removível casa ↔ carro (módulo + processador numa placa), Anderson SB50 na energia, conector selado no REM, Speakon NL4 nos falantes | **não está no main; alternativa aos conectores decididos em 21–22/11** |
| `ccr-01d9b7a2-yxuxrw` | 14/10 | projeto 3 vias do Grand Siena: Hertz MP 70.3 (médio) + Audison AP 1 (tweeter) | resumido no main (06/11); base do midrange futuro |
| `ccr-62a249a8-08wdag`, `ccr-e2d78753-bk3bku`, `ccr-0451939c-fn8a94`, `ccr-3da43bbb-nqveiu` | 01–05/11 | histórico da configuração do carro, multimídia, tweeter Bravox | resumidos no main (06/11) |
| `ccr-fb7aba1d-9wdvw8`, `ccr-872fbb6a-chmz0r` | 07–09/11 | notas do duto do sub (ganho, joelho) | superadas pelo que está no main |
| demais (`ccr-73fa6d3a…`, `ccr-78b4e7dd…` etc.) | out/2026 | andamento do guia do home theater 2.1 | fora do projeto do carro |

**Diferenças do branch de 17/11 em relação ao que foi fechado em 21–23/11:**
1. **Cabo de falante:** lá, **2,5 mm² para todos** (rolo de 50 m 2 × 2,5 mm² 100 % cobre, "folga para upgrade"); aqui, 1,5 mm² para os 8 lances.
2. **TS400x4:** lá aparece **na lista de compras** (ainda não comprado?); aqui foi tratado como já possuído e ficou fora da estimativa de custo.
3. **Disjuntor de 20 A ("Type A") e fusíveis de vidro 5 × 20 T1A (3 un.):** lá, a comprar; aqui, o de 20 A e o fusível de 1 A foram tratados como já possuídos.
4. **Tweeters JBL:** lá constam em "já tem"; aqui, "será comprado".
5. **Disjuntor da bateria:** lá, "60 A, já tem, reaproveitar"; a foto de 22/11 mostra Tramontina C50 residencial (vale a foto: trocar pelo tipo B).
6. **Cabo de força:** lá, instalação elétrica nova completa bateria → mala (cabo Sil 10 mm², 10 m, ~R$ 125); aqui, reaproveitar o cabo existente (classe 10 mm², cobre).
7. **Itens que só estão lá:** RCA com fio remoto embutido para a frente; cabo preto 10 mm² (1 m); cabos 6 mm² vermelho e preto (1 m cada) para o TS400x4; cabos 1,5 mm² para o PRO 2.4; parafuso M8 com arruela estrela para o terra; passa-fio de borracha; conduíte corrugado; emenda de redução 6 → 1,5 mm²; barramento 1 × 4 com redutores (Technoise ou Ophera).
- 2026-11-23: **Usuário: o TS400x4 ainda não foi comprado — será comprado em janeiro/2027** (fase 2). Corrige o que constava desde 05/11 ("usuário possui"). Consequências: sai de "já tem" e entra nas compras da fase 2; **não está na estimativa de custo de 22/11** (preço a cotar); até ele chegar, tweeters e traseiros não têm amplificador próprio — coerente com a fase 2. A fase 1 (passagem dos fios) não muda. Continuam em aberto do levantamento dos branches: bitola dos falantes (1,5 × 2,5 mm²), se o disjuntor de 20 A, os fusíveis de 1 A e os tweeters já foram comprados, cabo de força novo × existente, Permak × pod.
- 2026-11-23: **Bitola dos fios de falante fechada pelo usuário: 2,5 mm² nos alto-falantes (Snake e JBL traseiros) e 1,5 mm² nos tweeters** (e na reserva do midrange). Coerente com a decisão de 17/11 para os falantes e com o manual do SD800.4 (cabo de falante de 2,5 mm²). Perda em 5 m: 0,07 dB (2,5 mm²) × 0,12 dB (1,5 mm²). Compra da fase 1: 2 × 2,5 mm², ~17 m (rolo de 25 m ou 20 m por metro) + 2 × 1,5 mm², ~24 m (rolo de 25 m) — substitui o rolo único de 50 m de 1,5 mm². Resolve o item 1 das diferenças entre branches.
- 2026-11-23: **Bitola final: 1,5 mm² para os 8 lances** (rolo de 50 m). O usuário esclareceu que os 2,5 mm² eram uma dúvida, não uma decisão: se 1,5 mm² serve para estes e para os próximos falantes, fica 1,5 mm². Anula o registro anterior de hoje ("2,5 mm² nos alto-falantes"). Próximos falantes previstos: **alta fidelidade (SQ), menos potência, kit 3 vias** — pedem menos corrente que o Snake, então a bitola sobra.
  - Conferido com `calc_som.py cabo-falante`: falante de 4 Ω a 5 m pede no mínimo 0,86 mm² (a 6,5 m, 1,12 mm²) pela regra de resistência ≤ 5 % da impedância → 1,5 mm² atende com folga.
  - **Correção de conta (erro do consultor):** as perdas citadas em 21–23/11 estavam pela metade. Valores corretos em 5 m, falante de 4 Ω: 0,75 mm² = 0,48 dB; **1,5 mm² = 0,25 dB** (não 0,12); **2,5 mm² = 0,15 dB** (não 0,07); 0,5 mm² = 0,72 dB (não 0,36). A conclusão não muda: a diferença entre 1,5 e 2,5 mm² é 0,10 dB, inaudível. A recomendação de 2,5 mm² do manual do SD800.4 cobre o pior caso do módulo (2 Ω, lances longos).
- 2026-11-23: **Decisão do usuário: comprar o cabo 2 × 1,5 mm² da Technoise, de cobre.** Avaliação: marca conhecida de acessórios de som automotivo no Brasil; serve, desde que seja a **linha de cobre** (a marca também vende CCA) e a compra venha de loja com nota. Ressalvas: cabo de som não tem certificação obrigatória; a Technoise costuma indicar a bitola em AWG (16 AWG = 1,31 mm², ainda acima do mínimo de 1,12 mm² do lance mais longo); o anúncio de R$ 232,97 na Amazon traz "Technoise" no campo marca e "CRK" na descrição — duvidoso; o anúncio "Technoise 16 AWG 50 m" estava a R$ 405,57 (listagem). Conferir na chegada: "100 % cobre"/OFC na embalagem, fio raspado sem prata por dentro e **peso do rolo** (50 m de cabo duplo têm 1,34 kg de cobre em 1,5 mm², ou 1,17 kg em 16 AWG; com a capa, o rolo deve passar de ~1,8–2 kg).
- 2026-11-23: **Qual é a opção da Sil** (pergunta do usuário). Produto equivalente ao cabo de som: **cordão paralelo flexível Sil 2 × 1,5 mm², 300 V** (chato, dois condutores lado a lado, normalmente branco; vendido em "Pocket Pack" de 10, 15 e 25 m e em rolos de 50 e 100 m, ou por metro em loja de material elétrico). Não confundir com o **PP Silflex** (redondo, com capa externa) nem com o **FlexSil 750 V** (um condutor só). Preços vistos em 23/11 (Amazon, listagem): cordão paralelo Sil 2 × 1,5 mm², **100 m, R$ 420,00** (B0C7NDQ3P6); PP Silflex 50 m, R$ 284,05; FlexSil 1,5 mm² **50 m vermelho R$ 132,05 + 50 m preto R$ 132,05 = R$ 264,10** (B07L44Z3H9 e B07L44PH6M) — par vermelho/preto já polarizado, a torcer levemente. Telhanorte tem o Pocket Pack de 25 m (1,50 mm), indisponível no dia. Não confirmado: rolo de 50 m do cordão paralelo Sil a R$ 175,50 no Mercado Livre (resumo de busca de 23/11). O cordão paralelo não é polarizado: marcar um condutor nas duas pontas.
- 2026-11-23: Usuário encontrou o **Technoise de cobre pelo mesmo valor da opção Sil, em anúncio que confirma cobre** → fica o **Technoise 2 × 1,5 mm², 50 m** (item 4 da lista). Preço e link do anúncio ainda não informados. Conferir no anúncio: 50 m, 2 × 1,5 mm² (ou 16 AWG), "100 % cobre"; na chegada: raspar um fio e pesar o rolo (≥ ~1,8–2 kg).
- 2026-11-23: **Cabo escolhido — anúncio conferido por prints do usuário** (`compras/2026-11-23-cabo-technoise/`): Mercado Livre, "Fio Paralelo Puro Cobre Technoise 2x1,5mm Cristal Rolo 50mt", loja **EMOVE** (verificada), **R$ 193,88** (de R$ 232,99; 12 × R$ 19,06), **frete grátis**, 4,4 estrelas, +100 vendidos; link https://meli.la/2iK6dv7. Ficha: marca "Technoise - CRK", modelo PARALELO 2X1,50 CRK, cobre + PVC, cristal com fita verde de polaridade, 50 m, "resistência máxima de 10 Ω/km e amperagem de 5 A", rótulo do rolo "Technoise — cobre 100 % puro".
  - "CRK" é a linha da própria Technoise: desfaz a suspeita de contradição levantada no anúncio da Amazon (mesmo vendedor, lá a R$ 232,97).
  - 10 Ω/km por condutor corresponde a ≥ 1,7 mm² de cobre (1,5 mm² dá 11,5 Ω/km): coerente com a bitola anunciada. Os "5 A" são uma classificação conservadora do fabricante; o Snake pede 5,7 A só com tom contínuo no máximo (7,1 A a 200 W) e a média com música é bem menor — aquecimento desprezível (< 0,6 W por metro a 7 A).
  - **Avaliação: comprar.** Conferir na chegada: fio raspado cor de cobre e peso do rolo ≥ ~1,8 kg. Na estimativa de custo, a linha do cabo passa a R$ 193,88 (50 m).
- 2026-11-23: Usuário enviou o link completo de um anúncio do Mercado Livre: https://www.mercadolivre.com.br/up/MLBU1986500196?pdp_filters=item_id%3AMLB4040212604 (item MLB4040212604). **Não foi possível abrir daqui** (o Mercado Livre pede login). Presumido ser o mesmo anúncio do cabo Technoise 2 × 1,5 mm² de 50 m (R$ 193,88); a confirmar com o usuário.

- 2026-11-25: **Pesquisa de bloco distribuidor com porta-fusível** (pedido do usuário; ML pelo Chrome logado + Amazon):
  | Opção | Preço (frete) | Entradas / saídas | Fusível | Observação |
  |---|---|---|---|---|
  | **Technoise "Bloco Distribuidor Porta Fusível"** (ML, NS E-Commerce, MercadoLíder) — https://www.mercadolivre.com.br/bloco-distribuidor-porta-fusivel-technoise-carro/up/MLBU3902437533 | R$ 174,00 (grátis, 6/dez) | 2 × 0/4 AWG / **4 × 4/8 AWG** | **mini-ANL** (4 inclusos, valor não informado) | marca nacional, garantia 6 meses, 5,0 (9 opiniões) — **sugestão** |
  | Ophera SIG44B (ML) | R$ 204,76 | 2 × 0 AWG / 4 × 4 AWG (com redutores até 8 AWG) | 4 × 100 A inclusos (não servem) | últimas 2 unidades |
  | Connection BFD 21 (ML) | ~R$ 315 | 2 saídas | — | só 2 vias, caro para o projeto |
  | Genéricos da Amazon (B0HJHSY8GT R$ 108,35; B0HLL5NPCF R$ 95,04 + R$ 33,37) | — | não informado | tipo não informado | vendedores estrangeiros, anúncio sem especificação: descartados |
  - Encaixe no projeto: entrada aceita o cabo de 10 mm²; saídas 4/8 AWG aceitam 10 mm² (SD800.4) e 6 mm² (TS400x4, com ilhós). Fusíveis a comprar: **mini-ANL 40 A** (SD800.4) e **20 A** (TS400x4) — ex.: "5 Unidades Fusível Anl Mini Faca 20a a 200a Variação Escolha" (ML, ITECH, R$ 28,90, MLBU4052228102; conferir no seletor que há 20 A). PRO 2.4: o fio de 1,5 mm² não prende numa saída de 8 AWG → continua o porta-fusível 5 × 20 de 1 A, ligado na 3ª saída com ilhós/redutor.
  - Alternativa mais barata (já na lista): bloco sem fusível (R$ 57,85 o par) + porta-fusível MIDI 40 A e 20 A (~R$ 30 cada) ≈ R$ 118 — mesma proteção, menos organizado. O bloco com fusível substitui o bloco positivo e o porta-fusível de 20 A; o bloco de terra continua.
- 2026-11-25: **Bloco Technoise na Shopee e equivalentes no AliExpress** (pedido do usuário; Shopee bloqueia a busca sem login → anúncio aberto pelo Google Shopping):
  | Opção | Preço | Total sem frete | Observação |
  |---|---|---|---|
  | Technoise, Shopee (Extreme Audio, 17,3 mil avaliações, nota 5,0 em 28) — https://shopee.com.br/product/388765779/18599184965 | R$ 151,05 no Pix (R$ 158,99 outros meios); frete R$ 13,02 ou grátis com cupom | **R$ 151,05** | mesma descrição do ML (2 × 0/4 AWG → 4 × 4/8 AWG, 4 mini-ANL). Título diz "Positivo + Negativo", mas a descrição é a de uma peça só — conferir com o vendedor. Avaliação: os fusíveis que vêm são de **60 A** |
  | Technoise, ML (NS E-Commerce) | R$ 174,00, frete grátis | R$ 174,00 | referência da pesquisa anterior |
  | Genérico AliExpress, 4 vias (DONGGUAN ONEGOL) — https://pt.aliexpress.com/item/1005005651559932.html | R$ 93,39 + R$ 23,38 de imposto estimado, frete grátis | **R$ 116,77** | mesmas bitolas (0–4 / 4–8 AWG), 60 A; entrega 9–19/dez; sem marca |
  | Genérico AliExpress, 4 vias (LNCN Store, Choice) — https://pt.aliexpress.com/item/1005006109662118.html | R$ 102,87 + R$ 25,74 | R$ 128,61 | entrega 6–16/dez; "0, 2, 4, 6, 8 AWG" sem separar entrada e saída |
  - Technoise não aparece no AliExpress (marca nacional). Os genéricos têm o mesmo formato e podem ser do mesmo fabricante chinês, mas isso **não foi confirmado**.
- 2026-11-25: **Decisão do usuário: bloco distribuidor com porta-fusível Technoise.** Substitui o par de blocos sem fusível e o porta-fusível de 20 A do TS400x4 (a proteção de 20 A passa a ser o fusível mini-ANL na saída do bloco). Ligação: saída 1 → SD800.4 (10 mm², mini-ANL 40 A); saída 2 → TS400x4 (6 mm² com ilhós, mini-ANL 20 A); saída 3 → rabicho com ilhós → porta-fusível 5 × 20 de 1 A → PRO 2.4 (1,5 mm²); saída 4 livre. Entrada: cabo de 10 mm² com ilhós/redutor. Compra na fase 2 (janeiro), de preferência na Shopee (R$ 151,05 no Pix) depois de confirmar com o vendedor se vem 1 peça ou o par; ML a R$ 174,00 como alternativa. Na estimativa de 22/11, a linha "Bloco distribuidor (par)" e a do porta-fusível de 20 A passam a ser Technoise (~R$ 151–174) + fusíveis (~R$ 29) + bloco de terra simples; total a refazer.
- 2026-11-25: **Anúncio avaliado (link do usuário):** ML "Fio Paralelo 2x1,5 100% Cobre 25 Metros Technoise Cristal" (catálogo MLB68387156, item MLB5251047257), vendedor PRIMELINK_DISTRIBUIDORA (+50 vendas), **R$ 95,00 por 25 m**, frete grátis (a partir de 6/dez), nota 5,0 em 29 opiniões do produto. Ficha: Technoise, 2 × 1,5 mm², 100 % cobre (descrição: "cobre livre de oxigênio"), PVC cristal, 150 V, nacional. **Serve** (mesma especificação do cabo escolhido), mas 2 rolos = R$ 190,00 contra R$ 193,88 do rolo de 50 m da EMOVE — R$ 3,88 de diferença. Fica o rolo de 50 m (um rolo só, loja verificada com mais vendas); este vale como plano B se o de 50 m acabar. Dois rolos de 25 m também atendem os 8 lances se cortados por lado (esquerdo ~18 m, direito ~23 m).
- 2026-11-25: **Decisão do usuário: rolo de 25 m, só para 2 tweeters, 2 Snake e 2 JBL traseiros; Snake e traseiros reaproveitam os fios já passados, cortando as partes ruins.** Muda a fase 1 de 23/11: sai a reserva de midrange (o usuário foi avisado de que o kit 3 vias SQ previsto no perfil vai exigir reabrir as soleiras) e volta a valer o fio existente onde ele passar na conferência (decisão de 22/11 de "fiação nova" fica revista para Snake e traseiros).
  - Conta: 6 lances novos dariam ~27–29 m (estimativa, não medida no carro) → 25 m não bastaria; com o reaproveitamento, o fio novo vai só nos tweeters (~10,5–11,5 m) e sobram ~14 m para repor qualquer lance existente que falhar.
  - Antes de passar o fio: fazer a **conferência dos 4 pares** (tabela acima) — bitola (Snake ≥ 0,75 mm², traseiro ≥ 0,5 mm²), cobre e não CCA, sem curto com a lataria. Snake com fio < 0,75 mm² → trocar pelo novo (~4–6 m cada; cabe na sobra).
  - Remover parte ruim: cortar até o cobre limpo (sem verde/escuro), emendar com **solda + termorretrátil** (ou o conector Permak, se a emenda cair no ponto de plugue), **fora da soleira** onde o fio foi prensado — de preferência no porta-malas ou no pé da coluna, onde dá para inspecionar. Se a emenda tiver de ficar sob o acabamento, passar o fio pelo canal sem ficar sob grampo ou parafuso.
