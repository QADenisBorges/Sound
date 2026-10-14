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
**Duto (medido em 14/10/2026, fotos em `projetos/home-theater-2.1/fotos/2026-10-14-medicoes/`):** no topo da caixa, diâmetro interno ≈7 cm (provável 3"), flare externo ≈9–9,5 cm, comprimento ≈10 cm (confirmado pelo usuário pelas fotos). Caixa externa 26 × 26,5 × 58 cm (A × L × C, 14/10) MDF de 15 mm (confirmado) → ≈28 L líquidos (já descontados sub, duto e reforços) → **Fb calculada ≈52 Hz**. Confirmar no teste da instalação (passo 5.3). Subsônico: **42 Hz, 24 dB/oit**.
**Como descobrir** (guia do 2.1, passo 3.13): varredura lenta de 25 a 60 Hz em volume baixo, lanterna no cone. Se o cone quase parar numa frequência, há duto e ela é a Fb. Subsônico: selada → 25 Hz; com duto → ~0,75–0,8 × Fb, 24 dB/oit; sem conclusão → 42 Hz, 24 dB/oit (pela Fb calculada).
