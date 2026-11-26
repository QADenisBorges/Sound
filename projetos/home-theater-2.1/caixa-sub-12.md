# Caixa dutada 1 × Bomber 12" — home theater 2.1

Projeto de 16/11/2026. Substitui o Protech Light 8" (caixa pronta, Fb 36 Hz). Objetivo: grave de cinema plano de 35 a 80 Hz, com o SD800.4 em ponte que já está no sistema.

Escolhido contra o **Bicho Papão 15" 600 W 4+4 Ω (cód. 1.23.063)**. Fs 29,5 · Qts 0,75 · Vas 190 L · Xmax 10 · [manual](https://bomber.com.br/wp-content/uploads/2022/10/3.27.280-1.23.063-Manual-Bicho-Papao-15-600W-4-4-ohms.pdf). No SD800.4 ele recebe só ~264 W (bobinas em série = 8 Ω). Em 30–35 Hz empata com o 12", e só o alcança numa caixa de 150 L. Em 45–60 Hz tem +4 a +5 dB, mas a resposta sobe 7–12 dB até 60 Hz (grave embolado).

## 0. Caminho escolhido (16/11/2026): caixa pronta de 18 mm + tubo ajustado
O usuário preferiu caixa pronta ao marceneiro. O projeto de marceneiro (seções 2 a 3) fica como plano B.

**Caixa:** [Caixa quadrada MDF 18 mm dutada 12" 55 L](https://www.mercadolivre.com.br/caixa-quadrada-mdf-18mm-dutada-12pol-gravao-longo-55-litros/p/MLB2083065319), Vulcanik Box / Loja oficial TopVenda. R$ 299,99 em 16/11. Antes de comprar, abra "2 produtos novos a partir de" para ver se há oferta menor.
- Externas 36 × 58 × 36 cm, MDF 18 mm. Internas ~32,4 × 54,4 × 32,4 cm = **~57 L brutos**, ~52 L líquidos com falante e tubo.
- Vem com **1 tubo de 4"** (81 cm²), de comprimento não informado.

**Sintonia pelo comprimento do tubo** (medido da face externa da frente até a ponta interna):
| Tubo | Fb estimada | Folga da ponta até a traseira | Uso |
|---|---|---|---|
| 35 cm | ~34 Hz | ~-1 cm (**não cabe reto**) | só com joelho |
| 30 cm | ~36 Hz | ~4 cm (**apertado demais**: abafa e muda a Fb) | só com joelho |
| **25 cm** | **~39 Hz** | ~9 cm (ok, ≥ ~1 diâmetro) | **tubo reto: comece aqui** |

- **Tubo reto (simples):** corte em **25 cm**, para Fb ≈ 39 Hz. Simulado a 400 W: ~108 dB a 30 Hz, 115–116 dB de 40 a 60 Hz.
- **Para ~36 Hz (mais grave de cinema):** use um **joelho de 90° de PVC de esgoto de 100 mm** dentro da caixa. O tubo sai da frente (~12 cm), vira para a lateral e corre ao longo da largura. Comprimento total pela linha central: **~30 cm**. A ponta deve ficar a ≥ 10 cm de qualquer parede. Prenda com abraçadeira ou cola quente num taco, para não vibrar.
- Confirme a sintonia com o teste da lanterna (seção "Conferir a sintonia"): varra de 25 a 50 Hz e veja onde o cone quase para. Comece com o tubo **mais longo** e vá cortando de 2 em 2 cm. Cada 5 cm cortados sobem ~2–3 Hz.

**Limite desta caixa: o duto de 4" sopra.** O ar passa de ~25–30 m/s a 400 W perto da sintonia, quando o aceitável é ~17 m/s, e isso vira um chiado de vento em explosões fortes.
- Lixe as duas bocas do tubo com raio de ~1 cm. Se achar, use um tubo com **flare** (boca alargada).
- No PRO 2.4BT: limitador do canal do sub travado no ponto regulado (passo 3.12 do guia). Se ouvir o sopro em cenas pesadas, baixe o limitador 2–3 dB.

**Ajustes desta caixa (no lugar dos da seção 5):**
- Subsônico: **0,8 × Fb, 24 dB/oit** → **31 Hz** com tubo reto de 25 cm (Fb 39), **29 Hz** com joelho (Fb 36). Abaixo da Fb o cone fica solto: com Fb 39 e 400 W, a 25 Hz ele passaria do Xmax de 13 mm.
- Ganho 40 V, passa-baixa LR4 120 Hz e fase 0°/180° como na seção 5.

## 1. Falante
| Item | Dados (ficha oficial) |
|---|---|
| **Bomber Bicho Papão 12" 800 W 4 Ω, cód. 1.23.107 (SW12BPF800-4)** | Fs 37 Hz · Qts 0,50 · Qes 0,52 · Vas 31,5 L · Xmax 13 mm · Sd 453 cm² · 87 dB · Re 3,16 Ω · **furo 285 mm · aro 326 mm** · profundidade ~16,6 cm · ocupa 3,36 L · [manual](https://bomber.com.br/wp-content/uploads/2023/03/3.27.347-1.23.107-Manual-SW-12-BPF-800W-4-ohms.pdf) |

R$ 380 ([ML](https://www.mercadolivre.com.br/p/MLB27416088)). É o mesmo do projeto do carro (`projetos/sq-grand-siena/caixa-sub-2x12.md`). **Antes de comprar, pedir foto do código 1.23.107.** Outro código = outra ficha = refazer a sintonia.

## 2. Alvo e desempenho
- **Volume líquido: 55 L. Sintonia: 32 Hz.**
- **Duto em fenda: 150 cm²** (4,2 × 36 cm), em L. Comprimento físico **~71 cm** (efetivo ~80 cm).
- Potência: SD800.4 em ponte, 4 Ω → **~400 W**.

Simulação: circuito equivalente, 1 m, meio-espaço, **sem o reforço da sala** (na sala, abaixo de ~40 Hz, costuma somar +5 a +10 dB, mais no canto).

| Potência | 25 Hz | 28 Hz | 30 Hz | 32 Hz | 35 Hz | 40 Hz | 50–80 Hz |
|---|---|---|---|---|---|---|---|
| 400 W: SPL | 106 | 110 | 112 | 113 | 114 | 114 | 114 |
| 400 W: excursão | **13,3 mm** (= Xmax) | 8,5 | 5,4 | 3,7 | 5 | 7,3 | 4–7,8 |
| 400 W: ar no duto | 15,5 m/s | **17 m/s** (máx., limite aceitável) | 17 | 16 | 13 | 9 | < 5 |
| 200 W: SPL / ar no duto | 103 / 11 | 107 / 12 | 109 / 12 | 110 / 11 | 111 / 9 | 111 / 7 | 111 |

O subsônico em **27 Hz, 24 dB/oit** mantém o cone abaixo do Xmax em toda a faixa.

## 3. Medidas (MDF 18 mm, frente dupla 36 mm)
**Externas: 47,6 (largura) × 39,6 (altura) × 51,4 (profundidade) cm.** Internas: 44 × 36 × 46 cm = 72,9 L brutos.

Volume líquido: 72,9 − ar do duto ~10,6 − paredes do duto ~3,8 − falante 3,4 − travessa ~0,4 = **~55 L**.

Montada, pesa ~27 kg (≈ 21 kg de MDF + falante). Gasta ~1,6 m² de MDF (~⅓ de chapa).

### Lista de corte (MDF 18 mm)
| Peça | Qtd | Medida (cm) | Observação |
|---|---|---|---|
| Tampo e fundo | 2 | 47,6 × 51,4 | cobrem tudo |
| Laterais | 2 | 36,0 × 51,4 | entre tampo e fundo |
| Traseira | 1 | 44,0 × 36,0 | entre as laterais |
| Frente (2 camadas, coladas) | 2 | 39,8 × 36,0 | encostada na lateral **direita**; à esquerda ficam 4,2 cm livres (boca do duto) |
| Divisória do duto 1 (ao longo da lateral esquerda) | 1 | 40,0 × 36,0 | a 4,2 cm da lateral esquerda, da frente até a curva |
| Divisória do duto 2 (ao longo da traseira) | 1 | **30,0** × 36,0 | a 4,2 cm da traseira, começando na ponta da divisória 1. **Parafusada, sem cola**, até conferir a sintonia (deve terminar com ~21–23 cm) |
| Travessa | 1 | 5 × 38 | horizontal, da divisória 1 até a lateral direita, a meia altura e ~25 cm atrás da frente (atrás do ímã) |

### Duto em L
- O ar entra pela fenda de **4,2 × 36 cm** no lado esquerdo da frente. Corre ao longo da lateral esquerda (perna 1 ≈ 47,5 cm pela linha central) e vira 90° ao longo da traseira (perna 2), abrindo para a câmara.
- Alvo total **~71 cm**: a perna 2 fica com ~23,5 cm, ou seja, a divisória 2 termina com **~21–22 cm**.
- A divisória 2 sai com **30 cm** de propósito: a sintonia inicial fica em ~31 Hz, abaixo do alvo, porque encurtar é mais fácil que alongar. Cada 2 cm cortados sobem a sintonia uns 0,3–0,4 Hz.
- Na ponta da divisória 2, deixe ≥ 6 cm livres até a lateral direita.
- Arredonde as bordas da boca do duto, na frente e na saída, com raio de ~1 cm (lixa). Isso reduz o sopro.
- **Não** forre o duto por dentro, porque muda a sintonia.

### Furação da frente (medidas a partir da borda externa esquerda e da base da caixa)
- Centro do falante a **26,8 cm** da borda esquerda e **19,8 cm** de altura. Furo de **285 mm**.
- O aro (326 mm) fica a ~4,5 cm da boca do duto e dentro da frente nos quatro lados. Confira com o falante na mão antes de furar.
- Profundidade do falante ~16,6 cm. A câmara tem 46 cm, e o duto ocupa os últimos 6 cm, então a folga está ok.

### Montagem
- Cola de madeira ou PU + parafuso a cada ~10 cm. Vede todas as emendas internas com silicone ou PU.
- Fibra/manta: só uma camada fina na lateral direita e no tampo, **longe da boca interna do duto**. Opcional.
- Fios: borne ou terminal na traseira, com o furo vedado. Cabo de 2,5 mm² até o módulo (o mesmo do passo 3.1 do guia).
- Pés de borracha ou EVA embaixo, para a caixa não transmitir vibração ao piso de forma descontrolada.

### Conferir a sintonia (antes de colar a divisória 2)
1. Monte o falante, ligue e varra um tom senoidal devagar de 25 a 45 Hz, em volume baixo.
2. Lanterna no cone: onde ele **quase para de mexer** é a Fb (mesmo teste do passo 3.13 do guia).
3. Alvo **31–33 Hz**. Abaixo disso, encurte a divisória 2 em ~3 cm e repita. Acima, a peça precisa ser mais longa (cortar uma nova).
   - Acesso: tire o falante e alcance a divisória 2 pelo furo de 285 mm. Ou deixe o tampo só parafusado, com vedação, até o fim do ajuste.
4. Quando achar a Fb, cole e parafuse a divisória 2.

## 4. Posição na sala
- **Comece pelo canto** do lado da TV ou projetor, com a frente (falante e duto) virada para a sala. O canto rende mais em 30–50 Hz.
- Ouça sentado no lugar de assistir, com uma cena de grave conhecida. Se embolar em alguma nota, afaste 20–40 cm do canto e compare.

## 5. Ligação e ajustes (PRO 2.4BT + SD800.4)
- SD800.4 em **ponte CH4⊕/CH3⊖**, 4 Ω, como hoje. O Re de 3,16 Ω está dentro do que a ponte aceita (mínimo 4 Ω nominal).
- **Ganho: √(400 × 4) = 40 V**, o mesmo alvo atual (falante desligado, tom de 60 Hz a 0 dBFS, celular a 100 %, multímetro em V AC).
- DSP: **subsônico 27 Hz, 24 dB/oit** (era 28 Hz no Protech). Passa-baixa **LR4 120 Hz**, como hoje. Fase: comece em 0° e compare com 180° no lugar de assistir.
- EQ: comece plano. A caixa já sai reta, e o reforço da sala soma grave por baixo.

## 6. Custo e lista de compras
| # | Item | Qtd | Preço | Situação |
|---|---|---|---|---|
| 1 | Bomber Bicho Papão 12" 800 W 4 Ω, cód. 1.23.107 ([ML](https://www.mercadolivre.com.br/p/MLB27416088)) | 1 | R$ 380 | a comprar (pedir foto do código) |
| 2 | Caixa Vulcanik 55 L MDF 18 mm dutada ([ML](https://www.mercadolivre.com.br/caixa-quadrada-mdf-18mm-dutada-12pol-gravao-longo-55-litros/p/MLB2083065319)) | 1 | R$ 299,99 (16/11) | a comprar |
| 3 | Cabo auxiliar P2 × 2 RCA estéreo blindado, 5 m | 1 | a conferir | a comprar (incluído em 26/11) |
| 4 | Joelho 90° PVC esgoto 100 mm (só se for sintonizar em ~36 Hz) | 1 | barato | opcional |

- Plano B (marceneiro): MDF 18 mm (~⅓ de chapa) + corte, a orçar, no lugar do item 2. Borne + parafusos + cola: já tem ou é barato.
- Item 3: é o mesmo tipo do cabo P2 → 2 RCA de 10 m que ficou adiado na lista do 2.1 (`../home-theater-5.1/itens-a-comprar.md`, item 4). Se o de 5 m alcançar da fonte ao processador, ele substitui o de 10 m. Confira a distância antes.
- O Protech 8" fica livre (reserva, ou para outro projeto).
