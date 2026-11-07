# Melhoria da caixa do sub Protech Light 8" — duto de 36 Hz

## Resumo
A caixa pronta do sub (≈28 L) já tem a litragem certa; o problema é o duto curto, que sintoniza em ~53–56 Hz e faz um pico de +6 a +8 dB em ~54 Hz (grave embolado, "uma nota só") e perde ~12 dB em 35 Hz. A melhoria é **alongar o duto para ~30 cm passando um tubo PVC esgoto 75 mm por dentro do duto atual**, o que leva a sintonia para **~36 Hz**. A mesma caixa serve para casa e carro (sub + SD800.4 em ponte alternam entre os dois).

## Premissas
- Falante: Protech Light 8", 450 W RMS, Fs 46 Hz, Xmax 8 mm; **Qts/Vas não publicados** → simulado em 3 cenários (Qts 0,45/Vas 4,5 L; 0,50/6 L; 0,55/8 L). A comparação entre as opções foi a mesma nos três.
- Caixa: externa 58 × 26,5 × 26 cm, MDF 15 mm, deitada; falante na metade esquerda da frente, painel inclinado na direita; **25–28 L líquidos** (a frente inclinada tira um pouco).
- Duto atual: na **lateral direita**, oposta ao falante, deitado ao longo do comprimento; **7,5 cm por dentro**, ponta interna ~7,6 cm, **11,5 cm** de comprimento.
- Modelo de Small, QL 7; correção de ponta k = 0,732.

## Arquitetura
```
Casa:  notebook → PRO 2.4 (LPF + subsônico 28 Hz/24 dB) → SD800.4 CH3/CH4 ponte 4 Ω → sub
Carro: AVH-A208BT saída SW (LPF, sem subsônico) → SD800.4 CH3/CH4 ponte 4 Ω → sub
GAIN do SD800.4: um ponto para cada lugar (marcar no knob; alvo 40 V em cada um)
```

## Dimensionamento
| | Atual | Fiamon 3" (avaliado) | **PVC por dentro (escolhido)** |
|---|---|---|---|
| Diâmetro interno | 7,5 cm | ~7,6–7,8 cm | **~7,1 cm** |
| Comprimento | 11,5 cm | 25,9 cm | **~29–31 cm** (cortar 32) |
| Sintonia (Fb) | ~53–56 Hz | ~40–42 Hz | **~36 Hz** |
| Pico | +6,5 dB @ ~54 Hz | +4,3 dB @ ~42 Hz | +3,0 dB @ ~37 Hz |
| −3 dB | 43 Hz | 34 Hz | 31 Hz |
| Nível em 35 Hz | −11,7 dB | −1,5 dB | +2,4 dB |
| % da melhoria máxima | — | ~70% | ~100% |
| Velocidade do ar | — | — | ~10 m/s (OK) |

Selada foi descartada: com este falante (Qts ~0,5, 400 W) cortaria em ~70–80 Hz e tocaria ~6 dB abaixo.

## Material
| Item | Especificação | Onde | Estimativa |
|---|---|---|---|
| Tubo PVC esgoto 75 mm | Tigre (ou equivalente), parede 2 mm → DI ~7,1 cm; usar a ponta **lisa** | ML (~R$ 27–28, 1 m) ou material de construção | R$ 10–28 |
| Silicone neutro | vedação da ponta interna (não acético) | material de construção | R$ 15–25 |
| Cola de contato universal ou adesivo para PVC | só na parte do tubo dentro do duto atual (não usar cola instantânea) | material de construção | R$ 10–20 |
| Lixa 80/120 + retalho de MDF / abraçadeira | ajuste do encaixe, borda arredondada, calço | — | R$ 0–10 |
| **Total** | | | **R$ 35–83** |

Não servem: aero-dutos de 3" comuns (só 10–12 cm), tubo de chaminé (aço fino, diâmetro errado), cano marrom de água.

## Montagem
1. Tirar o falante.
2. Cortar o PVC com **32 cm** a partir da ponta lisa.
3. **Teste a seco:** enfiar o tubo por dentro da caixa, pelo duto atual (a ponta de 7,6 cm serve de guia), até ficar rente à boca externa; ~20 cm ficam para dentro. Justo: lixar se travar; fita se folgado. Vedar a fresta com fita só para o teste.
4. **Varredura** 25–60 Hz, volume baixo, lanterna no cone: o cone quase para em ~36 Hz. Abaixo disso, encurtar a ponta interna 1 cm por vez.
5. **Montagem definitiva:** cola na parte do tubo que fica dentro do duto atual (~11 cm a partir da boca externa), sem escorrer para dentro; encaixar girando; cordão de silicone neutro na fresta da ponta interna; calço no fundo (abraçadeira se o encaixe ficou folgado); arredondar a borda interna com lixa.
6. Cura de **24 h** antes de tocar alto.

## Ajustes depois da troca
- **Casa:** subsônico no PRO 2.4 em **28 Hz, 24 dB/oit** (0,75–0,8 × Fb medida).
- **Carro:** sem subsônico disponível → Bass Boost da multimídia em **0**; a Fb baixa já protege mais que a atual.
- GAIN do SD800.4 regulado com tom + multímetro (alvo 40 V em ponte) em cada lugar.

## Riscos e cuidados
- T/S do falante estimados: a varredura é quem confirma a Fb. Cortar sempre para mais curto, nunca colar antes de testar.
- Junta vazando ar muda a sintonia e faz ruído: silicone contínuo.
- Abaixo da Fb o cone fica solto: sem subsônico (carro), baixar o volume se ouvir batida ou estalo.

## Arquivos
- Modelo 3D: `../home-theater-2.1/caixa-sub-duto-3d.html`
- Ficha do sub e histórico de medições: `../../componentes/subwoofers.md`

## O que se ganha (filmes e música)
- Grave em 30–35 Hz: ~+14 dB; corte −3 dB de 43 para 31 Hz; pico de 54 Hz vira leve reforço em ~37 Hz.
- Filmes: explosões, trovões e trilha (25–50 Hz) com corpo e pressão; diálogo mais limpo. Abaixo de ~28 Hz o subsônico corta (limite de um 8").
- Música: bumbo mais seco (sem a ressonância de 54 Hz), notas graves do baixo mais iguais (Mi 41 Hz, Si 31 Hz), 808/synth bass descem. Volume máximo não muda.
- **Volume baixo:** o ouvido escuta pouco abaixo de ~50 Hz com som baixo, então o ganho de 30–40 Hz aparece em volume médio/alto; em volume baixo melhora a definição. Para presença à noite: **memória "noite" no PRO 2.4** — sub +3 a +5 dB e, se quiser, shelf grave +3 dB abaixo de ~60 Hz; subsônico 28 Hz e limitador mantidos.

## Histórico de decisões
- 2026-11-07: Estudo da caixa ideal. Litragem atual (~28 L) mantida; sintonia alvo 36 Hz. Selada descartada.
- 2026-11-07: Sub + SD800.4 em ponte alternam entre casa e carro; mesma caixa para os dois.
- 2026-11-07: Duto localizado na lateral direita (fotos) → tubo reto, sem joelho.
- 2026-11-07: Pesquisa de duto pronto: não há 3" com 30 cm no mercado BR. Fiamon 3" com extensor (25,9 cm, ~R$ 20) avaliado: ~40 Hz, ~70% da melhoria.
- 2026-11-07: Duto atual medido: 7,5 cm por dentro (ponta interna ~7,6), 11,5 cm. **Decisão: PVC esgoto 75 mm por dentro do duto atual, ~30 cm (cortar 32), Fb ≈ 36 Hz.** Vedação com silicone neutro + cola de contato/universal por fora do tubo, depois do teste a seco.
