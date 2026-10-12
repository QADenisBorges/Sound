# Onix 2019: 2 subs de 12" + módulo de 3000 W sem mexer na elétrica. Faz sentido?

**Resposta curta: do jeito que está, não.** O problema não é gosto, é conta. Quatro coisas não fecham juntas: **3000 W**, **elétrica original**, **R$ 2.500** e **"sem grave embolado"**. Dá pra ter um grave forte, com pegada, que valoriza rap e eletrônica, sem mexer na elétrica e dentro do orçamento. Só que o caminho é outro.

---

## Por que o plano original não fecha

### 1. A elétrica do Onix não alimenta 3000 W

Contas feitas na calculadora (módulo classe D, 80% de eficiência, 12,6 V):

| Módulo | Corrente em potência cheia | Corrente média com música (1/8 a 1/3) |
|---|---|---|
| **3000 W RMS** | **~298 A** | 37 a 99 A |
| 1600 W RMS (os 2 subs de 800 W) | ~159 A | 20 a 53 A |
| **600 W RMS** | **~60 A** | 7 a 20 A |

- O alternador de um carro popular como o Onix fica **na faixa de 70 a 110 A** (confira na etiqueta do seu). O próprio carro já usa **30 a 50 A** com farol, ventilação, injeção e rádio ligados. **Sobram uns 40 a 60 A** para o som.
- Um módulo de 3000 W tocando forte pede de 40 a 100 A **em média**, com picos de quase 300 A. Esses picos saem da bateria. A tensão cai, a luz pisca, o módulo entra em proteção e o grave "morre" justo na batida. A bateria de partida de 60 Ah sofre com isso e dura menos.
- Só para alimentar um módulo de 3000 W você precisaria de **cabo de 53 mm² (0 AWG)**, que a calculadora aponta para 300 A em 5 m com queda de 0,5 V. Também entrariam o Big 3, uma bateria extra e possivelmente um alternador maior. Isso é **mexer na elétrica**, justamente o que você não quer.

**Regra prática:** com a elétrica original, o teto confortável fica em **~600 a 800 W RMS reais**.

### 2. O número "3000 W" quase nunca é o que parece

- Módulos nacionais costumam declarar o RMS **em 14,4 V e na menor impedância (1 Ω)**. Em 12,6 V a potência cai para cerca de 75%, ou seja, um "3000 W" entrega ~2250 W. E rodar em 1 Ω é o pior cenário de controle do grave.
- Anúncio com "3000 W" que só fala em "potência máxima" ou "PMPO" pode ser bem menos que isso na prática.

### 3. Mais watts dão menos volume do que parece

O ouvido percebe decibel, não watt. Estimativa para o mesmo sub (sensibilidade de 86 dB, 1 m, fora do carro):

- 600 W → **~114 dB**
- 3000 W → **~121 dB**

**Com 5 vezes mais potência você ganha ~7 dB.** É perceptível, mas não é "outro mundo". E esses 7 dB só aparecem se a elétrica entregar a potência, o que não acontece no seu caso. Dentro do carro, o **ganho de cabine** ajuda de graça: o Onix é pequeno e reforça naturalmente o grave abaixo de ~60 Hz. Um sub bem instalado com 500 a 600 W já **enche bastante** um hatch compacto.

### 4. "Não quero grave embolado" pesa contra o plano

Grave embolado quase sempre vem de:
- **Caixa dutada mal projetada**, ou caixa pronta genérica sintonizada alta, que dá aquele "bum" arrastado.
- **Clipping**: ganho alto demais e módulo sofrendo com tensão baixa. Aqui é exatamente o cenário de um módulo grande com elétrica fraca.
- **Grave desproporcional ao resto**: 1600 W de sub contra os falantes originais de porta, que têm uns 15 a 20 W. O grave engole voz e caixa da batida.

Para rap e eletrônica, que têm muito sub-grave (808, kicks em 40 a 60 Hz), o segredo é **grave controlado e rápido**. Volume bruto vem depois.

### 5. O orçamento não cobre

Dois subs de 800 W + um módulo "3000 W" confiável + caixa dupla + cabo 0 AWG + fusível + instalação passam de R$ 2.500 com folga. E ainda faltaria a parte elétrica que tornaria tudo isso funcional.

---

## Premissas que assumi

- **Onix hatch 2019** (1ª geração) com rádio original, seja o de fábrica simples ou o MyLink, sem saída RCA. Por isso o módulo vai usar **entrada de alto nível** (ligada nos fios dos alto-falantes). Se for o sedã Onix Plus ou Prisma, a lógica é a mesma.
- Você quer **porta-malas ainda utilizável**. Uma caixa com 2 subs de 12" ocupa boa parte dos ~280 L do Onix.
- O som é para **ouvir andando e em volume alto**, não para competição de SPL nem para tocar muito tempo com o motor desligado.
- "Não mexer na elétrica" = sem bateria extra, sem Big 3 e sem trocar alternador. **Um cabo de força novo, direto da bateria, com fusível** entra como instalação do som, não como mexer na elétrica. Ele é obrigatório em qualquer opção.
- Os preços são **estimativas de faixa** do mercado brasileiro (Mercado Livre, Amazon, Magalu) e mudam bastante. Confira antes de comprar.

---

## Arquitetura proposta

```
Rádio original (saída de alto-falante)
        │  entrada de alto nível
        ▼
Módulo classe D 1 canal, 500–800 W RMS reais em 2 Ω
  (passa-baixa ~80 Hz + subsônico ~25–30 Hz se a caixa for dutada)
        │
        ▼
1 sub de 12" (bobina dupla) em caixa SELADA de ~30–40 L
  ou dutada BEM projetada (Fb ~32–35 Hz)

Elétrica: bateria (+) → fusível de 80–100 A a até 30 cm da bateria → cabo OFC 21 mm² → módulo
          módulo (−) → chassi lixado, cabo curto de mesma bitola
```

**Por que 1 sub bom em vez de 2?** A elétrica só alimenta ~600 a 800 W de qualquer jeito. Dividir essa potência entre dois subs de 800 W deixaria cada um com 300 a 400 W. Você pagaria por dois falantes, uma caixa maior e mais porta-malas perdido, para um ganho de volume pequeno. **Um sub de 12" com 500 a 600 W bem aproveitados** soa mais limpo e cabe no bolso.

**Por que caixa selada?** Grave seco, rápido e controlado, e ela perdoa mais erro. É o anti-"embolado". Num carro pequeno, o ganho de cabine compensa boa parte da eficiência que a selada perde. Se você quiser **mais pressão** em 35 a 45 Hz (808 pesado), dá pra usar uma **dutada com sintonia baixa (~32 a 35 Hz), no volume indicado pelo fabricante do sub e com filtro subsônico ligado**. Só não compre caixa pronta genérica "que serve pra qualquer sub".

---

## Dimensionamento

| Item | Conta | Resultado |
|---|---|---|
| Corrente do módulo 600 W | 600 / (12,6 × 0,8) | ~60 A em potência cheia; 7 a 20 A em média com música, **cabe no alternador original** |
| Cabo de força | 60 a 80 A, 5 m, queda ≤ 0,5 V | mínimo **16 mm²**; recomendo **21 mm² (4 AWG) OFC** pela margem (se for CCA, suba uma bitola) |
| Fusível | protege o cabo | **80 a 100 A**, a no máximo 30 cm da bateria |
| Impedância | sub DVC 2+2 Ω em paralelo | **1 Ω** (evite); em série = **4 Ω**. Melhor ainda: sub DVC 4+4 Ω em paralelo = **2 Ω**, o ponto ideal para a maioria dos módulos |
| Ganho (ex.: módulo de 600 W em 2 Ω) | V = √(P × R) | **~34,6 V AC** na saída, medidos com tom de 40 Hz e sub desconectado |

---

## Opções de orçamento (estimativas, confira preços atuais)

| Item | O que importa na spec | Econômico | Equilibrado ⭐ | Grave + palco |
|---|---|---|---|---|
| Subwoofer 12" | RMS real, bobina dupla, volume de caixa recomendado | 350–400 W RMS · R$ 350–500 | 500–600 W RMS, DVC · R$ 550–800 | 400–500 W RMS · R$ 450–600 |
| Caixa | MDF 18 mm, vedada, volume certo para o sub | Selada ~30 L · R$ 150–250 | Selada ~35–40 L ou dutada sob medida · R$ 200–350 | Selada ~30–35 L · R$ 150–250 |
| Módulo sub | Classe D, RMS a 12,6–14,4 V em 2 Ω, entrada de alto nível, subsônico | ~400 W · R$ 300–400 | 600–800 W em 2 Ω · R$ 450–650 | ~500 W · R$ 350–450 |
| Kit 2 vias portas dianteiras | 6" + tweeter + crossover, ~60–100 W RMS | — | — | R$ 300–450 |
| Módulo 4 canais | Classe D, 4 × 80–100 W RMS | — | — | R$ 300–400 |
| Kit de cabos | OFC de verdade, 21 mm² + fusível + remote | R$ 200–300 | R$ 250–350 | R$ 250–350 |
| Instalação (se não fizer você mesmo) | — | R$ 150–250 | R$ 200–300 | R$ 300–450 |
| **Total estimado** | | **~R$ 1.150–1.700** | **~R$ 1.650–2.450** | **~R$ 2.100–2.950** (no limite; dá pra fazer em 2 etapas) |

- **Econômico:** já dá um grave cheio e bem acima do original. Sobra dinheiro para a manta nas portas.
- **Equilibrado ⭐ (é o que eu escolheria para você):** grave com pressão de sobra para rap e eletrônica num Onix, dentro da elétrica original e do orçamento.
- **Grave + palco:** um pouco menos grave, mas o som inteiro melhora. A voz do rap aparece e o grave não "engole" o resto. Se o "não quero embolado" pesa muito para você, essa é a mais equilibrada no resultado final.

Marcas nacionais de módulo com assistência no Brasil: Taramps, SounDigital, Banda, Stetsom. Para subs: JBL Selenium, Bravox, Pioneer, Hinor, entre outras. **Escolha pela spec, não pelo número da caixa.** Evite anúncio de marca famosa com preço bom demais: pode ser falsificação.

---

## Onde economizar e onde não economizar

- **Não economize:** cabo de força OFC, fusível na bateria, caixa bem construída no volume certo e módulo com RMS declarado honestamente. Esses itens decidem se o grave fica limpo ou embolado, e se o carro fica seguro.
- **Economize:** caixa "de grife" (um marceneiro faz uma em MDF 18 mm por bem menos), bass boost (não use), acessórios "premium", RCA caro (com entrada de alto nível você nem precisa de RCA).

---

## Riscos e cuidados

- **Fusível na bateria** a até 30 cm do polo positivo. Sem ele, um curto no cabo pode causar incêndio.
- **Terra no chassi lixado**, com cabo curto e da mesma bitola do positivo. Terra ruim causa chiado (aquele "uiii" que acompanha a rotação do motor).
- **Não use bass boost** nem ganho no máximo. É assim que se queima sub e que se ganha grave embolado.
- **Rádio original:** alguns rádios de fábrica cortam ou comprimem o grave em volume alto. Se notar o grave "sumindo" quando aumenta o volume, um **DSP ou conversor com recuperação de grave** resolve (~R$ 200–400). Fica como upgrade futuro.
- **Com o motor desligado**, toque baixo e por pouco tempo: a bateria de 60 Ah é de partida.
- Volume alto por muito tempo cansa e prejudica a audição. O grave limpo tem a vantagem de soar forte sem precisar de tanto volume.

---

## Próximos passos

1. **Veja a etiqueta do alternador** (ou o manual) e me diga a amperagem. Diga também se o rádio é o MyLink ou o simples. Isso confirma o teto de potência.
2. **Escolha o caminho:** "muito grave" (Equilibrado) ou "som inteiro melhor" (Grave + palco).
3. **Escolha o sub primeiro** e peça o datasheet com volume de caixa recomendado e parâmetros T/S. A caixa é feita para o sub, não o contrário.
4. Depois compre o módulo que casa com a impedância final do sub (2 Ω, idealmente) e o kit de cabos OFC 21 mm².
5. Na instalação, **regule o ganho com multímetro** (tensão alvo da tabela acima), passa-baixa em ~80 Hz e subsônico em ~25–30 Hz se a caixa for dutada.

Quando você decidir o caminho, eu monto a lista fechada com as specs de cada peça, o volume exato da caixa e o passo a passo de ligação.
