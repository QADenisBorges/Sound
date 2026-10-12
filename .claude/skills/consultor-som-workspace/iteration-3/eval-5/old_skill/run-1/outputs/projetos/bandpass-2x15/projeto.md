# Projeto: Bandpass 2×15" 1.500 W + módulo 4.000 W @ 1 Ω (som automotivo SPL)

Status: definido, aguardando escolha de falante/módulo (datasheets) para confirmar volumes no WinISD.

## Resumo

Sistema de grave para "tremer tudo" no carro: dois subwoofers 15" de 1.500 W RMS (DVC 4+4 Ω) ligados em 1 Ω num módulo monobloco classe D de 4.000 W RMS, em caixa bandpass de 4ª ordem (traseira selada + frontal dutada, Fb 55 Hz). Elétrica reforçada faz parte do projeto (bateria auxiliar no porta-malas, cabo 70 mm², fusíveis, Big 3, voltímetro; alternador maior nas opções Equilibrado/Caprichado).

## Premissas

- Carro hatch/SUV com banco rebatível (ou sedan com passagem). Caixa 100 × 56,4 × 60 cm, ~85 kg montada.
- Falante 15" SPL nacional, DVC 4+4 Ω, T/S assumidos: Fs 42 Hz, Qts 0,5, Vas 90 L, Sd 850 cm², Xmax 10–12 mm, bobina ≥ 3". Confirmar com datasheet real antes de cortar.
- Módulo 4.000 W RMS @ 1 Ω, classe D, LPF + subsônico. Verificar tensão de medição (12,6 vs 14,4 V).
- Fonte: rádio atual via RCA ou alto nível. Sem DSP.
- Uso com motor ligado.
- Preços: estimativas sem pesquisa (2026-09-24).

## Arquitetura

Rádio (RCA) → Módulo 4.000 W @ 1 Ω (LPF ~80 Hz, subsônico ~35 Hz) → 2 × sub 15" DVC 4+4 Ω (bobinas em paralelo, subs em paralelo = 1 Ω) → caixa bandpass 4ª ordem → cabine.

Elétrica: Alternador ─(Big 3)─ Bateria principal ─[fusível 350–400 A]─ cabo 70 mm² OFC 5 m → isolador/relé → bateria auxiliar (porta-malas) ─[fusível 400 A]─ cabo 35 mm² curto → módulo. Negativo curto no chassi lixado. Voltímetro no painel.

## Dimensionamento (calc_som.py)

| Conta | Comando | Resultado |
|---|---|---|
| Impedância | `impedancia --dvc 4 2` | bobinas ∥ + subs ∥ = 1,00 Ω; alternativa série+∥ = 4 Ω |
| Corrente pico | `corrente --rms 4000 --tensao 12.6 --eficiencia 0.8` | 397 A pico; média música 50–132 A |
| Corrente pico (13,8 V) | `corrente --rms 4000 --tensao 13.8 --eficiencia 0.8` | 362 A |
| Cabo longo | `cabo --corrente 400 --comprimento 5 --queda 0.5` | 68,8 mm² → 70 mm² OFC (CCA: 112 mm², não usar) |
| Cabo curto | `cabo --corrente 400 --comprimento 1.5 --queda 0.3` | 34,4 mm² → 35 mm² |
| Ganho | `ganho --rms 3000 --impedancia 1` | 54,8 V AC (limite dos falantes; 4.000 W seriam 63,2 V) |
| Cabo falante | `cabo-falante --impedancia 1 --comprimento 1.5` | mín. 1,5 mm² → usar 4–6 mm² |
| SPL | `spl --sensibilidade 93 --potencia 1500 --caixas 2` | ~128 dB @ 1 m campo livre; ~140–145 dB na cabine com bandpass + ganho de cabine |
| Duto Fb 55 | `duto --volume 92 --fb 55 --diametro 25.2 --sd 1700 --xmax 12` | 35,3 cm, 499 cm², 14,1 m/s (OK) |
| Duto Fb 50 | idem `--fb 50` | 46,6 cm, 12,8 m/s |
| Duto Fb 60 | idem `--fb 60` | 26,7 cm, 15,4 m/s |
| Câmara traseira | Vas 90 / Vb 69 → α 1,30 | Qtc ≈ 0,76, Fc ≈ 63 Hz |

## Caixa — bandpass 4ª ordem, MDF 18 mm

Externo 100 × 56,4 × 60 cm (L × A × P). Interno 96,4 × 52,8 × 56,4 cm. Frente voltada para a cabine.

- 2 câmaras traseiras seladas (lado a lado, divisória vertical): 47,3 × 56,4 × 28 cm = 74,7 L brutos → ~69 L líquidos cada.
- Câmara frontal comum: 96,4 × 56,4 × 23 cm = 125 L brutos → ~93 L líquidos (−17,7 duto, −6,1 prateleira, −6 aros, −2 travas).
- Falantes no baffle horizontal, voltados para cima, furo ~35,5 cm (confirmar), centrados em cada metade.
- Duto em fenda no topo da frente: 96,4 × 5,2 cm = 501 cm², comprimento 35,3 cm (Fb 55 Hz). Teto = tampo, piso = prateleira 18 mm, paredes = laterais. Chanfrar borda interna. Cortar prateleira com 38 cm e aparar após medir.
- Alternativas: Fb 50 Hz → 46,6 cm; Fb 60 Hz → 26,7 cm.

Lista de corte (1 chapa 2,75 × 1,85 m, ~4 m²):

| Peça | Qtd | cm |
|---|---|---|
| Tampo e fundo | 2 | 100 × 60 |
| Laterais | 2 | 52,8 × 60 |
| Traseira | 1 | 96,4 × 52,8 |
| Frente | 1 | 96,4 × 45,8 |
| Baffle horizontal (2 furos 15") | 1 | 96,4 × 56,4 |
| Divisória vertical | 1 | 56,4 × 28 |
| Prateleira do duto | 1 | 96,4 × 35,3 (cortar 38) |
| Travamentos | 6–8 | 5 × 45–55 |

Montagem: cola PVA + parafusos a cada 10–12 cm; silicone interno nas câmaras seladas; baffle duplo (36 mm) recomendado; travas em todas as câmaras + sarrafo sob a prateleira; bornes vedados; sem enchimento na frontal; caixa fixada ao carro; manta antirruído na tampa traseira.

## Lista de compra (R$, estimativas sem pesquisa)

| Item | Spec | Onde | Econômico | Equilibrado | Caprichado |
|---|---|---|---|---|---|
| 2 × sub 15" | 1.500 W RMS, DVC 4+4 Ω, Fs 38–45, Xmax ≥ 10 mm, bobina ≥ 3", T/S publicado | ML loja oficial / Magalu / Amazon | 1.400–1.800 | 1.800–2.400 | 2.600–3.600 |
| Módulo | 4.000 W @ 1 Ω a 12,6 V, classe D, LPF + subsônico | ML loja oficial | 1.300–1.700 | 1.800–2.300 | 2.300–3.000 |
| Cabo positivo 5 m | OFC | Loja nacional | 50 mm² 350–450 | 70 mm² 450–600 | 2×50 mm² 700–900 |
| Cabos curtos + negativo | 35–50 mm² OFC ~2,5 m | Loja nacional | 150–220 | 200–300 | 300–400 |
| 2 porta-fusíveis + fusíveis | ANL 300–400 A | ML / loja de som | 120–200 | 180–280 | 250–400 |
| Bateria auxiliar | Estacionária/AGM ≥ 100 Ah | Loja de baterias | 800–1.100 | 1.100–1.500 | 1.800–2.600 |
| Isolador/relé | ≥ 200 A ou VSR | ML | 120–200 | 200–350 | 300–500 |
| Big 3 | 35–50 mm² OFC | Loja nacional | 150–250 | 200–300 | 300–450 |
| Alternador | ≥ 150 A / 250–300 A | Retífica especializada | 0 (original, uso limitado) | 1.200–2.000 | 2.500–4.000 |
| Voltímetro | 10–16 V | Shopee/Ali/ML | 30–60 | 40–80 | 80–150 |
| Cabo de falante | 4–6 mm² ~6 m | Loja nacional/ML | 60–100 | 80–130 | 120–200 |
| RCA 5 m + remote | blindagem dupla | ML/Shopee | 40–80 | 80–150 | 150–300 |
| Caixa | MDF 18 mm + insumos | Madeireira + construção | 500–750 | 750–1.100 | 1.200–2.000 |
| Fixação + manta | cintas, manta asfáltica | Construção/ML | 60–120 | 120–250 | 250–500 |
| **Total** | | | **5.080–7.030** | **8.200–11.740** | **12.850–19.000** |

## Onde economizar / onde não

Economizar: voltímetro, RCA, remote, acabamento, bornes, montar a caixa, fusíveis genéricos bem avaliados.
Não economizar: cabo OFC, fusíveis, bateria auxiliar, falantes, MDF 18 mm, alternador (se tocar longo).

## Riscos e cuidados

Tensão < 12 V no pico; bandpass esconde excursão (subsônico 35 Hz sempre); ganho em 54,8 V e bass boost zero; calor do módulo em 1 Ω; bateria no porta-malas fixa e ventilada; RMS de mentira; CTB art. 228; audição (140 dB+).

## Próximos passos

1. Escolher subs (DVC 4+4) → datasheet → WinISD (traseira 69 L, frontal 93 L, duto 501 cm² × 35,3 cm).
2. Comprar elétrica junto com o módulo.
3. Cortar/montar caixa, curar 24 h.
4. Instalar elétrica na ordem: Big 3 → cabo + fusível → relé → bateria aux → fusível → módulo.
5. Regular ganho: 54,8 V AC, LPF 80 Hz, subsônico 35 Hz.
6. Testar com voltímetro; < 12 V → abaixar ou alternador.

## Histórico de decisões

| Data | Decisão | Por quê |
|---|---|---|
| 2026-09-24 | 2 × 15" 1.500 W + módulo 4.000 W @ 1 Ω, caixa bandpass | Decisão do usuário: objetivo é SPL ("tremer tudo"). |
| 2026-09-24 | Subs DVC 4+4 Ω, bobinas ∥ + subs ∥ = 1 Ω | Única configuração de dois subs iguais que fecha 1 Ω; deixa 4 Ω como plano B. 2+2 Ω daria 0,5 Ω (inviável) ou 2 Ω. |
| 2026-09-24 | Elétrica reforçada obrigatória (bateria aux no porta-malas, 70 mm², fusíveis, Big 3, voltímetro) | 397 A de pico / 50–132 A de média excedem a sobra de alternador original; bateria perto do módulo absorve picos. |
| 2026-09-24 | Bandpass 4ª ordem, traseira ~69 L selada/sub, frontal ~93 L comum, Fb 55 Hz | Banda ~45–75 Hz para pancada com ganho de cabine; volumes baseados em T/S típicos, a confirmar no WinISD. |
| 2026-09-24 | Duto em fenda 501 cm² × 35,3 cm no topo da frente | Área ~30% de Sd mantém velocidade 14 m/s (< 17); posição no topo evita colisão com aros dos falantes. |
| 2026-09-24 | Ganho regulado para 3.000 W (54,8 V AC), não 4.000 W | Limite dos falantes, não do módulo. |
| 2026-09-24 | Alternador original só no Econômico, com limite de uso | Coerência: sem alternador maior o sistema drena a bateria em uso prolongado. |
