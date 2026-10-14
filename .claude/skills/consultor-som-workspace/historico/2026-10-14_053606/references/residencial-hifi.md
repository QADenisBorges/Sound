# Som residencial / Hi-Fi / Home theater

## Princípios

- **A sala é o maior "componente".** Abaixo de ~300 Hz, os modos da sala (ressonâncias) causam picos e vales de ±10–20 dB dependendo da posição. Posicionamento e tratamento básico fazem mais diferença que trocar amplificador.
- Ordem de impacto típica no resultado: **caixas + sala > posicionamento > amplificador > fonte > cabos**. Cabos caros "audiófilos" praticamente não trazem ganho mensurável; cabo de cobre de bitola adequada basta.
- **Sensibilidade manda na potência**: caixa de 90 dB/1W/1m precisa de metade da potência de uma de 87 dB para o mesmo volume. Em sala comum (3–4 m de distância), 20–50 W RMS por canal com caixas de sensibilidade média já dão volume alto.
- Impedância típica de caixas: 4–8 Ω (nominal; a mínima real pode ser menor). Receivers de entrada às vezes não gostam de caixas de 4 Ω em volume alto.

## Arquiteturas

- **Estéreo 2.0 / 2.1** (música): par de caixas de estante ou torre + amplificador integrado. Adicionar sub (2.1) com crossover ~80 Hz ajuda caixas de estante.
- **Home theater 5.1 / 7.1 / Atmos**: receiver AV com HDMI eARC, calibração automática (Audyssey, YPAO, Dirac etc.). Canal central é o mais importante para diálogos; subwoofer em segundo.
- **Soundbar**: prático, mas limitado em separação estéreo e grave. Faz sentido quando espaço/estética mandam.
- **Ativas (caixas com amplificador embutido)**: ótima relação custo/benefício para estéreo de mesa ou sala pequena (monitores de estúdio, caixas ativas Hi-Fi).
- **Streaming**: Chromecast/AirPlay/Bluetooth com codec bom, streamer dedicado ou PC + DAC. Um DAC USB barato de qualidade já é transparente para a maioria dos ouvidos.

## Acústica básica

- Caixas longe das paredes laterais, tweeters na altura do ouvido, triângulo equilátero com o ouvinte, levemente viradas para ele (toe-in).
- Não sentar exatamente no meio da sala (pior ponto para modos) — em geral ~38% do comprimento a partir da parede de trás ou da frente funciona melhor.
- Primeiras reflexões nas paredes laterais, tapete no chão, cortinas, estantes cheias → melhora clareza a baixo custo. Painéis de lã de rocha/fibra (DIY) são baratos e eficazes.
- Subwoofer: "sub crawl" — coloque o sub na posição de escuta, ande pela sala onde o sub poderia ficar, e coloque-o onde o grave soar mais uniforme. Dois subs suavizam os modos.
- Medição: **REW** (Room EQ Wizard, gratuito) + microfone de medição USB (UMIK-1 ou similar) permite ver a resposta da sala e aplicar EQ com fundamento.

## Custo-benefício

- **Mercado de usados** é onde o Hi-Fi rende mais: receivers de 5–10 anos (Denon, Yamaha, Onkyo, Pioneer) e caixas de marcas tradicionais (JBL, Polk, KEF, Wharfedale, Dali, Klipsch, Elac) por fração do preço novo. OLX, Mercado Livre usados, grupos de Facebook. Teste antes; caixas usadas: conferir suspensão dos falantes e se não há distorção.
- Amplificadores classe D baratos (TPA3116/TPA3255, Fosi, Aiyima) entregam muito por pouco em sistemas estéreo simples.
- Evite "home theater em caixa" genérico com potência PMPO inflada.

## Home theater montado com peças avulsas (econômico)

- **Módulo automotivo em casa** (12 V): precisa de fonte chaveada de 12–14,4 V. Dimensione pela corrente média com margem, não pelo pico: `calc_som.py corrente` dá o máximo e a faixa típica com música. Uma fonte de ~40–60 A atende um módulo de ~800 W RMS em volume doméstico. Ligue o REM ao +12 V. Loop de terra com o decodificador ou a TV gera zumbido; ligue tudo na mesma tomada/filtro. Fontes desse tipo (as "BOB" de som automotivo) costumam ter os bornes da rede 127/220 V na mesma régua da saída de 12 V, com os parafusos à mostra: com o plugue na tomada, não encoste na régua, e ajuste o trimpot de tensão com chave isolada. Tomada com terra (carcaça metálica). Ganho com DSP e celular/notebook como fonte: `automotivo.md` §5.
- **Decodificador 5.1 barato** (entrada óptica/coaxial): muitos não têm gerenciamento de graves (bass management), então a saída SW leva só o canal LFE (efeitos) e o grave de música e diálogo vai para as caixas pequenas. Prefira modelos com ajuste de caixa "small/large" ou de crossover. Se não houver, use o passa-alta do amplificador nas caixas pequenas e aceite perder parte do grave.
- **Fonte do sinal**: muitas TVs mandam só PCM estéreo pela saída óptica/ARC em apps de streaming, e várias não passam DTS. Antes de comprar o decodificador, confirme que a TV tem a opção "Bitstream"/"Dolby Digital" na saída de áudio.
- Um sistema "5.1" sem surrounds é 3.1: configure o decodificador para isso (se ele permitir), para que os canais traseiros sejam redistribuídos em vez de perdidos.
- **Canal central**: só existe com fonte multicanal (decodificador/receiver ou placa 5.1 + player). Alimentado por L+R somados ele não traz informação nova, estreita o palco e briga com o centro fantasma. Precisa também de um canal de amplificação próprio. O que mais importa nele é **timbre igual ao de L/R** (mesmo falante e tweeter, ou da mesma família): um diálogo que passa de uma caixa para outra muda de cor se forem diferentes. Potência quase nunca limita: ele precisa do mesmo SPL que L/R, e com sensibilidade maior isso sai com poucos watts (`calc_som.py spl`).
- **Central horizontal com 2 woofers ao lado do tweeter (MTM deitado)**: os dois woofers tocando a mesma faixa se cancelam fora do eixo onde a diferença de caminho dá meio comprimento de onda, sen θ = λ/(2d). Com centros a ~20 cm e corte em 2,5 kHz, o primeiro nulo fica a ~20° — exatamente os lugares das pontas do sofá, na faixa da voz. Saídas: 2,5 vias (um woofer cortado em ~300–600 Hz), corte mais baixo com tweeter que aguente, woofers empilhados na vertical, ou um woofer só + tweeter (igual a L/R).

## Armadilhas

- Comprar receiver potente e caixas ruins.
- Subwoofer de baixa qualidade em volume alto em apartamento (vizinho recebe o grave; isolamento de grave é caro).
- Ignorar o canal central em home theater.
- Caixas encostadas no canto → grave inchado e embolado.
