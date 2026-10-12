Bora montar! A sua ideia faz sentido para uma primeira caixa: a TPA3116 é barata e, com a tensão certa, tem potência de sobra para um churrasco. Antes de fechar, dois ajustes que mudam o resultado:

1. **Um tweeter só não fecha com uma placa estéreo.** A TPA3116 tem 2 canais. Ou você põe **2 tweeters** (um por canal), ou soma tudo em mono. Recomendo 2 tweeters: custa pouco a mais, espalha melhor o agudo no quintal e deixa a ligação simples.
2. **A bateria é quem define a potência da TPA3116**, não o anúncio da placa. Com bateria de 12 V ela entrega uns 15–18 W por canal. Com **6S (22,2 V)** entrega uns 40 W por canal. É isso que separa uma caixa "boa" de uma "ok".

## Resumo

Uma caixa **2 vias estéreo, dutada, com cerca de 20 L**: 2 woofers de 6–6,5" + 2 tweeters de domo, **placa TPA3116 com Bluetooth integrado**, **bateria Li-ion 6S com BMS** e crossover passivo simples. Deve dar uns 90–95 dB a 4 m, com grave até uns 55–60 Hz e de 5 a 9 h de autonomia, dependendo da bateria. Para churrasco de 10–30 pessoas ao ar livre, dá e sobra.

## Premissas (o que muda se não for assim)

- **Uso:** música ambiente a volume moderadamente alto ao ar livre, estilos variados (sertanejo, pagode, pop). Se você quer "paredão" com grave de sentir no peito, o projeto é outro (sub de 10–12" e placa TPA3255).
- **Transporte:** uma pessoa carregando, de 10 a 13 kg. Se precisa ser leve, dá para reduzir para 1 woofer + 1 tweeter.
- **Orçamento:** "gastar pouco" que eu li como R$ 600–1.200 no total. Os valores são **estimativas** e precisam ser conferidos no dia da compra.
- **Nível:** você sabe soldar mas nunca fez caixa. Por isso escolhi crossover passivo em vez de DSP, e sugiro comprar a bateria pronta ou montar com cuidado extra (explico abaixo).

## Arquitetura

```
Celular ──BT──> [Placa TPA3116D2 + Bluetooth (tudo em uma)]
                    │ Canal E                 │ Canal D
              [Crossover 2 vias]        [Crossover 2 vias]
               │           │              │           │
          Woofer 6" 4Ω  Tweeter 4Ω   Woofer 6" 4Ω  Tweeter 4Ω
               └──────── gabinete dutado ~20 L líquidos ────────┘

Alimentação:
[Bateria 6S Li-ion + BMS 6S] → [Fusível 5 A] → [Chave liga/desliga] → Placa
      ↑
[Carregador 25,2 V (CC/CV) via conector DC/XT60] + voltímetro/indicador de carga
```

**Por que placa "tudo em uma" (BT + amp na mesma placa):** placa Bluetooth separada alimentada pela mesma bateria que o amplificador é a causa nº 1 de chiado e "zumbido de celular" em caixa DIY (loop de terra). A integrada evita isso e ainda economiza fiação. Procure anúncios cujas fotos mostrem o chip **TPA3116D2** e Bluetooth 5.0 ou mais novo (placas das séries ZK-502 e XY-P50 costumam usar esse chip, mas confira nas fotos, porque as versões mudam).

## Dimensionamento

### Potência x bateria (a conta que decide tudo)

A TPA3116 trabalha em ponte (BTL). O teto teórico por canal é P ≈ V² / (2 × Z):

| Bateria | Tensão (nominal) | Teto teórico em 4 Ω | Uso limpo real (~65%) |
|---|---|---|---|
| 3S (11,1 V) | 11,1 V | ~15 W | ~10 W/canal (fraco) |
| 4S (14,8 V) | 14,8 V | ~27 W | ~18 W/canal |
| **6S (22,2 V)** | 22,2 V (25,2 V cheia / ~19,8 V vazia) | ~62 W | **~40 W/canal** |

**Escolha: 6S.** Ela dá mais que o dobro da potência da 4S sem step-up. O conversor step-up é mais uma peça para esquentar, gerar ruído e quebrar.

**Atenção importante:** carregada, a 6S fica em **25,2 V**, perto do limite recomendado do chip (26 V). Muitas placas TPA3116 baratas vêm com **capacitores de filtro de 25 V**, que ficam no limite e estufam com o tempo. **Olhe os capacitores grandes da entrada de alimentação:** precisam ser de **35 V** ou mais. Se forem de 25 V, troque (é uma soldagem fácil e custa poucos reais) ou escolha outra placa.

### Volume sonoro (SPL)

Considerando woofers de 88 dB/1W/1m (valor típico de um 6" decente):

- 40 W num canal a 1 m → **~104 dB** (volume de pico)
- A caixa toda (~80 W) a 4 m, ao ar livre → **~95 dB**
- Com bateria 4S (~36 W no total) a 4 m → ~91,5 dB

Uns 3–4 dB a mais parecem pouco, mas é a diferença entre a música aparecer por cima da conversa ou ficar abafada por ela. Ao ar livre não tem parede refletindo o som, então cada dB conta.

### Caixa (gabinete)

- **Tipo: dutada.** Para 6" em caixa compacta, a dutada tira bem mais grave da mesma potência que a selada. Em bateria, isso é eficiência.
- **Volume líquido: ~20 L** no total (~10 L por woofer, com os dois dividindo o mesmo volume, já que tocam na mesma faixa).
- **Sintonia (Fb, a frequência em que o duto "reforça" o grave): ~55 Hz.**
- **Dutos (pela calculadora):**
  - **2 dutos de 5 cm de diâmetro interno × 15,8 cm** de comprimento, ou **1 duto de 7 cm × 14 cm**. A velocidade do ar fica em ~9 m/s, abaixo do limite de ~17 m/s em que o duto começa a fazer ruído de sopro.
  - **1 duto de 5 cm só não serve:** o ar passaria a ~18 m/s e o duto faria ruído de sopro no volume alto.
  - Deixe pelo menos um diâmetro de duto livre entre a ponta interna e a parede do fundo.
- **Dimensões de exemplo:** 55 × 30 × 22 cm externos em chapa de 15 mm dá ~26 L internos brutos. Descontando woofers (~1,5 L), dutos (~0,6 L), compartimento da bateria e placa (~2 L) e travamentos, sobram ~21–22 L líquidos. Está no alvo.
- **Critério para escolher o woofer** (vale mais que a marca). Parâmetros T/S são os números que o fabricante publica para dimensionar a caixa:
  - **4 Ω**, sensibilidade **≥ 88 dB**
  - **Fs 45–65 Hz**. Fs é a frequência de ressonância do falante.
  - **Qts 0,30–0,45**. Qts é o quanto o falante é amortecido. Nessa faixa ele gosta de caixa dutada.
  - **Vas ≤ 15 L**. Vas indica o tamanho de caixa que o falante "pede". Com esse valor, ~10 L por falante funciona.
  - **Xmax ≥ 4 mm** (excursão linear do cone)
  - Resposta limpa até pelo menos ~4 kHz

  **Cuidado com mid-bass automotivo de 6" "genérico"**: muitos são feitos para porta de carro (Qts alto ou sem T/S publicado) e ficam sem grave numa caixa pequena. Prefira modelos com T/S publicado (Selenium/JBL, Bravox, Eros, Hinor e outras marcas nacionais costumam publicar) e **simule no WinISD** (grátis) antes de cortar a madeira. Se a simulação pedir outro volume ou sintonia, ajuste as medidas. Os números acima são o ponto de partida.

### Crossover passivo (por canal)

Um Linkwitz-Riley de 2ª ordem (12 dB/oitava) em **~3 kHz**, calculado para 4 Ω:

- **Woofer:** indutor de **0,39–0,47 mH** em série (núcleo de ar ou de ferrite com fio grosso, 1,0 mm ou mais), com capacitor de **~6,8 µF** para o terra, em paralelo com o woofer.
- **Tweeter:** capacitor de **6,8 µF** (poliéster/polipropileno, 100 V ou mais) em série, com indutor de **~0,42 mH** em paralelo com o tweeter. **Ligue o tweeter com polaridade invertida**, o que é normal nessa topologia.
- **L-pad para o tweeter** (ele costuma ser 3–5 dB mais alto que o woofer): para −4 dB em 4 Ω, resistor de **1,5 Ω em série + 6,8 Ω em paralelo** com o tweeter, de 5 W ou mais. Coloque entre o filtro e o tweeter.
- **Tweeter:** domo de 1" (seda ou titânio), **4 Ω, Fs ≤ 1.500 Hz**. Com Fs baixo, dá para cruzar em 3 kHz com folga. Evite piezo: é barato e não precisa de crossover, mas é estridente e cansa em churrasco longo.

Esses valores partem da impedância **nominal**. O falante real varia, então é um bom começo, não o ponto ótimo. Se quiser refinar depois, dá para medir com o REW + um microfone de medição e acertar no VituixCAD. Alternativa preguiçosa: um divisor 2 vias pronto de 12 dB/oitava para 4 Ω. Funciona, mas você não controla o nível do tweeter.

### Autonomia

Na média, música consome 1/8 a 1/3 da potência máxima:

| Bateria | Energia | Volume médio (~12 W) | Volume alto (~25 W) |
|---|---|---|---|
| 6S1P (6 células de 3.000 mAh) | ~67 Wh | ~4,4 h | ~2 h |
| **6S2P (12 células)** | ~133 Wh | **~8,9 h** | ~4,3 h |
| 6S3P (18 células) | ~200 Wh | ~13 h | ~6,5 h |

A **6S2P** é o ponto doce: dá um churrasco inteiro com folga sem pesar muito (~600 g de células).

## Opções de orçamento

Estimativas em R$, sem garantia de preço. Confira o valor final com impostos no checkout do AliExpress.

| Item | Especificação que importa | Econômico | Equilibrado | Caprichado |
|---|---|---|---|---|
| Placa amp + BT | TPA3116D2, BT 5.0+, capacitores de entrada de 35 V+ | 50–80 | 50–80 | 150–300 (BT + DSP com EQ por app) |
| 2 woofers 6–6,5" | 4 Ω, ≥ 88 dB, Qts 0,3–0,45, T/S publicado | 150–220 | 250–400 | 450–700 |
| 2 tweeters domo 1" | 4 Ω, Fs ≤ 1,5 kHz | 50–80 | 80–150 | 150–300 |
| Crossover (componentes) | Capacitores de poliéster/PP, indutores de fio grosso, L-pad | 40–60 | 60–100 | 100–180 (polipropileno, núcleo de ar) |
| Células 18650 | Originais de marca (Samsung, LG, Molicel), **nunca "9.900 mAh"** | 6S1P: 110–180 | 6S2P: 220–360 | 6S3P: 330–540 |
| BMS 6S + carregador 25,2 V + indicador | BMS com balanceamento, 10–15 A | 70–120 | 90–140 | 120–180 |
| Madeira, dutos, cola, tela, alça, pés, acabamento | Compensado de 15 mm, tela metálica, alça parafusada com porca-garra | 120–180 | 180–260 | 250–400 |
| Fusível, chave, conectores, cabos | Fusível de 5 A, conector XT60/DC, cabo 1,5 mm² | 25–40 | 30–50 | 40–60 |
| **Total estimado** | | **~R$ 615–960** | **~R$ 960–1.540** | **~R$ 1.560–2.660** |

- **Econômico:** soa bem, mas a autonomia fica curta (~4 h) e os woofers de entrada vão dar menos grave.
- **Equilibrado:** é o que eu faria. Você gasta onde o som e a durabilidade aparecem.
- **Caprichado:** só vale se você quiser brincar de equalização. Um DSP deixa corrigir o grave e o nível do tweeter por software, sem trocar peça.

## Onde economizar / onde não economizar

**Economize:**
- **Placa:** a TPA3116 genérica é boa. Placa "de marca" nessa faixa não entrega mais.
- **Cabos e conectores "premium"** não fazem diferença aqui.
- **Acabamento:** tinta ou verniz bem aplicados resolvem. Não precisa de revestimento caro.

**Não economize:**
- **Woofers.** São o que define o som. Um falante bom numa placa barata soa melhor que o contrário.
- **Células e BMS.** Célula falsa (as "9.900 mAh" têm na verdade 1.000–2.000 mAh e às vezes nem proteção interna) é o jeito mais rápido de a caixa durar pouco ou pegar fogo. Compre de vendedor nacional com boa reputação, ou células recuperadas de notebook **testadas** uma a uma, se você tiver como medir.
- **Madeira e vedação.** Caixa que vaza ar perde grave e o duto para de funcionar direito.
- **Proteção física dos falantes.** Em churrasco tem criança, cachorro e cerveja. Tela metálica na frente é obrigatória.

## Riscos e cuidados

1. **Não solde fio direto na célula 18650.** O calor do ferro danifica a célula por dentro e esse dano não aparece. Use uma destas opções:
   - **(a)** pack 6S2P pronto com BMS, que é o mais seguro para a primeira vez;
   - **(b)** células com fita de níquel soldada a ponto (spot welder). Algumas lojas nacionais montam o pack sob encomenda;
   - **(c)** suportes de células de boa qualidade, mas mau contato em suporte esquenta.

   Depois disso, a regra é sempre: **BMS 6S com balanceamento**, **fusível logo na saída da bateria** e **carregador CC/CV de 25,2 V** próprio para Li-ion (nunca fonte comum).
2. **Bateria no sol ou no porta-malas quente:** Li-ion não gosta de mais de ~60 °C. Não deixe a caixa pegando sol ao lado da churrasqueira nem no carro fechado. O sol também resseca a borda e a cola dos falantes.
3. **Umidade:** **MDF incha com água e cerveja.** Prefira **compensado (naval, se couber no orçamento)** de 15 mm. Se usar MDF, sele todas as faces com verniz ou PU. A caixa não vai ser à prova d'água, só vai aguentar respingo. Monte a placa e a bateria **num compartimento separado do volume acústico** (uma caixinha interna vedada, ou o painel traseiro com tampa), longe de onde a água escorre.
4. **Capacitores de 25 V na placa** com bateria 6S cheia: confira antes de ligar (visto acima).
5. **Clipping:** no volume máximo, a TPA3116 distorce feio e quem sofre é o tweeter, porque a distorção gera agudo em excesso. Depois de montado, suba o volume do celular até o som começar a "rasgar" e volte um pouco. Se a placa tiver potenciômetro de ganho, regule esse limite com o celular a ~90% do volume.
6. **Estalo ao ligar e desligar:** algumas placas dão "pop". Ligue a caixa com o volume baixo. Se incomodar, existem placas com mute/soft-start.
7. **Durabilidade mecânica:** prenda a **alça com parafuso passante + porca-garra (T-nut)**, não com parafuso de madeira, que solta com o peso. Coloque cantoneiras nos cantos, pés de borracha e **travamento interno** (um sarrafo ligando a frente e o fundo) para as paredes não vibrarem.

## Próximos passos

1. **Escolha os woofers pelo T/S** e jogue os números no **WinISD** com 20 L e 55 Hz. Se quiser, me mande o modelo (ou o link) e eu confiro se casa com a caixa.
2. **Compre a placa primeiro e teste em bancada** com uma fonte de notebook de 19–20 V e um par de falantes quaisquer. Confira o Bluetooth, o ruído e os capacitores antes de gastar com o resto.
3. **Resolva a bateria:** pack pronto ou montagem com solda a ponto, com BMS, fusível e carregador de 25,2 V.
4. **Corte e monte o gabinete** (cola PU ou PVA + parafusos + silicone nas juntas por dentro). Forre as paredes com manta acrílica **sem tapar os dutos**.
5. **Monte o crossover numa plaquinha de MDF** presa dentro da caixa, com os componentes colados com cola quente ou abraçadeira para não vibrarem.
6. **Primeiro teste:** comece com volume baixo, confira se os woofers se movem juntos (polaridade certa) e ouça o tweeter. Se ficar estridente, aumente a atenuação do L-pad (−6 dB: 2 Ω em série + 4 Ω em paralelo).

Salvei o projeto em `projetos/caixa-bluetooth-churrasco/projeto.md`, com o histórico de decisões, para a gente continuar de onde parou. O próximo passo é escolher os woofers: me mande 2 ou 3 opções que você encontrar nas lojas e eu comparo pelo T/S.
