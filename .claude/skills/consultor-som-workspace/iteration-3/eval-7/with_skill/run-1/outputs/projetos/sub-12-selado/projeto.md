# Projeto: Sub 12" selado — hatch compacto, grave limpo

## Resumo
Subwoofer 12" DVC 2+2 Ω ligado em série (4 Ω) em caixa selada de 38 L líquidos (Qtc 0,72, simulado no WinISD), alimentado por módulo mono classe D de 600 W RMS em 4 Ω, com rádio original e elétrica original do carro. Arquitetura coerente com o objetivo declarado (música do dia a dia, grave limpo e definido, sem foco em SPL): carga de 4 Ω folgada para o módulo, caixa selada aproveitando o ganho de cabine de um hatch, e potência dentro do que a elétrica original suporta.

## Premissas
- Sub suporta ≥ 600 W RMS (não informado). Se for menor, a tensão alvo do ganho cai para √(RMS_sub × 4).
- Os 600 W RMS do módulo são declarados a 14,4 V (padrão das marcas nacionais); a 12,6 V entrega ~460 W. Se a spec for medida a 12,6 V, o alvo de 49 V vale também com motor desligado.
- Cabo é cobre OFC de verdade (não CCA). Negativo curto (≤ 0,5 m) no chassi, mesma bitola do positivo.
- Eficiência do módulo entre 75 e 80 % (classe D).

## Arquitetura
```
Rádio original → (entrada de alto nível ou conversor RCA) → módulo mono classe D 600 W @ 4 Ω → sub 12" DVC 2+2 Ω em série (4 Ω) → caixa selada 38 L líquidos, Qtc 0,72 → porta-malas do hatch (ganho de cabine)

Elétrica: bateria original → fusível 100 A (midi/mini-ANL) a 30 cm da bateria → 5 m de cabo 21 mm² OFC → módulo; negativo 21 mm² curto no chassi lixado.
```

## Dimensionamento
| Conta | Resultado | Interpretação |
|---|---|---|
| Impedância: 2 + 2 Ω em série | 4 Ω | Carga mais folgada para o módulo; menos corrente, melhor fator de amortecimento — coerente com grave limpo. |
| Corrente máxima: 600 / (12,6 × 0,8) | ~60 A (64 A com η = 0,75; 52 A a 14,4 V) | Pico contínuo em senoide; com música a média é 8–20 A. Cabo e fusível se dimensionam pelo pico. |
| Queda no cabo: 0,0172 × 5 × 60 / 21,2 | ~0,24 V (0,29 V com 5,5 m e 64 A) | Limite prático 0,5 V → metade do limite. Área mínima por queda: 11–13 mm²; 21 mm² é folgado. |
| Fusível vs. cabo | 64 A < 100 A < ~125 A | 100 A protege o cabo de 21 mm² OFC e não abre em pico. 80 A também serviria. Acima de 125 A, não. |
| Ganho: √(600 × 4) | 49,0 V AC | Regular com motor ligado, tom senoidal 40 Hz a 0 dB, falante desconectado, bass boost/EQ desligados. |
| Se o sub for 400 W RMS: √(400 × 4) | 40,0 V AC | O alvo é sempre o menor RMS entre módulo e falante. |
| Módulo a 12,6 V se spec é 14,4 V: 600 × (12,6/14,4)² | ~460 W → 43 V limpos | Com motor desligado, 49 V só se alcança em clipping. |

Elétrica original: ~60 A de pico em um sistema de 600 W está dentro da regra prática (até ~800–1000 W RMS o alternador original costuma aguentar com bons cabos). Big 3 é melhoria opcional, não obrigatória.

## Riscos e cuidados
- Se o cabo for CCA, a queda sobe para ~0,40 V e o fusível deve cair para ~80 A (ou subir a bitola).
- Porta-fusível AGU de vidro em 100 A tende a esquentar no contato — usar midi/mini-ANL.
- Regular ganho com motor desligado pode levar o módulo ao clipping tentando alcançar 49 V; o multímetro não mostra clipping.
- Aterramento em ponto pintado → ruído de alternador; lixar até o metal.
- RCA passando junto do cabo de força → ruído; passar em lados opostos do carro.
- Fusível de bordo do módulo é o que protege o módulo; o de 100 A protege o cabo — os dois são necessários.

## Próximos passos
1. Confirmar o RMS do sub e a tensão em que o módulo declara os 600 W (datasheet/manual).
2. Instalar cabo + fusível; conferir tensão na entrada do módulo com motor ligado e sub tocando alto (não deve cair abaixo de ~12 V).
3. Regular ganho: motor ligado, tom 40 Hz a 0 dB, fonte em ~75–85 % do volume, falante desconectado, alvo 49 V (ou √(RMS_sub × 4)).
4. Filtro passa-baixa em ~80 Hz para casar com as portas; subsônico dispensável em selada (pode deixar em ~20 Hz por segurança).

## Histórico de decisões
- 2026-09-24 — Projeto fechado pelo usuário: 12" DVC 2+2 Ω em série (4 Ω), módulo mono classe D 600 W RMS @ 4 Ω, caixa selada 38 L líquidos Qtc 0,72 (WinISD), cabo 21 mm² OFC com fusível 100 A a 30 cm da bateria, ganho por multímetro em 49 V. Motivo: grave limpo para música no dia a dia em hatch compacto com elétrica original.
- 2026-09-24 — Conferido a pedido: fusível de 100 A está correto para 21 mm² OFC (janela 64–125 A) e 5 m de cabo dão ~0,24 V de queda (limite 0,5 V). Premissas registradas: sub ≥ 600 W RMS; regular ganho com motor ligado.
