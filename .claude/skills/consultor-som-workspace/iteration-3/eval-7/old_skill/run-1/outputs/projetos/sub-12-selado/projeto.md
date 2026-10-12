# Projeto: Sub 12" selado — grave limpo no carro

Status: fechado pelo usuário. Última revisão em 2026-09-24: fusível e queda de tensão no cabo de alimentação conferidos (nova rodada).

## Resumo

Sub 12" DVC 2+2 Ω ligado em série (4 Ω), módulo mono classe D de 600 W RMS em 4 Ω, caixa selada de 38 L líquidos (Qtc 0,72 no WinISD), alimentação por 21 mm² OFC (4 AWG) com 5 m de positivo e fusível de 100 A a 30 cm da bateria. Ganho regulado por multímetro. Objetivo inferido: grave limpo e controlado (selada com Qtc ~0,7), não SPL.

## Premissas

- Eficiência do módulo classe D entre 75 e 85 %.
- Tensão de 12,6 V (motor desligado) a 14,4 V (motor ligado); 11,5 V considerado como pior caso sob carga.
- 5 m é só o positivo; negativo curto (≤ 50 cm) no chassi lixado, mesma bitola.
- Fusíveis internos do módulo somam ≤ 100 A (não confirmado).
- Cabo OFC verdadeiro (não CCA).
- RMS do sub e tensão de medição dos 600 W do módulo não informados (pendências para o ganho).

## Arquitetura

Fonte → filtro passa-baixa do módulo (~80 Hz) → módulo mono classe D 600 W @ 4 Ω → sub 12" DVC 2+2 Ω em série (4 Ω) → caixa selada 38 L → cabine (ganho de cabine reforça abaixo de ~50 Hz)

Elétrica: bateria (+) → fusível 100 A (ANL / mini-ANL / MIDI, a 30 cm) → 21 mm² OFC, 5 m → módulo. Módulo (−) → 21 mm² curto → chassi lixado.

## Dimensionamento

Impedância: 2 + 2 Ω em série = 4,0 Ω (calc_som.py impedancia --serie 2 2).

Corrente máxima contínua: I = P / (V × η)
- 600 / (14,4 × 0,80) = 52 A
- 600 / (12,6 × 0,80) = 59,5 A
- 600 / (12,6 × 0,75) = 63,5 A (pior caso realista)
- 600 / (11,5 × 0,75) = ~70 A (bateria fraca sob carga)
- Média com música: 7–20 A.

Fusível de 100 A:
- ≥ 63,5–70 A (folga 1,4–1,6×) — não abre com pico musical nem no surto de ligar.
- ≤ ~125–150 A (capacidade de 4 AWG pelas tabelas de som automotivo) — protege o cabo.
- Cruzamento: calc_som.py cabo --corrente 100 --comprimento 5 --queda 0.5 → 17,2 mm² → 21,2 mm² comercial. Mesmo conduzindo os 100 A do fusível, o cabo fica dentro do limite de queda.
- Faixa aceitável para este projeto: 80–125 A. 100 A mantido.
- Porta-fusível: ANL / mini-ANL (AFS) / MIDI com terminal crimpado; não usar vidro (AGU).

Queda em 5 m de 21 mm² OFC: R = 0,0172 × 5 / 21 = 4,1 mΩ
- 52 A → 0,21 V | 59,5 A → 0,24 V | 63,5 A → 0,26 V | 70 A → 0,29 V | 100 A → 0,41 V
- Limite: 0,5 V. Cabo suporta ~122 A em 5 m dentro do limite.
- Mínimo pela calculadora (63,5 A / 5 m / 0,5 V): 10,9 mm² → 16 mm² comercial. 21 mm² fica uma bitola acima do mínimo.
- Negativo de 1 m (6 m de circuito): 0,29 V — ok. Negativo até a bateria (10 m): 0,49 V — no limite, pediria 25 mm²; evitar.
- Se CCA: 0,40 V a 59,5 A; 0,67 V a 100 A (não atende).

Ganho: V = √(P × R) = √(600 × 4) = 49,0 V AC — válido só se o sub aguenta 600 W RMS e o módulo entrega 600 W na tensão em que for regulado.
- Sub de 400 W RMS → alvo 40,0 V.
- Se os 600 W forem a 14,4 V, a 12,6 V o módulo entrega ~460 W → 42,9 V. Regular com motor ligado ou usar o alvo menor.

## Opções de orçamento

Não aplicável — componentes principais já escolhidos pelo usuário. Itens que ainda faltam listar: porta-fusível ANL/mini-ANL/MIDI, terminais crimpados, cabo remote, cabo RCA ou entrada de alto nível.

## Onde economizar / onde não economizar

- Não economizar: cabo OFC real, porta-fusível de qualidade, terminais crimpados, ponto de terra bem preparado.
- Pode economizar: caixa selada é tolerante — MDF 15/18 mm bem colado e vedado resolve; não precisa de acabamento caro para funcionar.

## Riscos e cuidados

- Regular ganho em 49 V sem confirmar RMS do sub e tensão de teste → clipping ou excesso de potência no sub.
- Cabo "OFC" que na verdade é CCA → queda 60 % maior; conferir no corte (miolo cor de cobre × prateado).
- Terra em ponto pintado → ruído de alternador.
- RCA passando junto do cabo de força → ruído.
- Porta-fusível de vidro (AGU) em 100 A → aquecimento e mau contato.
- Bass boost ligado durante a regulagem → alvo falso.

## Próximos passos

1. Confirmar RMS do sub e a tensão em que o fabricante mediu os 600 W → fixar o alvo do ganho (49 V, 42,9 V ou pelo RMS do sub).
2. Conferir os fusíveis internos do módulo (soma ≤ 100 A) ou o fusível externo indicado no manual.
3. Conferir se o cabo é OFC de verdade (corte de uma ponta).
4. Instalar; com tom de teste e motor ligado, medir tensão nos bornes do módulo: esperar ≥ 13,5 V (queda do cabo ~0,25 V).
5. Regular ganho: bass boost/loudness/EQ desligados, LPF ~80 Hz, tom de 40 Hz a 0 dB, fonte em ~75–85 %, sub desconectado, multímetro em V AC.

## Histórico de decisões

- 2026-09-23 — Usuário fechou os componentes (sub 12" DVC 2+2 em série, módulo mono 600 W @ 4 Ω, selada 38 L Qtc 0,72, 21 mm² OFC 5 m, fusível 100 A a 30 cm). Por quê: grave limpo em caixa selada, módulo casado com o sub em 4 Ω.
- 2026-09-23 — Fusível de 100 A conferido e mantido. Por quê: ≥ corrente máxima (~1,5×), ≤ capacidade do 21 mm² (~125–150 A), distância de 30 cm dentro do limite.
- 2026-09-23 — Cabo 21 mm² OFC / 5 m conferido e mantido. Por quê: queda de 0,24 V a 59,5 A (limite 0,5 V); mínimo seria 16 mm², 21 mm² dá folga.
- 2026-09-24 — Nova rodada de conferência a pedido do usuário; contas refeitas com a calculadora. Confirmado: fusível 100 A (faixa 80–125 A) e cabo 21 mm² (0,24–0,26 V no pior caso, 0,41 V mesmo a 100 A). Acrescentado: cruzamento fusível × cabo pela calculadora, cenário de negativo longo (10 m → 0,49 V, evitar) e alerta de CCA.
- 2026-09-24 — Alvo de ganho de 49 V: conta correta, mas mantido como pendência até confirmar RMS do sub e tensão de medição do módulo (alternativas: 40 V para sub de 400 W; 42,9 V se os 600 W forem a 14,4 V e a regulagem for com motor desligado).
