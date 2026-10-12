# Projeto: caixa Bluetooth portátil para churrasco (rascunho)

Status: **rascunho — aguardando decisão do usuário** (coluna de orçamento, 2 tweeters em vez de 1, datasheet do woofer).

## Resumo

Caixa estéreo de 2 vias, dutada, com 2 woofers de 6" (4 Ω) + 2 tweeters dome, placa TPA3116 2.0 com Bluetooth integrado, bateria Li-ion 18650 4S2P com BMS (chumbo VRLA 12 V na versão econômica; 5S3P na caprichada), gabinete de compensado 15 mm de 60 × 26 × 26 cm com coluna central vedada para eletrônica e bateria. Alvo: ~92 dB a 4 m ao ar livre, ~6 h de música, R$ 825–1.420 (Equilibrado).

## Premissas

- Uso: churrasco ao ar livre, ouvintes a 3–5 m, alvo ~90 dB a 4 m.
- Orçamento assumido: R$ 800–1.400 (Equilibrado). Menos de R$ 600 → Econômico ou plano C (2 coaxiais 6" 4 Ω).
- Autonomia: 5–6 h. Peso aceitável: ~10–12 kg, com alça.
- Woofer 6" 4 Ω, ~89 dB/1W/1m, Fs 55–70 Hz, Qts 0,35–0,5, Vas 10–18 L, Xmax ≥ 3–4 mm, ≥ 40 W RMS. Qts > 0,6 ou sem T/S → caixa selada, mesmo volume.
- Tweeter dome 4 Ω, ~90–92 dB, ≥ 20 W RMS.
- Usuário solda, nunca fez caixa; corte da madeira na loja.
- Preços: estimativas sem busca (set/2026).

## Arquitetura

```
Celular ──BT 5.0──► Placa TPA3116 2.0 + BT (ex.: linha Wuzhi ZK-502 ou similar)
                        ├─ Canal L ──► Crossover L (LP 3,5 kHz → woofer; HP 3,5 kHz → tweeter)
                        └─ Canal R ──► Crossover R (idem, separado do L — saídas BTL)

Alimentação: Bateria ─► fusível 5 A ─► chave ─► placa
             4S2P 18650 (14,8 V / 5,2 Ah) + BMS 4S ◄── jack DC ◄── carregador 16,8 V 2 A

Gabinete: compensado 15 mm, 60 × 26 × 26 cm externo
   [ câmara L 11,5 L dutada ] [ coluna 7 cm: placa + bateria ] [ câmara R 11,5 L dutada ]
```

Regras: cada canal fecha em si mesmo (BTL — nenhum negativo de falante vai a terra, carcaça, bateria ou ao outro canal); eletrônica e bateria fora do volume acústico; câmara separada por woofer (divisórias = travamento).

## Dimensionamento (calc_som.py)

Potência limpa por canal em 4 Ω (P ≈ V²/(2Z), 60–70%): chumbo 12 V ~12 W; 4S ~17–19 W (21–25 W cheia); 5S ~26–30 W; 6S ~37–43 W (limite do chip, capacitores ≥ 35 V). Em 8 Ω, metade.

| Configuração | Potência/canal | SPL a 4 m (2 vias) | SPL a 1 m, 1 lado |
|---|---|---|---|
| Chumbo 12 V | ~12 W | ~91 dB | ~100 dB |
| 4S Li-ion | ~18 W | ~92,5 dB | ~101,5 dB |
| 5S Li-ion | ~28 W | ~94,5 dB | ~103,5 dB |
| Woofer 8 Ω, 4S | ~9 W | ~89,5 dB | — |

- Corrente: 4S 2×18 W → 2,9 A máx., 0,4–1,0 A média; 5S → 3,6 A máx. Fusível 5 A (7,5 A em 5S). Cabo alimentação 1,0–1,5 mm²; cabo de falante 0,75–1,0 mm².
- Autonomia (80% da capacidade): VRLA 12 V 7 Ah a 8 W → 8,4 h (contar 5–6 h); 4S2P 5,2 Ah a 10 W → 6,2 h (a 18 W → 3,4 h); 5S3P 7,8 Ah a 14 W → 8,2 h.
- Caixa: interno 57 × 23 × 23 cm = 30 L brutos; coluna 7 cm = 3,7 L; cada câmara 23,5 × 23 × 23 = 12,4 L brutos ≈ 11,5 L líquidos.
- Duto (Fs 60 Hz / Qts 0,4 / Vas 15 L hipotéticos): 11,5 L, Fb 52 Hz, PVC 50 mm (Ø int. 4,6 cm) → 12,7 cm; velocidade de pico ~10 m/s (OK, limite ~17). Fb 55 Hz → 11 cm. Simular no WinISD com T/S reais antes de cortar.
- Peso: madeira 15 mm ~8,4 kg (12 mm ~6,7 kg); total 10–12 kg.
- Crossover 2ª ordem 3,5 kHz, Butterworth, 4 Ω: LP = L 0,27 mH série + C 8,2 µF paralelo; HP = C 8,2 µF série + L 0,27 mH paralelo. Alternativa LR2: 0,36 mH / 5,6 µF. Tweeter 8 Ω: C 3,9–4,7 µF + L 0,51 mH. Tweeter com polaridade invertida. L-pad −3 dB em 4 Ω: 1,2 Ω série + 10 Ω paralelo, entre filtro e tweeter.

## Opções de orçamento

| Item | Especificação que importa | Onde comprar | Econômico | Equilibrado | Caprichado |
|---|---|---|---|---|---|
| Placa amplificadora + Bluetooth | TPA3116D2 2.0, 12–24 V, BT 5.0; Capr.: TPA3116 + módulo BT QCC3034/QCC5125 (aptX) isolado | Ali/Shopee | 45–70 | 55–85 | 110–180 |
| Woofers 6" (par) | 4 Ω, ≥ 40 W RMS, ≥ 88 dB, Fs 55–70 Hz, T/S publicado | Nacional | 120–200 | 180–320 | 400–700 |
| Tweeters (par) | Dome 4 Ω, ≥ 20 W, ≥ 90 dB | Ali/Shopee ou Nacional | 25–50 | 50–100 | 120–220 |
| Crossover (2 un.) | 4 bobinas 0,27 mH + 4 caps 8,2 µF ≥ 100 V + resistores L-pad | Ali/Shopee / eletrônica | 40–70 | 50–90 | 80–140 |
| Bateria | Econ.: VRLA 12 V 7 Ah; Equil.: 8× 18650 originais 4S2P; Capr.: 15× 5S3P | Nacional (células com reputação) | 70–110 | 200–300 | 380–560 |
| BMS + carregador | Econ.: carregador 12 V; Equil.: BMS 4S ≥ 15 A + carregador 16,8 V 2 A; Capr.: BMS 5S + carregador 21 V | Ali/Shopee | 40–70 | 45–80 | 60–110 |
| Suportes/níquel/isolação | Suporte 18650 com terminal, fita de níquel, papel isolante | Ali/Shopee | 0 | 20–40 | 30–60 |
| Madeira cortada | MDF 15 / compensado 15 / compensado naval 15 mm | Madeireira / home center | 60–100 | 90–160 | 120–200 |
| Ferragens e acabamento | Cola, silicone, parafusos, alça, pés, cantoneiras, tinta/carpete, tela | Home center / Ali | 50–90 | 70–130 | 120–250 |
| Elétrica | Chave, porta-fusível + fusíveis 5 A, jack DC, voltímetro, cabo 1,5 mm², terminais | Ali/Shopee | 30–50 | 40–70 | 50–90 |
| Duto PVC 50 mm + manta | 30 cm de tubo; 1 m² de manta | Home center | 25–45 | 25–45 | 25–45 |
| **Total** | | | **R$ 505–855** | **R$ 825–1.420** | **R$ 1.495–2.555** |

Plano C (Econômico simplificado): 2 coaxiais 6" 4 Ω (R$ 120–220 o par) no lugar de woofers + tweeters + crossover → ~R$ 450–650.

## Onde economizar / onde não

Economizar: placa/BT genérico, componentes de crossover, conectores, acabamento, tweeter dome barato. Não economizar: células 18650 originais, BMS + carregador correto, woofers, fusível e vedação, compensado (não MDF) para uso externo.

## Riscos e cuidados

BTL (nenhum negativo comum, tweeter compartilhado queima a placa); lítio (BMS, carregador certo, células iguais, não soldar na célula, fusível); não usar 6S sem capacitores ≥ 35 V; potência de anúncio × real; queda de potência com bateria arriando (voltímetro); vedação da caixa; duto com pontas chanfradas; ventilação da coluna; ruído de placas BT "tudo em um"; prazo/impostos de importação (células compradas no Brasil); audição.

## Próximos passos

1. Usuário decide a coluna e confirma 2 tweeters (ou coaxiais).
2. Comprar woofers primeiro; enviar datasheet (Fs, Qts, Vas, Xmax, Sd) → fechar volume/sintonia/duto ou selada.
3. Pedir no Ali/Shopee: placa, BMS, carregador, bobinas/capacitores, jack, chave, porta-fusível, tela. Células: nacional.
4. Corte na loja; montagem a seco → cola + parafuso → silicone → cura 24 h → teste de vazamento.
5. Eletrônica na bancada antes de fechar; conferir tensão dos grupos do pack e polaridade dos falantes.
6. Regulagem de volume máximo por ouvido; testar polaridade do tweeter e L-pad; opcional REW.

## Histórico de decisões

| Data | Decisão | Por quê |
|---|---|---|
| 2026-09-23 | 2 tweeters em vez de 1 (a confirmar com o usuário) | Saídas BTL da TPA3116 não admitem negativo comum entre canais; PBTL/mono exige placa específica e levaria a 2 Ω |
| 2026-09-23 | Woofers de 4 Ω obrigatórios | Com bateria (12–21 V) a potência em 8 Ω cai pela metade (−3 dB) |
| 2026-09-23 | Bateria 4S2P 18650 como base (Equilibrado) | ~18 W limpos/canal, BMS e carregador 16,8 V comuns, com folga de tensão para a placa; 5S no Caprichado; 6S descartado por durabilidade |
| 2026-09-23 | Chumbo VRLA 12 V 7 Ah no Econômico | Seguro e barato; aceita menos potência (~12 W) e pesa 2,3 kg |
| 2026-09-23 | Compensado 15 mm em vez de MDF (Equilibrado/Caprichado) | Uso externo — MDF incha com umidade |
| 2026-09-23 | Dutada 11,5 L / 52 Hz por câmara, com fallback selada | Ganho de grave com pouca potência; selada se Qts > 0,6 ou sem T/S |
| 2026-09-23 | Crossover passivo 2ª ordem 3,5 kHz | Padrão para 6" + dome barato; ajustável de ouvido, refinável com REW |
| 2026-09-23 | Coluna central vedada para eletrônica e bateria | Mantém as câmaras estanques e tira a bateria da pressão/vibração |
