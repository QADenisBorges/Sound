# Bandpass 2×15" (1.500 W cada) + módulo 4.000 W @ 1 Ω — lista de compra e projeto da caixa

## Resumo

Beleza — falante, módulo e impedância você decidiu, e eu monto em cima disso. Mas vou ser direto numa coisa: **a parte que você não decidiu é a que define se isso vai tocar ou vai piscar farol e entrar em proteção — a elétrica.** Módulo de 4.000 W em 1 Ω puxa até ~400 A de pico. Alternador de carro popular entrega 90–120 A, e o carro já usa 30–50 A disso. Então a lista abaixo inclui bateria auxiliar, cabo grosso de verdade, fusíveis e "Big 3" — não como opcional, mas como parte do sistema. Sem isso a tensão cai, o módulo entrega menos da metade, o grave "morre" e o sub trabalha em clipping.

Caixa: **bandpass de 4ª ordem** (câmara traseira selada + câmara frontal dutada), sintonia 55 Hz, os dois falantes tocando numa câmara frontal comum, com um duto em fenda apontado para a cabine. É a caixa certa para "tremer tudo" — muito alto entre ~45 e 75 Hz — e é ruim para ouvir música com fidelidade. Você já sabe disso, então segue.

## Premissas (o que assumi — se for diferente, avisa que eu ajusto)

1. **Carro:** hatch/SUV com banco traseiro que rebate, ou sedan com passagem para a caixa. A caixa tem 100 × 56,4 × 60 cm (~340 L externos, ~85 kg com os falantes). Em porta-malas de sedan sem rebater o banco ela não entra pela abertura — aí eu redesenho em duas peças ou mais baixa.
2. **Falantes:** 15" 1.500 W RMS nacionais de linha "SPL/pancadão", **bobina dupla 4+4 Ω** (é o que fecha 1 Ω com dois subs). Parâmetros T/S típicos dessa categoria que usei para dimensionar: Fs ≈ 42 Hz, Qts ≈ 0,5 (o quanto o falante é "amortecido"), Vas ≈ 90 L (o "tamanho de caixa" que ele pede), Sd ≈ 850 cm² (área do cone), Xmax ≈ 10–12 mm (excursão linear), bobina ≥ 3" (76 mm). **Antes de cortar MDF, pegue o datasheet do falante que comprar e confira no WinISD** — se o Vas real for muito diferente, os volumes mudam uns ±20%.
3. **Módulo:** monobloco classe D nacional "4.000 W RMS @ 1 Ω", com passa-baixa e subsônico embutidos. Confira em **qual tensão** o fabricante mediu: se for 14,4 V, em 12,6 V ele entrega ~75% (~3.000 W).
4. **Fonte:** rádio atual com saída RCA (ou entrada de alto nível do módulo). Sem DSP por enquanto.
5. Toca com o **motor ligado**. Motor desligado por muito tempo drena a bateria auxiliar.
6. Preços em R$ são **estimativas de memória, sem pesquisa** — confira antes de comprar.

## Arquitetura

```
Rádio (RCA) → Módulo 4.000 W @ 1 Ω (LPF ~80 Hz, subsônico ~35 Hz)
            → 2 × sub 15" DVC 4+4 Ω [bobinas em paralelo, subs em paralelo = 1 Ω]
            → caixa bandpass 4ª ordem (duto para a cabine) → cabine (ganho de cabine soma no grave)

Elétrica:
Alternador ─(Big 3)─ Bateria principal ─[fusível 350–400 A, ≤ 40 cm do borne]─ cabo 70 mm² OFC (5 m)
           → Isolador/relé → Bateria auxiliar no porta-malas ─[fusível 400 A]─ cabo curto 35 mm² → Módulo
Negativo do módulo: mesma bitola, curto, no chassi lixado. Voltímetro no painel.
```

Por que bateria auxiliar **perto do módulo**: os picos de 400 A vêm da bateria a 1 m, não do alternador a 5 m. O cabo longo só precisa carregar a média + recarga, e a tensão no módulo não despenca a cada batida.

## Dimensionamento (contas do `scripts/calc_som.py`)

**Impedância** — `impedancia --dvc 4 2`: bobinas em paralelo + subs em paralelo = **1,00 Ω** ✓. Plano B sem trocar nada: bobinas em série + subs em paralelo = 4 Ω (módulo entrega ~1/3–1/4, som mais limpo, elétrica respira). Não compre sub 2+2 Ω achando que fecha 1 Ω com dois: dá 0,5 Ω (queima o módulo) ou 2 Ω.

**Corrente** — `corrente --rms 4000 --tensao 12.6 --eficiencia 0.8`: pico contínuo **397 A**; média com música 50–132 A. Com motor ligado (13,8 V): 362 A de pico. Só a **média** já passa da sobra do alternador original (~50–70 A) — por isso o Econômico abaixo tem limite de uso.

**Cabo de força** — `cabo --corrente 400 --comprimento 5 --queda 0.5`: mínimo 68,8 mm² → **70 mm² OFC** (ou 2 × 50 mm²). Em CCA (alumínio cobreado) precisaria 112 mm² — não use CCA aqui. Trecho curto bateria auxiliar → módulo (1,5 m, queda 0,3 V): **35 mm²**. O fusível protege o **cabo**: 300 A para 50 mm², 350–400 A para 70 mm² (ANL/mega).

**Ganho** — `ganho --rms 3000 --impedancia 1`: os falantes são 2 × 1.500 = 3.000 W e o módulo tem 4.000. Regule para os falantes: **54,8 V AC** na saída (tom senoidal de 45 Hz, falantes desconectados, bass boost zero). 63,2 V seria os 4.000 W — não vá até lá. Módulo com 1,3× o RMS dos falantes é saudável **só** com ganho certo; o que queima é clipping, não potência sobrando.

**Cabo de falante** — `cabo-falante --impedancia 1 --comprimento 1.5`: mínimo 1,5 mm²; use **4–6 mm²**. Em 1 Ω cada centésimo de ohm no fio vira potência perdida, e passam ~55 A pelo cabo.

**SPL** — `spl --sensibilidade 93 --potencia 1500 --caixas 2`: ~128 dB a 1 m em campo livre. Some o pico do bandpass na sintonia (+3–5 dB) e o ganho de cabine (+6–12 dB abaixo de 60 Hz): **~140–145 dB dentro do carro** perto de 50–60 Hz. Isso treme o carro do lado. Também é nível de dano auditivo em minutos — vidro aberto e não fique dentro no talo.

**Caixa** (detalhe abaixo) — câmara traseira ~69 L líquidos por sub → Qtc ≈ 0,76, Fc ≈ 63 Hz com os T/S da premissa; câmara frontal ~93 L líquidos com duto de 501 cm² × 35,3 cm → **Fb = 55 Hz**; velocidade do ar no duto 14 m/s em Xmax (OK, abaixo de 17 m/s, não "sopra"). Banda útil estimada: ~45–75 Hz.

## Projeto da caixa — bandpass 4ª ordem, 2 × 15", MDF 18 mm

**Externo: 100 (L) × 56,4 (A) × 60 (P) cm. Interno: 96,4 × 52,8 × 56,4 cm.** Frente voltada para a cabine.

Corte lateral (frente à esquerda):

```
tampo ┌────────────────────────────────────────────┐
      │ ═══ boca do duto 5,2 cm × 96,4 cm (largura total), 35,3 cm de fundo ═══ │
      │ ─── prateleira do duto (MDF 18 mm) ───     │
      │        CÂMARA FRONTAL comum · 23 cm · ~93 L│
      │      ( sub A ▲ )          ( sub B ▲ )      │  falantes para cima, no baffle horizontal
baffle├──────────────────────┬─────────────────────┤  (2 furos de 15")
      │  CÂMARA TRASEIRA A   │  CÂMARA TRASEIRA B  │
      │  selada · 28 cm alt. │  selada · 28 cm alt.│  ~69 L líquidos cada
      │  47,3 × 56,4 cm      │  47,3 × 56,4 cm     │  (divisória vertical no meio)
fundo └──────────────────────┴─────────────────────┘
       ↑ frente (cabine)
```

**Volumes**

- Câmaras traseiras (2, seladas, separadas por divisória): 47,3 × 56,4 × 28 cm = 74,7 L brutos → **~69 L líquidos cada** (−5 L do falante, −1 L de travas). Alvo 65–75 L.
- Câmara frontal (comum aos dois): 96,4 × 56,4 × 23 cm = 125 L brutos → −17,7 L (ar dentro do duto) −6,1 L (prateleira) −6 L (aros/cones) −2 L (travas) = **~93 L líquidos**. Alvo 90 L.
- Duto em fenda: **largura 96,4 cm (interna total) × altura 5,2 cm = 501 cm²; comprimento 35,3 cm** medido do painel frontal para dentro. Usa o tampo como teto, as laterais como paredes e a prateleira como piso. **Fb = 55 Hz.**
  - Quer mais "tremer" (grave mais fundo, um pouco menos alto)? **Fb 50 Hz → prateleira 46,6 cm**. Quer mais "pancada"? **Fb 60 Hz → 26,7 cm**.
  - Corte a prateleira 2–3 cm mais comprida e apare depois de medir: a fórmula é de duto redondo e a fenda usa 3 paredes da caixa, então o ajuste fino é na medição de impedância (REW) ou no WinISD.
  - Chanfre/arredonde a borda interna da prateleira — reduz o "sopro".
  - Folga entre o fim do duto e a traseira: 56,4 − 35,3 = 21 cm ✓ (precisa ser ≥ altura do duto).
- Falantes: furo de ~35,5 cm (confira no datasheet), centrado em cada metade do baffle. O ímã fica na câmara traseira (28 cm de altura para ~20 cm de profundidade do falante ✓). O aro sobe ~6–7 cm na câmara frontal; do baffle até a prateleira há 16 cm → ~9 cm de folga ✓.

**Lista de corte** (MDF 18 mm, ~4 m² → **1 chapa de 2,75 × 1,85 m**; peça o corte na madeireira):

| Peça | Qtd | Medida (cm) |
|---|---|---|
| Tampo e fundo | 2 | 100 × 60 |
| Laterais | 2 | 52,8 × 60 |
| Traseira | 1 | 96,4 × 52,8 |
| Frente | 1 | 96,4 × 45,8 (vai do fundo até a prateleira; acima ficam a boca do duto de 5,2 cm e o tampo) |
| Baffle horizontal (2 furos de 15") | 1 | 96,4 × 56,4 |
| Divisória vertical (entre as traseiras) | 1 | 56,4 × 28 |
| Prateleira do duto | 1 | 96,4 × 35,3 (corte com 38 para aparar) |
| Travamentos | 6–8 | ripas 5 × 45–55 |

**Montagem**

- Cola PVA em toda junta + parafuso a cada 10–12 cm; silicone por dentro das câmaras traseiras (selada que vaza vira dutada errada — o grave fica embolado e o cone perde controle).
- **Baffle duplo (36 mm)** onde os falantes montam, se der: 3.000 W fazem MDF simples "respirar". Custa meia chapa a mais.
- Travas: 2 ripas em cada câmara traseira (fundo↔baffle) e 2–3 na frontal (baffle↔tampo, fora do caminho do duto); um sarrafo sob a prateleira no meio do vão (96 cm flexiona).
- Bornes duplos ou passagem de cabo vedada com silicone; 6 mm² dos bornes até cada bobina.
- Sem enchimento na câmara frontal; nas traseiras é opcional (manta fina só nas paredes).
- **Fixe a caixa** (cintas/olhais nos ganchos do porta-malas) — 85 kg soltos numa freada é arma.
- Manta antirruído na tampa traseira e lataria em volta: "tremer tudo" é o objetivo, mas chapa batendo é ruído, não grave.

## Lista de compra — opções de orçamento (R$, estimativa sem pesquisa de preço)

| Item | Especificação que importa | Onde comprar | Econômico | Equilibrado | Caprichado |
|---|---|---|---|---|---|
| 2 × Subwoofer 15" | 1.500 W RMS **reais**, **DVC 4+4 Ω**, Fs 38–45 Hz, Xmax ≥ 10 mm, bobina ≥ 3", ímã pesado, datasheet com T/S publicado | Mercado Livre loja oficial / Magalu / Amazon (nota + garantia; falsificação é comum) | Linhas SPL de entrada (Ultravox, Triton, Hinor) — 1.400–1.800 | Eros Hammer / Oversound / Spyder — 1.800–2.400 | Eros Target / Bravox / JBL Selenium — 2.600–3.600 |
| Módulo monobloco | 4.000 W RMS @ 1 Ω **medido a 12,6 V**, classe D, LPF + subsônico, proteção térmica | Mercado Livre loja oficial (marca nacional com assistência) | Taramps HD 4000 / Stetsom EX 4000 — 1.300–1.700 | Taramps Smart 5 / Banda Expert 4000 — 1.800–2.300 | SounDigital 4000.1 EVO 5 / Taramps HD 5000 — 2.300–3.000 |
| Cabo positivo bateria → porta-malas | **OFC de verdade** (cobre), 5 m | Loja nacional com OFC comprovado (peso, cor do corte) | 50 mm² (0 AWG) — 350–450 | **70 mm²** — 450–600 | 2 × 50 mm² — 700–900 |
| Cabos curtos (bat. aux ↔ módulo + negativo no chassi) | 35–50 mm² OFC, ~2,5 m + terminais prensados | Loja nacional | 150–220 | 200–300 | 300–400 |
| 2 porta-fusíveis + fusíveis | ANL/mega: 300 A (cabo 50 mm²) ou 350–400 A (cabo 70 mm²); um a ≤ 40 cm de cada bateria | Mercado Livre / loja de som | 120–200 | 180–280 | 250–400 |
| Bateria auxiliar (porta-malas) | Estacionária ou AGM, ≥ 100 Ah, selada ou com ventilação | Loja de baterias nacional (Moura / Heliar / Freedom) | 100–115 Ah — 800–1.100 | 150 Ah — 1.100–1.500 | AGM 150–180 Ah ou 2 × 100 Ah — 1.800–2.600 |
| Isolador / relé de bateria | ≥ 200 A contínuos, ou relé automático por tensão (VSR) | Mercado Livre | Relé 200 A — 120–200 | VSR 200–300 A — 200–350 | Relé 500 A + chave seccionadora — 300–500 |
| Big 3 | 3 cabos 35–50 mm² OFC ~1 m + terminais (alternador→bateria, bateria→chassi, motor→chassi) | Loja nacional | 150–250 | 200–300 | 300–450 |
| Alternador | ≥ 150 A para tocar sem drenar; 250–300 A para tocar no talo por horas | Retífica / especializada em alternador de som | Original + Big 3 + voltímetro — 0 (**limite: toca em rajadas; caiu de 12 V, abaixa**) | 150–180 A recondicionado/adaptado — 1.200–2.000 | 250–300 A — 2.500–4.000 |
| Voltímetro digital no painel | Leitura 10–16 V | Shopee / AliExpress / ML | 30–60 | 40–80 | Voltímetro + sensor de temperatura — 80–150 |
| Cabo de falante | 4–6 mm² OFC, ~6 m + terminais | Loja nacional / ML | 60–100 | 80–130 | 120–200 |
| RCA blindado 5 m + cabo remote | Blindagem dupla; passa do lado oposto ao cabo de força | ML / Shopee | 40–80 | 80–150 | 150–300 |
| Caixa bandpass | MDF 18 mm (1 chapa) + cola PVA, parafusos, silicone, bornes, carpete | Madeireira (corte) + loja de construção; bornes ML/Shopee | Você monta — 500–750 | Você monta, baffle duplo — 750–1.100 | Marceneiro/loja de som monta com este projeto — 1.200–2.000 |
| Fixação + manta antirruído | Cintas/olhais, cantoneiras; manta asfáltica na tampa traseira | Loja de construção / ML | 60–120 | 120–250 | 250–500 |
| **Total estimado** | | | **R$ 5.080 – 7.030** | **R$ 8.200 – 11.740** | **R$ 12.850 – 19.000** |

Leitura: o **Equilibrado** é o primeiro que eu chamaria de "sistema". O Econômico funciona, mas com alternador original você toca em períodos curtos, de olho no voltímetro. Repare: o que separa as colunas não é o falante — é a elétrica.

## Onde economizar / onde não

- **Economize:** voltímetro, RCA, remote, carpete/acabamento, bornes (Shopee/Ali), montar a caixa você mesmo, fusíveis ANL genéricos de vendedor bem avaliado.
- **Não economize:** cabo OFC (CCA vendido como "cobre" é praga em kit barato), fusíveis, bateria auxiliar, falantes (definem o som e são o que queima), MDF 18 mm de verdade (nada de MDP/aglomerado), e o alternador se você pretende tocar mais que alguns minutos seguidos.

## Riscos e cuidados

- **Tensão abaixo de 12 V no pico** → módulo protege ou distorce. É o sintoma nº 1 de 4 kW em elétrica original.
- **Bandpass esconde o cone:** você não vê o falante batendo no fim de curso. Subsônico em ~35 Hz **sempre ligado**; se ouvir um "toc" seco no grave, é fundo de bobina — abaixa.
- Módulo 4.000 > falantes 3.000: só é seguro com ganho em **54,8 V AC** e bass boost zero. Ganho no máximo = clipping = bobina queimada em 1 Ω rapidinho.
- **1 Ω é onde o módulo mais esquenta:** ventilação, não tampe com tapete; longe da bateria.
- Bateria no porta-malas: fixa em suporte, borne positivo coberto; estacionária comum solta gás — prefira AGM/selada ou garanta ventilação.
- "RMS de mentira": 1.500 W RMS em falante de R$ 400 não existe. Peso do ímã e bobina de 3"+ são a checagem rápida.
- Som audível fora do carro é infração de trânsito (CTB art. 228) — onde e quando, você escolhe; só não diga que não avisei.
- **Audição:** 140 dB+ dentro do carro causa dano em minutos. Toque com vidro aberto, não fique dentro no volume máximo.

## Próximos passos

1. Escolha os subs (**DVC 4+4 Ω**) e baixe o datasheet → coloque os T/S no **WinISD** com: traseira 69 L selada, frontal 93 L, duto 501 cm² × 35,3 cm. Confira Fb ≈ 55 Hz, excursão abaixo de 40 Hz e velocidade do duto. Ajuste volumes se o Vas real divergir muito.
2. Compre a elétrica **junto com** o módulo, não depois: bateria auxiliar, cabo 70 mm², 2 fusíveis, Big 3, voltímetro.
3. Mande cortar o MDF pela lista; monte, vede, deixe a cola curar 24 h antes de tocar.
4. Instale: Big 3 → cabo até o porta-malas com fusível na bateria → relé → bateria auxiliar → fusível → módulo. Negativo curto no chassi lixado. RCA do lado oposto ao cabo de força.
5. Regule com multímetro: bass boost 0, LPF 80 Hz, subsônico 35 Hz, tom de 45 Hz a 0 dB, rádio a ~80% do volume, **54,8 V AC** na saída sem falante ligado.
6. Teste olhando o voltímetro: se cair abaixo de 12 V no grave forte com motor ligado, ou você abaixa, ou o alternador entra na lista.

## Projeto salvo

Gravei o projeto com histórico de decisões em:
`C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-5\old_skill\run-1\outputs\projetos\bandpass-2x15\projeto.md`

Quando escolher falante e módulo, me manda os datasheets que eu atualizo o dimensionamento nele.
