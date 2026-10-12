Dá para montar, e a base da sua ideia (TPA3116 + 2×6" + tweeter, com bateria) é coerente para churrasco. Dois pontos da lista não fecham como estão e mudam a compra — trato deles nas premissas. Vou direto ao projeto; onde assumi algo, deixei explícito.

## Resumo

Uma caixa **estéreo de 2 vias** (em cada lado um woofer 6" + um tweeter, com crossover passivo), amplificada por uma placa TPA3116 2×50 W **com Bluetooth integrado**, alimentada por um pack Li-ion **5S** (21 V cheia) com BMS (placa de proteção que corta sobrecarga/subtensão e equilibra as células), tudo num gabinete de compensado com três compartimentos: câmara esquerda | eletrônica + bateria | câmara direita. É a arquitetura que usa a placa que você escolheu do jeito que ela foi feita (dois canais em ponte), fica dentro dos limites do chip com bateria e entrega ~92 dB a 5 m — sobra para churrasco. O que limita esse projeto não é potência, é grave: woofer de 6" desce até ~60–70 Hz com convicção, não faz "grave de sub". Ao ar livre isso é o normal e é suficiente.

## Premissas

- **Dois tweeters, não um.** A TPA3116 estéreo tem dois canais em ponte (BTL — os dois fios de cada saída são "vivos", nenhum é terra). Um tweeter só não pode ser ligado nos dois canais ao mesmo tempo: isso junta as saídas e queima a placa. Ou você compra um segundo tweeter (R$ 15–60) e cada canal vira uma 2 vias completa, ou faz tudo mono (placa em modo PBTL — os dois canais somados num só — com os dois woofers em paralelo e um tweeter). Assumi os dois tweeters: mais simples de comprar, a placa trabalha na zona segura e o crossover é um par igual. Numa caixa de 50 cm o estéreo em si vale pouco, mas a simetria simplifica tudo.
- **Woofers de 4 Ω.** Com bateria a tensão é curta; 4 Ω tira o dobro da potência de 8 Ω da mesma placa (conta abaixo). Se o modelo que você achar for 8 Ω, ainda funciona — com metade da potência.
- **Sensibilidade ~88 dB/1 W/1 m** (quantos dB o falante dá com 1 W a 1 m) para woofer e tweeter — típico de 6" nacional. Se o datasheet disser 90–91, melhor.
- **"Portátil" = caixa de alça, classe Partybox.** Com 2×6" dutada, compensado 15 mm e bateria, dá **11–13 kg** e ~52×33×25 cm (+2 kg se a bateria for chumbo-ácido). É o que vai do carro pro quintal, não o que vai na mochila. Se você quer leve de verdade (5–6 kg), o caminho é 2×4" ou 5" em ~15 L — redesenho se for o caso.
- **"Gastar pouco" = colunas Econômico/Equilibrado abaixo (R$ 530–1.820).** Vale ser honesto: com bateria Li-ion decente, o DIY de 2×6" não sai muito mais barato que uma caixa comercial média (JBL Xtreme ~R$ 1.500). O que você ganha é bem mais saída e grave, poder consertar e aprender. Onde o DIY vence de fato no preço é a coluna Econômico.
- Uso ao ar livre, ouvinte a 3–6 m, 3–5 h de festa, sem tomada por perto.

## Arquitetura

```
Celular ──BT 5.0──► Placa TPA3116D2 2×50 W com BT integrado (tipo ZK-502C/502L)
                        │ canal L (BTL)                    │ canal R (BTL)
                        ▼                                  ▼
               Crossover passivo L                Crossover passivo R
               (2ª ordem, 3 kHz)                  (2ª ordem, 3 kHz)
               ├─ woofer 6" 4 Ω                   ├─ woofer 6" 4 Ω
               └─ L-pad ─ tweeter 4 Ω             └─ L-pad ─ tweeter 4 Ω

Elétrica:  Pack 5S2P Li-ion (10×18650) ─ BMS 5S c/ balanceamento ─ fusível 10 A ─ chave ─ placa
           Jack DC 5,5×2,1 no painel ─► carregador 21 V 2 A (carrega através do BMS)
           Voltímetro digital no painel (para não descarregar além da conta)
```

**Gabinete:** três compartimentos — [câmara L ~11 L] [eletrônica + bateria] [câmara R ~11 L]. Câmaras separadas evitam que o cone de um lado empurre o outro; o compartimento central isola a eletrônica da pressão e da vibração. Tweeter acima do woofer em cada lado, dutos no painel traseiro.

**Tipo de caixa — decidido pelo datasheet do woofer, não por gosto.** Os parâmetros T/S (Thiele/Small — os números que descrevem como o falante se comporta: Fs = frequência de ressonância, Qts = amortecimento, Vas = "tamanho" da suspensão em litros, Xmax = quanto o cone anda sem distorcer) são o que define isso:
- **Plano A — dutada** (~11 L líquidos por canal, sintonia 55 Hz): se o woofer tiver Qts entre ~0,35 e 0,5 e Fs ≤ ~65 Hz. Dá mais grave por watt (o duto reforça 50–80 Hz) e é o que compensa ao ar livre, onde não há parede ajudando.
- **Plano B — selada** (~8 L por canal): se Qts > 0,5, Fs > 70 Hz ou sem datasheet. Mais simples e tolerante a erro, mas o grave começa mais alto (~90 Hz).
- Muita coisa vendida como "6 polegadas" no Brasil é mid-bass de porta de carro (Fs 80–100 Hz, Qts alto): toca alto, mas em caixa pequena não faz grave. Procure a palavra **woofer** e T/S publicado.

> **Vale saber — Qts e EBP:** Qts baixo (0,3–0,4) gosta de duto; alto (> 0,6) quer caixa grande ou aberta. O atalho é EBP = Fs/Qes: < 50 → selada; 50–100 → tanto faz; > 100 → dutada. É isso que decide se o seu 6" vai fazer grave em 11 L ou só "bater".

## Dimensionamento

**Potência real da placa com bateria** (saída em ponte: teto ≈ V²/(2×Z); uso limpo ~65% disso):

| Bateria | Tensão cheia → vazia | Teto em 4 Ω | Limpo por canal |
|---|---|---|---|
| 4S Li-ion | 16,8 → 13,2 V | 35 → 22 W | ~23 → 14 W |
| **5S Li-ion** | **21,0 → 16,5 V** | **55 → 34 W** | **~36 → 22 W** |
| 6S Li-ion | 25,2 → 19,8 V | 79 → 49 W | ~52 → 32 W |
| Chumbo-ácido 12 V | 12,6 → 11,8 V | 20 → 17 W | ~13 → 11 W |

Os "2×50 W" do anúncio só existem com 24 V e distorção alta. **5S** é o meio-termo: ~28–30 W limpos por canal na média da descarga, e nunca passa dos 26 V máximos da TPA3116. 6S dá mais, mas 25,2 V está no limite do chip e muitas placas vêm com capacitores de entrada de 25 V — só se você confirmar 35 V na foto do anúncio.

**Volume que isso produz** (88 dB, dois lados somados, campo livre):
- 30 W/canal: ~106 dB a 1 m, **~92 dB a 5 m**.
- 18 W/canal (4S): ~90 dB a 5 m. 12 W/canal (chumbo 12 V): ~88 dB a 5 m.
- Referência: conversa animada ~65 dB; festa ~85–90 dB. Sobra em todas as opções; a diferença entre elas aparece no grave, que é onde a potência acaba primeiro.

**Corrente e proteção:** 66 W de saída em 18,5 V com 85% de eficiência → **4,2 A** de pico (4,7 A com o pack no fim). Com música, média de 0,5–1,6 A. Fusível de lâmina **10 A** junto ao positivo da bateria; fio de 1,5 mm² sobra. BMS de 20 A ou mais.

**Autonomia** (5S2P com células de 2.500 mAh reais = 5 Ah, ~92 Wh):
- Volume moderado (~12 W médios): **~6 h**. Volume alto (~25 W médios): **~3 h**.
- 5S1P (5 células): metade. 5S3P: 1,5×. Chumbo 12 V 7 Ah: ~4 h em volume moderado — e só aguenta descarregar até a metade sem encurtar a vida.

**Caixa dutada (Plano A), por canal:** 11 L líquidos, sintonia 55 Hz, tubo de PVC esgoto **50 mm** (interno 4,68 cm — o duto se calcula pelo interno; meça com paquímetro): **duto de 12 cm**. Velocidade de ar estimada 10 m/s → sem sopro. PVC 40 mm daria 7 cm mas beira o limite de ruído (16 m/s); 75 mm pediria 31 cm e não cabe. Sintonia 60 Hz → 9,6 cm. Esses números são o **ponto de partida** para o WinISD com o T/S real do seu woofer; volume e sintonia mudam com o falante.

**Medidas sugeridas (compensado 15 mm):**
- Interno de cada câmara: 18 (L) × 30 (A) × 22 (P) cm = 11,9 L bruto → ~11 L líquidos depois de descontar falante, duto e travamento.
- Compartimento central: 10 × 30 × 22 cm — cabe placa, pack de 10 células e fiação com folga.
- Externo: **52 × 33 × 25 cm**. Peso: madeira 7–9 kg + falantes ~2,5 kg + bateria 0,5 kg + ferragens ~1 kg ≈ **11–13 kg**.
- Lista de corte: frente 52×33 · fundo em 3 peças (2× 20,25×33 coladas + **1× 11,5×33 parafusada** — é a tampa de acesso à eletrônica, com placa, chave, jack e voltímetro montados nela, apoiada em ripas internas para os parafusos e vedada com fita de EVA) · tampa e base 2× 49×22 · laterais 2× 33×22 · divisórias 2× 30×22 · uma ripa ou cavilha ligando frente e fundo em cada câmara (travamento).
- Woofer no centro do painel frontal a ~10 cm da base (furo pelo datasheet, ~14–15 cm em 6"), tweeter ~8 cm acima; duto no painel traseiro, com a ponta interna a ≥ 5 cm de qualquer parede (12 cm de duto em 22 cm de profundidade deixa 10 cm até a frente, ok).
- Plano B (selada): câmaras 16×26×20 cm (8,3 L) → externo ~48×29×23 cm, ~1,5 kg mais leve, sem duto.

**Crossover 2ª ordem, 3 kHz, 4 Ω (tipo Linkwitz-Riley, que soma plano no corte), por canal:**
- Woofer: indutor em série **0,42 mH** (comercial 0,43 ou 0,47) + capacitor em paralelo **6,8 µF**.
- Tweeter: capacitor em série **6,8 µF** + indutor em paralelo **0,42 mH**, **ligado com a polaridade invertida** (filtro de 2ª ordem defasa 180° no corte; sem inverter aparece um buraco nos 3 kHz).
- Capacitores de poliéster ou polipropileno (não eletrolítico), indutores com núcleo de ar. Total: 4 indutores + 4 capacitores.
- **L-pad (atenuador resistivo) no tweeter**, se ele for mais sensível que o woofer (é comum): −3 dB em 4 Ω = **1,2 Ω em série + 10 Ω em paralelo** com o tweeter (resistores de fio de 10 W); −6 dB = 2,0 Ω + 4 Ω. Monte primeiro sem; se o agudo "furar", adicione.
- Versão Econômico (1ª ordem): só um capacitor de **10 µF** em série com o tweeter (corte ~4 kHz), woofer direto, ambos com polaridade normal. Protege menos o tweeter e deixa o woofer tocar até onde consegue; em 12–20 W/canal com tweeter de 20 W é aceitável.

> **Vale saber — por que cortar em ~3 kHz:** um cone de 6" (~13 cm efetivos) começa a "afunilar" o som (beaming) quando o comprimento de onda fica menor que o cone: 343/0,13 ≈ 2,6 kHz. Acima disso ele só toca bem para quem está bem na frente. E o tweeter precisa cortar pelo menos 1,5–2× acima da Fs dele (domes baratos: 1,2–2 kHz). Os dois limites se encontram em 2,5–3,5 kHz — por isso 3 kHz, e não "o mais baixo possível".

**Cabo de falante:** trechos de < 1 m dentro da caixa — 0,8–1,5 mm² é mais que suficiente (a conta pede 0,09 mm²).

## Opções de orçamento

Estimativas de set/2026 sem pesquisa de preço — confira antes de comprar. No AliExpress, considere o preço final com impostos mostrado no checkout; prazo de 3–6 semanas.

| Item | Especificação que importa | Onde comprar | Econômico | Equilibrado | Caprichado |
|---|---|---|---|---|---|
| 2× woofer 6" | 4 Ω, 40–100 W RMS, ≥ 88 dB, **T/S publicado** (Fs, Qts, Vas, Xmax) | Nacional com nota (ML loja oficial / Amazon / loja de som) | Mid-bass 6" nacional simples — R$ 120–180 | Woofer 6" nacional com datasheet (ex.: JBL Selenium 6W4P — confira se é 4 ou 8 Ω e os T/S), Xmax ≥ 3 mm — R$ 240–360 | Woofer 6"/6,5" com Fs ≤ 60 Hz e Xmax ≥ 4 mm (nacional top ou importado tipo Dayton/HiVi) — R$ 400–600 |
| 2× tweeter | Dome de seda 25 mm, 4 Ω, 15–30 W, Fs ≤ 2 kHz, ~88–92 dB | AliExpress / Shopee | Dome de seda genérico — R$ 30–50 | Dome de seda com face plate e spec publicada — R$ 70–120 | Dome de seda de marca (HiVi / Peerless e similares) — R$ 160–300 |
| 2× crossover | Valores acima; poliéster/polipropileno, núcleo de ar | AliExpress / Shopee ou loja de componentes | 1ª ordem: 2× cap 10 µF + L-pad — R$ 15–30 | LR2 3 kHz: 4 indutores 0,43 mH + 4 caps 6,8 µF + L-pad — R$ 60–120 | Idem com polipropileno e indutor de fio grosso — R$ 120–200 |
| Placa amp + BT | **TPA3116D2** 2×50 W, BT 5.0 integrado, entrada 12–24 V, volume/grave/agudo; caps de entrada ≥ 35 V se for usar 6S | AliExpress (Econ.) / ML nacional (Equil.: chega rápido e devolve) | Tipo ZK-502C/502L — R$ 45–80 | Mesma placa, vendedor nacional — R$ 80–130 | TPA3116 + módulo BT separado com QCC3034 (aptX, menos chiado) — R$ 120–200 |
| Bateria + carregador | Li-ion **sempre com BMS com balanceamento**; células de capacidade real (2.500–3.000 mAh); carregador CC/CV da tensão do pack | Pack: loja nacional que monta com solda a ponto, ou células com abas; carregador: ML | Chumbo-ácido 12 V 7 Ah + carregador 12 V 1–2 A — R$ 130–200 (+2,2 kg, metade da potência) | **5S2P** 18650 (10 cél.) + BMS 5S 20–25 A + carregador 21 V 2 A — R$ 290–480 | 6S2P ou 5S3P com células Samsung/LG/Molicel legítimas + BMS 30 A + carregador 3 A — R$ 450–700 |
| Elétrica | Chave gangorra ≥ 10 A, porta-fusível de lâmina + fusível 10 A, jack DC 5,5×2,1, voltímetro digital, fio 1,5 mm², terminais | AliExpress / Shopee | R$ 40–70 | + voltímetro — R$ 60–100 | + step-down 5 V com USB para carregar celular, conectores GX16 — R$ 100–160 |
| Madeira | ~1 m² de chapa 15 mm, cortada na madeireira pela lista acima | Madeireira local | MDF 15 mm (selar bem) — R$ 60–110 | **Compensado 15 mm** — R$ 120–200 | Compensado naval 15 mm — R$ 200–300 |
| Cola, vedação, acabamento | Cola PVA + silicone nas juntas, parafusos, manta acústica, tinta | Casa de construção | Látex/esmalte — R$ 40–70 | Tinta PU ou textura, manta — R$ 80–140 | Carpete/textura + primer — R$ 150–250 |
| Ferragens | Alça, cantoneiras, pés de borracha, grades para 6" | ML ("ferragens caixa de som") | Alça + pés + cantoneiras plásticas — R$ 40–80 | + grades de proteção — R$ 80–150 | Grades metálicas, cantoneiras metálicas, alça dupla — R$ 150–250 |
| Duto | Tubo PVC esgoto 50 mm, 1 m (sobra) | Casa de construção | R$ 10–20 | R$ 10–20 | R$ 10–20 |
| **Total** | | | **R$ 530–890** | **R$ 1.090–1.820** | **R$ 1.860–2.980** |

Minha escolha: **Equilibrado**, com duas economias — placa do AliExpress em vez de nacional (−R$ 40) e ferragens da coluna Econômico (grade dá para fazer com tela metálica e moldura). Fica em ~R$ 1.000–1.600. A coluna Caprichado só faz sentido se você já sabe que vai querer mais grave e mais horas — e nesse caso o pulo mais barato é 5S3P (mais autonomia), não falante mais caro.

## Onde economizar / onde não economizar

**Pode economizar:**
- Placa, tweeters, crossover, conectores, chave: componente genérico do AliExpress não tem marca a falsificar; o risco é só de chegar morto, e a disputa na plataforma resolve.
- Acabamento: látex bem aplicado dura; carpete é estética.
- Grades: tela metálica de jardim + moldura de madeira sai por R$ 20.

**Não economize:**
- **Células de bateria e BMS.** Célula "9.800 mAh" a R$ 10 tem 1.000–1.500 mAh reais e envelhece em meses; BMS de R$ 8 sem balanceamento deixa as células desigualarem e morrer. Se for economizar na bateria, a saída honesta é chumbo-ácido, não Li-ion ruim.
- **Woofers.** São o som — e sem T/S publicado não há como projetar a caixa, vira chute.
- **Fusível e chave dimensionados.** R$ 10 que separam um curto de um incêndio.
- **Madeira e vedação.** Caixa vazando ou vibrando anula o resto.

## Riscos e cuidados

- **Saídas em ponte (BTL).** Jamais ligue o negativo de um falante ao negativo da bateria/chassi, e nunca junte os negativos dos canais L e R (nem num crossover "compartilhado"). Cada canal tem seu crossover completo e separado. É a forma nº 1 de queimar TPA3116.
- **Li-ion.** Não solde direto no corpo da célula 18650 com ferro (o calor danifica a célula): use células com abas já soldadas ou pack montado com solda a ponto. BMS com balanceamento sempre. Carregador CC/CV (corrente constante / tensão constante) certo para o pack: 5S = 21,0 V. Não deixe a caixa ao sol dentro do carro nem encostada na churrasqueira — acima de ~45 °C a bateria envelhece rápido. O BMS só corta em ~2,5–2,8 V por célula, tarde demais para durar: use o voltímetro e recarregue quando marcar **~17 V** (5S); guarde com ~19 V, nunca vazia.
- **Umidade.** MDF incha com cerveja, chuva e orvalho — por isso compensado. Se for MDF, selador em todas as faces + tinta. Pés de borracha para não ficar no chão molhado.
- **Grave no talo.** Caixa dutada abaixo da sintonia deixa o cone solto; com o controle de grave da placa no máximo em 30 W um 6" pode bater. Deixe o grave da placa no centro e ajuste no celular. Se quiser blindagem, um passa-alta simples na entrada resolve — detalho se precisar.
- **Falsificação e potência de mentira.** "500 W PMPO" não é nada; falante de 6" honesto tem 40–100 W RMS. Placa "2×100 W TPA3116" é a mesma placa de 2×50.
- **Pop e chiado** ao ligar/desligar: normal em placa barata; ligar a placa antes de subir o volume no celular resolve o pop.
- **Polaridade.** Confira cada woofer com pilha de 1,5 V (+ no +, o cone vai para a frente) e monte o tweeter invertido só se usar o crossover de 2ª ordem.
- **Audição.** 106 dB a 1 m é acima do seguro para exposição longa; a caixa é para ouvir a 3–6 m.

## Próximos passos

1. **Escolha o woofer pelo datasheet** (Fs, Qts, Vas, Xmax, sensibilidade, diâmetro de furo) e me mande os números — decido com você Plano A ou B e refino volume, sintonia e duto. Baixe o **WinISD** (grátis) e rode o modelo: o alvo é resposta plana até a sintonia e excursão dentro do Xmax em 30 W.
2. **Compre primeiro o que vem do AliExpress** (placa, tweeters, capacitores, indutores, BMS, chave, jack, voltímetro, fusível): é o gargalo de prazo. Woofers e carregador na sequência, no nacional.
3. **Bancada antes da madeira.** Com tudo em mãos, monte a elétrica em cima da mesa: pack + BMS + fusível + chave + placa + crossovers + falantes soltos. Confira tensões com multímetro, pareie o Bluetooth, toque baixinho. Erro aqui custa R$ 50; dentro da caixa colada custa uma tarde.
4. **Madeireira** com a lista de corte; monte com cola PVA + parafusos, silicone em todas as juntas internas, travamento, manta nas paredes (nunca no duto). Tampa traseira do compartimento central parafusada sobre ripas, com fita de vedação em EVA.
5. **Ouça e ajuste:** L-pad no tweeter se o agudo incomodar; teste as duas polaridades do tweeter e fique com a que soa mais cheia nos 3 kHz. Um app de medição no celular (REW no PC é melhor) já mostra um buraco grosseiro no crossover.
6. Rotina que faz durar: recarregar em ~17 V, guardar em ~19 V, longe do sol e da grelha.

Salvei o rascunho do projeto (dimensionamento acima + histórico de decisões e pendências) em `C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-3\with_skill\run-1\outputs\projetos\caixa-churrasco\projeto.md` — quando você definir o woofer, continuo dali.

📝 Anotei no seu perfil (`C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-3\with_skill\run-1\outputs\perfil.md`): primeira caixa, sabe soldar, compra no AliExpress, prioriza custo baixo e durabilidade, projeto caixa-churrasco em andamento.

Duas perguntas que mudam o projeto (o resto assumi): (1) qual woofer você tem em vista — ou quer que eu sugira por spec? (2) 11–13 kg está ok como "portátil", ou prefere que eu redesenhe para ~6 kg com falantes de 4–5"?
