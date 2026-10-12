Faz sentido em parte — e a parte que não fecha é justamente a que decide se vai ficar "bem forte" ou "embolado". Vou direto aos números.

**Assumi:** Onix hatch (porta-malas de ~280 L); som tocando com o motor ligado; falantes de porta originais; os 800 W e os 3000 W são RMS de verdade (se os 800 W do sub forem "pico", o falante real é de ~400 W e a conta melhora pra você); alternador original de popular na faixa de 70–120 A; módulo classe D com ~80 % de eficiência. Se algo disso for diferente, me avisa que refaço.

## O que não fecha

**1. Corrente × elétrica original.** Módulo de 3000 W RMS classe D a 12,6 V puxa até ~300 A em potência cheia; com música, a média fica em 37–99 A (fator de crista — a música tem picos curtos e média bem menor). O alternador do Onix está na faixa de 70–120 A, e o carro sozinho já consome 30–50 A: sobram uns 40–70 A. Ou seja, mesmo a *média* de um 3000 W trabalhando pode passar da folga do alternador, e os picos vêm todos da bateria de 60 Ah, que é de partida (não gosta de descarga). O resultado é previsível: tensão cai abaixo de 12 V no grave, farol pisca, módulo entra em proteção ou clipa — e o grave que "morre" e distorce nos picos é exatamente o embolado que você não quer. Módulo de 3000 W sem elétrica não toca 3000 W; toca o que a bateria deixa, e toca sujo.

**2. "Não mexer na elétrica" × 3000 W.** Qualquer módulo precisa de cabo positivo saindo da bateria com fusível a até ~40 cm dela, negativo no chassi lixado e fio remote — isso não é "mexer", é a instalação mínima e vale pra qualquer potência. Mas um 3000 W pede cabo de 53 mm² (0 AWG) com fusível de 300 A só pra alimentação — e, mesmo assim, continua faltando alternador e bateria auxiliar. Não existe versão dele que respeite a sua restrição.

**3. Dinheiro.** Estimativas sem pesquisa de preço agora (confira antes de comprar): 2 subs de 12" com 800 W RMS reais R$ 1300–2200; módulo 3000 W R$ 1000–1600; caixa dupla R$ 250–450; kit de cabo OFC 53 mm² + fusível 300 A R$ 500–900. Soma: **R$ 3050–5150**, e isso antes da bateria auxiliar com isolador (R$ 700–1500) e do alternador reforçado (R$ 900–2000) que esse conjunto exige. Com R$ 2500 não fecha em nenhum cenário.

**4. "Bem forte".** 3000 W contra 800 W no mesmo falante rende +5,7 dB (~117 → ~123 dB a 1 m num sub de 88 dB/W). É perceptível, mas não é "quase quatro vezes mais forte" como os watts sugerem.

> **Vale saber — watts × dB:** o ouvido trabalha em escala logarítmica: dobrar a potência dá +3 dB; pra perceber "o dobro do volume" precisa de +10 dB, ou seja, 10× a potência. Por isso o salto de 800 pra 3000 W soa como um degrau, não como um salto — e só se a tensão segurar. Já o segundo falante soma ~+3 dB (dobra a área de cone), e isso sai bem mais barato que watts.

**5. De onde vem o grave embolado.** Não de potência de menos: de tensão caindo nos picos, caixa dutada mal sintonizada ou sem subsônico, módulo em 1 Ω no limite (o fator de amortecimento — a capacidade do módulo de "frear" o cone — piora), bass boost + ganho alto, e sub muito acima dos falantes de porta originais (o grave fica solto da música). O plano original esbarra em dois desses de cara: tensão caindo e frente original engolida por 1600 W de sub.

## Três caminhos

**A — o seu (2×12" de 800 W + módulo 3000 W), elétrica original.** Prós: o teto de SPL mais alto dos três — *se* alimentado. Contras: corrente e dinheiro acima, e o resultado real com 60 Ah + alternador original tende a ficar abaixo do caminho C em qualidade e nem tão acima em volume. Só faz sentido com elétrica reforçada e orçamento de R$ 4500 pra cima, em duas etapas.

**B — o que eu faria: 1×12" de 400–600 W RMS em caixa selada + módulo mono de 600–800 W RMS.**
- Corrente: 800 W → 72 A de pico, 9–24 A de média — dentro da folga do alternador; a bateria de 60 Ah cobre só picos curtos, como deve ser. Cabo OFC 21 mm² (4 AWG) com fusível de 100 A; Big 3 vira opcional.
- Caixa selada de 35–50 L líquidos (seguir o fabricante do sub): o Onix, por ser pequeno, reforça sozinho tudo abaixo de ~50–60 Hz (ganho de cabine) — e é aí que mora o grave de rap e eletrônica. Selada + cabine pequena = grave seco e profundo, que segura o "tum" sem arrastar. É a receita anti-embolado.
- Fechar em 2 Ω ou 4 Ω (sub de 4 Ω simples, ou bobina dupla 2+2 em série = 4 Ω), nunca em 1 Ω.
- Custo estimado: sub R$ 400–750; módulo R$ 450–800 (com entrada de alto nível, pra ligar no rádio original sem conversor); caixa R$ 150–300; kit cabo OFC 21 mm² + porta-fusível + fusível + fiação R$ 250–450 → **R$ 1250–2300**. Subs e módulo em loja oficial/MercadoLíder com nota (Taramps, Stetsom, SounDigital, JBL Selenium, Bravox têm assistência no Brasil); cabo só OFC comprovado — o CCA de kit barato tem ~60 % da condutividade — e fusível do mesmo formato do porta-fusível (midi, maxi e ANL não se misturam; comprar em kit evita o erro).
- Sobram R$ 200–1250 pro elo que mais muda o som depois: kit 2 vias de 6" nas portas (R$ 300–600), pra o grave ter médio-grave onde se encaixar.
- SPL: 1 sub de 88 dB com 600 W → ~116 dB a 1 m em campo livre; dentro do carro, com o ganho de cabine, passa de 120 dB no grave. É muito, e com controle.
- Contras: é "um sub" — visualmente menos, e ~7 dB abaixo do caminho A bem alimentado. Não vira dois subs sem trocar a caixa.

**C — meio-termo: 2×12" de 350–450 W RMS cada + módulo de 800–1000 W RMS a 2 Ω.**
- Dois subs de 4 Ω em paralelo = 2 Ω (confirmei na calculadora). Corrente: 1000 W → ~90 A de pico, 11–30 A de média — no limite do que a elétrica original aguenta com cabo bom. Cabo OFC 21–25 mm², fusível 100–125 A, e aqui eu faria o Big 3 (R$ 150–300 de cabo, meia tarde de trabalho — é a única "mexida", e é reversível).
- Caixa selada dupla de ~80–100 L: come boa parte do porta-malas.
- Custo: subs R$ 700–1100; módulo R$ 550–900; caixa R$ 250–450; cabo/fusível R$ 300–500 → **R$ 1800–2950**. Fecha só no piso do orçamento, e zera a sobra pra frente.
- Prós: +3 dB do segundo cone, visual de dois subs, ainda coerente com a elétrica. Contras: ganho real sobre o B é de ~3–4 dB, e o dinheiro que iria pras portas vira caixa.

## Por que B

Pra rap e eletrônica sem embolar, o elo fraco do seu plano não é o número de subs — é alimentação, caixa e a frente do carro. O B coloca o dinheiro nesses três e ainda fica dentro dos R$ 2500. O que ele entrega: grave que desce a 30–35 Hz com pressão de sobra dentro de um Onix, sem farol piscando, e um caminho natural de crescimento (módulo de 4 canais pras portas depois). Se o "bem forte" que você imagina é gente ouvindo de fora do carro, aí é o C — ou o A com a elétrica de verdade, em duas etapas.

Duas coisas que valem uma linha, e entro depois se quiser: confira em que tensão o RMS do módulo é medido (a 14,4 V, desconta ~25 % com motor em marcha lenta ou desligado); e alguns rádios de fábrica cortam grave em volume alto — teste o seu antes de comprar conversor ou DSP.

## Decisão

Antes de eu montar o projeto: **quer que eu detalhe o caminho B ou o C?** Ou, sabendo que o 3000 W com elétrica original vai puxar até 300 A de uma folga de 40–70 A e que só as peças passam de R$ 3000, quer seguir com o A mesmo assim? Se for o A, bateria auxiliar com isolador e cabo de 53 mm² com fusível entram no projeto como obrigatórios, não como opcionais.

Se quiser, crio um perfil seu (carro, estilo musical, como gosta de receber resposta) pra não repetir nada disso nas próximas conversas — é só dizer.
