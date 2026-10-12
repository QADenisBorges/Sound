---
name: documentacao-projeto
description: Cria e atualiza a documentação de montagem de um projeto — guia em HTML mais três PDFs (lista de compras, guia de montagem e referência técnica) — a partir do modelo em `documentacao/modelo/`. Ficha de compra por item com foto real, passo a passo com checklist, mapas de bornes desenhados de fotos reais e glossário automático. Use SEMPRE que o usuário pedir documentação, guia, tutorial, manual ou passo a passo de montagem de um projeto, lista de compras ilustrada, "gera o PDF", "atualiza o guia/a documentação", ou quando uma decisão nova (peça trocada, cabo refeito, valor de ajuste, item comprado) mudar um projeto que já tem guia — mesmo que ele só diga "atualize".
---

# Documentação de projeto

Você transforma as decisões de um projeto em um guia que a pessoa usa com a mão na massa: comprar certo na loja, montar sem erro e consultar depois. O guia é escrito para o dono do projeto, e os parâmetros dizem como outra pessoa acha os valores do próprio equipamento.

Um guia com um borne trocado ou uma quantidade ambígua é pior do que nenhum, porque a pessoa confia no papel. Por isso cada valor vem de uma fonte (foto, manual, decisão registrada), e cada mudança é conferida no navegador e no PDF antes de ser entregue.

## Onde está cada coisa
- `documentacao/modelo/LEIAME.md`: **formato completo do `dados.js`**, figuras, equipamentos e ilustrações. Leia antes de editar dados. É a fonte de verdade do formato; esta skill não o repete.
- `documentacao/modelo/guia.js` e `guia.css`: renderizador e visual (iguais para todos os projetos).
- `documentacao/modelo/equipamentos.js` e `ilustracoes.js`: bibliotecas que crescem a cada projeto.
- `projetos/<projeto>/guia/`:
  - `index.html`, `compras.html`, `montagem.html` e `referencia.html`: iguais entre si, só muda `window.GUIA_MODO`;
  - `dados.js` e `img/`;
  - os PDFs `<meta.arquivo>-<parte>-v<versão>.pdf`.
- Exemplo completo e conferido: `projetos/home-theater-2.1/guia/`.
- `perfil.md` (raiz do Som): preferências do usuário sobre documentação. Leia.
- `references/verificacao.md`: conferência no navegador (script JS) e no PDF.
- `references/armadilhas.md`: problemas que já aconteceram e como evitar. Leia antes de gerar ou baixar algo.
- `scripts/pdf.py`: gera os três PDFs e aponta transbordo de página, marcação crua e versões antigas.

## Qual é o pedido?
| Pedido | O que fazer |
|---|---|
| Levantamento ("analise como documentar") | Só analisar e propor, sem criar arquivos. Separe fato observado de sugestão. |
| Guia novo | Proponha o plano (abaixo) e **espere autorização** antes de criar arquivos. |
| Atualizar guia existente ("atualize", "corrija", "acrescente") | Faça direto: esse é o pedido. |
| Baixar foto da internet | Sempre peça antes, com arquivo, origem, tamanho e licença. |

Quando o usuário restringir a etapa ("não implemente", "não crie arquivos"), a restrição vale até ele liberar a próxima fase.

## Guia novo
1. **Levantar.**
   - Leia os registros do projeto (`projeto.md`, listas, decisões) e as fotos dos equipamentos.
   - Confirme com o usuário o que já foi comprado e o que falta: um inventário errado contamina a lista de compras inteira.
   - Valores técnicos (corte, bitola, ganho, fusível) vêm das decisões do projeto ou do `consultor-som`. Esta skill registra e cita a fonte, não decide sozinha.
2. **Propor o plano**, em poucas linhas:
   - as três partes;
   - os materiais (tem / comprar / adiado);
   - as etapas e os passos;
   - os equipamentos a desenhar e as ilustrações novas;
   - as fotos a baixar.

   Espere o "ok".
3. **Montar a pasta.**
   - Copie `projetos/home-theater-2.1/guia/` sem os PDFs e sem o `img/` do outro projeto.
   - Ajuste os caminhos `../../../documentacao/modelo/` se a profundidade mudar.
   - Reescreva o `dados.js` na ordem do LEIAME: parâmetros → materiais → cabos → sistema → etapas → medições → diagnóstico → fontes → glossário → versões.
4. **Equipamentos e ilustrações** novos: siga as regras de fidelidade abaixo.
5. **Conferir e gerar** (seção Conferência).
6. **Registrar e entregar** (seção Fechamento).

## Atualizar um guia
1. Leia o trecho atual do `dados.js`, e do resumo em texto do projeto se houver, antes de mudar.
2. Liste tudo o que a mudança toca. Uma decisão costuma aparecer em vários lugares:
   - ficha do material, quantidade e preço;
   - cabo e tabela de corte;
   - passo de preparação e passo de ligação;
   - glossário;
   - resumo em texto e total.

   Exemplo: trocar o cabo do sub mexeu em M06, M10 (6 → 7 m), M21 (novo), F3, passo 2.7 (novo), passo 3.8 e no total do resumo.
3. Edite com substituição exata e conferida: script com `assert trecho in texto`, ou Edit. Nunca regrave o arquivo inteiro de memória.
4. Suba `meta.versao` e acrescente em `versoes` o que mudou e por quê.
5. Faça a conferência, gere os PDFs novos, apague os da versão anterior e registre.

## Como escrever
O usuário não gosta de material denso: o essencial fica à vista e o detalhe, recolhido.

**Ficha de compra** (um material por cartão):
- `pedir`: a frase que se lê no balcão, na unidade **em que a loja vende**. Exemplo: "7 metros de cabo paralelo; cada metro já tem os dois fios".
- `alerta`: o único cuidado que não pode passar.
- `exigir`: requisitos obrigatórios.
- `conferir`: o que checar com o produto na mão.
- `armadilha`: a compra errada mais comum. Exemplos: CCA no lugar de cobre, padrão de fusível errado, "10 mm" de diâmetro em vez de 10 mm².

Para cada item, pergunte-se: "como alguém compraria isto errado?".

**Passo**:
- Até ~7 ações curtas, uma por linha, com o verbo no início.
- Cada passo cabe em **uma página A4**. Se transbordar, enxugue ou divida; não diminua a letra.
- Perigo e atenção ficam à vista. `erro` e `basico` (o porquê, para iniciante) ficam recolhidos.
- `validar: true` em todo passo ainda não feito na prática.

**Formato geral**:
- Tabelas com até 4 colunas.
- Nada de caixa dentro de caixa; no máximo um destaque colorido por bloco.
- Todo parâmetro tem `como`: diz como outra pessoa acha o valor para o equipamento dela.
- Termo técnico novo ganha entrada no `glossario`, com `busca` que não case com outra palavra (ver armadilhas).
- Português claro, frases curtas, número com unidade e faixa (3–3,6 Ω), vírgula decimal.

## Fidelidade (não pular)
- Borne, ordem, polaridade, valor e ferramenta só a partir de **foto real ou manual**. Registre a origem em `fonte`.
- Foto de cabeça para baixo: gire antes de ler a ordem. A régua do SD800.4 já foi lida invertida uma vez.
- Imagem gerada por IA nunca entra no guia nem serve de referência para ligação.
- Dúvida sem resposta: escreva "a confirmar" em `fonte` e marque `validar: true` nos passos que dependem dela.

## Fotos das fichas
Ordem de preferência:
1. Foto própria.
2. Wikimedia Commons, com autor, licença e link.
3. Imagem do anúncio, marcada "uso pessoal: trocar antes de compartilhar".

Sem foto, use `foto: { pendente: '...' }` e siga em frente.

Antes de baixar, peça autorização com arquivo, origem, tamanho e licença. Salve em `img/` com o nome `mNN-descricao.jpg`, até 900 px. Como buscar no Commons e pegar a imagem de anúncio do ML: `references/armadilhas.md`.

## Conferência
Antes de entregar, sempre:
1. **Servidor**: preview `guia-som` (`.claude/launch.json`, porta 8765, raiz `Som/`). O `pdf.py` sobe um temporário se precisar.
2. **Navegador**: rode o script de `references/verificacao.md`. Ele confere nas quatro páginas:
   - ids duplicados e âncoras quebradas;
   - blocos `.pendente` (equipamento, ilustração ou tabela não encontrados);
   - parâmetro desconhecido e marcação crua;
   - cabos ligados a bornes que não existem na biblioteca;
   - se o conteúdo novo aparece na parte certa.
3. **PDF**: rode `python .claude/skills/documentacao-projeto/scripts/pdf.py projetos/<projeto>/guia`. Ele gera os três PDFs e avisa de página quase vazia (transbordo), marcação crua e versões antigas. Olhe as páginas alteradas em PNG (`--png montagem:13`).
4. **Celular**: no preset mobile do navegador, `scrollWidth <= innerWidth`.
5. **Leitura técnica do que mudou**: os valores batem com as decisões; confira unidades, polaridade e quantidade na unidade de venda.

## Fechamento
- Apague os PDFs da versão anterior (`pdf.py --apagar-antigos`).
- Atualize o resumo em texto do projeto (ex.: `montagem-2.1.md`), inclusive os totais.
- Registre no histórico do `projeto.md` a data, a decisão e o motivo.
- Envie os três PDFs com SendUserFile (`display: attach`), dizendo a página onde está a novidade.
- Diga o que ficou pendente (fotos, passos a validar) e pergunte só o que depende do usuário, como a autorização de download.
- Se o modelo mudou (`guia.js`, `guia.css` ou bibliotecas):
  - atualize o `LEIAME.md` (versão e formato);
  - regere o guia de exemplo para garantir que nada quebrou;
  - registre no `CHANGELOG.md` desta skill se o processo mudou.

## Limites
- Nunca altere os originais do usuário (fotos, pasta de exemplos). Trabalhe em cópias.
- Nada inventado: medida, borne, preço e especificação vêm de fonte vista ou ficam como estimativa rotulada.
- Preço no guia é faixa de referência ("R$ a–b"). Cotação real é com a skill `pesquisa-precos`.
- Preferência pessoal nova vai para `perfil.md`, não para esta skill.
