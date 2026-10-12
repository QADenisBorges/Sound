# DIY — caixas, crossovers, amplificadores e eletrônica

## Índice
1. Parâmetros Thiele/Small e escolha de caixa
2. Construção do gabinete
3. Dutos
4. Crossovers passivos x ativos (DSP)
5. Amplificadores e placas prontas
6. Fontes e baterias
7. Ferramentas gratuitas

## 1. Parâmetros Thiele/Small (T/S)

- **Fs**: frequência de ressonância do falante ao ar livre.
- **Qts** (e Qes, Qms): "amortecimento". Qts ~0,3–0,4 → gosta de dutada; ~0,4–0,6 → selada ou dutada grande; > ~0,7 → caixa aberta/baffle infinito.
- **Vas**: volume de ar com a mesma "rigidez" da suspensão; indica tamanho de caixa (Vas grande → caixa grande).
- **Xmax**: excursão linear — limita o volume máximo no grave.
- **EBP = Fs / Qes**: < ~50 → selada; 50–100 → ambas; > ~100 → dutada.
- Selada: volume para Qtc ~0,707 é a referência de resposta mais plana; Qtc menor = caixa maior e grave mais "seco"; maior = caixa menor e grave com "calombo".
- **Sempre simule** (WinISD) com os T/S do datasheet. Sem T/S, use o volume recomendado pelo fabricante.

## 2. Gabinete

- MDF 15 mm para caixas pequenas/médias, 18–25 mm para subs; travamentos internos (bracing) contra vibração das paredes.
- Vedação total (cola + silicone/PVA nas juntas) — vazamento arruína caixa selada.
- Enchimento (manta acrílica/lã) em caixa selada "aumenta" o volume efetivo ~10–20% e reduz ondas estacionárias; em dutada, só nas paredes, sem obstruir o duto.
- Descontar do volume bruto: espessura das paredes, falante, duto e travamentos.

## 3. Dutos

- Comprimento: `calc_som.py duto --volume L --fb Hz --diametro cm` (fórmula em `formulas.md`).
- Velocidade do ar no duto: manter abaixo de ~17 m/s (≈5% da velocidade do som) em potência máxima para evitar "sopro" (chuffing). Duto pequeno demais é erro comum; o WinISD mostra a velocidade.
- Duto de PVC é prático; duto em fenda (slot) usa a parede do gabinete e economiza espaço.
- Extremidades arredondadas (flare) reduzem ruído.

## 4. Crossovers

- **Passivo**: indutores e capacitores entre amplificador e falantes. Barato para 2 vias simples, mas projeto correto depende da impedância real do falante (não da nominal). Use capacitores de poliéster/polipropileno e indutores com núcleo de ar para médios/agudos.
- Ordem: 1ª (6 dB/oit) simples mas pouca proteção ao tweeter; 2ª (12 dB/oit) é o padrão; 4ª Linkwitz-Riley (24 dB/oit) em crossovers ativos.
- **Polaridade**: filtros de 2ª ordem (passa-baixa × passa-alta) ficam 180° defasados na frequência de corte — ligue o tweeter invertido, senão aparece um "buraco" no corte. 1ª e 4ª ordem (LR4): polaridade normal. Em dúvida, meça (REW) ou teste de ouvido as duas ligações. Polaridade do woofer se confere com uma pilha de 1,5 V: com + no terminal +, o cone vai para frente.
- **Ativo (DSP)**: cada via com seu canal de amplificador; permite ajuste de ganho, EQ, atraso e inclinação sem trocar componentes. Placas DSP acessíveis: ADAU1701/Wondom/Sure, miniDSP 2x4 HD (mais caro, mais fácil), DSPs de carro. Para quem gosta de experimentar, compensa.
- Projeto e simulação: VituixCAD ou XSim, idealmente com medições reais (REW + microfone).

## 5. Amplificadores e placas

- Placas classe D prontas (AliExpress/Shopee) com excelente custo: **TPA3116** (~2×50 W reais em 4 Ω com fonte de 24 V), **TPA3255** (~2×150 W com fonte de 48 V), **TPA3118**, **TDA7498E**, placas IRS2092 (mais potência). Potências anunciadas muitas vezes são de pico/ a 10% de distorção — considere ~60–70% do anúncio como uso limpo.
- Placas Bluetooth com codec decente (QCC3034/5.0+, com aptX) e placas "tudo em um" (BT + amplificador + DSP) existem; conferir o chip real nas fotos/avaliações.
- **Saída em ponte (BTL)** — TPA3116, TPA3255 e a maioria das placas classe D: os dois fios de cada falante são "vivos". Nunca ligue o negativo do falante no terra/negativo da fonte nem junte negativos de canais diferentes (ex.: em crossover passivo compartilhado ou em cabo com "comum") — isso curto-circuita a saída e queima a placa.
- Dissipação: classe D esquenta pouco, mas em potência alta precisa de dissipador e ventilação.

## 6. Fontes e baterias

- A tensão da fonte limita a potência. Em placas em ponte (BTL, caso do TPA3116/TPA3255), o teto teórico é P ≈ V_fonte² / (2 × Z) por canal; na prática, conte com ~60–70% disso sem distorção. Ex.: 24 V em 4 Ω → teto ~72 W, uso limpo ~40–50 W. Consulte o gráfico potência × tensão do datasheet.
- Bateria × TPA3116 (máx. recomendado 26 V): 4S (16,8 V cheia) → ~18–20 W limpos por canal em 4 Ω; 6S (25,2 V cheia) → ~40 W, mas no limite do chip — confirme que os capacitores de entrada da placa são de ≥ 35 V (muitas vêm com 25 V). 5S (21 V) é um meio-termo com folga.
- Fonte chaveada (SMPS) de qualidade (Mean Well ou equivalente) com margem de ~30% sobre o consumo médio. Fonte barata sem marca = ruído e risco.
- Caixa portátil: baterias Li-ion 18650 em série (3S = 11,1 V nominal, 4S = 14,8 V, 6S = 22,2 V) **sempre com BMS** (placa de proteção) e carregador adequado; módulo step-up se precisar de tensão maior. Li-ion mal feito pega fogo.
- **Rede 127/220 V**: isolar, usar fusível na entrada, aterrar carcaça metálica. Se não se sente seguro, use fonte externa pronta (tipo notebook) e trabalhe só em baixa tensão.

## 7. Ferramentas gratuitas

- **WinISD** — simulação de caixas (selada, dutada, bandpass), velocidade do duto, excursão.
- **VituixCAD / XSim** — projeto de crossovers e caixas multivias.
- **REW** — medição de resposta, sala e impedância (com microfone de medição).
- **Speaker Box Lite / calculadoras online** — contas rápidas.
- **Calculadora da skill**: `scripts/calc_som.py`.
