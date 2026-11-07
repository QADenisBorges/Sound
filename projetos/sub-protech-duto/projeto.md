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
Casa:  notebook → PRO 2.4 (LPF + subsônico 30 Hz/24 dB) → SD800.4 CH3/CH4 ponte → sub em série 8 Ω
Carro: AVH-A208BT saída SW (LPF, sem subsônico) → SD800.4 CH3/CH4 ponte → sub em série 8 Ω
Bobinas 4+4 Ω religadas em SÉRIE = 8 Ω → ponte CH3/CH4 (~264 W). GAIN: um ponto para cada lugar (marcar no knob; alvo 46 V em cada um)
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
| Ar no duto a 400 W (pico) | ~43 m/s | ~43 m/s | ~46 m/s (limite de sopro: 17 retas / 25 arredondadas) |

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
- **Casa:** subsônico no PRO 2.4 em **30 Hz, 24 dB/oit** (revisão: com 28 Hz o cone passa do Xmax a 400 W em ~30 Hz).
- **Carro:** sem subsônico disponível → Bass Boost da multimídia em **0**; a Fb baixa já protege mais que a atual.
- GAIN do SD800.4 regulado com tom + multímetro (**alvo 46 V** em ponte com o sub em série, 8 Ω) em cada lugar.

## Riscos e cuidados
- T/S do falante estimados: a varredura é quem confirma a Fb. Cortar sempre para mais curto, nunca colar antes de testar.
- Junta vazando ar muda a sintonia e faz ruído: silicone contínuo.
- Abaixo da Fb o cone fica solto: sem subsônico (carro), baixar o volume se ouvir batida ou estalo.

## Arquivos
- Modelo 3D: `../home-theater-2.1/caixa-sub-duto-3d.html`
- Ficha do sub e histórico de medições: `../../componentes/subwoofers.md`

## Revisão técnica (07/11/2026)
Simulação eletroacústica completa (excursão, ar no duto e SPL máximo limitados por 400 W, Xmax 8 mm e 25 m/s no duto), em 4 cenários de T/S. O cenário mais coerente com a ficha (84 dB) é o do fórum do Light 8": **Fs 58 Hz, Qts 0,49, Vas 4,65 L** (sensibilidade calculada 84,3 dB); os de Fs 46 dão 82–83 dB. As conclusões valem para todos.

**Confere:** caixa 25–28 L; duto atual 7,5 × 11,5 cm → Fb 52–56 Hz; PVC DI 7,1 cm; ~29–31 cm → 36 Hz; Fiamon 25,9 cm → 40–42 Hz.

**Corrigido:**
1. **Ar no duto** — antes "~10 m/s, OK" (fórmula simplificada, subestimava). Real a 400 W: **~42–46 m/s** em qualquer das três opções (o duto de 7 cm é pequeno para 400 W num 8"). Sem sopro até ~100 W em grave contínuo (~21 m/s); acima disso, em notas graves longas e volume muito alto, pode soprar/comprimir. Duto maior não cabe (dobrar a área dobra o comprimento). Atenua: **arredondar bem as duas bocas do PVC** e usar o limitador.
2. **Subsônico de casa: 30 Hz** (não 28). Com 28 Hz o cone chega a 8,4–9,1 mm em 30 Hz a 400 W (Xmax 8); com 30 Hz, 7,5–8,2 mm.
3. **Carro sem subsônico:** a 400 W o cone passa de 15–20 mm em 25–30 Hz (2× o Xmax) em qualquer duto. Volume alto com grave muito fundo no carro = risco real. Entre 35 e 45 Hz o duto novo protege mais (8–9 mm × 12–15 mm do atual).
4. **Impedância ainda não medida:** bobina dupla 4+4 Ω. Série = 8 Ω → ponte a 40 V entrega ~200 W (seguro, −3 dB). Paralelo = 2 Ω → **ponte proibida**. O alvo "400 W / 40 V" só vale se o multímetro nos terminais da caixa der ~3,2–3,6 Ω (bobinas 2+2 em série). Medir antes de regular ganho.

**Comparação com o máximo (SPL máximo a 1 m, cenário Fs 58; % = volume percebido em relação ao teto):**
| | 30 Hz | 35 Hz | 40 Hz | 45–60 Hz |
|---|---|---|---|---|
| Teto (caixa de ~55 L, duto 12 cm × 55 cm, Fb 30) | 108 dB | 107 dB | 105 dB | 105 dB |
| Melhor nesta caixa (Fb 32, duto 7,6 × 43 cm — esbarra no ímã) | 102 (66%) | 106 (94%) | 106 (100%) | 105–106 (100%) |
| **PVC 36 Hz (escolhido)** | 99 (52%) | 103 (75%) | 106 (100%) | 106–107 (100%) |
| Fiamon 40 Hz | 93 (34%) | 102 (71%) | 105 (100%) | 108 (100%) |
| Duto atual + subsônico 42 Hz | 77 (12%) | 87 (26%) | 96 (54%) | 104–111 (100%) |

O PVC de ~30 cm é o maior duto reto que cabe sem chegar perto do ímã; é praticamente o teto prático desta caixa. O teto absoluto exige o dobro do volume.

## Comparação com a caixa 100% ideal (07/11/2026, 264 W em série 8 Ω)
Caixa ideal = volume e sintonia livres, resposta plana (pico ≤ 1 dB), duto grande o bastante para ar ≤ 17 m/s (cenário mais provável: ~60 L, Fb 31 Hz, duto 12,5 × 53 cm). Métrica: volume máximo percebido (cone ≤ Xmax 8 mm, ar no duto ≤ 25 m/s nas opções da caixa atual), em % do ideal.
| | 30 Hz | 35 Hz | 40 Hz | 45 Hz | 50–60 Hz | **Média 30–60 Hz** |
|---|---|---|---|---|---|---|
| Caixa ideal | 100% | 100% | 100% | 100% | 100% | **100%** |
| **Caixa atual + PVC 36 Hz** | 49–78% | 79–83% | 98–100% | 100% | 100% | **88–92%** |
| Caixa atual + Fiamon 40 Hz | 34–55% | 73–77% | 93–100% | 100% | 100% | 84–87% |
| Caixa atual como está | 12–19% | 24–28% | 49% | 81–87% | 100% (com pico) | 62–63% |
Melhoria do PVC: de ~62% para ~90% do ideal (+28 pontos, ~+45% de desempenho). O que falta está abaixo de 35 Hz.

## O que se ganha (filmes e música)
- Grave em 30–35 Hz: ~+14 dB; corte −3 dB de 43 para 31 Hz; pico de 54 Hz vira leve reforço em ~37 Hz.
- Filmes: explosões, trovões e trilha (25–50 Hz) com corpo e pressão; diálogo mais limpo. Abaixo de ~30 Hz o subsônico corta (limite de um 8").
- Música: bumbo mais seco (sem a ressonância de 54 Hz), notas graves do baixo mais iguais (Mi 41 Hz, Si 31 Hz), 808/synth bass descem. Volume máximo não muda.
- **Volume baixo:** o ouvido escuta pouco abaixo de ~50 Hz com som baixo, então o ganho de 30–40 Hz aparece em volume médio/alto; em volume baixo melhora a definição. Para presença à noite: **memória "noite" no PRO 2.4** — sub +3 a +5 dB e, se quiser, shelf grave +3 dB abaixo de ~60 Hz; subsônico 30 Hz e limitador mantidos.

## Histórico de decisões
- 2026-11-07: Usuário informou que as bobinas (4+4 Ω) estão **em paralelo = 2 Ω** → ponte do SD800.4 (mínimo 4 Ω) **proibida**. Decisão recomendada: religar em **série = 8 Ω** e manter a ponte: ~264 W, alvo 46 V; aproveitar a abertura da caixa para a troca do duto. Com 264 W: cone ≤ ~6,6 mm a 30 Hz (subsônico 30 Hz) e ar no duto ~35–37 m/s. Conferir com multímetro: ~1,6–1,8 Ω hoje; ~6,5–7,2 Ω depois.
- 2026-11-07 (revisão): ar no duto corrigido (~45 m/s a 400 W, não 10); subsônico de casa 28 → 30 Hz; alerta de excursão no carro sem subsônico; impedância nos terminais continua pendente (define 400 W × 200 W × ponte proibida).
- 2026-11-07: Estudo da caixa ideal. Litragem atual (~28 L) mantida; sintonia alvo 36 Hz. Selada descartada.
- 2026-11-07: Sub + SD800.4 em ponte alternam entre casa e carro; mesma caixa para os dois.
- 2026-11-07: Duto localizado na lateral direita (fotos) → tubo reto, sem joelho.
- 2026-11-07: Pesquisa de duto pronto: não há 3" com 30 cm no mercado BR. Fiamon 3" com extensor (25,9 cm, ~R$ 20) avaliado: ~40 Hz, ~70% da melhoria.
- 2026-11-07: Duto atual medido: 7,5 cm por dentro (ponta interna ~7,6), 11,5 cm. **Decisão: PVC esgoto 75 mm por dentro do duto atual, ~30 cm (cortar 32), Fb ≈ 36 Hz.** Vedação com silicone neutro + cola de contato/universal por fora do tubo, depois do teste a seco.
