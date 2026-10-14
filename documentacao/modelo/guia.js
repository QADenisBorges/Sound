/* Modelo de guia de montagem — renderizador v1.4 (10/10/2026)
   Lê window.GUIA (dados do projeto), window.GUIA_EQUIPAMENTOS e window.GUIA_ILUSTRACOES (bibliotecas)
   e monta uma das partes do guia, conforme window.GUIA_MODO:
   'inicio' (página de entrada), 'compras', 'montagem' ou 'referencia'.
   Sem dependências externas; funciona aberto direto do disco (file://) e impresso em PDF. */
(function () {
  'use strict';
  const G = window.GUIA;
  const EQ = window.GUIA_EQUIPAMENTOS || {};
  const IL = window.GUIA_ILUSTRACOES || {};
  const raiz = document.getElementById('guia');
  const MODO = window.GUIA_MODO || 'inicio';
  if (!G || !raiz) { if (raiz) raiz.textContent = 'Dados do guia não encontrados (dados.js).'; return; }

  const SVGNS = 'http://www.w3.org/2000/svg';
  const PARAM = Object.fromEntries((G.parametros || []).map(p => [p.id, p]));
  const CABO = Object.fromEntries((G.cabos || []).map(c => [c.id, c]));
  const TIPOS = {
    energia: '+12 V (energia)', terra: 'Terra (GND)', rem: 'REM (liga/desliga)',
    sinal: 'Sinal (RCA)', falante: 'Falante', ac: 'Rede AC (127/220 V)', bt: 'Bluetooth (sem fio)'
  };
  const RISCO = { baixo: 'Risco baixo', medio: 'Risco médio', alto: 'Risco alto' };
  let nFig = 0;

  /* ---------- utilidades ---------- */
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function fmt(s) {
    let t = esc(s);
    t = t.replace(/\{\{p:([\w-]+)\}\}/g, (m, id) => {
      const p = PARAM[id];
      if (!p) return `<span class="param" title="parâmetro desconhecido">${id}?</span>`;
      const href = MODO === 'referencia' ? `#param-${id}` : `referencia.html#param-${id}`;
      return `<a class="param" href="${href}" title="Parâmetro: ${esc(p.rotulo)}">${esc(p.valor)}${p.un ? ' ' + esc(p.un) : ''}</a>`;
    });
    t = t.replace(/\{\{c:([\w-]+)\}\}/g, (m, id) => {
      const c = CABO[id];
      return `<span class="cabo t-${c ? c.tipo : 'sinal'}" data-cabo="${id}" title="${c ? esc(c.de + ' → ' + c.para) : ''}">${id}</span>`;
    });
    t = t.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`(.+?)`/g, '<code>$1</code>');
    return t;
  }
  function el(tag, attrs, html) {
    const e = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null && v !== false) e.setAttribute(k, v === true ? '' : v);
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function sv(tag, attrs, text) {
    const e = document.createElementNS(SVGNS, tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null) e.setAttribute(k, v);
    if (text !== undefined) e.textContent = text;
    return e;
  }
  const chave = k => `guia:${G.meta.id}:${k}`;
  function ler(k) { try { return localStorage.getItem(chave(k)); } catch (e) { return null; } }
  function gravar(k, v) { try { if (v === null) localStorage.removeItem(chave(k)); else localStorage.setItem(chave(k), v); } catch (e) { /* sem armazenamento: segue sem salvar */ } }

  function checklist(itens, prefixo, classe) {
    const ol = el(classe === 'acoes' ? 'ol' : 'ul', { class: classe || 'check' });
    itens.forEach((txt, i) => {
      const id = `${prefixo}-${i + 1}`.replace(/\./g, '_');
      const li = el('li');
      const cb = el('input', { type: 'checkbox', id: 'cb-' + id });
      cb.checked = ler('cb-' + id) === '1';
      li.classList.toggle('marcado', cb.checked);
      cb.addEventListener('change', () => { gravar('cb-' + id, cb.checked ? '1' : null); li.classList.toggle('marcado', cb.checked); atualizarProgresso(); atualizarEstados(); });
      li.append(cb, el('label', { for: 'cb-' + id }, fmt(txt)));
      ol.append(li);
    });
    return ol;
  }
  function tabela(cab, linhas, opts) {
    const box = el('div', { class: 'tabela' });
    const t = el('table');
    const thead = el('thead'), tr = el('tr');
    cab.forEach(c => tr.append(el('th', { scope: 'col' }, esc(c))));
    thead.append(tr); t.append(thead);
    const tb = el('tbody');
    linhas.forEach(l => {
      const r = el('tr', l.attrs || null);
      (l.celulas || l).forEach((c, i) => r.append(el('td', opts && opts.num && opts.num.includes(i) ? { class: 'num' } : null, c instanceof Node ? '' : c))
      );
      (l.celulas || l).forEach((c, i) => { if (c instanceof Node) r.children[i].append(c); });
      tb.append(r);
    });
    t.append(tb); box.append(t);
    return box;
  }
  function figura(conteudo, legenda, fonte, extra, modo) {
    nFig += 1;
    const f = el('figure', { id: 'fig-' + nFig });
    if (extra) f.append(extra);
    const corpo = el('div', { class: modo === 'html' ? 'fig-corpo fig-html' : 'fig-corpo' });
    corpo.append(conteudo);
    f.append(corpo);
    f.append(el('figcaption', null, `<b>Fig. ${nFig}</b><span>${fmt(legenda)}</span>${fonte ? `<span class="fig-fonte">Fonte: ${fmt(fonte)}</span>` : ''}`));
    return f;
  }

  // cabo de falante = linha dupla (dois condutores): legível também em impressão P&B
  function linhaDupla(svg) {
    svg.querySelectorAll('path.fio.t-falante').forEach(p => {
      const m = p.cloneNode(false);
      m.setAttribute('class', 'fio-miolo c-falante');
      m.removeAttribute('data-cabo');
      p.after(m);
    });
    return svg;
  }

  /* ---------- desenho de equipamento (mapa de bornes) ---------- */
  function desenharEquip(id) {
    const E = EQ[id];
    if (!E) return el('div', { class: 'pendente' }, `Equipamento "${esc(id)}" não está na biblioteca.`);
    const ligs = [];
    (G.cabos || []).forEach(c => (c.bornes || []).forEach(b => {
      const [eq, elem] = b.split(':');
      if (eq === id) ligs.push({ cabo: c, elem });
    }));
    const extra = ligs.length ? 92 : 16;
    const H = E.h + extra;
    const s = sv('svg', { viewBox: `0 0 ${E.w} ${H}`, role: 'img', 'aria-label': `${E.nome} — ${E.vista}`, style: `max-width:${Math.round(E.w * 1.25)}px;min-width:${Math.min(560, E.w)}px;margin-inline:auto` });
    const c = E.corpo;
    s.append(sv('rect', { x: c.x, y: c.y, width: c.w, height: c.h, rx: c.rx || 10, class: 'eq-corpo' }));
    const pos = {};
    (E.elementos || []).forEach(o => {
      const g = sv('g', o.naoUsar ? { class: 'eq-nao-usar' } : null);
      const r = o.r || 12;
      switch (o.tipo) {
        case 'regua': g.append(sv('rect', { x: o.x, y: o.y, width: o.w, height: o.h, rx: 4, class: 'eq-regua' })); break;
        case 'borne':
          g.append(sv('circle', { cx: o.x, cy: o.y, r, class: 'eq-metal' }));
          g.append(sv('line', { x1: o.x - r * .55, y1: o.y - r * .55, x2: o.x + r * .55, y2: o.y + r * .55, class: 'eq-fenda' }));
          if (o.rot) g.append(sv('text', { x: o.x, y: o.y - r - 9, 'text-anchor': 'middle', 'font-size': o.fs || 12, class: 'eq-txt' }, o.rot));
          pos[o.id] = { x: o.x, y: o.y + r };
          break;
        case 'pino':
          g.append(sv('rect', { x: o.x - 9, y: o.y - 9, width: 18, height: 18, rx: 2, class: 'eq-furo' }));
          g.append(sv('rect', { x: o.x - 4, y: o.y - 4, width: 8, height: 8, class: 'eq-metal' }));
          if (o.rot) g.append(sv('text', { x: o.x, y: o.y - 17, 'text-anchor': 'middle', 'font-size': o.fs || 11, class: 'eq-txt' }, o.rot));
          pos[o.id] = { x: o.x, y: o.y + 9 };
          break;
        case 'rca':
          g.append(sv('circle', { cx: o.x, cy: o.y, r: 14, class: 'eq-metal' }));
          g.append(sv('circle', { cx: o.x, cy: o.y, r: 9.5, class: o.cor === 'vermelho' ? 'eq-rca-vermelho' : 'eq-rca-branco' }));
          g.append(sv('circle', { cx: o.x, cy: o.y, r: 3.2, class: 'eq-furo' }));
          if (o.rot) {
            const lado = o.rotLado || 'esq';
            const tx = lado === 'esq' ? o.x - 22 : lado === 'dir' ? o.x + 22 : o.x;
            const ty = lado === 'acima' ? o.y - 22 : o.y + 4;
            g.append(sv('text', { x: tx, y: ty, 'text-anchor': lado === 'esq' ? 'end' : lado === 'dir' ? 'start' : 'middle', 'font-size': o.fs || 12, class: 'eq-txt' }, o.rot));
          }
          pos[o.id] = { x: o.x, y: o.y + 14, dx: o.stub || 0 };
          break;
        case 'pot':
          g.append(sv('circle', { cx: o.x, cy: o.y, r: 11, class: 'eq-regua' }));
          g.append(sv('circle', { cx: o.x, cy: o.y, r: 11, fill: 'none', class: 'eq-linha' }));
          g.append(sv('line', { x1: o.x, y1: o.y, x2: o.x - 6, y2: o.y + 7, class: 'eq-linha' }));
          if (o.rot) g.append(sv('text', { x: o.x, y: o.y - 18, 'text-anchor': 'middle', 'font-size': 10.5, class: 'eq-txt' }, o.rot));
          g.append(sv('text', { x: o.x, y: o.y + 25, 'text-anchor': 'middle', 'font-size': 9, class: 'eq-txt' }, o.sub || 'MIN — MAX'));
          break;
        case 'chave': {
          const ops = o.opcoes || ['LP', 'F', 'HP'];
          const w = ops.length * 18 + 8;
          g.append(sv('rect', { x: o.x - w / 2, y: o.y - 7, width: w, height: 14, rx: 3, class: 'eq-regua' }));
          ops.forEach((op, i) => g.append(sv('text', { x: o.x - w / 2 + 13 + i * 18, y: o.y - 12, 'text-anchor': 'middle', 'font-size': 9.5, class: 'eq-txt' }, op)));
          const sel = ops.indexOf(o.posicao || ops[1]);
          g.append(sv('rect', { x: o.x - w / 2 + 5 + sel * 18, y: o.y - 5, width: 16, height: 10, rx: 2, class: 'eq-metal' }));
          if (o.rot) g.append(sv('text', { x: o.x, y: o.y - 26, 'text-anchor': 'middle', 'font-size': 10, class: 'eq-txt' }, o.rot));
          break;
        }
        case 'led': g.append(sv('circle', { cx: o.x, cy: o.y, r: 4.5, class: 'eq-led' })); if (o.rot) g.append(sv('text', { x: o.x, y: o.y - 9, 'text-anchor': 'middle', 'font-size': 9, class: 'eq-txt' }, o.rot)); break;
        case 'texto': g.append(sv('text', { x: o.x, y: o.y, 'text-anchor': o.anchor || 'middle', 'font-size': o.fs || 12, class: 'eq-txt', 'font-weight': o.peso || 600 }, o.t)); break;
        case 'grupo': {
          const y = o.y;
          g.append(sv('path', { d: `M${o.x1} ${y + 7} V${y} H${o.x2} V${y + 7}`, class: 'eq-linha' }));
          if (o.rot) g.append(sv('text', { x: (o.x1 + o.x2) / 2, y: y - 5, 'text-anchor': 'middle', 'font-size': o.fs || 11, class: 'eq-txt' }, o.rot));
          break;
        }
        case 'fio':
          g.append(sv('path', { d: `M${o.x} ${o.y} v26 q0 14 ${o.curva || 14} 22`, class: `fio t-${o.cor || 'ac'}` }));
          if (o.rot) g.append(sv('text', { x: o.x + (o.curva || 14) + 4, y: o.y + 52, 'font-size': 10, class: 'svg-mut' }, o.rot));
          break;
        case 'porta':
          g.append(sv('rect', { x: o.x - o.w / 2, y: o.y - o.h / 2, width: o.w, height: o.h, rx: 2, class: 'eq-furo' }));
          if (o.rot) g.append(sv('text', { x: o.x, y: o.y - o.h / 2 - 6, 'text-anchor': 'middle', 'font-size': 10, class: 'eq-txt' }, o.rot));
          break;
      }
      s.append(g);
    });
    // ligações do projeto: fio saindo do borne + etiqueta com o ID do cabo
    const base = c.y + c.h;
    const ord = ligs.map(l => ({ ...l, p: pos[l.elem] })).filter(l => l.p)
      .map(l => ({ ...l, tx: l.p.x + (l.p.dx || 0) })).sort((a, b) => a.tx - b.tx);
    let ultimoX = -999, nivel = 0;
    ord.forEach(l => {
      nivel = (l.tx - ultimoX < 48) ? (nivel + 1) % 3 : 0;
      ultimoX = l.tx;
      const yTag = base + 22 + nivel * 24;
      const t = l.cabo.tipo;
      const d = l.p.dx ? `M${l.p.x} ${l.p.y} L${l.tx} ${l.p.y + 14} V${yTag}` : `M${l.p.x} ${l.p.y} V${yTag}`;
      s.append(sv('path', { d, class: `fio t-${t} c-${t}`, 'data-cabo': l.cabo.id }));
      const g = sv('g', { class: `tag t-${t} c-${t}`, 'data-cabo': l.cabo.id });
      const w = l.cabo.id.length * 7.4 + 10;
      g.append(sv('rect', { x: l.tx - w / 2, y: yTag, width: w, height: 18, rx: 3 }));
      g.append(sv('text', { x: l.tx, y: yTag + 13, 'text-anchor': 'middle' }, l.cabo.id));
      g.append(sv('title', null, `${l.cabo.id}: ${l.cabo.de} → ${l.cabo.para}`));
      s.append(g);
    });
    // borda inferior com nome
    s.append(sv('text', { x: 4, y: H - 4, 'font-size': 11, class: 'svg-mut' }, `${E.nome} · ${E.vista}`));
    return linhaDupla(s);
  }

  /* ---------- ilustração (biblioteca) ---------- */
  function desenharIlustracao(id, params) {
    const I = IL[id];
    if (!I) return el('div', { class: 'pendente' }, `Ilustração "${esc(id)}" não está na biblioteca.`);
    const p = {};
    Object.entries(params || {}).forEach(([k, v]) => { p[k] = typeof v === 'string' ? v.replace(/\{\{p:([\w-]+)\}\}/g, (m, pid) => PARAM[pid] ? `${PARAM[pid].valor}${PARAM[pid].un ? ' ' + PARAM[pid].un : ''}` : pid) : v; });
    const s = sv('svg', { viewBox: `0 0 ${I.w} ${I.h}`, role: 'img', 'aria-label': I.titulo, class: 'ilustracao', style: `max-width:${Math.round(I.w * 1.3)}px` });
    s.innerHTML = I.desenhar(p);
    return s;
  }

  /* ---------- diagrama do sistema ---------- */
  function desenharSistema(S) {
    const s = sv('svg', { viewBox: `0 0 ${S.w} ${S.h}`, role: 'img', 'aria-label': 'Diagrama de ligação do sistema' });
    // ligações primeiro (ficam por baixo das caixas)
    (S.ligacoes || []).forEach(l => {
      const t = l.tipo || (CABO[l.cabo] && CABO[l.cabo].tipo) || 'sinal';
      const d = l.pts.map((p, i) => (i ? 'L' : 'M') + p[0] + ' ' + p[1]).join(' ');
      s.append(sv('path', { d, class: `fio t-${t} c-${t}`, 'data-cabo': l.cabo || null }));
    });
    (S.nos || []).forEach(n => {
      const g = sv('g');
      const cls = n.estilo || '';
      g.append(sv('rect', { x: n.x, y: n.y, width: n.w, height: n.h, rx: 7, class: `no-caixa ${cls}` }));
      const ty = n.y + (n.ty !== undefined ? n.ty : (n.sub ? n.h / 2 - 3 : n.h / 2 + 5));
      g.append(sv('text', { x: n.x + n.w / 2, y: ty, 'text-anchor': 'middle', 'font-size': n.fs || 16, class: `no-txt ${cls}` }, n.rot));
      if (n.sub) g.append(sv('text', { x: n.x + n.w / 2, y: ty + 17, 'text-anchor': 'middle', 'font-size': 11.5, class: `no-sub ${cls}` }, n.sub));
      (n.portas || []).forEach(p => g.append(sv('text', { x: n.x + p[0], y: n.y + p[1], 'text-anchor': p[3] || 'middle', 'font-size': 10.5, class: `no-sub ${cls}` }, p[2])));
      s.append(g);
    });
    (S.ligacoes || []).forEach(l => {
      if (!l.tag) return;
      const t = l.tipo || (CABO[l.cabo] && CABO[l.cabo].tipo) || 'sinal';
      const txt = l.rot || l.cabo;
      const w = txt.length * 7.2 + 10;
      const g = sv('g', { class: `tag t-${t} c-${t}`, 'data-cabo': l.cabo || null });
      g.append(sv('rect', { x: l.tag[0] - w / 2, y: l.tag[1] - 9, width: w, height: 18, rx: 3 }));
      g.append(sv('text', { x: l.tag[0], y: l.tag[1] + 4, 'text-anchor': 'middle' }, txt));
      if (l.cabo && CABO[l.cabo]) g.append(sv('title', null, `${l.cabo}: ${CABO[l.cabo].de} → ${CABO[l.cabo].para}`));
      s.append(g);
    });
    return linhaDupla(s);
  }
  function amostraFio(t) {
    const s = sv('svg', { viewBox: '0 0 26 8', width: 26, height: 8, class: 'amostra', 'aria-hidden': 'true' });
    s.append(sv('path', { d: 'M2 4 H24', class: `fio t-${t}` }));
    return linhaDupla(s);
  }
  function controlesCamadas(svg, tipos) {
    const box = el('div', { class: 'camadas so-tela', role: 'group', 'aria-label': 'Camadas do diagrama' });
    tipos.forEach(t => {
      const b = el('button', { class: 'btn', type: 'button', 'aria-pressed': 'true' });
      b.append(amostraFio(t), document.createTextNode(TIPOS[t] || t));
      b.addEventListener('click', () => {
        const on = b.getAttribute('aria-pressed') === 'true';
        b.setAttribute('aria-pressed', on ? 'false' : 'true');
        svg.classList.toggle('oculta-' + t, on);
      });
      box.append(b);
    });
    return box;
  }
  function legendaFios(tipos) {
    const box = el('div', { class: 'row legenda-fios' });
    tipos.forEach(t => { const sp = el('span', { class: 'row', style: 'gap:6px' }); sp.append(amostraFio(t), document.createTextNode(TIPOS[t])); box.append(sp); });
    return box;
  }

  /* ---------- ícones (traço simples, cor do texto) ---------- */
  const ICONES = {
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    busca: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
    alerta: '<path d="M12 3.5L2.5 20h19L12 3.5z"/><path d="M12 10v4.5M12 17.2v.3"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.3"/>',
    loja: '<path d="M3 4h2.2l2.1 11h10.9l2.1-7.8H6.6"/><circle cx="9.2" cy="19" r="1.4"/><circle cx="16.6" cy="19" r="1.4"/>',
    seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    volta: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    mais: '<path d="M6 9l6 6 6-6"/>',
    lista: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
    chave: '<path d="M14.5 6.5a4 4 0 1 0 3 3L21 6l-3-3-3.5 3.5z"/><path d="M11.5 9.5L4 17v3h3l7.5-7.5"/>',
    livro: '<path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z"/><path d="M5 17a3 3 0 0 1 3-3h10"/>'
  };
  const ic = (n, cls) => `<svg class="ico${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${ICONES[n] || ''}</svg>`;

  // bloco recolhível: fechado na tela, aberto na impressão (exceto onde a página leva os detalhes para o anexo)
  function recolhivel(rotulo, conteudo) {
    const box = el('div', { class: 'mais' });
    const bt = el('button', { type: 'button', 'aria-expanded': 'false' }, `${ic('mais')}<span>${esc(rotulo)}</span>`);
    bt.addEventListener('click', () => { const ab = box.classList.toggle('aberto'); bt.setAttribute('aria-expanded', ab); });
    const c = el('div', { class: 'mais-conteudo' });
    (Array.isArray(conteudo) ? conteudo : [conteudo]).forEach(n => n && c.append(n));
    box.append(bt, c);
    return box;
  }
  function alertaBox(a) {
    const nome = { perigo: 'Perigo', atencao: 'Atenção', dica: 'Dica' }[a.tipo];
    return el('div', { class: `alerta ${a.tipo}` }, `${ic(a.tipo === 'dica' ? 'info' : 'alerta')}<div><b>${nome}.</b> ${fmt(a.texto)}</div>`);
  }
  const SIT = { tem: 'Já tem', comprar: 'Comprar', adiado: 'Pode esperar' };
  function faixaPreco(lista) {
    let a = 0, b = 0, ok = false;
    lista.forEach(m => { const r = String(m.preco || '').match(/(\d+)\D+(\d+)/); if (r) { a += +r[1]; b += +r[2]; ok = true; } });
    return ok ? `R$ ${a}–${b}` : '';
  }

  /* ---------- blocos de conteúdo ---------- */
  function blocoFigura(f) {
    if (f.tipo === 'sistema') {
      const svg = desenharSistema(G.sistema);
      const tipos = [...new Set(G.sistema.ligacoes.map(l => l.tipo || (CABO[l.cabo] && CABO[l.cabo].tipo)))].filter(Boolean);
      const wrap = el('div', { class: 'stack', style: 'gap:8px' });
      wrap.append(controlesCamadas(svg, tipos));
      const fig = figura(svg, f.legenda || 'Diagrama de ligação do sistema. Toque num cabo para destacá-lo.', f.fonte);
      fig.querySelector('figcaption').append(legendaFios(tipos));
      wrap.append(fig);
      return wrap;
    }
    if (f.tipo === 'mapa') {
      const E = EQ[f.equip];
      return figura(desenharEquip(f.equip), f.legenda || (E ? `${E.nome}: ${E.vista}.` : f.equip), E && E.fonte);
    }
    if (f.tipo === 'ilustracao') {
      const I = IL[f.id];
      return figura(desenharIlustracao(f.id, f.params), f.legenda || (I ? I.titulo : f.id), f.fonte || (I && I.fonte));
    }
    if (f.tipo === 'sequencia' || f.tipo === 'comparar') {
      const cmp = f.tipo === 'comparar';
      const lista = cmp ? f.itens : f.passos;
      const grade = el('div', { class: (cmp ? 'seq comparar' : 'seq') + ' n' + lista.length });
      lista.forEach((q, i) => {
        const I = IL[q.id];
        const pn = el('div', { class: 'seq-painel' + (cmp ? (q.ok ? ' cmp-ok' : ' cmp-erro') : '') });
        const selo = cmp ? `<span class="cmp-selo">${q.ok ? 'Certo' : 'Errado'}</span>` : `<span class="seq-num">${i + 1}</span>`;
        pn.append(el('div', { class: 'seq-cab' }, `${selo}<b>${fmt(q.titulo || (I ? I.titulo : q.id))}</b>`));
        pn.append(desenharIlustracao(q.id, q.params));
        if (q.texto) pn.append(el('p', { class: 'seq-txt' }, fmt(q.texto)));
        grade.append(pn);
      });
      return figura(grade, f.legenda || (cmp ? 'Certo × errado' : 'Sequência'), f.fonte, null, 'html');
    }
    if (f.tipo === 'foto') return blocoFoto(f);
    if (f.tipo === 'compras') return blocoCompras(f);
    if (f.tipo === 'pendente') return el('div', { class: 'pendente' }, fmt(f.texto));
    if (f.tipo === 'tabela') return blocoTabela(f.ref);
    return el('div');
  }

  /* ---------- menu lateral: partes + árvore da parte atual ---------- */
  const VISTA = () => ler('vista') === 'tudo' ? 'tudo' : 'foco';
  function botaoVista() {
    const bv = el('button', { class: 'btn btn-vista so-tela', type: 'button' });
    const pinta = () => { bv.innerHTML = VISTA() === 'tudo' ? `${ic('lista')}<span>Ver um passo por vez</span>` : `${ic('livro')}<span>Ver tudo numa página</span>`; };
    bv.addEventListener('click', () => { gravar('vista', VISTA() === 'tudo' ? null : 'tudo'); document.querySelectorAll('.btn-vista').forEach(b => b.dispatchEvent(new Event('pintar'))); aplicarVista(); });
    bv.addEventListener('pintar', pinta); pinta();
    return bv;
  }
  function arvoreMontagem() {
    const ul = el('ul', { class: 'arv' });
    const li = (href, txt, cls) => el('li', null, `<a class="${cls || ''}" href="${href}">${txt}</a>`);
    ul.append(li('#inicio', `${ic('busca')}<span>Onde estou</span>`, 'arv-topo'));
    ul.append(li('#mapa', `${ic('lista')}<span>Mapa do trabalho</span>`, 'arv-topo'));
    ul.append(li('#visao', `${ic('livro')}<span>Antes de começar</span>`, 'arv-topo'));
    G.etapas.filter(e => e.peca === 'montagem').forEach(e => {
      const det = el('details', { class: 'arv-etapa', 'data-etapa': e.id });
      det.append(el('summary', null, `<a href="#etapa-${esc(e.id)}"><b>${esc(e.id)}</b> ${esc(e.titulo)}</a><span class="arv-prog" data-prog-etapa="${esc(e.id)}"></span>`));
      let fase = null, n = 0, sub = null;
      e.passos.forEach(pp => {
        if (pp.fase !== fase) { fase = pp.fase; n += 1; sub = el('ul', { class: 'arv-fase' }); det.append(el('p', { class: 'arv-fase-nome' }, `<span class="fase-letra">${String.fromCharCode(64 + n)}</span>${esc(fase || '')}`)); det.append(sub); }
        sub.append(el('li', null, `<a href="#${idPasso(pp)}" data-passo="${esc(pp.id)}"><i class="arv-dot"></i><b>${esc(pp.id)}</b> <span>${esc(pp.titulo)}</span></a>`));
      });
      ul.append(det);
    });
    ul.append(li('#termos', `${ic('livro')}<span>Termos usados</span>`, 'arv-topo'));
    return ul;
  }
  function arvoreCompras() {
    const ul = el('ul', { class: 'arv' });
    ul.append(el('li', null, `<a class="arv-topo" href="#bolso">${ic('loja')}<span>Lista de bolso</span></a>`));
    const grupos = [['comprar', 'Comprar'], ['adiado', 'Pode esperar'], ['tem', 'Já tem']];
    grupos.forEach(([sit, nome]) => {
      const itens = G.materiais.filter(m => m.sit === sit); if (!itens.length) return;
      const det = el('details', { class: 'arv-etapa', open: sit !== 'tem' ? '' : null });
      det.append(el('summary', null, `<a href="#item-${esc(itens[0].id)}"><b>${esc(nome)}</b> <span class="arv-prog">${itens.length}</span></a>`));
      const sub = el('ul', { class: 'arv-fase' });
      itens.forEach(m => sub.append(el('li', null, `<a href="#item-${esc(m.id)}"><b>${esc(m.id)}</b> <span>${esc(m.item)}</span></a>`)));
      det.append(sub); ul.append(det);
    });
    ul.append(el('li', null, `<a class="arv-topo" href="#termos">${ic('livro')}<span>Termos usados</span></a>`));
    return ul;
  }
  function arvoreReferencia() {
    const ul = el('ul', { class: 'arv' });
    const tabs = Object.keys(G.tabelas || {}).map(k => ['#tab-' + k, G.tabelas[k].titulo || 'Configuração do processador']);
    [['#parametros', 'Parâmetros'], ['#conexoes', 'Conexões'], ['#corte', 'Corte e pontas dos cabos'], ['#mapas', 'Mapas de bornes'], ...tabs, ['#medicoes', 'Medições'], ['#diagnostico', 'Se algo der errado'], ['#termos', 'Glossário'], ['#apendice', 'Fontes e versões']]
      .forEach(([h, t]) => ul.append(el('li', null, `<a class="arv-topo" href="${h}"><span>${esc(t)}</span></a>`)));
    return ul;
  }
  function arvoreInicio() {
    const ul = el('ul', { class: 'arv' });
    [['#onde-estou', 'Onde estou'], ['#visao', 'Como o sistema funciona']].forEach(([h, t]) => ul.append(el('li', null, `<a class="arv-topo" href="${h}"><span>${esc(t)}</span></a>`)));
    return ul;
  }
  function lateral() {
    const a = el('aside', { class: 'lateral so-tela', 'aria-label': 'Navegação do guia' });
    a.append(el('a', { class: 'lat-nome', href: 'index.html' }, `<span class="rotulo">Guia</span><b>${esc(G.meta.titulo)}</b>`));
    const partes = el('ul', { class: 'lat-partes' });
    partes.append(el('li', null, `<a href="index.html" ${MODO === 'inicio' ? 'aria-current="page"' : ''}>${ic('busca')}<span>Início</span></a>`));
    Object.entries(PECAS).forEach(([k, P]) => partes.append(el('li', null, `<a href="${P.arquivo}" ${k === MODO ? 'aria-current="page"' : ''}>${ic(P.icone)}<span>${esc(P.nome)}</span><span class="prog" data-prog-parte="${k}"></span></a>`)));
    a.append(partes);
    const arv = MODO === 'montagem' ? arvoreMontagem() : MODO === 'compras' ? arvoreCompras() : MODO === 'referencia' ? arvoreReferencia() : arvoreInicio();
    a.append(el('p', { class: 'lat-titulo' }, 'Nesta parte'));
    a.append(arv);
    if (MODO === 'montagem') a.append(botaoVista());
    a.addEventListener('click', ev => { if (ev.target.closest('a')) document.body.classList.remove('menu-aberto'); });
    const pano = el('div', { class: 'lat-pano so-tela' }); pano.addEventListener('click', () => document.body.classList.remove('menu-aberto'));
    document.body.append(pano);
    return a;
  }
  // realce do item ativo (partes contínuas: compras, referência, início)
  function observarAtivo() {
    const links = [...document.querySelectorAll('.lateral .arv a[href^="#"]')];
    const alvos = links.map(l => document.getElementById(decodeURIComponent(l.getAttribute('href').slice(1)))).filter(Boolean);
    if (!alvos.length) return;
    const marcar = () => {
      let atual = alvos[0];
      alvos.forEach(t => { if (t.getBoundingClientRect().top <= 140) atual = t; });
      links.forEach(l => l.toggleAttribute('aria-current', l.getAttribute('href') === '#' + atual.id));
    };
    window.addEventListener('scroll', marcar, { passive: true }); marcar();
  }

  /* ---------- vistas da montagem por URL: #inicio · #etapa-N · #passo-N-M · tudo ---------- */
  function aplicarVista() {
    if (MODO !== 'montagem') return;
    const h = decodeURIComponent(location.hash.slice(1));
    const tudo = VISTA() === 'tudo';
    document.body.classList.toggle('vista-foco', !tudo);
    document.body.classList.remove('vista-passo', 'vista-etapa', 'vista-inicio');
    document.querySelectorAll('.vista-on').forEach(n => n.classList.remove('vista-on'));
    const trilha = document.getElementById('trilha'); if (trilha) trilha.innerHTML = '';
    let alvo = h ? document.getElementById(h) : null;
    const passoEl = alvo && alvo.classList.contains('passo') ? alvo : null;
    const etapaEl = alvo && alvo.classList.contains('etapa') ? alvo : (passoEl ? passoEl.closest('.etapa') : null);
    if (!tudo) {
      if (passoEl) {
        document.body.classList.add('vista-passo');
        etapaEl.classList.add('vista-on'); passoEl.classList.add('vista-on');
        let fc = passoEl.previousElementSibling; while (fc && !fc.classList.contains('fase-cab')) fc = fc.previousElementSibling;
        if (fc) fc.classList.add('vista-on');
        const eid = etapaEl.dataset.etapa, e = G.etapas.find(x => x.id === eid), pid = passoEl.id.replace('passo-', '').replace(/-/g, '.');
        const pp = porId(pid);
        if (trilha && e) trilha.innerHTML = `<a href="#inicio">Montagem</a> › <a href="#etapa-${esc(e.id)}">Etapa ${esc(e.id)} · ${esc(e.titulo)}</a>${pp && pp.fase ? ` › <span>${esc(pp.fase)}</span>` : ''}`;
        const ps = passos(); passoAtual = ps.indexOf(passoEl);
        const pos = document.querySelector('.nav-pos'); if (pos) pos.textContent = `Passo ${esc(pid)} · ${passoAtual + 1} de ${ps.length}`;
      } else if (etapaEl) {
        document.body.classList.add('vista-etapa');
        etapaEl.classList.add('vista-on');
        etapaEl.querySelectorAll('.passo, .fase-cab, .etapa-cab').forEach(n => n.classList.add('vista-on'));
        if (trilha) trilha.innerHTML = `<a href="#inicio">Montagem</a> › <span>Etapa ${esc(etapaEl.dataset.etapa)}</span>`;
      } else {
        document.body.classList.add('vista-inicio');
        ['onde-estou', 'mapa', 'visao', 'termos'].forEach(id => { const n = document.getElementById(id); if (n) n.classList.add('vista-on'); });
        document.querySelector('.capa') && document.querySelector('.capa').classList.add('vista-on');
      }
    }
    // realce no menu lateral
    document.querySelectorAll('.lateral .arv a').forEach(l => l.toggleAttribute('aria-current', !!h && l.getAttribute('href') === '#' + h));
    if (etapaEl) { const d = document.querySelector(`.lateral details[data-etapa="${etapaEl.dataset.etapa}"]`); if (d) d.open = true; }
    if (passoEl || (etapaEl && !tudo)) window.scrollTo({ top: 0 });
    else if (alvo) alvo.scrollIntoView({ block: 'start' });
  }

  /* ---------- estado dos passos (tela): feito · pode fazer agora · esperando ---------- */
  const PASSOS_TODOS = () => G.etapas.flatMap(e => e.passos.map(p => ({ p, e })));
  const porId = id => (PASSOS_TODOS().find(x => x.p.id === id) || {}).p || null;
  const idPasso = p => 'passo-' + p.id.replace(/\./g, '-');
  const acoesIds = p => (p.acoes || []).map((_, i) => 'cb-' + `p${p.id}-${i + 1}`.replace(/\./g, '_'));
  function feito(p) { const ids = acoesIds(p); return ids.length > 0 && ids.every(k => ler(k) === '1'); }
  // guarda quando cada passo ficou pronto (para contar a cura)
  function registrarFeitos() { PASSOS_TODOS().forEach(({ p }) => { const k = 'feito-' + p.id; if (feito(p)) { if (!ler(k)) gravar(k, new Date().toISOString()); } else if (ler(k)) gravar(k, null); }); }
  function estado(p) {
    if (feito(p)) return { tipo: 'feito' };
    if (!(p.acoes || []).length) return { tipo: 'livre' };
    const faltam = (p.depende || []).map(porId).filter(d => d && !feito(d));
    let espera = null;
    if (p.espera) {
      const d = porId(p.espera.apos), ts = d && ler('feito-' + d.id);
      if (d && feito(d) && ts) { const fim = new Date(ts).getTime() + p.espera.horas * 3600e3; if (Date.now() < fim) espera = { rotulo: p.espera.rotulo, fim }; }
    }
    if (faltam.length || espera) return { tipo: 'esperando', faltam, espera };
    return { tipo: 'pode' };
  }
  const horasRestantes = fim => Math.max(1, Math.round((fim - Date.now()) / 3600e3));
  function textoEstado(st) {
    if (st.tipo === 'esperando') {
      const partes = st.faltam.map(d => `<a href="montagem.html#${idPasso(d)}">${esc(d.id)}</a>`);
      if (st.espera) partes.push(`${esc(st.espera.rotulo)}: faltam ≈ ${horasRestantes(st.espera.fim)} h`);
      return 'Esperando ' + partes.join(' · ');
    }
    return { feito: 'Feito', pode: 'Pode fazer agora', livre: '' }[st.tipo] || '';
  }
  function painelOndeEstou() {
    const box = el('section', { class: 'secao onde-estou so-tela', id: 'onde-estou' });
    const com = PASSOS_TODOS().filter(({ e }) => e.peca === 'montagem').map(x => ({ ...x, st: estado(x.p) }));
    const pode = com.filter(x => x.st.tipo === 'pode'), esp = com.filter(x => x.st.tipo === 'esperando');
    const comAcoes = com.filter(x => x.st.tipo !== 'livre'), feitos = comAcoes.filter(x => x.st.tipo === 'feito');
    const prox = [...pode].sort((a, b) => (b.p.prioridade || 0) - (a.p.prioridade || 0))[0];
    const link = x => `<a href="montagem.html#${idPasso(x.p)}"><span><b>${esc(x.p.id)}</b> ${fmt(x.p.titulo)}</span><small>${esc(x.e.curto || x.e.titulo)}${x.p.fase ? ' · ' + esc(x.p.fase) : ''}</small></a>`;
    const pend = (G.medicoes || []).filter(m => m.pendente && !(ler('med-' + m.id) || '').trim());
    const adiados = G.materiais.filter(m => m.sit !== 'tem');
    const cards = [
      `<div class="oe-card oe-prox"><span>Próximo passo recomendado</span>${prox ? link(prox) : (feitos.length === comAcoes.length ? '<p>Tudo feito.</p>' : '<p>Nada liberado agora: veja o que está esperando.</p>')}</div>`,
      `<div class="oe-card"><span>Pode fazer agora (${pode.length})</span>${pode.length ? '<ul>' + pode.slice(0, 12).map(x => `<li>${link(x)}</li>`).join('') + '</ul>' : '<p>—</p>'}</div>`,
      `<div class="oe-card"><span>Esperando (${esp.length})</span>${esp.length ? '<ul>' + esp.slice(0, 12).map(x => `<li>${link(x)}<em>${textoEstado(x.st).replace(/^Esperando /, 'por ')}</em></li>`).join('') + '</ul>' : '<p>—</p>'}</div>`,
      `<div class="oe-card"><span>Pendências</span><ul>${pend.map(m => `<li><a href="referencia.html#medicoes"><span>${fmt(m.medida)}</span><small>medir e anotar na referência</small></a></li>`).join('')}${adiados.map(m => `<li><a href="compras.html#item-${m.id}"><span>${fmt(m.item)}</span><small>${esc(SIT[m.sit] || m.sit)}</small></a></li>`).join('')}${(!pend.length && !adiados.length) ? '<li>—</li>' : ''}</ul></div>`
    ];
    const et = G.etapas.filter(e => e.peca === 'montagem').map(e => { const ps = e.passos.filter(p => (p.acoes || []).length); const ok = ps.filter(feito).length; return `<li><a href="montagem.html#etapa-${e.id}">${esc(e.id)} ${esc(e.titulo)}</a><span class="oe-bar"><i style="width:${ps.length ? Math.round(100 * ok / ps.length) : 0}%"></i></span><small>${ok}/${ps.length}</small></li>`; }).join('');
    box.append(el('div', { class: 'secao-cab' }, `<h2>Onde estou</h2><p>Calculado pelo que você marcou nos passos (fica salvo neste navegador). "Pode fazer agora" são os passos sem nada pendente antes deles, inclusive os que andam em paralelo.</p>`));
    box.append(el('ul', { class: 'oe-etapas' }, et));
    box.append(el('div', { class: 'oe-grade' }, cards.join('')));
    return box;
  }
  function mapaTrabalho() {
    const box = el('div', { class: 'mapa-trabalho' });
    G.etapas.filter(e => e.peca === 'montagem').forEach(e => {
      const fases = [];
      e.passos.forEach(p => { const f = p.fase || ''; if (!fases.length || fases[fases.length - 1].nome !== f) fases.push({ nome: f, passos: [] }); fases[fases.length - 1].passos.push(p); });
      box.append(el('div', { class: 'mt-etapa' }, `<a class="mt-titulo" href="#etapa-${e.id}"><b>${esc(e.id)}</b> ${esc(e.titulo)}</a>` + fases.map((f, i) => `<div class="mt-fase"><span class="fase-letra">${String.fromCharCode(65 + i)}</span><span class="mt-fase-nome">${esc(f.nome)}</span><span class="mt-passos">${f.passos.map(p => `<a data-passo="${esc(p.id)}" href="#${idPasso(p)}" title="${esc(p.titulo)}">${esc(p.id)}</a>`).join('')}</span></div>`).join('')));
    });
    return box;
  }
  function atualizarEstados() {
    registrarFeitos();
    document.querySelectorAll('[data-estado-de]').forEach(ch => {
      const p = porId(ch.dataset.estadoDe); if (!p) return;
      const st = estado(p);
      ch.className = `chip estado estado-${st.tipo} so-tela`; ch.innerHTML = textoEstado(st); ch.hidden = st.tipo === 'livre';
      const art = document.getElementById(idPasso(p)); if (art) art.dataset.estado = st.tipo;
    });
    document.querySelectorAll('a.dep[data-dep]').forEach(a => { const d = porId(a.dataset.dep); a.classList.toggle('dep-feito', !!(d && feito(d))); });
    document.querySelectorAll('.mapa-trabalho a[data-passo]').forEach(a => { const p = porId(a.dataset.passo); if (p) a.dataset.estado = estado(p).tipo; });
    document.querySelectorAll('.onde-estou').forEach(n => n.replaceWith(painelOndeEstou()));
    document.querySelectorAll('.lateral a[data-passo]').forEach(a => { const p = porId(a.dataset.passo); if (p) a.dataset.estado = estado(p).tipo; });
    document.querySelectorAll('[data-prog-etapa]').forEach(n => { const e = G.etapas.find(x => x.id === n.dataset.progEtapa); if (!e) return; const ps = e.passos.filter(q => (q.acoes || []).length); n.textContent = `${ps.filter(feito).length}/${ps.length}`; });
    const pm = document.querySelector('[data-prog-parte="montagem"]'); if (pm) { const ps = PASSOS_TODOS().filter(({ e }) => e.peca === 'montagem').map(x => x.p).filter(q => (q.acoes || []).length); pm.textContent = `${ps.filter(feito).length}/${ps.length}`; }
  }

  /* ---------- foto real anotada: marcas em % da imagem + chave numerada ---------- */
  const MARCA_NOMES = { silicone: 'Silicone', fita: 'Fita asfáltica', gaxeta: 'Fita de espuma', fibra: 'Fibra', proibido: 'Não aplicar', furo: 'Furar', verificar: 'Conferir', info: 'Referência' };
  function blocoFoto(f) {
    const itens = f.itens || [f];
    const grade = el('div', { class: 'foto-grade n' + itens.length });
    const chave = el('ol', { class: 'foto-chave' });
    let n = 0;
    itens.forEach(it => {
      const wrap = el('div', { class: 'foto-wrap' });
      wrap.append(el('img', { src: it.src, alt: it.alt || '' }));
      (it.marcas || []).forEach(m => {
        n += 1;
        const cor = m.cor || 'info';
        const d = el('div', { class: `marca marca-${cor}${m.redondo ? ' redondo' : ''}${m.tracejada ? ' tracejada' : ''}`, style: `left:${m.x}%;top:${m.y}%;width:${m.w}%;height:${m.h}%`, title: m.rotulo || '' });
        d.append(el('span', { class: 'marca-num' }, String(n)));
        wrap.append(d);
        chave.append(el('li', null, `<span class="marca-sw marca-${cor}"></span><span><b>${n}</b> <small>${esc(MARCA_NOMES[cor] || '')}</small> ${fmt(m.rotulo || '')}</span>`));
      });
      const cel = el('div', { class: 'foto-cel' });
      cel.append(wrap);
      if (it.titulo) cel.append(el('p', { class: 'foto-titulo' }, fmt(it.titulo)));
      grade.append(cel);
    });
    const corpo = el('div', { class: 'foto-bloco' });
    corpo.append(grade);
    if (n) corpo.append(chave);
    const cred = itens.map(it => it.credito).filter(Boolean);
    return figura(corpo, f.legenda || 'Foto', f.fonte || [...new Set(cred)].join(' · '), null, 'html');
  }

  /* ---------- material: onde, como e quando (vínculo com os passos) ---------- */
  function passosComMaterial(id) {
    return G.etapas.flatMap(e => e.passos).filter(p => (p.materiais || []).includes(id));
  }
  function blocoUso(m) {
    const u = m.uso || {}, box = el('div', { class: 'uso' });
    const linha = (t, html) => { const d = el('div', { class: 'uso-linha' }); d.append(el('b', null, t)); d.append(el('div', null, html)); box.append(d); };
    if (u.finalidade) linha('Para quê', fmt(u.finalidade));
    if (u.local) linha('Onde', fmt(u.local));
    if (u.modo && u.modo.length) linha('Como', `<ol>${u.modo.map(x => `<li>${fmt(x)}</li>`).join('')}</ol>`);
    if (u.momento) linha('Quando', fmt(u.momento));
    if (u.cuidados && u.cuidados.length) linha('Cuidados', `<ul>${u.cuidados.map(x => `<li>${fmt(x)}</li>`).join('')}</ul>`);
    const usos = passosComMaterial(m.id);
    if (usos.length) linha('Usado em', usos.map(p => `<a href="montagem.html#passo-${p.id.replace(/\./g, '-')}">${esc(p.id)} ${fmt(p.titulo)}</a>`).join('<br>'));
    return box;
  }

  /* ---------- fichas de compra: essencial à vista, detalhe recolhido ---------- */
  function fotoItem(m, comLegenda) {
    const ft = el('div', { class: 'item-foto' });
    if (m.foto && m.foto.src) {
      ft.append(el('img', { src: m.foto.src, alt: m.foto.alt || m.item }));
      const cred = [m.foto.credito, m.foto.licenca].filter(Boolean).join(' · ');
      if (cred) ft.append(el('small', null, m.foto.url ? `<a href="${esc(m.foto.url)}">${esc(cred)}</a>` : esc(cred)));
    } else {
      ft.append(el('div', { class: 'item-sem-foto' }, `<span>Foto a incluir</span><small>${esc((m.foto && m.foto.pendente) || '')}</small>`));
    }
    return ft;
  }
  function detalhesItem(m, paraAnexo) {
    const nos = [];
    if (m.foto && m.foto.legenda) nos.push(el('p', { class: 'det-foto' }, `<b>Sobre a foto.</b> ${fmt(m.foto.legenda)}`));
    if (m.papel) nos.push(el('p', null, `<b>Para que serve.</b> ${fmt(m.papel)}`));
    if (m.exigir && m.exigir.length) {
      const d = el('div', { class: 'det-bloco' });
      d.append(el('p', { class: 'det-titulo' }, `${ic('check')}${m.sit === 'tem' ? 'O que é' : 'O que exigir'}`));
      d.append(el('ul', null, m.exigir.map(x => `<li>${fmt(x)}</li>`).join('')));
      nos.push(d);
    }
    if (m.conferir && m.conferir.length) {
      const d = el('div', { class: 'det-bloco' });
      d.append(el('p', { class: 'det-titulo' }, `${ic('busca')}${m.sit === 'tem' ? 'Como conferir' : 'Como conferir na loja'}`));
      d.append(paraAnexo ? el('ul', null, m.conferir.map(x => `<li>${fmt(x)}</li>`).join('')) : checklist(m.conferir, 'item-' + m.id));
      nos.push(d);
    }
    if (paraAnexo && m.uso) { const d = el('div', { class: 'det-bloco' }); d.append(el('p', { class: 'det-titulo' }, `${ic('chave')}Onde, como e quando`)); d.append(blocoUso(m)); nos.push(d); }
    if (m.armadilha) nos.push(el('div', { class: 'alerta atencao' }, `${ic('alerta')}<div><b>Compra errada.</b> ${fmt(m.armadilha)}</div>`));
    if (m.nota) nos.push(el('div', { class: 'alerta dica' }, `${ic('info')}<div><b>Dica.</b> ${fmt(m.nota)}</div>`));
    return nos;
  }
  function blocoCompras(f) {
    const lista = G.materiais.filter(m => !f.sit || f.sit.includes(m.sit));
    const box = el('div', { class: 'compras' });
    lista.forEach(m => {
      const card = el('article', { class: 'item', id: 'item-' + m.id });
      card.append(fotoItem(m));
      const c = el('div', { class: 'item-corpo' });
      const meta = [m.id, SIT[m.sit], m.qtd, m.preco].filter(Boolean).map(esc).join(' · ');
      c.append(el('p', { class: 'item-meta' }, meta));
      c.append(el('h4', null, fmt(m.item)));
      if (m.pedir) c.append(el('div', { class: 'item-pedir' }, `<span>${ic('loja')}Peça na loja</span><p>${fmt(m.pedir)}</p>`));
      else if (m.papel) c.append(el('p', { class: 'item-papel' }, fmt(m.papel)));
      if (m.alerta) c.append(el('p', { class: 'item-alerta' }, `${ic('alerta')}<span>${fmt(m.alerta)}</span>`));
      if (m.uso) c.append(recolhivel('Onde, como e quando', blocoUso(m)));
      c.append(recolhivel(m.sit === 'tem' ? 'Para que serve e como conferir' : 'Por que, como conferir e dica', detalhesItem(m)));
      card.append(c);
      box.append(card);
    });
    return box;
  }
  // lista de bolso: o que levar à loja, uma linha por item
  function listaBolso() {
    const itens = G.materiais.filter(m => m.sit !== 'tem');
    const t = tabela(['', 'Item', 'Peça na loja', '≈ R$'], itens.map(m => {
      const cb = el('input', { type: 'checkbox', id: 'cb-bolso-' + m.id, 'aria-label': `Comprado: ${m.item}` });
      cb.checked = ler('cb-bolso-' + m.id) === '1';
      cb.addEventListener('change', () => { gravar('cb-bolso-' + m.id, cb.checked ? '1' : null); atualizarProgresso(); });
      const mini = m.foto && m.foto.src ? `<img class="mini" src="${esc(m.foto.src)}" alt="">` : '<span class="mini"></span>';
      return { attrs: m.sit === 'adiado' ? { class: 'linha-adiada' } : null, celulas: [cb, `<a class="bolso-item" href="#item-${m.id}">${mini}<span><b>${fmt(m.item)}</b><small>${esc(m.qtd)}${m.sit === 'adiado' ? ' · pode esperar' : ''}</small></span></a>`, fmt(m.pedir || m.spec), esc((m.preco || '').replace('R$ ', ''))] };
    }));
    t.classList.add('bolso');
    return t;
  }

  function blocoTabela(ref) {
    if (ref === 'cabos') {
      return tabela(['Cabo', 'Liga', 'Cabo e proteção', 'Como conferir'],
        G.cabos.map(c => ({ attrs: { 'data-cabo': c.id }, celulas: [fmt(`{{c:${c.id}}}`) + (c.validar ? '<br><span class="chip selo-validar">validar</span>' : ''), `${fmt(c.de)}<br><span class="seta-liga">→</span> ${fmt(c.para)}`, fmt(c.bitola) + (c.protecao ? `<br><small>${fmt(c.protecao)}</small>` : ''), fmt(c.verificar)] })));
    }
    if (ref === 'corte') {
      return tabela(['Cabo', 'Comprimento', 'Ponta', 'Medido'],
        G.cabos.filter(c => c.corte).map(c => {
          const inp = el('input', { type: 'text', id: 'med-corte-' + c.id, 'aria-label': `Comprimento medido de ${c.id}`, placeholder: 'cm' });
          inp.value = ler('med-corte-' + c.id) || '';
          inp.addEventListener('input', () => gravar('med-corte-' + c.id, inp.value || null));
          return { attrs: { 'data-cabo': c.id }, celulas: [fmt(`{{c:${c.id}}}`) + `<br><small>${fmt(c.bitola)}</small>`, fmt(c.comp), `Desencape ${fmt(c.corte)}<br><small>${fmt(c.pontas || '')}</small>`, inp] };
        }));
    }
    if (ref === 'medicoes') {
      return tabela(['Medida', 'Como medir', 'Esperado', 'Medido'],
        G.medicoes.map(m => {
          const inp = el('input', { type: 'text', id: 'med-' + m.id, 'aria-label': `Valor medido: ${m.medida}` });
          inp.value = ler('med-' + m.id) || '';
          inp.addEventListener('input', () => { gravar('med-' + m.id, inp.value || null); atualizarEstados(); });
          return [fmt(m.medida), fmt(m.como), fmt(m.esperado), inp];
        }));
    }
    if (ref === 'parametros') {
      return tabela(['Parâmetro', 'Neste projeto', 'Como achar o valor do seu equipamento', 'Origem'],
        G.parametros.map(p => ({ attrs: { id: 'param-' + p.id }, celulas: [fmt(p.rotulo), `<span class="mono"><b>${esc(p.valor)}${p.un ? ' ' + esc(p.un) : ''}</b></span>`, fmt(p.como || '—'), `<small>${fmt(p.fonte || '—')}</small>`] })));
    }
    if (ref === 'diagnostico') {
      return tabela(['Sintoma', 'Causa provável', 'O que fazer'], G.diagnostico.map(d => [`<b>${fmt(d.sintoma)}</b>`, fmt(d.causa), fmt(d.acao)]));
    }
    if (G.tabelas && G.tabelas[ref]) {
      const T = G.tabelas[ref];
      return tabela(T.cab, T.linhas.map(l => l.map(fmt)));
    }
    return el('div', { class: 'pendente' }, `Tabela "${esc(ref)}" não encontrada.`);
  }

  /* ---------- passo: o que fazer à vista, o resto recolhido ---------- */
  function blocoPasso(p, etapa) {
    const box = el('article', { class: 'passo', id: 'passo-' + p.id.replace(/\./g, '-'), 'data-etapa-nome': etapa ? etapa.titulo : '' });
    const cab = el('header', { class: 'passo-cab' });
    cab.append(el('div', { class: 'passo-num' }, esc(p.id)));
    const tt = el('div', { class: 'passo-titulos' });
    tt.append(el('h3', null, fmt(p.titulo)));
    if (p.objetivo) tt.append(el('p', { class: 'passo-objetivo' }, fmt(p.objetivo)));
    cab.append(tt);
    box.append(cab);
    const chips = el('div', { class: 'chips' });
    if (p.tempo && p.tempo !== '—') chips.append(el('span', { class: 'chip' }, `${esc(p.tempo)}`));
    if (p.risco) chips.append(el('span', { class: `chip risco-${p.risco}` }, RISCO[p.risco]));
    if (p.validar) chips.append(el('span', { class: 'chip selo-validar', title: 'Ainda não conferido numa montagem real' }, 'A validar na 1ª montagem'));
    if ((p.acoes || []).length) chips.append(el('span', { class: 'chip estado so-tela', 'data-estado-de': p.id, hidden: '' }));
    if (chips.children.length) box.append(chips);
    if (p.ferramentas && p.ferramentas.length) box.append(el('p', { class: 'passo-ferr' }, `${ic('chave')}<span>${p.ferramentas.map(fmt).join(' · ')}</span>`));
    if (p.materiais && p.materiais.length) box.append(el('p', { class: 'passo-ferr passo-mat' }, `${ic('loja')}<span>${p.materiais.map(id => { const m = G.materiais.find(x => x.id === id); return m ? `<a href="compras.html#item-${id}">${fmt(m.item)}</a>` : esc(id); }).join(' · ')}</span>`));
    if ((p.depende && p.depende.length) || p.espera || p.requer) {
      const partes = (p.depende || []).map(porId).filter(Boolean).map(d => `<a class="dep" data-dep="${esc(d.id)}" href="#${idPasso(d)}">${esc(d.id)} ${fmt(d.titulo)}</a>`);
      if (p.espera) partes.push(`<span class="dep-espera">+ ${fmt(p.espera.rotulo)}, contada a partir de ${esc(p.espera.apos)}</span>`);
      box.append(el('p', { class: 'passo-requer' }, `${ic('lista')}<span><b>Antes, precisa:</b> ${partes.join(' · ')}${p.requer ? `<br><small>${fmt(p.requer)}</small>` : ''}</span>`));
    }
    const alertas = p.alertas || [];
    alertas.filter(a => a.tipo !== 'dica').forEach(a => box.append(alertaBox(a)));
    (p.figurasAntes || []).forEach(f => box.append(blocoFigura(f)));
    if (p.acoes && p.acoes.length) box.append(checklist(p.acoes, 'p' + p.id, 'acoes'));
    (p.figuras || []).forEach(f => box.append(blocoFigura(f)));
    if (p.verificacao && p.verificacao.length) {
      box.append(el('div', { class: 'verif' }, `${ic('check')}<div><b>Deu certo se:</b><ul>${p.verificacao.map(x => `<li>${fmt(x)}</li>`).join('')}</ul></div>`));
    }
    const det = [];
    alertas.filter(a => a.tipo === 'dica').forEach(a => det.push(alertaBox(a)));
    if (p.erro) det.push(el('div', { class: 'det-bloco' }, `<p class="det-titulo">${ic('alerta')}Erro comum</p><p>${fmt(p.erro)}</p>`));
    if (p.basico) det.push(el('div', { class: 'det-bloco' }, `<p class="det-titulo">${ic('livro')}Por que fazer assim</p><p>${fmt(p.basico)}</p>`));
    if (det.length) box.append(recolhivel(p.basico ? 'Erro comum e por que fazer assim' : 'Erro comum', det));
    return box;
  }

  /* ---------- peças da documentação ---------- */
  const PECAS = {
    compras: { arquivo: 'compras.html', nome: 'Lista de compras', icone: 'loja', desc: 'O que comprar, como pedir na loja e como não errar. Leve no celular ou impresso.' },
    montagem: { arquivo: 'montagem.html', nome: 'Guia de montagem', icone: 'chave', desc: 'Passo a passo da preparação e da montagem. No celular, use o modo passo a passo.' },
    referencia: { arquivo: 'referencia.html', nome: 'Referência técnica', icone: 'livro', desc: 'Parâmetros, conexões, mapas de bornes, regulagem, medições e diagnóstico.' }
  };
  const pdfDe = peca => `${G.meta.arquivo || 'guia'}-${peca}-v${G.meta.versao}.pdf`;

  function barra() {
    const M = G.meta;
    const b = el('header', { class: 'barra' });
    b.append(el('a', { class: 'nome', href: 'index.html' }, esc(M.titulo)));
    const nav = el('nav', { 'aria-label': 'Partes do guia' });
    Object.entries(PECAS).forEach(([k, P]) => {
      const a = el('a', { href: P.arquivo, 'data-peca': k }, `${ic(P.icone)}<span>${esc(P.nome)}</span><span class="prog"></span>`);
      if (k === MODO) a.setAttribute('aria-current', 'page');
      nav.append(a);
    });
    b.append(nav);
    const bm = el('button', { class: 'btn btn-menu so-tela', type: 'button', 'aria-label': 'Abrir o menu', 'aria-expanded': 'false' }, `${ic('lista')}<span>Menu</span>`);
    bm.addEventListener('click', () => { const on = document.body.classList.toggle('menu-aberto'); bm.setAttribute('aria-expanded', on); });
    b.prepend(bm);
    if (MODO === 'montagem') b.append(botaoVista());
    return b;
  }
  function capa(titulo, sub, extra) {
    const M = G.meta;
    const c = el('header', { class: 'capa' });
    c.append(el('p', { class: 'rotulo' }, esc(M.titulo)));
    c.append(el('h1', null, esc(titulo)));
    if (sub) c.append(el('p', { class: 'sobre' }, fmt(sub)));
    c.append(el('p', { class: 'meta' }, [`Versão ${M.versao}`, M.data, M.autor].filter(Boolean).map(esc).join(' · ')));
    if (extra) c.append(extra);
    return c;
  }
  function secao(id, titulo, intro) {
    const s = el('section', { class: 'secao', id });
    const h = el('div', { class: 'secao-cab' });
    h.append(el('h2', null, esc(titulo)));
    if (intro) h.append(el('p', null, fmt(intro)));
    s.append(h);
    return s;
  }
  function rodape() {
    return el('footer', { class: 'rodape' }, `<span>${esc(G.meta.titulo)} · ${esc(PECAS[MODO] ? PECAS[MODO].nome : 'Início')} · v${esc(G.meta.versao)} · ${esc(G.meta.data)}</span><span>Modelo de guia de montagem v1.4</span>`);
  }

  function paginaInicio() {
    raiz.append(capa(G.meta.titulo, G.meta.resumo));
    raiz.append(painelOndeEstou());
    const grade = el('div', { class: 'pecas' });
    Object.entries(PECAS).forEach(([k, P]) => {
      grade.append(el('article', { class: 'peca' }, `${ic(P.icone, 'ico-grande')}<h2><a href="${P.arquivo}">${esc(P.nome)}</a></h2><p>${esc(P.desc)}</p><p class="peca-links"><a href="${P.arquivo}">Abrir</a> · <a href="${pdfDe(k)}">PDF</a></p>`));
    });
    raiz.append(grade);
    const v = secao('visao', 'Como o sistema funciona', G.visao);
    const cad = el('div', { class: 'cadeia' });
    G.cadeia.forEach((n, i) => { if (i) cad.append(el('span', { class: 'seta', 'aria-hidden': 'true' }, '→')); cad.append(el('div', { class: 'no' }, `<b>${esc(n.rotulo)}</b><span>${fmt(n.detalhe)}</span>`)); });
    v.append(cad);
    raiz.append(v);
  }

  function paginaCompras() {
    const tudo = G.materiais.filter(m => m.sit === 'comprar');
    const adi = G.materiais.filter(m => m.sit === 'adiado');
    const total = el('div', { class: 'resumo-num' }, `<div><span>Itens a comprar</span><b>${tudo.length}</b></div><div><span>Total estimado</span><b>${faixaPreco(tudo)}</b></div>${adi.length ? `<div><span>Pode esperar</span><b>${faixaPreco(adi)}</b></div>` : ''}`);
    raiz.append(capa('Lista de compras', 'Primeiro a lista de bolso, para levar à loja. Depois, uma ficha por item: toque em "Por que, como conferir e dica" para ver os detalhes.', total));
    const b = secao('bolso', 'Lista de bolso', 'Marque o que já comprou. O nome leva à ficha do item. Preços estimados: confira na hora.');
    b.append(listaBolso());
    raiz.append(b);
    G.etapas.filter(e => e.peca === 'compras').forEach(e => e.passos.forEach(p => {
      const s = secao('passo-' + p.id.replace(/\./g, '-'), p.titulo, p.objetivo);
      s.classList.add('secao-compras');
      (p.alertas || []).filter(a => a.tipo !== 'dica').forEach(a => s.append(alertaBox(a)));
      const temFichas = (p.figuras || []).some(f => f.tipo === 'compras');
      if (p.acoes && p.acoes.length && !temFichas) s.append(checklist(p.acoes, 'p' + p.id, 'acoes'));
      (p.figuras || []).forEach(f => s.append(blocoFigura(f)));
      if (p.erro) s.append(recolhivel('Erro comum', [el('p', null, fmt(p.erro))]));
      raiz.append(s);
    }));
    // anexo para impressão: os detalhes que na tela ficam recolhidos
    const an = secao('anexo', 'Detalhes de cada item', 'Para que serve, o que exigir, como conferir e a compra errada mais comum.');
    an.classList.add('so-impressao');
    G.materiais.forEach(m => {
      const a = el('article', { class: 'anexo-item' });
      a.append(el('h3', null, `<span class="item-id">${esc(m.id)}</span> ${fmt(m.item)}`));
      detalhesItem(m, true).forEach(n => a.append(n));
      an.append(a);
    });
    raiz.append(an);
  }

  function paginaMontagem() {
    raiz.append(el('p', { class: 'trilha so-tela', id: 'trilha' }));
    raiz.append(capa('Guia de montagem', 'Use o menu para ir a uma etapa ou a um passo: cada um abre sozinho, com o que fazer, o que pode dar errado e como saber que deu certo. "Ver tudo numa página" mostra o guia inteiro, como no PDF.'));
    const v = secao('visao', 'Antes de começar', G.visao);
    const cad = el('div', { class: 'cadeia' });
    G.cadeia.forEach((n, i) => { if (i) cad.append(el('span', { class: 'seta', 'aria-hidden': 'true' }, '→')); cad.append(el('div', { class: 'no' }, `<b>${esc(n.rotulo)}</b><span>${fmt(n.detalhe)}</span>`)); });
    v.append(cad);
    if (G.sistema) v.append(blocoFigura({ tipo: 'sistema' }));
    v.append(el('p', { class: 'nota-ref' }, `${ic('livro')}<span>Tabela completa de conexões, parâmetros e diagnóstico: <a href="referencia.html">Referência técnica</a>.</span>`));
    raiz.append(painelOndeEstou());
    const mp = secao('mapa', 'Mapa do trabalho', 'Cada etapa em fases, na ordem do trabalho. As etapas 2, 3 e 4 são independentes e podem andar em paralelo; a 5 junta tudo. Na tela, a cor de cada passo é o estado: verde feito, azul pode fazer agora, cinza esperando.');
    mp.append(mapaTrabalho());
    raiz.append(mp);
    raiz.append(v);
    G.etapas.filter(e => e.peca === 'montagem').forEach(e => {
      const s = el('section', { class: 'etapa', id: 'etapa-' + e.id, 'data-etapa': e.id });
      s.append(el('div', { class: 'etapa-cab' }, `<p class="etapa-num">Etapa ${esc(e.id)}</p><h2>${esc(e.titulo)}</h2>${e.intro ? `<p>${fmt(e.intro)}</p>` : ''}`));
      let faseAtual = null, nFase = 0;
      e.passos.forEach(p => {
        if (p.fase && p.fase !== faseAtual) {
          faseAtual = p.fase; nFase += 1;
          const mats = [...new Set(e.passos.filter(q => q.fase === p.fase).flatMap(q => q.materiais || []))];
          const ps = e.passos.filter(q => q.fase === p.fase).map(q => q.id);
          s.append(el('div', { class: 'fase-cab', id: `fase-${e.id}-${nFase}` }, `<span class="fase-letra">${String.fromCharCode(64 + nFase)}</span><div><h3>${esc(p.fase)}</h3><p class="fase-passos">Passos ${esc(ps[0])}${ps.length > 1 ? ' a ' + esc(ps[ps.length - 1]) : ''}</p>${mats.length ? `<p class="fase-mat">${ic('loja')}<span>${mats.map(id => { const m = G.materiais.find(x => x.id === id); return m ? `<a href="compras.html#item-${id}">${fmt(m.item)}</a>` : esc(id); }).join(' · ')}</span></p>` : ''}</div>`));
        }
        s.append(blocoPasso(p, e));
      });
      raiz.append(s);
    });
    // navegação do modo passo a passo
    const nv = el('nav', { class: 'nav-passo so-tela', 'aria-label': 'Navegar entre os passos' });
    nv.innerHTML = `<button type="button" class="btn" data-dir="-1">${ic('volta')}<span>Anterior</span></button><span class="nav-pos" aria-live="polite"></span><button type="button" class="btn btn-forte" data-dir="1"><span>Próximo</span>${ic('seta')}</button>`;
    nv.querySelectorAll('button').forEach(bt => bt.addEventListener('click', () => irPasso(passoAtual + (+bt.dataset.dir))));
    raiz.append(nv);
  }

  function paginaReferencia() {
    raiz.append(capa('Referência técnica', 'Para consultar, não para ler de uma vez. Os valores destacados nas outras partes vêm daqui.'));
    let s = secao('parametros', 'Parâmetros deste projeto', 'Para adaptar a outro equipamento, troque os valores no arquivo de dados seguindo a coluna "Como achar".');
    s.append(blocoTabela('parametros')); raiz.append(s);
    s = secao('conexoes', 'Conexões', 'Cada cabo tem um código. O mesmo código aparece no diagrama, nos mapas de bornes e na etiqueta do cabo.');
    if (G.sistema) s.append(blocoFigura({ tipo: 'sistema' }));
    s.append(blocoTabela('cabos')); raiz.append(s);
    s = secao('corte', 'Corte e pontas dos cabos'); s.append(blocoTabela('corte')); raiz.append(s);
    const usados = [...new Set(G.cabos.flatMap(c => (c.bornes || []).map(b => b.split(':')[0])))].filter(id => EQ[id]);
    if (usados.length) { s = secao('mapas', 'Mapas de bornes', 'Vistas desenhadas a partir de fotos reais, com os cabos do projeto.'); usados.forEach(id => s.append(blocoFigura({ tipo: 'mapa', equip: id }))); raiz.append(s); }
    Object.keys(G.tabelas || {}).forEach(k => { s = secao('tab-' + k, G.tabelas[k].titulo || 'Configuração do processador'); s.append(blocoTabela(k)); raiz.append(s); });
    if (G.medicoes) { s = secao('medicoes', 'Medições'); s.append(blocoTabela('medicoes')); raiz.append(s); }
    if (G.diagnostico) { s = secao('diagnostico', 'Se algo der errado'); s.append(blocoTabela('diagnostico')); raiz.append(s); }
    const gl = secaoTermos(true); if (gl) raiz.append(gl);
    s = secao('apendice', 'Fontes e versões');
    if (G.fontes) { s.append(el('h3', null, 'De onde vem cada dado')); s.append(tabela(['Dado', 'Origem'], G.fontes.map(f => [fmt(f.dado), fmt(f.origem)]))); }
    if (G.versoes) { s.append(el('h3', null, 'Versões')); s.append(tabela(['Versão', 'Data', 'O que mudou'], G.versoes.map(v => [esc(v.v), esc(v.data), fmt(v.nota)]))); }
    raiz.append(s);
  }

  /* ---------- termos: glossário completo (referência) ou só os usados na página ---------- */
  function termoAparece(g, texto) {
    const lista = g.busca || [g.termo];
    return lista.some(b => {
      if (/^[\p{L}\d -]+$/u.test(b)) {
        // a palavra só conta se começar no início de uma palavra (evita "Re" dentro de "Religue")
        const rx = new RegExp('(^|[^\\p{L}\\d])' + b, g.exato ? 'u' : 'iu');
        return rx.test(texto);
      }
      return g.exato ? texto.includes(b) : texto.toLowerCase().includes(b.toLowerCase());
    });
  }
  function secaoTermos(todos) {
    if (!G.glossario) return null;
    const texto = raiz.textContent;
    const lista = G.glossario.filter(g => todos || termoAparece(g, texto))
      .sort((a, b) => a.termo.localeCompare(b.termo, 'pt-BR'));
    if (!lista.length) return null;
    const s = secao('termos', todos ? 'Glossário' : 'Termos usados nesta parte', todos ? `${lista.length} termos técnicos usados no guia.` : 'Só os termos técnicos que aparecem nesta parte do guia.');
    const dl = el('dl', { class: 'termos' });
    lista.forEach(g => dl.append(el('div', { class: 'termo', id: 'termo-' + g.termo.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }, `<dt>${esc(g.termo)}</dt><dd>${fmt(g.def)}</dd>`)));
    s.append(dl);
    return s;
  }

  /* ---------- modo passo a passo (tela) ---------- */
  let passoAtual = 0;
  function passos() { return [...document.querySelectorAll('.etapa .passo')]; }
  function irPasso(i) {
    const ps = passos();
    if (!ps.length) return;
    passoAtual = Math.max(0, Math.min(ps.length - 1, i));
    location.hash = '#' + ps[passoAtual].id;
  }
  function modoPasso(on) {
    document.body.classList.toggle('modo-passo', on);
    const bt = document.getElementById('bt-passo');
    if (bt) bt.setAttribute('aria-pressed', on);
    gravar('modo-passo', on ? '1' : null);
    irPasso(+(ler('passo-atual') || 0));
  }

  /* ---------- montagem ---------- */
  function montar() {
    document.title = (PECAS[MODO] ? PECAS[MODO].nome + ' · ' : '') + G.meta.titulo;
    document.body.classList.add('modo-' + MODO);
    raiz.append(barra());
    if (MODO === 'compras') paginaCompras();
    else if (MODO === 'montagem') paginaMontagem();
    else if (MODO === 'referencia') paginaReferencia();
    else paginaInicio();
    if (MODO === 'compras' || MODO === 'montagem') {
      const t = secaoTermos(false);
      if (t) {
        const an = raiz.querySelector('#anexo');
        an ? raiz.insertBefore(t, an) : raiz.append(t);
        const capaEl = raiz.querySelector('.capa');
        if (capaEl) capaEl.append(el('p', { class: 'aviso-termos' }, `${ic('livro')}<span>Não conhece um termo? Veja <a href="#termos">Termos usados nesta parte</a>, no fim.</span>`));
      }
    }
    raiz.append(rodape());
    raiz.addEventListener('mouseover', ev => { const t = ev.target.closest('[data-cabo]'); if (t) focar(t.getAttribute('data-cabo'), true); });
    raiz.addEventListener('mouseout', ev => { const t = ev.target.closest('[data-cabo]'); if (t) focar(t.getAttribute('data-cabo'), false); });
    if (MODO === 'montagem') {
      document.addEventListener('keydown', ev => {
        if (!document.body.classList.contains('vista-passo') || ev.target.closest('input, textarea')) return;
        if (ev.key === 'ArrowRight') irPasso(passoAtual + 1);
        if (ev.key === 'ArrowLeft') irPasso(passoAtual - 1);
      });
    }
    document.body.classList.add('com-menu');
    document.body.insertBefore(lateral(), raiz);
    if (MODO === 'montagem') { window.addEventListener('hashchange', aplicarVista); aplicarVista(); }
    else observarAtivo();
    atualizarProgresso();
    atualizarEstados();
  }
  function focar(id, on) { document.querySelectorAll(`[data-cabo="${CSS.escape(id)}"]`).forEach(n => n.classList.toggle('foco', on)); }
  function atualizarProgresso() {
    const a = document.querySelector(`.barra nav a[data-peca="${MODO}"] .prog`);
    if (!a) return;
    // compras: itens comprados na lista de bolso; montagem: ações marcadas nos passos
    const sel = MODO === 'compras' ? '.bolso input[type="checkbox"]' : MODO === 'montagem' ? 'ol.acoes input[type="checkbox"]' : 'input[type="checkbox"]';
    const cbs = raiz.querySelectorAll(sel);
    const ok = [...cbs].filter(c => c.checked).length;
    a.textContent = cbs.length ? `${ok}/${cbs.length}` : '';
  }

  montar();
})();
