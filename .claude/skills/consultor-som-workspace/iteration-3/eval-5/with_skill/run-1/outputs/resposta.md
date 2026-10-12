Antes da lista, preciso parar numa decisão — porque esse projeto contradiz o que você me disse que quer (grave limpo e definido pra ouvir música todo dia, hatch compacto, elétrica original), e você me pediu exatamente pra te confrontar antes de seguir por um caminho desses.

O que está certo no seu pedido: dois 15" de 1500 W RMS (3000 W) com módulo de 4000 W dá casamento de ~1,3× — dentro do saudável, se o ganho for regulado. E 1 Ω fecha com dois subs DVC 4+4 Ω (bobinas em paralelo, subs em paralelo) ou dois SVC 2 Ω em paralelo. O que não fecha é o resto da cadeia.

## Premissas que assumi

- O "4000 W" é medido a 14,4 V (padrão das marcas nacionais). A 12,6 V vira ~3060 W — praticamente os 3000 W que os dois 15" pedem, então as contas usam ~3000 W.
- Alternador original de hatch compacto: ~90 A, dos quais o carro já consome 30–50 A.
- Positivo da bateria ao módulo: ~5 m. Classe D com 80% de eficiência.
- Se os 15" forem DVC 2+2, dois deles dão 0,5 Ω ou 2 Ω — não dá 1 Ω. Confira a bobina antes de qualquer compra.

## Onde o projeto não fecha (com número)

**1. Elétrica.** 3000 W em 12,6 V puxam **~300 A** em potência cheia; com música, a média fica em **40–100 A** — só a média já é igual ou maior que tudo que o alternador sobra (40–60 A). Resultado previsível: tensão caindo abaixo de 12 V, módulo entrando em proteção, farol piscando e o grave "morrendo" — o oposto de limpo. Pra esse sistema funcionar (e ser seguro) a elétrica é obrigatória: cabo 0 AWG (53 mm²) OFC com fusível de ~300 A perto da bateria, bateria auxiliar/estacionária com isolador, Big 3 e, honestamente, alternador de maior amperagem. Isso não é opcional nem "depois": sem isso o módulo não entrega e o fusível fica maior que o cabo aguenta.

**2. Bandpass × grave limpo.** Bandpass (4ª ordem) é o falante numa câmara selada tocando para dentro de uma segunda câmara dutada — a caixa vira um filtro passa-faixa acústico. Ela ganha +3 a +6 dB numa faixa de ~1 oitava (algo como 35–70 Hz) e cai rápido fora dela; a câmara dutada guarda energia e solta depois, então a nota do baixo vira "bum" arrastado e um kick e um baixo grave soam iguais. É a caixa certa pra paredão/SPL e a errada pro seu objetivo declarado.

> **Vale saber — ganho de cabine:** um hatch compacto reforça sozinho tudo abaixo de ~50–70 Hz (quanto menor o carro, mais alto esse ponto). Por isso uma selada, que cai suave no grave, sai "reta" dentro do carro — e o bandpass, que já concentra energia nessa faixa, soma reforço em cima de reforço e engorda uma faixa só.

**3. Espaço e ganho real.** Dois 15" em bandpass = 4 câmaras: estimo 180–250 L líquidos, ~250–300 L brutos em MDF 18–25 mm e uns 60 kg — é o porta-malas inteiro de um hatch compacto (250–350 L), sem banco rebatido. E o que se ganha por isso: 3000 W contra os 800 W do caminho abaixo são **+5,7 dB** (122,8 dB vs 117,0 dB a 1 m, campo livre, sens. 88 dB). Dobrar o volume percebido pede +10 dB. Ou seja: 4× a corrente, o porta-malas todo e a elétrica refeita, por pouco mais da metade de "o dobro do volume" — e com grave menos definido.

## O caminho que atende ao que você disse que quer

- **1× 12" de 400–600 W RMS em caixa selada de 35–45 L líquidos** (Qtc ~0,7), impedância final 2 Ω (ou 4 Ω, casando com o módulo).
- **Módulo monocanal classe D de 600–800 W RMS em 2 Ω**, com passa-baixa e entrada de alto nível (rádio original).
- Elétrica: 800 W → **~80 A de pico, 10–26 A de média** — o alternador original segura. Cabo **16 mm² OFC** (ou 21 mm²/4 AWG pra folga) com fusível de 80–100 A a ≤ 40 cm da bateria, Big 3 (barato) e negativo curto no chassi lixado.
- No hatch, com o ganho de cabine, isso já enche o carro de grave limpo e definido — o "tremer" vem do 30–45 Hz bem controlado, não de watts.

## Meio-termo, se você quer mais impacto sem jogar fora o objetivo

- **1× 15" de 600–800 W RMS em selada de 60–90 L** (ou 2× 12"), com **módulo de ~1200 W RMS em 2 Ω**: **~120 A de pico, 15–40 A de média** — no limite do alternador original; pede cabo 21 mm² (4 AWG), fusível 125 A, Big 3 e, pra tocar com folga, uma bateria auxiliar com isolador. Ganha uns +2 dB sobre o caminho acima e o "peso" do 15".
- Se quiser mais pressão que a selada dá: **dutada afinada baixa (30–32 Hz) com subsônico ligado** — +3 a +5 dB perto da sintonia sem virar filtro estreito, e o subsônico protege o falante abaixo da sintonia.

## A decisão é sua

Sabendo disso, quer que eu monte o bandpass 2×15" + 4000 W assim mesmo — nesse caso a lista vem obrigatoriamente com a elétrica completa (bateria auxiliar + isolador, 0 AWG, fusível ~300 A, Big 3), porque sem ela não funciona nem é seguro — ou monto o projeto da selada (ou o meio-termo com o 15") com lista de compra e projeto da caixa?

Assim que você escolher, monto o projeto completo (opções de orçamento, caixa com medidas e duto, regulagem de ganho) e salvo com a decisão registrada no histórico.
