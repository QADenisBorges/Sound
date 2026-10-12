# Histórico de mudanças — consultor-som

Mantido pelo `revisor-som`. Entradas mais novas no topo. Backups em `../consultor-som-workspace/historico/`.

## 2026-09-23 17:35 — comportamento (pedido explícito do dono) + perfil
- O quê: `SKILL.md` — seções novas "Perfil do usuário" (lê/atualiza `perfil.md` na pasta Som; preferências ficam lá, não na skill), "Corrigir e ensinar no caminho" (3 gatilhos, teste único "muda alguma decisão?", correção no corpo e conceito em bloco `Vale saber` com teto 1–2, tom que nomeia o fato e não a pessoa) e "Decisão consciente" (parar na decisão quando o pedido contradiz o objetivo declarado ou quebra a coerência; seguir só com confirmação explícita; segurança não cede). Ajustes na Postura ("termo que ele já usou não precisa de explicação"), no template e em "Salvar projetos". `evals/evals.json` — evals 4 (ensino), 5 (firmeza, com perfil de teste) e 7 (controle negativo: usuário que domina não recebe aula); asserções de formato dos blocos nos evals 1–3 e 6. Revisor §2: preferência pessoal → perfil.md, não descarte.
- Por quê: o dono pediu ensino proativo sem bagunça, firmeza contra escolhas que degradam o resultado (só com ciência dele) e mapeamento do perfil. Perfil separado mantém a skill geral.
- Evidência: síntese de painel (3 rascunhos × 3 juízes, workflow wf_944e9d4f-bef); regressão iteration-3 a seguir.
- Snapshot: historico/2026-09-23_173052

## 2026-09-24 22:30 — correção técnica + lacuna
- O quê: `references/automotivo.md` §2 — nem toda marca nacional mede a 14,4 V (algumas usam 12,6 V/1% THD, CTA-2006); módulos de 4 canais sem chave 2CH/4CH exigem sinal nas 4 entradas RCA; crossover de módulo costuma ser fixo.
- Por quê: a referência generalizava "nacionais anunciam a 14,4 V" e levaria a descontar ~25% de uma potência que já estava medida a 12,6 V; o requisito das 4 entradas e o crossover fixo precisaram ser descobertos no manual.
- Evidência: manuais oficiais SounDigital 800.4 EVO6 (rev. SET/2023) e EVO4.0 — "Power at 12.6V @ 60Hz with a maximum THD of 1%", "CTA-2006", "All RCA inputs must be connected", crossover LP/F/HP em 80 Hz.
- Snapshot: historico/2026-09-24_222836

## 2026-09-23 17:25 — lacuna de conhecimento
- O quê: `references/diy.md` §2 — medir volume de caixa irregular (arroz + jarra; fórmula do tronco de pirâmide) e cuidados ao reaproveitar falantes de micro system. `references/residencial-hifi.md` — nova seção de home theater com peças avulsas (módulo automotivo em casa + fonte, decodificador 5.1 sem bass management, TV sem bitstream, 5.1 sem surrounds = 3.1). `evals/evals.json` — eval 6.
- Por quê: numa avaliação de home theater econômico esses pontos precisaram ser improvisados; são armadilhas comuns em projetos de reaproveitamento.
- Evidência: volume do tronco de pirâmide (geometria); falante de micro system com etiqueta "4 Ω 3 W" visto em foto; corrente conferida com `calc_som.py corrente` (800 W/13,8 V → 72 A máx., 9–24 A médio).
- Snapshot: historico/2026-09-23_172057

## 2026-09-22 17:30 — correção técnica + ferramenta faltando (achados da regressão iteration-2)
- O quê: `references/automotivo.md` — fusível nunca maior que a capacidade do cabo, com tabela típica por bitola. `references/diy.md` — PVC brasileiro é nominal pelo diâmetro externo; tabela de diâmetros internos. `scripts/calc_som.py` — comandos `crossover` (1ª/2ª ordem, Butterworth/LR, com polaridade) e `lpad`; exemplos no `SKILL.md`. `evals/evals.json` — asserções mais rígidas (total informado, opção recomendada no orçamento, polaridade sem condição, fusível × cabo).
- Por quê: na regressão, uma resposta sugeriu fusível de 80 A com cabo de 10 mm²; outra calculou duto com o diâmetro nominal do PVC (sintonia sairia mais baixa); valores de crossover e L-pad foram calculados à mão.
- Evidência: fórmulas conferidas (L = Z/(ωQ), C = Q/(ωZ); LR2 8 Ω/3 kHz = 0,849 mH/3,32 µF; L-pad −3 dB/4 Ω = 1,17/9,70 Ω); comandos antigos com a mesma saída; diâmetros internos de PVC esgoto série normal.
- Snapshot: historico/2026-09-22_172642

## 2026-09-22 17:18 — ferramenta faltando + lacuna de conhecimento (vindas dos testes do revisor)
- O quê: `scripts/calc_som.py spl` ganhou `--ref 2.83v --impedancia` (converte sensibilidade em 2,83 V para 1 W); exemplo no `SKILL.md`. `references/diy.md` §4: polaridade do tweeter por ordem do crossover e teste da pilha no woofer. `evals/evals.json`: asserção de polaridade no eval 3.
- Por quê: comparar caixas com sensibilidade em referências diferentes é comum e fácil de errar; a regra estava em `formulas.md` mas não na calculadora. A polaridade no crossover de 2ª ordem precisou ser improvisada num esquema de ligação.
- Evidência: P = V²/Z (2,83 V em 4 Ω = 2 W → −3 dB); comando antigo de `spl` conferido sem alteração de resultado; defasagem de 180° entre PB/PA de 2ª ordem no corte.
- Snapshot: historico/2026-09-22_171747

## 2026-09-22 19:00 — correção técnica + instrução falha (revisão da iteration-1 de testes)
- O quê: `references/diy.md` — alerta de saída em ponte (BTL: nunca ligar negativo do falante ao terra/comum) e tabela de potência da TPA3116 por bateria (4S/5S/6S, limite de 26 V, capacitores ≥ 35 V). `SKILL.md` — coluna "Onde comprar" na tabela de orçamento, conferência de que totais batem com a soma dos itens, informar o caminho real do arquivo salvo, e seção "Automelhoria" ligando ao revisor. `evals/evals.json` — asserções novas.
- Por quê: nos testes, a resposta DIY omitiu o alerta BTL (erro clássico que queima a placa) e não indicou onde comprar cada peça; uma resposta de sala teve total que não batia com os itens; outra informou caminho de salvamento diferente do real.
- Evidência: datasheet TPA3116D2 (VCC recomendado 4,5–26 V; saída BTL); somas conferidas na avaliação dos testes.
- Backup (manual, parcial): consultor-som-workspace/backup-manual-2026-09-22_1900
