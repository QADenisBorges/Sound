# Conferência da compra em loja física — 10/10/2026

Análise feita a partir das 60 fotos recebidas (agora organizadas nas subpastas desta pasta). **Nada foi atualizado no guia (`guia/dados.js`) nem no `projeto.md` ainda** — as dúvidas abaixo precisam ser decididas antes.

Legenda da coluna "Situação": ✅ confere com a lista · ⚠️ confere com ressalva · ❓ dúvida/possível erro · ➖ não está na lista de materiais.

## Itens identificados × lista de materiais

| Pasta / foto | Item identificado | Item da lista | Situação | Observação |
|---|---|---|---|---|
| `fiacao/cabo-forca-vermelho-*` | Cabo flexível vermelho, ~1 m, cobre, **10 mm²** (confirmado pelo usuário em 10/10) | M07 (10 mm² vermelho) | ✅ | — |
| `fiacao/cabo-forca-preto-*` | Cabo flexível preto, ~1 m, cobre, **10 mm²** (confirmado pelo usuário em 10/10) | M07 (10 mm² preto) | ✅ | — |
| `fusiveis/porta-fusivel-lamina-fusivel-laranja-40A-*` | Porta-fusível de lâmina média (ATO) com fios vermelhos + fusível laranja **40 A** (confirmado pelo usuário em 10/10) | M08 (porta-fusível + 40 A) | ⚠️ | Fusível certo. Os fios do porta-fusível parecem finos (≈2,5–4 mm²) para um ramal de 40 A; a lista pede ≥ 6 mm². Se for fino, esse porta-fusível não serve para o módulo. |
| `fusiveis/porta-fusivel-lamina-fusivel-vermelho-5A-*` | Porta-fusível de lâmina média com fios vermelhos finos + fusível vermelho **5 A** (confirmado pelo usuário em 10/10; no padrão ATO vermelho costuma ser 10 A — vale conferir o número gravado) | M09 (porta-fusível + 1 A) | ⚠️ | É o "5 A provisório" combinado em 10/10: protege o fio, não tanto o processador. Porta-fusível serve; trocar o fusível por 1–2 A médio quando achar. |
| `fusiveis/fusivel-mini-2A-*` | Fusível **mini** (lâmina pequena), cinza, marcado "2" = 2 A | M09 (fusível 1–2 A) | ❓ | Valor certo, **padrão errado**: é mini, não entra no porta-fusível médio. Só serve se comprar um porta-fusível mini. Já estava registrado na memória de 10/10. |
| `conectores/terminal-faston-femea-amarelo-*` | 8 × terminal faston fêmea pré-isolado **amarelo (4–6 mm²)**, 6,3 mm, R$ 1,00/un (recibo MDL) | M13 (faston fêmea, 4 + 4) | ❓ | A **cor amarela é para fio de 4–6 mm²**. A fiação interna da BS-369 é fina (≈0,5–1 mm²): o cano de crimpagem amarelo não aperta um fio desses — o fio escapa ou fica frouxo. O certo é faston **vermelho (0,5–1,5 mm²)** ou azul (1,5–2,5 mm²). Também falta conferir a largura dos terminais da JBL (muitos falantes têm um de 6,3 mm e outro de 4,8 mm). Alternativa com o que você tem: soldar o fio no terminal amarelo (kit de solda chegou) — funciona, mas não é crimpagem. |
| `conectores/terminais-faston-amarelos-conjunto-8un` | Os 8 terminais juntos | M13 | ❓ | Idem acima. |
| `fiacao/cabo-paralelo-branco-2x2-5mm2-*` | Cabo paralelo branco 2 × 2,5 mm², etiqueta da loja "2x2,5 paralelo 10 mts", cobre | M10 (2 × 2,5 mm², 7 m) | ✅ | 10 m em vez de 7 m: sobra. Sem friso visível de polaridade — marcar um lado com caneta/fita antes de cortar. Conferir se 2,5 mm² entra no borne de mola da BS-369 (previsto no guia). |
| `fiacao/cabo-paralelo-cristal-vermelho-*` e `fiacao/cabo-paralelo-fino-vermelho-preto-*` | Dois cabos paralelos (2 veias) **já possuídos antes desta compra**: um de 2 × 1,0 mm² e outro de 2 × 1,5 mm² (informação do usuário, 10/10 — qual é qual ainda não confirmado) | — | ➖ | Não entraram pela lista; servem de reserva. Usos possíveis: o 2 × 1,5 cobre C4/C5 (alimentação do processador, M11) e C6/C7 (REM); o 2 × 1,0 serve para REM. Se o condutor for CCA (raspar: prateado por dentro), não usar em falante. |
| `fiacao/fio-branco-fino-*` | Fio flexível branco, 1 veia, ~2 m, cobre | M11 (fio flexível 1,5 mm²) | ⚠️ | Bitola não confirmada: pelo corte, parece 1,0–1,5 mm². Para o +12 V e GND do processador (C4/C5), 1,0 mm² também serve (corrente < 1 A). Confirmar na nota. |
| `cabos-sinal/cabo-rca-mxt-1m-vermelho` + `recibos/recibo-cabo-rca-mxt` | Cabo 2 RCA + 2 RCA MXT profissional, 1 m, vermelho — R$ 59,28 − desc. = **R$ 54,00**, qtd 1 | M12 (2 cabos RCA duplos) | ✅ | O segundo cabo RCA duplo o usuário já tinha em casa (10/10). Os dois cobrem S1–S4. |
| `fixacao/parafusos-ciser-3-5x19-*` + recibos | Parafuso AA cabeça panela Phillips Ciser 3,5 × 19 mm, zincado, cartela c/ 30 — R$ 3,70 | M14 (AA 3,5 × 13–16 mm) | ⚠️ | 19 mm é **mais comprido** que o previsto (13–16). Só serve se a torre/flange da BS-369 tiver ≥ 20 mm de material onde o parafuso entra; senão a ponta sai do outro lado. Medir a profundidade da torre antes de furar. Cabeça panela pede arruela: ok, há arruelas na foto. |
| `fixacao/parafusos-ciser-3-5x19-e-arruelas-*` | Arruelas lisas zincadas (≈ 8–10 un) | M14 ("panela + arruela") | ⚠️ | Não aparecem em nenhum recibo — vieram de onde? (Só para o registro ficar completo.) |
| `vedacao-e-tratamento/fita-espuma-adere-e105s-*` | Fita de espuma de polietileno Adere E-105S, 19 mm × 5 m, autoadesiva, célula fechada — R$ 33,60 (O Ferrageiro) | M15 (EVA 2–3 mm) | ❓ | Material certo (polietileno de célula fechada é equivalente ao EVA para vedação). **Espessura: 4,0 mm** pelo catálogo da Adere (E-105S = espuma branca 4,0 mm; pesquisa de 10/10, fonte AECweb). Um pouco acima dos 2–3 mm da lista: serve, comprimindo no aperto dos parafusos sem forçar. Largura de 19 mm é maior que a flange da JBL: cortar ao meio no comprimento ou aparar o excesso interno. |
| `vedacao-e-tratamento/fibra-poliester-saco` | Saco grande de fibra de poliéster siliconada (enchimento de almofada) | M16 (fibra, ~100 g) | ✅ | Quantidade de sobra: o projeto usa 40–50 g por caixa. Pesar na balança de cozinha na hora de encher (passo da montagem). Foto recebida às 19:05. |
| `vedacao-e-tratamento/silicone-acetico-tekbond-50g-*` + recibo MDL | Silicone acético transparente Tekbond, 50 g — R$ 9,90 | M17 (silicone neutro) | ⚠️ | Decisão de 10/10 já aceita o acético: só em plástico, longe de metal/eletrônica, cura 24–48 h com a caixa aberta. 50 g basta para vedar furos e frestas das duas caixas. |
| `vedacao-e-tratamento/fita-asfaltica-vedacit-*` | Vedacit Fita Multiuso para reparos, aluminizada, 10 cm × 10 m, **1 mm** | M18 (≈1,5–2 mm, rolo 10 cm) | ⚠️ | Mais fina que o previsto. Serve: em 3,5 L de caixa plástica o efeito é amortecer a parede, e dá para aplicar em **duas camadas** nas paredes maiores (tem 10 m, sobra). O rótulo pede primer em superfície porosa — plástico não é poroso, basta limpar com álcool. |
| `ferramentas/alicate-crimpador-rj45-bestfer` | Alicate crimpador Bestfer 2 em 1, 7½" — matrizes **8P/6P (RJ45/RJ11)** + lâmina de corte/descasque | (ferramenta para M13) | ❓ | **Esse alicate é de conector de rede (RJ45), não crimpa terminal faston.** As matrizes 8P/6P não apertam o cano do terminal. Para faston pré-isolado precisa de alicate de terminais (matriz vermelha/azul/amarela) — ou soldar os fios nos terminais, já que o kit de solda chegou. |

### Itens da lista que **não apareceram** nas fotos
- **M21** Conector de emenda de alavanca (Wago 221), 3 un — não vi. Sem ele, a emenda do sub (passo 2.8) vai de solda.
- **M09** Fusível de **1 A ou 2 A de lâmina média** — não veio (veio 2 A mini e 10 A médio).
- **M13** Faston na bitola certa (vermelho 0,5–1,5 mm²) — não veio (veio amarelo 4–6 mm²).

### Recibos
- `recibos/recibo-mdl-terminais-faston-e-silicone`: MDL Materiais Elétricos, doc. 033039 — 8 × terminal 4–6 mm fêmea pré-isolado (R$ 8,00) + silicone acético 50 g Tekbond (R$ 9,90) = **R$ 17,90**.
- `recibos/recibo-parafusos-ciser-*`: parafuso pan Phillips Ciser 3,5×19 c/30 ZB — **R$ 3,70**.
- `recibos/recibo-cabo-rca-mxt`: cabo 2RCA+2RCA 1 m MXT prof. vermelho, 1 un — R$ 59,28 − R$ 5,28 = **R$ 54,00**.
- Fita de espuma: etiqueta de preço O Ferrageiro **R$ 33,60** (sem recibo na foto).
- Sem recibo/etiqueta na foto: cabos de força, porta-fusíveis e fusíveis, cabo paralelo branco, cabo cristal, cabo bicolor fino, fio branco, arruelas, fita asfáltica, alicate.

## Bitolas estimadas pelas fotos (sem nota — 10/10, 19 h)

Método: comparação de larguras na mesma foto, usando como régua o fusível de lâmina (19,1 mm) e o cabo paralelo branco 2 × 2,5 mm² (cada veia ≈ 3,8 mm de diâmetro externo). Precisão de ±1 bitola; onde a decisão depende do valor, há um teste de régua.

| Cabo | Medida na foto | Estimativa | Confiança | Teste decisivo |
|---|---|---|---|---|
| Paralelo branco | etiqueta da loja | **2 × 2,5 mm²** | alta | — |
| Fio branco fino (processador) | ⌀ externo ≈ 2,5–3,0 mm | **1,0 ou 1,5 mm²** | média | Não precisa: os dois servem para C4/C5 (< 1 A). |
| Cabo de força vermelho e preto | — | **10 mm²** (confirmado pelo usuário) | alta | — |
| Fios do porta-fusível laranja (40 A) | ⌀ externo ≈ 4,4–4,9 mm (fusível = 19,1 mm) | **2,5 ou 4 mm²** | média | Régua: ≈ 4,5 mm → 4 mm²; ≈ 4 mm → 2,5 mm². Abaixo dos 6 mm² da lista. |
| Fios do porta-fusível vermelho (5 A) | ⌀ externo ≈ 3,6 mm | **1,5 ou 2,5 mm²** | média | Não precisa: serve para o processador. |
| Cabo cristal/vermelho e bicolor vermelho/preto | — | **2 × 1,0 e 2 × 1,5 mm²** (informado pelo usuário; a estimativa pela foto tinha dado menos) | alta | Confirmar qual é qual pela marcação na capa. |

Sobre os fios do porta-fusível de 40 A: o rabicho tem ~10 cm e a BOB 60A limita a corrente a 40 A contínuos. Com 4 mm², um rabicho desse tamanho não esquenta no uso real (música ≈ 10–15 A médios, picos a 40 A) e um curto ainda queima o fusível na hora — dá para usar, registrando o desvio. Com 2,5 mm², trocar o porta-fusível (midi ou lâmina com fio ≥ 6 mm²).

## Critério definido pelo usuário (10/10, noite)
Montar com o que já está em mãos. Só entra compra nova se for de **extrema importância para a segurança dos equipamentos** ou se o resultado ficar **muito ruim** sem ela. Medições de 11/10 de manhã: fios do porta-fusível de 40 A, altura da torre da BS-369, largura dos terminais da JBL, número gravado no fusível vermelho.

## Decisões pendentes (para discutir antes de atualizar o guia)

1. **Porta-fusível de 40 A** — fusível confirmado (40 A). Falta a bitola dos fios: ≈ 4 mm² usa com o desvio registrado; 2,5 mm² troca por midi ou lâmina com fio grosso.
2. **Fusível do processador** — 5 A provisório (confirmado). Trocar por 1–2 A médio quando achar, ou porta-fusível mini para o 2 A mini.
3. **Terminais faston amarelos** — DECIDIDO (10/10): o fio interno da BS-369 será **soldado** dentro do terminal amarelo, com termorretrátil do kit por cima; sem compra de faston vermelho nem de alicate de terminais. Pendente só a largura dos terminais da JBL (6,3 / 4,8 mm): se um for de 4,8, solda direto no terminal do falante.
4. **Alicate RJ45** — DECIDIDO (10/10): não entra no projeto; usuário segue com solda. Pode ser devolvido ou guardado (a lâmina serve para descascar fio).
5. **Cabo RCA** — resolvido: o segundo já existe em casa.
6. **Cabo cristal vermelho** e **cabo fino vermelho/preto** — já possuídos (2 × 1,0 e 2 × 1,5). Decidir se o 2 × 1,5 substitui o fio branco fino na alimentação do processador e se um deles faz o REM (C6/C7).
7. **Parafuso 3,5 × 19** — medir a profundidade da torre da BS-369 antes de furar; se < 20 mm, trocar por 13–16 mm ou cortar a ponta.
8. **Fita de espuma** — 4 mm confirmado por catálogo; usar, cortando a largura para a flange.
9. **Bitola dos cabos de força** — 10 mm² confirmado. Fio branco fino: 1,0 ou 1,5, indiferente.
10. **Conectores de alavanca (M21)** — DECIDIDO (10/10): não comprar; emenda do sub por solda + termorretrátil (passo 2.8).
