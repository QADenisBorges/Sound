Bora montar! A sua ideia (TPA3116 + dois woofers de 6" + agudo) é uma boa base para uma caixa de churrasco. Antes da lista de compras, tem três ajustes que decidem se a caixa vai ficar boa e durar:

1. **A bateria manda na potência.** A TPA3116 só entrega os "2×50 W" do anúncio com fonte de ~24 V. Com bateria, o número de células em série (4S, 5S…) define quanto som sai. Eu recomendo **5S**, e mostro a conta abaixo.
2. **São dois tweeters, não um.** A TPA3116 trabalha em ponte (BTL, os dois fios de cada falante são "vivos"). Não dá para ligar um tweeter só nos dois canais juntando os negativos, porque isso **queima a placa**. Então é um conjunto woofer + tweeter + crossover por canal.
3. **O falante tem que ser de 4 Ω.** Com bateria a tensão é limitada, e um falante de 8 Ω receberia metade da potência.

---

## Resumo

Uma caixa **2 vias estéreo, dutada, com bateria Li-ion 5S (18,5 V nominal)**:

- **Eletrônica:** placa TPA3116 com Bluetooth.
- **Falantes:** 2 woofers de 6"/6,5" de 4 Ω e 2 tweeters de domo.
- **Divisão de frequências:** crossover passivo de 12 dB/oitava em ~3 kHz.
- **Gabinete:** ~52 × 26 × 25 cm, dividido ao meio (uma câmara de ~10 L para cada woofer).

**O que esperar:**
- Potência: ~30–35 W limpos por canal com a bateria cheia.
- Volume: ~95 dB a 4 m ao ar livre. É volume de festa em área de churrasco, não é paredão.
- Autonomia: 3–6 h com 10 células.

Custo total: de ~R$ 570 a ~R$ 1.600, conforme a opção (estimativa).

## Premissas

- **Uso:** música ambiente a animada, ao ar livre, com 5 a 20 pessoas. Se a ideia é festa grande, o caminho muda para placa mais potente e bateria 12 V de chumbo/LiFePO4 com 4 falantes.
- **Portabilidade:** você carrega a caixa pela alça, então ela deve pesar menos de ~10 kg.
- **Experiência:** você sabe soldar, mas nunca fez caixa. Por isso a Econômica e a Equilibrada evitam o que exige equipamento de medição.
- **Bateria:** você **não tem solda a ponto** (spot welder). Por isso a bateria vai montada em suportes ou comprada pronta, e **nunca com as células soldadas no ferro**. O calor do ferro estraga a célula.
- **Preços:** são estimativas sem pesquisa de hoje. Confira antes de comprar.

## Arquitetura

```
Celular ──BT──► Placa TPA3116 (BT + amp 2 canais, ponte/BTL)
                  │ canal E              │ canal D
                  ▼                      ▼
             Crossover E             Crossover D      (12 dB/oit, ~3 kHz)
             ├─► Woofer 6" E          ├─► Woofer 6" D   (câmara ~10 L + duto)
             └─► Tweeter E            └─► Tweeter D

Elétrica:
Células 18650 5S2P ─► BMS 5S ─► Fusível 7,5 A ─► Chave ─► Placa (V+ / GND)
                        ▲                          └─► Voltímetro (nível da bateria)
                        └── Jack DC ◄── Carregador Li-ion 21 V (CC/CV)
```

**Por que estéreo, se é uma caixa só?** Numa caixa de 50 cm a separação estéreo quase não se percebe. Mas usar os dois canais é o jeito de a placa entregar o dobro de potência. Se a música tiver algo só num lado, ative **"Áudio mono"** no celular (fica em Acessibilidade no Android e no iPhone). Assim os dois lados tocam igual.

**Por que dutada?** Com pouca potência disponível, o duto "empresta" volume de grave perto da sintonia. Uma caixa dutada nesse tamanho toca ~3 dB a mais de grave, o que equivale a dobrar a potência, de graça. A caixa selada fica mais seca e mais fácil de acertar, mas toca menos grave. Ela passa a ser a melhor escolha se o woofer tiver Qts alto (veja abaixo).

**Por que dividir a caixa ao meio?** Como cada woofer recebe um canal diferente, cada um fica na sua câmara, sem um "empurrar" o ar do outro. A divisória ainda funciona como **travamento** (bracing), deixando as paredes mais rígidas.

## Dimensionamento

### 1. Bateria × potência (a conta que define o projeto)

Numa placa em ponte, o teto teórico é P ≈ V² / (2 × Z). Na prática, sem distorcer, sai ~60–70% disso.

| Bateria | Tensão cheia | Teto em 4 Ω | Uso limpo por canal | Observação |
|---|---|---|---|---|
| 4S | 16,8 V | 35 W | ~20–25 W | Mais comum, mas fica fraca |
| **5S** | **21 V** | **55 W** | **~33–38 W** (cai para ~26–30 W na tensão nominal) | **Melhor equilíbrio** |
| 6S | 25,2 V | 79 W | ~48–55 W | No limite do chip (26 V máx.). Muitas placas vêm com capacitor de 25 V e estouram. Evite |

**Interpretação:** a 5S dá quase o dobro da 4S e tem folga para o chip e para os capacitores da placa. Além disso, **as baterias de ferramenta "18 V / 20 V Max" são 5S**, o que abre uma opção de upgrade no futuro.

### 2. Volume sonoro (SPL)

Para um woofer de 89 dB/1W/1m, 30 W por canal e 2 woofers (resultado da calculadora):

- **1 m:** ~107 dB
- **4 m (campo livre, ao ar livre):** ~95 dB
- **4 m com 15 W** (bateria no fim ou volume moderado): ~92 dB

**Interpretação:** ~95 dB a 4 m é bem alto para conversa perto e anima uma área de churrasco. Um woofer de 86 dB perde 3 dB, o que equivale a metade da potência. Por isso **sensibilidade é a spec nº 1 do woofer neste projeto**.

### 3. Corrente, fusível e cabo

Com as 2 × 35 W no máximo, a 18,5 V e 85% de eficiência (calculadora):

- **Corrente de pico:** ~4,5 A
- **Corrente média com música:** 0,6–1,5 A

**Consequência:**
- **Fusível:** 7,5 A tipo lâmina, colado na saída da bateria.
- **Cabo de alimentação:** 16 AWG (1,3 mm²), com folga.
- **Cabo de falante interno:** 18 AWG serve.

### 4. Autonomia

Consumo médio com música de ~15 W (volume animado) a ~25 W (volume alto). Calculadora, usando 80% da carga:

| Pack 5S | Capacidade | 15 W médios | 25 W médios |
|---|---|---|---|
| 5S1P (5 células) | 3 Ah | ~3 h | ~1,8 h |
| **5S2P (10 células)** | **6 Ah** | **~5,9 h** | **~3,6 h** |
| 5S3P (15 células) | 9 Ah | ~8,9 h | ~5,3 h |

A 5S2P cobre um churrasco inteiro com folga.

### 5. Gabinete e duto

- **Medidas externas:** ~52 × 26 × 25 cm, em chapa de 15 mm, o que dá interno de 49 × 23 × 22 cm, ou ~24,8 L.
- **Divisória central:** também de 15 mm, deixa ~12 L brutos por lado.
- **Volume líquido:** tirando o volume do woofer (~0,5 L), do duto (~0,3 L) e a parte do compartimento da eletrônica, fica **~10 L líquidos por woofer**.
- **Sintonia (Fb):** ~55 Hz. É o grave "cheio" que um 6" consegue tocar sem sofrer.

Duto por câmara (calculadora):

| Duto | Comprimento | Velocidade do ar no pico | Observação |
|---|---|---|---|
| PVC 50 mm (5 cm interno) | ~15,8 cm | ~9 m/s (OK) | Preferível. Deixe ≥ 5 cm entre a ponta e a parede de trás |
| PVC 40 mm (4 cm interno) | ~9,5 cm | ~14 m/s (OK, mas mais perto do limite de ~17 m/s) | Use se o de 50 não couber |

**Importante:**
- **Os 55 Hz e os 10 L são o ponto de partida.** O volume e a sintonia certos dependem dos parâmetros T/S do woofer que você comprar (Fs, Qts, Vas). Simule no **WinISD** (é grátis) com os dados do datasheet antes de cortar a madeira.
- **Qts** é o quanto o falante é "amortecido". Com Qts entre 0,3 e 0,5, a dutada funciona bem.
- **Woofer de carro costuma ter Qts de 0,6 a 0,9,** porque é feito para porta de carro. Nesse caso, faça **selada** com ~8–10 L por lado. Toca menos grave, mas fica limpa.
- **Duto:** arredonde (ou lixe) a borda de dentro para diminuir o ruído de sopro.

### 6. Crossover passivo (Opção Equilibrada)

2ª ordem Butterworth (12 dB/oitava) em 3 kHz, para 4 Ω (valores calculados):

- **Indutor:** L = 0,30 mH. Use **0,33 mH com núcleo de ar**.
- **Capacitor:** C = 9,4 µF. Use **10 µF de poliéster ou polipropileno**.

**Montagem por canal:**
- **Woofer (passa-baixa):** indutor 0,33 mH em série e capacitor de 10 µF em paralelo com o woofer.
- **Tweeter (passa-alta):** capacitor de 10 µF em série e indutor de 0,33 mH em paralelo.
- **Polaridade do tweeter: ligue invertido.** Um filtro de 2ª ordem defasa 180° no corte. Ligado "certo", aparece um buraco em ~3 kHz.

**Se o tweeter tocar alto demais** (o comum é ele ser 2–4 dB mais sensível que o woofer), use um **L-pad**, que é um divisor com 2 resistores entre o filtro e o tweeter. Para atenuar −3 dB em 4 Ω:

- resistor de **1,2 Ω em série**
- resistor de **10 Ω em paralelo** com o tweeter
- os dois de **10 W**

**Limite desses valores:** eles partem da impedância nominal. Como a impedância real do falante varia com a frequência, o resultado fica bom, mas não perfeito. Para ficar perfeito, só medindo (REW + microfone).

**Esquema de ligação de um canal** (repita igual no outro, **sem nunca unir os negativos dos dois canais nem ligá-los ao GND**):

```
Placa L+ ──┬──[0,33 mH]──┬────────────────► Woofer (+)
           │             [10 µF]
           │             │
Placa L− ──┼─────────────┴────────────────► Woofer (−)
           │
           └──[10 µF]──┬──[1,2 Ω]──┬──────► Tweeter (−)   ← invertido
                       │           │
                   [0,33 mH]     [10 Ω]
                       │           │
Placa L− ──────────────┴───────────┴──────► Tweeter (+)   ← invertido
```

**Polaridade do woofer:** confira com uma pilha de 1,5 V. Com o + da pilha no terminal +, o cone tem que ir **para frente**. Os dois woofers precisam estar na mesma polaridade.

## Opções de orçamento

Valores em R$, estimativas sem pesquisa de preço de hoje: confira antes de comprar. Nos itens do AliExpress, considere o preço final **com impostos** mostrado no checkout.

| Item | Especificação que importa | Onde comprar | Econômico | Equilibrado | Caprichado |
|---|---|---|---|---|---|
| Amplificador | Econ./Equil.: placa **TPA3116D2** 2 canais com BT 5.0 e jumper de ganho (ex.: família ZK-502; confira o chip nas fotos). Caprichado: placa BT + DSP (ADAU1701) + 4 canais classe D, ou 2× TPA3116 + DSP ADAU1701 | AliExpress/Shopee | 40–70 | 50–80 | 300–550 |
| Woofers (par) | **4 Ω**, sensibilidade **≥ 88 dB/1W/1m**, 40–80 W RMS, Xmax ≥ 3 mm (≥ 5 mm no Caprichado), T/S publicados. Econ.: vêm num **kit 2 vias automotivo de 6"** (par de woofers + par de tweeters + crossovers casados) | Nacional com NF (ML loja oficial / Amazon / loja de som) | 180–300 (kit completo) | 200–380 | 350–600 |
| Tweeters (par) | Domo 1", 4–6 Ω, **Fs ≤ 1,5 kHz**, sensibilidade igual ou maior que a do woofer | Nacional com NF | incluso no kit | 60–150 | 150–300 |
| Crossover (2 canais) | Equil.: 2ª ordem 3 kHz: por canal 2× indutor 0,33 mH de ar + 2× capacitor 10 µF poliéster/PP + L-pad 1,2 Ω/10 Ω 10 W. Caprichado: só um capacitor de proteção em série no tweeter (o DSP faz o corte) | AliExpress/Shopee | incluso no kit | 60–120 | 10–20 |
| Células 18650 | Marca conhecida (Samsung, LG, Molicel, Sony/Murata), 2500–3500 mAh, **mesmo modelo e lote**. Econ.: 5S1P (5 células); Equil.: 5S2P (10); Capr.: 5S3P (15). Com suportes/holder ou pack pronto com BMS | Nacional, vendedor com reputação (lítio importado tem restrição de envio e muita falsificação) | 110–190 | 200–350 | 300–525 |
| BMS | **5S**, 15–20 A, **com balanceamento** | AliExpress/Shopee ou nacional | 15–30 | 15–30 | 20–40 |
| Carregador | **Li-ion 21 V CC/CV**, 2 A (3 A no Caprichado). Não serve fonte de notebook | Nacional ou AliExpress | 30–50 | 30–50 | 50–90 |
| Proteção e ligações | Porta-fusível + fusível 7,5 A, chave 10 A, jack DC, voltímetro/indicador de carga, cabos 16/18 AWG, bornes, espaguete termo | AliExpress/Shopee | 40–70 | 40–70 | 60–100 |
| Gabinete | Econ.: MDF 15 mm + cola PVA + tinta. Equil.: **compensado 12–15 mm** + tinta emborrachada/texturizada. Capr.: compensado naval/multilaminado + acabamento resistente. Mais a manta acrílica | Madeireira local (corte na serra deles) | 100–180 | 150–260 | 250–400 |
| Acabamento externo | 2 dutos PVC, tela metálica de proteção, alça, pés de borracha (Capr.: + cantoneiras e dutos com flare) | Loja de material/ferragem + AliExpress | 50–90 | 60–110 | 100–180 |
| Programador DSP | Interface USB para ajustar o DSP, se a placa exigir | AliExpress | — | — | 0–150 |
| **Total estimado** | | | **R$ 565–980** | **R$ 865–1.600** | **R$ 1.590–2.955** |

**As três opções:**
- **Econômico:** o kit automotivo resolve o crossover para você, porque vem casado de fábrica. É a opção de menor risco para uma primeira caixa. O preço disso: provavelmente caixa **selada** (woofer de porta tem Qts alto), menos grave e ~3 h de bateria.
- **Equilibrado (a que eu escolheria):** woofers com T/S na medida para dutada, 6 h de bateria, gabinete que aguenta churrasco. Você aprende crossover de verdade.
- **Caprichado:** com o DSP, cada falante tem seu canal. Você corta, equaliza e **protege o woofer com filtro subsônico** pelo software. Vale se você quer evoluir para medir com REW. Dá mais trabalho de configurar.

## Onde economizar / onde não economizar

**Economize em:**
- Placa amplificadora e Bluetooth (genérico chinês funciona bem aqui).
- Conectores, chave, voltímetro, capacitores e indutores do AliExpress.
- Acabamento "bonito": uma tinta emborrachada e uma tela resolvem.

**Não economize em:**
- **Células 18650.** Se aparecer "9800 mAh" por R$ 10, é falsa, com certeza. Célula falsa tem 1/4 da capacidade e é a principal causa de incêndio.
- **BMS e fusível.** São a segurança da caixa.
- **Sensibilidade do woofer.** Com pouca potência disponível, cada dB conta.
- **Vedação e travamento do gabinete.** Vazamento de ar e parede vibrando estragam o grave, e isso não tem conserto depois.
- **Carregador Li-ion de verdade**, com corte em 21 V.

## Riscos e cuidados

**Para a caixa durar:**
- **Bateria:**
  - Não descarregue até o BMS cortar, porque isso encurta a vida das células. O voltímetro serve para isso: **pare em ~17 V** (3,4 V por célula).
  - Não deixe a caixa **no sol**. Uma caixa escura no sol passa de 60 °C por dentro, e Li-ion quente degrada rápido e é perigoso.
  - Guarde com ~60% de carga se for ficar semanas parada.
- **Umidade e gordura:**
  - MDF incha com cerveja, chuva ou lavagem. Se for de MDF, sele bem todas as faces, inclusive por dentro nas bordas. Compensado aguenta melhor.
  - Uma tela na frente protege os cones.
  - Eletrônica **num compartimento separado**, vedado das câmaras dos woofers. Passe os fios por furos vedados com silicone.
- **Vibração solta tudo:**
  - Prenda as placas com espaçadores e parafusos, não só com cola quente.
  - Faça alívio de tensão nos fios (abraçadeira perto da solda).
  - Prenda bateria e BMS firmes, sem folga.
- **Clipping (distorção por falta de potência, que queima tweeter):**
  - Deixe o **ganho da placa baixo** (jumper em 20–26 dB), porque ganho alto também dá chiado.
  - Se no volume máximo do celular o som "embola" ou fica áspero, é clipping: abaixe o volume, não force.
- **Grave demais no EQ do celular:** numa caixa dutada, abaixo da sintonia o woofer fica "solto" e pode passar do limite de excursão. Evite reforçar abaixo de 50 Hz. O Caprichado resolve isso com filtro subsônico no DSP.

**Para não queimar nada:**
- **Saída em ponte (BTL):**
  - Nunca una os negativos dos dois canais.
  - Nunca ligue o negativo do falante no GND da bateria.
  - Não use cabo com "comum" entre os canais.
- **Montagem da bateria:**
  - Nunca solde a célula com ferro.
  - Confira a polaridade de cada célula **antes** de ligar o BMS.
  - Siga a ordem de ligação dos fios de balanceamento do BMS: normalmente B− primeiro, depois B1, B2… até B+. Veja o diagrama do seu BMS.
- **Estalo ao ligar:** algumas TPA3116 dão "tum" ao ligar. Ligue com o volume do celular baixo.
- **Tocar carregando:** funciona, mas carregador barato pode colocar ruído no som. Teste.

## Próximos passos

1. **Escolha a opção.** Eu iria de **Equilibrado**.
2. **Escolha o woofer primeiro e pegue o datasheet** (Fs, Qts, Vas, Xmax, sensibilidade). Me mande que eu confiro:
   - se ele fica bom dutado com ~10 L, ou se vale a selada;
   - a sintonia e o comprimento final do duto;
   - se os valores do crossover precisam de ajuste.
3. **Simule no WinISD** antes de cortar a madeira. Desenhe o corte das peças e peça para a madeireira cortar na serra (fica esquadrejado, e isso faz diferença na vedação).
4. **Peça logo as peças do AliExpress** (placa, BMS, componentes do crossover), porque demoram semanas. As células, compre no Brasil.
5. **Teste tudo na bancada antes de fechar a caixa.** Ligue a bateria, a placa, o crossover e os falantes soltos. Confira o Bluetooth, o volume, o ruído e a polaridade (pilha no woofer, tweeter invertido).
6. **Monte o gabinete:**
   - cole e parafuse, depois sele por dentro com cola ou silicone;
   - manta acrílica só nas paredes (sem tapar o duto);
   - por último, falantes com fita de vedação (ou borracha) entre a borda e a madeira.
7. **Ajuste de ouvido.** Toque músicas que você conhece. Se o agudo incomodar, aumente o L-pad (−4/−5 dB). Se faltar agudo, diminua.

Salvei o projeto em `C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-2\eval-3-diy-caixa-bluetooth\with_skill\run-1\outputs\projeto.md`, com um histórico de decisões para a gente continuar dali. Quando você escolher o woofer, me passa o modelo ou o datasheet que eu fecho as medidas da caixa e do duto.
