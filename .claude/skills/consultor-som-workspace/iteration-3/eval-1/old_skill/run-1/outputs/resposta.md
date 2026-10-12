# Dois subs de 12" + módulo de 3000 W num Onix 2019 com elétrica original — faz sentido?

## Resumo

Do jeito que está, **não fecha** — e o problema não é gosto, é física e dinheiro. Você colocou três restrições que se contradizem: 3000 W RMS, elétrica original intocada e R$ 2500. Qualquer par delas até combina; as três juntas, não. E, de brinde, a configuração proposta (dois 12" com muita potência num hatch pequeno) é justamente a receita mais comum para o grave "embolado" que você disse que não quer.

A boa notícia: o **objetivo real** — grave forte, com peso e limpo para rap e eletrônica no Onix — cabe nos R$ 2500 e roda na elétrica original. Só que com **um** sub de 12" de 500–600 W RMS e um módulo mono de 1000–1200 W, bem regulado, numa caixa calculada. Abaixo mostro as contas, os caminhos alternativos e qual eu escolheria.

## Premissas (o que assumi — me corrija se for diferente)

- Onix **hatch** 1ª geração (2019), porta-malas ~280 L. Alternador original ~100–110 A (estimativa; confira na etiqueta do alternador ou no manual), bateria original 60 Ah, tudo em bom estado.
- Rádio original (MyLink ou rádio simples) **sem saída RCA** → o módulo recebe sinal pela **entrada de alto nível** (direto dos fios dos falantes traseiros) ou por um LOC (conversor de nível, que transforma saída de falante em RCA).
- "Não mexer na elétrica" = não trocar alternador, não colocar bateria auxiliar, não fazer Big 3. Atenção: **qualquer módulo exige um cabo de força saindo da bateria com fusível, e um terra no chassi**. Isso é instalação, não modificação — não existe som com módulo sem isso.
- Uso: ouvir música com motor ligado; nada de competição de SPL nem "paredão" com motor desligado.
- "800 W RMS" e "3000 W RMS" são números de catálogo; a potência real depende da tensão e da impedância em que o fabricante mediu (marcas nacionais costumam anunciar a 14,4 V).
- Preços: estimativas de setembro/2026, **sem pesquisa na web** — confira antes de comprar.

## Onde a ideia não fecha (com números)

### 1. Elétrica: 3000 W não roda em alternador de carro popular

Corrente de alimentação ≈ potência ÷ (tensão × eficiência). Para classe D (eficiência ~0,8) a 12,6 V:

| Módulo | Corrente de pico (senoide, potência cheia) | Média com música (1/8 a 1/3) |
|---|---|---|
| 3000 W RMS | **298 A** | 37–99 A |
| 1600 W RMS (só o que os dois subs aguentam) | 159 A | 20–53 A |
| 1200 W RMS | 119 A | 15–40 A |
| 1000 W RMS | 99 A | 12–33 A |
| 800 W RMS | 79 A | 10–27 A |

Seu alternador tem ~100–110 A, e o carro sozinho já usa 30–50 A (injeção, faróis, ar, ventoinha). Sobram **50–80 A**. Só a **média** do módulo de 3000 W já disputa com o alternador; os picos de 300 A viriam da bateria de 60 Ah, que é bateria de partida — não foi feita para ciclar assim e envelhece rápido.

Na prática o que acontece: a tensão afunda para 11–12 V nos picos de grave, farol pisca, o módulo entra em proteção e o som "morre" exatamente no grave — o que você mais quer é o que primeiro some. E a potência cai junto com a tensão (P ∝ V²): um módulo "3000 W" medido a 14,4 V entrega ~2300 W a 12,6 V e ~1900 W a 11,5 V. Você paga 3000 e recebe 1900 tremendo.

O cabo para 298 A em ~5 m com queda ≤ 0,5 V dá **53,5 mm² (0 AWG)** com fusível de 250–300 A na bateria — só o kit de cabo OFC de verdade custa R$ 500–900. A referência prática que uso: **até ~800–1000 W RMS o sistema elétrico original costuma aguentar com bons cabos**. Esse é o teto de "não mexer na elétrica".

### 2. Orçamento: a proposta custa 2–3× os R$ 2500

Custo realista do caminho proposto (estimativas): 2 subs 12" 800 W RMS (R$ 1400–2400) + módulo 3000 W (R$ 1000–1600) + caixa dupla sob medida (R$ 500–900) + cabo 0 AWG com fusível (R$ 500–900) + bateria auxiliar com isolador para o sistema não morrer (R$ 800–1500) = **R$ 4200–7300**, sem contar alternador. Cortar a parte elétrica para caber nos R$ 2500 é cortar exatamente o que faria o resto funcionar.

### 3. Som: o "embolado" que você não quer vem justamente daí

"Grave embolado" no carro normalmente tem 4–5 causas, e a proposta acerta em quase todas:

- **Caixa dutada sintonizada alto** (40–50 Hz, estilo "trio"): toca alto num pedaço estreito e não desce onde o rap e a eletrônica vivem (30–45 Hz).
- **Sem filtro subsônico** (corte abaixo da sintonia da caixa): abaixo de Fb o falante perde o controle da caixa e excursiona demais — distorce e queima.
- **Clipping**: ganho e bass boost no talo transformam a onda em "quadrada"; o grave vira zumbido e o sub esquenta.
- **Módulo em 1 Ω no limite com tensão caindo**: fator de amortecimento ruim (a "capacidade do módulo de frear o cone") — o cone continua se mexendo depois da nota.
- **Muito cone em pouco carro**: o hatch tem ganho de cabine forte abaixo de ~50–60 Hz (a cabine pequena reforça o grave sozinha). Dois 12" ali sobram, e sobra vira "booom" em vez de "punch".

E o que você ganharia em volume por todo esse custo? Com subs de 88 dB/1 W/1 m (típico de 12" automotivo), campo livre a 1 m:

| Configuração | SPL estimado |
|---|---|
| 1× 12" com 500 W | ~115 dB |
| 1× 12" com 1000 W | ~118 dB |
| 2× 12" com 500 W cada (1000 W total) | ~118 dB |
| 2× 12" com 800 W cada (1600 W) | ~120 dB |

Ou seja: a proposta rende **~+5 dB** sobre um sub bem alimentado. Dá para perceber, mas "o dobro de volume" na percepção são +10 dB, ou seja, 10× a potência. Você pagaria 2–3× para ganhar 5 dB que a elétrica original não vai deixar chegar.

## Os caminhos

### A — O que você propôs: 2× 12" 800 W + módulo 3000 W
- **Prós**: pressão de sobra, reserva para o futuro.
- **Contras**: exige bateria auxiliar + isolador + cabo 0 AWG e muito provavelmente alternador maior; R$ 4200–7300; caixa dupla dutada ocupa ~100–120 L brutos (quase metade do porta-malas do hatch); tendência forte ao "embolado".
- **Veredito**: incoerente com as suas três restrições. Se um dia você resolver mexer na elétrica, vira um upgrade natural — não agora.

### B — 1× 12" de 500–600 W RMS + módulo mono 1000–1200 W (o que eu faria)
- Cabe nos R$ 2500. A elétrica original aguenta (99–119 A de pico, 12–40 A de média).
- Módulo com folga (1,5–2× o RMS do sub) toca sem clipar; você regula o ganho para os 500–600 W do sub, não para o máximo do módulo.
- Caixa: **selada de 35–40 L** (grave seco, tolerante a erro, o ganho de cabine do hatch completa o fundo) ou **dutada de ~45 L sintonizada em 32–34 Hz com subsônico em 28–30 Hz** (mais eficiência e mais extensão para a eletrônica). Para rap e eletrônica eu iria de dutada **se a caixa for calculada com os parâmetros do sub**; se for comprar caixa pronta sem projeto, selada.
- Impedância: sub DVC (bobina dupla) 4+4 Ω em paralelo = **2 Ω** (o módulo entrega a potência nominal), ou 2+2 Ω em série = **4 Ω** (o módulo entrega ~55–60%, mas com controle melhor do cone — excelente para "grave limpo").

### C — 2× 12" de 350–450 W RMS num módulo de 1200 W em 2 Ω
- **Prós**: mais área de cone → +3 dB à mesma potência total, e cada cone trabalha com menos excursão (mais limpo no volume alto). É o jeito certo de ter dois subs sem estourar a elétrica.
- **Contras**: R$ 2580–3900 (estoura), caixa dupla de ~90–100 L, e fica no teto da elétrica original (119 A de pico) — eu recomendaria pelo menos o Big 3 (reforçar os três cabos principais do carro, ~R$ 100–200), que é "mexer na elétrica", ainda que pouco.
- **Veredito**: meio-termo honesto se o orçamento esticar para ~R$ 3000–3500. Não com R$ 2500.

### D — Escalonado
Faz o B agora com módulo de 1200 W. Se um dia fizer Big 3 + bateria estacionária, adiciona um segundo sub igual e reconfigura a impedância. Nada do que comprou agora é jogado fora.

**Minha escolha: B**, com módulo de ~1200 W (não 800) para ter folga de amplificação, sub DVC para poder escolher 2 Ω ou 4 Ω, e caixa dutada em 32–34 Hz com subsônico. Se quiser "sentir no banco" sem virar bagunça, esse é o caminho.

## Arquitetura recomendada (B)

```
Rádio original (fios dos falantes traseiros)
  → entrada de alto nível do módulo [ou LOC ajustável → RCA]
  → módulo mono classe D 1000–1200 W RMS @ 2 Ω
      LPF 70–80 Hz | subsônico 28–30 Hz (se dutada) | bass boost = 0
  → 1× subwoofer 12" 500–600 W RMS, DVC (4+4 paralelo = 2 Ω  ou  2+2 série = 4 Ω)
  → caixa dutada ~45 L líquidos @ 32–34 Hz (ou selada 35–40 L), MDF 18 mm, bem vedada
  → porta-malas do hatch (ganho de cabine soma abaixo de ~50–60 Hz)

Elétrica:
  bateria 60 Ah (+) → fusível ANL 100–125 A a ≤ 30–45 cm da bateria → cabo OFC 21 mm² (4 AWG), ~5 m → módulo
  módulo (−) → cabo OFC 21 mm², curto (< 50 cm), parafusado em ponto do chassi lixado até o metal
  remote: auto-ligamento pelo alto nível (a maioria dos módulos nacionais tem) — evita mexer na fiação do painel
  cabo de força de um lado do carro, sinal do outro
```

## Dimensionamento (contas — feitas com a calculadora da skill)

| Conta | Resultado | O que isso significa |
|---|---|---|
| Corrente módulo 1200 W @ 12,6 V, η 0,8 | 119 A pico; 15–40 A média | alternador segue a média com folga; picos vêm da bateria — OK |
| Corrente módulo 1000 W | 99 A pico; 12–33 A média | idem, mais folga ainda |
| Corrente módulo 3000 W (comparação) | 298 A pico; 37–99 A média | a média já briga com o alternador |
| Cabo positivo 5 m, 119 A, queda ≤ 0,5 V, cobre OFC | 20,5 mm² → **21,2 mm² (4 AWG)** | fusível ANL 100–125 A protege o cabo |
| Mesmo cabo em CCA (alumínio cobreado) para 99 A | 27,7 mm² → 33,6 mm² | CCA pede uma bitola acima; prefira OFC |
| Cabo 0 AWG para o 3000 W (comparação) | 51,3 mm² → 53,5 mm² | kit de R$ 500–900 |
| Sub DVC 4+4 Ω | paralelo **2 Ω** / série 8 Ω | 2 Ω = potência nominal do módulo |
| Sub DVC 2+2 Ω | série **4 Ω** / paralelo 1 Ω | 4 Ω = ~55–60% da potência, controle melhor; 1 Ω só com módulo 1 Ω e elétrica reforçada |
| Dois subs DVC 2+2 (caminho C) | bobinas em série + subs em paralelo = 2 Ω | é como se liga o C num módulo 2 Ω |
| Potência real do módulo "1200 W a 14,4 V" em 12,6 V | ~920 W | sobra ~1,5–1,8× o RMS do sub — bom |
| Ganho para 500 W em 2 Ω | **31,6 V AC** na saída | tom de 40 Hz, sub desconectado, multímetro |
| Ganho para 600 W em 4 Ω | **49,0 V AC** | idem |
| SPL 1× 12" 88 dB com 500 W | ~115 dB @ 1 m (campo livre) | dentro do carro é bem mais, pelo ganho de cabine |
| SPL 2× 12" com 800 W cada | ~120 dB | +5 dB por 2–3× o custo — e com a elétrica segurando |
| Duto: 45 L líq., 33 Hz, 1 duto Ø 10 cm | comprimento 40,8 cm; ocupa 3,2 L; ar a 15,8 m/s em Xmax 12 mm → OK (< 17 m/s) | 2 dutos de Ø 7,5 cm: 48,6 cm cada, 14,1 m/s |
| Cabo de falante 2 Ω, 1,5 m | ≥ 0,52 mm² → 2,5 mm² sobra | qualquer cabo decente serve |
| Bateria 60 Ah com motor desligado, 1000 W médio ÷ 8 | ~4,6 h teóricas | bateria de partida não gosta de descarga profunda — evite tocar com motor desligado |

Sobre o duto: usei Sd ≈ 500 cm² e Xmax ≈ 12 mm, típicos de 12". **Refaça com o datasheet do sub escolhido** (WinISD é grátis). Se o sub tiver Qts > ~0,5 ou EBP (Fs/Qes) < ~50, ele prefere selada — aí não force dutada.

## Opções de orçamento

Especificações primeiro, marcas como exemplo (linhas mudam). Preços em R$, estimativas sem pesquisa web — confira.

| Item | Especificação que importa | Onde comprar | Econômico | Equilibrado (recomendado) | Caprichado (= caminho C, estoura) |
|---|---|---|---|---|---|
| Subwoofer 12" | RMS **real** com condição declarada; DVC; Fs 28–35 Hz; Xmax ≥ 10 mm; sens ≥ 87 dB. Ex.: JBL Selenium 12SW, Bravox, Eros, Hinor, Oversound, Pioneer TS-W | Mercado Livre Loja Oficial / Amazon vendido pela Amazon / Magalu (nota + garantia) | 1× 350–450 W RMS, 4+4 Ω: 400–550 | 1× 500–600 W RMS, DVC: 550–800 | 2× 350–450 W RMS, DVC 2+2: 800–1100 |
| Módulo mono classe D | RMS a **12,6 V** e em qual Ω; LPF; **subsônico ajustável**; entrada alto nível; remote automático. Ex.: Taramps, SounDigital, Stetsom, Banda (linhas 800–1500 W) | idem (marca nacional = assistência no Brasil) | 600–800 W @ 2 Ω: 400–550 | 1000–1200 W @ 2 Ω: 550–850 | 1200–1500 W @ 2 Ω: 700–1000 |
| Caixa | MDF 18 mm, vedada, travamento interno; volume líquido conforme T/S do sub | marceneiro / loja especializada local; ML para pronta | selada pronta 35–40 L: 200–350 | dutada sob medida 45 L @ 32–34 Hz (ou selada reforçada): 300–500 | dupla dutada ~90–100 L ou 2 seladas: 500–800 |
| Cabo de força + fusível + terminais | **OFC de verdade** 21 mm² (4 AWG), porta-fusível ANL 100–125 A, terminais prensados, cabo de falante 2,5 mm² | loja nacional com OFC comprovado (CCA vendido como cobre é comum) | kit 21 mm²: 200–350 | kit 21 mm² + ANL 125 A: 250–380 | 35 mm² + ANL 150 A + Big 3: 400–600 |
| Sinal | alto nível direto no módulo; ou LOC ajustável se o rádio cortar grave | Shopee / AliExpress OK (genérico) | 0–80 | 50–100 | 80–150 |
| Ferramentas e acabamento | multímetro com V AC; manta asfáltica na tampa do porta-malas (anti-chiado) | Shopee / AliExpress OK | 60–120 | 80–170 | 100–250 |
| **Total estimado** | | | **R$ 1260–2000** | **R$ 1780–2800** | **R$ 2580–3900** |

O Equilibrado escolhido com calma fecha em ~R$ 2300 — dentro dos seus R$ 2500. O topo da faixa é se pegar tudo de linha superior.

## Onde economizar / onde não economizar

- **Economize**: caixa (MDF e marceneiro local ou você mesmo, com o projeto calculado), terminais/porta-fusível/LOC genéricos, multímetro básico, manta. Marca de cabo não importa — a **bitola e ser cobre** importam.
- **Não economize**: cabo OFC e fusível (é segurança — um curto sem fusível incendeia o carro), o sub (define o som), módulo com subsônico de verdade, caixa bem vedada e calculada. Um sub de 600 W bem regulado toca melhor que dois de 800 W passando fome.

## Riscos e cuidados

- **Ganho no máximo + bass boost = clipping.** É assim que um sub de 600 W queima num módulo de 1200 W. Regule com multímetro (31,6 V AC para 500 W em 2 Ω) e deixe bass boost em zero.
- **Dutada sem subsônico** → excursão excessiva abaixo da sintonia → sub morre. Subsônico ~5 Hz abaixo do Fb.
- **CCA vendido como "cobre"**: desconfie de kit barato de 4 AWG com preço de 8 AWG. Cobre é avermelhado no corte; CCA é prateado por dentro.
- **Fusível só no módulo** não protege o cabo: precisa de fusível a ≤ 45 cm da bateria.
- **Terra em ponto pintado ou solto** → tensão instável e ruído de alternador ("whine").
- **Cabo de sinal junto do cabo de força** → ruído. Lados opostos do carro.
- **Rádio original**: a saída de alto nível é limitada, e alguns rádios GM reduzem o grave em volume alto (loudness reverso). Se notar o grave "sumindo" quando sobe o volume, o caminho é um LOC com ajuste ou um mini DSP — não um módulo maior.
- **Módulo medido a 14,4 V**: em 12,6 V entrega ~77%. Confira a condição de medição no manual antes de comparar preços por watt.
- **Falsificação**: marca conhecida com preço bom demais no marketplace. Prefira Loja Oficial / MercadoLíder / "vendido pela Amazon".
- **Motor desligado**: bateria de partida de 60 Ah não gosta de descarga profunda. Tocar alto com motor desligado é caminho para trocar bateria em meses.
- **Audição**: 115+ dB dentro do carro por muito tempo machuca ouvido de forma permanente. Grave "forte" também conta.

## Próximos passos

1. **Confirme três coisas**: é hatch ou Onix Plus (sedã, porta-malas maior)? O rádio tem RCA (MyLink não)? Quantos ampères tem o alternador (etiqueta)?
2. **Decida selada × dutada.** Se der, ouça uma dutada bem feita em ~33 Hz antes — a diferença para as de "trio" em 45 Hz é gritante.
3. **Ordem de compra**: cabo OFC + fusível → módulo → sub → caixa (depois do sub, com os T/S do datasheet; simule no WinISD ou use `calc_som.py duto`).
4. **Instalação**: fusível perto da bateria, terra lixado, força e sinal em lados opostos, caixa firme (não pode andar no porta-malas).
5. **Regulagem**: LPF 70–80 Hz; subsônico 28–30 Hz (dutada); bass boost 0; ganho pelo multímetro com tom de 40 Hz a 0 dB e volume da fonte em ~80%, sub desconectado.
6. **Ouça uma semana** antes de mexer em qualquer coisa. Grave "certo" demora um pouco para o ouvido recalibrar depois de anos de rádio original.

Três perguntas que refinam o caminho (não precisa responder tudo agora):

1. "Bem forte" para você é sentir o grave no banco em volume alto de rua, ou ser ouvido de fora / competição? (muda B para C.)
2. Você toca com o motor desligado (praia, encontro)? Se sim, bateria estacionária entra de qualquer jeito — e aí o caminho D fica mais interessante.
3. Quanto do porta-malas aceita perder? (1× 12" ~45–50 L brutos; caixa dupla ~100 L.)

Quando você decidir o caminho, eu salvo como projeto com histórico de decisões (neste teste, seria em `C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-1\old_skill\run-1\outputs\projetos\onix-sub-12\projeto.md`) e a gente parte para as specs exatas do sub e da caixa.
