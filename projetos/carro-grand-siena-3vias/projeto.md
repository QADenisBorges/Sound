# Som do carro — Grand Siena, 3 vias ativo com DSP de 8 canais

## Resumo
Frente em 3 vias **ativo**: midbass na porta, médio + tweeter na coluna A, cada via em canal próprio do DSP de 8 canais (6 frente + 2 sub). Tratamento acústico das portas dianteiras pensado para o midbass.

## Premissas
- Carro: Fiat Grand Siena, multimídia (confirmar saída RCA; se não houver, entrada de alto nível do DSP).
- Haverá sub (modelo ainda a definir; a confirmar se é o Protech 8" do home theater ou outro).
- O SD800.4 continua no home theater (`../home-theater-5.1/`).
- **R$ 2.000 são só para os falantes das 3 vias** (6 falantes). DSP, módulos, elétrica e tratamento ficam fora desse valor.
- Porta original de 6": medir furo e profundidade com o vidro abaixado antes de comprar o midbass (6,5"/165 mm pode caber com anel).
- O médio 3" não cabe no triângulo original: pod próprio na coluna A ou no canto do painel, com caixinha selada de ~0,3–0,5 L.

## Arquitetura
```
Multimídia (RCA, EQ/loudness desligados)
   └→ DSP 8 canais
        ├ Saídas 1/2 → Módulo A CH1/CH2 → Midbass E/D (porta)
        ├ Saídas 3/4 → Módulo A CH3/CH4 → Médio 3" E/D (coluna A, caixinha selada)
        ├ Saídas 5/6 → Módulo B CH1/CH2 → Tweeter E/D (coluna A)
        └ Saídas 7/8 → Módulo B CH3+CH4 em ponte → Sub
Bateria → fusível 80 A (≤ 40 cm) → 16 mm² OFC → distribuidor com 2 fusíveis → módulos A e B
```

## Dimensionamento
Cortes iniciais (LR 24 dB/oit; ajustar medindo):
| Via | Passa-alta | Passa-baixa |
|---|---|---|
| Sub | subsônico conforme a caixa | ~100 Hz (opção A, Snake) |
| Midbass (Snake ESV) | ~100 Hz | 400–500 Hz |
| Médio 3" | 400–500 Hz | 3,5–5 kHz |
| Tweeter | 3,5–5 kHz (≥ ~2,5 × Fs) | — |

Potência por via: midbass 75–100 W, médio 30–50 W, tweeter 20–40 W.
Elétrica (calc_som): 2 módulos 4 canais ≈ 800 W → máx. 72,5 A, média com música 9–24 A; 60 A em 5 m com queda ≤ 0,5 V → 16 mm² OFC, fusível 80 A.

## Requisitos dos falantes (orçamento R$ 2.000 para os 6)
Divisão sugerida: midbass R$ 500–800 · médio R$ 400–600 · tweeter R$ 400–600.

| Via | Obrigatório | Desejável |
|---|---|---|
| Midbass 6"/6,5" | Cabe na porta (furo e profundidade medidos); Fs ≤ 70 Hz; 4 Ω; sensibilidade ≥ 88 dB | Xmax ≥ 4 mm; Qts 0,5–0,8 (trabalha bem em porta/baffle infinito); cone rígido |
| Médio 3" | Fs ≤ 150 Hz; resposta útil 300 Hz–6 kHz; 4 Ω; profundidade que caiba no pod | Xmax ≥ 2 mm; sensibilidade 86–90 dB |
| Tweeter | Domo macio; Fs ≤ 1,5 kHz; 4 Ω | Flange pequena (cabe no pod junto do médio); sensibilidade 89–92 dB |

Caminhos: kit 2 vias de qualidade (usa só woofer e tweeter; o crossover passivo fica sem uso) + par de médios 3" avulso, ou os três avulsos. Kit 3 vias pronto de qualidade costuma passar do orçamento (ex.: Hertz MPK 163.3 a ~R$ 4.700 no Magalu, out/2026).

## Riscos
- EQ/loudness da multimídia ligado estraga a calibração do DSP.
- Gravar os cortes no DSP **antes** de ligar os tweeters.
- Ganho alto no módulo do tweeter → chiado; ganho baixo no módulo, volume pelo DSP.

## Pendências
- Falante atual da porta: **Snake ESV (6", provável ESV200)**, médio-grave profissional com ogiva cromada. Dados de lojas (divergentes, sem ficha oficial): 200 W RMS, 4 Ω, sensibilidade 92–95 dB, Fs 94–133 Hz, resposta ~80 Hz–3/6 kHz. Confirmar modelo na etiqueta (ESV200/220/260/280). Já cabe na porta → a profundidade dele é referência para o futuro midbass.
- **Decidido (opção A):** Snake fica como midbass (passa-alta ~100 Hz, sub cruzando em ~100 Hz); os R$ 2.000 vão para médio 3" + tweeter.
- Candidatos (pré-cotação, 14/10/2026):
  - Médio: **Hertz Mille Pro MP 70.3** — Fs 110 Hz, Qts 0,82, Vas 1 L, Xmax 1,5 mm, 88 dB (Hertz), 180 Hz–18 kHz, 50 W RMS, profundidade 44 mm. ML ~R$ 1.480–1.560 (confirmar se é o par). Xmax pequeno → passa-alta ≥ 400 Hz LR24.
  - Tweeter que cabe no orçamento: **Hertz Dieci DT 24.3** — 94 dB, Fs 2,8 kHz (corte ≥ ~5–5,5 kHz), Amazon ~R$ 309. Concessão: Fs acima do requisito (≤ 1,5 kHz).
  - Tweeter ideal para o MP 70.3: **Hertz MP 25.3** (91 dB, 1,4–22,5 kHz) — sem preço no Brasil encontrado; lá fora ~US$ 250 o par.
  - Tweeter alternativo: **Audison Prima AP 1** — 26 mm, 93 dB, 2–20 kHz, 4 Ω, vem com crossover passivo (não usado). ML loja oficial ~R$ 739 (frete grátis); Som Curitiba R$ 764 à vista.
  - Combinações (14/10/2026, preços de anúncio): MP 70.3 + DT 24.3 ≈ R$ 1.791 (cabe; corte ~5–5,5 kHz) · **MP 70.3 + AP 1 ≈ R$ 2.221 (passa R$ 221; corte 3,5–4 kHz) — recomendada** · MP 70.3 + MP 25.3 (sem preço BR). Médios mais baratos de qualidade não apareceram no Brasil (Audison AP 3 sem anúncio; Audison AV 3.0 a R$ 1.778 o par estoura).
  - Falta cotação formal (pesquisa-precos): confirmar se o MP 70.3 de R$ 1.482 é o par.
- Medir a porta (furo e profundidade) e o espaço na coluna A.
- Definir o sub e o DSP/módulos (orçamento à parte).
- Cotação dos falantes com `pesquisa-precos`.

## Histórico de decisões
- 2026-10-14: Projeto iniciado. Frente 3 vias ativo com DSP de 8 canais (6 frente + 2 sub em ponte). R$ 2.000 só para os 6 falantes. SD800.4 fica no home theater (premissa). Requisitos por via definidos.
- 2026-10-14: Falante atual da porta descrito como "200–220 W" com peça central pontuda e brilhante → provável triaxial de reposição (~50–60 W RMS), não midbass. Serve só como provisório no canal de midbass, com ganho limitado.
- 2026-10-14: Falante da porta identificado pelo usuário como **Snake ESV** (não Pioneer/Hurricane). É médio-grave pro, alta sensibilidade e Fs alto: serve de midbass a partir de ~100 Hz com DSP; abaixo disso fica com o sub.
- 2026-10-14: **Opção A escolhida**: mantém o Snake ESV como midbass e os R$ 2.000 vão para médio + tweeter. Cortes ajustados (sub e midbass em ~100 Hz). Candidatos levantados: Hertz MP 70.3 (médio), DT 24.3 ou MP 25.3 (tweeter).
- 2026-10-14: Reanálise com R$ 2.000 para médio + tweeter: recomendado MP 70.3 + Audison AP 1 (~R$ 2.221); dentro do teto, MP 70.3 + DT 24.3 (~R$ 1.791).
