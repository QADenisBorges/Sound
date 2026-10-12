Antes da lista: no seu perfil você pediu para ser confrontado quando um pedido contradisser "grave limpo e definido para ouvir música, sem interesse em SPL". Este pedido contradiz em três pontos, e dois deles quebram fisicamente no seu carro. Vou mostrar os números, o que atende ao que você declarou, e aí a escolha continua sendo sua.

Premissas das contas: módulo classe D a 80 % de eficiência, 13,8 V com motor ligado, ~5 m de cabo positivo, alternador original de hatch compacto (70–120 A), "4000 W" medido a 14,4 V como boa parte das marcas nacionais faz. Preços são estimativas sem pesquisa de hoje.

## O que não fecha

**1. A elétrica original não sustenta 4000 W — nem na média.**
Corrente do módulo a 4000 W: 4000 / (13,8 × 0,8) = **362 A** de pico; com música, a média fica em **45–120 A**. O alternador do hatch tem 70–120 A e o carro consome 30–50 A disso — sobram uns 40–70 A. A média já passa do que existe; os picos são 3 a 5 vezes o alternador inteiro. Na prática: tensão cai para 11–11,5 V, farol pisca, módulo entra em proteção e a bateria de partida vira bateria de som (descarga profunda, vida curta). E como P ∝ V², os 4000 W anunciados a 14,4 V viram ~3060 W a 12,6 V e ~2550 W a 11,5 V — você paga por 4000 e recebe 2500 caindo de tensão.
Para isso funcionar de verdade: alternador de 200–250 A, bateria estacionária auxiliar com isolador, Big 3, cabo de **70 mm²** (a conta para 400 A em 5 m com 0,5 V de queda dá 68,8 mm²; ou 2 × 0 AWG) e fusível de 400 A na bateria. Só essa elétrica sai por volta de R$ 3.100–5.900 (alternador 1.500–3.000, bateria + isolador 900–1.500, cabos 400–800, fusível/porta-fusível 150–300, Big 3 150–300) — mais do que um sistema de grave limpo inteiro.

**2. Bandpass é a caixa que mais se afasta de "grave limpo e definido".**
Um bandpass de 4ª ordem (câmara selada atrás do falante + câmara dutada na frente) troca extensão por eficiência: ganha +3 a +6 dB dentro de ~1 oitava (tipicamente 40–70 Hz) e despenca fora dela. É isso que faz "tremer" — e é o mesmo mecanismo que produz o "grave de uma nota só": o sub-bass de 30–40 Hz e o corpo do bumbo/baixo em 70–100 Hz somem ou chegam atrasados. A câmara frontal ainda mascara a distorção mecânica do falante, então você não ouve quando ele está no limite. É caixa de paredão e competição de SPL, não de música no dia a dia.
Tamanho: dois 15" em bandpass ficam em ~300–400 L brutos (estimativa — depende dos T/S do falante). Porta-malas de hatch compacto tem 250–320 L: o banco traseiro vai embora ou fica rebatido em definitivo.

**3. Os 4000 W rendem menos volume do que parecem.**
Mesmos falantes, 4000 W contra 1000 W: 10·log(4) = **+6 dB**. "O dobro do volume" percebido são +10 dB — 4× a potência (e 4× a corrente, e a elétrica do item 1) entrega menos que isso. O que faz o bandpass parecer muito mais alto é a concentração numa faixa estreita, exatamente o que tira a definição. E em 1 Ω tem um custo extra: fator de amortecimento (o "controle" que o módulo exerce sobre o cone) piora, aquece mais e a potência oscila com a tensão. Para grave limpo, 2 Ω ou 4 Ω é escolha melhor mesmo quando o módulo aceita 1 Ω.

Dois pontos do seu pedido estão certos, para constar: módulo com ~1,3× o RMS dos falantes (4000 / 3000) é uma relação saudável se o ganho for regulado pela tensão alvo do falante (3000 W em 1 Ω → 54,8 V AC); e chegar em 1 Ω com dois 15" é simples — dois falantes de 2 Ω em paralelo, ou cada um DVC 4+4 em paralelo (2 Ω) e os dois em paralelo (1 Ω).

## O que atende ao que você declarou (elétrica original, rádio original)

Um 12" de 400–600 W RMS em caixa **selada** de ~35–45 L, módulo mono classe D de 500–800 W RMS em 2 Ω (ligando o sub em 4 Ω se for DVC 2+2 em série, para o módulo trabalhar folgado), subsônico + passa-baixa em ~80 Hz, entrada de alto nível no rádio original.

- Corrente: 500 W → 45 A de pico, **6–15 A de média** — a elétrica original segura com folga. Cabo OFC 16 mm² e fusível 80 A na bateria bastam; Big 3 é opcional, mas barato e ajuda a tensão.
- SPL: 90 dB/1W/1m × 500 W ≈ 117 dB a 1 m em campo livre, antes do ganho de cabine — no carro é grave de sobra para música, com bumbo seco e baixo com nota definida.

> **Vale saber — ganho de cabine:** o habitáculo pequeno reforça o grave abaixo de ~50–70 Hz por causa das dimensões físicas (vários dB, mais forte quanto menor o carro). É o que uma selada "perde" em extensão e o hatch devolve de graça — por isso um 12" selado soa cheio num compacto onde, numa sala, pediria dutada.

Custo estimado: sub 12" R$ 500–1.000, módulo R$ 500–900, caixa MDF 18 mm R$ 200–400, cabo/fusível/terminais R$ 200–400, Big 3 R$ 100–200 → **R$ 1.500–2.900** o sistema inteiro.

## Meio-termo — mais pressão, ainda música

Se você quer sentir mais sem virar paredão: um 15" (ou dois 12") de 800–1000 W RMS em caixa **dutada** sintonizada em ~32–35 Hz (~80–100 L líquidos para um 15"), módulo de 1000–1200 W RMS em 2 Ω, subsônico obrigatório em ~25–28 Hz.

- Corrente: 1200 W → 109 A de pico, 14–36 A de média. Fica no limite do alternador original: exige Big 3, cabo OFC 21–35 mm² com fusível 125–150 A, e tocar com motor ligado; para tocar parado, bateria estacionária auxiliar com isolador (R$ 900–1.500 a mais).
- Ganho real: +3 a +5 dB sobre o caminho selado, sem perder as notas.
- Custo: sub R$ 700–1.300, módulo R$ 800–1.400, caixa MDF 18–25 mm R$ 300–500, cabos/fusível R$ 300–500, Big 3 R$ 100–200 → **R$ 2.200–3.900** (+ bateria auxiliar se quiser som com motor desligado).

## Se for bandpass 2×15" / 4000 W mesmo assim

Eu monto — com a mesma qualidade e sem repetir este alerta. Mas a elétrica (alternador reforçado ou bateria auxiliar com isolador, cabo 70 mm² / 2×0 AWG, fusível 400 A a no máximo 30–45 cm da bateria, Big 3) entra no projeto de qualquer jeito, porque não existe versão segura de 400 A de pico em cabo e fusível subdimensionados. Total estimado: elétrica R$ 3.100–5.900 + módulo 4000 W/1 Ω R$ 1.800–3.500 + dois 15" de 1500 W R$ 1.200–2.400 + caixa MDF 25 mm R$ 600–1.200 → **R$ 6.700–13.000**, banco traseiro fora, e o resultado será muito alto numa oitava e vazio nas outras — o oposto do que você escreveu no perfil.

**Então: você quer seguir com o bandpass sabendo disso (eu registro como decisão consciente e monto lista de compra + projeto da caixa com a elétrica junto), ou monto o projeto completo do caminho selado — ou do meio-termo dutado?**
