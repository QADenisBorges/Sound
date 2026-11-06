# Alto-falantes (médios / full-range / coaxiais)

## Selenium (JBL) 6TR4A — triaxial 6", par (já possui, estava no carro)
Ficha oficial Selenium "Multi System", rev. 00 de 03/2006 (1ª geração) → `componentes/manuais/Selenium_6TR4A_datasheet.pdf`
(origem: lautsprechershop.de/pdf/selenium/selenium_6tr4a.pdf, baixado em 2026-10-05).

| Parâmetro | Valor |
|---|---|
| Impedância | 4 Ω (mín. 3,89 Ω em 244 Hz); Re 3,72 Ω |
| Potência | **60 W AES (RMS)**, 120 W "max" |
| Sensibilidade | 87 dB @ 2,0 V/1 m (2,0 V em 4 Ω ≈ 1 W), média 60 Hz–20 kHz |
| Resposta (−10 dB) | 60 Hz – 20 kHz |
| Fs / Qts / Qes / Qms | **69 Hz / 1,05 / 1,49 / 3,53** (tolerância ±17%) |
| Vas | **12,53 L** |
| Sd / Xmax / Vd | 137 cm² / **1,75 mm** (10% dist.) / 24 cm³; Xlim (dano) 7 mm |
| Bl / Mms / Cms | 3,58 T·m / 11,3 g / 470 µm/N |
| Bobina | 31,7 mm, CCAW; ímã ferrite 85 × 15 mm (340 g) |
| Tweeters | dinâmico (domo PEI) + piezoelétrico |
| Volume deslocado | 0,38 L |
| Montagem | Ø externo 166 mm · furo 147 mm (frontal) / 145 mm (traseira) · 4 furos Ø 4 mm em círculo de 156 mm · **profundidade 73 mm** |

Leitura: Qts 1,05 = falante feito para porta de carro (baffle infinito). Em caixa selada o Qtc sobe acima de 1,3 → caixa
precisa ser **grande** (12–20 L) e usada com passa-alta em 90–100 Hz. Caixa pequena (< 8 L) dá "corcova" de +4 a +7 dB
em 120–160 Hz. Xmax é atingido com ~6–8 W em 90–110 Hz (Xlim só em ~60 W+). Simulação: `projetos/home-theater-5.1/simulacao-6tr4a.py`.
Unidades com ~20 anos: conferir Re (~3,7–4 Ω no multímetro), borda de borracha sem rachadura e cone sem raspar.

## JBL 4TRMS80 — triaxial 4", par (comprado; papel no projeto a confirmar)
Ficha técnica impressa que veio na caixa (linha Multi System, Harman do Brasil), fotografada em 08/10/2026 → `componentes existentes/JBL 80W 4 ohms triaxial/`.
Unidades genuínas: etiqueta "4TRMS80 · 80 W RMS · 4 ohms · 06/11/25 · Ind. Brasileira", caixa com código 28085198.

| Parâmetro | Valor |
|---|---|
| Impedância / Re | 4 Ω / 3,4 Ω |
| Potência | 80 W RMS, 160 W pico |
| Sensibilidade | 87 dB (1 W/1 m) declarado; pelo η0 de 0,23 % dá ~85,8 dB |
| Resposta (−10 dB) | 88 Hz – 20 kHz |
| Fs / Qts / Qes / Qms | **98 Hz / 0,65 / 0,81 / 3,19** |
| Vas | 2,06 L |
| Sd / Xmax / Vd | 64 cm² / **1,75 mm** / 10,5 cm³ |
| Bl | 4,1 T·m |
| Bobina / ímã | 31,7 mm / 680 g |
| **Corte mínimo recomendado** | **100 Hz a 24 dB/oit** (ficha) |
| Montagem | A 102 mm · B 118 mm (flange) · **furo E 93 mm** · **profundidade D 68 mm** · furação 3,2 e 5 × 6,3 mm · ímã F 92 mm |
| Peso | 1,744 kg (par) |

Na BS-369 (~3,5 L selada): Fc ~124 Hz, Qtc ~0,81–0,90 (a ficha traz Bl 4,1 e Qes 0,81, que não fecham entre si: pelo Bl, o Qes daria 0,92).
Excursão **de pico** (Xmax é pico), refeita na revisão técnica de 09/10/2026 com `calc_som.py excursao`:
sem filtro, 0,84 mm a 1 W (Xmax com ~4,4 W); **com BW2 em 120 Hz**, 0,50 mm a 1 W perto de 122 Hz (Xmax com **~12 W**);
com LR4 em 100 Hz, Xmax com ~13–14 W. A conta anterior (24 W e 27 W) comparou excursão em valor eficaz com o Xmax e dobrou a
potência segura. Decisão: alvo de ganho de **11 V (~30 W)**; o pior caso (tom contínuo no máximo perto de 122 Hz) fica em ~2,8 mm.
O curso máximo mecânico (Xmech) não é publicado.

## Snake ESV 200 — médio-grave, par (usuário possui, 05/11/2026)
Anúncios: 200 W RMS, 4 Ω. **6"** (confirmado pelo usuário em 05/11/2026). Ficha oficial e parâmetros T/S não encontrados.
Outras conversas: médio-grave pro com ogiva cromada; lojas citam 92–95 dB, **Fs 94–133 Hz**, resposta ~80 Hz–3/6 kHz (dados divergentes). Em 05/11 o usuário também escreveu "ERV 200": conferir a grafia na etiqueta do ímã. Com Fs ~100 Hz, passa-alta em **~100 Hz** (sub cruzando aí).

## Bravox — tweeter do kit CS50BK + divisor HP5, par (possui **só os tweeters e os divisores**)
Vieram de um kit Bravox CS50BK (linha Black, 5") comprado em 2023 por ~R$ 350; os woofers do kit **não estão com o usuário**.
Identificado em 01/11/2026 pelas peças (fotos com régua) e pelas fotos do anúncio do kit (mesmo tweeter e mesmo divisor em tubo).
Sem ficha oficial da Bravox: dados de lojas, com a origem indicada, e medidas pelas fotos.
Fotos (peças, medidas com régua, divisor e anúncio do kit usado como referência) → `componentes existentes/Tweeter Bravox CS50BK/`.

| Item | Valor | Origem |
|---|---|---|
| Tipo | domo de 1" (25 mm), copo traseiro + anel de embutir | fotos |
| Impedância | 4 Ω nominal (Re esperado ~3–3,5 Ω, a medir) | loja (CS50BK) |
| Sensibilidade | 89 dB @ 2,83 V/1 m | loja (CS50BK) |
| Fs (ressonância) | **2.500 Hz** | loja (CS50BK) |
| Diafragma / ímã | Mylar / neodímio | loja (CS60B, mesma linha; não confirmado no CS50BK) |
| Potência / resposta | 30 W RMS / 5–22 kHz | loja (CS60BK, mesma linha; não confirmado no CS50BK) |
| Medidas | frente Ø ~29–30 mm; anel de embutir Ø ext. ~43–44 mm, furo ~31–32 mm; altura não medida | fotos (± 1–2 mm) |
| Etiqueta traseira | "3029-1 0521" (código interno + 05/2021, provável) | peça |
| Divisor (tubo IN/OUT) | "HP5 10/2021": passa-alta **5 kHz**, Bessel 12 dB/oitava, Polyswitch em série, chave **0 dB / 3 dB** | loja (CS50BK) + peça |

Não é o TD50U (Ø 41,6 mm) nem o Neo Point avulso (vem sem divisor). Com DSP: corte ≥ 4–5 kHz (Fs 2,5 kHz), manter o tubo HP5
em série como proteção e limitar a saída do amplificador (30 W em 4 Ω ≈ 11 V RMS).

**Uso previsto (01/11/2026):** entrar no home theater com o processador de 2 entradas × 8 saídas (já decidido) e um módulo
de 2 canais próprio (4 Ω, 50–100 W RMS reais, ruído baixo, fusível de 5–10 A na BOB 60A). O SD800.4 continua com JBL + sub.
Mapa: saídas 1/2 JBL · 3/4 tweeters (HP5 em série) · 5+6 sub em ponte · 7/8 livres. Duas memórias para comparar:
- **Ativo** (preferida): JBL com BW2 120 Hz + passa-baixa LR24 5 kHz (cala também os tweeters internos da triaxial); tweeter LR24 5 kHz, nível inicial −3 dB.
- **Reforço**: JBL sem passa-baixa; tweeter LR24 8 kHz, nível inicial −9 dB.
Fase do tweeter pelo tom de 5 kHz (0°/180°, fica a que soma mais), atraso pela distância, limitador em 11 V no fio do tweeter.

**Resultado esperado:** integração melhora de leve (alinhamento de tempo/nível e posição perto da tela/altura do ouvido
deixam o palco mais firme e o agudo mais definido); clareza de diálogo não muda, porque o corte ≥ 5 kHz deixa a voz na JBL;
imersão praticamente não muda (vem de som lateral/traseiro, saídas 7/8). Em ganho para filme: sub + EQ da sala > laterais/traseiras > tweeter.

**Carro (05/11/2026):** Re medido pelo usuário ≈ 1,9 Ω (3,2 Ω − 1,3 Ω das pontas) — não bate com os 4 Ω nominais do CS50BK (Re esperado ~3–3,5 Ω); remedir com o multímetro com bateria boa. O uso no home theater acima (01/11) conflita com o plano do carro — a confirmar com o usuário.
