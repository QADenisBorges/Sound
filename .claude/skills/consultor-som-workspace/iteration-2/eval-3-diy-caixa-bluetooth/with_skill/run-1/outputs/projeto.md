# Projeto: Caixa Bluetooth portátil para churrasco (DIY)

Status: em definição (aguardando escolha do woofer / datasheet)

## Resumo
Caixa 2 vias estéreo, dutada, bateria Li-ion 5S (18,5 V nominal), placa TPA3116 com Bluetooth, 2× woofer 6"/6,5" 4 Ω + 2× tweeter domo, crossover passivo 12 dB/oit em ~3 kHz. Gabinete ~52 × 26 × 25 cm externo, dividido em 2 câmaras de ~10 L líquidos. Esperado: ~30–35 W limpos/canal, ~95 dB a 4 m ao ar livre, 3–6 h de autonomia (5S2P).

## Premissas
- Uso: churrasco ao ar livre, 5–20 pessoas; portátil (< ~10 kg).
- Usuário sabe soldar, primeira caixa; sem solda a ponto (bateria em suportes ou pack pronto).
- Orçamento: gastar pouco, priorizando durabilidade.

## Arquitetura
```
Celular ─BT─► TPA3116 (2 canais BTL) ─► Crossover E ─► Woofer E + Tweeter E (invertido)
                                    └─► Crossover D ─► Woofer D + Tweeter D (invertido)
Células 5S2P ─► BMS 5S ─► Fusível 7,5 A ─► Chave ─► Placa (+ voltímetro)
Carregador Li-ion 21 V CC/CV ─► Jack DC ─► BMS
```

## Dimensionamento (principais números)
- Potência (BTL, 4 Ω): P ≈ V²/(2Z). 5S cheia 21 V → teto 55 W, limpo ~33–38 W/canal; nominal ~26–30 W. 4S ~20–25 W; 6S no limite do chip (evitar).
- SPL (89 dB/1W/1m, 30 W, 2 woofers): ~107 dB @1 m; ~95 dB @4 m campo livre.
- Corrente: pico ~4,5 A; média 0,6–1,5 A → fusível 7,5 A, cabo 16 AWG.
- Autonomia (80% da carga): 5S1P ~3 h / 5S2P ~5,9 h / 5S3P ~8,9 h a 15 W médios.
- Caixa: ~10 L líquidos por woofer, Fb ~55 Hz (confirmar no WinISD com T/S). Duto 5 cm × ~15,8 cm (9 m/s) ou 4 cm × ~9,5 cm (14 m/s). Woofer com Qts > 0,6 → selada 8–10 L.
- Crossover 2ª ordem Butterworth 3 kHz / 4 Ω: L 0,33 mH (ar), C 10 µF (poliéster/PP). Tweeter invertido. L-pad −3 dB: 1,2 Ω série + 10 Ω paralelo (10 W).

## Opções de orçamento (R$, estimativa sem pesquisa de preço atual)
| Opção | Resumo | Total |
|---|---|---|
| Econômico | TPA3116 BT + kit 2 vias automotivo 6" (crossover incluso), 5S1P, MDF, provável selada | 565–980 |
| Equilibrado (recomendado) | TPA3116 BT + woofers com T/S + tweeters domo + crossover DIY, 5S2P, compensado, dutada | 865–1.600 |
| Caprichado | Placa BT + DSP ADAU1701 + 4 canais (ativo, subsônico), woofers/tweeters melhores, 5S3P | 1.590–2.955 |

## Riscos principais
- Nunca unir negativos dos canais nem ligar ao GND (saída BTL).
- Células genuínas, mesmo lote, BMS com balanceamento, não soldar com ferro, não deixar no sol, parar em ~17 V.
- Ganho da placa baixo (20–26 dB), evitar clipping e reforço de grave < 50 Hz.
- Eletrônica em compartimento vedado; proteção contra umidade (compensado/selagem).

## Próximos passos
1. Escolher woofer e obter datasheet (Fs, Qts, Vas, Xmax, sensibilidade).
2. Simular no WinISD; fechar volume, sintonia e duto.
3. Comprar itens do AliExpress (placa, BMS, componentes) e células no Brasil.
4. Testar tudo na bancada antes de fechar a caixa.
5. Montar gabinete, vedar, ajustar L-pad de ouvido.

## Histórico de decisões
- 2026-09-22 — Bateria 5S em vez de 4S/6S — quase o dobro de potência da 4S e folga para o limite de 26 V do TPA3116 e capacitores de 25 V da placa.
- 2026-09-22 — Dois tweeters (um por canal) — saída BTL não permite compartilhar um tweeter entre canais sem queimar a placa.
- 2026-09-22 — Falantes de 4 Ω — tensão de bateria limitada; 8 Ω entregaria metade da potência.
- 2026-09-22 — Caixa dutada com câmaras separadas (~10 L cada, Fb ~55 Hz) — mais grave com pouca potência; divisória também trava o gabinete. Selada se o woofer tiver Qts alto.
- 2026-09-22 — Recomendado: opção Equilibrada — pendente confirmação do usuário.
