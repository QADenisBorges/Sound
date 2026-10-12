/* Biblioteca de equipamentos — vistas frontais desenhadas a partir de fotos reais.
   Cada equipamento: nome, vista, fonte (de onde saiu o desenho), w/h (área do corpo), corpo, elementos.
   Elementos com "id" podem receber cabos do projeto: no arquivo de dados, use bornes: ['<equipamento>:<id>'].
   Regra: só entra aqui o que foi conferido numa foto ou num manual. Proporções aproximadas; ORDEM e LEGENDAS exatas. */
window.GUIA_EQUIPAMENTOS = Object.assign(window.GUIA_EQUIPAMENTOS || {}, {

  'sd800.4-saida': {
    nome: 'SounDigital SD800.4 EVO',
    vista: 'régua de saída, com as letras do painel de pé',
    fonte: 'foto do usuário, 24/09/2026 (componentes existentes/SD800.4), girada 180° para leitura; legendas copiadas do painel',
    w: 760, h: 180,
    corpo: { x: 10, y: 20, w: 740, h: 150, rx: 12 },
    elementos: [
      { tipo: 'led', x: 36, y: 124, rot: 'LED' },
      { tipo: 'regua', x: 60, y: 92, w: 180, h: 64 },
      { tipo: 'borne', id: 'GND', x: 92, y: 124, r: 17, rot: 'GND' },
      { tipo: 'borne', id: 'REM', x: 150, y: 124, r: 9, rot: 'REM' },
      { tipo: 'borne', id: '12V', x: 208, y: 124, r: 17, rot: '+12VDC' },
      { tipo: 'regua', x: 252, y: 100, w: 478, h: 48 },
      { tipo: 'grupo', x1: 282, x2: 456, y: 58, rot: 'BRIDGE 4Ω (ponte)' },
      { tipo: 'grupo', x1: 514, x2: 688, y: 58, rot: 'BRIDGE 4Ω (ponte)' },
      { tipo: 'texto', x: 311, y: 86, t: 'CH4', fs: 12 },
      { tipo: 'texto', x: 427, y: 86, t: 'CH3', fs: 12 },
      { tipo: 'texto', x: 543, y: 86, t: 'CH2', fs: 12 },
      { tipo: 'texto', x: 659, y: 86, t: 'CH1', fs: 12 },
      { tipo: 'borne', id: 'CH4+', x: 282, y: 124, rot: '+', fs: 15 },
      { tipo: 'borne', id: 'CH4-', x: 340, y: 124, rot: '−', fs: 15 },
      { tipo: 'borne', id: 'CH3+', x: 398, y: 124, rot: '+', fs: 15 },
      { tipo: 'borne', id: 'CH3-', x: 456, y: 124, rot: '−', fs: 15 },
      { tipo: 'borne', id: 'CH2+', x: 514, y: 124, rot: '+', fs: 15 },
      { tipo: 'borne', id: 'CH2-', x: 572, y: 124, rot: '−', fs: 15 },
      { tipo: 'borne', id: 'CH1+', x: 630, y: 124, rot: '+', fs: 15 },
      { tipo: 'borne', id: 'CH1-', x: 688, y: 124, rot: '−', fs: 15 }
    ]
  },

  'sd800.4-entrada': {
    nome: 'SounDigital SD800.4 EVO',
    vista: 'painel de entrada (chaves mostradas na posição final, F)',
    fonte: 'foto do usuário, 24/09/2026 (componentes existentes/SD800.4); legendas copiadas do painel. A cor dos RCA de cima não aparece na foto (plugues encaixados): desenhados em branco',
    w: 660, h: 180,
    corpo: { x: 10, y: 20, w: 640, h: 150, rx: 12 },
    elementos: [
      { tipo: 'chave', x: 80, y: 112, rot: 'X-OVER', posicao: 'F' },
      { tipo: 'pot', x: 170, y: 112, rot: 'GAIN CH1-CH2' },
      { tipo: 'rca', id: 'CH1', x: 262, y: 78, cor: 'branco', rot: 'CH1', rotLado: 'acima', stub: 32 },
      { tipo: 'rca', id: 'CH2', x: 262, y: 128, cor: 'vermelho', rot: 'CH2', rotLado: 'esq' },
      { tipo: 'rca', id: 'CH4', x: 398, y: 78, cor: 'branco', rot: 'CH4', rotLado: 'acima', stub: -32 },
      { tipo: 'rca', id: 'CH3', x: 398, y: 128, cor: 'vermelho', rot: 'CH3', rotLado: 'dir' },
      { tipo: 'pot', x: 490, y: 112, rot: 'GAIN CH3-CH4' },
      { tipo: 'chave', x: 580, y: 112, rot: 'X-OVER', posicao: 'F' }
    ]
  },

  'bob60a': {
    nome: 'Taramps BOB 60A',
    vista: 'régua de bornes (AC de entrada e DC de saída)',
    fonte: 'foto do usuário, 08/10/2026 (componentes existentes/Fonte taramps Bob 60A), girada 90° para leitura; numeração 1–9 da tampa',
    w: 720, h: 180,
    corpo: { x: 10, y: 20, w: 700, h: 150, rx: 10 },
    elementos: [
      { tipo: 'pot', x: 52, y: 120, rot: 'ADJ VOLTAGE', sub: '12–15 V' },
      { tipo: 'regua', x: 90, y: 96, w: 572, h: 64 },
      { tipo: 'grupo', x1: 118, x2: 246, y: 56, rot: 'DC OUTPUT  +' },
      { tipo: 'grupo', x1: 310, x2: 438, y: 56, rot: 'DC OUTPUT  −' },
      { tipo: 'grupo', x1: 566, x2: 630, y: 56, rot: 'AC INPUT' },
      { tipo: 'borne', id: 'T1', x: 118, y: 120, rot: '+', fs: 15 },
      { tipo: 'borne', id: 'T2', x: 182, y: 120, rot: '+', fs: 15 },
      { tipo: 'borne', id: 'T3', x: 246, y: 120, rot: '+', fs: 15 },
      { tipo: 'borne', id: 'T4', x: 310, y: 120, rot: '−', fs: 15 },
      { tipo: 'borne', id: 'T5', x: 374, y: 120, rot: '−', fs: 15 },
      { tipo: 'borne', id: 'T6', x: 438, y: 120, rot: '−', fs: 15 },
      { tipo: 'borne', id: 'T7', x: 502, y: 120, rot: 'TERRA', fs: 10 },
      { tipo: 'borne', id: 'T8', x: 566, y: 120, rot: 'AC', fs: 11 },
      { tipo: 'borne', id: 'T9', x: 630, y: 120, rot: 'AC', fs: 11 },
      { tipo: 'texto', x: 98, y: 151, t: '1', fs: 10 }, { tipo: 'texto', x: 162, y: 151, t: '2', fs: 10 },
      { tipo: 'texto', x: 226, y: 151, t: '3', fs: 10 }, { tipo: 'texto', x: 290, y: 151, t: '4', fs: 10 },
      { tipo: 'texto', x: 354, y: 151, t: '5', fs: 10 }, { tipo: 'texto', x: 418, y: 151, t: '6', fs: 10 },
      { tipo: 'texto', x: 482, y: 151, t: '7', fs: 10 }, { tipo: 'texto', x: 546, y: 151, t: '8', fs: 10 },
      { tipo: 'texto', x: 610, y: 151, t: '9', fs: 10 },
      { tipo: 'texto', x: 690, y: 40, t: 'AUTOMATIC BIVOLT', fs: 10, anchor: 'end' }
    ]
  },

  'pro24bt-alimentacao': {
    nome: 'Taramps PRO 2.4BT + AUDIO',
    vista: 'conector de alimentação (4 vias, removível, parafuso)',
    fonte: 'foto do usuário, 08/10/2026 (componentes existentes/Processador taramps 2.4); legenda do painel superior',
    w: 400, h: 170,
    corpo: { x: 10, y: 20, w: 380, h: 140, rx: 10 },
    elementos: [
      { tipo: 'regua', x: 60, y: 92, w: 280, h: 40 },
      { tipo: 'grupo', x1: 182, x2: 246, y: 70, rot: 'REM' },
      { tipo: 'pino', id: 'GND', x: 104, y: 112, rot: 'GND −' },
      { tipo: 'pino', id: 'REMIN', x: 182, y: 112, rot: 'IN ▼' },
      { tipo: 'pino', id: 'REMOUT', x: 246, y: 112, rot: 'OUT ▲' },
      { tipo: 'pino', id: '12V', x: 304, y: 112, rot: '+ 12VDC' },
      { tipo: 'texto', x: 200, y: 44, t: 'conector removível · aperto com chave de fenda pequena', fs: 10, peso: 400 },
    ]
  },

  'pro24bt-rca': {
    nome: 'Taramps PRO 2.4BT + AUDIO',
    vista: 'lado das conexões RCA (branco em cima, vermelho embaixo)',
    fonte: 'foto do usuário, 08/10/2026 (componentes existentes/Processador taramps 2.4); correspondência das colunas com a legenda do painel superior a confirmar',
    w: 520, h: 180,
    corpo: { x: 10, y: 20, w: 500, h: 150, rx: 10 },
    elementos: [
      { tipo: 'porta', x: 70, y: 104, w: 46, h: 22, rot: 'HIGH IN', naoUsar: true },
      { tipo: 'texto', x: 70, y: 138, t: 'não usar', fs: 10, peso: 400 },
      { tipo: 'texto', x: 190, y: 44, t: 'INPUTS', fs: 11 },
      { tipo: 'texto', x: 375, y: 44, t: 'OUTPUTS', fs: 11 },
      { tipo: 'rca', id: 'A', x: 190, y: 80, cor: 'branco', rot: 'A', rotLado: 'esq', stub: 30 },
      { tipo: 'rca', id: 'B', x: 190, y: 128, cor: 'vermelho', rot: 'B', rotLado: 'esq' },
      { tipo: 'rca', id: 'OUT1', x: 310, y: 80, cor: 'branco', rot: '1', rotLado: 'esq', stub: 30 },
      { tipo: 'rca', id: 'OUT2', x: 310, y: 128, cor: 'vermelho', rot: '2', rotLado: 'esq' },
      { tipo: 'rca', id: 'OUT3', x: 430, y: 80, cor: 'branco', rot: '3', rotLado: 'dir', stub: 30 },
      { tipo: 'rca', id: 'OUT4', x: 430, y: 128, cor: 'vermelho', rot: '4', rotLado: 'dir' }
    ]
  }
});
