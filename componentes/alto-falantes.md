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

## Regras rápidas de altura (volume percebido)
- Sensação de altura ≈ 2^(ΔdB/10): +1 dB quase imperceptível, +3 dB ≈ +23 % (diferença clara), +6 dB ≈ +52 %, **+10 dB ≈ 2×**. Pressão sonora (medidor) = 10^(ΔdB/20); potência = 10^(ΔdB/10) (+3 dB = 2× a potência).
- Segunda caixa igual tocando junto: +3 dB em conteúdo diferente nos dois lados, até +6 dB no que é igual nos dois (voz, bumbo, baixo); música típica ≈ +4 dB.
- Apontar o falante para o ouvido (on-axis): 0 a +3 dB nos agudos — falantes coaxiais/triaxiais são direcionais acima de alguns kHz.
- Com limitador no teto, subir o nível antes dele aumenta a altura média (comprime picos) sem aumentar a potência de pico. Trocar um corte de EQ por um reforço na presença (~3 kHz) aumenta a altura percebida sem gastar grave.
