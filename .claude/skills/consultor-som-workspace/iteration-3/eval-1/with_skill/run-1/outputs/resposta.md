Direto: do jeito que está, não fecha — e o primeiro problema não é o orçamento, é a elétrica. Mas o que você quer de fato (forte dentro do carro, rap/eletrônica, grave limpo) dá para conseguir com R$ 2.500 e sem mexer no carro. Vou mostrar a conta, os caminhos e onde eu iria.

## Por que 3000 W não fecha com a elétrica original

Premissas da conta: módulo classe D (~80% de eficiência — os "3000 W" nacionais são todos classe D), 12,6 V na alimentação, ~5 m de cabo positivo da bateria ao porta-malas.

- **Corrente.** 3.000 W RMS de saída ÷ (12,6 V × 0,8) = **~300 A de pico**. Com música (que não é tom contínuo), a média fica em **~40–100 A**.
- **O que o carro tem.** Alternador original de popular fica na faixa de 70–120 A — o do Onix deve estar perto de 100 A (confira na etiqueta dele; é estimativa). O carro sozinho já consome 30–50 A. **Sobram ~50–70 A para o som.** A *média* do módulo já passa disso; o pico é 4–5× o que sobra.
- **Consequência prática.** A tensão cai abaixo de 12 V justamente na batida, o módulo entra em proteção ou corta, farol pisca, e o grave "morre" no momento em que devia bater. Um sistema desses fica *menos* forte que um sistema menor bem alimentado — é a armadilha mais comum do som automotivo.
- **Cabo.** 300 A em 5 m pede 53 mm² (0 AWG) de cobre OFC (cobre de verdade — muito kit vende "CCA", alumínio cobreado com ~60% da condutividade) e fusível de 300 A junto à bateria. Só esse kit de cabo come R$ 500–900 dos seus R$ 2.500.
- Mesmo casando o módulo exatamente com os subs (1.600 W): **159 A de pico** — ainda 2× o que a elétrica original segura sem bateria auxiliar e Big 3.

Dois números que mudam a expectativa:

1. **O "3000" da etiqueta não chega no sub.** Ele é medido em 1 Ω e 14,4 V. Dois subs de 4 Ω em paralelo dão 2 Ω → o módulo entrega aproximadamente 1.500–1.800 W; em 12,6 V (motor em marcha lenta, tensão caindo), ~75% disso → **~1.100–1.400 W** de fato nos subs. Você pagaria por 3.000, usaria ~1.300 — e a elétrica não sustenta nem esses. Para "ter os 3000" a saída seria fechar 1 Ω, que é a pior carga para grave controlado e a pior para a corrente.
2. **Quanto se ganha em volume.** SPL sobe 10·log(P2/P1): dos ~1.300 W reais contra um sistema de 600 W bem dimensionado, **+3,4 dB**. Perceptível, mas pouco: +10 dB é o que o ouvido chama de "dobro do volume". Isso por 3× o custo e com a elétrica reformada.

Sobre a **bateria de 60 Ah**: com motor ligado quem alimenta é o alternador; a bateria só amortece picos. Ela só vira gargalo se você tocar com motor desligado — bateria de partida não gosta de descarga profunda, e nesse cenário qualquer um dos caminhos abaixo pede cuidado (avise se for o caso).

E uma coisa que não é negociável em nenhum caminho: "não mexer na elétrica" pode significar não trocar alternador, bateria nem fazer Big 3 — tudo bem. Mas **qualquer módulo precisa de um cabo positivo direto da bateria com fusível a até 30–45 cm dela**. Isso não é upgrade, é o que impede incêndio se o cabo roçar na lataria. Assumo que isso está dentro do aceitável para você.

## O que embola o grave (e não é falta de watt)

Grave embolado no carro vem de: caixa dutada sintonizada alta (45–50 Hz, o padrão de "paredão"), módulo em **clipping** (sinal distorcido em onda quadrada, quando o ganho passa do ponto), falta de filtro **subsônico** (corta o que está abaixo da sintonia, onde o cone se solta), bass boost ligado, e carga de 1 Ω (o módulo controla pior o movimento do cone). Dois subs de 12" numa caixa qualquer com um módulo no limite é exatamente a receita do som que você disse que não quer.

> **Vale saber — ganho de cabine:** o interior do carro é pequeno e reforça naturalmente o grave abaixo de ~50–70 Hz — quanto menor o carro, mais forte, e o Onix é pequeno. Por isso a caixa **selada**, que "perde" grave profundo em campo aberto, dentro do carro soa cheia, seca e controlada. O dutado sintonizado alto soma reforço em cima de reforço e vira "um grave só". Para rap e eletrônica (sub-grave sustentado, 30–50 Hz), selada + ganho de cabine é o combo certo.

## Três caminhos

**A — o que você descreveu: 2×12" de 800 W RMS + módulo 3000 W.**
Exige bateria auxiliar (estacionária/AGM com isolador), Big 3 (reforço dos três cabos principais do carro) e muito provavelmente alternador maior; cabo 0 AWG. Estimativa: R$ 5–7 mil (2 subs de 800 W RMS *reais* ~R$ 600–1.200 cada, módulo 3000 ~R$ 900–1.800, caixa dupla, cabo, bateria). Não fecha com "elétrica intacta" nem com R$ 2.500, e dificulta o "grave limpo". Só faria sentido se o objetivo virar SPL/competição.

**B — o que eu montaria: 1 sub 12" de 400–500 W RMS, caixa selada, módulo mono de 500–800 W RMS em 2 Ω.**
- Pico 50–80 A, média com música 6–27 A → dentro do que sobra do alternador original, sem Big 3.
- Cabo 16 mm² OFC (5 m, queda ≤ 0,5 V) + fusível de 60–80 A na bateria.
- Sub de bobina dupla (DVC) 2+2 Ω ligado em série (4 Ω) ou 4+4 em paralelo (2 Ω) — você escolhe a impedância em que o módulo rende melhor.
- Caixa selada de ~30–45 L líquidos (siga o volume do fabricante), MDF 18 mm, bem vedada.
- Módulo classe D mono com passa-baixa, subsônico e **entrada de alto nível** — liga direto nos fios de falante do rádio original, sem RCA e sem trocar rádio.
- Ganho regulado com multímetro, não no ouvido: ex. 500 W em 2 Ω → 31,6 V AC na saída, com tom de 40 Hz.
- Estimativa: R$ 1.100–2.100 → sobra para um sub melhor ou para um conversor/DSP simples se o rádio original cortar grave no volume alto.
- Onde comprar: sub e módulo de marca nacional (JBL Selenium, Bravox, Eros, Hinor, Oversound / Taramps, SounDigital, Stetsom) em Loja Oficial do Mercado Livre ou Amazon com nota — garantia e assistência no Brasil valem no custo total. Cabo em loja nacional que comprove OFC.
- Contra: menos "cara" de porta-malas cheio; ~3–6 dB abaixo do C.

**C — meio-termo: 2×12" de 300–400 W RMS cada + módulo de 800–1.000 W RMS em 2 Ω.**
- Pico 80–100 A, média 10–33 A → é o **teto** da elétrica original. Big 3 (R$ 100–150 em cabo) fica recomendado, não obrigatório.
- Cabo 21 mm² (4 AWG) OFC + fusível de 100–125 A.
- Dois subs de 4 Ω em paralelo = 2 Ω (ou DVC 4+4 com bobinas em série e subs em paralelo = 4 Ω).
- Caixa selada de ~70–90 L — o porta-malas do Onix hatch tem ~280 L (Onix Plus sedã, ~470 L): ocupa um terço.
- Ganho sobre o B: +3 a +6 dB (dobro de área de cone e de potência). Na prática é o mesmo que o caminho A entregaria na elétrica original, por menos da metade do custo.
- Estimativa: R$ 1.800–3.300 — no limite ou um pouco acima dos R$ 2.500.
- Contra: mais caixa, mais dinheiro, exige disciplina no ganho, e o risco de cair no "embolado" cresce se a caixa for mal feita.

**O que eu escolheria: B.** Atende às três coisas que você pediu — forte de verdade dentro do carro, grave limpo, elétrica intacta — com folga no orçamento. E se depois quiser mais, o próximo degrau natural é Big 3 + segundo sub: nada do que comprou vai para o lixo (módulo com margem, caixa que se refaz por R$ 150).

## Premissas que usei (me corrija se alguma não for assim)

- Os "800 W RMS" dos subs são RMS reais. Se forem "800 W" de etiqueta/pico, o sub é ~400 W RMS e o caminho C fica ainda mais próximo do que você já tinha em mente.
- "3000 W" é a potência nominal em 1 Ω / 14,4 V, padrão das marcas nacionais.
- Você ouve principalmente com motor ligado.
- Preços são faixas de memória, sem pesquisa — confira antes de comprar; a ordem de grandeza é o que importa aqui.

## Sua decisão

Uma pergunta só: seguimos no **B** (um sub, grave limpo, cabe nos R$ 2.500), no **C** (dois subs no teto da elétrica original), ou você prefere o **A** mesmo sabendo que exige bateria auxiliar/Big 3 e mais que o dobro do orçamento? Com a resposta eu monto o projeto completo — dimensionamento, caixa, tabela Econômico/Equilibrado/Caprichado e ordem de compra.

📝 Anotei no seu perfil (`C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-1\with_skill\run-1\outputs\perfil.md`): Onix 2019 com rádio e bateria originais (60 Ah); ouve rap e eletrônica; prioriza grave limpo sobre volume bruto; não quer alterar a elétrica do carro; nível intermediário.
