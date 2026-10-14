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
| Sub | subsônico conforme a caixa | 63–80 Hz |
| Midbass | 63–80 Hz | 400–500 Hz |
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
- Medir a porta (furo e profundidade) e o espaço na coluna A.
- Definir o sub e o DSP/módulos (orçamento à parte).
- Cotação dos falantes com `pesquisa-precos`.

## Histórico de decisões
- 2026-10-14: Projeto iniciado. Frente 3 vias ativo com DSP de 8 canais (6 frente + 2 sub em ponte). R$ 2.000 só para os 6 falantes. SD800.4 fica no home theater (premissa). Requisitos por via definidos.
