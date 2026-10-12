## Resumo

Eu não iria de soundbar. Você disse que o uso principal é **música** (MPB, jazz, rock) e que filme é "de vez em quando". Com R$ 3.000, um **par estéreo de caixas de verdade** (2.0, que dá pra virar 2.1 depois) toca música bem melhor que uma soundbar do mesmo preço. Tem mais separação estéreo, palco, grave com corpo e menos distorção em volume alto. E pra filme ele continua muito bom: com duas caixas boas dos lados da TV, o diálogo fica claro e os efeitos ficam com peso.

Minha escolha: **caixas passivas de estante + receiver AV usado** (Denon/Yamaha/Onkyo/Pioneer de 5 a 10 anos). O motivo principal é o HDMI ARC: você liga na TV e o controle dela passa a comandar o volume. Tem também a calibração automática e um caminho de upgrade (subwoofer agora ou depois, e 5.1 um dia se quiser). Se você não quiser comprar usado nem ter um aparelho a mais, a segunda opção são **caixas ativas com entrada óptica e saída de sub**.

A soundbar só ganha em alguns casos: quando não há espaço pra duas caixas afastadas da TV, quando a estética manda (TV na parede, nada aparente), ou quando o uso real é 80% TV. Aí a soundbar vira a escolha certa.

### Os três caminhos lado a lado

| | Soundbar (3.1 + sub sem fio) | Receiver + caixas passivas | Caixas ativas |
|---|---|---|---|
| Música estéreo | Fraca/média: as caixinhas ficam juntas, o palco é estreito e o "estéreo" é simulado por processamento | **Melhor**: caixas afastadas de 2–3 m formam uma imagem estéreo real | Muito boa: mesma lógica do par estéreo |
| Filme / diálogo | **Boa**: tem canal central dedicado e liga pela HDMI eARC | Boa (2.0) a ótima (2.1/5.1) | Boa, com entrada óptica ou ARC |
| Grave | Sub incluso, mas geralmente "boomy" (grave inchado, pouco definido) | Caixa de estante desce até ~50–60 Hz; o sub pode entrar depois | Parecido; alguns modelos têm saída de sub |
| Upgrade | Quase nenhum: fica preso ao ecossistema da marca | **Total**: troca caixa, põe sub, vai pra 5.1 | Limitado (dá pra somar um sub) |
| Praticidade | **Máxima**: um cabo e um controle | Média: um aparelho a mais e cabos de caixa | Alta: não precisa de amplificador |
| Vida útil / conserto | Se a eletrônica queima, perde tudo | Caixa passiva dura décadas; o receiver é trocável | Se o amplificador interno queimar, a caixa fica "muda" |

## Premissas

- **Sala de ~20 m²** (algo como 4 × 5 m), sofá a **~3 m** das caixas, e a TV já existe e tem HDMI ARC. Se a TV só tiver saída óptica, as caixas ativas e o receiver funcionam do mesmo jeito, só que você perde o controle de volume pelo controle da TV.
- **R$ 3.000 é o teto total**, incluindo cabos e suportes.
- Vou tratar como **apartamento ou casa com vizinhos**. Isso pesa contra um sub grande tocando alto.
- Fonte de música: streaming (Spotify/Deezer etc.) pelo app da TV, pelo Bluetooth/rede do receiver ou pelo celular.
- Você topa comprar **usado** com teste. Se não topar, o caminho vira o das caixas ativas (Econômico abaixo) ou um amplificador integrado novo.

## Arquitetura (a que eu escolheria)

```
TV (HDMI ARC) ─┐
Celular/streaming (Bluetooth, rede ou um streamer barato) ─┤
               └─> Receiver AV usado (DSP + calibração + amplificação)
                        ├─> Caixa esquerda (passiva, estante, 6–8 Ω)
                        ├─> Caixa direita  (passiva, estante, 6–8 Ω)
                        └─> [depois] Sub ativo pela saída "SUB PRE OUT", corte em ~80 Hz
Elétrica: tomada comum com filtro de linha. Não precisa de nada especial nessa potência.
```

## Dimensionamento

**Quanta potência você precisa de verdade?** Contas feitas com a calculadora, a 3 m e em campo livre. Na sala real toca um pouco mais alto, porque as paredes refletem o som.

| Caixa (sensibilidade real) | Potência por canal | SPL com 2 caixas a 3 m |
|---|---|---|
| 86 dB/1W/1m | 10 W | ~89,5 dB |
| 86 dB/1W/1m | 50 W | ~96,5 dB |
| 87 dB/2,83V/1m em 6 Ω (= 85,7 dB/1W/1m) | 40 W | ~95 dB |

Como interpretar: ouvir música "alto" em casa dá uns 80–85 dB de média, com picos 10 dB acima. **Com 40–50 W reais por canal e caixas de ~86 dB você chega em ~95 dB**, o que já é volume alto de verdade numa sala de 20 m². Qualquer receiver AV decente entrega isso. Não pague a mais por potência. Pague por **caixa boa**, que é o que define o som.

Termos que aparecem nas contas:
- **Sensibilidade**: quanto a caixa toca com 1 W a 1 m. Cada +3 dB equivale a dobrar a potência do amplificador.
- **Sensibilidade em 2,83 V**: muitas marcas medem assim, o que numa caixa de 4–6 Ω "infla" o número. Por isso converti pra 1 W, que é a base comparável entre caixas.

**Impedância.** Prefira caixas de **6–8 Ω nominais**. Receivers de entrada esquentam e podem desarmar com caixas de 4 Ω em volume alto.

**Cabo de caixa.** Receiver a até ~5 m das caixas, com 6 Ω: a calculadora pede no mínimo 0,57 mm² (sugere 0,8 mm²). Use **cabo paralelo de cobre de 1,5 mm²**. É barato e sobra folga. Cabo "audiófilo" caro não traz diferença audível.

**Grave sem sub.** Uma caixa de estante com woofer de 5–6,5" desce até uns 50–60 Hz. Pra MPB e jazz isso resolve muito bem. Pra rock e filme um sub faz diferença, mas pode vir depois, e usado.

## Opções de orçamento

Valores estimados, sem pesquisa de preço atual. Confira antes de comprar.

| Item | Especificação que importa | Onde comprar | Econômico (ativas) | Equilibrado (**minha escolha**) | Caprichado (2.1 via usados) |
|---|---|---|---|---|---|
| Caixas | Ativas: entrada **óptica** + RCA + saída de sub (ex.: linha Edifier R1855DB ou equivalente; confira as entradas no manual). Passivas: estante, woofer 5–6,5", **6–8 Ω**, sensibilidade ≥ 86 dB/1W (ex.: Polk, JBL Stage, Wharfedale, Elac, Dali de entrada) | Loja nacional com nota (ML loja oficial, Amazon, Magalu); usado no OLX/ML com teste | R$ 1.300–1.900 | R$ 1.200–1.600 (novas) | R$ 1.000–1.400 (usadas, de modelo superior) |
| Amplificação | Receiver AV com **HDMI ARC**, calibração automática (Audyssey/YPAO/MCACC), saída de sub e ~50 W reais/canal (ex.: Denon AVR-X1x00, Yamaha RX-V4xx/5xx) | Usado: OLX, ML, grupos de Facebook | R$ 0 (vem na caixa) | R$ 900–1.300 | R$ 900–1.200 |
| Subwoofer | Ativo, 8–10", com crossover ajustável; selado é melhor em apartamento | Usado com teste, ou novo em loja nacional | — (fica pra depois) | — (fica pra depois) | R$ 600–900 |
| Cabos | Óptico ou HDMI (ativas); paralelo de cobre 1,5 mm² (passivas) | Qualquer loja | R$ 30–60 | R$ 40–80 | R$ 40–80 |
| Suportes / apoio | Tweeter na altura do ouvido, caixa firme. Pedestal, estante firme ou suporte DIY | Loja nacional ou DIY | R$ 0–150 | R$ 0–200 | R$ 0–200 |
| **Total** | | | **R$ 1.330–2.110** | **R$ 2.140–3.180** | **R$ 2.540–3.780** |

Notas:
- **Econômico** sobra de R$ 900 a R$ 1.700 do orçamento. Dá pra comprar um sub depois, se o modelo tiver saída de sub.
- **Equilibrado** fica dentro dos R$ 3.000 na maioria das combinações. O sub entra quando você juntar mais uns R$ 600–900.
- **Caprichado** passa do teto se você pagar o máximo em tudo. Com usados bem negociados, fica perto de R$ 3.000.
- **Soundbar de referência**, pra comparar: uma 3.1 com sub sem fio de marca conhecida sai por uns R$ 1.800–3.000. No mesmo dinheiro ela toca música pior que qualquer coluna acima.

## Onde economizar / onde não economizar

- **Não economize nas caixas.** São elas que definem 70% do som. Se o dinheiro apertar, prefira caixa melhor com receiver mais simples, nunca o contrário.
- **Economize no receiver.** Um usado de 5–10 anos amplifica igual a um novo. O que você perde são recursos (8K, Atmos, apps) que não importam pra esse uso.
- **Economize em cabos.** Cobre de 1,5 mm² e pronto.
- **Economize em tratamento de sala.** Tapete, cortina e estante cheia fazem mais que qualquer upgrade de R$ 500.
- **Evite** "home theater em caixa" genérico com potência PMPO (número de marketing, sem relação com a potência real) e soundbar barata com "1000 W".

## Riscos e cuidados

- **Receiver usado:** teste todas as saídas de caixa, a entrada HDMI ARC com uma TV e o rádio/Bluetooth. Conferir se liga sem estalo forte e se não desarma (entra em "protect") em volume médio. Prefira vendedor que deixe testar.
- **Caixa usada:** empurre o cone do woofer de leve com os dedos espalmados. Ele deve voltar sem raspar. Ouça em volume médio procurando chiado ou distorção. Olhe se a borda (suspensão) não está ressecada ou rachada.
- **Falsificação:** Edifier, JBL e Polk "baratas demais" em marketplace são um sinal de alerta. Compre em loja oficial ou revendedor com nota.
- **Posicionamento:** a sala pesa mais que o equipamento. Monte um triângulo equilátero (caixas a ~2–2,5 m uma da outra e do sofá), tweeters na altura do ouvido, caixas a 30–50 cm da parede de trás e levemente viradas pra você. Nada de caixa enfiada no canto ou dentro de nicho de rack, que deixa o grave embolado.
- **Sub em apartamento:** o grave atravessa laje e parede. Se vier sub, use um selado de 8–10" e rode a calibração. Não suba o nível dele "pra sentir no peito".
- **Audição:** acima de ~85 dB por horas seguidas cansa e machuca. Esse sistema chega lá fácil.

## Próximos passos

1. **Confirme três coisas:** se a TV tem HDMI ARC/eARC, se há espaço pra duas caixas afastadas uns 2 m, e se você topa usado. Se o espaço não existir, aí sim a gente olha soundbar a sério.
2. **Compre as caixas primeiro.** Se puder, ouça em loja ou na casa do vendedor, com música que você conhece bem (um jazz acústico e um rock bem gravado).
3. **Depois compre o receiver** com HDMI ARC e saída de sub. Ligue, ative o HDMI CEC na TV, configure as caixas como "Small" (pequenas) com crossover em 80 Hz se houver sub ("Large" se não houver) e **rode a calibração** com o microfone que vem com o receiver.
4. **Ouça por algumas semanas** e ajuste a posição. Só então decida se o sub faz falta.

Se quiser, na próxima eu monto uma lista de modelos específicos de caixas e receivers pra procurar (novos e usados) dentro dessa faixa, e salvo o projeto pra gente continuar dele.
