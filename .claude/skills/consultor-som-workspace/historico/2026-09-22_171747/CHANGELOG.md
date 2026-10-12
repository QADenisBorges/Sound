# Histórico de mudanças — consultor-som

Mantido pelo `revisor-som`. Entradas mais novas no topo. Backups em `../consultor-som-workspace/historico/`.

## 2026-09-22 19:00 — correção técnica + instrução falha (revisão da iteration-1 de testes)
- O quê: `references/diy.md` — alerta de saída em ponte (BTL: nunca ligar negativo do falante ao terra/comum) e tabela de potência da TPA3116 por bateria (4S/5S/6S, limite de 26 V, capacitores ≥ 35 V). `SKILL.md` — coluna "Onde comprar" na tabela de orçamento, conferência de que totais batem com a soma dos itens, informar o caminho real do arquivo salvo, e seção "Automelhoria" ligando ao revisor. `evals/evals.json` — asserções novas.
- Por quê: nos testes, a resposta DIY omitiu o alerta BTL (erro clássico que queima a placa) e não indicou onde comprar cada peça; uma resposta de sala teve total que não batia com os itens; outra informou caminho de salvamento diferente do real.
- Evidência: datasheet TPA3116D2 (VCC recomendado 4,5–26 V; saída BTL); somas conferidas na avaliação dos testes.
- Backup (manual, parcial): consultor-som-workspace/backup-manual-2026-09-22_1900
