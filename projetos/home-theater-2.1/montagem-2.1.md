# Montagem do 2.1 — resumo em texto (guia v2.7, 14/10/2026)

> Versão ilustrada: `guia/index.html` (entrada), com três partes: `compras.html`, `montagem.html` e `referencia.html`, cada uma com PDF (`guia/Home-Theater-2.1-<parte>-v2.7.pdf`; dados das versões anteriores em `guia/anteriores/`). Este arquivo continua como resumo em texto. **Andamento da bancada (11–14/10), valores medidos e configurações do app: `andamento.md`.** Conferência da compra de 10/10, foto a foto: `compras/2026-10-10-loja-fisica/conferencia.md`.

Sistema: notebook/celular → **Taramps PRO 2.4BT + AUDIO** → **SD800.4** (alimentado pela **BOB 60A**) → **JBL 4TRMS80 nas carcaças BS-369** (L/R) + **sub Protech 8"** em ponte.
O par Selenium 6TR4A volta para o carro.

---

## 1. Materiais

### Tudo em mãos (conferido em 10/10)
| Item | Como veio | Observação |
|---|---|---|
| 2 carcaças BS-369, par JBL 4TRMS80, SD800.4 EVO, sub Protech 8", BOB 60A, PRO 2.4BT + AUDIO | já tinha | — |
| Kit de solda (ferro 60 W, estanho, 168 termorretráteis, multímetro, descascador) | chegou 10/10 | Solda os faston (2.3) e a emenda do sub (2.7) |
| Cabo de força 10 mm², 1 m vermelho + 1 m preto | 10/10 | Bitola informada pelo usuário (sem etiqueta) |
| Porta-fusível de lâmina média + fusível **40 A** (laranja) | 10/10 | Fio do porta-fusível a medir em 11/10: **≥ 4 mm² usa; 2,5 mm² troca por midi** |
| Porta-fusível de lâmina média + fusível **5 A** (vermelho) | 10/10 | Provisório, decisão consciente: protege o fio; trocar por 1–2 A médio quando achar (M23). Veio também um 2 A **mini**, sem uso |
| Cabo paralelo branco **2 × 2,5 mm²**, 10 m | 10/10 | Sem friso: marcar o + com caneta nas duas pontas |
| Fio branco flexível 1,0–1,5 mm², ~2 m | 10/10 | Alimentação do processador (ou o paralelo 2 × 1,5 de reserva) |
| 2 cabos RCA duplos (1 MXT 1 m + 1 de casa) | 10/10 | — |
| 8 faston fêmea **amarelos** 6,3 mm (4–6 mm²) | 10/10 | Fio fino da BS-369 vai **soldado** no terminal |
| Parafuso Ciser AA 3,5 × **19** panela Phillips (c/ 30) + arruelas | 10/10 | Torre precisa de ≥ 20 mm (medir); senão, cortar a ponta |
| Fita de espuma Adere E-105S, **4 mm** × 19 mm × 5 m | 10/10 | Cortar ao meio no comprimento (19 → 2 × 9 mm) |
| Fibra de poliéster (saco grande) | 10/10 | 40–50 g por caixa, pesados |
| Silicone **acético** Tekbond 50 g | 10/10 | Só em plástico, longe de metal, cura 24–48 h aberto |
| Vedacit Fita Multiuso aluminizada **1 mm**, 10 cm × 10 m | 10/10 | Duas camadas nas paredes maiores |
| Reserva já possuída: paralelo 2 × 1,0 (vermelho/preto) e 2 × 1,5 (cristal) | antes | REM e alimentação do processador; não para falante |

### Adiado (sem pressa; o sistema monta e funciona sem)
| Item | Para quê | Estimativa |
|---|---|---|
| Fusível de lâmina média **1 A ou 2 A** + um **40 A** de reserva (M23) | Troca do 5 A provisório; sobressalente | R$ 5–10 |
| Conector de alavanca Wago 221, 2 vias (M21) | Só se a solda da emenda do sub falhar | R$ 6–15 |
| Cabo P2 → 2 RCA blindado 10 m (M20) | Notebook; por enquanto Bluetooth | R$ 30–60 |

Critério definido em 10/10: montar com o que está em mãos; compra nova só por segurança ou por resultado muito ruim. A única que a medição de 11/10 pode reabrir é o porta-fusível de 40 A (midi), se o fio do atual for de 2,5 mm².

Ferramentas: kit de solda (ferro, estanho, termorretráteis, multímetro, descascador), chaves Phillips e de fenda pequena isolada, estilete, alicate de corte (o Bestfer comprado é de RJ45: serve só para cortar/descascar, não crimpa faston), furadeira com broca de 2,5 mm, régua, trena, caneta permanente, fita crepe, fita isolante, abraçadeiras, álcool e pano, balança de cozinha, isqueiro, 1 pilha AA.

---

## Como a montagem está organizada (v2.0)

Etapas pelo trabalho, cada uma em fases na ordem de execução. As etapas 2, 3 e 4 são independentes (podem andar em paralelo); a 5 junta tudo. Na tela, cada passo mostra o estado (feito · pode fazer agora · esperando), a entrada tem o painel "Onde estou" e todas as partes têm menu lateral (etapas → fases → passos); na montagem, cada passo ou etapa abre sozinho pelo endereço (`montagem.html#passo-2-4`, `#etapa-2`), com "Ver tudo numa página" para leitura contínua.

```
2. CAIXAS ACÚSTICAS                        3. CABO DO SUB         4. SISTEMA ELETRÔNICO (sem falantes)
A Preparar a caixa                         A Refazer o cabo       A Preparar os cabos
  2.1 Encaixe a seco                         3.1 Cortar e medir     4.1 Preparar os cabos (posicionar, cortar,
  2.2 Furação                                3.2 Soldar a emenda        etiquetar, desencapar, porta-fusíveis vazios)
  2.3 Teste da lanterna (pode ser já)
  2.4 Tampar os furos (manta)
B Tratar (vedação e amortecimento)
  2.4 Silicone ⏱ cura 24–48 h  ← 2.3                              B Ligar (sem energia)
  2.5 Silicone (bordas e frestas; cura 24–48 h)                     4.2 Conector do processador
  2.6 Fita asfáltica nas paredes (2 camadas)                        4.3 Força, terra e REM
  2.7 Gaxeta (fita cortada ao meio) ← 2.2                           4.4 RCA + chaves em F + GAIN no mínimo
  2.8 Fibra pesada (40–50 g)
C Montar                                                          C Conferir e energizar por ramais
  2.9 Cabo + faston SOLDADOS (durante a cura)                       4.5 Multímetro, sem energia
  2.10 JBL + polaridade  ← 2.9 e 2.5 + cura                         4.6 Fonte sozinha → 13,8 V (fusíveis fora)
  2.11 Fechar  ← 2.10, 2.7, 2.8                                     4.7 Processador (5 A provisório)
D Validar                                                           4.8 Módulo (40 A)
  2.11 Validar a caixa sozinha  ← 2.10                            D Configurar e regular
                                                                    4.9 Configurar · 4.10 Ganho · 4.11 Limitador
                     └──────────────────────────┬──────────────────────────┘
                                         5. INTEGRAÇÃO
A Ligar os falantes: 5.1 (← 4.11; entra o que estiver pronto: 2.12 e/ou 3.1)
B Testar e ajustar: 5.2 primeiro som · 5.3 caixa do sub → subsônico · 5.4 atraso, fase, nível, EQ, toque nos cabos
C Usar: 5.5 uso diário · 5.6 diagnóstico
```

Dependências reais (o resto pode ser feito em qualquer ordem dentro da etapa):
- **2.3 → 2.4:** só se passa silicone onde a luz passou. Na traseira, 2.3 e 2.4 podem ser logo; na moldura, 2.4 espera 2.1 e 2.2.
- **2.4 + 24–48 h → 2.9:** silicone acético curado, sem cheiro de vinagre, antes de pôr a JBL.
- **2.6, 2.7 e 2.9 → 2.10:** gaxeta colada, fibra pesada e JBL conferida antes de fechar.
- **4.5 → 4.6:** a fonte só vai para a tomada depois da conferência sem energia.
- **4.8** só com o porta-fusível de 40 A aprovado (4.1): fio de **4 mm² ou mais**; com 2,5 mm², trocar por midi.
- **4.11 → 5.1:** filtros e limitador ativos antes de qualquer falante receber sinal.

---

## 2. Caixas acústicas

**A — Preparar a caixa**

**2.1 Encaixe a seco** (antes de cortar ou furar): abra a BS-369, tire o falante original, apresente a JBL por dentro da moldura com o tweeter para a frente e confira:
- **Largura:** flange de 118 mm num vão de ~126 mm, sobram ~4 mm de cada lado.
- **Torres do falante antigo:** os furos da JBL não coincidem com elas (11/10): a fixação é por furos novos na moldura. As torres dos cantos fecham a caixa: nelas não se mexe.
- **Abertura do cone:** o furo do anel (~92 mm) não pode encostar na suspensão da JBL. **Tweeter × tela:** não se tocam.
- **Fechamento:** a carcaça fecha sem forçar (JBL com 68 mm; 120 mm livres).

**2.2 Furação** (feita em 11/10): marque os 4 furos da JBL centralizada, fure com broca de 2,5 mm, experimente um parafuso com arruela: entra firme e para quando a arruela encosta; a ponta não pode sair pela frente.

**2.3 Teste da lanterna** (pode ser agora): no escuro, lanterna dentro de cada metade e olhar por fora; cada ponto de luz é uma fresta, marcada com caneta. Depois com as metades encaixadas, pela emenda. Classificar: furo ou abertura larga (> ~3 mm) → fita asfáltica (2.4); fresta fina só de plástico → silicone (2.5); emenda → gaxeta (2.7). As dúvidas de 23/09 (grade decorativa, rasgo curvo, fendas da tela) são decididas aqui.

**2.4 Tampar os furos e aberturas** (fita asfáltica; depois de 2.2 e 2.3): a traseira **não tem bornes** (11/10): só o furo redondo pequeno fica livre, para o cabo. Os dois rasgos e o furo maior da placa: retalho de ~4 × 6 cm por dentro, segunda camada com as bordas deslocadas. Moldura: os 4 furos que recebem parafuso ficam abertos (flange + gaxeta fecham); cada furo que sobrou da furação leva um retalho de ~2 × 2 cm. Furos originais pequenos e qualquer furo > ~3 mm que passou luz: fita. Lanterna de novo: não pode passar luz.

**B — Tratar (vedação e amortecimento).** Um material por função: fita asfáltica tampa (2.4) e amortece (2.6); silicone veda bordas e frestas finas (2.5); fita de espuma é gaxeta (2.7); fibra é enchimento (2.8), não veda.

**2.5 Silicone** (depois de 2.3 e 2.4): álcool nos pontos marcados; bico fino; cordão de 2–3 mm nas frestas finas de plástico mapeadas, na borda da fita que tampou a placa dos bornes e em volta do cabo no furo pequeno (passe o cabo já, com o nó do 2.9, para curar junto); alisar com o dedo molhado em água com detergente. Nada a 1–2 cm de metal. Carcaças **abertas e sem a JBL por 24–48 h**, até o cheiro de vinagre sumir.

**2.6 Fita asfáltica nas paredes** (só amortecimento): paredes limpas com álcool (plástico não é poroso: sem primer). Paredes grandes da traseira: retalhos de ~10 × 10 cm a 1 cm das torres e da emenda, pressionados do centro para as bordas; **segunda camada** com emendas desencontradas (fita de 1 mm). Teste: bater com o nó do dedo dá som surdo.

**2.7 Gaxeta** (depois de 2.2): fita Adere cortada ao meio no comprimento (19 → 2 × 9 mm). Assento da JBL: tira em todo o contorno pela borda externa, sem cobrir os furos, emendas de topo. Emenda traseira/moldura: tira em todo o contorno de uma das metades. Os 4 mm viram ~2 mm apertados.

**2.8 Preparar a fibra** (só pesar e abrir): duas porções iguais de 40–50 g na balança de cozinha, tufos abertos com os dedos (sem rasgar nem esticar). **Não entra na caixa agora.**

**C — Montar**

**2.9 Passar o cabo e soldar os faston** (durante a cura do 2.5): os dois terminais da JBL têm 6,3 mm (régua, 11/10) → faston nos dois. Cabo 2 × 2,5 mm² com ~2,5 m até o módulo + ~20 cm para dentro da caixa; passa pelo furo pequeno da traseira; **nó simples por dentro** a ~15 cm da ponta (alívio de tração). Se já passou no 2.5, comece daqui. Tubo termorretrátil no fio **antes**. Desencape ~12 mm, **dobre o cobre ao meio** (fica grosso como 5 mm², para o faston amarelo de 4–6 mm²), estanhe. Gota de estanho no cano do faston, fio dentro, ferro 2–3 s, tirar sem mexer. Puxão forte; junta lisa e brilhante (fosca = solda fria, refazer). Tubo por cima. Condutor marcado = +.

**2.10 JBL e polaridade** (depois de 2.9 e da cura do 2.5): condutor marcado → + da JBL. Pilha na ponta do cabo (+ no marcado): o cone **avança**. Se recuar, inverta os faston.

**2.11 Fechar** (depois de 2.10, 2.7 e 2.8): JBL parafusada sobre a gaxeta, em cruz, até a flange assentar. Fibra acomodada **solta** na traseira (fundo e paredes, sem socar), com um vão de 2–3 cm atrás do ímã da JBL. Juntar as metades devagar; torres em cruz, sem forçar.

**D — Validar**

**2.12 Validar a caixa sozinha:** o cone empurrado volta devagar, amortecido, sem chiado; na ponta do cabo, **≈3,4 Ω** e cone avançando com a pilha. Cone que volta na hora = vazamento: lanterna de novo com a caixa fechada. Leitura aberta = terminal solto.

---

## 3. Cabo do sub (independente das caixas e da eletrônica)

**3.1 Cortar e medir:** corte o azul/branco com a emenda de fita, deixe ~5 cm do vermelho/preto do plugue, corte o 2 × 2,5 até o lugar do módulo com folga e marque o + com caneta nas duas pontas. Emenda por **solda** (3.2), um fio de cada vez, abraçadeira segurando. Depois: teste da pilha na outra ponta, o fio que faz o cone avançar com o + é o + (vai no **CH4 ⊕**). Meça **3–3,6 Ω** (4 Ω). ~7 Ω = sub de 8 Ω (ponte com ~264 W, alvo ~46 V); perto de 0 Ω = curto.

**3.2 Soldar a emenda:** ferro ~350 °C, ponta chata; tubos termorretráteis **antes** (um por emenda, um maior por cima das duas); desencape ~15 mm, enrole o fino no grosso, aqueça o fio por baixo e encoste o estanho no fio. Esfriou sem mexer → puxão → tubos. Se a solda não sair, o conector de alavanca é o plano B.

---

## 4. Sistema eletrônico (sem nenhum falante)

```
BOB 60A  (+) borne 1 ─[fusível 40 A, a até 30 cm da fonte]─ 10 mm² vermelho ─ +12V  SD800.4
BOB 60A  (+) borne 2 ─[fusível 1 A (5 A provisório)]─ 1,0–1,5 mm² ─ +12VDC  processador ─┐ jumper
                                                           REM IN  processador ─┘ (modo BOB)
BOB 60A  (−) borne 4 ─ 10 mm² preto ─ GND  SD800.4
BOB 60A  (−) borne 5 ─ 1,0–1,5 mm² ─ GND  processador
Processador REM OUT ─ 1,0 mm² ─ REM  SD800.4

Processador saídas 1, 2, 3, 4 ─ RCA ─ SD800.4 entradas CH1, CH2, CH3, CH4
SD800.4 CH1 +/− ─ 2,5 mm² ─ JBL L      SD800.4 CH2 +/− ─ JBL R          (só na etapa 5)
SD800.4 CH4 ⊕ ─ sub +    SD800.4 CH3 ⊖ ─ sub −   (ponte 4 Ω; cabo novo)  (só na etapa 5)
Entrada do processador: Bluetooth (celular) ou RCA A = L, B = R (cabo P2 → 2 RCA do notebook)
```

Régua da fonte: bornes 1–3 (+) e 4–6 (−) são ligados por dentro. **Os bornes 7–9 são da rede (127/220 V) e ficam expostos na mesma régua: só mexa nela com o plugue fora da tomada.**

1. **Preparar os cabos** (4.1, um passo só). **Posicionar:** fonte ao lado do módulo, 20 cm livres nas laterais, longe de tapete e cortina (o módulo passa de 60 °C); RCA longe do cabo da tomada. Defina também onde ficam as caixas e o sub.
   **Cabos (medidas definidas, fonte · módulo · processador lado a lado, módulo no meio):** 10 mm² vermelho C1 15 cm + C2 40 cm; 10 mm² preto C3 60 cm; 1,5 mm² C4 50 cm, C5 50 cm, C6 4 cm, C7 50 cm; paralelo 2 × 2,5 F1 3,0 m, F2 3,0 m, F3 1,0 m (sobram ≈3 m). força o mais curta possível (fusível a até 30 cm da fonte); falante com 10 % de folga; etiquetas nas duas pontas; condutor marcado = +. Ponta torcida, sem estanhar, todo o cobre dentro do borne.
   **Porta-fusíveis vazios.** O de 40 A é de lâmina média com fios: fio **≥ 4 mm²** (rabicho de 10 cm, fonte limitada a 40 A: ≈0,7 W a 40 A); com 2,5 mm², trocar por midi. Emenda dos fios ao cabo de 10 mm² por solda com termorretrátil. Fita isolante não serve, nem o conector de alavanca (vai só até 4 mm²).
2. **Conector do processador fora do aparelho** (4.2), **força, terra e REM** (4.3) e **RCA, chaves e GAIN** (4.4: 4 RCA ligados; chaves CH1/CH2 e CH3/CH4 em **F**; GAIN no mínimo; bornes de falante vazios), tudo com a fonte fora da tomada.
3. **Conferência sem energia** (4.5), multímetro no bip: tabela de 12 pontos (ponta vermelha × preta) no guia; cada cabo bipa de ponta a ponta, o fusível fora isola, e entre + e − só um bip curto que para (capacitores carregando). Bip contínuo é curto: não ligue.
7. **Energia por ramais:**
   - 4.6 Fonte sozinha, **fusíveis fora**: 13,8 V nos bornes 1/4 (trimpot com chave isolada); 13,8 V na entrada de cada porta-fusível, 0 V na saída.
   - 4.7 Processador: fusível colocado com a fonte fora da tomada; polaridade do conector conferida com tensão; LED, app, **senha trocada** (padrão 1234), ON/OFF pelo app e REM do módulo seguindo o app (≈12,4 V em ON). Fusível de 5 A provisório: trocar por 1–2 A médio quando achar.
   - 4.8 Módulo: fusível de 40 A colocado com a fonte fora da tomada; 13,8 V na régua; LED segue o app; porta-fusível e cabos frios depois de 5 min.
5. **Configuração** (4.9), memória 1:

| Saída | Origem | Filtro | Outros |
|---|---|---|---|
| 1 (JBL L) | A | **Passa-alta Butterworth 12 dB/oit em 120 Hz** | Limitador no ponto regulado; fase 0° |
| 2 (JBL R) | B | Idem | Idem |
| 3 e 4 (sub, ponte) | A+B | **Passa-baixa Linkwitz-Riley 24 dB/oit em 120 Hz** + subsônico **30 Hz, 24 dB/oit** (ajustado no 5.3) | Fase **0°** (testar 180°); **tudo igual nas duas** |

Por que BW2 e não LR4 de 24 dB nas JBL: a caixa selada já soma 12 dB/oit abaixo de ~124 Hz, então o corte acústico resultante já é de 24 dB/oit. Na simulação (09/10/2026), BW2 120 + caixa + sub LR4 120 em fase 0° soma entre **0 e +1,3 dB**; com LR4 elétrico nas JBL abre um buraco de −3 a −10 dB. O Xmax (pico) da JBL chega com ~12 W perto de 122 Hz.

**Ponte:** todo ajuste da saída 3 se repete na 4 (fase, atraso, filtros, nível, EQ, limitador). Fase invertida em só uma delas cancela a ponte.

6. **Ganho** (4.10), sem falantes, feito em 13/10: filtros, EQ e limitador desligados; **gerador do processador** (GERADOR FIXO, 60 Hz, 0 dB); multímetro no **200 V~**; GAIN do módulo no mínimo e ajuste no nível da saída, só com + / −. O gerador em 0 dB fica 6 dB abaixo do máximo, então o alvo com o tom é a metade:
   - **CH1 e CH2 (JBL): 5,5 V** com o tom (máximo real 11 V: 30 W em 4 Ω) → saídas 1 e 2 em **−16,5 dB**.
   - **Ponte CH4 ⊕ / CH3 ⊖ (sub): 20 V** com o tom, ≈10 V em cada canal (máximo real 40 V) → saídas 3 e 4 em **−12,0 dB** (−12,5 dB se passar de 20,5 V). Sempre o mesmo número nas duas.
7. **Limitador** (4.11): com o tom, saídas 6 dB acima (1 e 2 em −10,5; 3 e 4 em −6,0 → 11 V e 40 V); Threshold de cada canal baixado até a luz acender e subido até apagar (3 e 4 iguais). Teste: saída 1 +2 dB, o CH1 não passa de ≈11,5 V. Níveis de volta, filtros de volta, Memória 1 e celular, fonte fora da tomada. **Daqui em diante, níveis e EQ só para baixo.** Configurações de teste no celular: ganho, limitador, primeiro-som e teste-sub (`andamento.md`).

---

## 5. Integração (só o que precisa das frentes prontas)

- **5.1 Ligar os falantes** (depois de 4.11; entra o que estiver pronto: caixas validadas 2.12 e/ou sub 3.1), fonte fora da tomada: condutor marcado (+) no borne vermelho da caixa; F1 no CH1, F2 no CH2; sub com o + no **CH4 ⊕**. Antes de apertar, meça na ponta do módulo: ≈3,4 Ω nas caixas, 3–3,6 Ω no sub. O sub pode entrar antes das caixas L/R.
- **5.2 Primeiro som:** configuração "primeiro-som" (Master −20 dB); confira o passa-alta das saídas 1/2 no app; volume baixo; uma saída por vez (1 só na L, 2 só na R, 3 e 4 só no sub). Grave cheio numa JBL = RCA trocado ou passa-alta perdido.
- **5.3 Tipo de caixa do sub** (só precisa do sub): configuração "teste-sub" (sem subsônico durante o teste), gerador SWEEP lento de 25 a 60 Hz, volume baixo, lanterna no cone. Se o cone quase parar numa frequência, a caixa tem duto e essa é a Fb: subsônico em ~0,75–0,8 × Fb, 24 dB/oit. Selada: 25 Hz. Sem conclusão: 30 Hz, 24 dB/oit.
- **5.4 Ajustes conjuntos:** atraso pela distância até o sofá (a caixa mais perto recebe a diferença, em cm); fase do sub com tom de 120 Hz e decibelímetro, alternando 0°/180° nas saídas 3 e 4 juntas; nível do sub 3 a 9 dB abaixo do regulado (−12,0 dB); grave embolado em ~150 Hz: −1 a −2 dB nas saídas 1/2. **Depois de 15 min de música alta, toque nos cabos de força e no porta-fusível:** morno é normal; quente demais = mau contato ou fio fino. Salve e exporte.

## 6. Uso no dia a dia
- **Ligar:** fonte já na tomada, depois ON no app. **Desligar:** OFF no app e só então, se quiser, a tomada (o módulo desliga pelo REM antes de faltar energia, sem estalo).
- Teste uma vez como o processador volta quando a energia volta (ligado ou desligado) e anote.
- Depois de qualquer reset ou troca de memória, confira o passa-alta das saídas 1 e 2 **antes** de tocar: sem ele, a JBL recebe grave cheio. A configuração exportada traz tudo de volta.
- Volume pelo celular; níveis e EQ do app só para baixo.
- Reaperte os bornes depois da primeira semana (fonte fora da tomada).

## Checklist de segurança
- Fusível 40 A no + da fonte, perto dela, em porta-fusível com fio de 4 mm² ou mais (ou midi). Fusível no processador (5 A provisório; 1–2 A quando achar).
- Fusível sempre colocado com a fonte fora da tomada; conferência com o multímetro antes da primeira energia.
- Tomada aterrada (um testador de tomada mostra fase, neutro e terra sem expor a mão). Fonte com laterais livres.
- Bornes 7–9 da fonte são da rede (127/220 V): nada de mexer na régua com o plugue na tomada; trimpot com chave isolada.
- Nunca ligar ou desligar cabos com a fonte energizada.
- Silicone acético só com a caixa aberta até curar; longe de metal.
- Ferro de solda no suporte sempre que sair da mão.
- Volume: acima de 85 dB por horas cansa e danifica a audição.
