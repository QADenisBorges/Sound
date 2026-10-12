# Projeto: caixa-churrasco — Bluetooth portátil 2×6" + tweeter, bateria, TPA3116

Status: **rascunho v0.1** (2026-09-23) — aguardando escolha do woofer (datasheet com T/S) para fechar tipo de caixa.

## Resumo
Caixa estéreo de 2 vias (woofer 6" 4 Ω + tweeter dome 4 Ω por lado, crossover passivo LR2 em 3 kHz), placa TPA3116D2 2×50 W com Bluetooth integrado, pack Li-ion 5S2P (18650) com BMS balanceado, gabinete de compensado 15 mm com três compartimentos (câmara L | eletrônica + bateria | câmara R). Uso: churrasco ao ar livre, 3–6 m, 3–5 h.

## Premissas
- Dois tweeters (um por canal) — TPA3116 é BTL, um tweeter só não pode ser compartilhado pelos dois canais.
- Woofers de 4 Ω (dobro da potência de 8 Ω com a mesma tensão de bateria).
- Sensibilidade ~88 dB/1 W/1 m para woofer e tweeter.
- Peso aceito ~11–13 kg, ~52×33×25 cm ("portátil de alça"). Alternativa leve (2×4"/5", ~6 kg) oferecida.
- Orçamento-alvo: Equilibrado (~R$ 1.000–1.600 com as economias sugeridas).

## Arquitetura
```
Celular ──BT 5.0──► TPA3116D2 2×50 W c/ BT (tipo ZK-502C/502L)
                      canal L (BTL) ──► xover LR2 3 kHz ──► woofer 6" 4 Ω / L-pad + tweeter 4 Ω
                      canal R (BTL) ──► xover LR2 3 kHz ──► woofer 6" 4 Ω / L-pad + tweeter 4 Ω
Elétrica: pack 5S2P ─ BMS 5S ≥ 20 A c/ balanceamento ─ fusível 10 A ─ chave ≥ 10 A ─ placa
          jack DC 5,5×2,1 ─► carregador CC/CV 21,0 V 2 A (pelo BMS); voltímetro no painel
```
- Plano A (dutada, ~11 L líquidos/canal, Fb 55 Hz): se Qts ~0,35–0,5 e Fs ≤ ~65 Hz.
- Plano B (selada, ~8 L/canal): se Qts > 0,5, Fs > 70 Hz ou sem datasheet.

## Dimensionamento (calc_som.py, 2026-09-23)
- Potência TPA3116 em ponte, 4 Ω, teto V²/(2Z) e limpo ~65%:
  - 4S: 16,8→13,2 V → teto 35→22 W, limpo ~23→14 W
  - **5S: 21,0→16,5 V → teto 55→34 W, limpo ~36→22 W** (escolhido)
  - 6S: 25,2→19,8 V → teto 79→49 W, limpo ~52→32 W (só com caps de entrada ≥ 35 V)
  - Chumbo 12 V: 12,6→11,8 V → limpo ~13→11 W
- SPL (88 dB, 2 lados): 30 W/canal → ~106 dB @1 m, ~92 dB @5 m; 18 W → ~90 dB @5 m; 12 W → ~88 dB @5 m.
- Corrente: 66 W @18,5 V, 85% → 4,2 A pico (4,7 A @16,5 V); média música 0,5–1,6 A. Fusível 10 A, fio 1,5 mm².
- Autonomia 5S2P 5 Ah (92 Wh): ~6 h @12 W médios; ~3 h @25 W médios.
- Duto (Plano A): 11 L, 55 Hz, PVC 50 mm (int. 4,68 cm) → 12,1 cm, ~10 m/s. Alternativas: 60 Hz → 9,6 cm; PVC 40 mm → 7,3 cm (16 m/s, limite); PVC 75 mm → 31 cm (não cabe).
- Medidas: câmaras internas 18×30×22 cm (11,9 L bruto); compartimento central 10×30×22; externo 52×33×25 cm em 15 mm. Plano B: câmaras 16×26×20 (8,3 L), externo ~48×29×23.
- Lista de corte (15 mm): frente 52×33; fundo 2× 20,25×33 (colados) + 1× 11,5×33 (tampa parafusada da eletrônica, sobre ripas, fita EVA); tampa/base 2× 49×22; laterais 2× 33×22; divisórias 2× 30×22; 1 travamento por câmara.
- Crossover LR2 3 kHz 4 Ω: woofer L série 0,42 mH (0,43/0,47 comercial) + C paralelo 6,8 µF; tweeter C série 6,8 µF + L paralelo 0,42 mH, **tweeter invertido**. L-pad −3 dB/4 Ω: 1,2 Ω série + 10 Ω paralelo (−6 dB: 2,0 + 4,0 Ω). Econômico: 1ª ordem, cap 10 µF no tweeter (~4 kHz), polaridade normal.
- Beaming 6" (13 cm): ~2,6 kHz → corte em 3 kHz.
- Cabo de falante interno: 0,8–1,5 mm².

## Opções de orçamento (estimativas set/2026, sem pesquisa de preço)
| Item | Econômico | Equilibrado | Caprichado |
|---|---|---|---|
| 2× woofer 6" 4 Ω c/ T/S | 120–180 | 240–360 | 400–600 |
| 2× tweeter dome 4 Ω | 30–50 | 70–120 | 160–300 |
| 2× crossover | 15–30 (1ª ordem) | 60–120 (LR2) | 120–200 |
| Placa TPA3116 + BT | 45–80 (Ali) | 80–130 (nacional) | 120–200 (BT QCC3034 separado) |
| Bateria + carregador | 130–200 (chumbo 12 V 7 Ah) | 290–480 (5S2P + BMS + 21 V) | 450–700 (6S2P/5S3P células legítimas) |
| Elétrica (chave, fusível, jack, voltímetro, fio) | 40–70 | 60–100 | 100–160 |
| Madeira | 60–110 (MDF 15) | 120–200 (compensado 15) | 200–300 (naval) |
| Cola/vedação/acabamento | 40–70 | 80–140 | 150–250 |
| Ferragens | 40–80 | 80–150 | 150–250 |
| Duto PVC 50 mm | 10–20 | 10–20 | 10–20 |
| **Total** | **530–890** | **1.090–1.820** | **1.860–2.980** |

Recomendação: Equilibrado com placa do Ali e ferragens Econômico → ~R$ 1.000–1.600.

## Onde economizar / não economizar
Economizar: placa, tweeters, crossover, conectores, acabamento, grades (tela + moldura). Não economizar: células + BMS, woofers com T/S, fusível/chave, madeira e vedação.

## Riscos e cuidados
BTL (nunca aterrar negativo de falante nem juntar negativos L/R); Li-ion (sem solda direta na célula, BMS balanceado, carregador 21,0 V, longe de calor, recarregar em ~17 V, guardar ~19 V); umidade (compensado, selar MDF); grave da placa no centro (cone solto abaixo de Fb); potência de mentira/PMPO; pop ao ligar; polaridade (pilha 1,5 V; tweeter invertido com LR2); audição.

## Próximos passos
1. Escolher woofer pelo datasheet → simular no WinISD → fechar Plano A/B.
2. Comprar itens do AliExpress primeiro (prazo); woofers e carregador no nacional.
3. Teste de bancada completo antes de cortar madeira.
4. Corte na madeireira, montagem com cola + parafusos + silicone, travamento, manta.
5. Ajuste: L-pad, polaridade do tweeter, medição básica.

## Histórico de decisões
- 2026-09-23 — v0.1. Pedido inicial: 2×6" + 1 tweeter, TPA3116, bateria, AliExpress, primeira caixa, sabe soldar, "gastar pouco, boa e durável".
  - Decidido: estéreo 2 vias com **dois** tweeters (em vez de um) — TPA3116 em BTL não permite compartilhar um tweeter entre canais; alternativa mono/PBTL descartada por complexidade de compra.
  - Decidido: bateria **5S** Li-ion como recomendação (fica abaixo de 26 V da TPA3116 sem exigir caps de 35 V; ~28–30 W limpos/canal). 4S e chumbo 12 V mantidos como Econômico; 6S como upgrade condicional.
  - Decidido: gabinete em **compensado** (não MDF) por durabilidade em ambiente úmido; três compartimentos.
  - Decidido: crossover LR2 3 kHz passivo (ativo/DSP descartado para primeira caixa).
  - Pendente: modelo do woofer (T/S) → Plano A dutada 11 L/55 Hz ou Plano B selada 8 L.
  - Pendente: confirmação do usuário sobre peso (11–13 kg) vs versão leve com 4–5".
  - Nenhuma decisão consciente contra recomendação até aqui.
