/* Biblioteca de ilustrações — procedimentos genéricos e vistas de montagem.
   Cada ilustração: { titulo, fonte, w, h, desenhar(p) } → conteúdo SVG (texto). "p" recebe os parâmetros da figura.
   Cores só por classes (il-*), que vêm dos tokens do guia.css: funcionam no tema claro, no escuro e na impressão.
   Regra: procedimento genérico pode ser esquemático; vista de um objeto real segue medidas registradas (fonte). */
(function () {
  'use strict';
  const r1 = n => Math.round(n * 10) / 10;

  /* ---------- peças reutilizáveis ---------- */
  // cabo horizontal de x até x+comp, centrado em y; L = trecho descascado na ponta direita
  function cabo(x, y, comp, o = {}) {
    const t = o.t || 16, L = o.L || 0, cor = o.cor || 'vermelho';
    let s = `<rect x="${x}" y="${y - t / 2}" width="${comp - L}" height="${t}" rx="3" class="il-isol-${cor}"/>`;
    if (L) {
      const cx = x + comp - L, tc = t * 0.62;
      s += `<rect x="${cx}" y="${r1(y - tc / 2)}" width="${L}" height="${r1(tc)}" rx="2" class="il-cobre"/>`;
      if (o.torcido) for (let i = 5; i < L; i += 6) s += `<line x1="${cx + i}" y1="${r1(y - tc / 2)}" x2="${cx + i - 5}" y2="${r1(y + tc / 2)}" class="il-cobre-linha"/>`;
      else for (let k = -1; k <= 1; k++) s += `<line x1="${cx}" y1="${r1(y + k * tc / 4)}" x2="${cx + L}" y2="${r1(y + k * tc / 4)}" class="il-cobre-linha"/>`;
      if (o.solto) s += `<path d="M${cx + 6} ${r1(y - tc / 2)} q -4 -16 -18 -26" class="il-cobre-linha" style="stroke-width:1.8"/>`;
    }
    return s;
  }
  function cota(x1, x2, y, txt, acima = true) {
    return `<path d="M${x1} ${y - 5} v10 M${x2} ${y - 5} v10 M${x1} ${y} H${x2}" class="il-cota"/>` +
      `<text x="${(x1 + x2) / 2}" y="${acima ? y - 8 : y + 17}" text-anchor="middle" class="il-txt" font-size="12">${txt}</text>`;
  }
  function cotaV(x, y1, y2, txt) {
    const ym = (y1 + y2) / 2;
    return `<path d="M${x - 5} ${y1} h10 M${x - 5} ${y2} h10 M${x} ${y1} V${y2}" class="il-cota"/>` +
      `<text x="${x - 9}" y="${ym}" text-anchor="middle" class="il-txt" font-size="12" transform="rotate(-90 ${x - 9} ${ym})">${txt}</text>`;
  }
  function seta(x1, y1, x2, y2, cls = 'il-seta') {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    const p1 = `${r1(x2 - h * Math.cos(a - 0.45))} ${r1(y2 - h * Math.sin(a - 0.45))}`;
    const p2 = `${r1(x2 - h * Math.cos(a + 0.45))} ${r1(y2 - h * Math.sin(a + 0.45))}`;
    return `<path d="M${x1} ${y1} L${x2} ${y2}" class="${cls}"/><path d="M${p1} L${x2} ${y2} L${p2}" class="${cls}"/>`;
  }
  function marca(x, y, ok) {
    return ok
      ? `<circle cx="${x}" cy="${y}" r="13" class="il-ok"/><path d="M${x - 6} ${y} l4.5 4.5 l8 -9" class="il-marca"/>`
      : `<circle cx="${x}" cy="${y}" r="13" class="il-erro"/><path d="M${x - 5} ${y - 5} l10 10 M${x + 5} ${y - 5} l-10 10" class="il-marca"/>`;
  }
  function txt(x, y, t, o = {}) {
    return `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" class="${o.cls || 'il-txt'}" font-size="${o.fs || 12}"${o.peso ? ` font-weight="${o.peso}"` : ''}>${t}</text>`;
  }
  // borne de parafuso em corte: entrada do fio na face esquerda (x), canal de x até x+76
  function borneCorte(x, y) {
    return `<rect x="${x}" y="${y - 32}" width="84" height="64" rx="4" class="il-plast"/>` +
      `<rect x="${x}" y="${y - 12}" width="78" height="24" class="il-furo"/>` +
      `<rect x="${x + 4}" y="${y - 12}" width="74" height="4" class="il-metal"/>` +
      `<rect x="${x + 4}" y="${y + 8}" width="74" height="4" class="il-metal"/>` +
      `<rect x="${x + 33}" y="${y - 44}" width="20" height="10" rx="2" class="il-metal"/>` +
      `<rect x="${x + 38}" y="${y - 34}" width="10" height="22" class="il-metal"/>` +
      `<line x1="${x + 37}" y1="${y - 39}" x2="${x + 49}" y2="${y - 39}" class="il-fenda"/>`;
  }
  // terminal faston fêmea isolado, entrada à esquerda em x
  function faston(x, y, cor) {
    return `<rect x="${x}" y="${y - 12}" width="62" height="24" rx="5" class="il-faston-${cor}" opacity=".62"/>` +
      `<rect x="${x + 58}" y="${y - 8}" width="58" height="16" rx="2" class="il-metal"/>` +
      `<path d="M${x + 64} ${y - 8} q 6 8 0 16 M${x + 110} ${y - 8} q -6 8 0 16" class="il-tinta" style="stroke-width:1.2"/>`;
  }

  const L = window.GUIA_ILUSTRACOES = window.GUIA_ILUSTRACOES || {};

  /* ---------- preparar ponta para borne de parafuso ---------- */
  L['medir-borne'] = {
    titulo: 'Medir a profundidade do borne', w: 300, h: 170,
    desenhar: () => borneCorte(150, 92) + cota(152, 228, 146, 'P = profundidade do borne', false) +
      txt(192, 34, 'borne (em corte)', { cls: 'il-mut', fs: 11 }) + seta(70, 92, 140, 92)
  };
  L['desencapar'] = {
    titulo: 'Desencapar só a medida P', w: 300, h: 170,
    desenhar: p => cabo(20, 96, 250, { L: 62, cor: p.cor || 'vermelho', t: p.t || 18 }) +
      `<line x1="208" y1="62" x2="208" y2="130" class="il-corte"/>` + cota(208, 270, 54, `L = ${p.L || 'P'}`) +
      txt(140, 150, p.nota || 'corte só o isolamento, sem ferir o cobre', { cls: 'il-mut', fs: 11 })
  };
  L['torcer'] = {
    titulo: 'Torcer os fios no mesmo sentido', w: 300, h: 170,
    desenhar: p => cabo(20, 96, 250, { L: 62, cor: p.cor || 'vermelho', t: p.t || 18, torcido: true }) +
      `<path d="M226 72 a 22 10 0 1 1 -2 0" class="il-seta"/>` + seta(226, 72, 220, 74) +
      txt(140, 150, 'firme, sem fio solto', { cls: 'il-mut', fs: 11 })
  };
  L['inserir-borne'] = {
    titulo: 'Inserir até o isolamento encostar e apertar', w: 300, h: 170,
    desenhar: p => borneCorte(150, 96) + cabo(20, 96, 208, { L: 76, cor: p.cor || 'vermelho', t: 18, torcido: true }) +
      seta(193, 20, 193, 44) + txt(148, 150, 'isolamento encostado na entrada', { cls: 'il-mut', fs: 11 }) + marca(36, 40, true)
  };
  L['cobre-exposto'] = {
    titulo: 'Cobre para fora do borne', w: 300, h: 170,
    desenhar: p => borneCorte(150, 96) + cabo(0, 96, 228, { L: 106, cor: p.cor || 'vermelho', t: 18, torcido: true }) +
      `<rect x="120" y="76" width="32" height="40" rx="4" class="il-alerta-area"/>` +
      txt(140, 150, 'pode encostar no borne vizinho: curto', { cls: 'il-mut', fs: 11 }) + marca(36, 40, false)
  };
  L['fio-solto'] = {
    titulo: 'Fio de cobre solto', w: 300, h: 170,
    desenhar: p => borneCorte(150, 96) + cabo(20, 96, 208, { L: 76, cor: p.cor || 'vermelho', t: 18, solto: true }) +
      `<circle cx="140" cy="64" r="14" class="il-alerta-area"/>` +
      txt(150, 150, 'um único fio já fecha curto', { cls: 'il-mut', fs: 11 }) + marca(36, 40, false)
  };

  /* ---------- terminal faston ---------- */
  L['faston-desencapar'] = {
    titulo: 'Desencapar ≈5 mm', w: 300, h: 170,
    desenhar: p => cabo(30, 96, 220, { L: 28, cor: p.cor || 'cristal', t: 12 }) + cota(222, 250, 66, '≈ 5 mm') +
      txt(150, 150, 'fio interno da caixa', { cls: 'il-mut', fs: 11 })
  };
  L['faston-inserir'] = {
    titulo: 'Enfiar até o cobre chegar ao fim do tubo', w: 300, h: 170,
    desenhar: p => faston(140, 92, p.terminal || 'vermelho') + cabo(20, 92, 172, { L: 30, cor: p.cor || 'cristal', t: 12 }) +
      seta(60, 60, 120, 60) + txt(150, 150, `terminal ${({ azul: 'azul (1,5–2,5 mm²)', amarelo: 'amarelo (4–6 mm²)' })[p.terminal] || 'vermelho (0,5–1,5 mm²)'}`, { cls: 'il-mut', fs: 11 })
  };
  L['faston-crimpar'] = {
    titulo: 'Crimpar na matriz da mesma cor', w: 300, h: 170,
    desenhar: p => faston(140, 96, p.terminal || 'vermelho') + cabo(20, 96, 172, { L: 30, cor: p.cor || 'cristal', t: 12 }) +
      `<rect x="146" y="40" width="42" height="34" rx="4" class="il-ferramenta"/><rect x="146" y="118" width="42" height="34" rx="4" class="il-ferramenta"/>` +
      `<circle cx="167" cy="57" r="6" class="il-faston-${p.terminal || 'vermelho'}"/>` +
      seta(167, 22, 167, 38) + seta(167, 168, 167, 154) + txt(240, 50, 'alicate de crimpar', { cls: 'il-mut', fs: 11 })
  };
  L['faston-puxar'] = {
    titulo: 'Puxar com força: não pode sair', w: 300, h: 170,
    desenhar: p => faston(140, 92, p.terminal || 'vermelho') + cabo(30, 92, 162, { L: 30, cor: p.cor || 'cristal', t: 12 }) +
      seta(70, 128, 26, 128) + seta(230, 128, 274, 128) + marca(36, 40, true) +
      txt(150, 158, 'isolamento cobre todo o cobre', { cls: 'il-mut', fs: 11 })
  };

  /* ---------- porta-fusível ---------- */
  L['porta-fusivel'] = {
    titulo: 'Porta-fusível montado, ainda vazio', w: 560, h: 220,
    desenhar: p => {
      const fus = p.fusivel || '40 A';
      return cabo(10, 140, 200, { L: 30, cor: 'vermelho', t: 18 }) +
        `<rect x="200" y="104" width="160" height="72" rx="12" class="il-plast"/>` +
        `<rect x="214" y="122" width="132" height="36" rx="5" class="il-furo"/>` +
        `<circle cx="226" cy="140" r="9" class="il-metal"/><circle cx="334" cy="140" r="9" class="il-metal"/>` +
        `<g transform="translate(560 0) scale(-1 1)">${cabo(10, 140, 200, { L: 30, cor: 'vermelho', t: 18 })}</g>` +
        `<rect x="236" y="30" width="88" height="34" rx="6" class="il-fusivel-vazio"/>` +
        txt(280, 52, `fusível ${fus}`, { fs: 12, peso: 600 }) +
        seta(280, 70, 280, 98, 'il-seta-tracejada') +
        txt(96, 112, 'C1 (vem da fonte)', { fs: 12 }) + txt(464, 112, 'C2 (vai ao módulo)', { fs: 12 }) +
        txt(280, 206, `só coloque o fusível no passo ${p.passo || '3.9'}, com a polaridade conferida`, { cls: 'il-mut', fs: 11.5 })
    }
  };

  /* ---------- teste de polaridade com pilha ---------- */
  L['teste-pilha'] = {
    titulo: 'Teste de polaridade com pilha AA', w: 600, h: 240,
    desenhar: () => {
      let s = `<rect x="150" y="40" width="200" height="120" rx="6" class="il-preto"/>` +
        `<rect x="142" y="34" width="20" height="132" rx="4" class="il-prata"/>` +
        `<path d="M162 62 L196 84 V116 L162 138 Z" class="il-cone"/>` +
        `<rect x="196" y="82" width="34" height="36" rx="3" class="il-plast"/>` +
        `<rect x="350" y="78" width="14" height="44" rx="2" class="il-plast"/>` +
        `<circle cx="372" cy="112" r="7" class="il-borne-vermelho"/><circle cx="372" cy="88" r="7" class="il-borne-preto"/>` +
        `<rect x="190" y="196" width="104" height="26" rx="5" class="il-pilha"/><rect x="294" y="203" width="7" height="12" rx="1" class="il-metal"/>` +
        txt(242, 214, 'pilha AA', { fs: 11, cls: 'il-txt-inv', peso: 600 }) +
        txt(312, 196, '+', { fs: 14, peso: 700 }) + txt(180, 196, '−', { fs: 14, peso: 700 });
      s += `<path d="M301 209 H400 V112 H379" class="il-fio-vermelho"/>` + `<path d="M190 209 V232 H460 V88 H379" class="il-fio-preto"/>`;
      s += seta(136, 100, 88, 100) + txt(86, 86, 'o cone avança', { a: 'end', fs: 12, peso: 600 }) +
        txt(250, 182, 'caixa vista de lado', { cls: 'il-mut', fs: 11 }) +
        txt(476, 108, '+ da pilha', { a: 'start', fs: 11.5, peso: 600 }) + txt(476, 124, 'no borne vermelho', { a: 'start', fs: 11.5 }) + marca(500, 160, true);
      return s;
    }
  };

  /* ---------- vista explodida BS-369 + JBL (medidas de componentes/caixas.md e da ficha JBL) ---------- */
  /* ---------- fibra de enchimento ---------- */
  // forma fofa (fibra solta) ocupando o retângulo x,y,w,h
  function nuvem(x, y, w, h, n = 6, cls = 'il-fibra') {
    const p = w / n; let d = `M${x} ${r1(y + h / 2)}`;
    for (let i = 0; i < n; i++) d += ` q ${r1(p / 2)} ${r1(-h * 0.9)} ${r1(p)} 0`;
    for (let i = 0; i < n; i++) d += ` q ${r1(-p / 2)} ${r1(h * 0.9)} ${r1(-p)} 0`;
    return `<path d="${d} z" class="${cls}"/>`;
  }
  // tufo denso (como sai do saco): círculo com fios por dentro
  function tufo(x, y, r, cls = 'il-fibra-densa') {
    let s = `<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>`;
    for (let k = 0; k < 5; k++) s += `<path d="M${r1(x - r * 0.6)} ${r1(y - r * 0.5 + k * r * 0.25)} q ${r1(r * 0.6)} ${r1(r * 0.3)} ${r1(r * 1.2)} 0" class="il-fibra-fio"/>`;
    return s;
  }
  L['fibra-pesar'] = {
    titulo: 'Pesar uma porção num saquinho vazio', w: 300, h: 170,
    desenhar: () => {
      let s = `<rect x="150" y="128" width="130" height="22" rx="6" class="il-plast-esc"/><rect x="236" y="134" width="38" height="12" rx="2" class="il-furo"/>` +
        txt(255, 143, '30 g', { cls: 'il-txt-inv', fs: 9, peso: 600 }) + `<rect x="160" y="120" width="70" height="8" rx="2" class="il-plast"/>`;
      s += `<path d="M168 120 q -6 -70 27 -78 q 33 8 27 78 z" class="il-isol-cristal"/>` + nuvem(176, 66, 38, 36, 4) + txt(195, 32, 'saquinho vazio', { cls: 'il-mut', fs: 10 });
      s += `<path d="M22 150 q -10 -90 44 -96 q 54 6 44 96 z" class="il-isol-cristal"/>` + nuvem(28, 72, 76, 60, 5) + tufo(50, 112, 14) + tufo(80, 100, 12) + tufo(66, 128, 11);
      s += txt(66, 44, 'saco da loja', { cls: 'il-mut', fs: 10 }) + seta(112, 86, 160, 70) + txt(136, 64, 'puxe tufos', { cls: 'il-mut', fs: 10 });
      s += txt(215, 164, 'balança de cozinha, zerada com o saquinho', { cls: 'il-mut', fs: 10 });
      return s;
    }
  };
  L['fibra-afofar'] = {
    titulo: 'Abrir cada tufo com os dedos', w: 300, h: 170,
    desenhar: () => {
      let s = tufo(58, 86, 30) + txt(58, 136, 'tufo como sai do saco:', { cls: 'il-mut', fs: 10 }) + txt(58, 150, 'denso, apertado', { cls: 'il-mut', fs: 10 });
      s += seta(100, 86, 136, 86);
      s += nuvem(150, 52, 130, 70, 6) + `<path d="M170 60 q 30 20 60 0 M165 96 q 40 26 90 4 M190 76 q 30 -10 70 6" class="il-fibra-fio"/>`;
      s += seta(205, 40, 180, 22) + seta(235, 40, 262, 22) + seta(205, 134, 180, 152) + seta(235, 134, 262, 152);
      s += txt(218, 164, 'solto e fofo: puxe para os lados', { cls: 'il-mut', fs: 10 }) + txt(218, 14, 'não rasgue em pedacinhos nem estique', { cls: 'il-mut', fs: 10 });
      return s;
    }
  };
  function caixaCorte(socada) {
    // traseira em corte, vista de cima: aberta à esquerda (onde encaixa a moldura com a JBL)
    let s = `<path d="M110 20 H286 V150 H110 V142 H278 V28 H110 Z" class="il-preto"/>`;
    s += `<rect x="278" y="60" width="8" height="50" class="il-plast"/>`; // placa dos bornes
    // JBL vista de cima (chegando pela esquerda): flange, cone, ímã
    s += `<rect x="60" y="34" width="6" height="102" class="il-metal"/><path d="M66 44 L104 70 V100 L66 126 Z" class="il-cone"/><rect x="104" y="66" width="34" height="38" rx="5" class="il-preto"/>`;
    s += txt(85, 160, 'moldura com a JBL', { cls: 'il-mut', fs: 10 });
    if (socada) {
      s += `<rect x="118" y="32" width="156" height="106" rx="6" class="il-fibra-densa"/>`;
      for (let k = 0; k < 7; k++) s += `<path d="M126 ${40 + k * 14} q 40 8 70 0 t 70 0" class="il-fibra-fio"/>`;
      s += `<rect x="112" y="62" width="30" height="46" rx="4" class="il-alerta-area"/>`;
      s += txt(200, 14, 'socada até a boca, encostando no ímã', { cls: 'il-mut', fs: 10 });
    } else {
      s += nuvem(238, 34, 34, 102, 5) + nuvem(150, 30, 100, 24, 5) + nuvem(150, 118, 100, 24, 5) + nuvem(118, 34, 30, 102, 4);
      s += `<ellipse cx="160" cy="85" rx="24" ry="24" class="il-vao"/>` + txt(160, 82, 'vão', { fs: 10, peso: 600 }) + txt(160, 94, '2–3 cm', { fs: 9, cls: 'il-mut' });
      s += txt(200, 14, 'solta: forra fundo e paredes', { cls: 'il-mut', fs: 10 });
    }
    return s;
  }
  L['fibra-acomodar'] = { titulo: 'Fibra solta forrando a traseira', w: 300, h: 170, desenhar: () => caixaCorte(false) + marca(22, 24, true) };
  L['fibra-socada'] = { titulo: 'Fibra socada, encostada no ímã', w: 300, h: 170, desenhar: () => caixaCorte(true) + marca(22, 24, false) };

  L['bs369-explodida'] = {
    titulo: 'BS-369 com JBL 4TRMS80: vista explodida de lado',
    fonte: 'medidas: fotos com régua e medições do usuário, 23/09/2026 (componentes/caixas.md); JBL: ficha técnica da caixa do produto. Escala ≈1:4 nas medidas principais; posição das torres e encaixe a validar na 1ª montagem.',
    w: 840, h: 430,
    desenhar: () => {
      const cy = 215; // centro do falante (≈55 % da altura, foto da moldura)
      let s = `<line x1="24" y1="${cy}" x2="730" y2="${cy}" class="il-eixo"/>`;
      // tela frontal
      s += `<rect x="40" y="${cy - 78}" width="6" height="156" rx="2" class="il-tela"/>`;
      // moldura frontal (prata), 4 cm
      s += `<rect x="110" y="70" width="52" height="264" rx="8" class="il-prata"/>`;
      s += `<rect x="110" y="${cy - 60}" width="12" height="120" class="il-furo"/>`; // abertura do anel ≈92 mm
      s += `<rect x="104" y="84" width="8" height="46" rx="2" class="il-plast"/>`; // grade decorativa (fechada)
      s += `<rect x="140" y="${cy - 68}" width="22" height="7" class="il-plast-esc"/><rect x="140" y="${cy + 61}" width="22" height="7" class="il-plast-esc"/>`; // assento
      // fita de vedação (junta do falante)
      s += `<rect x="204" y="${cy - 77}" width="6" height="14" rx="2" class="il-espuma"/><rect x="204" y="${cy + 63}" width="6" height="14" rx="2" class="il-espuma"/>`;
      s += `<line x1="207" y1="${cy - 63}" x2="207" y2="${cy + 63}" class="il-espuma-linha"/>`;
      // JBL: flange 118 mm, profundidade 68 mm, tweeter à frente
      s += `<rect x="232" y="${cy - 16}" width="20" height="32" rx="6" class="il-plast-esc"/>`;
      s += `<rect x="250" y="${cy - 77}" width="5" height="154" class="il-metal"/>`;
      s += `<path d="M255 ${cy - 66} L292 ${cy - 26} V${cy + 26} L255 ${cy + 66} Z" class="il-cone"/>`;
      s += `<path d="M255 ${cy - 72} L298 ${cy - 30} M255 ${cy + 72} L298 ${cy + 30}" class="il-tinta"/>`;
      s += `<rect x="296" y="${cy - 60}" width="42" height="120" rx="8" class="il-preto"/>`;
      s += `<rect x="276" y="${cy - 52}" width="7" height="12" class="il-metal"/><rect x="276" y="${cy + 40}" width="7" height="12" class="il-metal"/>`;
      // parafusos do falante
      s += `<path d="M270 ${cy - 92} h-22 M248 ${cy - 96} v8 M270 ${cy + 92} h-22 M248 ${cy + 88} v8" class="il-parafuso"/>`;
      // fibra
      s += `<path d="M400 ${cy - 40} q 20 -30 50 -10 q 30 -16 44 14 q 26 16 4 40 q 10 32 -28 30 q -24 22 -48 2 q -34 6 -32 -30 q -18 -26 10 -46 z" class="il-fibra"/>`;
      // carcaça traseira, 14 cm internos
      s += `<path d="M524 70 H706 V334 H524 V326 H698 V78 H524 Z" class="il-preto"/>`;
      s += `<rect x="532" y="86" width="166" height="10" rx="3" class="il-plast-esc"/><rect x="532" y="308" width="166" height="10" rx="3" class="il-plast-esc"/>`; // torres
      s += `<rect x="690" y="120" width="8" height="180" class="il-manta"/><rect x="560" y="78" width="90" height="6" class="il-manta"/><rect x="560" y="320" width="90" height="6" class="il-manta"/>`;
      s += `<rect x="516" y="70" width="8" height="18" rx="2" class="il-espuma"/><rect x="516" y="316" width="8" height="18" rx="2" class="il-espuma"/>`;
      s += `<rect x="706" y="${cy - 28}" width="10" height="56" rx="2" class="il-plast"/>`;
      s += `<circle cx="722" cy="${cy - 12}" r="6" class="il-borne-vermelho"/><circle cx="722" cy="${cy + 12}" r="6" class="il-borne-preto"/>`;
      s += `<path d="M706 ${cy - 12} C 600 ${cy - 140}, 360 ${cy - 140}, 283 ${cy - 46}" class="il-fio-interno"/>`;
      // cotas
      s += cota(110, 162, 352, '4 cm', false) + cota(250, 338, 352, '68 mm', false) + cota(524, 706, 352, '14 cm internos', false);
      s += cotaV(84, 70, 334, '20,3 cm');
      // rótulos com linha-guia
      const rot = (x, y, t, px, py) => `<line x1="${x}" y1="${y + (y < cy ? 5 : -14)}" x2="${px}" y2="${py}" class="il-guia"/>` + txt(x, y, t, { fs: 13, peso: 600 });
      s += rot(43, 50, 'Tela', 43, cy - 78) + rot(128, 26, 'Moldura frontal (prata)', 136, 70) + rot(210, 50, 'Fita de vedação', 207, cy - 77) +
        rot(326, 26, 'JBL 4TRMS80 (flange 118 mm)', 300, cy - 60) + rot(446, 50, 'Fibra solta', 446, cy - 48) + rot(615, 26, 'Carcaça traseira (preta)', 615, 70);
      s += rot(150, 398, 'Assento', 151, cy + 68) + rot(262, 418, '4 parafusos 3,5 × 12–16 mm', 256, cy + 96) +
        rot(512, 398, 'Fita na emenda', 520, 334) + rot(612, 418, 'Torres dos cantos: não mexer', 612, 318) + rot(690, 398, 'Manta asfáltica', 694, 300);
      s += txt(736, cy - 4, 'Bornes de mola', { a: 'start', fs: 12, peso: 600 }) + txt(736, cy + 13, 'vermelho = +', { a: 'start', fs: 11, cls: 'il-mut' });
      s += txt(100, 80, 'grade (fechada)', { a: 'end', fs: 10, cls: 'il-mut' });
      return s;
    }
  };
})();
