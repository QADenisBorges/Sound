# Histórico de mudanças — consultor-som

Mantido pelo `revisor-som`. Entradas mais novas no topo. Backups em `../consultor-som-workspace/historico/`.

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
