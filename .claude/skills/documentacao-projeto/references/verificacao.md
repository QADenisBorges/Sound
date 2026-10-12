# Conferência do guia

Faça as três conferências a cada versão, antes de enviar os PDFs.

## 1. No navegador (as quatro páginas)

Abra uma aba do servidor local (preview `guia-som`, `http://localhost:8765/`) e rode o script abaixo com a ferramenta de JavaScript do navegador.
- Ajuste `BASE` para a pasta do guia.
- Em `ESPERADO`, ponha textos que a mudança desta versão deve fazer aparecer em cada parte. Isso pega conteúdo que caiu na parte errada, por exemplo um passo com `peca` errada.

```js
const BASE = '/projetos/<projeto>/guia/';
const ESPERADO = { compras: [], montagem: [], referencia: [] };
const PAGINAS = ['index', 'compras', 'montagem', 'referencia'];
const out = {}, idsPorPagina = {}, linksCruzados = [];
for (const p of PAGINAS) {
  const f = document.createElement('iframe');
  f.style.cssText = 'width:1000px;height:800px;position:absolute;left:-3000px';
  f.src = `${BASE}${p}.html?t=${Date.now()}`;
  document.body.append(f);
  await new Promise(r => f.onload = r);
  await new Promise(r => setTimeout(r, 700));
  const d = f.contentDocument, w = f.contentWindow, G = w.GUIA || {}, txt = d.body.innerText;
  const ids = [...d.querySelectorAll('[id]')].map(e => e.id);
  idsPorPagina[p] = new Set(ids);
  d.querySelectorAll('a[href*=".html#"]').forEach(a => linksCruzados.push([p, a.getAttribute('href')]));
  const EQ = w.GUIA_EQUIPAMENTOS || {}, cabos = G.cabos || [];
  out[p] = {
    versao: G.meta && G.meta.versao,
    idsDuplicados: [...new Set(ids.filter((x, i) => ids.indexOf(x) !== i))],
    ancorasQuebradas: [...new Set([...d.querySelectorAll('a[href^="#"]')].map(a => decodeURIComponent(a.getAttribute('href').slice(1))).filter(h => h && !d.getElementById(h)))],
    pendentes: [...d.querySelectorAll('.pendente')].map(e => e.textContent.slice(0, 80)),
    semFoto: [...d.querySelectorAll('.item-sem-foto small')].map(e => e.textContent).filter(Boolean),
    paramDesconhecido: [...d.querySelectorAll('.param[title="parâmetro desconhecido"]')].map(e => e.textContent),
    caboDesconhecido: [...new Set([...d.querySelectorAll('.cabo[data-cabo]')].map(e => e.dataset.cabo).filter(id => !cabos.some(c => c.id === id)))],
    bornesRuins: cabos.flatMap(c => (c.bornes || []).filter(b => { const [eq, el] = b.split(':'); return !EQ[eq] || !(EQ[eq].elementos || []).some(o => o.id === el); }).map(b => `${c.id} → ${b}`)),
    marcacaoCrua: (txt.match(/\{\{[^}]*\}\}|\*\*|\bundefined\b|\bNaN\b/g) || []).slice(0, 5),
    faltando: (ESPERADO[p] || []).filter(t => !txt.includes(t))
  };
  f.remove();
}
out.linksCruzadosQuebrados = [...new Set(linksCruzados.filter(([, h]) => { const [arq, anc] = h.split('#'); const alvo = arq.replace('.html', ''); return idsPorPagina[alvo] && !idsPorPagina[alvo].has(decodeURIComponent(anc)); }).map(([p, h]) => `${p}: ${h}`))];
out.totalLinksCruzados = linksCruzados.length;
JSON.stringify(out, null, 1);
```

Tudo vazio = ok. `semFoto` não é erro: é a lista de fichas sem foto, para mencionar ao usuário. Depois do script:
- **Console:** leia só os erros. Tem que vir vazio.
- **Celular:** coloque o navegador no preset `mobile`, recarregue cada parte e rode `document.documentElement.scrollWidth <= innerWidth`. Tem que dar `true` em todas. Volte ao preset `desktop` no fim.
  - Não confie no Chrome headless para isso: janela com menos de 500 px dá falso estouro.

## 2. No PDF

```bash
python .claude/skills/documentacao-projeto/scripts/pdf.py projetos/<projeto>/guia --png montagem:<pág>
```

- **ERRO** (código de saída 1): marcação crua (`{{p:…}}`, `**`, `undefined`) ou PDF que não foi gerado.
- **aviso "quase vazia"**: a página não começa um passo e tem pouco texto. Quase sempre é o fim do passo anterior que transbordou. Corrija:
  1. enxugue o texto (junte ações, encurte o alerta e o objetivo);
  2. se não bastar, divida o passo em dois.

  Não diminua a letra. Página de passo curto (começa com "2.2 …") não é marcada.
- Olhe em PNG as páginas que mudaram: o script grava em `%TEMP%\guia-png\`, e você abre o arquivo com Read.
  - Confira que figuras e tabelas não foram cortadas.
  - Confira que o "Deu certo se" ficou na mesma página do passo.

## 3. Leitura técnica do que mudou

- Valores iguais às decisões registradas (`projeto.md`, `consultor-som`), com unidade e faixa.
- Polaridade e borne iguais ao mapa desenhado da foto real.
- Quantidade na unidade em que a loja vende (metro de cabo, não metro de fio).
- O mesmo fato igual em todos os lugares: ficha, cabo, passo, tabela, resumo em texto e total.
