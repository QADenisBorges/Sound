# Som automotivo

## Índice
1. Elétrica (o elo que mais dá problema)
2. Amplificadores / módulos
3. Subwoofers e caixas no carro
4. Médios, tweeters e som "de qualidade" (SQ)
5. Regulagem de ganho
6. Armadilhas comuns

## 1. Elétrica

- Tensão: ~12,6 V motor desligado, ~13,8–14,4 V com motor ligado. Queda abaixo de ~12 V em pico = sistema subdimensionado (luz piscando, módulo entrando em proteção).
- **Corrente do amplificador** ≈ P_RMS / (tensão × eficiência). Classe D ≈ 0,75–0,85; classe AB ≈ 0,5–0,6. Ex.: 1500 W RMS classe D em 12,6 V → ~150 A em potência máxima contínua. Música tem fator de crista, então a média real é bem menor (tipicamente 1/3 a 1/8 disso), mas cabos e fusíveis se dimensionam pelo pico.
- **Alternador original** de carro popular: ~70–120 A, dos quais o carro já consome 30–50 A. Regra prática: até ~800–1000 W RMS o sistema original costuma aguentar com bons cabos; acima disso, pensar em bateria auxiliar/estacionária com isolador, alternador de maior amperagem e "Big 3".
- **Big 3**: reforçar os 3 cabos principais (alternador→bateria positivo, bateria negativo→chassi, motor→chassi). Barato e melhora muito a estabilidade de tensão.
- **Bateria**: bateria de partida não gosta de descarga profunda. Para som tocando com motor desligado, bateria estacionária/AGM auxiliar com isolador ou relé.
- **Fusível** no positivo a no máximo ~30–45 cm da bateria, dimensionado para proteger o **cabo** (não o amplificador): o fusível nunca pode ser maior do que o cabo aguenta. Orientação típica para cobre OFC em som automotivo (confira a tabela do fabricante do cabo; CCA → um degrau abaixo): 10 mm² ≤ 60 A; 16 mm² ≤ 80 A; 21 mm² (4 AWG) ≤ 125 A; 35 mm² ≤ 175 A; 53 mm² (0 AWG) ≤ 300 A. Se a corrente do sistema pede fusível maior, o cabo é que precisa subir.
- **Cabo**: cobre OFC de verdade (o "CCA" — alumínio cobreado — tem ~60% da condutividade; se usar, subir uma bitola). Dimensionar por queda de tensão (≤ 0,5 V) com `calc_som.py cabo`. Negativo com a mesma bitola do positivo, curto, no chassi lixado.
- Tabela prática (cobre OFC, ~5 m de positivo): até 40 A → 10 mm²; até 80 A → 21 mm² (4 AWG); até 150 A → 35 mm²; até 250 A → 50–53 mm² (0 AWG). Confira com a calculadora para o caso real.

## 2. Módulos (amplificadores)

- **Classe D** domina hoje: eficiente, compacto. Monocanal para sub, 2/4 canais para médios e tweeters (full range classe D de boa qualidade já é bom para voz).
- **RMS declarado**: veja em **qual tensão e qual impedância** o fabricante mede. Marcas nacionais costumam anunciar a 14,4 V; em 12,6 V a potência cai (P ∝ V² aprox. → ~75%). Desconfie de "PMPO", "potência máxima" ou números sem condição.
- **Impedância mínima**: módulo "1 Ω" / "2 Ω" / "4 Ω" indica a menor carga estável. Mais baixa = mais potência, mais corrente, mais calor, fator de amortecimento pior. Para grave limpo, 2 Ω ou 4 Ω costuma ser melhor escolha que 1 Ω no limite.
- **Casamento**: módulo com RMS de ~1× a 1,5× o RMS do falante é saudável *se o ganho for regulado corretamente*. O que queima falante é **clipping** (sinal quadrado distorcido) e excursão excessiva (grave abaixo da sintonia em caixa dutada), não "potência sobrando".
- Recursos úteis: filtro passa-baixa/alta, **subsônico** (essencial em caixa dutada), bass boost (evitar ou usar pouco), entrada de alto nível (para rádio original), remote.
- Marcas nacionais comuns: Taramps, SounDigital, Banda, Stetsom, Hinor/Hurricane (varia por linha). Em geral bom custo-benefício e assistência no Brasil.

## 3. Subwoofers e caixas no carro

- **Ganho de cabine (cabin gain)**: o carro é um ambiente pequeno e reforça grave abaixo de ~50–70 Hz (quanto menor o carro, mais alto o ponto). Por isso uma caixa selada rende bem num carro pequeno.
- **Selada**: grave mais seco e controlado, menor, mais tolerante a erro, menos eficiente. Boa para SQ/ouvir música.
- **Dutada**: +3 a +6 dB perto da sintonia (Fb), maior, precisa de subsônico, erro de projeto soa "embolado". Boa para mais pressão/eficiência com pouca potência.
- **Bandpass**: muito alto numa faixa estreita, pouco versátil; típico de som de "paredão"/SPL.
- Siga o volume recomendado pelo fabricante como ponto de partida, e simule com os parâmetros T/S (ver `diy.md`). Descontar o volume ocupado pelo falante e pelo duto.
- Tamanho: 10" costuma ser mais rápido e fácil de acomodar; 12" é o padrão de custo-benefício; 15" pede mais volume e potência.
- **Bobina dupla (DVC)**: permite escolher impedância final. Ex.: sub 2+2 Ω → série = 4 Ω, paralelo = 1 Ω. Dois subs 4+4 → podem virar 2 Ω ou 8 Ω etc. Sempre confira com `calc_som.py impedancia`.
- Marcas de falantes: JBL Selenium, Bravox, Pioneer, Hinor, Eros, Oversound, Triton, Spyder (variação grande entre linhas — olhe spec).

## 4. Médios e tweeters (qualidade de som)

- Trocar os falantes de porta originais por kit 2 vias (woofer + tweeter + crossover) é um dos upgrades de melhor custo-benefício.
- **Isolamento/vedação da porta** (manta acústica nos pontos certos, vedar furos) melhora muito o médio-grave por pouco dinheiro.
- **DSP** (processador) permite corrigir tempo (alinhamento temporal), EQ e crossovers ativos. Em carro é o upgrade que mais transforma o palco sonoro depois dos falantes.
- Rádio original: usar entrada de alto nível do módulo ou conversor RCA (line output converter). Alguns carros têm EQ de fábrica que corta grave — um DSP resolve.
- Médio "de porta" profissional (6", 8" de alta sensibilidade) + corneta/driver = estilo "trio"/"porta-malas"; muito alto, pouco refinado para SQ.

## 5. Regulagem de ganho

Ganho não é volume: é casamento de nível de entrada.

Método com multímetro (seguro e acessível):
1. Desligue bass boost, loudness e EQ; filtros no lugar.
2. Toque um tom senoidal de teste (ex.: 40 Hz a 0 dB para sub; 1 kHz para full range) no volume máximo sem distorção da fonte (em muitas fontes ~75–85% do volume).
3. Desligue os falantes, meça tensão AC na saída do módulo.
4. Tensão alvo V = √(P × R) → `calc_som.py ganho --rms 500 --impedancia 2` = 31,6 V.
5. Suba o ganho até a tensão alvo. Melhor ainda com osciloscópio ou "DD-1" para ver o clipping.

## 6. Armadilhas comuns

- Módulo grande sem mexer na elétrica → tensão cai, som "morre" no grave, módulo protege.
- Cabo CCA fino de kit barato.
- Fusível só no módulo (sem fusível na bateria).
- Caixa dutada sem filtro subsônico → excursão excessiva, falante queima.
- Bass boost no máximo + ganho no máximo = clipping.
- Aterramento em ponto pintado ou de solda ruim → ruído (alternator whine).
- Cabos RCA passando junto do cabo de força → ruído; passe em lados opostos do carro.
