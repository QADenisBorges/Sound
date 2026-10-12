# Modelo de guia de montagem (v1.9, 10/10/2026)

Gera um guia de montagem em **HTML interativo** e em **PDF A4** a partir de um arquivo de dados por projeto.
Organização: **Materiais** e depois as etapas que o projeto pedir, divididas pelo que depende de quê (ex.: no 2.1, Caixas, Cabo do sub e Eletrônica em paralelo e uma Integração no fim). Dentro de cada etapa, os passos se agrupam em **fases** na ordem do trabalho (preparar → tratar → montar → validar), pelo campo `fase`. Não force uma ordem fixa: duas frentes independentes viram duas etapas, e a dependência real vai em `depende` (ids) e `requer` (texto) do passo.
O processo de criar, atualizar e conferir um guia está na skill `documentacao-projeto` (`.claude/skills/documentacao-projeto/`); este arquivo é a referência do formato.

## Navegação (v1.9)
- **Menu lateral** (`aside.lateral`, montado pelo `guia.js` em todas as partes): partes do guia com progresso e a árvore da parte atual. Em telas de menos de 1000 px vira um painel aberto pelo botão **Menu** da barra. Não vai para o PDF.
- **Vistas da montagem** pelo endereço: `montagem.html` sem âncora mostra o painel "Onde estou", o mapa e a visão; `#etapa-2` mostra a etapa inteira; `#passo-2-4` mostra só o passo, com trilha (Etapa › Fase), Anterior/Próximo e setas do teclado. O botão "Ver tudo numa página" (salvo no navegador) desliga as vistas e mostra o guia contínuo, que é o que o PDF imprime. Compras e Referência são contínuas, com o item ativo realçado no menu conforme a rolagem.
- Links para um passo, de qualquer parte: `montagem.html#passo-<id com - no lugar de .>`.

## Partes do guia (v1.2)
O guia é dividido pelo momento de uso. As quatro páginas usam o mesmo `dados.js`, e a variável `window.GUIA_MODO` diz qual delas montar:

| Página | `GUIA_MODO` | Para quê | PDF |
|---|---|---|---|
| `index.html` | `inicio` | Entrada: as três partes e como o sistema funciona | — |
| `compras.html` | `compras` | Lista de bolso (levar à loja) + uma ficha por item; no PDF, os detalhes vão para um anexo | `<arquivo>-compras-v<versão>.pdf` |
| `montagem.html` | `montagem` | Preparação e montagem; modo passo a passo na tela; um passo por página no PDF | `<arquivo>-montagem-v<versão>.pdf` |
| `referencia.html` | `referencia` | Parâmetros, conexões, corte, mapas de bornes, regulagem, medições, diagnóstico, fontes | `<arquivo>-referencia-v<versão>.pdf` |

Cada etapa dos dados diz a qual parte pertence (`peca: 'compras'` ou `peca: 'montagem'`). O nome dos PDFs vem de `meta.arquivo` e `meta.versao`.

**Regras de visualização** (o pedido do usuário foi "menos informação em pouco espaço"):
- **O essencial fica à vista, o resto recolhido.**
  - Ficha: foto, nome, "peça na loja" e um alerta.
  - Passo: o que fazer, os alertas de perigo e atenção, as figuras e o "deu certo se".
  - Erro comum, explicação e dica ficam no "ver mais".
- Tabelas com **no máximo 4 colunas**.
- Letra de 17 px na tela e 11 pt no PDF.
- No máximo um destaque colorido por bloco.
- Nada de caixa dentro de caixa.

## Arquivos

| Arquivo | Papel | Muda por projeto? |
|---|---|---|
| `guia.css` | Visual da tela e da impressão (A4), tema claro/escuro, cores de fio | Não |
| `guia.js` | Lê os dados e monta a página: capa, sumário, fichas de passo, tabelas, diagramas, checklists | Não |
| `equipamentos.js` | Biblioteca de equipamentos desenhados a partir de fotos reais (mapas de bornes) | Cresce: cada aparelho novo entra uma vez |
| `ilustracoes.js` | Biblioteca de ilustrações: procedimentos genéricos (ponta de cabo, faston, porta-fusível, teste da pilha), quadros certo × errado e vistas de montagem (BS-369) | Cresce |
| `<projeto>/guia/dados.js` | Conteúdo do projeto (`window.GUIA`) | **Sim** |
| `<projeto>/guia/index.html` | Página que carrega os 3 scripts | Copiar e ajustar os caminhos |

Exemplo completo: `projetos/home-theater-2.1/guia/`.

## Como criar o guia de um projeto novo
1. Copie `projetos/home-theater-2.1/guia/` para `projetos/<novo>/guia/` e ajuste os caminhos `../../../documentacao/modelo/` no `index.html`, se a profundidade mudar.
2. Reescreva o `dados.js`, nesta ordem:
   1. parâmetros;
   2. materiais;
   3. cabos;
   4. sistema;
   5. etapas e passos;
   6. medições;
   7. diagnóstico;
   8. fontes.
3. Se aparecer um equipamento novo, desenhe-o em `equipamentos.js` a partir de **foto real** ou de manual (ver regras abaixo).
4. Abra no navegador. Pelo disco funciona; para testar também a impressão, use o servidor local `guia-som` em `.claude/launch.json`.
5. Gere os três PDFs e confira com `python .claude/skills/documentacao-projeto/scripts/pdf.py projetos/<novo>/guia`.
   - O script avisa de página quase vazia (passo que transbordou) e de marcação crua.
   - À mão também funciona: Chrome ou Edge → Imprimir → Salvar como PDF (A4, **sem** cabeçalho e rodapé, gráficos de fundo **ligados**), uma vez para cada parte.
   - Na impressão, os painéis de sequência têm altura máxima de 34 mm, para um passo com figura de 4 painéis caber em uma página.

## Formato do `dados.js` (`window.GUIA`)

| Chave | Conteúdo |
|---|---|
| `meta` | `id` (curto, usado no salvamento local), `tipo`, `titulo`, `resumo`, `versao`, `data`, `autor`, `nivel`, `tempo` |
| `visao` | Um parágrafo sobre como o sistema funciona |
| `cadeia` | `[{ rotulo, detalhe }]`: faixa de blocos da visão do sistema |
| `parametros` | `[{ id, rotulo, valor, un, como, fonte }]`. `como` ensina outra pessoa a achar o valor para o equipamento dela. |
| `materiais` | `[{ id: 'M01', item, spec, qtd, sit: 'tem' \| 'comprar' \| 'adiado', onde, preco, pedir, alerta, foto, papel, exigir: [], conferir: [], armadilha, nota, uso }]`. `uso` (v1.7) = `{ finalidade, local, modo: [], momento, cuidados: [] }`: vira o bloco "Onde, como e quando" da ficha (na tela, recolhido; no anexo do PDF, aberto), com "Usado em" calculado a partir de `passos[].materiais`. `pedir` é a frase pronta para a loja, e `alerta` o cuidado principal (os dois ficam à vista); o resto vai para o detalhe. `preco` no formato `R$ a–b` entra no total da lista de compras. |
| `cabos` | `[{ id, tipo, de, para, bitola, comp, corte, pontas, protecao, verificar, bornes, validar }]`. `tipo`: `energia`, `terra`, `rem`, `sinal`, `falante`, `ac`. `bornes: ['equipamento:idDoBorne']` desenha o cabo no mapa de bornes. `corte` faz o cabo aparecer na tabela de corte. |
| `sistema` | Diagrama de ligação: `w`, `h`, `nos: [{ id, x, y, w, h, rot, sub, estilo: 'equip' \| 'prot', ty, portas: [[dx, dy, texto, anchor]] }]`, `ligacoes: [{ cabo, tipo?, pts: [[x, y], …], tag: [x, y], rot? }]` |
| `tabelas` | Tabelas livres: `{ nome: { cab: [...], linhas: [[...]] } }` |
| `medicoes` | `[{ id, medida, como, esperado, pendente }]`: viram campos de preenchimento. `pendente: true` (v1.8) põe a medida nas pendências do painel "Onde estou" enquanto estiver vazia. |
| `etapas` | `[{ id, titulo, curto, intro, blocos, passos }]` |
| `diagnostico` | `[{ sintoma, causa, acao }]` |
| `glossario` | `[{ termo, def, busca: ['palavra', …], exato }]`. A Referência mostra o glossário completo; a Lista de compras e o Guia de montagem mostram no fim só os termos que aparecem neles ("Termos usados nesta parte"), procurando as palavras de `busca` (padrão: o próprio termo). `exato: true` diferencia maiúsculas (REM, RCA, P2). Evite palavras que tenham outro sentido no texto (ex.: "corte" casa com "alicate de corte"). |
| `fontes`, `versoes` | Apêndice: de onde vem cada dado e o histórico |

**Passo** (`etapas[].passos[]`):
`{ id: '2.3', titulo, objetivo, tempo, risco: 'baixo' | 'medio' | 'alto', validar, ferramentas: [], materiais: ['M17'], requer, alertas: [{ tipo: 'perigo' | 'atencao' | 'dica', texto }], acoes: [], figuras: [], verificacao: [], erro, basico }`

- `materiais` (v1.7): ids dos materiais usados no passo; viram links para a ficha, e a ficha lista os passos em "Usado em". Ferramentas ficam em `ferramentas`; material de consumo, em `materiais`.

- `fase` (v1.8): nome da fase de trabalho; passos consecutivos com a mesma fase ganham um cabeçalho (letra, nome, passos e materiais da fase) e aparecem agrupados no **Mapa do trabalho**.
- `depende` (v1.8): ids dos passos que precisam estar feitos antes. Um passo está **feito** quando todas as suas `acoes` estão marcadas (salvo no navegador). Na tela, cada passo mostra o estado — **Feito**, **Pode fazer agora** (nada pendente antes) ou **Esperando** (com links para o que falta) — e o painel **"Onde estou"** (entrada e topo da montagem) lista o próximo passo recomendado, o que pode ser feito agora, o que está esperando e as pendências (medições com `pendente: true` sem valor e materiais não "tem"). Nada disso vai para o PDF.
- `prioridade` (v1.8, número): entre os passos que podem ser feitos agora, o de maior prioridade vira o "próximo passo recomendado" (ex.: o que dispara um relógio de cura).
- `espera` (v1.8): `{ apos: '2.4', horas: 24, rotulo }`: tempo de cura contado a partir do momento em que o passo `apos` foi concluído.
- `requer` (texto, opcional, desde a v1.5) aparece como "Antes, precisa: …" junto dos links de `depende`. Use para explicar a dependência (cura, conferência antes de energizar, peça que precisa estar pronta). Passo sem `depende` pode ser feito a qualquer momento dentro da sua etapa.
- `acoes` vira checklist numerado; o progresso fica salvo no navegador.
- `verificacao` = "Como saber que deu certo". `erro` = "Erro comum".
- `basico` = explicação para iniciante. Fica recolhida na tela e aberta no PDF.
- `validar: true` mostra o selo "A validar na 1ª montagem". Use em todo passo ainda não conferido na prática.

**Figura** (em `figuras` ou em `blocos` da etapa):
- `{ tipo: 'sistema' }`
- `{ tipo: 'mapa', equip: 'sd800.4-saida', legenda }`
- `{ tipo: 'tabela', ref: 'cabos' | 'corte' | 'materiais' | 'medicoes' | 'parametros' | 'diagnostico' | <nome em tabelas> }`
- `{ tipo: 'ilustracao', id, params, legenda }`: uma ilustração da biblioteca. Em `params`, texto pode usar `{{p:id}}`.
- `{ tipo: 'sequencia', legenda, passos: [{ id, params, titulo?, texto? }] }`: painéis numerados (procedimento passo a passo).
- `{ tipo: 'comparar', legenda, itens: [{ id, ok: true | false, titulo?, texto? }] }`: quadros certo × errado.
- `{ tipo: 'compras', sit: ['comprar', 'adiado'] }`: uma ficha por material (foto, nome, peça na loja e alerta à vista; o resto em "por que, como conferir e dica").
- `{ tipo: 'foto', src, alt, credito, titulo?, marcas: [{ x, y, w, h, cor, rotulo, redondo?, tracejada? }], legenda }` (v1.7): foto real anotada. `x, y, w, h` em % da imagem; `cor`: `silicone`, `fita`, `gaxeta`, `fibra`, `proibido`, `furo`, `verificar`, `info` (chave numerada embaixo da foto). Várias fotos numa figura: `{ tipo: 'foto', itens: [{ src, … }, …], legenda }`. Marca `tracejada` = suposição a confirmar. Só fotos reais; as marcas vêm de medidas ou do que se vê na foto.
- `{ tipo: 'pendente', texto }`

**Marcações no texto:**
- `{{p:id}}` mostra o valor do parâmetro, com link para a tabela.
- `{{c:C1}}` mostra a etiqueta do cabo, que destaca o mesmo cabo no diagrama e nas tabelas.
- `**negrito**` e `` `código` ``.

## Equipamentos (`equipamentos.js`)
`'id': { nome, vista, fonte, w, h, corpo: { x, y, w, h, rx }, elementos: [...] }`

Tipos de elemento:
- `regua`, `borne` (parafuso), `pino` (conector), `rca`, `pot` (potenciômetro), `chave` (LP/F/HP), `led`, `texto`, `grupo` (colchete com rótulo, ex.: ponte), `porta`, `fio`.
- Elementos com `id` recebem cabos.
- `stub` desvia o fio para o lado, usado quando há outro conector logo abaixo.
- `naoUsar: true` deixa o elemento esmaecido.

**Regras de fidelidade** (não pular):
1. Só entra o que foi visto numa **foto real** ou num **manual**. Registre a origem em `fonte`.
2. **Ordem e legendas exatas**, com o painel na orientação de leitura (letras de pé). Foto tirada de cabeça para baixo deve ser girada antes de copiar a ordem: na régua do SD800.4, a ordem lida na foto invertida é o contrário da real.
3. Proporções podem ser aproximadas; posições relativas, não.
4. Imagem gerada por IA nunca serve de referência para borne, polaridade, valor ou ferramenta.
5. Dúvida não resolvida vai para `fonte` ("a confirmar") e para `validar: true` nos passos que dependem dela.

## Fichas de compra (materiais)
Cada material vira um cartão com:
- **foto**: `{ src, alt, credito, licenca, url, legenda }`, ou `{ pendente: 'descrição' }` enquanto não houver foto;
- **papel**: para que serve e por que importa;
- **exigir**: requisitos obrigatórios;
- **conferir**: checklist marcável para fazer na loja;
- **armadilha**: a compra errada mais comum;
- **nota**: dica.

Fotos, nesta ordem de preferência:
1. Foto própria do item.
2. Foto real de licença livre (Wikimedia Commons), com autor, licença e link.
3. Imagem do anúncio de referência, marcada "uso pessoal: trocar antes de compartilhar".

Foto gerada por IA não entra. Baixar foto da internet exige autorização do usuário: diga o arquivo, a origem e o tamanho antes.
Imagens do guia ficam em `<projeto>/guia/img/` (JPG de até 900 px; as originais não são alteradas).

## Ilustrações (`ilustracoes.js`)
`'id': { titulo, fonte?, w, h, desenhar(p) }`: `desenhar` devolve o conteúdo SVG em texto.
- Há peças prontas para montar desenhos novos: `cabo`, `borneCorte`, `faston`, `cota`, `cotaV`, `seta`, `marca` (certo/errado) e `txt`.
- As cores vêm só das classes `il-*`, ligadas aos tokens do `guia.css`. Nada de cor fixa no desenho, para funcionar nos dois temas e na impressão.
- Procedimento genérico pode ser esquemático. Vista de objeto real (como `bs369-explodida`) segue as medidas registradas e declara em `fonte` o que ainda falta validar.
- Ilustrações prontas:
  - ponta de cabo: `medir-borne`, `desencapar`, `torcer`, `inserir-borne`, `cobre-exposto`, `fio-solto`;
  - faston: `faston-desencapar`, `faston-inserir`, `faston-crimpar`, `faston-puxar`;
    - `params.terminal`: `vermelho`, `azul` ou `amarelo` (classes `il-faston-*` no `guia.css`, v1.6). Para terminal soldado, use só desencapar → inserir → puxar, com `texto` em cada painel.
  - fibra: `fibra-pesar`, `fibra-afofar`, `fibra-acomodar` (certo), `fibra-socada` (errado);
  - outras: `porta-fusivel`, `teste-pilha`, `bs369-explodida`.

## Convenções visuais
- Cada tipo de fio tem cor **e** traço próprios, para funcionar em impressão P&B: energia contínua grossa, terra traço-ponto, REM pontilhado, sinal tracejado, falante em linha dupla (dois condutores) e AC traço-ponto-ponto.
- Risco: baixo (verde), médio (âmbar), alto (vermelho). Alertas: perigo, atenção, dica.
- Cada passo começa com o número, o objetivo e as etiquetas de tempo, risco e ferramentas.

## Limitações conhecidas (v0.1)
- O diagrama do sistema usa coordenadas manuais (`pts`); ainda não há roteamento automático.
- Foto anotada existe desde a v1.7 (`tipo: 'foto'`); ainda não há edição visual das marcas (as coordenadas são escritas à mão em %).
- O PDF depende do JavaScript da página; gere pelo navegador, não por conversor de HTML sem JS.
