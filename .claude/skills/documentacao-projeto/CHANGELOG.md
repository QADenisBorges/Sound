# CHANGELOG — documentacao-projeto

Mudanças no processo da skill. O formato dos dados e o visual do modelo têm o próprio histórico, no `documentacao/modelo/LEIAME.md`.

## 2026-10-09 — v1
- Criação, a partir do modelo de guia v1.4 e do guia do home theater 2.1 (`projetos/home-theater-2.1/guia/`).
- Conteúdo:
  - fluxo de guia novo (plano e autorização) e de atualização (tudo o que uma decisão toca);
  - regras de escrita (ficha de compra, passo em uma página);
  - fidelidade e política de fotos;
  - conferência e fechamento.
- `scripts/pdf.py`: gera os três PDFs pelo Chrome ou Edge headless. Confere marcação crua, página quase vazia (transbordo) e versões antigas, e salva PNG das páginas.
- `references/verificacao.md`: script de conferência no navegador. Cobre:
  - ids duplicados e âncoras;
  - links entre partes;
  - bornes que não existem na biblioteca;
  - parâmetros e cabos desconhecidos;
  - fichas sem foto;
  - conteúdo esperado em cada parte.
- `references/armadilhas.md`: problemas da construção do guia 2.1 e como evitar.
- Primeira execução do `pdf.py` achou dois transbordos antigos (passos 2.3 e 2.4 do 2.1). Correção no modelo: altura máxima de 34 mm para os painéis de sequência na impressão. Montagem passou de 32 para 30 páginas.
