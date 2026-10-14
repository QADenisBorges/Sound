# Armadilhas já encontradas

Cada item diz o problema, a causa e o que fazer. Acrescente um item quando algo novo der errado.

## Conteúdo
- **Quantidade ambígua.** "Cabo paralelo 2 × 2,5 mm², 6" foi lido como 12 m (6 de cada fio).
  - Escreva na unidade de venda e explique: "7 metros de cabo (cada metro já tem os dois fios)".
- **Bitola × diâmetro.** Anúncio de "cabo 10 mm" costuma ser o diâmetro externo, não 10 mm² de cobre.
  - Diga isso na `armadilha` da ficha.
- **OFC × CCA.** O que importa é ser cobre (não alumínio cobreado) e ter a bitola real.
  - OFC é detalhe. Não faça o usuário pagar por OFC achando que é isso que garante o cabo.
- **Inventário.** O registro dizia que itens tinham sido comprados e não tinham.
  - Confirme com o usuário o que está em mãos antes da lista de compras.
- **Foto de equipamento de cabeça para baixo.** A ordem da régua do SD800.4 saiu invertida.
  - Gire a foto (PIL, 180°) e leia as letras de pé antes de desenhar.
- **Emenda em saída em ponte.** Os dois fios carregam sinal; nenhum é terra.
  - Emenda de fita isolante é risco de curto.
  - Bitolas diferentes sem solda: use conector de alavanca, um por fio.
- **Checagem invisível na lista de compras.** Na página de compras, os passos com fichas mostram só os alertas e as fichas: as `acoes` não aparecem.
  - O que tem que ser feito antes da compra (ex.: testar se o cabo cabe no borne) vai num **alerta** do passo 1.2 ou no `alerta`/`conferir` da ficha.
  - O script de conferência pega isso se o texto estiver em `ESPERADO`.

## Glossário automático
- **Falso positivo** na lista "Termos usados nesta parte":
  - "corte" casou com "alicate de corte";
  - "Re" casou com "Religue";
  - "chave" casou com "chave de fenda".
  - Use `busca` com expressões específicas ("frequência de corte", "chaves do módulo") e `exato: true` para siglas.
  - O `termoAparece` do `guia.js` só casa no início de palavra.
- **Regex gerado por script Python.** As barras de escape (`\\p{L}`) se perderam ao escrever JS a partir de string Python.
  - Código com regex se edita com Edit, não por gerador.

## Renderização e PDF
- **Imagem com `loading="lazy"`** pode não aparecer no PDF. Não use lazy nas fichas.
- **Passo transbordando** para uma página com 3–4 linhas.
  - Causas: passo com muitas ações, ou figura de 4 painéis.
  - O `pdf.py` avisa. Enxugue o texto.
  - Na impressão, os painéis de sequência têm altura máxima de 34 mm (`guia.css`); não aumente sem conferir os passos com figura.
- **Ids duplicados** no anexo da lista de compras (o anexo repete os detalhes das fichas).
  - O anexo usa listas simples, sem checkbox com id.
  - O contador de progresso conta só a lista de bolso.
- **Estouro no celular** por item flex.
  - Contêineres levam `min-width: 0; max-width: 100%`.
  - Teste no preset mobile do navegador do app, não no headless.
- **Captura de tela do navegador do app** às vezes não responde.
  - Use o `pdf.py --png` ou o Chrome headless com `--screenshot` e recorte com PIL.

## Ferramentas no Windows
- **Console do Python em cp1252** quebra com "Ω", "→", "≈". Rode com `PYTHONIOENCODING=utf-8` (o `pdf.py` já se ajusta).
- **Heredoc grande no Bash** truncou o conteúdo.
  - Use o Write para criar um script Python no scratchpad.
  - O script faz substituições com `assert trecho in texto`.
- **Servidor de preview** pode ter caído entre um uso e outro. O `pdf.py` sobe um temporário. Para o navegador, chame `preview_start guia-som` de novo.

## Fotos da internet (sempre com autorização antes)
- **Wikimedia Commons**: busque pela API e anote autor, licença e link da página do arquivo.
  - Busca: `https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srsearch=<termos>&format=json`.
  - Dados do arquivo: `prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=900`.
  - Erro 429 ao baixar: use a URL de miniatura (`upload.wikimedia.org/.../thumb/...`), com pausa de alguns segundos entre arquivos.
- **Mercado Livre**: a API e o navegador do app levam 403 ou pedem verificação de conta.
  - Use o Claude in Chrome (onde o usuário está logado), só leitura.
  - Pegue o `og:image` do anúncio e feche a aba.
  - Marque a foto como "uso pessoal: trocar antes de compartilhar".
- **Nunca** use imagem gerada por IA, nem para ilustrar uma ligação.

## Sessão na nuvem (Linux)
- **Chrome não gera o PDF** quando roda como root: precisa de `--no-sandbox` (o `pdf.py` já põe). O Chromium fica em `/opt/pw-browsers/`.
- **PyMuPDF** pode não estar instalado: `pip install pymupdf`.
- **Fontes do Linux** diferem das do Windows: compare com a versão anterior gerada na mesma máquina antes de culpar a mudança por um transbordo.
- **Conferência no navegador** sem o navegador do app: Playwright (`pip install playwright`) com o Chromium de `/opt/pw-browsers/`. Para ver a montagem inteira, grave `guia:<meta.id>:vista = tudo` no localStorage antes de abrir.
- **Chip de parâmetro não quebra linha**: `{{p:id}}` com unidade longa dentro de uma ação estoura a tela do celular. Escreva o valor por extenso na ação.
