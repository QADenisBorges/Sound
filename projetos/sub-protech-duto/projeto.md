# Melhoria da caixa do sub Protech Light 8" — duto de 36 Hz

## Resumo
A caixa pronta do sub (≈28 L) já tem a litragem certa; o problema é o duto curto, que sintoniza em ~53–56 Hz e faz um pico de +6 a +8 dB em ~54 Hz (grave embolado, "uma nota só") e perde ~12 dB em 35 Hz. A melhoria é **alongar o duto para ~30 cm passando um tubo PVC esgoto 75 mm por dentro do duto atual**, o que leva a sintonia para **~36 Hz**. A mesma caixa serve para casa e carro (sub + SD800.4 em ponte alternam entre os dois).

## Premissas
- Falante: Protech Light 8", 450 W RMS, Fs 46 Hz, Xmax 8 mm; **Qts/Vas não publicados** → simulado em 3 cenários (Qts 0,45/Vas 4,5 L; 0,50/6 L; 0,55/8 L). A comparação entre as opções foi a mesma nos três.
- Caixa: externa 58 × 26,5 × 26 cm, MDF 15 mm, deitada; falante na metade esquerda da frente, painel inclinado na direita; **25–28 L líquidos** (a frente inclinada tira um pouco).
- Duto atual: na **lateral direita**, oposta ao falante, deitado ao longo do comprimento; **7,5 cm por dentro**, ponta interna ~7,6 cm, **11,5 cm** de comprimento.
- Modelo de Small, QL 7; correção de ponta k = 0,732.

## Arquitetura
```
Casa:  notebook → PRO 2.4 (LPF + subsônico 28 Hz/24 dB) → SD800.4 CH3/CH4 ponte → sub (bobina dupla, ver "Ligação das bobinas")
Carro: AVH-A208BT saída SW (LPF, sem subsônico) → SD800.4 CH3/CH4 ponte → sub
GAIN do SD800.4: um ponto para cada lugar (marcar no knob); alvo depende da impedância final e do lugar (tabela abaixo)
```

## Dimensionamento
| | Atual | Fiamon 3" (avaliado) | **PVC por dentro (escolhido)** |
|---|---|---|---|
| Diâmetro interno | 7,5 cm | ~7,6–7,8 cm | **~7,1 cm** |
| Comprimento | 11,5 cm | 25,9 cm | **~29–31 cm** (cortar 32) |
| Sintonia (Fb) | ~53–56 Hz | ~40–42 Hz | **~36 Hz** |
| Pico | +6,5 dB @ ~54 Hz | +4,3 dB @ ~42 Hz | +3,0 dB @ ~37 Hz |
| −3 dB | 43 Hz | 34 Hz | 31 Hz |
| Nível em 35 Hz | −11,7 dB | −1,5 dB | +2,4 dB |
| % da melhoria máxima | — | ~70% | ~100% |
| Velocidade do ar | — | — | ~10 m/s (OK) |

Selada foi descartada: com este falante (Qts ~0,5, 400 W) cortaria em ~70–80 Hz e tocaria ~6 dB abaixo.

## Material
| Item | Especificação | Onde | Estimativa |
|---|---|---|---|
| Tubo PVC esgoto 75 mm | Tigre (ou equivalente), parede 2 mm → DI ~7,1 cm; usar a ponta **lisa** | ML (~R$ 27–28, 1 m) ou material de construção | R$ 10–28 |
| Silicone neutro | vedação da ponta interna (não acético) | material de construção | R$ 15–25 |
| Cola de contato universal ou adesivo para PVC | só na parte do tubo dentro do duto atual (não usar cola instantânea) | material de construção | R$ 10–20 |
| Lixa 80/120 + retalho de MDF / abraçadeira | ajuste do encaixe, borda arredondada, calço | — | R$ 0–10 |
| **Total** | | | **R$ 35–83** |

Não servem: aero-dutos de 3" comuns (só 10–12 cm), tubo de chaminé (aço fino, diâmetro errado), cano marrom de água.

## Montagem
1. Tirar o falante.
2. Cortar o PVC com **32 cm** a partir da ponta lisa.
3. **Teste a seco:** enfiar o tubo por dentro da caixa, pelo duto atual (a ponta de 7,6 cm serve de guia), até ficar rente à boca externa; ~20 cm ficam para dentro. Justo: lixar se travar; fita se folgado. Vedar a fresta com fita só para o teste.
4. **Varredura** 25–60 Hz, volume baixo, lanterna no cone: o cone quase para em ~36 Hz. Abaixo disso, encurtar a ponta interna 1 cm por vez.
5. **Montagem definitiva:** cola na parte do tubo que fica dentro do duto atual (~11 cm a partir da boca externa), sem escorrer para dentro; encaixar girando; cordão de silicone neutro na fresta da ponta interna; calço no fundo (abraçadeira se o encaixe ficou folgado); arredondar a borda interna com lixa.
6. Cura de **24 h** antes de tocar alto.

## Ajustes depois da troca
- **Casa:** subsônico no PRO 2.4 em **28 Hz, 24 dB/oit** (0,75–0,8 × Fb medida).
- **Carro:** sem subsônico disponível → Bass Boost da multimídia em **0**; a Fb baixa já protege mais que a atual.
- GAIN do SD800.4 regulado com tom + multímetro (alvo 40 V em ponte) em cada lugar.

## Riscos e cuidados
- T/S do falante estimados: a varredura é quem confirma a Fb. Cortar sempre para mais curto, nunca colar antes de testar.
- Junta vazando ar muda a sintonia e faz ruído: silicone contínuo.
- Abaixo da Fb o cone fica solto: sem subsônico (carro), baixar o volume se ouvir batida ou estalo.

## Arquivos
- Modelo 3D: `../home-theater-2.1/caixa-sub-duto-3d.html`
- Ficha do sub e histórico de medições: `../../componentes/subwoofers.md`

## O que se ganha (filmes e música)
- Grave em 30–35 Hz: ~+14 dB; corte −3 dB de 43 para 31 Hz; pico de 54 Hz vira leve reforço em ~37 Hz.
- Filmes: explosões, trovões e trilha (25–50 Hz) com corpo e pressão; diálogo mais limpo. Abaixo de ~28 Hz o subsônico corta (limite de um 8").
- Música: bumbo mais seco (sem a ressonância de 54 Hz), notas graves do baixo mais iguais (Mi 41 Hz, Si 31 Hz), 808/synth bass descem. Volume máximo não muda.
- **Volume baixo:** o ouvido escuta pouco abaixo de ~50 Hz com som baixo, então o ganho de 30–40 Hz aparece em volume médio/alto; em volume baixo melhora a definição. Para presença à noite: **memória "noite" no PRO 2.4** — sub +3 a +5 dB e, se quiser, shelf grave +3 dB abaixo de ~60 Hz; subsônico 28 Hz e limitador mantidos.

## Revisão técnica (07/11/2026)

**Contas do duto conferidas de forma independente** (Helmholtz, k = 0,732; modelo de Small, QL 7, 26 L): duto atual 7,5 × 11,5 cm → **53,6 Hz** (27 L); PVC DI 7,1 cm com 28 / 30 / 32 cm → 36,3 / 35,2 / 34,3 Hz (27 L) e 37,7 / 36,6 / 35,6 Hz (25 L). Pico, −3 dB e nível em 35 Hz batem com a tabela acima (diferença ≤ 0,3 dB). Velocidade no duto ~10 m/s. **O dimensionamento está certo.**

### 1. Diâmetro do duto atual — conferir antes de comprar
A foto da trena (`../home-theater-2.1/fotos/2026-10-27-duto-sub/duto-diametro-trena.jpg`) mostra o furo útil com **~6,7–7,0 cm**, igual à medida de 14/10 (7 cm); a medida de 7,5 cm pode ter pegado o começo do arredondado da boca. O PVC 75 tem **7,5 cm por fora**: se o furo tiver 7,0 cm, **o tubo não entra**.
- Teste: medir o diâmetro **no meio do duto** (2 réguas cruzadas ou paquímetro), ou levar um pedaço de PVC 75 à caixa antes de cortar.
- Se não entrar (plano B, melhor acabamento): tirar o falante, remover o duto atual, abrir o furo da lateral para ~76–77 mm (serra-copo 76 mm ou lima/lixa) e passar o PVC direto pelo MDF, com silicone neutro dos dois lados. Comprimento e sintonia não mudam (cortar 32, acertar na varredura).
- Se o duto ficar como está, a sintonia atual é ~50 Hz (7,0 cm) em vez de 54 Hz — a conclusão não muda.

### 2. Ligação das bobinas (bobina dupla) — pendência que decide a potência
O SD800.4 em ponte exige **≥ 4 Ω**. Medir com multímetro nos dois fios que saem da caixa, com o sub desligado do módulo:
| Leitura | Bobinas / ligação | Ligação no SD800.4 | Potência | Alvo do GAIN (tom 50–60 Hz) |
|---|---|---|---|---|
| ~3,0–3,6 Ω | 2+2 em série = 4 Ω | ponte CH4 ⊕ / CH3 ⊖ | **400 W** | casa 40 V · carro ~28 V |
| ~6,5–7,2 Ω | 4+4 em série = 8 Ω | ponte CH4 ⊕ / CH3 ⊖ | 264 W (−1,8 dB) | casa 46 V · carro ~33 V |
| ~1,6–1,8 Ω | 4+4 em paralelo = 2 Ω | **não pode ir em ponte** → religar em série (8 Ω) | — | — |
| ~0,8–0,9 Ω | 2+2 em paralelo = 1 Ω | **não pode** → religar em série (4 Ω) | — | — |
Com 4+4, 264 W **não é falta de potência**: o 8" chega perto do Xmax antes disso nos graves de 40–60 Hz (estimativa abaixo); a diferença máxima é 1,8 dB.

### 3. Potência × Xmax (estimativa, T/S presumidos Qts 0,5 / Vas 6 L / Fs 46 Hz / Sd 214 cm²)
Excursão de pico a **400 W**, caixa 26 L:
| | 25 Hz | 30 Hz | 35 Hz | 40 Hz | 50 Hz | 60 Hz |
|---|---|---|---|---|---|---|
| Fb 54 (atual) | 13,2 mm | 12,0 | 10,7 | 9,3 | 5,6 | 5,3 |
| **Fb 36 (PVC)** | 13,6 | 11,2 | **5,8** | 6,6 | 7,3 | 6,2 |
(264 W: multiplicar por 0,81.) Xmax = 8 mm.
- A sintonia em 36 Hz **reduz a excursão de 35–45 Hz pela metade**: o falante passa a trabalhar dentro do Xmax onde a música mais pede.
- Abaixo de ~32 Hz, a 400 W, passa do Xmax em qualquer sintonia → **subsônico é obrigatório em potência cheia**. Casa: 28 Hz/24 dB (OK). Carro (sem subsônico): **GAIN mais baixo** — ~28 V em 4 Ω (~200 W) mantém ~8 mm em 30 Hz; o ganho de cabine do carro (+6 a +12 dB abaixo de ~50 Hz) compensa com folga os −3 dB. Alternativa: passar o sub pelo PRO 2.4 no carro, se sobrar saída.
- Números dependem dos T/S presumidos; servem para ordem de grandeza.

### 4. Folga da ponta interna
Com o duto na lateral direita e ~28 cm para dentro, a ponta interna fica a **~5 cm do ímã** (centro do falante a ~41 cm da parede direita interna, ímã de ~14 cm). Ideal ≥ 7 cm (um diâmetro). Com o falante fora, medir; se ficar < 5 cm, cotovelo de 45° na ponta ou encurtar para 28 cm (Fb ~36–37 Hz, diferença desprezível).

### Veredito
- Melhoria do duto: **correta e coerente** com o falante e com os 400–450 W (Fb 36 Hz, pico +2,7 dB, −3 dB em 31 Hz, menos excursão em 35–45 Hz).
- **Duas confirmações antes de comprar/colar:** diâmetro real do duto (cabe o PVC 75?) e impedância nos terminais (ponte 4 Ω ou 8 Ω).
- O SD800.4 (400 W em 4 Ω / 264 W em 8 Ω) é adequado para o falante de 450 W RMS: fica abaixo do RMS (sem risco térmico) e o limite real do 8" é a excursão, não a potência.

## Histórico de decisões
- 2026-11-07: Estudo da caixa ideal. Litragem atual (~28 L) mantida; sintonia alvo 36 Hz. Selada descartada.
- 2026-11-07: Sub + SD800.4 em ponte alternam entre casa e carro; mesma caixa para os dois.
- 2026-11-07: Duto localizado na lateral direita (fotos) → tubo reto, sem joelho.
- 2026-11-07: Pesquisa de duto pronto: não há 3" com 30 cm no mercado BR. Fiamon 3" com extensor (25,9 cm, ~R$ 20) avaliado: ~40 Hz, ~70% da melhoria.
- 2026-11-07: Duto atual medido: 7,5 cm por dentro (ponta interna ~7,6), 11,5 cm. **Decisão: PVC esgoto 75 mm por dentro do duto atual, ~30 cm (cortar 32), Fb ≈ 36 Hz.** Vedação com silicone neutro + cola de contato/universal por fora do tubo, depois do teste a seco.
- 2026-11-07: Revisão técnica: contas do duto conferidas (OK). Pendências levantadas: diâmetro real do duto atual (foto indica ~6,7–7,0 cm; PVC 75 pode não entrar → plano B: furo de ~76 mm direto no MDF) e impedância da bobina dupla (4 Ω → 400 W; 8 Ω → 264 W; 2 Ω/1 Ω → religar em série). Carro sem subsônico: alvo de GAIN reduzido (~28 V em 4 Ω).
