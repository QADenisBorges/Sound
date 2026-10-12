# Rascunho para a documentação do 2.1: fotos, materiais e conexões
Versão 0.1 · 09/10/2026 · **rascunho superado**: a lista de materiais e a tabela de conexões finais estão em `guia/` (v1.0). As fotos da montagem não serão tiradas; as ilustrações foram desenhadas a partir de `componentes existentes/`.
Base: `montagem-2.1.md`, `componentes/*.md` e as fotos de `componentes existentes/`.
Legenda: ⚠️ = conferir na montagem (dado ainda não confirmado).

---

## P0 — Lista de fotos para o fim de semana

**Como fotografar (vale para todas)**
- Celular na **horizontal**; luz lateral difusa (janela). Sem flash direto: ele estoura o metal dos bornes.
- Fundo neutro e liso (papelão, folha A3, pano escuro).
- **Régua ou trena na cena** em toda foto de corte, desencape ou medida.
- Duas fotos por item: **geral** (contexto) e **detalhe** (borne ou terminal enchendo a tela, etiquetas legíveis).
- Mesmo ângulo para o mesmo tipo de foto. Bornes sempre de frente, com as letras do painel legíveis.
- **Se algo der errado, fotografe antes de corrigir** (crimpagem ruim, fio desfiado, cobre aparente). Vira o quadro "certo × errado".
- Nome do arquivo: `F07_faston-crimpado-detalhe.jpg`. Sugestão de pasta: `projetos/home-theater-5.1/fotos-montagem/`.

### Etapa 1 — Materiais
| ID | Foto | Detalhe obrigatório |
|---|---|---|
| F01 | Todos os materiais comprados juntos, sobre o fundo neutro | Vista de cima, nada sobreposto |
| F02 | Fusível de 40 A + porta-fusível | Valor do fusível e tipo (midi/maxi) legíveis |
| F03 | Fusível de 1 A + porta-fusível de lâmina | Valor legível |
| F04 | Cabos de 10 mm², 2,5 mm² e 1,5 mm² | **Marcação impressa da bitola** no isolamento |
| F05 | Terminais faston (as duas larguras) ao lado da régua | Largura legível na régua |
| F06 | Multímetro, ferramentas e alicates | Matriz do alicate de crimpar visível |

### Etapa 2 — Preparação
| ID | Foto | Detalhe obrigatório |
|---|---|---|
| F07 | Cabo cortado ao lado da trena (um de cada tipo) | Comprimento legível |
| F08 | Ponta desencapada ao lado da régua (10 mm², 2,5 mm², 1,5 mm²) | Comprimento do desencape |
| F09 | Faston crimpado: de lado e de cima | Sem cobre para fora do isolamento |
| F10 | Porta-fusível de 40 A montado nos cabos, **sem o fusível** | Cabo bem preso nas duas pontas |
| F11 | Jumper do REM pronto e conector do processador montado fora do aparelho | Ordem GND · REM IN · REM OUT · +12 |
| F12 | Friso de polaridade do cabo de 2,5 mm² | O friso que será o "+" |

### Etapa 3 — Montagem
| ID | Foto | Detalhe obrigatório |
|---|---|---|
| F13 | BS-369 aberta, ainda com o falante original | Interior completo, torres visíveis |
| F14 | Encaixe a seco da JBL: frente e verso | Folga lateral, torres, tweeter × tela |
| F15 | Marcação dos furos com a régua | Medida da diagonal |
| F16 | Interior com o tratamento: manta, vedação das frestas e fita EVA na emenda | Cada material visível |
| F17 | Faston ligado na JBL | Qual fio vai no + |
| F18 | Junta EVA no assento antes de parafusar o falante | Contorno fechado |
| F19 | Fibra colocada, antes de fechar a caixa | Quantidade, sem comprimir |
| F20 | Caixa fechada: frente, traseira e bornes | — |
| F21 | **Vídeo curto (10 s):** teste de polaridade com a pilha | Cone avançando |
| F22 | Régua da BOB 60A ligada (+ trimpot ADJ) | Letras AC/DC e +/− legíveis |
| F23 | Régua do SD800.4 ligada + chaves LP/F/HP | Ponte CH4⊕/CH3⊖ legível |
| F24 | Conector do processador ligado + RCA de entrada e de saída | Números das saídas legíveis |
| F25 | Porta-fusível de 40 A com o fusível, a até 30 cm da fonte | Distância com a trena |
| F26 | Vista geral do rack (fonte, módulo, processador) e do caminho dos cabos | Folga de 20 cm nas laterais da fonte |
| F27 | Multímetro medindo 13,8 V na régua do módulo | Tela legível |
| F28 | Multímetro medindo o ganho: JBL ~15,5 V e sub ~40 V | Tela legível + bornes medidos |
| F29 | Prints do app: entrada, cada saída, limitador, memória salva | Valores legíveis |
| F30 | Sala: foto ampla + distâncias de cada caixa e do sub até o sofá | Trena ou números anotados |

### Medições para anotar durante a montagem
| Medida | Esperado | Medido |
|---|---|---|
| Resistência da JBL L / JBL R (multímetro em Ω, falante solto) | ~3,4 Ω | |
| Resistência do sub (fio solto do módulo) | ~3–3,6 Ω (4 Ω) | |
| Tensão na régua do SD800.4, fonte ligada | 13,8 V | |
| Ganho CH1 / CH2 (V AC, tom de 60 Hz, sem falantes) | 15,5 V | |
| Ganho da ponte CH4⊕/CH3⊖ | 40 V | |
| Comprimentos cortados (C1–C7, F1, F2) | ver tabela de conexões | |
| Distâncias até o sofá: JBL L / JBL R / sub | — | |
| Peso da fibra por caixa | ~40–50 g | |

---

## P1 — Lista de materiais (rascunho)

| ID | Item | Especificação que importa | Qtd | Situação |
|---|---|---|---|---|
| M01 | Fonte Taramps BOB 60A | 40 A contínuos, 12–15 V ajustável; 3 bornes + e 3 bornes − | 1 | ✅ Tem |
| M02 | Processador Taramps PRO 2.4BT + AUDIO | 2 entradas / 4 saídas; conector GND · REM IN · REM OUT · +12; fusível de 1 A | 1 | ✅ Tem |
| M03 | Módulo SounDigital SD800.4 EVO | 4 × 132 W em 4 Ω; ponte de 400 W em 4 Ω; fusível de 40 A | 1 | ✅ Tem |
| M04 | JBL 4TRMS80 | 4 Ω (Re 3,4), 80 W RMS, furo de 93 mm, profundidade de 68 mm | 2 | ✅ Tem |
| M05 | Carcaça BS-369 | Selada, ~3,5 L, bornes de mola | 2 | ✅ Tem |
| M06 | Sub Protech 8" em caixa, com fiação | 4 Ω, ponte CH4⊕/CH3⊖ | 1 | ✅ Tem (instalado) |
| M07 | Cabo flexível 10 mm² vermelho / preto | Cobre (não CCA) | 1 m + 1 m | 🛒 Comprar |
| M08 | Porta-fusível + fusível 40 A | Mesmo padrão (midi ou maxi) | 1 + 1 | 🛒 |
| M09 | Porta-fusível de lâmina + fusível 1 A | 1 A (2 A se não houver) | 1 + 1 | 🛒 |
| M10 | Cabo paralelo 2 × 2,5 mm² | Cobre, com friso de polaridade | ~6 m | 🛒 |
| M11 | Fio flexível 1,5 mm² | Alimentação, GND e REM do processador | ~2 m | 🛒 |
| M12 | Cabo RCA duplo curto | 0,5–1 m | 2 | 🛒 |
| M13 | Terminal faston fêmea isolado | 6,3 mm e 4,8 mm ⚠️ (medir os terminais da JBL) | 4 + 4 | 🛒 |
| M14 | Parafuso autoatarraxante | 3,5 × 12–16 mm | 8–10 | 🛒 |
| M15 | Fita de vedação de espuma/EVA autoadesiva | 2–3 mm | ~2 m | 🛒 Essencial |
| M16 | Fibra siliconada | ~40–50 g por caixa | ~100 g | 🛒 |
| M17 | Silicone neutro | Não acético | 1 bisnaga | 🛒 |
| M18 | Manta asfáltica autoadesiva | Rolo de 10 cm | 1 | 🛒 Recomendado |
| M19 | Multímetro digital | Escala V AC e Ω | 1 | 🛒 Obrigatório |
| M20 | Cabo P2 → 2 RCA blindado | 10 m | 1 | ⏳ Adiado (Bluetooth no fim de semana) |

**Ferramentas:** chaves Phillips e de fenda pequena, estilete, alicate desencapador, alicate de crimpar com matriz para faston isolado, furadeira com broca de 2,5 mm, fita isolante, abraçadeiras, trena e régua, caneta, pilha AA.

---

## P1 — Tabela de conexões (rascunho)

**Convenção proposta:** no cabo paralelo, o **condutor com friso = +**. Na força, vermelho = + e preto = −. Rótulo com o ID nas duas pontas de cada cabo (fita crepe escrita).

| ID | De | Para | Cabo | Comprimento | Terminal / ponta | Proteção | Como verificar |
|---|---|---|---|---|---|---|---|
| C1 | BOB 60A, borne + nº 1 | Porta-fusível de 40 A (entrada) | 10 mm² vermelho | ⚠️ curto; o fusível fica a ≤ 30 cm da fonte | Ponta nua torcida no borne ⚠️ (testar se o 10 mm² entra) | — | Puxão firme não solta |
| C2 | Porta-fusível de 40 A (saída) | SD800.4 +12V | 10 mm² vermelho | ⚠️ medir | Ponta nua torcida | Fusível de 40 A | 13,8 V na régua do módulo |
| C3 | BOB 60A, borne − nº 1 | SD800.4 GND | 10 mm² preto | ⚠️ igual a C1 + C2 | Ponta nua torcida | — | Continuidade (≈ 0 Ω) |
| C4 | BOB 60A, borne + nº 2 | Processador +12 VDC | 1,5 mm² (fio do porta-fusível) | ⚠️ medir | Ponta nua no conector | Fusível de 1 A | LED do processador acende |
| C5 | BOB 60A, borne − nº 2 | Processador GND | 1,5 mm² | ⚠️ medir | Ponta nua | — | Continuidade |
| C6 | Processador +12 VDC | Processador REM IN (jumper) | 1,5 mm² ⚠️ (0,75 mm² se dois fios não couberem no mesmo borne) | ~3 cm | Torcer junto com C4 no borne +12 | — | Liga e desliga pelo app (modo BOB) |
| C7 | Processador REM OUT | SD800.4 REM | 1,5 mm² ⚠️ (o conector do processador pode aceitar só até 0,75 mm²) | ⚠️ medir | Ponta nua | — | LED do módulo acende junto com o app |
| S1–S4 | Processador saídas 1, 2, 3, 4 | SD800.4 entradas CH1, CH2, CH3, CH4 | RCA (2 cabos duplos) | 0,5–1 m | RCA | — | Som em cada canal (teste pelo app) |
| S0 | Celular (Bluetooth) ou notebook (P2 → RCA) | Processador, entradas A (L) e B (R) | — / M20 | — / 10 m | — | — | LED INPUT CLIP não acende em 3/4 do volume |
| F1 | SD800.4 CH1 + / − | Bornes da BS-369 L | 2 × 2,5 mm² (friso = +) | ⚠️ medir (~2,5 m) | Módulo: ponta nua · caixa: borne de mola | — | ~3,4 Ω medindo na ponta do módulo |
| F2 | SD800.4 CH2 + / − | Bornes da BS-369 R | 2 × 2,5 mm² | ⚠️ medir | idem | — | ~3,4 Ω |
| F3 | SD800.4 CH4 ⊕ / CH3 ⊖ | Sub + / − | Já instalado ⚠️ (conferir bitola) | — | — | — | ~3–3,6 Ω; ponte certa |
| I1 / I2 | Borne de mola interno da BS-369 (L e R) | JBL + / − | Fio interno original ⚠️ (bitola a conferir) | Curto | Faston: + ⚠️ largura · − ⚠️ largura | — | Pilha: o cone avança |
| AC | Cabo de força original da BOB 60A | Tomada aterrada | Original (não mexer) | — | Plugue de 3 pinos | Disjuntor da casa | Tomada com terra (pino central) |

**Pontos ⚠️ a resolver na montagem:**
1. Se o 10 mm² entra no borne da BOB 60A (se não entrar: 2 × 6 mm² em dois bornes).
2. Se o conector do processador aceita 1,5 mm² e dois fios no mesmo borne (+12 com o jumper).
3. Largura dos terminais da JBL e qual deles é o +.
4. Bitola do fio interno da BS-369 e da fiação do sub.
5. Comprimentos reais (anotar na tabela de medições).
