## Resumo

Vamos montar uma **caixa estéreo de 2 vias, dutada, com 2 woofers de 6" (4 Ω) + 2 tweeters**, uma placa **TPA3116 2.0 com Bluetooth integrado**, bateria de **lítio 18650 com BMS** (chumbo-ácido na versão mais barata) e gabinete de **compensado 15 mm** com compartimento separado para a eletrônica. Alvo: ~92 dB a 4 m ao ar livre, ~6 h de música, entre R$ 800 e R$ 1.400 na versão que eu escolheria.

Por que essa abordagem: a TPA3116 é a placa certa para bateria (aceita 12–24 V, eficiência alta, barata) e dois 6" dão um "corpo" que caixinha comercial não dá. Mas duas premissas do seu plano não fecham, e é melhor resolver isso antes de comprar qualquer coisa.

### Duas coisas que não fecham no plano original

**1. "Dois falantes + UM tweeter."** A TPA3116 é uma placa estéreo com saídas em ponte (BTL — *bridge-tied load*: os dois fios de cada canal são "vivos", não existe negativo comum). Um tweeter só, ligado "no meio", obrigaria a juntar os negativos de L e R — isso curto-circuita a saída e queima a placa. Suas opções reais:

- **(A) Estéreo 2 vias: 2 woofers + 2 tweeters**, cada canal com seu crossover independente. É o que recomendo — um tweeter custa R$ 15–50 e o problema desaparece.
- **(B) Mono com a placa em PBTL** (os dois canais somados em um só) e um tweeter. As placas com BT integrado são estéreo; PBTL exige placa específica, e os dois woofers em paralelo dariam 2 Ω (o limite do chip, com corrente alta). Complexidade sem ganho — descarto.
- **(C) Dois coaxiais 6" automotivos** (tweeter já embutido, com capacitor). É a versão "sem crossover para projetar": mais simples, mais barata, som mediano. Plano B se você quiser simplificar ao máximo.

Nota honesta: a 3–4 m ao ar livre ninguém percebe estéreo numa caixa de 60 cm. O estéreo aqui é consequência da placa, não objetivo. O ganho real dos 2 tweeters é a simetria elétrica.

**2. "2×50 W" da placa não são 2×50 W na bateria.** A potência de uma classe D em ponte é limitada pela tensão: P ≈ V² / (2 × Z). Os 50 W do anúncio são com fonte de 24 V, em 4 Ω, a 10% de distorção. Com bateria você tem:

| Bateria | Tensão nominal (cheia) | Teórico em 4 Ω | Uso limpo (60–70%) por canal |
|---|---|---|---|
| Chumbo 12 V ou 3S Li-ion | 12,4 / 11,1 V | 19 / 15 W | **~12 / ~10 W** |
| 4S Li-ion | 14,8 V (16,8 V) | 27 W | **~17–19 W** (21–25 W cheia) |
| 5S Li-ion | 18,5 V (21 V) | 43 W | **~26–30 W** (33–39 W cheia) |
| 6S Li-ion | 22,2 V (25,2 V) | 62 W | ~37–43 W — no limite do chip (máx. 26 V) e dos capacitores de 25 V que muitas placas trazem |

Em **8 Ω tudo isso cai pela metade** — por isso o projeto inteiro pede **woofers de 4 Ω**. Depois da bateria, é a escolha de componente que mais pesa.

## Premissas

- **Uso**: churrasco ao ar livre, de música de fundo a "animada", ouvintes a 3–5 m. Alvo ~90 dB a 4 m (faixa das caixas comerciais "de festa" pequenas).
- **Orçamento**: você não disse; assumi que "gastar pouco" é R$ 800–1.400 no total (coluna Equilibrado). Se for menos de R$ 600, veja a coluna Econômico e o plano C (coaxiais).
- **Autonomia**: 5–6 h de música antes de carregar.
- **Portabilidade**: alça, ~10 kg, vai no porta-malas. Não é caixa de mochila.
- **Woofer 6" 4 Ω**, sensibilidade ~89 dB/1W/1m, Fs 55–70 Hz, Qts 0,35–0,5, Vas 10–18 L, Xmax ≥ 3–4 mm, ≥ 40 W RMS — valores típicos de um bom mid-bass 6" nacional. **Se o seu tiver Qts > 0,6 ou não publicar T/S, a caixa vira selada** (explico no dimensionamento).
- Tweeter dome 4 Ω, ~90–92 dB, ≥ 20 W RMS.
- Você monta a eletrônica e sela a caixa; o corte da madeira é feito na loja.
- Preços: estimativas de memória, sem busca — confira antes de comprar.

## Arquitetura

```
Celular ──BT 5.0──► Placa TPA3116 2.0 + BT (ex.: linha Wuzhi ZK-502 ou similar)
                        │ volume (grave/agudo em alguns modelos)
                        ├─ Canal L ──► Crossover L: passa-baixa 3,5 kHz → woofer 6"
                        │                           passa-alta 3,5 kHz → tweeter
                        └─ Canal R ──► Crossover R (idem, totalmente separado do L)

Alimentação: Bateria ─► fusível (colado na bateria) ─► chave ─► placa
             4S2P 18650 (14,8 V / 5,2 Ah) + BMS 4S ◄── jack DC ◄── carregador 16,8 V 2 A
             (Econômico: chumbo VRLA 12 V 7 Ah | Caprichado: 5S3P + carregador 21 V)

Gabinete: compensado 15 mm, 60 × 26 × 26 cm externo
   [ câmara L 11,5 L dutada ] [ coluna 7 cm: placa + bateria ] [ câmara R 11,5 L dutada ]
```

Regras que essa arquitetura obedece:

- **Cada canal fecha em si mesmo**: woofer + tweeter + crossover do L nunca encostam no R, e nenhum negativo de falante vai para carcaça ou para o negativo da bateria (BTL).
- **Eletrônica e bateria fora do volume acústico**, numa coluna central vedada em relação às câmaras. Bateria dentro da caixa acústica pega vibração e pressão que não precisa; e cada furo de botão/jack numa câmara é um vazamento.
- **Câmara separada por woofer**: as divisórias também são o travamento interno da caixa.

## Dimensionamento

Contas feitas com `calc_som.py` (sensibilidade 89 dB, 4 m, duas vias somando energia).

**1. Volume e alcance**

| Configuração | Potência limpa/canal | SPL a 4 m (as duas) | SPL a 1 m, um lado |
|---|---|---|---|
| Chumbo 12 V | ~12 W | ~91 dB | ~100 dB |
| 4S Li-ion | ~18 W | **~92,5 dB** | ~101,5 dB |
| 5S Li-ion | ~28 W | ~94,5 dB | ~103,5 dB |
| Mesma coisa com woofer 8 Ω, 4S | ~9 W | ~89,5 dB | — |

Interpretação: 4S com woofer de 4 Ω já é "churrasco animado" (92 dB a 4 m é volume de festa — para conversar do lado tem que levantar a voz). Ir de 4S para 5S compra só +2 dB: perceptível, mas longe de "o dobro do volume" (isso seria +10 dB, 10× a potência). Trocar 4 Ω por 8 Ω joga 3 dB fora — não faça isso.

**2. Corrente, fusível e cabo**

- 4S, 2×18 W: corrente máxima contínua ~2,9 A; média com música 0,4–1,0 A. 5S: 3,6 A máx.
- Fusível de lâmina **5 A** logo na saída da bateria (7,5 A se for de 5S). Cabo de alimentação 1,0–1,5 mm² (a conta pede só 0,26 mm² para 0,2 V de queda em 0,6 m; a bitola maior é por robustez mecânica).
- Cabo de falante: 0,5 m em 4 Ω pede 0,09 mm² — qualquer 0,75–1,0 mm² sobra.

**3. Autonomia** (80% da capacidade; consumo médio já com o BT)

| Bateria | Capacidade | Consumo médio | Autonomia |
|---|---|---|---|
| Chumbo VRLA 12 V 7 Ah | 84 Wh | 8 W | ~8 h no papel; chumbo sofre com descarga funda — conte 5–6 h |
| 4S2P, 8× 18650 de 2.600 mAh | 5,2 Ah / 77 Wh | 10 W | **~6 h** (a 18 W médios, "alto o tempo todo": ~3,4 h) |
| 5S3P, 15× 18650 | 7,8 Ah / 144 Wh | 14 W | ~8 h |

Música consome em média 1/8 a 1/3 da potência máxima; 10 W médios é "alto o churrasco inteiro". Para mais autonomia, some células em paralelo (4S3P = 12 células, +50%), não em série.

**4. Caixa e duto** (por câmara; woofer hipotético com Fs 60 Hz / Qts 0,4 / Vas 15 L)

- Externo 60 × 26 × 26 cm em 15 mm → interno 57 × 23 × 23 = 30 L brutos. Coluna central de 7 cm (3,7 L) + 2 divisórias → cada câmara 23,5 × 23 × 23 = 12,4 L brutos; descontando falante, duto e travamento ≈ **11,5 L líquidos**.
- Sintonia alvo 52 Hz (um pouco abaixo do Fs): duto de **PVC 50 mm** (interno ~4,6 cm) com **12,7 cm** de comprimento. Velocidade de pico do ar ~10 m/s → OK (o limite é ~17 m/s; acima disso o duto "sopra"). Sintonia em 55 Hz: 11 cm.
- Se o woofer tiver **Qts > 0,6** (típico de mid-bass de porta de carro) ou não publicar T/S: **mesma câmara, sem duto, forrada com manta acrílica** (selada). Perde ~3 dB de grave perto de 50 Hz, ganha tolerância a erro e protege o cone em volume alto.
- **Simule no WinISD com os T/S reais antes de cortar.** O que muda é o comprimento do duto e talvez o volume — não a arquitetura.
- Peso: compensado 15 mm dá ~8,4 kg só de madeira (12 mm: ~6,7 kg); com falantes, bateria e ferragens, **10–12 kg**. Se pesar demais para você, 12 mm com travamento é aceitável nesse tamanho.

**5. Crossover passivo (por canal), 2ª ordem em 3,5 kHz**

O corte fica onde o 6" começa a "estreitar" (acima de ~3 kHz um cone de 16 cm direciona o som) e onde um tweeter dome barato ainda aguenta (não corte abaixo de 3 kHz com tweeter de R$ 20).

| Via | Butterworth (Q 0,707) — ponto de partida | Alternativa LR2 (Q 0,5) |
|---|---|---|
| Woofer 4 Ω: bobina em série + capacitor em paralelo | **L 0,27 mH + C 8,2 µF** | 0,36 mH + 5,6 µF |
| Tweeter 4 Ω: capacitor em série + bobina em paralelo | **C 8,2 µF + L 0,27 mH** | 5,6 µF + 0,36 mH |
| Tweeter 8 Ω (se for o caso) | C 3,9–4,7 µF + L 0,51 mH | 2,7 µF + 0,73 mH |

- Lista: 4 bobinas de núcleo de ar 0,27 mH e 4 capacitores de poliéster/polipropileno 8,2 µF ≥ 100 V (nunca eletrolítico).
- **Tweeter com polaridade invertida**: filtro de 2ª ordem gira 180° no corte; ligado "certo" aparece um buraco em 3,5 kHz. Teste as duas ligações de ouvido — a que soar mais cheia em voz é a certa.
- Se o tweeter ficar agressivo (é comum, ele tem 2–3 dB a mais que o woofer): L-pad de −3 dB = **1,2 Ω em série + 10 Ω em paralelo**, entre o filtro e o tweeter (resistores de 5 W). Ou só 1–1,5 Ω em série.
- Esses valores assumem a impedância nominal; a real do woofer sobe com a frequência, então o corte fica um pouco acima do calculado. Está bom para começar; refinar exige medir (REW + microfone) ou simular no VituixCAD/XSim com dados do falante.
- Tweeter o mais perto possível do woofer (a 3,5 kHz o comprimento de onda é ~10 cm; quanto mais longe, pior a integração).

## Opções de orçamento

Preços em R$, estimativa sem busca (setembro/2026) — confira antes de comprar. "Nacional" = Mercado Livre loja oficial/MercadoLíder, Amazon vendido pela Amazon, loja de som; "Ali/Shopee" = importado ou revendedor nacional do mesmo item.

| Item | Especificação que importa | Onde comprar | Econômico | Equilibrado | Caprichado |
|---|---|---|---|---|---|
| Placa amplificadora + Bluetooth | TPA3116D2 2.0, entrada 12–24 V, BT 5.0 (confira o chip nas fotos). Caprichado: placa TPA3116 + módulo BT QCC3034/QCC5125 (aptX) com alimentação isolada | Ali/Shopee | 45–70 (ZK-502C ou similar) | 55–85 (ZK-502L com grave/agudo ou similar) | 110–180 |
| Woofers 6" (par) | **4 Ω**, ≥ 40 W RMS, ≥ 88 dB, Fs 55–70 Hz, T/S publicado | Nacional | 120–200 (mid-bass automotivo de marca) | 180–320 (mid-bass 6" com datasheet — Bravox, JBL Selenium, Hinor, Triton etc.) | 400–700 (woofer 6"/6,5" Hi-Fi/PA com T/S completo) |
| Tweeters (par) | Dome 4 Ω, ≥ 20 W, ≥ 90 dB | Ali/Shopee ou Nacional | 25–50 | 50–100 | 120–220 |
| Crossover (2 unidades) | 4 bobinas 0,27 mH núcleo de ar + 4 capacitores 8,2 µF ≥ 100 V + resistores do L-pad | Ali/Shopee ou loja de eletrônica | 40–70 | 50–90 | 80–140 |
| Bateria | Econ.: chumbo VRLA 12 V 7 Ah. Equil.: 8× 18650 originais (Samsung/LG/Molicel, 2.500–3.000 mAh) em 4S2P. Capr.: 15× em 5S3P | Chumbo: nacional. 18650: vendedor nacional com reputação (fuja de "9.900 mAh") | 70–110 | 200–300 | 380–560 |
| BMS + carregador | Econ.: carregador automático 12 V. Equil.: BMS 4S ≥ 15 A com balanceamento + carregador 16,8 V 2 A. Capr.: BMS 5S + carregador 21 V 2–3 A | Ali/Shopee | 40–70 | 45–80 | 60–110 |
| Suportes de célula, fita de níquel, isolação | Suporte 18650 com terminal para solda (não solde na célula), fita de níquel, papel isolante | Ali/Shopee | 0 | 20–40 | 30–60 |
| Madeira cortada | Econ.: MDF 15 mm. Equil.: compensado 15 mm. Capr.: compensado naval 15 mm | Madeireira / home center com corte | 60–100 | 90–160 | 120–200 |
| Ferragens e acabamento | Cola PVA, silicone, parafusos, alça, pés de borracha, cantoneiras, tinta/verniz ou carpete, tela de proteção | Home center / Ali | 50–90 | 70–130 | 120–250 |
| Elétrica | Chave, porta-fusível + fusíveis 5 A, jack DC de carga, voltímetro de painel (opcional), cabo 1,5 mm², terminais | Ali/Shopee | 30–50 | 40–70 | 50–90 |
| Duto PVC 50 mm + manta acrílica | 30 cm de tubo; 1 m² de manta | Home center / loja de tecidos | 25–45 | 25–45 | 25–45 |
| **Total estimado** | | | **R$ 505–855** | **R$ 825–1.420** | **R$ 1.495–2.555** |

O que cada coluna entrega:

- **Econômico**: ~12 W/canal, 91 dB a 4 m, bateria de chumbo (2,3 kg), MDF (não pode molhar). Já toca mais que a maioria das caixinhas de R$ 500. Para cortar mais: plano C (2 coaxiais 6" 4 Ω, R$ 120–220 o par) elimina tweeters e crossover — total cai para ~R$ 450–650.
- **Equilibrado** (o que eu faria): ~18 W/canal, 92,5 dB a 4 m, ~6 h, lítio leve, compensado que aguenta chuva e cerveja. Custa o que uma caixa comercial "de festa" pequena custa, tocando mais alto e com mais grave.
- **Caprichado**: ~28 W/canal, 94,5 dB, 8 h, aptX, woofer com T/S de verdade (simulação confiável). Só vale se você quiser aprender a medir e refinar; para churrasco, a diferença para o Equilibrado é pequena.

## Onde economizar / onde não economizar

**Economize em:**
- Placa amplificadora e módulo BT — o genérico do Ali é o mesmo que os "de marca" usam.
- Componentes de crossover, conectores, chave, jack, tela.
- Acabamento: tinta PVA/verniz de assoalho ou carpete automotivo resolvem.
- Tweeter: um dome de R$ 20–40 cortado em 3,5 kHz cumpre.

**Não economize em:**
- **Células 18650**: "9.900 mAh" a R$ 8 é célula ruim com 800–1.200 mAh reais e risco de incêndio. Célula original de 2.500–3.000 mAh custa R$ 25–40 em vendedor com reputação. Se o orçamento não permite, vá de chumbo — não de célula falsa.
- **BMS e carregador correto** (16,8 V para 4S; 21 V para 5S). Carregar lítio com fonte "qualquer" ou sem BMS é onde caixa DIY pega fogo.
- **Woofers**: definem o som e a caixa. Nacional com nota, RMS realista (não "200 W" a R$ 40 o par) e de preferência com T/S.
- **Fusível e vedação**: custam R$ 10 e evitam os dois piores defeitos (curto e caixa "furada").
- **Compensado em vez de MDF** para caixa que vai para fora de casa: MDF incha com umidade e esfarela nos cantos; compensado aguenta pancada e respingo. Diferença de R$ 30–60.

## Riscos e cuidados

1. **BTL**: nenhum fio de falante encosta em terra, carcaça, negativo da bateria ou no outro canal. Crossover separado por canal. Tweeter compartilhado = placa queimada.
2. **Lítio**: BMS sempre; carregador com a tensão exata; fusível; células da mesma marca/lote/capacidade; não solde direto na célula (esquenta e degrada) — use suporte com terminal ou fita de níquel; isole o pack do calor da placa. Nas primeiras cargas, fique por perto.
3. **Tensão**: 4S/5S estão dentro do que qualquer placa TPA3116 aceita. **Não vá de 6S** sem confirmar capacitores ≥ 35 V — e mesmo assim é o limite do chip; durabilidade cai.
4. **Potência de anúncio**: "2×50 W" a 10% de distorção com 24 V. Na sua bateria são ~18 W limpos. Não tente "compensar" no volume: clipping em classe D é áspero e é o que mata tweeter barato.
5. **Bateria arriando**: conforme a tensão cai, o teto de potência cai junto (a 13 V no 4S você tem ~13 W). Distorção no fim da festa é sinal de carregar, não de defeito. Um voltímetro de painel (R$ 10) evita descarregar fundo, que é o que encurta a vida do pack.
6. **Vazamento**: caixa dutada com vazamento nas juntas ou nos furos de cabo perde grave e chia. Cola em todas as juntas, silicone por dentro, gaxeta de espuma nos falantes, passa-fio vedado entre a coluna e as câmaras.
7. **Duto pequeno ou mal-acabado**: 4,6 cm × 12,7 cm dá ~10 m/s — folga. Chanfre/arredonde as pontas. Se ouvir "sopro" em volume alto, é isso.
8. **Calor**: a TPA3116 esquenta pouco, mas a coluna central é fechada. Deixe o dissipador da placa respirar (dois furos de 10 mm com tela na parede traseira da coluna, longe das câmaras) e não abafe a placa em cima da bateria.
9. **Ruído do BT**: placas "tudo em um" às vezes chiam em volume baixo ou fazem tique-taque ao conectar. Tolerável em churrasco; se incomodar, a solução é módulo BT com alimentação separada (coluna Caprichado).
10. **Compra internacional**: prazo de semanas e o preço com impostos aparece no checkout — compare com o mesmo item em revendedor nacional na Shopee/ML (chega em dias, custa um pouco mais). Item com bateria às vezes não embarca — por isso as células, compre no Brasil.
11. **Audição**: 100 dB a 1 m é muito. Ninguém encostado na caixa por horas.

## Próximos passos

1. **Decida a coluna** (recomendo Equilibrado) e me diga se aceita 2 tweeters em vez de 1. Se quiser simplificar para coaxiais, também funciona — só me avise que eu ajusto o projeto.
2. **Compre os woofers primeiro** e me mande o datasheet (Fs, Qts, Vas, Xmax, Sd). Com isso fecho volume, sintonia e comprimento do duto de verdade (ou decido pela selada), e você só corta a madeira depois.
3. **Em paralelo, peça no Ali/Shopee** o que demora: placa, BMS, carregador, bobinas/capacitores, jack, chave, porta-fusível, tela. Células 18650: vendedor nacional com reputação.
4. **Corte da madeira na loja** com a planta final. Monte a seco, depois cola + parafuso, silicone por dentro, 24 h de cura, teste de vazamento (tampe o duto, empurre o cone: ele tem que voltar devagar, não na hora).
5. **Eletrônica na bancada antes de fechar**: monte o pack + BMS e meça a tensão de cada grupo (todos iguais, ±0,05 V); ligue a placa com o carregador/fonte e um falante; depois o crossover. Confira a polaridade do woofer com pilha de 1,5 V (+ no +, cone vai para frente).
6. **Regulagem**: celular a 100%, potenciômetro da placa subindo até a distorção começar, recua um pouco — marca com caneta; esse é seu "máximo". Teste o tweeter nas duas polaridades e o L-pad de ouvido. Depois, se quiser ir além: REW com um microfone barato e medir a resposta.

Salvei este rascunho de projeto, com o histórico de decisões, em `C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-3\old_skill\run-1\outputs\projetos\caixa-bluetooth-churrasco\projeto.md`. Quando você escolher a coluna e me passar o falante, atualizo a partir dele.
