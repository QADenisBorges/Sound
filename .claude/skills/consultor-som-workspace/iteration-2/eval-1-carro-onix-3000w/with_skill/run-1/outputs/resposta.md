## Resumo

Resposta curta: **do jeito que você descreveu, não fecha.** O plano esbarra nas três coisas que você mesmo colocou como condição:

1. **"Não mexer na elétrica"**: um módulo de 3000 W precisa de mais corrente do que o alternador e a bateria originais do Onix conseguem entregar.
2. **R$ 2.500**: só o módulo, os dois subs, a caixa e o cabo certo já passam desse valor, e isso antes de qualquer reforço elétrico.
3. **"Sem grave embolado"**: potência sobrando com a tensão caindo é justamente o que deixa o grave mole e distorcido.

Dá para ter um grave **forte, seco e sem embolar** no Onix sem mexer na elétrica. O teto sensato fica em **~800 a 1000 W RMS reais**, com caixa selada e ganho bem regulado. Mostro as contas e três opções abaixo.

## Premissas

- **Onix hatch 2019** (primeira geração), porta-malas de ~280 L. Se for o Onix Plus sedã, sobra mais espaço para a caixa, mas a elétrica é parecida.
- **Alternador original na faixa de ~90 a 110 A.** Confira a etiqueta do alternador, que varia por versão. O próprio carro consome 30 a 50 A com farol, ventilação e ar ligados, então **sobram uns 40 a 70 A para o som**.
- **Rádio original sem saída RCA** (MyLink ou o rádio básico). Por isso o sinal sai pela entrada de alto nível do módulo ou por um conversor de alto para baixo nível.
- **"Não mexer na elétrica"** para mim quer dizer: sem bateria extra, sem trocar o alternador e sem Big 3 (Big 3 é reforçar os 3 cabos grossos de fábrica: alternador→bateria, bateria→chassi e motor→chassi). Um **cabo de força dedicado com fusível perto da bateria é obrigatório** em qualquer módulo e não conta como "mexer na elétrica". Sem ele não tem instalação segura.
- **Uso:** ouvir alto com o carro andando, não campeonato de SPL (pressão sonora máxima).

## Por que o plano original não fecha (as contas)

**Corrente do módulo**: corrente ≈ potência RMS ÷ (tensão × eficiência). Usei 12,6 V e eficiência de 80%, típica de classe D.

| Potência RMS real | Corrente no pico (potência cheia) | Média com música alta (1/8 a 1/3 do pico) |
|---|---|---|
| 3000 W (seu plano) | **~298 A** | **~37 a 99 A** |
| 1600 W (o que os 2 subs aguentam) | ~159 A | ~20 a 53 A |
| 1000 W | ~99 A | ~12 a 33 A |
| 800 W | ~79 A | ~10 a 26 A |

Como ler a tabela:

- **Com 3000 W**, a média com volume alto (37 a 99 A) passa das "sobras" do alternador (40 a 70 A). A diferença sai da bateria de 60 Ah, que é de partida e não foi feita para descargas repetidas. A tensão cai para perto de 11 V nos picos de grave, a luz pisca, o módulo entra em proteção e a bateria dura menos.
- **Tensão caindo = grave embolado.** Com menos tensão, o módulo clipa mais cedo. Clipar é cortar o topo da onda: vira distorção, o grave fica "mole" e é isso que queima bobina. Você pagaria por 3000 W e ouviria menos que isso, com mais distorção.
- **O "3000 W" do anúncio quase sempre é medido em 14,4 V e em 1 Ω.** Em 12,6 V a potência cai para ~75% (P ∝ V²). E em 1 Ω o controle do cone piora (fator de amortecimento menor), outra receita de grave menos seco.
- **O cabo também é "mexer na elétrica".** Para 300 A com 5 m de cabo e queda de no máximo 0,5 V, a calculadora pede **53 mm² (0 AWG)** e fusível de ~300 A. Esse kit sozinho custa uns R$ 350 a 600 em cobre OFC de verdade. O CCA dos kits baratos é alumínio cobreado e conduz ~60% do cobre, então nesse caso nem serve.
- **O casamento também não fecha.** Os dois subs somam 1600 W RMS. Um módulo de 3000 W teria que ficar com o ganho bem abaixo do máximo para não queimá-los. Na prática você pagaria por potência que não pode usar.
- **Orçamento estimado do plano original:** subs R$ 1.100 a 1.800 + módulo R$ 900 a 1.300 + caixa dupla R$ 300 a 450 + cabo 0 AWG R$ 350 a 600 ≈ **R$ 2.650 a 4.150**. E isso ainda sem bateria auxiliar e alternador, que ele exigiria.

**Quanto de volume você perderia de fato?** 3000 W contra 800 W é 10·log(3000/800) ≈ **+5,7 dB no papel**. Com a tensão caindo e o módulo protegendo, na prática fica bem menos. Dá para recuperar parte disso de graça:

- **Ganho de cabine:** num carro pequeno como o Onix, a própria cabine reforça muito o grave abaixo de ~60 Hz. A região de 30 a 50 Hz do rap e da eletrônica é exatamente onde esse reforço aparece.
- **Mais área de cone:** dois subs com a mesma potência total rendem cerca de +3 dB a mais que um.
- **Ganho bem regulado:** sem clipping, o som aguenta volume alto sem virar ruído.

## Arquitetura recomendada

```
Rádio original ──(alto nível / conversor)──► Módulo mono classe D, 2 Ω
                                             │  passa-baixa 70–80 Hz, bass boost DESLIGADO
                                             ▼
                                    Sub(s) 12" em caixa SELADA

Bateria original (+) ── fusível a ≤ 30–45 cm ── cabo OFC 16–25 mm² ── módulo
Negativo: mesma bitola, curto (< 1 m), em ponto do chassi lixado
RCA/sinal e força passando por lados opostos do carro (evita ruído)
```

**Por que caixa selada, e não dutada?**
- **Selada:** grave mais seco, controlado e rápido. É o antídoto contra o "embolado". Ela rende menos em campo aberto, mas no carro pequeno o ganho de cabine compensa.
- **Dutada:** dá +3 a +6 dB perto da sintonia (a frequência para a qual o duto foi calculado). Em compensação precisa de filtro subsônico (corta o grave abaixo da sintonia para proteger o falante), fica maior e, com projeto genérico de loja, é a principal causa de grave embolado.
- **Para o seu gosto:** a selada é o caminho. Se um dia quiser dutada, que seja com projeto simulado para o falante específico, a partir dos parâmetros T/S (os dados técnicos do fabricante, como Fs, Qts e Vas).

**Detalhe que muita gente esquece:** metade da sensação de "grave embolado" vem dos **alto-falantes de porta originais**, que não seguram o médio-grave (~80 a 200 Hz). O sub fica "sozinho" e parece separado do resto da música. Trocar os falantes dianteiros por um kit 2 vias (woofer + tweeter + divisor de frequência) custa pouco e muda muito a sensação.

## Dimensionamento

- **Impedância.** Módulo mono estável em **2 Ω** é o ponto certo: mais potência que em 4 Ω sem o sacrifício de controle do 1 Ω.
  - 1 sub com bobina dupla 2+2 Ω, ligada em série → **4 Ω**.
  - 1 sub com bobina dupla 1+1 Ω, ligada em série → **2 Ω**.
  - 2 subs de 4 Ω cada, ligados em paralelo → **2 Ω**.
  - Antes de comprar, confira a combinação que dá 2 Ω com o seu módulo.
- **Casamento.** O módulo pode ter de 1× a 1,5× o RMS do sub, **com o ganho regulado**. O que queima falante é clipping, não "potência sobrando".
- **Cabo de força**, para 5 m de cabo e queda de no máximo 0,5 V, em **cobre OFC**:

  | Módulo | Pico de corrente | Cabo mínimo | Na prática | Fusível perto da bateria |
  |---|---|---|---|---|
  | ~800 W | ~80 A | 16 mm² | 16 a 21 mm² | 80 a 100 A |
  | ~1000 W | ~100 A | 21 mm² (4 AWG) | 21 a 25 mm² | 100 a 125 A |

  O fusível protege o **cabo**, então use no máximo o que a bitola aguenta.
- **Tensão alvo para regular o ganho** (medida no multímetro, com tom senoidal e o sub desconectado):
  - 600 W em 2 Ω → **34,6 V AC**
  - 800 W em 2 Ω → **40,0 V AC**
  - 1000 W em 2 Ω → **44,7 V AC**

  Use a potência RMS real do módulo em 2 Ω na tensão do seu carro, não o número da caixa.
- **Volume da caixa selada.** Como ponto de partida, ~28 a 35 L líquidos por sub de 12" (descontado o espaço do próprio falante). **Use o volume recomendado pelo fabricante do sub escolhido.** Encha de manta acrílica, sem compactar, e vede tudo com cola e silicone, porque vazamento arruína caixa selada.

## Opções de orçamento

Os valores são **estimativas** e variam muito por loja e promoção. Confira os preços atuais antes de comprar.

**Econômico: R$ 970 a 1.530.** Grave limpo e presente, sem incomodar a elétrica.

| Item | Especificação que importa | Onde comprar | Preço |
|---|---|---|---|
| Sub 12" | 350 a 400 W RMS, 2 Ω ou bobina dupla 2+2 Ω, marca com ficha técnica (T/S) publicada | Loja oficial no ML / Amazon / Magalu / loja especializada | R$ 300 a 450 |
| Caixa | Selada, ~28 a 32 L, MDF de 15 a 18 mm, bem vedada | Marceneiro / loja de som local | R$ 150 a 250 |
| Módulo | Mono classe D, **400 a 500 W RMS em 2 Ω**, passa-baixa, entrada de alto nível | Loja oficial / loja com nota fiscal | R$ 250 a 380 |
| Elétrica e sinal | Cabo **OFC** de 10 a 16 mm² + fusível de 60 a 80 A perto da bateria + negativo + remote + conversor de alto nível (se o módulo não tiver essa entrada) | Loja nacional que comprove cobre OFC | R$ 120 a 200 |
| Instalação | Mão de obra (ou você mesmo, se tiver prática) | Instalador de confiança | R$ 150 a 250 |

**Equilibrado (a minha escolha): R$ 1.660 a 2.500.** Grave forte e seco, integrado a portas que acompanham, cabendo no orçamento.

| Item | Especificação que importa | Onde comprar | Preço |
|---|---|---|---|
| Sub 12" | 500 a 600 W RMS, bom Xmax (deslocamento máximo do cone), ficha técnica publicada | Loja oficial / loja especializada | R$ 450 a 700 |
| Caixa | Selada, volume indicado pelo fabricante (~30 a 35 L), MDF de 18 mm | Marceneiro / loja de som local | R$ 200 a 300 |
| Módulo | Mono classe D, **~800 W RMS em 2 Ω** (em 12,6 V entrega ~600 W, casando com o sub), passa-baixa, entrada de alto nível | Loja oficial / loja com nota fiscal | R$ 380 a 500 |
| Elétrica e sinal | Cabo **OFC** de 16 a 21 mm² + fusível de 100 A perto da bateria + negativo + remote + conversor de alto nível | Loja nacional que comprove cobre OFC | R$ 180 a 300 |
| Portas dianteiras | Kit 2 vias de 6" (woofer + tweeter + divisor), ligado no próprio rádio | Loja oficial / loja especializada | R$ 250 a 400 |
| Instalação | Mão de obra | Instalador de confiança | R$ 200 a 300 |

**Caprichado ("forte"): R$ 1.720 a 2.500.** Mais pressão, no limite do que a elétrica original aguenta. As portas ficam originais.

| Item | Especificação que importa | Onde comprar | Preço |
|---|---|---|---|
| Subs | **2 × 12"**, 350 a 400 W RMS cada, 4 Ω (ligados em paralelo = 2 Ω) | Loja oficial / loja especializada | R$ 600 a 900 |
| Caixa | Selada dupla, ~55 a 65 L, com divisória, MDF de 18 mm | Marceneiro / loja de som local | R$ 250 a 400 |
| Módulo | Mono classe D, **~1000 W RMS em 2 Ω**, passa-baixa, entrada de alto nível | Loja oficial / loja com nota fiscal | R$ 450 a 600 |
| Elétrica e sinal | Cabo **OFC** de 21 a 25 mm² + fusível de 100 a 125 A perto da bateria + negativo + remote + conversor de alto nível | Loja nacional que comprove cobre OFC | R$ 220 a 300 |
| Instalação | Mão de obra | Instalador de confiança | R$ 200 a 300 |

Os totais são a soma das faixas de cada item. Exemplos de marcas nacionais com assistência no Brasil:
- **Módulos:** Taramps, SounDigital, Banda, Stetsom.
- **Subs:** JBL Selenium, Bravox, Hinor, Triton, entre outras.

As linhas mudam muito, então **escolha pela especificação**, não pelo nome.

**Por que eu iria no Equilibrado:** você pediu grave forte **e** sem embolar. Um sub bom em caixa selada, com as portas segurando o médio-grave, soa mais "cheio" e mais alto *na percepção* do que dois subs brigando com falantes de porta originais. Se o que você quer mesmo é pressão no porta-malas, o Caprichado entrega uns +3 dB a mais, mas ocupa o dobro de espaço e deixa as portas para depois.

## Onde economizar / onde não economizar

- **Economize:**
  - Potência "de etiqueta": 3000 W no anúncio não é som melhor.
  - Cabos "premium" de sinal.
  - Acabamento da caixa: carpete simples resolve.
  - Mão de obra, se você tiver prática com ferramenta.
- **Não economize:**
  - **Cabo de força OFC e fusível perto da bateria.** É segurança, porque um curto sem fusível pega fogo.
  - **Qualidade do sub.** É o que define o som.
  - **Caixa bem construída e vedada.**
  - **Módulo de marca** que declara o RMS com tensão e impedância.

## Riscos e cuidados

- **Módulo com o ganho no máximo e bass boost ligado** = clipping = sub queimado e grave embolado. Regule com o multímetro (passo a passo abaixo).
- **Kit de cabo barato "cobre" que na verdade é CCA.** Raspe a ponta: se aparecer alumínio prateado por dentro, é CCA.
- **Negativo em ponto pintado** gera ruído (o chiado que acompanha a rotação do motor) e queda de tensão. Lixe o chassi até o metal.
- **Som alto com motor desligado.** A bateria de partida não gosta disso. Com ~250 W de consumo médio, 60 Ah dariam ~2 h *no papel*, mas numa bateria de partida o recomendável é bem menos que isso para não ficar sem partida e não encurtar a vida dela. Ouça com motor ligado.
- **Rádio original:** alguns têm equalização de fábrica que muda o grave com o volume. Deixe o EQ do rádio plano, loudness desligado, e faça o ajuste fino no módulo.
- **Audição:** 120 dB dentro de um carro fechado machuca de verdade em pouco tempo. Forte, sim; no talo por horas, não.

## Próximos passos

1. **Confira dois dados do seu carro.** A amperagem do alternador (etiqueta nele) e qual rádio você tem (MyLink ou básico). Se o alternador for de ~110 A ou mais, o Caprichado fica mais folgado.
2. **Escolha o sub primeiro** e baixe a ficha técnica dele. A caixa é feita para o volume recomendado **daquele** sub, não genérica de loja.
3. **Compre o módulo em 2 Ω** casando com o RMS do sub (1× a 1,5×).
4. **Instale o cabo de força OFC com o fusível a no máximo ~30 a 45 cm da bateria**, e passe força e sinal por lados opostos do carro.
5. **Regule:**
   - Deixe o EQ do rádio plano e o bass boost em 0.
   - Passa-baixa em ~70 a 80 Hz.
   - Toque um tom de 40 Hz a 0 dB com o rádio no volume máximo sem distorção (normalmente ~75 a 85% do volume).
   - Suba o ganho até a tensão alvo da seção de dimensionamento.
   - Depois ajuste de ouvido, com a fase do sub em 0° ou 180° (a que soar mais "junto" com as portas).
6. **Se um dia quiser subir para 1500 W ou mais**, aí sim entra a elétrica: Big 3 primeiro (barato e dá muito resultado), depois bateria auxiliar com isolador e alternador de maior amperagem. Vale planejar o cabo de força já pensando nisso: passar um 25 a 35 mm² hoje custa pouco a mais e evita refazer depois.

Se quiser, me diz qual das três opções te agradou e o espaço que você topa perder no porta-malas. Eu fecho o projeto com modelos específicos, o volume exato da caixa para o sub escolhido e salvo tudo num arquivo de projeto para a gente continuar depois.
