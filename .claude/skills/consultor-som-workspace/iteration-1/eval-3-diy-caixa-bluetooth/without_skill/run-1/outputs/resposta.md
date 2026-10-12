# Projeto: caixa Bluetooth portátil com TPA3116 para churrasco

Dá pra fazer, e fica bem boa. A TPA3116 é uma ótima escolha: barata, eficiente (classe D, quase não esquenta) e funciona direto na bateria. Vou montar o projeto inteiro e ir explicando o porquê de cada escolha, já que é sua primeira caixa.

**O que eu assumi (me corrige se algo estiver errado):**
- Uso ao ar livre, em volume de festa, por umas 6 a 10 horas seguidas.
- Uma pessoa precisa conseguir carregar pela alça (a meta é ficar abaixo de ~8 kg).
- Você não tem soldadora ponto (spot welder) para baterias.
- Orçamento de uns R$ 700 a 1.100 no total. Os preços abaixo são estimativas aproximadas; não consultei valores atuais.

---

## 1. A decisão que mais importa: a tensão da bateria

A potência da TPA3116 depende quase só da tensão que chega nela. A placa aceita até 26 V, mas o ideal é ficar com uma margem abaixo disso.

| Bateria | Tensão (cheia → vazia) | Potência real por canal em 4 Ω | Comentário |
|---|---|---|---|
| 3S (3 células 18650 em série) | 12,6 → ~9,5 V | ~12–15 W | Fraca para ambiente aberto |
| **4S (4 em série)** | **16,8 → ~12,8 V** | **~25–30 W** | **Recomendado. Bom equilíbrio e margem segura** |
| 5S / bateria de ferramenta 18–20 V | 21 → ~16 V | ~35–40 W | Ótima, mas veja o item 6 |
| 6S | 25,2 V | — | Encosta no limite da placa. Evite |

Os "2x50 W" do anúncio só aparecem com uns 24 V e distorção alta. Com bateria 4S, conte com uns **2 × 25 W reais**. Parece pouco, mas com falantes de boa sensibilidade isso toca alto em churrasco.

**Por isso: falantes de 4 Ω** (em 8 Ω, a mesma tensão entrega metade da potência) **e bateria 4S.**

---

## 2. Lista de componentes

### Eletrônica (AliExpress)
| Item | O que procurar | ~R$ |
|---|---|---|
| Placa amplificadora | TPA3116D2 **estéreo com Bluetooth 5.0**, por exemplo a família **ZK-502C** ou **ZK-502MT** (a MT tem controle de grave e agudo, que vale a pena). Confira na foto se o chip é TPA3116 mesmo. | 60–100 |
| BMS 4S | "BMS 4S 20A **com balanceamento**" (a corrente anunciada costuma ser exagerada, então 20 A dá folga) | 25–40 |
| Indicador de bateria | "indicador de nível de bateria lítio 4S" (display ou barrinha) | 10–15 |
| Carregador | **Fonte carregadora 16,8 V 2 A** com plugue P4, igual às de bike elétrica ou patinete | 40–60 |
| Jack de carga | Jack P4 fêmea de painel (5,5 × 2,1 mm) | 5 |
| Chave liga/desliga | Chave gangorra de 10 A, de preferência com LED | 10 |
| Fusível | Porta-fusível lâmina (de carro) + fusível de **7,5 A** | 10 |
| Fio | 16 AWG para alimentação e 18 AWG para os falantes | 20 |

### Bateria: a parte em que não dá pra economizar
- **8 células 18650 em 4S2P** (dá uns 14,8 V e 5–7 Ah, ou seja, 75–100 Wh). Isso rende umas **8 a 15 horas** em volume de festa, porque a potência média de música é bem menor que a de pico.
- Compre células de marca conhecida (Samsung 25R/35E, LG, Molicel, Sony/Murata) de vendedor confiável. **Fuja de "9900 mAh"**: isso não existe e é célula falsa ou reciclada.
- **Não solde direto na célula.** O calor do ferro estraga a célula por dentro. Você tem três opções:
  1. **Comprar um pack 4S2P pronto** (com fita de níquel soldada a ponto). É a mais fácil e segura.
  2. Comprar células **"com tab"** (já vêm com lingueta de níquel) e soldar só nas linguetas.
  3. Usar suportes (holders) para 18650. Funciona, mas têm mau contato com vibração. Não recomendo para algo que vai ser carregado de um lado pro outro.
- Custo: R$ 150–250 em células boas.

### Falantes (no Brasil costuma sair melhor que importar)
- **2 médio-graves de 6" ou 6,5", 4 Ω, com sensibilidade de 89 dB ou mais.** Sensibilidade é o que importa aqui, porque a potência é limitada. Ignore o "200 W PMPO" do anúncio. Linhas automotivas de médio-grave de marcas conhecidas (Selenium/JBL, Bravox, Eros, Hinor etc.) funcionam bem. **Prefira um modelo que publique os parâmetros Thiele-Small** (Fs, Qts, Vas), porque você vai precisar deles para dimensionar a caixa. ~R$ 150–300 o par.
- **Tweeters: sugiro usar 2, não 1.** A placa é estéreo, então fica mais simples montar dois conjuntos iguais (canal E: woofer + tweeter; canal D: woofer + tweeter). Com um tweeter só, você precisaria somar os canais, o que complica. Use **tweeter de domo** (seda, titânio ou PEI), 4 ou 8 Ω. **Evite tweeter piezo**: ele se dá mal com amplificador classe D (é uma carga capacitiva e pode esquentar ou danificar a saída). ~R$ 60–120 o par.

### Caixa e acabamento
| Item | ~R$ |
|---|---|
| Compensado 12–15 mm (naval se puder) ou MDF 15 mm | 80–150 |
| Grades metálicas para os woofers (em churrasco, com certeza alguém vai esbarrar) | 40–80 |
| Alça, pés de borracha, cantoneiras | 30–60 |
| Cola de madeira, silicone, parafusos, manta acrílica | 40 |
| Tubo PVC para o duto (se for bass reflex) | 10 |
| Acabamento: carpete automotivo, tinta texturizada ou verniz marítimo | 50–100 |

**Total aproximado: R$ 750 a 1.200**, conforme a qualidade dos falantes e das células.

---

## 3. Divisor de frequência (crossover): simples e suficiente

Se os tweeters automotivos vierem com um capacitor no fio (é comum), isso já é o divisor básico. Se não vierem:

- **Tweeter:** capacitor de poliéster ou polipropileno (**não polarizado**, 100 V ou mais) **em série**, cortando em torno de 3,5–4 kHz:
  - Tweeter de 8 Ω: **4,7 µF**
  - Tweeter de 4 Ω: **10 µF**
- **Tweeter alto demais ou agudo "chiando"?** Coloque um **resistor de 2–3,3 Ω / 10 W em série** com ele. Tweeters geralmente são mais sensíveis que o woofer.
- **Woofer:** comece ligado direto. Se o som ficar "gritado" ou áspero nos médios, coloque uma **bobina de ~0,15–0,2 mH** em série (para 4 Ω).
- Escolha um tweeter com Fs (frequência de ressonância) de 1,5 kHz ou menos. Assim ele aguenta bem o corte em 4 kHz.

Ligue tudo com a mesma polaridade (+ com +). Depois vale testar o tweeter invertido e ouvir qual das duas formas soa mais cheia na região de voz.

---

## 4. A caixa

### Tipo: bass reflex (com duto) ou selada?
- **Selada:** é mais fácil, perdoa erro, protege o woofer e dá um grave "seco". Só que perde grave em ambiente aberto.
- **Bass reflex:** rende mais grave e mais volume com a mesma potência, e em churrasco isso ajuda muito. Precisa ser calculada.

**Minha recomendação: bass reflex sintonizada em torno de 55–60 Hz**, calculada no **WinISD** (é gratuito) com os parâmetros T/S do falante que você comprar. Como ponto de partida para um médio-grave típico de 6,5": **uns 7–9 litros líquidos por woofer**, ou seja, **~15–18 L no total** com os dois dividindo o mesmo volume. Isso funciona bem em estéreo.

### Dimensões de referência
**Externa: ~50 × 28 × 22 cm** (L × A × P) com chapa de 15 mm. Isso dá ~22 L brutos. Descontando falantes, reforços, duto e o compartimento da eletrônica, sobram uns 17 L líquidos.

Disposição na frente: woofer à esquerda e à direita, cada tweeter acima ou ao lado do seu woofer, e o duto na frente (ou atrás, se a caixa for ficar longe da parede).

### Detalhes que fazem a caixa durar
- **Compensado em vez de MDF:** em 12 mm, uma caixa desse tamanho pesa uns 4 kg só de madeira. Em MDF de 15 mm são uns 7 kg. O compartimento também aguenta melhor umidade e cerveja derramada. MDF inchou com água, já era.
- **Compartimento separado e vedado para a eletrônica** (placa, BMS e bateria), com o painel de controle no topo ou na traseira. Motivos: os botões ficam acessíveis, não há vazamento de ar na caixa acústica e dá pra fazer manutenção sem desmontar os falantes.
- **Vede tudo:** cola de madeira nas juntas + silicone por dentro, e junta de espuma ou borracha sob os falantes. Vazamento de ar em caixa com duto faz barulho de assobio e mata o grave.
- **Um reforço (travessa)** ligando o painel frontal ao traseiro, entre os dois woofers.
- **Manta acrílica** nas paredes internas (não tampe o duto).
- **Fixe a bateria firme** (abraçadeira ou suporte parafusado, com espuma). Ela não pode ficar solta chacoalhando.
- Acabamento resistente: verniz marítimo, tinta texturizada ou carpete automotivo. Pés de borracha para não ficar no chão molhado.

---

## 5. Esquema elétrico

```
[Jack P4 carga 16,8V] ──► [BMS 4S: pinos P+/P-] ◄──► [Pack 4S2P: B+/B- + fios de balanço]
                                  │
                              P+ ─┴─► [Fusível 7,5A] ─► [Chave 10A] ─┬─► [Placa TPA3116 +V]
                              P- ────────────────────────────────────┴─► [Placa TPA3116 GND]
                                                                     └─► [Indicador de bateria]

Placa: saída E ──► woofer E (direto) + tweeter E (via capacitor)
       saída D ──► woofer D (direto) + tweeter D (via capacitor)
```

Pontos importantes:
- **Não ligue o negativo de saída do falante ao GND.** A saída da TPA3116 é em ponte (BTL). Os dois fios do falante são "vivos". Se você juntar o "−" dos falantes ou ligá-lo ao terra, a placa queima.
- O fusível fica **o mais perto possível da bateria**, depois do BMS. Ele protege contra curto na fiação, que é o que causa incêndio.
- O carregador de 16,8 V entra pelo BMS. Dá pra tocar enquanto carrega.
- **Guarde o carregador original com a caixa.** Uma fonte de 19 V de notebook ligada nesse jack vai sobrecarregar as células.

---

## 6. Alternativa que vale considerar: bateria de ferramenta

Se você já tem parafusadeira de 18/20 V (Makita, DeWalt, Bosch etc.), existe no AliExpress um **adaptador de bateria de ferramenta** com terminais. Vantagens: você não precisa montar pack nem BMS, já tem carregador e ganha mais potência (~35–40 W por canal). Cuidado: muitas dessas baterias **não cortam sozinhas quando descarregam** (quem corta é a ferramenta). Por isso você precisaria de um **módulo de corte por subtensão**, ajustado para ~15 V.

---

## 7. Ordem de montagem (faça nessa sequência)

1. **Teste a eletrônica na bancada antes de mexer na madeira.** Ligue placa + falantes soltos + bateria (ou uma fonte de 12–19 V) e confira se o Bluetooth pareia, se sai som dos dois canais e se não tem chiado excessivo.
2. Com os falantes em mãos, meça os furos reais (não confie no anúncio) e rode o WinISD com os parâmetros T/S.
3. Corte a madeira, cole a caixa e deixe secar 24 h. Vede e faça o acabamento.
4. Monte a bateria com o BMS, **confira as tensões de cada grupo com o multímetro** (todos devem estar iguais, ±0,05 V) e só então ligue o resto.
5. Instale a eletrônica no compartimento, depois os falantes com as juntas de vedação, depois as grades.
6. Primeiro teste com volume baixo. Aumente aos poucos e fique de olho em estalos, assobios no duto, vibrações e distorção.

---

## 8. Dicas para durar

- **Não deixe no sol do churrasco.** Calor é o maior inimigo da bateria de lítio. Sombra sempre.
- **Longe da churrasqueira:** a gordura e a fumaça grudam no cone e no domo do tweeter.
- Não deixe a bateria parada 100% cheia ou totalmente vazia por meses. Se for guardar, deixe pela metade (o indicador ajuda).
- Com grave no máximo e volume no talo, o woofer passa do curso (você ouve "bater"). Nesse caso, abaixe o grave, não o volume. Em bass reflex, o som abaixo da sintonia não tem "freio".
- Chiado com o celular desconectado é normal nessas placas BT baratas, em nível baixo. Se incomodar, fios curtos e o GND em ponto único resolvem na maioria dos casos.

---

## 9. Upgrades opcionais (dá pra fazer depois)

- **Saída USB para carregar celular:** um módulo step-down de 5 V / 3 A (~R$ 15). Faz sucesso em churrasco.
- **Entrada auxiliar P2:** a maioria das ZK já tem.
- **Placa com DSP** (por exemplo, as da linha "JAB" da Wondom/Sure, que juntam Bluetooth + DSP + amplificador): dá para fazer crossover e equalização por aplicativo e um "bass boost" com limitador que protege o woofer. Custa mais, mas é o maior salto de qualidade possível nesse tipo de projeto. Só vale se um dia você quiser ir além.

---

**Resumo:** TPA3116 com Bluetooth (tipo ZK-502MT), **bateria 4S2P de células de marca**, 2 médio-graves de 6,5" em 4 Ω com boa sensibilidade + 2 tweeters de domo com capacitor, e caixa bass reflex de ~17 L em compensado com compartimento separado para a eletrônica. Custo na faixa de R$ 750 a 1.200, peso em torno de 7 kg, 25–30 W reais por canal e bateria para a festa inteira.

Quando escolher os falantes, me manda o modelo ou os parâmetros T/S que eu te ajudo a calcular o volume exato e o tamanho do duto.
