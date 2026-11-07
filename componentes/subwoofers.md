# Subwoofers disponíveis

## Protech Speakers — provável **Protech Light 8"** (em caixa pronta)
Identificado em 2026-09-25 pela logo no cone (fotos em `componentes existentes/Subwoofer Protech Speakers/`) + informação do usuário (8", 450 W, 4 Ω). Caixa não foi aberta; modelo exato não confirmado.

Specs do Protech Light 8" (lojas; ficha completa do fabricante não encontrada):
| Item | Valor |
|---|---|
| Potência | 450 W RMS (900 W "musical") |
| Impedância | Existe em **bobina simples 4 Ω** ou **dupla 4+4 Ω** |
| Sensibilidade | 84 dB |
| Fs | 46 Hz |
| Xmax | 8 mm |
| Construção | Carcaça de aço estampado, cone de celulose, suspensão de espuma de alta densidade costurada |
| Qts / Vas / caixa recomendada | Não encontrados |

**Conferir com o multímetro** (resistência nos fios que saem da caixa, sub desligado do módulo):
- ~3–3,6 Ω → 4 Ω → ponte CH3/CH4 liberada (400 W, alvo de 40 V).
- ~6,5–7,2 Ω → dupla em série (8 Ω) → ponte ainda funciona (~264 W).
- ~1,5–1,8 Ω → dupla em paralelo (2 Ω) → **não pode ir em ponte**: usar um canal só (200 W @ 2 Ω) ou religar as bobinas em série.

Caixa: pronta, cinza, com um painel escuro ao lado (tipo, dutada ou selada, ainda desconhecido). O painel ocupa metade da frente, lugar típico de duto em caixa pronta de carro.
**Como descobrir** (guia do 2.1, passo 3.13): varredura lenta de 25 a 60 Hz em volume baixo, lanterna no cone. Se o cone quase parar numa frequência, há duto e ela é a Fb. Subsônico: selada → 25 Hz; com duto → ~0,75–0,8 × Fb, 24 dB/oit; sem conclusão → 30 Hz, 24 dB/oit.

**05/11/2026 (usuário):** bobina **dupla**, caixa **dutada**, impedância nos terminais ainda não medida (os 2 Ω relatados eram do tweeter).

**Caixa medida (14/10/2026, outra conversa; fotos em `projetos/home-theater-2.1/fotos/2026-10-14-medicoes/` e `2026-10-27-duto-sub/`):** externa 26 × 26,5 × 58 cm, MDF 15 mm, ≈28 L líquidos; duto redondo de ≈7 cm × ≈10 cm no topo → **Fb calculada ≈52 Hz** (confirmar na varredura). Subsônico recomendado: **42 Hz, 24 dB/oit**.

**Caixa ideal (estudo de 07/11/2026):** Qts/Vas oficiais não existem publicados; simulação dutada (modelo de Small, QL 7) em 3 cenários de T/S estimados — Fs 46 Hz com Qts 0,45/Vas 4,5 L, Qts 0,50/Vas 6 L, Qts 0,55/Vas 8 L (faixa tirada de um post de fórum do Light 8" 420 W: Qts 0,49, Vas 4,65 L, e de um 8" 450 W similar da FB Audio: Qts 0,52–0,58, Vas 5,7–6,1 L).
- Caixa atual (28 L, Fb 52 Hz): pico de **+6 a +8 dB em 50–60 Hz** e −10 dB em 35 Hz nos três cenários → grave "de uma nota só", principalmente no carro (o ganho de cabine soma ainda mais).
- **Recomendado: manter os 28 L e rebaixar a sintonia para ~36 Hz** — duto de 7 cm com ~27 cm de comprimento (calculadora, 27 L líquidos descontado o duto); curva 90° de PVC se não couber reto (manter ≥7 cm de folga da parede oposta). Resultado: no máximo +1,9 a +2,7 dB em 35–40 Hz, −3 dB ≈ 31 Hz nos três cenários. Velocidade no duto ≈ 11 m/s (OK). Duto de 5 cm não serve (≈21 m/s, sopra).
- Caixa nova, se for construir: **18–20 L líquidos, Fb 36 Hz** → a mais plana nos três cenários (±1 dB até 35 Hz).
- Selada fica pequena (5–12 L) e perde ~6 dB em 50 Hz frente à dutada; só vale se o espaço for crítico.
- Sem subsônico na cadeia (SD800.4 só tem LP/F/HP): abaixo de ~30 Hz o cone fica solto; não usar reforço de grave e baixar o volume se ouvir batida/estalo.
- **Duto novo — cálculo com as medidas das fotos (07/11/2026):** caixa deitada (58 de largura × 26,5 de altura × 26 de profundidade; alto-falante na metade esquerda da frente, painel cego na direita), duto no tampo → eixo vertical, altura interna ≈23,5 cm. Duto de 28 cm não cabe reto: **PVC esgoto 75 mm (≈72 mm internos) com joelho de 90°**: trecho vertical ≈20,5 cm na linha de centro (do tampo, por fora, até o eixo do trecho deitado) + trecho deitado ≈7,5 cm a partir do centro do joelho, apontado para o meio da caixa (comprido), boca com ≥7 cm livres de qualquer parede e longe do ímã. Centro do tubo deitado a ~4,5 cm do fundo interno. Total na linha de centro ≈28 cm → Fb ≈36 Hz. Cortar com ~30 cm e acertar na varredura.
- **Correção (07/11/2026, fotos do usuário):** o duto **não** está no tampo: fica na **lateral direita** (oposta ao falante), deitado ao longo do comprimento (~55 cm internos). Frente da metade direita é inclinada (painel escuro). Duto novo: **PVC 75 mm (Ø int. ~7,2 cm) reto, ~30 cm** de comprimento (27 L líquidos; com 25 L seriam ~32 cm) → Fb ≈36 Hz. Sem joelho. Cortar com 33 cm e encurtar na varredura. Boca a ~5–8 cm do ímã: conferir com o falante fora; se ficar <5 cm, cotovelo de 45° na ponta desviando do ímã. Substitui o desenho com joelho de 90°.
