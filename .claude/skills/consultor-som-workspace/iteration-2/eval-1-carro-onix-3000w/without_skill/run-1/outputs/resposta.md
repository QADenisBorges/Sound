# Resposta

Resposta curta: **do jeito que você descreveu, não faz sentido.** O problema não é o gosto nem o orçamento. É que um sistema desse tamanho não funciona com a elétrica original do Onix. E, pelo que você falou (rap e eletrônica sem grave embolado), dá pra montar algo que te agrada mais gastando menos.

## Premissas que eu assumi

- Onix 2019 hatch (1.0 ou 1.4), alternador original na faixa de **~90 a 100 A** (varia com a versão).
- Bateria original de 60 Ah, sem bateria extra e sem trocar o alternador.
- "Módulo de 3000W" sendo um amplificador classe D mono. Essa potência costuma ser a máxima ou a de 1 ohm "de caixa", não a RMS real.
- Rádio original (sem saída RCA), então vai precisar de um conversor de sinal.
- Preços aproximados do mercado brasileiro. Confirme na loja.

## Por que o plano original não fecha

**1. Conta de corrente**
- 2 subs x 800 W RMS = 1600 W RMS de potência útil.
- Um classe D rende uns 80%, então ele puxa uns 2000 W da elétrica.
- 2000 W ÷ 13,5 V ≈ **150 A** só pro som, no pico.
- O alternador inteiro do Onix dá uns 90 a 100 A, e o carro já gasta 30 a 50 A disso (injeção, ventoinha, farol, ar-condicionado).

Sobram uns **40 a 60 A pro som**. Isso dá algo em torno de **400 a 600 W RMS reais** pra usar com folga. O resto sai da bateria, e aí:
- a tensão cai, o farol "pisca" no ritmo do grave e o módulo entra em proteção;
- a bateria original, que não foi feita pra descarga pesada e repetida, perde vida útil rápido;
- o módulo com tensão baixa **distorce (clipa)**, e essa é uma das principais causas de queimar sub.

**2. O "3000W" provavelmente não é 3000 W**
Muito módulo de entrada anuncia potência máxima ou potência em 1 ohm a 14,4 V. Mesmo que ele entregue isso tudo, a elétrica do seu carro não aguenta alimentar. Comprar esse módulo sem mexer na elétrica é pagar por potência que você nunca vai usar.

**3. Dinheiro**
Com R$ 2500, 2 subs de 800 RMS + módulo + caixa dupla + cabeamento grosso + instalação já estoura ou fica no limite, **sem sobrar nada** pra alternador, bateria extra ou upgrade de cabos (o chamado "Big 3"). Ou seja: você acaba com um sistema caro trabalhando mal.

**4. Grave embolado**
Grave embolado quase nunca é falta de potência. Normalmente vem de:
- caixa errada (volume/sintonia errados, dutada sintonizada alta demais pro porta-malas);
- ganho alto demais e bass boost ligado;
- corte (crossover) mal ajustado, com o sub tocando médio-grave junto com as portas;
- sub fora de fase com o resto.

Dois subs de 12" num porta-malas pequeno como o do Onix hatch, empurrados por uma elétrica fraca, é a receita **exata** pro grave "boom boom" embolado que você quer evitar.

## O que eu recomendaria com R$ 2500 e sem mexer na elétrica do carro

Um ponto importante: puxar um cabo de alimentação direto da bateria, **com fusível perto do polo**, não é "mexer na elétrica do carro". Não altera nada do sistema original, é só a ligação correta de qualquer módulo. Isso é obrigatório por segurança. Não ligue o módulo em fio de rádio nem em fio de acessório.

### Proposta: 1 sub bem feito, bem ajustado

| Item | Especificação | Faixa de preço |
|---|---|---|
| Subwoofer | 1x 12" de **350 a 500 W RMS**, bobina que case com o módulo (ex.: 2 ohms ou dupla 4 ohms) | R$ 500 a 800 |
| Módulo | Classe D mono de **400 a 600 W RMS reais** na impedância final do sub, com filtro passa-baixa e subsônico | R$ 500 a 800 |
| Caixa | Caixa **selada** (ou dutada sintonizada baixo, ~32 a 35 Hz) de MDF 18 mm, no volume que o fabricante do sub indica | R$ 250 a 450 |
| Cabos | Kit com cabo de alimentação de cobre **21 mm² (4 AWG)**, porta-fusível perto da bateria, terra curto em lataria lixada | R$ 200 a 300 |
| Sinal | Conversor de alto pra baixo nível (line output converter) ligado nos fios de alto-falante do rádio original | R$ 60 a 150 |
| Instalação e ajuste | Instalação + ajuste de ganho feito com multímetro ou osciloscópio, não "de ouvido" | R$ 200 a 400 |
| **Total** | | **~R$ 1700 a 2900** |

Dá pra fechar dentro dos R$ 2500 escolhendo bem. Um sistema desse enche o Onix de grave com folga pra rap e eletrônica, e dentro de um carro pequeno é muito mais forte do que parece no papel.

### Selada ou dutada?

- **Selada**: grave mais seco, rápido e definido. Acompanha bem a batida de rap e o kick da eletrônica. Toca menos alto, mas é a escolha mais segura pra **não embolar**. É a que eu recomendo pro seu gosto.
- **Dutada sintonizada baixo (~32 a 35 Hz)**: mais pressão e volume, bom pro 808 grave do trap e pro sub-bass da eletrônica. Só que precisa de projeto certo pro sub escolhido. Caixa "genérica de loja" dutada é a campeã do grave embolado.

## Ajustes que fazem a diferença contra grave embolado

1. **Passa-baixa (LPF) em ~70 a 80 Hz** no módulo, pra o sub não tocar voz nem médio.
2. **Subsônico em ~25 a 30 Hz**, pra proteger o sub e limpar o grave, principalmente se a caixa for dutada.
3. **Bass boost no zero.** Se faltar grave, o problema é outro.
4. **Ganho ajustado com medição**, sem clipar. Ganho no talo não é volume, é distorção.
5. **Teste de fase**: inverta a fase (ou os fios do sub) e fique com a posição em que o grave soa mais cheio no banco do motorista.
6. Equalizador do rádio com grave neutro ou levemente abaixo, pra não mandar sinal já distorcido pro conversor.

## Se no futuro você quiser algo tipo 1500 W RMS ou mais

Aí sim precisa mexer na elétrica, e nessa ordem:
1. **Big 3**: reforçar os cabos alternador → bateria, bateria → chassi e motor → chassi.
2. **Alternador de maior amperagem** (ou recondicionado pra mais corrente).
3. **Bateria auxiliar** própria pra som (AGM, por exemplo), com isolador.

Isso tudo passa fácil de R$ 1500 a 3000 só na parte elétrica, antes de gastar com sub e módulo. Por isso não cabe no orçamento atual junto com os dois subs.

## Resumo

- **2 subs de 800 W + módulo de 3000 W na elétrica original: não recomendo.** A elétrica não sustenta, a bateria sofre, o módulo clipa e o risco de queimar sub e de ficar com grave embolado é alto.
- **1 sub de 12" de ~400 W RMS, módulo de ~500 W RMS reais, caixa selada bem dimensionada e instalação bem ajustada**: cabe nos R$ 2500, não exige modificar a elétrica do carro e entrega um grave forte, limpo e definido pra rap e eletrônica.
- Se depois quiser mais, primeiro faça a elétrica e só depois aumente a potência.
