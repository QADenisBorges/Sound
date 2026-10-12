# Projeto — Sub 12" selado (grave limpo, hatch compacto)

## Resumo
Subwoofer 12" DVC 2+2 Ω ligado em série (4 Ω), módulo mono classe D 600 W RMS em 4 Ω, caixa selada 38 L líquidos (Qtc 0,72, WinISD). Alimentação: 21 mm² OFC, fusível 100 A a 30 cm da bateria, negativo curto no chassi. Objetivo declarado: grave limpo e definido para música no dia a dia, sem SPL.

## Premissas
- Módulo entrega 600 W RMS em 4 Ω — conferir no manual em qual tensão (14,4 V ou 12,6 V). Se 14,4 V: ~460 W a 12,6 V (teto ~43 V) e ~550 W a 13,8 V (teto ~47 V).
- Sub aguenta ≥ 600 W RMS. Se for menos, alvo de ganho = √(P_sub × 4).
- Os 5 m de cabo são o positivo; negativo ≤ 1 m, mesma bitola, chassi lixado.
- Cabo é OFC de verdade (se CCA, teto de fusível cai para ~80 A e bitola sobe um degrau).
- Elétrica original de hatch compacto; rádio original.

## Arquitetura
Rádio original → entrada alto nível (ou LOC) → módulo mono classe D 600 W @ 4 Ω → sub 12" DVC 2+2 Ω em série (4 Ω) → caixa selada 38 L (Qtc 0,72) → cabine de hatch (ganho de cabine ajuda a selada).
Elétrica: bateria → fusível 100 A (30 cm) → 21 mm² OFC (5 m) → módulo; negativo 21 mm² curto no chassi.

## Dimensionamento (calc_som.py)
- Impedância: série 2+2 = 4,00 Ω.
- Corrente máxima: 600 / (12,6 × 0,8) = 59,5 A; com eficiência 0,75 → 63,5 A. Média com música: 7–20 A.
- Fusível: janela ≥ 64 A (sistema) e ≤ 125 A (21 mm² OFC) → 100 A confere (80 A também serviria).
- Queda em 21,2 mm², 5 m, 60–64 A: 0,24–0,26 V (~2 % de 12,6 V) — dentro do limite de 0,5 V. Se o circuito virar 10 m (negativo até a bateria): ~0,5 V, no limite.
- Tensão alvo de ganho: √(600 × 4) = 49,0 V AC (tom 40 Hz, falante desconectado). Alternativas: 42,9 V (460 W), 46,9 V (550 W), 40,0 V (sub 400 W), 44,7 V (sub 500 W).

## Riscos e cuidados
- Regular ganho com motor desligado num módulo medido a 14,4 V: não chega a 49 V e clipa. Sinal: tensão para de subir com o ganho → recuar.
- Cabo CCA vendido como OFC.
- Negativo longo ou em ponto pintado → queda e ruído.
- Selada não precisa de subsônico; bass boost desligado.

## Próximos passos
1. Conferir no manual a tensão de medição do RMS do módulo e o RMS real do sub → fixar a tensão alvo.
2. Comprar cabo (conferir se é cobre até o miolo), porta-fusível e fusível 100 A; instalar a ≤ 30 cm da bateria.
3. Regular ganho pelo multímetro conforme a tensão alvo definida; verificar se a tensão responde ao ganho até o alvo.
4. (Opcional) Conferir 38 L / Qtc 0,72 contra os T/S do falante no WinISD.

## Histórico de decisões
- 2026-09-25 — Projeto fechado pelo usuário (série 4 Ω, 600 W classe D, selada 38 L Qtc 0,72, 21 mm² OFC, fusível 100 A a 30 cm, ganho por multímetro). Conferido: fusível de 100 A dentro da janela 64–125 A; queda em 5 m = 0,24–0,26 V, aceitável. Alerta dado: alvo de 49 V só vale se o módulo entregar 600 W na tensão de medição; conferir manual. Nenhuma decisão consciente contra recomendação.
