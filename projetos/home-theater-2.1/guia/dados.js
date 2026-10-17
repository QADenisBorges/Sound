/* Dados do guia — Home Theater 2.1 (fase 1 do projeto home-theater-5.1)
   Fonte do conteúdo: ../montagem-2.1.md, ../doc-rascunho-fotos-e-conexoes.md, ../../../componentes/*.md
   Formato: ver ../../../documentacao/modelo/LEIAME.md */
window.GUIA = {
  meta: {
    id: 'ht21',
    tipo: 'Guia de montagem',
    titulo: 'Home Theater 2.1',
    resumo: 'Duas caixas JBL 4TRMS80 em carcaças Britânia BS-369 e um sub de 8", amplificados por um SD800.4 alimentado por fonte. Três frentes independentes (caixas, cabo do sub, eletrônica) e a integração no fim. Tudo em mãos; o painel abaixo diz o que pode ser feito agora.',
    versao: '2.7',
    data: '17/10/2026',
    autor: 'Denis',
    nivel: 'Intermediário',
    tempo: '8–10 h + 24–48 h de cura',
    arquivo: 'Home-Theater-2.1'
  },

  visao: 'A música sai do celular ou do notebook, passa pelo processador, que separa os graves dos médios e agudos, e chega ao módulo, que amplifica: dois canais para as caixas L/R e dois em ponte para o sub. A fonte transforma a tomada em {{p:tensao}}.',

  cadeia: [
    { rotulo: 'Música', detalhe: 'Celular (Bluetooth) ou notebook (P2)' },
    { rotulo: 'Processador PRO 2.4BT', detalhe: 'Corte em {{p:corte}}, limitador, atraso' },
    { rotulo: 'Módulo SD800.4', detalhe: '2 canais para as caixas + ponte para o sub' },
    { rotulo: 'Caixas', detalhe: 'JBL 4TRMS80 em BS-369 (L/R) + sub de 8"' },
    { rotulo: 'Energia', detalhe: 'Tomada → BOB 60A → fusíveis' }
  ],

  parametros: [
    { id: 'tensao', rotulo: 'Tensão na régua do módulo', valor: '13,8', un: 'V', como: 'Dentro da faixa do módulo e da fonte (manuais). 13,8 V é a tensão de um carro com o motor ligado.', fonte: 'Manual BOB 60A (12–15 V) · manual SD800.4 (9–16 V)' },
    { id: 'fus40', rotulo: 'Fusível principal', valor: '40', un: 'A', como: 'Valor do manual do módulo (seção de alimentação).', fonte: 'Manual SD800.4' },
    { id: 'fus1', rotulo: 'Fusível do processador', valor: '1', un: 'A', como: 'Manual do processador; 2 A se não houver 1 A. Maior (ex.: 5 A) só como provisório: protege o fio, não tanto o aparelho.', fonte: 'Manual PRO 2.4BT + AUDIO · análise de 10/10/2026' },
    { id: 'bit_forca', rotulo: 'Cabo de força e terra', valor: '10', un: 'mm²', como: 'Manual do módulo, ou `calc_som.py cabo --corrente <A> --comprimento <m>`. Se o 10 mm² não entrar no borne da fonte, 6 mm² serve com o fusível de 40 A (≈0,25 V de queda a 40 A em 2 m).', fonte: 'Manual SD800.4 · revisão técnica de 09/10/2026' },
    { id: 'bit_fal', rotulo: 'Cabo de falante', valor: '2,5', un: 'mm²', como: 'Manual do módulo. Até ~5 m, 2,5 mm² serve para qualquer caixa de 4 Ω. Se não couber no borne da caixa, 1,5 mm² serve: em 2,5 m soma 0,06 Ω ida e volta (−0,15 dB, inaudível). O cabo comprado (branco) não tem friso: marque um condutor com caneta nas duas pontas antes de cortar.', fonte: 'Manual SD800.4 (EVO6) · revisão técnica de 09/10/2026' },
    { id: 'bit_proc', rotulo: 'Fio do processador', valor: '1,5', un: 'mm²', como: 'Manual do processador. O processador puxa menos de 1 A: 1,0 mm² também serve (≈18 mV de queda em 1 m).', fonte: 'Manual PRO 2.4BT + AUDIO · análise de 10/10/2026' },
    { id: 'dist_fus', rotulo: 'Distância máxima fusível–fonte', valor: '30', un: 'cm', como: 'O fusível fica o mais perto possível de quem fornece a corrente.', fonte: 'Prática de instalação' },
    { id: 'imp_sat', rotulo: 'Impedância das caixas L/R', valor: '4', un: 'Ω', como: 'Etiqueta do falante. O multímetro mede um pouco menos (Re).', fonte: 'Ficha JBL 4TRMS80 (Re 3,4 Ω)' },
    { id: 'imp_sub', rotulo: 'Impedância do sub (ponte)', valor: '4', un: 'Ω', como: 'Em ponte, nunca abaixo do mínimo do módulo (4 Ω no SD800.4).', fonte: 'Manual SD800.4 · medição' },
    { id: 'ganho_sat', rotulo: 'Ganho das caixas L/R', valor: '11', un: 'V AC', como: 'V = √(P × R): 30 W × 4 Ω → 11 V. Quem limita aqui é o curso do cone, não o calor: com o filtro em 120 Hz, a JBL chega ao Xmax (1,75 mm de pico) com ≈12 W perto de 122 Hz. Para outro falante, rode `calc_som.py excursao` com os dados dele e da caixa.', fonte: '`calc_som.py excursao` · revisão técnica de 09/10/2026' },
    { id: 'ganho_sub', rotulo: 'Ganho do sub em ponte', valor: '40', un: 'V AC', como: 'Tabela do fabricante (ponte 4 Ω / 400 W) ou V = √(P × R).', fonte: 'Manual SD800.4' },
    { id: 'corte', rotulo: 'Frequência de corte', valor: '120', un: 'Hz', como: 'Perto da frequência de ressonância da caixa satélite (Fc ≈ 124 Hz). Confira por simulação.', fonte: 'Simulação de 09/10/2026' },
    { id: 'filtro_sat', rotulo: 'Filtro das caixas L/R', valor: 'Butterworth 12 dB/oit', un: '', como: 'Caixa selada + filtro de 12 dB = corte acústico de 24 dB/oit.', fonte: 'Simulação de 09/10/2026' },
    { id: 'filtro_sub', rotulo: 'Filtro do sub', valor: 'Linkwitz-Riley 24 dB/oit', un: '', como: 'Padrão para somar com as caixas no cruzamento.', fonte: 'Simulação de 09/10/2026' },
    { id: 'subsonico', rotulo: 'Subsônico do sub', valor: '30', un: 'Hz, 24 dB/oit', como: 'Depende da caixa (teste do passo 5.3). Selada: 25 Hz basta. Com duto: ≈0,75–0,8 × a frequência do duto (Fb), 24 dB/oit. Sem conclusão: 30 Hz, 24 dB/oit.', fonte: 'Revisão técnica de 09/10/2026 · tipo da caixa do sub a confirmar' },
    { id: 'tom', rotulo: 'Tom de teste do ganho', valor: '60 Hz', un: 'a 0 dBFS', como: 'Frequência do manual do módulo, no nível mais alto que um arquivo digital pode ter (0 dBFS), igual nos dois canais.', fonte: 'Manual SD800.4 · revisão técnica de 09/10/2026' },
    { id: 'volume_teste', rotulo: 'Volume da fonte na regulagem', valor: '100 %', un: '', como: 'O maior sinal que pode chegar: celular no máximo, sem equalizador nem efeitos. Assim não existe volume acima da regulagem. O notebook pelo P2 também é medido a 100 %.', fonte: 'Revisão técnica de 09/10/2026 · manual PRO 2.4BT + AUDIO (saída máxima de 2,1 V RMS; nível de saída até +15 dB)' },
    { id: 'limiar', rotulo: 'Limiar do limitador', valor: 'No ponto regulado', un: '', como: 'Com o tom de referência tocando, baixe o limiar de cada saída até o LED dela acender e suba até apagar. O limitador passa a cortar só o que passaria da regulagem.', fonte: 'Manual PRO 2.4BT + AUDIO, pág. 11 (limitador e LEDs de saída) · revisão técnica de 09/10/2026' },
    { id: 'fibra', rotulo: 'Enchimento por caixa', valor: '≈10–20', un: 'g (estimado)', como: 'Vale o volume, não o peso: a fibra forra fundo e paredes da traseira solta, sem comprimir. Pese o que coube na 1ª caixa e ponha o mesmo na 2ª. Regras de 8–16 g por litro valem para fibra acústica densa; fibra siliconada de almofada é bem mais fofa, e o mesmo peso ocupa 2–3× o volume (a BS-369 tem ~3,5 L).', fonte: 'Correção do usuário, 17/10/2026: 50 g desta fibra ocupam muito mais que a caixa' },
    { id: 'cura', rotulo: 'Cura do silicone acético antes de fechar', valor: '24–48', un: 'h', como: 'Caixa aberta até sumir o cheiro de vinagre. Neutro: o tempo da embalagem.', fonte: 'Decisão de 10/10/2026' },
    { id: 'broca', rotulo: 'Broca piloto', valor: '2,5', un: 'mm', como: '~70 % do diâmetro do parafuso (3,5 mm) para plástico.', fonte: 'Prática' },
    { id: 'fio_pf', rotulo: 'Fio do porta-fusível de 40 A', valor: '≥ 4', un: 'mm²', como: 'Rabicho de ≈10 cm, com a fonte limitando a 40 A: a 40 A, 10 cm de 4 mm² dissipam ≈0,7 W (I² × R), nada. Com 2,5 mm² o fio vira o elo mais fraco: trocar por midi ou por lâmina com fio ≥ 6 mm². Meça o diâmetro externo: ≈4,5 mm = 4 mm²; ≈4 mm = 2,5 mm².', fonte: 'Análise de 10/10/2026 (compras/2026-10-10-loja-fisica/conferencia.md) · medição em 11/10' },
    { id: 'torre', rotulo: 'Altura mínima da torre para o parafuso de 19 mm', valor: '20', un: 'mm', como: 'Parafuso de 19 mm − flange da JBL (≈3–4 mm) − arruela (≈1 mm) = ≈15 mm no plástico. Torre mais baixa: corte a ponta do parafuso ou use 13–16 mm.', fonte: 'Análise de 10/10/2026 · 11/10: torres não usadas, furos novos na moldura' }
  ],

  materiais: [
    { id: 'M01', item: 'Fonte Taramps BOB 60A', spec: '40 A contínuos; 12–15 V ajustável; 3 bornes + e 3 bornes −', qtd: '1', sit: 'tem',
      alerta: 'Etiqueta de baixo: **MODEL BOB 60A**',
      foto: { src: 'img/m01-bob60a.jpg', alt: 'Fonte Taramps BOB 60A vista de cima', credito: 'Foto do usuário, 08/10/2026' },
      papel: 'Transforma a tomada em 12–15 V com até 40 A contínuos para o módulo e o processador. É a "bateria" do sistema.',
      conferir: ['Etiqueta de baixo: **MODEL BOB 60A** (não Pro Charger nem BOB 120A).', 'Cabo de força com 3 pinos (tem terra) e tomada com o terra ligado: um testador de tomada (≈R$ 20–30) mostra fase, neutro e terra sem expor a mão.', 'Régua: bornes 1–3 (+) e 4–6 (−), trimpot ADJ VOLTAGE.'] },
    { id: 'M02', item: 'Processador Taramps PRO 2.4BT + AUDIO', spec: '2 entradas / 4 saídas; alimentação 12 V, fusível de 1 A', qtd: '1', sit: 'tem',
      alerta: 'Etiqueta: **PRO 2.4BT + AUDIO**',
      foto: { src: 'img/m02-pro24bt.jpg', alt: 'Painel do processador Taramps PRO 2.4BT + AUDIO', credito: 'Foto do usuário, 08/10/2026' },
      papel: 'Divide o som entre caixas e sub (crossover), limita o volume que chega às JBL e recebe música do celular por Bluetooth.',
      conferir: ['Etiqueta: **PRO 2.4BT + AUDIO**. O "PRO 2.4BT" sem "+ AUDIO" não recebe música pelo Bluetooth.', 'Conector de 4 vias (GND · REM IN · REM OUT · +12 V) na caixa.'] },
    { id: 'M03', item: 'Módulo SounDigital SD800.4 EVO', spec: '4 × 132 W em 4 Ω; ponte de 400 W em 4 Ω', qtd: '1', sit: 'tem',
      alerta: 'Ponte BRIDGE 4Ω em CH4⊕ / CH3⊖',
      foto: { src: 'img/m03-sd8004.jpg', alt: 'Módulo SounDigital SD800.4 EVO', credito: 'Foto do usuário, 24/09/2026' },
      papel: 'Amplifica: dois canais para as caixas L/R e dois em ponte para o sub.',
      conferir: ['Tampa: **800.4 EVO**.', 'Régua de saída com BRIDGE 4Ω em CH4⊕/CH3⊖ (ponte do sub).'] },
    { id: 'M04', item: 'Alto-falante JBL 4TRMS80', spec: '4", 4 Ω (Re 3,4), 80 W RMS, furo de 93 mm, profundidade de 68 mm', qtd: '2', sit: 'tem',
      alerta: '≈3,4 Ω em cada falante, medido solto',
      foto: { src: 'img/m04-jbl4trms80.jpg', alt: 'Alto-falante triaxial JBL 4TRMS80', credito: 'Foto do usuário, 08/10/2026' },
      papel: 'Falante das caixas L/R: médios e agudos acima de {{p:corte}}.',
      conferir: ['Etiqueta lateral: **4TRMS80 · 80W RMS · 4 ohms**.', 'Multímetro em Ω nos terminais: ≈3,4 Ω em cada um.', 'Borda e cone inteiros, sem raspar ao empurrar de leve.'] },
    { id: 'M05', item: 'Carcaça Britânia BS-369', spec: 'Selada, ~3,5 L, sem bornes (cabo passa pelo furo pequeno da traseira)', qtd: '2', sit: 'tem',
      alerta: 'Traseira sem bornes: placa com 2 rasgos e 1 furo abertos, a fechar por dentro',
      foto: { src: 'img/m05-bs369.jpg', alt: 'Moldura frontal prateada da caixa Britânia BS-369', credito: 'Foto do usuário, 23/09/2026' },
      papel: 'Caixa das JBL. Precisa ficar bem vedada: é ela que controla o grave do falante.',
      conferir: ['Duas carcaças completas (moldura prata + traseira preta + tela).', 'Torres dos cantos inteiras.', 'Placa dos bornes (11/10/2026): sem bornes de mola; só o furo redondo menor serve de passagem do cabo. Os dois rasgos retangulares e o furo maior ficam abertos e são tampados por dentro em 2.4 (fita) e 2.5 (silicone na borda).'] },
    { id: 'M06', item: 'Sub Protech 8" em caixa', spec: '4 Ω, ligado em ponte; plugue de 2 vias; caixa **com duto** no topo (foto de 11/10/2026)', qtd: '1', sit: 'tem',
      alerta: 'O cabo atual até o módulo será trocado (passo 3.1)',
      foto: { src: 'img/m06-sub.jpg', alt: 'Caixa do subwoofer Protech de 8 polegadas', credito: 'Foto do usuário, 24/09/2026' },
      papel: 'Graves abaixo de {{p:corte}}. O cabo que veio com ele (azul/branco de ≈1–1,5 mm², emendado com fita isolante a um trecho vermelho/preto de ≈0,5 mm² com plugue) será trocado por 2 × 2,5 mm² no passo 3.1: a emenda de fita pode soltar, e em ponte os dois fios carregam sinal.',
      conferir: ['Fio solto do módulo, multímetro em Ω: 3–3,6 Ω (4 Ω).', 'Plugue de 2 vias firme, com os pinos sem escurecer (oxidação).', 'Procure um duto (abertura) na caixa, inclusive atrás do painel escuro. Com duto, o subsônico muda (passo 5.3).'] },

    { id: 'M07', item: 'Cabo de força 10 mm², vermelho e preto', spec: 'Cobre, 10 mm², flexível; 1 m de cada', qtd: '1 m vermelho + 1 m preto', sit: 'tem',
      alerta: 'Raspe a ponta ao desencapar: cobre por dentro', onde: 'Material elétrico', preco: 'R$ 30–50',
      foto: { src: 'img/m07-cabo-10mm2.jpg', alt: 'Rolo de cabo flexível vermelho de 10 mm² comprado em 10/10', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'Leva até 40 A da fonte ao módulo (+12 V e terra). É o cabo que mais trabalha no sistema.',
      conferir: ['Comprado em 10/10 como **10 mm²** (sem etiqueta no cabo; bitola informada pelo usuário). Diâmetro externo ≈7 mm confirma; ≈5,5 mm seria 6 mm², que também serve.', 'Ao desencapar, confira: cor de cobre por dentro, muitos fios finos.', 'Ponta no borne da fonte e do módulo: entra inteira? Se não, afine torcendo bem ou use ilhós.'],
      armadilha: '"Cabo de 10 mm" de loja de som que mede 10 mm **por fora** e tem 4–6 mm² de cobre; embalagem escrita "OFC" com alumínio (CCA) por dentro.' },
    { id: 'M08', item: 'Porta-fusível + fusível de 40 A', spec: 'Lâmina média (ATO) com fios; fusível laranja de 40 A', qtd: '1 + 1', sit: 'tem',
      alerta: 'Fio do porta-fusível: {{p:fio_pf}} (medir em 11/10)', onde: 'Autopeças / som automotivo', preco: 'R$ 20–40',
      foto: { src: 'img/m08-porta-fusivel-40a.jpg', alt: 'Porta-fusível de lâmina com fios vermelhos e fusível laranja de 40 A', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'Protege o cabo de força: num curto, o fusível abre antes de o cabo esquentar e pegar fogo.',
      conferir: ['Fusível **laranja = 40 A** (confirmado em 10/10; o número vem gravado no topo).', 'Meça o diâmetro externo do fio do porta-fusível: ≈4,5 mm (4 mm²) usa; ≈4 mm (2,5 mm²) troca por midi ou por lâmina com fio ≥ 6 mm².', 'Compre um 40 A de reserva quando passar numa autopeças.'],
      armadilha: 'Fusível de outro padrão (mini, maxi, midi) não encaixa neste porta-fusível. Fusível maior "por garantia" (60–80 A) não protege o cabo.',
      nota: 'Desvio registrado em 10/10: a lista pedia fio de 6 mm² no porta-fusível. Com ≥ 4 mm² num rabicho de 10 cm e a fonte limitando a 40 A, a dissipação é de ≈0,7 W: aceito. Com 2,5 mm², não.' },
    { id: 'M09', item: 'Porta-fusível de lâmina + fusível do processador', spec: 'Lâmina média (ATO) com fios de ≈1,5–2,5 mm²; fusível de 5 A (provisório; o certo é 1–2 A)', qtd: '1 + 1', sit: 'tem',
      alerta: '5 A é provisório: trocar por 1–2 A médio (M23)', onde: 'Autopeças', preco: 'R$ 8–15',
      foto: { src: 'img/m09-porta-fusivel-5a.jpg', alt: 'Porta-fusível de lâmina com fios vermelhos e fusível vermelho de 5 A', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'Protege o fio fino de alimentação do processador (que consome só 70 mA).',
      conferir: ['Fusível vermelho com **5** gravado no topo (no padrão ATO, vermelho costuma ser 10 A: confira o número).', 'Veio também um fusível de 2 A **mini**, que não entra neste porta-fusível: guarde.'],
      armadilha: 'Lâmina **mini** e lâmina **média** parecem iguais em foto de anúncio e não se encaixam uma na outra.',
      nota: 'Decisão consciente de 10/10: montar com o 5 A. Ele protege o fio de 1,5 mm² contra curto (o risco físico); protege menos o processador num defeito interno. Troca por 1–2 A quando achar, sem pressa.' },
    { id: 'M10', item: 'Cabo paralelo 2 × 2,5 mm²', spec: 'Cobre, 2,5 mm² por condutor, branco, sem friso', qtd: '10 m de cabo', sit: 'tem',
      alerta: 'Sem friso: marque o + com caneta nas duas pontas', onde: 'Material elétrico', preco: 'R$ 21–35',
      foto: { src: 'img/m10-cabo-paralelo-2x25.jpg', alt: 'Rolo de cabo paralelo branco com etiqueta da loja "2x2,5 paralelo 10 mts"', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'Leva o som do módulo até cada caixa L/R e até o sub (troca o cabo fino com emenda que veio com ele).',
      conferir: ['Etiqueta da loja: **2 × 2,5 paralelo, 10 m** (sobram ≈3 m).', 'Raspe a ponta: cobre por dentro.', 'Passe uma ponta pelo furo pequeno da traseira da BS-369 antes de cortar os cabos das caixas: se o 2,5 mm² não entrar, torça bem a ponta ou desencape só 8 mm.'],
      armadilha: 'Inverter a polaridade sem perceber, porque o cabo não tem friso. Caneta permanente num condutor, nas duas pontas, antes de cortar.' },
    { id: 'M11', item: 'Fio flexível para o processador', spec: 'Cobre, flexível, 1,0–1,5 mm²', qtd: '~2 m', sit: 'tem',
      alerta: 'Flexível (muitos fios finos), não rígido', onde: 'Material elétrico', preco: 'R$ 4–8',
      foto: { src: 'img/m11-fio-branco.jpg', alt: 'Rolo de fio flexível branco fino', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'Alimentação e terra do processador (C4, C5).',
      conferir: ['Fio branco comprado em 10/10 (1,0 ou 1,5 mm²: os dois servem, o processador puxa menos de 1 A).', 'Alternativa já em casa: o paralelo 2 × 1,5 mm² (M24), que vem em par e deixa a instalação mais arrumada.'],
      armadilha: 'Fio **rígido** (um fio só, de instalação de parede) quebra com a vibração e não prende bem no conector pequeno do processador.' },
    { id: 'M12', item: 'Cabo RCA duplo curto', spec: 'Macho-macho, 2 vias, blindado, 0,5–1 m', qtd: '2', sit: 'tem',
      alerta: 'Dois cabos: 1 MXT comprado + 1 que já havia em casa', onde: 'Eletrônica / informática', preco: 'R$ 20–60',
      foto: { src: 'img/m12-cabo-rca-mxt.jpg', alt: 'Cabo RCA duplo MXT vermelho de 1 m na embalagem', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'Leva o sinal das 4 saídas do processador às 4 entradas do módulo (S1–S4).',
      conferir: ['Plugues finos: no processador e no módulo os RCA ficam juntinhos.', 'Ponta metálica firme, sem folga, nos dois cabos.'],
      armadilha: 'Cabo **Y** (1 fêmea → 2 machos); cabo comprido demais, que sobra enrolado e capta ruído; plugue grosso que não encaixa lado a lado.' },
    { id: 'M13', item: 'Terminal faston fêmea isolado (amarelo, 6,3 mm)', spec: 'Fêmea, pré-isolado, 6,3 mm; cano para 4–6 mm² (o fio da caixa é fino: vai soldado)', qtd: '8', sit: 'tem',
      alerta: 'O fio fino da BS-369 é **soldado** dentro do terminal, não crimpado', onde: 'Material elétrico', preco: 'R$ 8',
      foto: { src: 'img/m13-faston-amarelo.jpg', alt: 'Oito terminais faston fêmea amarelos ao lado do silicone', credito: 'Foto do usuário, 10/10/2026' },
      uso: { finalidade: 'Ligar o cabo de falante ao terminal da JBL sem soldar no falante: o faston encaixa e desencaixa, o cabo fica soldado nele.',
        local: 'Na ponta do cabo de falante que entra em cada caixa pelo furo da traseira (I1 / I2). Os dois terminais da JBL têm 6,3 mm (régua, 11/10/2026): faston nos dois.',
        modo: ['Tubo termorretrátil no fio **antes** de tudo.', 'Desencapar ≈6 mm e estanhar a ponta.', 'Gota de estanho dentro do cano do faston; fio estanhado dentro; ferro 2–3 s; tirar sem mexer.', 'Puxão forte; tubo por cima, encolhido com o isqueiro.'],
        momento: 'Passo 2.9, durante a cura do silicone. Os faston encaixam na JBL no 2.10.',
        cuidados: ['Não crimpar: o cano amarelo é para fio de 4–6 mm² e o da caixa é fino; fica frouxo.', 'Solda fosca e granulada é solda fria: refazer.', 'Nenhum cobre fora do tubo.'] },
      papel: 'Liga o cabo de falante nos terminais da JBL (I1, I2).',
      conferir: ['Largura: 6,3 mm. Meça os terminais da JBL: se um for de 4,8 mm, esse fio vai soldado direto no terminal do falante.', 'Recibo MDL de 10/10: "terminal cobre 4-6 mm fêmea pré-isolado", 8 un.'],
      armadilha: 'Crimpar fio de 0,5–1 mm² em cano amarelo (4–6 mm²): fica frouxo e solta com a vibração. Por isso a solda (passo 2.9).',
      nota: 'Decisão de 10/10: sem alicate de terminais e sem faston vermelho; solda com o kit (M22).' },
    { id: 'M14', item: 'Parafuso autoatarraxante + arruela', spec: 'AA 3,5 × 19 mm, cabeça panela Phillips, zincado, ponta agulha (Ciser, c/ 30) + arruelas lisas', qtd: '8 + 8 (sobram)', sit: 'tem',
      alerta: '19 mm: a torre precisa ter {{p:torre}} de altura (medir)', onde: 'Ferragem', preco: 'R$ 3,70',
      foto: { src: 'img/m14-parafusos-ciser.jpg', alt: 'Cartela de parafusos Ciser 3,5 × 19 e arruela lisa', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'Fixa a JBL na moldura da BS-369. A arruela cobre o furo oval da flange.',
      conferir: ['Cartela: **PARAF PAN PHI CISER 3,5X19 C/30 ZB**.', 'Ponta agulha (fina), não ponta broca.', 'No encaixe a seco (passo 2.1): encoste o parafuso de pé na torre; se a ponta passar mais de 2–3 mm do fundo dela, corte a ponta com alicate.'],
      armadilha: 'Apertar além do ponto em que a flange assenta: racha a torre de plástico. Parafuso longo atravessando a frente da moldura.' },
    { id: 'M15', item: 'Fita de espuma para vedação', spec: 'Adere E-105S: polietileno de célula fechada, autoadesiva, 4 mm × 19 mm × 5 m', qtd: '1 rolo (5 m)', sit: 'tem',
      alerta: '19 mm é mais larga que a flange: corte ao meio no comprimento', onde: 'Ferragem (O Ferrageiro)', preco: 'R$ 33,60',
      foto: { src: 'img/m15-fita-espuma-adere.jpg', alt: 'Embalagem da fita de espuma para vedação Adere, 19 mm × 5 m', credito: 'Foto do usuário, 10/10/2026' },
      uso: { finalidade: 'Gaxeta: fecha a folga entre a flange de metal da JBL e o plástico do assento, e entre as duas metades da carcaça. Sem ela, o ar escapa por essas juntas e o grave cai.',
        local: 'Contorno do assento da JBL (pela borda externa, sem cobrir os furos) e contorno de encaixe de uma das metades da carcaça. Mapa no passo 2.3.',
        modo: ['Cortar o rolo ao meio no sentido do comprimento, com estilete e régua: 19 mm viram duas tiras de ≈9 mm.', 'Limpar o assento com álcool.', 'Colar a tira seguindo a borda externa; emendas de topo, sem sobrepor.', 'Pressionar com o dedo alguns segundos em toda a extensão.'],
        momento: 'Passo 2.7, a qualquer hora depois da furação (2.2). A JBL só é parafusada sobre ela no 2.11.',
        cuidados: ['Não deixar sobra para dentro da abertura: encosta na suspensão da JBL.', 'Não sobrepor as pontas: cria degrau e a flange não assenta.', 'Apertar os parafusos só até a flange assentar; a espuma de 4 mm comprime para ≈2 mm.'] },
      papel: 'Gaxeta entre a flange da JBL e o assento, e no contorno da emenda da carcaça. Sem vedação, a caixa selada vaza ar e perde o grave.',
      conferir: ['Código **E-105S** = espuma branca de **4,0 mm** (catálogo Adere). A lista pedia 2–3 mm: 4 mm serve, comprimindo no aperto normal.', 'Sopre através de um pedaço: não pode passar ar (célula fechada).'],
      armadilha: 'Deixar os 19 mm inteiros sob a flange: a sobra invade a abertura do cone e pode encostar na suspensão. Apertar demais para "vencer" a espuma: racha a torre.' },
    { id: 'M16', item: 'Fibra siliconada', spec: 'Fibra de poliéster (enchimento de almofada)', qtd: 'saco grande (sobra)', sit: 'tem',
      alerta: 'Medir pelo volume (forrar solta), não pelo peso; pesar só para as duas caixas ficarem iguais', onde: 'Armarinho / tecidos', preco: 'R$ 10–20',
      foto: { src: 'img/m16-fibra.jpg', alt: 'Saco de fibra de poliéster siliconada', credito: 'Foto do usuário, 10/10/2026' },
      uso: { finalidade: 'Enchimento acústico, não vedação. Fica solta dentro da caixa e absorve o som que o cone manda para trás (senão ele volta pelo cone com atraso, o "som de caixa", timbre oco). Também faz a caixa se comportar como ≈10–15 % maior.',
        local: 'Solta dentro da metade traseira: fundo e paredes, enchendo o espaço frouxamente. Um vão de 2–3 cm atrás do ímã da JBL, sem fibra encostando no falante. Foto marcada no passo 2.11.',
        modo: ['Separar uma porção generosa (sobra volta para o saco) e pesar com a balança de cozinha.', 'Abrir os tufos com os dedos até ficar solta e fofa.', 'Na hora de fechar a caixa, forrar o fundo e as paredes da traseira sem apertar, com um vão para o ímã. Pesar a sobra: a diferença é o que entrou, e a 2ª caixa recebe o mesmo.'],
        momento: 'Pesar e guardar no passo 2.8 (qualquer hora). Entra na caixa só no passo 2.11, ao fechar, depois da cura do silicone e com a JBL já parafusada.',
        cuidados: ['Não socar: comprimida, deixa de absorver.', 'Não encostar no cone nem no ímã: abafa e pode raspar.', 'Não usar espuma, algodão nem lã de vidro.', 'Não molhar.'] },
      papel: 'Enchimento das caixas: tira o "som de caixa" (reflexo do som por dentro) e faz a caixa se comportar como ≈10–15 % maior.',
      conferir: ['Fibra solta e fofa, sem cola nem cheiro forte.'],
      armadilha: 'Comprimir a fibra ou encostá-la atrás do ímã: abafa e pode raspar no cone.' },
    { id: 'M17', item: 'Silicone acético transparente', spec: 'Tekbond, 50 g (acético: só em plástico, longe de metal)', qtd: '1', sit: 'tem',
      alerta: 'Acético: só em plástico, caixa aberta por {{p:cura}}', onde: 'Material elétrico (MDL)', preco: 'R$ 9,90',
      foto: { src: 'img/m17-silicone-acetico.jpg', alt: 'Bisnaga de silicone acético transparente Tekbond de 50 g', credito: 'Foto do usuário, 10/10/2026' },
      uso: { finalidade: 'Fechar as frestas pequenas, só de plástico, por onde o ar da caixa escaparia. Caixa selada só funciona estanque: vazamento = menos grave e chiado. Não é cola nem amortecimento.',
        local: 'Frestas finas marcadas no teste da lanterna (2.3), de plástico com plástico: grade decorativa por dentro, emendas do molde, nervuras; borda da fita que tampou a placa dos bornes (2.4) e furo do cabo. Nunca a menos de 1–2 cm de metal. Mapa no passo 2.3.',
        modo: ['Limpar com álcool e secar.', 'Cortar o bico fino; cordão de 2–3 mm por dentro da fresta, cobrindo-a inteira.', 'Alisar com o dedo molhado em água com detergente.', 'Deixar a carcaça aberta até o cheiro de vinagre sumir ({{p:cura}}).'],
        momento: 'Passo 2.5, logo depois do mapeamento (2.3). Na traseira pode ser hoje; na moldura, só depois do encaixe a seco (2.1) e da furação (2.2). A JBL entra depois da cura (2.10).',
        cuidados: ['É acético: o vapor de ácido oxida cobre, latão e aço. Terminais e fios ficam fora; a placa dos bornes desta caixa não tem metal.', 'Furo maior que ≈3 mm não se fecha com silicone: fita asfáltica (2.4).', 'Não fechar a caixa antes da cura.', 'Compatível com o plástico da carcaça (ABS/PS).'] },
      papel: 'Fecha frestas finas e bordas só de plástico por dentro da caixa (grade decorativa, nervuras, borda da fita da placa).',
      conferir: ['Rótulo: "Silicone Acético Transparente", 50 g. Basta para as duas caixas.'],
      armadilha: 'Fechar a caixa antes da cura: o ácido (cheiro de vinagre) preso dentro oxida bornes e terminais. Aplicar perto do metal.',
      nota: 'Decisão de 10/10: o neutro não foi encontrado; o acético serve com os cuidados do passo 2.5.' },
    { id: 'M18', item: 'Fita asfáltica aluminizada', spec: 'Vedacit Fita Multiuso, 1 mm, 10 cm × 10 m, autoadesiva', qtd: '1 rolo', sit: 'tem',
      alerta: '1 mm: duas camadas nas paredes maiores', onde: 'Material de construção', preco: 'R$ 20–30',
      foto: { src: 'img/m18-fita-asfaltica-vedacit.jpg', alt: 'Rolo de fita multiuso aluminizada Vedacit 10 cm × 10 m', credito: 'Foto do usuário, 10/10/2026' },
      uso: { finalidade: 'Duas funções, em dois passos: tampar aberturas largas (placa dos bornes, furos que sobraram da furação) no 2.4, e amortecer as paredes finas de plástico (a massa abafa a vibração que colore o som) no 2.6.',
        local: '2.4: placa dos bornes (rasgos e furo maior, deixando o furo pequeno do cabo) e furos extras da moldura. 2.6: paredes grandes da traseira (retalhos de 10 × 10 cm, duas camadas) e laterais lisas da moldura. Sempre a 1 cm das torres e da borda de encaixe. Mapa no passo 2.3.',
        modo: ['Limpar com álcool (plástico não é poroso: sem primer).', 'Cortar retalhos com estilete e tirar o papel.', 'Colar pressionando do centro para as bordas; passar o dedo nas bordas.', 'Segunda camada com as emendas desencontradas.'],
        momento: 'Passo 2.4 (tampar) logo depois do teste da lanterna, antes do silicone; passo 2.6 (amortecer) a qualquer hora. Não precisa de cura.',
        cuidados: ['Não cobrir as torres nem a borda de encaixe: a caixa não fecha.', 'Fresta de plástico leva silicone por baixo; a fita sozinha pode descolar com o tempo.', 'Colar sobre poeira ou gordura solta em semanas.'] },
      papel: 'Tira a vibração das paredes de plástico da caixa, que colore o som. Recomendada, não obrigatória.',
      conferir: ['Rótulo: espessura **1 mm** (a lista pedia 1,5–2 mm; com duas camadas chega lá, e 10 m sobram).', 'Plástico não é poroso: não precisa do primer que o rótulo cita; limpe com álcool.'],
      armadilha: 'Colar sobre poeira ou gordura: solta em semanas. Tampar um furo de parafuso ou o furo do cabo.' },
    { id: 'M19', item: 'Multímetro digital (vem no kit de solda)', spec: 'V AC, V DC e Ω; continuidade pela escala de 200 Ω se não tiver bip', qtd: '1', sit: 'tem',
      alerta: 'Ao abrir o kit, confira a escala V~ (AC)',
      foto: { src: 'img/m19-multimetro.jpg', alt: 'Multímetro digital com ponteiras', credito: 'André Karwath, Wikimedia Commons', licenca: 'CC BY-SA 2.5', url: 'https://commons.wikimedia.org/wiki/File:Digital_Multimeter_Aka.jpg', legenda: 'Foto ilustrativa: o do kit é parecido. O que importa são as escalas V~ (AC), V⎓ (DC) e Ω.' },
      papel: 'Obrigatório. Confere polaridade e curto antes de pôr o fusível, mede as caixas e regula o ganho (V AC). Vem no kit de solda (M22).',
      exigir: ['Escala **V~** (AC, para o ganho), **V⎓** (DC, para os 13,8 V) e **Ω** (falantes e cabos).'],
      conferir: ['Escalas V~ de 200 V, V⎓ de 20 V e Ω de 200 Ω no seletor; bateria e ponteiras inteiras.', 'Ponteira na ponteira, escala de 200 Ω: ≈0,2–0,5 Ω (desconte ao medir falante). Sem bip, é essa escala que testa continuidade.'],
      armadilha: 'Medir o ganho na escala V⎓ (DC): o tom é alternado, o visor mostra ≈0 e parece que não há sinal. Ganho é sempre em V~.',
      nota: 'Se o kit não chegar antes da parte elétrica (sábado à tarde), compre um multímetro com V AC, V DC, Ω e bip (R$ 35–60). Não precisa de "True RMS": o tom de 60 Hz é senoidal, e qualquer multímetro mede bem nessa frequência.' },
    { id: 'M22', item: 'Kit de solda (ferro de 60 W, termorretráteis)', spec: 'Ferro de 60 W, 200–450 °C, 5 pontas; estanho; 168 tubos termorretráteis; multímetro (M19); descascador; fita isolante', qtd: '1', sit: 'tem',
      alerta: 'Voltagem do ferro igual à da tomada (127 ou 220 V)',
      foto: { pendente: 'Foto própria do kit quando chegar (10/10)' },
      papel: 'Traz o multímetro do projeto e permite soldar a emenda do cabo do sub (passo 3.2), como alternativa ao conector de alavanca.',
      conferir: ['Voltagem na etiqueta ou no cabo do ferro: ferro de 127 V ligado em 220 V queima na hora.', 'Ponta chata (2.4D) para o fio de 2,5 mm²; a fina é para eletrônica.', 'Tubos termorretráteis de ≈4–5 mm (um por emenda) e de ≈10 mm (por cima das duas).'],
      armadilha: 'Estanhar a ponta de fio que vai em borne de parafuso (fonte, módulo, processador, porta-fusível): a solda cede com o aperto, o contato afrouxa e esquenta. Nesses bornes, só ponta torcida.',
      nota: 'Chega em 10/10. Para fio de cobre, ≈350 °C (até ≈380 °C se o 2,5 mm² demorar a pegar a solda).' },
    { id: 'M21', item: 'Conector de emenda de alavanca, 2 vias', spec: 'Tipo Wago 221 (0,2–4 mm²). Dispensado em 10/10: a emenda do sub vai soldada', qtd: '0', sit: 'adiado', onde: 'Material elétrico', preco: 'R$ 6–15',
      pedir: 'Só se desistir da solda: conector de emenda **de alavanca, 2 vias** (tipo Wago 221-412), 3 unidades',
      alerta: 'Não comprado: a emenda do sub é por solda (passo 3.2)',
      foto: { src: 'img/m21-conector-alavanca.jpg', alt: 'Dois conectores de emenda de alavanca WAGO 221 de 3 vias, transparentes com alavancas laranja, ao lado de um palito de fósforo', credito: 'im_tau, Wikimedia Commons', licenca: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:WAGO_221.jpg', legenda: 'WAGO 221 de 3 vias; o de 2 vias é igual, com duas alavancas.' },
      papel: 'Alternativa sem solda para emendar o cabo de 2,5 mm² do sub no fio fino do plugue. Fica como plano B.',
      armadilha: 'Os dois fios do sub no mesmo conector (curto na saída em ponte).' },
    { id: 'M20', item: 'Cabo P2 → 2 RCA blindado', spec: 'P2 estéreo (3 contatos), blindado, 10 m', qtd: '1', sit: 'adiado',
      pedir: 'Cabo **P2 estéreo** → 2 RCA, blindado, **10 m**',
      alerta: 'Plugue com 2 anéis = estéreo', onde: 'Eletrônica', preco: 'R$ 30–60',
      foto: { src: 'img/m20-plugue-p2.jpg', alt: 'Plugue P2 estéreo de 3,5 mm', credito: 'Evan-Amos, Wikimedia Commons', licenca: 'domínio público', url: 'https://commons.wikimedia.org/wiki/File:Audio-TRS-Mini-Plug.jpg', legenda: 'P2 estéreo: dois anéis isolantes separam três contatos.' },
      papel: 'Leva o som do notebook ao processador. Sem pressa: dá para começar pelo Bluetooth do celular.',
      exigir: ['Plugue P2 **estéreo**: 2 anéis isolantes, 3 contatos.', 'Blindado.', '10 m (notebook embaixo do projetor, passando pela parede).'],
      conferir: ['Conte os anéis do plugue: 2 anéis = estéreo.'],
      armadilha: 'P2 **mono** (1 anel, 2 contatos) toca só um lado. Cabo sem blindagem, em 10 m, capta zumbido.' },
    { id: 'M23', item: 'Fusíveis de reposição', spec: 'Lâmina média: 1 ou 2 A (troca do 5 A provisório) + 40 A de reserva', qtd: '1 + 1', sit: 'adiado', onde: 'Autopeças', preco: 'R$ 5–10',
      pedir: 'Fusível de lâmina **média** de **1 A** (ou 2 A) + um de **40 A**, de reserva',
      alerta: 'Sem pressa: o sistema monta e funciona sem eles',
      foto: { src: 'img/m09-fusiveis-lamina.jpg', alt: 'Fusíveis de lâmina de tamanhos diferentes', credito: 'havarhen, Wikimedia Commons', licenca: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Electrical_fuses,_plug-in_type,_different_sizes.jpeg', legenda: 'Lâminas de tamanhos diferentes: mini, média e maxi não se encaixam umas nas outras.' },
      papel: 'O 1–2 A protege melhor o processador que o 5 A provisório; o 40 A reserva evita parar a montagem se um erro queimar o primeiro.',
      exigir: ['Lâmina **média** (ATO/ATC), a mesma dos porta-fusíveis que você tem.'],
      armadilha: 'Lâmina mini (como o 2 A que veio em 10/10) não entra no porta-fusível médio.' },
    { id: 'M24', item: 'Cabos paralelos de reserva (já possuídos)', spec: '2 × 1,0 mm² (vermelho/preto) e 2 × 1,5 mm² (cristal com veia vermelha)', qtd: 'alguns metros de cada', sit: 'tem',
      alerta: 'Para REM e alimentação do processador; não para falante',
      foto: { src: 'img/m24-cabos-reserva.jpg', alt: 'Cabos comprados em 10/10 sobre a cama: paralelo branco, cabos de força, cabo cristal e bicolor', credito: 'Foto do usuário, 10/10/2026' },
      papel: 'O 2 × 1,5 cobre C4/C5 (alimentação do processador) no lugar do fio branco; o 2 × 1,0 serve para o REM (C6, C7).',
      conferir: ['Confira qual é o 1,0 e qual é o 1,5 pela marcação na capa (o de 1,5 tem a veia visivelmente mais grossa).', 'Raspe um fio do cristal: prateado por dentro = CCA (serve para REM, não para falante).'],
      armadilha: 'Usar em falante no lugar do 2 × 2,5: bitola fina e possível CCA.' },
  ],

  cabos: [
    { id: 'AC', tipo: 'ac', de: 'Tomada aterrada', para: 'BOB 60A, bornes 7–9', bitola: 'Cabo original da fonte', comp: '—', pontas: 'Plugue de 3 pinos (já ligado de fábrica)', protecao: 'Disjuntor da casa', verificar: 'Tomada com o pino de terra (central) ligado', bornes: ['bob60a:T7', 'bob60a:T8', 'bob60a:T9'] },
    { id: 'C1', tipo: 'energia', de: 'BOB 60A, borne 1 (+)', para: 'Porta-fusível de 40 A (entrada)', bitola: '{{p:bit_forca}}, vermelho', comp: '**15 cm** (com o rabicho do porta-fusível, o fusível fica a ≈25 cm da fonte, dentro de {{p:dist_fus}})', corte: 'Profundidade do borne (≈10–15 mm)', pontas: 'Ponta torcida (ou ilhós de 10 mm²)', verificar: 'Puxão firme não solta', bornes: ['bob60a:T1'], validar: true },
    { id: 'C2', tipo: 'energia', de: 'Porta-fusível de 40 A (saída)', para: 'SD800.4 +12VDC', bitola: '{{p:bit_forca}}, vermelho', comp: '**40 cm**', corte: '≈10–15 mm', pontas: 'Ponta torcida (ou ilhós)', protecao: 'Fusível de {{p:fus40}}', verificar: '{{p:tensao}} na régua do módulo', bornes: ['sd800.4-saida:12V'] },
    { id: 'C3', tipo: 'terra', de: 'BOB 60A, borne 4 (−)', para: 'SD800.4 GND', bitola: '{{p:bit_forca}}, preto', comp: '**60 cm**', corte: '≈10–15 mm', pontas: 'Ponta torcida (ou ilhós)', verificar: 'Continuidade ≈ 0 Ω de ponta a ponta', bornes: ['bob60a:T4', 'sd800.4-saida:GND'] },
    { id: 'C4', tipo: 'energia', de: 'BOB 60A, borne 2 (+)', para: 'Processador +12VDC', bitola: '{{p:bit_proc}}', comp: '**50 cm**', corte: '≈8 mm', pontas: 'Ponta torcida', protecao: 'Fusível de {{p:fus1}}', verificar: 'LED do processador acende', bornes: ['bob60a:T2', 'pro24bt-alimentacao:12V'] },
    { id: 'C5', tipo: 'terra', de: 'BOB 60A, borne 5 (−)', para: 'Processador GND', bitola: '{{p:bit_proc}}', comp: '**50 cm**', corte: '≈8 mm', pontas: 'Ponta torcida', verificar: 'Continuidade ≈ 0 Ω', bornes: ['bob60a:T5', 'pro24bt-alimentacao:GND'] },
    { id: 'C6', tipo: 'rem', de: 'Processador +12VDC', para: 'Processador REM IN (jumper)', bitola: '{{p:bit_proc}} (0,75 mm² se dois fios não couberem no mesmo borne)', comp: '**4 cm**', corte: '≈8 mm', pontas: 'Torcida junto com C4 no borne +12', verificar: 'Liga e desliga pelo app (modo BOB)', bornes: ['pro24bt-alimentacao:12V', 'pro24bt-alimentacao:REMIN'], validar: true },
    { id: 'C7', tipo: 'rem', de: 'Processador REM OUT', para: 'SD800.4 REM', bitola: '0,75–1,5 mm²', comp: '**50 cm**', corte: '≈8 mm', pontas: 'Ponta torcida', verificar: 'LED do módulo acende junto com o app', bornes: ['pro24bt-alimentacao:REMOUT', 'sd800.4-saida:REM'], validar: true },
    { id: 'S0', tipo: 'sinal', de: 'Celular (Bluetooth) ou notebook (P2 → 2 RCA)', para: 'Processador A (L) e B (R)', bitola: 'Sem fio · ou cabo P2 → 2 RCA', comp: '— · 10 m', pontas: 'RCA', verificar: 'Equalizador e efeitos do celular desligados', bornes: ['pro24bt-rca:A', 'pro24bt-rca:B'] },
    { id: 'S1', tipo: 'sinal', de: 'Processador saída 1', para: 'SD800.4 entrada CH1', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Som só na caixa L ao testar a saída 1', bornes: ['pro24bt-rca:OUT1', 'sd800.4-entrada:CH1'] },
    { id: 'S2', tipo: 'sinal', de: 'Processador saída 2', para: 'SD800.4 entrada CH2', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Som só na caixa R ao testar a saída 2', bornes: ['pro24bt-rca:OUT2', 'sd800.4-entrada:CH2'] },
    { id: 'S3', tipo: 'sinal', de: 'Processador saída 3', para: 'SD800.4 entrada CH3', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Sub toca com as saídas 3 e 4', bornes: ['pro24bt-rca:OUT3', 'sd800.4-entrada:CH3'] },
    { id: 'S4', tipo: 'sinal', de: 'Processador saída 4', para: 'SD800.4 entrada CH4', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Sub toca com as saídas 3 e 4', bornes: ['pro24bt-rca:OUT4', 'sd800.4-entrada:CH4'] },
    { id: 'F1', tipo: 'falante', de: 'SD800.4 CH1 + / −', para: 'BS-369 L (entra pelo furo pequeno da traseira)', bitola: '2 × {{p:bit_fal}} (condutor marcado = +)', comp: '**3,0 m** (2,5 m até a caixa + 20 cm dentro + folga)', corte: '≈8–10 mm', pontas: 'Módulo: ponta torcida · caixa: segue como {{c:I1}}', verificar: '≈3,4 Ω medindo na ponta do módulo, com a caixa ligada', bornes: ['sd800.4-saida:CH1+', 'sd800.4-saida:CH1-'] },
    { id: 'F2', tipo: 'falante', de: 'SD800.4 CH2 + / −', para: 'BS-369 R (entra pelo furo pequeno da traseira)', bitola: '2 × {{p:bit_fal}} (condutor marcado = +)', comp: '**3,0 m** (2,5 m até a caixa + 20 cm dentro + folga)', corte: '≈8–10 mm', pontas: 'Módulo: ponta torcida · caixa: segue como {{c:I2}}', verificar: '≈3,4 Ω', bornes: ['sd800.4-saida:CH2+', 'sd800.4-saida:CH2-'] },
    { id: 'F3', tipo: 'falante', de: 'SD800.4 CH4 ⊕ / CH3 ⊖ (ponte)', para: 'Plugue do sub (+ / −)', bitola: '2 × {{p:bit_fal}} (condutor marcado = +), troca o cabo antigo', comp: '**1,0 m**', corte: '≈8–10 mm', pontas: 'Módulo: ponta torcida · sub: emenda soldada com termorretrátil (passo 3.2) no fio do plugue', verificar: 'Teste da pilha: o fio que faz o cone avançar vai no CH4 ⊕; 3–3,6 Ω na ponta do módulo', bornes: ['sd800.4-saida:CH4+', 'sd800.4-saida:CH3-'], validar: true },
    { id: 'I1', tipo: 'falante', de: 'Furo pequeno da traseira da BS-369 L (mesmo cabo de {{c:F1}})', para: 'JBL L (+ / −)', bitola: '{{p:bit_fal}}', comp: '≈20 cm dentro da caixa (nó de alívio de tração)', corte: '≈6 mm', pontas: 'Faston fêmea amarelo (6,3 mm) com o cobre dobrado ao meio e soldado; condutor marcado = +', verificar: 'Teste da pilha: o cone avança', validar: true },
    { id: 'I2', tipo: 'falante', de: 'Furo pequeno da traseira da BS-369 R (mesmo cabo de {{c:F2}})', para: 'JBL R (+ / −)', bitola: '{{p:bit_fal}}', comp: '≈20 cm dentro da caixa (nó de alívio de tração)', corte: '≈6 mm', pontas: 'Faston fêmea amarelo (6,3 mm) com o cobre dobrado ao meio e soldado; condutor marcado = +', verificar: 'Teste da pilha: o cone avança', validar: true }
  ],

  sistema: {
    w: 1000, h: 470,
    nos: [
      { id: 'tomada', x: 20, y: 40, w: 130, h: 60, rot: 'Tomada', sub: '127/220 V com terra' },
      { id: 'fonte', x: 220, y: 30, w: 170, h: 80, rot: 'Fonte BOB 60A', sub: '13,8 V · 40 A', estilo: 'equip' },
      { id: 'f40', x: 470, y: 30, w: 120, h: 44, rot: 'Fusível 40 A', fs: 14, estilo: 'prot' },
      { id: 'f1', x: 300, y: 170, w: 110, h: 40, rot: 'Fusível 1 A', fs: 14, estilo: 'prot' },
      { id: 'musica', x: 20, y: 321, w: 150, h: 70, rot: 'Celular / notebook', sub: 'Bluetooth ou P2', fs: 15 },
      { id: 'proc', x: 300, y: 300, w: 190, h: 120, rot: 'PRO 2.4BT', sub: 'jumper C6', ty: 62, estilo: 'equip',
        portas: [[55, 15, '+12V'], [8, 34, 'GND', 'start'], [8, 60, 'A / B', 'start'], [182, 28, 'REM OUT', 'end'], [182, 100, 'OUT 1–4', 'end']] },
      { id: 'modulo', x: 640, y: 160, w: 170, h: 300, rot: 'SD800.4', sub: 'módulo 4 canais', ty: 150, estilo: 'equip',
        portas: [[8, 38, '+12V', 'start'], [8, 73, 'GND', 'start'], [8, 113, 'REM', 'start'], [8, 240, 'RCA CH1–CH4', 'start'], [162, 48, 'CH1', 'end'], [162, 148, 'CH2', 'end'], [162, 263, 'CH4⊕ CH3⊖', 'end']] },
      { id: 'jbll', x: 860, y: 174, w: 120, h: 60, rot: 'JBL L', sub: 'BS-369' },
      { id: 'jblr', x: 860, y: 274, w: 120, h: 60, rot: 'JBL R', sub: 'BS-369' },
      { id: 'sub', x: 860, y: 384, w: 120, h: 70, rot: 'Sub 8"', sub: 'ponte, 4 Ω' }
    ],
    ligacoes: [
      { cabo: 'AC', pts: [[150, 70], [220, 70]], tag: [185, 70] },
      { cabo: 'C1', pts: [[390, 52], [470, 52]], tag: [430, 52] },
      { cabo: 'C2', pts: [[590, 52], [615, 52], [615, 194], [640, 194]], tag: [615, 122] },
      { cabo: 'C3', pts: [[390, 90], [600, 90], [600, 229], [640, 229]], tag: [500, 90] },
      { cabo: 'C4', pts: [[330, 110], [330, 170]], tag: [330, 140] },
      { cabo: 'C4', pts: [[355, 210], [355, 300]] },
      { cabo: 'C5', pts: [[240, 110], [240, 330], [300, 330]], tag: [240, 250] },
      { cabo: 'C7', pts: [[490, 324], [560, 324], [560, 269], [640, 269]], tag: [560, 296] },
      { cabo: 'S0', tipo: 'bt', pts: [[170, 356], [300, 356]], tag: [235, 356] },
      { cabo: 'S1', rot: 'S1–S4', pts: [[490, 396], [640, 396]], tag: [565, 396] },
      { cabo: 'F1', pts: [[810, 204], [860, 204]], tag: [835, 204] },
      { cabo: 'F2', pts: [[810, 304], [860, 304]], tag: [835, 304] },
      { cabo: 'F3', pts: [[810, 419], [860, 419]], tag: [835, 419] }
    ]
  },

  tabelas: {
    processador: {
      titulo: 'Configuração do processador',
      cab: ['Saída', 'Origem', 'Filtro', 'Outros'],
      linhas: [
        ['1 (JBL L)', 'A', 'Passa-alta {{p:filtro_sat}} em {{p:corte}}', 'Limitador no ponto regulado · fase 0°'],
        ['2 (JBL R)', 'B', 'Passa-alta {{p:filtro_sat}} em {{p:corte}}', 'Limitador no ponto regulado · fase 0°'],
        ['3 e 4 (sub, ponte)', 'A+B', 'Passa-baixa {{p:filtro_sub}} em {{p:corte}} + subsônico em {{p:subsonico}}', 'Fase 0° (testar 180°) · **tudo igual nas duas saídas**'],
        ['Todas', '—', 'EQ só para cortar', 'Depois da regulagem, níveis só para baixo · senha trocada']
      ]
    }
  },

  medicoes: [
    { id: 'jbl-l', medida: 'Resistência da JBL L', como: 'Multímetro em Ω, falante solto', esperado: '≈3,4 Ω' },
    { id: 'jbl-r', medida: 'Resistência da JBL R', como: 'Multímetro em Ω, falante solto', esperado: '≈3,4 Ω' },
    { id: 'sub', medida: 'Resistência do sub', como: 'Multímetro em Ω, fio solto do módulo', esperado: '3–3,6 Ω' },
    { id: 'tensao', medida: 'Tensão na régua do módulo', como: 'V DC entre +12VDC e GND, fonte ligada', esperado: '{{p:tensao}}' },
    { id: 'ganho-1', medida: 'Ganho CH1', como: 'V AC no CH1, tom de {{p:tom}}, sem falantes', esperado: '{{p:ganho_sat}}' },
    { id: 'ganho-2', medida: 'Ganho CH2', como: 'V AC no CH2, tom de {{p:tom}}, sem falantes', esperado: '{{p:ganho_sat}}' },
    { id: 'ganho-sub', medida: 'Ganho da ponte (sub)', como: 'V AC entre CH4 ⊕ e CH3 ⊖, sem falantes', esperado: '{{p:ganho_sub}}' },
    { id: 'nivel-saidas', medida: 'Nível das saídas no app (1 / 2 / 3 e 4)', como: 'Depois da regulagem; 0 dB se o GAIN deu conta', esperado: '0 dB ou menos' },
    { id: 'caixa-sub', pendente: true, medida: 'Caixa do sub: com duto (11/10). Falta a frequência do duto (Fb)', como: 'Diâmetro interno e comprimento do duto + medidas internas da caixa; ou passo 5.3, varredura de 25 a 60 Hz', esperado: 'Subsônico = 0,75–0,8 × Fb' },
    { id: 'dist', medida: 'Distâncias até o sofá (L / R / sub)', como: 'Trena', esperado: '—' },
    { id: 'fibra', medida: 'Fibra por caixa (o que coube solto na 1ª)', como: 'Balança de cozinha: porção anotada no 2.8 menos a sobra', esperado: '{{p:fibra}}; a 2ª igual à 1ª' },
    { id: 'frestas', pendente: true, medida: 'Frestas achadas no teste da lanterna (onde, em cada metade)', como: 'Passo 2.3', esperado: '—' },
    { id: 'fio-pf', pendente: true, medida: 'Diâmetro do fio do porta-fusível de 40 A', como: 'Régua no fio, ou no cobre desencapado', esperado: '≈4,5 mm por fora (4 mm²); 2,6 mm de cobre' },
    { id: 'torre', pendente: false, medida: 'Altura da torre de parafuso da BS-369', como: 'Não se aplica (11/10): os furos da JBL não coincidem com as torres; a fixação foi furada na moldura (2.2). Conferir só o teste do parafuso do 2.2.', esperado: '—' },
    { id: 'terminais-jbl', pendente: false, medida: 'Largura dos terminais da JBL (+ / −)', como: 'Régua (fotos de 11/10/2026)', esperado: '6,3 mm nos dois: faston nos dois terminais' }
  ],

  etapas: [
    {
      id: '1', titulo: 'Materiais e componentes', curto: 'Materiais', peca: 'compras',
      intro: 'Separe tudo antes de começar. A lista traz a especificação que importa: com ela dá para trocar qualquer item por um equivalente.',
      blocos: [{ titulo: 'Lista de materiais', tipo: 'tabela', ref: 'materiais' }],
      passos: [
        {
          id: '1.1', fase: 'Preparar', titulo: 'Conferir tudo o que está em mãos', objetivo: 'Cada peça certa e boa antes de cortar qualquer cabo: o que você já tinha e o que foi comprado.',
          tempo: '30 min', risco: 'baixo', ferramentas: ['Multímetro'],
          alertas: [{ tipo: 'atencao', texto: 'Compra de 10/10 conferida pelas fotos (compras/2026-10-10-loja-fisica/conferencia.md): tudo em mãos. Falta medir, com régua: o fio do porta-fusível de 40 A ({{p:fio_pf}}), a altura da torre da BS-369 ({{p:torre}}), a largura dos terminais da JBL (6,3 / 4,8 mm) e o número gravado no fusível vermelho (5).' }],
          acoes: [
            'Confira o modelo na etiqueta da fonte, do processador, do módulo e das JBL contra a lista de materiais.',
            'Meça cada JBL com o multímetro em Ω, nos terminais do falante: esperado ≈3,4 Ω.',
            'Confira se a borda de borracha e o cone das JBL estão inteiros e se o cone não raspa ao ser empurrado de leve.',
            'Confira se a tomada onde a fonte vai ficar tem o pino de terra (central) ligado. Um testador de tomada (≈R$ 20–30) mostra fase, neutro e terra sem expor a mão.',
            'Procure um duto (abertura) na caixa do sub, inclusive atrás do painel escuro, e anote.',
            'Meça com régua: diâmetro do fio do porta-fusível de 40 A, altura da torre da BS-369 e largura dos terminais da JBL. Anote na tabela de medições.',
            'Marque com caneta permanente um condutor do cabo paralelo branco, nas duas pontas do rolo: ele não tem friso.'
          ],
          figuras: [{ tipo: 'compras', sit: ['tem'] }],
          verificacao: ['Todas as peças batem com a lista.', 'Cada JBL mede entre 3 e 4 Ω (nominal de {{p:imp_sat}}).'],
          basico: 'Impedância (Ω) é a carga que o falante representa para o amplificador. O multímetro mede só a resistência da bobina (Re), que fica um pouco abaixo do valor nominal: um falante de 4 Ω mede ≈3,2–3,6 Ω.'
        },
        {
          id: '1.2', fase: 'Preparar', titulo: 'Comprar o que falta', objetivo: 'Comprar pela especificação, não pela marca.',
          tempo: '1–2 h', risco: 'baixo',
          alertas: [{ tipo: 'atencao', texto: 'Critério de 10/10: montar com o que está em mãos. Só entra compra nova por **segurança** ou por **resultado muito ruim**. O que resta abaixo é adiado, sem pressa: fusíveis de reposição (M23) e, só se a solda falhar, o conector de alavanca (M21).' }],
          acoes: [
            'Quando passar numa autopeças: fusível de lâmina média de 1–2 A e um 40 A de reserva (M23).',
            'A única compra que a medição de 11/10 pode reabrir: porta-fusível de 40 A com fio ≥ 6 mm² (midi), se o fio do atual for de 2,5 mm².'
          ],
          figuras: [{ tipo: 'compras', sit: ['comprar', 'adiado'] }],
          verificacao: ['Nada pendente de compra para a montagem.', 'Fusíveis de 40 A e de 5 A nos porta-fusíveis certos.']
        },
        {
          id: '1.3', fase: 'Preparar', titulo: 'Separar as ferramentas', tempo: '5 min', risco: 'baixo',
          acoes: [
            'Chaves Phillips e de fenda pequena **isolada** (o conector do processador é pequeno; o trimpot da fonte fica ao lado da rede).',
            'Estilete e alicate desencapador (o kit de solda traz os dois). O alicate Bestfer comprado é de RJ45: serve só para cortar e descascar.',
            'Kit de solda (M22): ferro de 60 W, estanho, termorretráteis. Solda os faston (2.9) e a emenda do sub (3.2).',
            'Furadeira com broca de {{p:broca}}.',
            'Multímetro com escalas V AC e Ω (vem no kit de solda).',
            'Trena, régua, caneta permanente, fita crepe (etiquetas), fita isolante, abraçadeiras, álcool e pano, balança de cozinha e 1 pilha AA.'
          ],
          erro: 'Tentar crimpar os faston com o alicate de RJ45 ou com alicate universal: o terminal fica frouxo e solta com a vibração do grave. Aqui os terminais vão soldados.'
        }
      ]
    },
    {
      id: '2', titulo: 'Caixas acústicas', curto: 'Caixas', peca: 'montagem',
      intro: 'Tudo o que transforma a carcaça BS-369 numa caixa selada com a JBL dentro, em quatro fases: **preparar** (encaixe a seco, furação, teste da lanterna, tampar furos), **tratar** (silicone, fita asfáltica, gaxeta, fibra), **montar** (terminais, falante, fechar) e **validar**. Cada material tem o seu passo: fita asfáltica tampa aberturas (2.4) e amortece paredes (2.6); silicone veda bordas e frestas finas (2.5); fita de espuma é a gaxeta das juntas (2.7); fibra é enchimento (2.8), não veda. Não depende da eletrônica. O que segura o relógio é a cura do silicone (24–48 h com a caixa aberta): por isso o teste da lanterna (2.3) e o silicone na traseira (2.5) são os primeiros a fazer, e o resto da fase "tratar", os terminais (2.9), o cabo do sub (etapa 3) e a eletrônica (etapa 4) acontecem enquanto cura.',
      passos: [
        {
          id: '2.1', fase: 'Preparar a caixa', titulo: 'Encaixe a seco da JBL na BS-369', objetivo: 'Conferir se o falante e o parafuso cabem antes de cortar ou furar.',
          tempo: '20 min', risco: 'medio', validar: true, ferramentas: ['Régua'],
          alertas: [{ tipo: 'atencao', texto: 'Se algo não encaixar, pare e fotografe antes de cortar. Corte em plástico não tem volta.' }],
          acoes: [
            'Abra a BS-369 (parafusos das torres dos cantos) e tire o falante original.',
            'Apresente a JBL no assento, por dentro da moldura, com o tweeter para a frente.',
            'Largura: a flange tem 118 mm e o vão interno ≈126 mm, sobram ≈4 mm de cada lado.',
            'Torres do falante antigo (10 cm na diagonal): se impedirem a JBL de assentar, rebaixe-as. As torres dos cantos fecham a caixa: nelas não se mexe.',
            'Parafuso de 19 mm: encoste-o de pé ao lado da torre, com a flange no lugar. A torre precisa de {{p:torre}}; se a ponta passar mais de 2–3 mm do fundo, corte a ponta com alicate.',
            'Abertura do cone: o furo do anel (≈92 mm) não pode encostar na borda de borracha da JBL. Tweeter × tela: com a tela encaixada, não podem se tocar.',
            'Feche a carcaça sem forçar (profundidade da JBL: 68 mm; espaço livre: 120 mm).'
          ],
          figuras: [{ tipo: 'ilustracao', id: 'bs369-explodida', legenda: 'Ordem de montagem da caixa, da frente para trás. Medidas registradas; a posição e a altura das torres ainda precisam ser conferidas no encaixe a seco.' }],
          verificacao: ['A JBL assenta plana, sem forçar nas laterais.', 'A tela frontal encaixa sem tocar no tweeter.', 'A ponta do parafuso não sai do fundo da torre.']
        },
        {
          id: '2.2', fase: 'Preparar a caixa', depende: ['2.1'], titulo: 'Furar a fixação', tempo: '15 min', risco: 'medio', ferramentas: ['Furadeira', 'Broca {{p:broca}}', 'Caneta'], materiais: ['M14'],
          acoes: [
            'Com a JBL centralizada no furo, marque os 4 furos dela com caneta.',
            'Fure com broca de {{p:broca}} sem atravessar a frente da moldura (marque a profundidade na broca com fita).',
            'Experimente um parafuso com arruela num furo: entra firme, sem espanar, e para quando a arruela encosta.'
          ],
          erro: 'Furo grande demais faz o parafuso espanar o plástico. Na dúvida, comece com broca menor. Apertar depois que a flange assentou racha a torre.'
        },
        {
          id: '2.3', fase: 'Preparar a caixa', prioridade: 2, titulo: 'Mapear as frestas (teste da lanterna)', objetivo: 'Descobrir por onde a sua caixa vaza antes de passar qualquer produto. Pode ser feito agora, sem nenhuma preparação.',
          tempo: '15 min', risco: 'baixo', validar: true, ferramentas: ['Lanterna do celular', 'Caneta permanente', 'Quarto escuro'],
          alertas: [{ tipo: 'atencao', texto: 'As marcas tracejadas nas fotos são pontos **anotados como fechados em 23/09, sem confirmação** (grade decorativa, rasgo curvo, fendas da tela). É este teste que decide se levam silicone ou nada.' }],
          acoes: [
            'Apague a luz. Ponha a lanterna acesa dentro da metade traseira, voltada para o fundo, e olhe por fora: cada ponto de luz é uma fresta. Marque com caneta, por dentro, ao lado.',
            'Repita com a moldura: lanterna por dentro, olhando a grade decorativa, o rasgo curvo e as fendas da tela por fora.',
            'Encaixe as duas metades (sem parafusar) com a lanterna dentro e olhe a emenda em volta: luz na emenda confirma que a gaxeta (2.7) é necessária ali.',
            'Separe o que achou: furo ou abertura larga (mais de ≈3 mm) → fita asfáltica (2.4); fresta fina só de plástico → silicone (2.5); emenda das metades → gaxeta (2.7).',
            'Anote na tabela de medições o que encontrou e fotografe as marcas.'
          ],
          figuras: [{ tipo: 'foto', legenda: 'Mapa de tratamento da BS-369 nas fotos de 23/09. Cores: verde = silicone · cinza = fita asfáltica · amarelo = fita de espuma · vermelho = não colar nada · azul = furação · laranja tracejado = conferir com a lanterna.', itens: [
              { src: 'img/bs369-traseira-interior.jpg', alt: 'Interior da metade traseira da BS-369: placa dos bornes ao fundo, torres nos cantos', credito: 'Foto do usuário, 23/09/2026', titulo: 'Traseira (metade preta), por dentro', marcas: [
                { cor: 'fita', x: 34, y: 39, w: 31, h: 26, rotulo: 'Placa dos bornes: sem bornes (11/10). Rasgos e furo maior tampados com fita (2.4), borda com silicone (2.5); o furo pequeno é a passagem do cabo.' },
                { cor: 'fita', x: 12, y: 20, w: 20, h: 68, rotulo: 'Parede grande (as duas): retalhos de fita asfáltica 10 × 10 cm, duas camadas (2.6).' },
                { cor: 'fita', x: 77, y: 20, w: 15, h: 68, rotulo: 'Parede grande do outro lado: idem.' },
                { cor: 'verificar', tracejada: true, x: 33, y: 28, w: 34, h: 10, rotulo: 'Fundo e nervuras em volta da placa: só plástico. Se passar luz no teste da lanterna, cordão de silicone (2.5).' },
                { cor: 'gaxeta', x: 10, y: 14, w: 83, h: 5, rotulo: 'Borda de encaixe com a moldura: tira de espuma de 9 mm em todo o contorno (2.7).' },
                { cor: 'proibido', redondo: true, x: 18, y: 17, w: 8, h: 5, rotulo: 'Torres dos cantos (as 4): nada colado a 1 cm; aqui entram os parafusos que fecham a caixa.' },
                { cor: 'proibido', redondo: true, x: 77, y: 17, w: 8, h: 5, rotulo: 'Torre (idem 6).' },
                { cor: 'proibido', redondo: true, x: 20, y: 76, w: 8, h: 5, rotulo: 'Torre (idem 6).' },
                { cor: 'proibido', redondo: true, x: 79, y: 76, w: 8, h: 5, rotulo: 'Torre (idem 6).' }
              ] },
              { src: 'img/bs369-moldura-interior.jpg', alt: 'Interior da moldura frontal da BS-369: anel do falante e topo com as torres do falante antigo', credito: 'Foto do usuário, 23/09/2026', titulo: 'Moldura (metade prata), por dentro', marcas: [
                { cor: 'verificar', tracejada: true, x: 19, y: 16, w: 63, h: 11, rotulo: 'Grade decorativa do "tweeter", por dentro: anotada como placa fechada, **a confirmar**. Se passar luz, cordão de silicone por dentro (2.5).' },
                { cor: 'info', x: 23, y: 23, w: 15, h: 17, rotulo: 'Torres do falante antigo (duas cunhas): ficam como estão, a não ser que impeçam a JBL de assentar (2.1).' },
                { cor: 'gaxeta', redondo: true, x: 19, y: 42, w: 62, h: 36, rotulo: 'Assento da JBL: tira de espuma de 9 mm em todo o contorno, pela borda externa, sem cobrir os furos (2.7).' },
                { cor: 'furo', tracejada: true, x: 36, y: 50, w: 28, h: 20, rotulo: 'Abertura do cone: a borda de borracha da JBL não pode encostar no anel (2.1). Os 4 furos de fixação são marcados com a JBL no lugar (2.2).' },
                { cor: 'verificar', tracejada: true, x: 20, y: 48, w: 7, h: 6, rotulo: 'Fendas de encaixe da tela (4, ao redor do anel): anotadas como cobertas pela flange da JBL, **a confirmar** com a lanterna e a JBL assentada.' },
                { cor: 'verificar', tracejada: true, x: 22, y: 81, w: 56, h: 6, rotulo: 'Rasgo curvo decorativo: anotado como fechado por dentro, **a confirmar**. Se passar luz, silicone (2.5).' }
              ] }
            ] }],
          verificacao: ['Cada fresta marcada com caneta e classificada (fita, silicone ou gaxeta).', 'As três dúvidas das fotos (grade, rasgo, fendas) respondidas.'],
          erro: 'Passar silicone "por garantia" em tudo que parece emenda: gasta produto, suja a caixa e não fecha o que vaza de verdade.',
          basico: 'O ar escapa por qualquer caminho que a luz também atravessa. A lanterna mostra o caminho; o silicone, a fita e a gaxeta fecham cada tipo de caminho com o material certo.'
        },
        {
          id: '2.4', fase: 'Preparar a caixa', depende: ['2.2', '2.3'], prioridade: 1, titulo: 'Tampar os furos e aberturas (fita asfáltica)', objetivo: 'Fechar toda abertura que não vai ser usada: a placa dos bornes e os furos de furação que sobraram. Aqui só entra fita asfáltica; o silicone (2.5) vem depois, nas bordas e frestas finas.',
          tempo: '20 min', risco: 'baixo', validar: true, ferramentas: ['Estilete', 'Régua', 'Álcool e pano', 'Lanterna do celular'], materiais: ['M18'],
          alertas: [{ tipo: 'atencao', texto: 'Dois furos ficam **abertos de propósito**: o furo pequeno da placa dos bornes (passagem do cabo) e os 4 furos que recebem os parafusos da JBL (a flange e a gaxeta fecham esses).' }],
          acoes: [
            'Traseira, placa dos bornes: limpe com álcool. Um retalho de fita de ≈4 × 6 cm por dentro cobre de uma vez os dois rasgos e o furo maior; deixe o furo redondo pequeno livre. Segunda camada por cima, com as bordas deslocadas ≈1 cm.',
            'Moldura, furos da furação: identifique os 4 que vão receber parafuso (encaixe a seco, 2.1). Cada furo que sobrou ao lado deles leva um retalho de ≈2 × 2 cm por dentro.',
            'Furos originais pequenos (torres do falante antigo, fenda inferior) e qualquer furo que passou luz no 2.3 com mais de ≈3 mm: retalho de fita. Menor que isso fica para o silicone (2.5).',
            'Pressione cada retalho do centro para as bordas e passe a unha na borda toda. Fita a 1 cm das torres dos cantos e da borda de encaixe.',
            'Lanterna de novo nos pontos tampados, no escuro: não pode passar luz.'
          ],
          figuras: [{ tipo: 'foto', legenda: 'Moldura por dentro em 11/10/2026, com os furos novos da fixação circulados. Nos pares duplos, um furo recebe o parafuso e o outro é tampado. Os 4 furos usados ficam abertos: a flange da JBL e a gaxeta (2.7) os fecham.', itens: [
              { src: 'img/bs369-moldura-furos-11-10.jpg', alt: 'Interior da moldura da BS-369 com os furos novos de fixação da JBL circulados', credito: 'Foto do usuário, 11/10/2026', titulo: 'Moldura (metade prata), por dentro, depois da furação' }
            ] }],
          verificacao: ['Placa dos bornes: só o furo pequeno passa luz.', 'Moldura: só os 4 furos dos parafusos passam luz.', 'Nenhuma borda de fita levantando.'],
          erro: 'Tampar o furo pequeno do cabo ou um furo que vai receber parafuso. Colar sobre poeira: a fita solta em semanas.',
          basico: 'Cada material fecha um tipo de caminho de ar. A fita asfáltica tampa abertura larga (furo, rasgo). O silicone fecha borda e fresta fina. A fita de espuma (gaxeta) fecha a junta entre duas peças. A fibra não veda nada: é enchimento.'
        },
        {
          id: '2.5', fase: 'Tratar (vedação e amortecimento)', depende: ['2.3', '2.4'], prioridade: 1, titulo: 'Vedar bordas e frestas (silicone)', objetivo: 'Nenhum caminho de ar para fora que não seja o cone.',
          tempo: '20 min + 24–48 h de cura', risco: 'baixo', validar: true, ferramentas: ['Álcool e pano', 'Estilete (bico do silicone)'], materiais: ['M17'],
          requer: 'Frestas mapeadas (2.3) e furos tampados (2.4). Na traseira pode ser logo depois; na moldura, só depois do encaixe a seco (2.1) e da furação (2.2).',
          alertas: [{ tipo: 'atencao', texto: 'Silicone **acético** solta ácido enquanto cura e corrói metal em caixa fechada. Só em plástico, a 1–2 cm de bornes e fios, e carcaça **aberta e sem a JBL** por {{p:cura}}, até o cheiro de vinagre sumir.' }],
          acoes: [
            'Limpe com álcool só os pontos marcados em 2.3 e deixe secar.',
            'Corte o bico da bisnaga bem fino. Em cada fresta marcada **só de plástico**, um cordão de 2–3 mm por dentro, cobrindo a fresta inteira.',
            'Alise cada cordão com o dedo molhado em água com uma gota de detergente: fica fino, encostado e sem rebarba.',
            'Placa dos bornes (só plástico): cordão contornando a borda da fita posta em 2.4.',
            'Furo do cabo: passe já o cabo de falante pelo furo pequeno (corte e nó como em 2.9) e ponha uma gota em volta, por dentro e por fora, para curar junto. Tudo a menos de 1–2 cm de metal: **nada de silicone**.',
            'Deixe as carcaças abertas, em lugar ventilado, até o cheiro de vinagre sumir ({{p:cura}}). Enquanto isso: 2.9, 3.1, 2.6 a 2.8 e a etapa 4.'
          ],
          verificacao: ['Toda fresta marcada como "silicone" em 2.3 tem cordão.', 'Borda da fita da placa dos bornes (2.4) e furo do cabo com cordão.', 'Nenhum cordão a menos de 1–2 cm de metal.', 'Depois da cura: silicone firme e sem cheiro.']
        },
        {
          id: '2.6', fase: 'Tratar (vedação e amortecimento)', titulo: 'Amortecer as paredes (fita asfáltica)', objetivo: 'Paredes de plástico que não vibram. Só amortecimento: os furos já foram tampados em 2.4.',
          tempo: '30 min', risco: 'baixo', validar: true, ferramentas: ['Estilete', 'Régua', 'Álcool e pano'], materiais: ['M18'],
          acoes: [
            'Limpe as paredes com álcool (plástico não é poroso: o primer do rótulo não é necessário).',
            'Paredes grandes da traseira: retalhos de ≈10 × 10 cm, a 1 cm das torres, dos bornes e da emenda; pressione com força do centro para as bordas.',
            'Segunda camada nas paredes maiores, com as emendas desencontradas (a fita tem 1 mm; duas camadas fazem o papel de uma de 2 mm).',
            'Laterais e fundo da moldura, onde houver parede lisa: um retalho em cada.'
          ],
          verificacao: ['Bater com o nó do dedo na parede tratada dá um som surdo, não "toc" de plástico.', 'Nenhuma borda de fita levantando.'],
          erro: 'Fita sobre poeira ou gordura solta em semanas. Fita a menos de 1 cm das torres atrapalha o fechamento.',
          basico: 'Na caixa selada o ar de dentro é a mola que controla o cone: um vazamento deixa a mola frouxa e o grave cai. A parede fina de plástico vibra junto com o cone e toca como um segundo falante; a massa da fita abafa essa vibração.'
        },
        {
          id: '2.7', fase: 'Tratar (vedação e amortecimento)', depende: ['2.2'], titulo: 'Gaxeta do falante e da emenda', objetivo: 'Fita de espuma onde a JBL assenta e no contorno da emenda da carcaça.',
          tempo: '15 min', risco: 'baixo', validar: true, ferramentas: ['Estilete', 'Régua'], materiais: ['M15'],
          acoes: [
            'Corte a fita ao meio no sentido do comprimento, com estilete e régua: 19 mm viram duas tiras de ≈9 mm.',
            'Assento da JBL: cole uma tira em todo o contorno, pela borda externa, sem cobrir os furos dos parafusos. Emendas da tira de topo, sem sobrepor.',
            'Emenda traseira/moldura: cole uma tira em todo o contorno de uma das metades.',
            'Pressione com o dedo por alguns segundos em toda a extensão.'
          ],
          verificacao: ['A tira não invade a abertura do cone.', 'Nenhum trecho do contorno sem espuma.'],
          erro: 'Deixar os 19 mm inteiros: a sobra entra na abertura e encosta na suspensão da JBL. Sobrepor as pontas: cria um degrau e a flange não assenta.',
          basico: 'A gaxeta de célula fechada se comprime no aperto e fecha as irregularidades entre o metal da flange e o plástico. 4 mm de espuma viram ≈2 mm apertados.'
        },
        {
          id: '2.8', fase: 'Tratar (vedação e amortecimento)', titulo: 'Preparar a fibra (separar, pesar e abrir)', objetivo: 'Só preparação: uma porção generosa, pesada e já aberta. A quantidade certa se descobre no passo 2.11, pelo volume: o que forra a traseira solta (≈10–20 g, estimado). A 2ª caixa recebe o mesmo peso.',
          tempo: '10 min', risco: 'baixo', validar: true, ferramentas: ['Balança de cozinha', 'Um saquinho ou vasilha (opcional)'], materiais: ['M16'],
          alertas: [{ tipo: 'atencao', texto: 'Fibra de almofada é muito fofa: 40–50 g dela dariam várias vezes o volume da caixa e teriam de ser socados. Quem manda é o volume (forrar solta), não um peso fixo.' }],
          acoes: [
            'Ponha um saquinho vazio (de pão, de mercado) na balança de cozinha e zere. Puxe tufos do saco grande para dentro dele até uns 30 g (sobra de propósito). Anote o peso.',
            'Afofe a fibra com as mãos, abrindo os tufos, até ficar solta e fofa (como enchimento de travesseiro novo).',
            'Não precisa separar a porção da 2ª caixa agora: ela sai do mesmo saco depois, com o peso que a 1ª usou.',
            'Guarde a porção (no saquinho, numa vasilha, numa caixa de sapato) até o passo 2.11. Não entra nada na caixa agora. Se preferir, faça tudo isso só na hora de fechar.'
          ],
          figuras: [{ tipo: 'sequencia', legenda: 'Preparar a fibra: pesar uma porção com sobra (num saquinho ou vasilha qualquer) e abrir os tufos com os dedos. Nada entra na caixa neste passo.', passos: [
            { id: 'fibra-pesar', texto: 'Saquinho (ou vasilha) vazio na balança, zerada. Puxe tufos do saco grande até uns 30 g e anote. A quantidade da caixa se acerta no 2.11.' },
            { id: 'fibra-afofar', texto: 'Cada tufo: segure com as duas mãos e puxe para os lados até abrir, como desfiar algodão. Não rasgue em pedacinhos, não estique como elástico.' }
          ] }],
          verificacao: ['Uma porção pesada e anotada (≈30 g), solta e fofa.'],
          erro: 'Fixar um peso e socar até caber: fibra comprimida para de absorver e pode encostar no cone. E encher a 2ª caixa "a olho": pesar a sobra é o jeito de as duas ficarem iguais.',
          basico: 'A fibra não veda nem cola nada: ela fica solta dentro da caixa para absorver o som que o cone manda para trás, que senão volta pelo cone com atraso (o "som de caixa", timbre oco). De quebra, o ar que passa pela fibra esquenta e esfria com ela, e a caixa se comporta como se tivesse ≈10–15 % mais volume. A conta em gramas por litro depende de quão fofa é a fibra; por isso o critério é o volume: forrar fundo e paredes soltas, sem comprimir. Nesta caixa, com corte em 120 Hz, a função principal da fibra é tirar o reflexo dos médios, e uma camada solta já faz isso.'
        },
        {
          id: '2.9', fase: 'Montar', titulo: 'Passar o cabo e soldar os terminais faston', objetivo: 'O cabo de falante entra pelo furo pequeno da traseira e termina em dois faston soldados para a JBL. Dá para fazer durante a cura do silicone (2.5).',
          tempo: '30 min', risco: 'medio', validar: true, ferramentas: ['Kit de solda (M22)', 'Isqueiro', 'Régua'], materiais: ['M13', 'M22'],
          alertas: [{ tipo: 'atencao', texto: 'Ferro a ≈350 °C: no suporte sempre que sair da mão. Faça uma junta de treino numa sobra de fio antes das quatro de verdade.' },
            { tipo: 'atencao', texto: 'Os terminais são amarelos (cano para 4–6 mm²) e o cabo é de {{p:bit_fal}}: crimpar não segura. Dobre o cobre ao meio e solde.' }],
          acoes: [
            'Corte o cabo da caixa ({{c:F1}} / {{c:F2}}) com ≈2,5 m até o módulo mais ≈20 cm para dentro da caixa. Passe a ponta pelo furo pequeno da traseira e dê um nó simples por dentro, a ≈15 cm da ponta: é o alívio de tração. Se o cabo já passou no 2.5, comece daqui.',
            'Enfie um tubo termorretrátil de ≈6 mm em cada fio **antes** de soldar.',
            'Separe os dois condutores por ≈8 cm, desencape ≈12 mm de cada, dobre o cobre ao meio (fica ≈6 mm, grosso como 5 mm²) e estanhe: ferro por baixo, estanho por cima, até escorrer para dentro dos fios.',
            'Ponha uma gota de estanho dentro do cano do faston; encoste o fio estanhado, aqueça 2–3 s até os dois estanhos se juntarem e tire o ferro sem mexer até endurecer.',
            'Puxe com força: o fio não pode sair. Junta boa é lisa e brilhante; fosca e granulada é solda fria: refaça.',
            'Deslize o tubo sobre o cano do terminal e encolha com o isqueiro a alguns centímetros.'
          ],
          figuras: [
            { tipo: 'sequencia', legenda: 'Terminal faston no cabo de falante, com o cobre dobrado e soldado. O tubo termorretrátil entra no fio antes da solda.', passos: [
              { id: 'faston-desencapar', titulo: 'Desencapar ≈12 mm, dobrar ao meio e estanhar', texto: 'Ferro por baixo, estanho por cima, até escorrer para dentro do fio.' },
              { id: 'faston-inserir', params: { terminal: 'amarelo' }, titulo: 'Soldar o fio dentro do cano', texto: 'Gota de estanho no cano; fio estanhado dentro; ferro 2–3 s; tirar sem mexer.' },
              { id: 'faston-puxar', params: { terminal: 'amarelo' }, texto: 'Esfriou? Puxe firme. Depois, o tubo por cima.' }
            ] }
          ],
          verificacao: ['Puxão firme não solta nenhum dos quatro terminais.', 'Nenhum cobre exposto fora do tubo.', 'Puxando o cabo por fora da caixa, o nó segura: o faston não recebe a força.', 'Condutor marcado (+) identificado nas duas pontas do cabo.'],
          erro: 'Esquecer o tubo antes de soldar (não passa pelo terminal depois) e mexer o fio enquanto a solda esfria (solda fria).',
          basico: 'Soldar é derreter estanho sobre o cobre quente para os dois se unirem. O segredo é aquecer o fio, não o estanho: quando o fio está quente, o estanho escorre para dentro sozinho. No som, terminal soldado e crimpado dão o mesmo resultado.'
        },
        {
          id: '2.10', fase: 'Montar', depende: ['2.9', '2.5'], espera: { apos: '2.5', horas: 24, rotulo: 'cura do silicone (24–48 h com a caixa aberta)' }, titulo: 'Ligar a JBL e conferir a polaridade', tempo: '10 min', risco: 'baixo', validar: true,
          requer: 'Terminais soldados (2.9) e silicone curado, sem cheiro de vinagre (2.5 + 24–48 h).',
          acoes: [
            'Identifique o + da JBL: o terminal mais largo, ou o marcado com + ou ponto vermelho.',
            'Encaixe os faston: fio do borne vermelho da caixa → + da JBL ({{c:I1}} / {{c:I2}}).',
            'Encoste a pilha AA nos bornes de fora da caixa (+ no vermelho). O cone tem que **avançar**. Se recuar, inverta os faston.'
          ],
          figuras: [{ tipo: 'ilustracao', id: 'teste-pilha', legenda: 'Teste da pilha: + da pilha no borne vermelho. Se o cone recuar, inverta os faston dentro da caixa.' }],
          verificacao: ['O cone avança com a pilha nas duas caixas.'],
          basico: 'Se uma caixa empurra o ar enquanto a outra puxa, os graves das duas se cancelam. O teste da pilha garante que as duas se movem juntas.'
        },
        {
          id: '2.11', fase: 'Montar', depende: ['2.10', '2.7', '2.8'], titulo: 'Fechar a caixa', objetivo: 'JBL parafusada sobre a gaxeta na moldura; fibra acomodada solta na traseira; as duas metades fechadas.',
          tempo: '15 min', risco: 'baixo', validar: true, ferramentas: ['Chave Phillips'], materiais: ['M14', 'M16'],
          requer: 'JBL ligada e com polaridade conferida (2.10), gaxeta colada (2.7) e fibra pesada e aberta (2.8).',
          acoes: [
            'Na moldura: parafuse a JBL sobre a gaxeta, em cruz, até a flange assentar. Nem uma volta a mais.',
            'Na traseira: tufos abertos da porção (2.8) no fundo e **subindo pelas paredes até perto da borda**, como um ninho de ≈3–4 cm: sem apertar. Nada na borda de encaixe.',
            'Deixe livre a região onde o ímã da JBL vai ficar: um vão de 2–3 cm atrás dele, sem fibra encostando no falante.',
            'Junte as metades devagar; se a fibra espremer contra a JBL ou sair pela emenda, tire um pouco. Pese a sobra: o que entrou vai igual na 2ª caixa.',
            'Aperte as torres em cruz, sem forçar.'
          ],
          figuras: [{ tipo: 'comparar', legenda: 'Traseira em corte, vista de cima, com a moldura e a JBL chegando pela esquerda. Certo: fibra aberta forrando fundo e paredes, com um vão para o ímã. Errado: socada até a boca, encostando no ímã.', itens: [
            { id: 'fibra-acomodar', ok: true, titulo: 'Solta, forrando as paredes', texto: 'Vá encostando os tufos abertos no fundo e nas paredes, sem apertar. Sobrou espaço no meio? É assim mesmo.' },
            { id: 'fibra-socada', ok: false, titulo: 'Socada e encostada no ímã', texto: 'Comprimida vira um bloco e para de absorver; encostada no ímã ou no cone abafa e pode raspar.' }
          ] },
          { tipo: 'foto', legenda: 'Onde a fibra fica na sua caixa: solta no fundo e nas paredes da traseira (roxo), sem encostar no falante. A região atrás do ímã da JBL (vermelho tracejado) fica livre.', itens: [
            { src: 'img/bs369-traseira-interior.jpg', alt: 'Interior da metade traseira da BS-369', credito: 'Foto do usuário, 23/09/2026', titulo: 'Traseira, por dentro', marcas: [
              { cor: 'fibra', x: 12, y: 22, w: 80, h: 64, rotulo: 'Fibra solta ({{p:fibra}}): fundo e paredes, sem comprimir. Pode cobrir a placa dos bornes por cima.' },
              { cor: 'proibido', redondo: true, x: 32, y: 36, w: 36, h: 22, tracejada: true, rotulo: 'Zona do ímã da JBL quando a caixa fecha: vão de 2–3 cm sem fibra encostando no falante.' }
            ] }
          ] }],
          verificacao: ['Flange assentada por igual, sem folga visível.', 'Fibra solta por dentro, nada espremido; nenhum fio preso entre as metades.'],
          erro: 'Fibra socada vira um bloco e deixa de absorver; fibra encostada no cone ou no ímã abafa o som e pode raspar. Apertar os parafusos além do assento racha a torre.'
        },
        {
          id: '2.12', fase: 'Validar', depende: ['2.11'], titulo: 'Validar a caixa sozinha', objetivo: 'Cada caixa sai daqui testada, sem precisar do módulo.',
          tempo: '10 min', risco: 'baixo', validar: true, ferramentas: ['Multímetro', 'Pilha AA'],
          acoes: [
            'Vedação: empurre o cone de leve, por igual. Ele deve voltar devagar, amortecido, sem chiado.',
            'Multímetro em Ω nos bornes de fora: ≈3,4 Ω.',
            'Pilha AA nos bornes (+ no vermelho): o cone **avança**.',
            'Anote o valor medido na tabela de medições.'
          ],
          verificacao: ['O cone volta devagar e sem chiado.', '≈3,4 Ω e cone avançando com a pilha, nas duas caixas.'],
          erro: 'Leitura aberta (sem número) nos bornes = terminal solto dentro da caixa. Cone que volta na hora = vazamento: refaça o teste da lanterna com a caixa fechada.',
          basico: 'Caixa selada funciona como uma mola de ar: o cone empurrado volta devagar porque o ar segura. Se volta na hora, o ar está escapando por algum lugar.'
        }
      ]
    },
    {
      id: '3', titulo: 'Cabo do sub', curto: 'Sub', peca: 'montagem',
      intro: 'Trocar o cabo fino com emenda de fita que veio com o sub por 2 × 2,5 mm² soldado, com o + identificado. Não depende das caixas L/R nem da eletrônica: cabe em qualquer vão de tempo, inclusive durante a cura do silicone.',
      passos: [
        {
          id: '3.1', fase: 'Refazer o cabo', titulo: 'Cortar e medir o cabo novo do sub', objetivo: 'Tirar a emenda de fita, cortar o 2 × 2,5 mm² no comprimento certo e marcar o +.',
          tempo: '15 min + solda', risco: 'medio', validar: true, ferramentas: ['Alicate desencapador', 'Multímetro', 'Pilha AA', 'Abraçadeira'], materiais: ['M10'],
          alertas: [{ tipo: 'atencao', texto: 'Em ponte, os **dois** fios do sub carregam sinal: fio solto encostando no chassi ou no outro fio queima o módulo.' }],
          acoes: [
            'Corte fora o cabo azul/branco com a emenda de fita, deixando ≈5 cm do vermelho/preto do plugue.',
            'Corte {{c:F3}} do cabo paralelo com o comprimento até o lugar do módulo (passo 4.1), com folga (≈0,5–1 m). Marque o + com caneta nas duas pontas.',
            'Emende cada fio por solda com termorretrátil (3.2): o condutor marcado no fio vermelho do plugue. Depois volte aqui para o teste da pilha.',
            'Prenda a emenda ao cabo com abraçadeira, para o peso do cabo não puxar a solda.',
            'Teste da pilha na outra ponta: o fio que faz o cone **avançar** com o + da pilha é o + (vai no CH4 ⊕). Confira que é o marcado.',
            'Meça em Ω entre as duas pontas: 3–3,6 Ω.'
          ],
          verificacao: ['Nenhuma emenda com fita isolante no cabo do sub.', 'O cone avança com o + da pilha no fio marcado como +.', '3–3,6 Ω na ponta que vai ao módulo.'],
          erro: 'Emendar só torcendo e passando fita: solta com a vibração e pode encostar no chassi.'
        },
        {
          id: '3.2', fase: 'Refazer o cabo', depende: ['3.1'], titulo: 'Soldar a emenda do sub', objetivo: 'Duas emendas (uma por fio), cada uma no seu tubo, as duas num tubo maior.',
          tempo: '25 min', risco: 'medio', validar: true, ferramentas: ['Kit de solda (M22)', 'Alicate desencapador', 'Isqueiro'], materiais: ['M22'],
          alertas: [{ tipo: 'atencao', texto: 'Ferro a ≈350 °C: no suporte sempre que sair da mão.' }],
          acoes: [
            'Ferro a ≈350 °C, ponta chata (2.4D) limpa na esponja úmida e com um pouco de estanho.',
            'Enfie os tubos termorretráteis **antes**: um de ≈4–5 mm em cada fio e um de ≈10 mm no cabo.',
            'Desencape ≈15 mm e enrole o fio fino em volta do grosso (vermelho do plugue com o condutor marcado como +).',
            'Aqueça o fio por baixo e encoste o estanho no fio, não no ferro: ele tem que escorrer para dentro.',
            'Esfriou sem mexer? Puxe firme. Tubos sobre as emendas, o maior por cima das duas; encolha com o isqueiro a alguns centímetros.',
            'Volte ao passo 3.1: teste da pilha e 3–3,6 Ω.'
          ],
          verificacao: ['Emendas lisas e brilhantes, cada uma no seu tubo e as duas no tubo maior.'],
          erro: 'Esquecer os tubos antes de soldar, ou mexer o fio enquanto esfria (a "solda fria": fosca e fraca).',
          basico: 'Solda boa escorre para dentro dos fios porque o cobre está quente. Se o estanho forma uma bola por cima, o fio está frio: espere mais. Se a solda não sair, o conector de alavanca (M21) é o plano B.'
        }
      ]
    },
    {
      id: '4', titulo: 'Sistema eletrônico', curto: 'Eletrônica', peca: 'montagem',
      intro: 'Não depende das caixas: fonte, processador e módulo são ligados, conferidos, configurados e regulados **sem nenhum falante**, em quatro fases: **preparar os cabos**, **ligar** (tudo com a fonte fora da tomada), **conferir e energizar por ramais** (fonte sozinha, depois o processador, por último o módulo) e **configurar e regular**. Os falantes só entram na etapa 5.',
      blocos: [{ titulo: 'Tabela de conexões', tipo: 'tabela', ref: 'cabos' }],
      passos: [
        {
          id: '4.1', fase: 'Preparar os cabos', titulo: 'Preparar os cabos: posicionar, cortar, desencapar e montar os porta-fusíveis', objetivo: 'Tudo o que se faz com os cabos antes de ligar qualquer borne. Sem fusível e sem energia.',
          tempo: '1 h 15', risco: 'medio', validar: true, ferramentas: ['Trena', 'Alicate de corte', 'Alicate desencapador', 'Fita crepe', 'Caneta permanente', 'Kit de solda (M22)', 'Chave de fenda'], materiais: ['M07', 'M08', 'M09', 'M10', 'M11', 'M24'],
          alertas: [{ tipo: 'perigo', texto: 'O fusível só entra nos passos 4.7 e 4.8, depois da conferência com o multímetro.' },
            { tipo: 'atencao', texto: 'Não estanhe (solda) ponta que vai em borne de parafuso: a solda cede sob o aperto, o contato afrouxa e esquenta. Ponta torcida ou ilhós.' }],
          acoes: [
            '**Posicionar:** fonte ao lado do módulo, com 20 cm livres nas laterais; longe de tapete, cortina e passagem (o módulo passa de 60 °C). Cabo de sinal longe do cabo da tomada; se cruzar, em 90°. Defina onde ficam as caixas e o sub.',
            '**Medidas já definidas** (tabela abaixo) para fonte, módulo e processador lado a lado na mesma prateleira, módulo no meio, caixas a até 2,5 m do módulo e sub ao lado dele. Se a sua distância for maior, some a diferença; nunca encurte C1 a C3 abaixo do que está.',
            '**Cortar:** 10 mm² vermelho: {{c:C1}} 15 cm + {{c:C2}} 40 cm · 10 mm² preto: {{c:C3}} 60 cm · 1,5 mm²: {{c:C4}} 50 cm, {{c:C5}} 50 cm, {{c:C6}} 4 cm, {{c:C7}} 50 cm · paralelo 2 × 2,5: {{c:F1}} 3,0 m, {{c:F2}} 3,0 m ({{c:F3}} 1,0 m sai no passo 3.1; sobram ≈3 m dos 10).',
            '**Etiquetar:** código em fita crepe nas duas pontas. O cabo paralelo não tem friso: marque um condutor com caneta nas duas pontas; ele é o + em todos.',
            '**Desencapar:** meça a profundidade de cada borne e desencape só isso (10 mm² ≈10–15 mm; falante e processador ≈8–10 mm). Torça o cobre firme, no mesmo sentido; ilhós se tiver.',
            '**Porta-fusível de 40 A:** {{c:C1}} na entrada e {{c:C2}} na saída, emendando cada rabicho ({{p:fio_pf}}) ao cabo de 10 mm² por solda com termorretrátil (como no 3.2). Fita isolante e conector de alavanca não servem. **Sem o fusível.**',
            '**Porta-fusível do processador** em {{c:C4}}, vazio. Aperte os parafusos e confira cada ponta com um puxão.'
          ],
          figuras: [
            { tipo: 'tabela', ref: 'cabos' },
            { tipo: 'tabela', ref: 'corte' },
            { tipo: 'sequencia', legenda: 'Ponta de cabo para borne de parafuso (fonte, módulo, porta-fusível e processador).', passos: [
              { id: 'medir-borne', texto: 'Encoste o fio no borne aberto e marque até onde ele entra.' },
              { id: 'desencapar', params: { L: 'P', nota: '10 mm²: ≈10–15 mm · 2,5 e 1,5 mm²: ≈8–10 mm' } },
              { id: 'torcer' },
              { id: 'inserir-borne', texto: 'Aperte firme e puxe o fio para conferir.' }
            ] },
            { tipo: 'comparar', legenda: 'O cobre fica todo dentro do borne. Qualquer fio para fora pode fechar curto com o borne vizinho.', itens: [
              { id: 'inserir-borne', ok: true, titulo: 'Isolamento encostado no borne' },
              { id: 'cobre-exposto', ok: false },
              { id: 'fio-solto', ok: false }
            ] },
            { tipo: 'ilustracao', id: 'porta-fusivel', params: { fusivel: '{{p:fus40}}', passo: '4.8' }, legenda: 'Porta-fusível principal entre C1 e C2, a até {{p:dist_fus}} da fonte, ainda sem o fusível.' }
          ],
          verificacao: ['Nenhum cabo esticado, nenhuma sobra grande enrolada; cada ponta com o código da tabela.', 'Com a ponta no borne, o isolamento chega até a entrada do borne; nenhum fio de cobre solto.', 'Porta-fusíveis montados, vazios e fechados; emendas do de 40 A soldadas e cobertas.'],
          erro: 'Inverter + e − só de um lado: a caixa toca fora de fase e o grave some. Cobre para fora do borne: curto com o borne vizinho.',
          basico: 'Cabo de força comprido perde tensão no caminho e o módulo rende menos: por isso a fonte fica ao lado do módulo e o 10 mm² é curto. Cabo de sinal junto do cabo da rede capta zumbido de 60 Hz. No cabo de falante, alguns metros de 2,5 mm² não fazem diferença audível.'
        },
        {
          id: '4.2', fase: 'Ligar (sem energia)', depende: ['4.1'], titulo: 'Preparar o conector do processador', objetivo: 'Montar o conector de 4 vias fora do aparelho, onde dá para ver e apertar.',
          tempo: '10 min', risco: 'medio', validar: true, ferramentas: ['Chave de fenda pequena'], materiais: ['M11', 'M24'],
          acoes: [
            'Tire o conector de 4 vias do processador.',
            'GND: {{c:C5}}. +12VDC: {{c:C4}} e o jumper {{c:C6}}. REM IN: a outra ponta do jumper {{c:C6}}. REM OUT: {{c:C7}}.',
            'Dois fios no borne +12VDC: torça {{c:C4}} e {{c:C6}} juntos antes de inserir (ou jumper de 0,75 mm²).',
            'Aperte e puxe cada fio.'
          ],
          figuras: [{ tipo: 'mapa', equip: 'pro24bt-alimentacao', legenda: 'Conector de alimentação do processador com os cabos do projeto. C6 é o jumper entre +12VDC e REM IN (modo BOB).' }]
        },
        {
          id: '4.3', fase: 'Ligar (sem energia)', depende: ['4.1', '4.2'], titulo: 'Ligar força, terra e REM', objetivo: 'Todos os cabos de energia no lugar, com a fonte fora da tomada e os porta-fusíveis vazios.',
          tempo: '20 min', risco: 'alto',
          alertas: [{ tipo: 'perigo', texto: 'Inverter + e − queima o módulo e o processador. Por isso a conferência do passo 4.5 vem antes de qualquer fusível.' },
            { tipo: 'atencao', texto: 'Os bornes 7–9 da régua da fonte são da rede (127/220 V) e ficam expostos ao lado dos de 12 V. Só mexa na régua com o plugue fora da tomada.' }],
          acoes: [
            'Confirme: fonte fora da tomada e porta-fusíveis vazios.',
            'Na fonte: {{c:C1}} no borne 1 (+), {{c:C4}} no borne 2 (+), {{c:C3}} no borne 4 (−), {{c:C5}} no borne 5 (−).',
            'No módulo: {{c:C2}} no +12VDC e {{c:C3}} no GND.',
            'Encaixe no processador o conector do passo 4.2 e leve {{c:C7}} até o REM do módulo.',
            'Puxe cada cabo: nada pode soltar, nenhum cobre aparente.'
          ],
          figuras: [
            { tipo: 'mapa', equip: 'bob60a', legenda: 'Régua da fonte com os cabos do projeto. Os bornes 1–3 (+) e 4–6 (−) são ligados por dentro; 3 e 6 ficam livres.' },
            { tipo: 'mapa', equip: 'sd800.4-saida', legenda: 'Régua de saída do módulo com os cabos do projeto. Atenção: com o módulo de cabeça para baixo, a ordem se inverte.' }
          ],
          verificacao: ['Cada cabo no borne da tabela de conexões, firme.']
        },
        {
          id: '4.4', fase: 'Ligar (sem energia)', depende: ['4.1'], titulo: 'Ligar os RCA e preparar o módulo', tempo: '15 min', risco: 'medio', materiais: ['M12'],
          acoes: [
            'RCA: saídas 1–4 do processador nas entradas CH1–CH4 do módulo ({{c:S1}}–{{c:S4}}). O módulo precisa das 4 entradas ligadas.',
            'Chaves X-OVER do módulo: CH1/CH2 e CH3/CH4 em **F** (quem filtra é o processador).',
            'GAIN dos dois pares no mínimo.',
            'Bornes de falante do módulo **vazios** até a etapa 5.'
          ],
          figuras: [
            { tipo: 'mapa', equip: 'pro24bt-rca', legenda: 'Conexões RCA do processador. A entrada HIGH IN (alto nível) não é usada.' },
            { tipo: 'mapa', equip: 'sd800.4-entrada', legenda: 'Painel de entrada do módulo. CH1 e CH4 em cima; CH2 e CH3 (vermelhos) embaixo.' }
          ],
          verificacao: ['4 RCA encaixados até o fim, cada saída na sua entrada.'],
          basico: 'Sem falante ligado, um erro de configuração não queima nada. Por isso a eletrônica fica pronta e regulada antes de qualquer caixa receber sinal, e as chaves do módulo já vão para F: quando a JBL for ligada, o passa-alta do processador já estará lá.'
        },
        {
          id: '4.5', fase: 'Conferir e energizar por ramais', depende: ['4.3', '4.4'], titulo: 'Conferir com o multímetro, sem energia', objetivo: 'Achar inversão e curto antes que a energia ache.',
          tempo: '15 min', risco: 'alto', validar: true, ferramentas: ['Multímetro'],
          acoes: [
            'Fonte fora da tomada, porta-fusíveis vazios, multímetro em continuidade (bip) ou na escala de 200 Ω.',
            'Borne 1 (+) da fonte → entrada do porta-fusível de 40 A: bipa. Saída dele → +12VDC do módulo: bipa.',
            'Borne 4 (−) da fonte → GND do módulo: bipa.',
            'Borne 2 (+) → entrada do porta-fusível do processador; saída dele → +12VDC do processador: bipa. Borne 5 (−) → GND do processador: bipa.',
            'Entre +12VDC e GND do módulo e, depois, do processador: pode bipar rápido e subir aos poucos. Parado perto de 0 Ω é curto: não ligue.'
          ],
          verificacao: ['Cada cabo bipa de ponta a ponta, no borne certo.', 'Nenhum + parado em 0 Ω com o GND.'],
          erro: 'Conferir só olhando. Inverter + e − é o erro mais comum na primeira ligação, e é justamente o caso que um fusível maior que o do manual protege pior.',
          basico: 'Na continuidade, o multímetro manda uma corrente minúscula. Os capacitores da entrada do módulo se carregam com ela: a leitura começa baixa e sobe. Curto de verdade não sobe. Com os fusíveis fora, cada ramal fica isolado e o defeito aparece sem risco.'
        },
        {
          id: '4.6', fase: 'Conferir e energizar por ramais', depende: ['4.5'], titulo: 'Ligar a fonte sozinha e ajustar a tensão', objetivo: 'Conferir a fonte antes de ela alimentar qualquer aparelho.',
          tempo: '10 min', risco: 'alto', validar: true, ferramentas: ['Multímetro', 'Chave de fenda isolada'],
          requer: 'Conferência sem energia aprovada (passo 4.5).',
          alertas: [{ tipo: 'perigo', texto: 'Com o plugue na tomada, os bornes 7–9 da fonte ficam com 127/220 V, expostos na mesma régua do 12 V. Ajuste o trimpot com chave de fenda isolada e não encoste nos parafusos da régua.' }],
          acoes: [
            'Confirme: os dois porta-fusíveis vazios.',
            'Ligue a fonte na tomada aterrada.',
            'Multímetro em V DC nos bornes 1 (+) e 4 (−) da fonte: ajuste para {{p:tensao}} no trimpot ADJ VOLTAGE.',
            'Na entrada de cada porta-fusível: {{p:tensao}}. Na saída: 0 V.',
            'Tire a fonte da tomada.'
          ],
          verificacao: ['{{p:tensao}} nos bornes da fonte, sem nenhum aparelho alimentado.'],
          basico: 'Ligando a fonte sozinha, você separa "fonte com problema" de "ligação com problema". Se algo falhar nos próximos passos, a fonte já está conferida.'
        },
        {
          id: '4.7', fase: 'Conferir e energizar por ramais', depende: ['4.6'], titulo: 'Ligar o processador', objetivo: 'Primeiro aparelho a receber energia: o que consome menos e tem o fusível menor.',
          tempo: '15 min', risco: 'alto', validar: true,
          requer: 'Fonte em {{p:tensao}} (passo 4.6).',
          alertas: [{ tipo: 'atencao', texto: 'Fusível do processador: {{p:fus1}} pelo manual. O de 5 A serve **por enquanto** (decisão de 10/10): protege o fio, mas protege menos o processador num defeito interno. Troque pelo de 1–2 A (M23) quando o tiver.' }],
          acoes: [
            'Com a fonte fora da tomada, coloque o fusível do processador. O de 40 A continua fora.',
            'Ligue a fonte na tomada: o LED do processador acende.',
            'Abra o app, conecte e troque a senha (padrão 1234).',
            'Teste o modo BOB: ON e OFF pelo app.',
            'Multímetro em V DC no REM e no GND do módulo: ≈{{p:tensao}} com o app em ON e 0 V em OFF.',
            'Fusível queimou ou o LED não acendeu: tire da tomada e volte ao passo 4.5.'
          ],
          verificacao: ['LED aceso, app conectado e senha trocada.', 'O REM do módulo segue o ON e o OFF do app.']
        },
        {
          id: '4.8', fase: 'Conferir e energizar por ramais', depende: ['4.7', '4.1'], titulo: 'Ligar o módulo', objetivo: 'Último ramal: o de maior corrente, ainda sem falantes.',
          tempo: '15 min', risco: 'alto', validar: true,
          requer: 'Processador funcionando (passo 4.7) e porta-fusível de 40 A aprovado (passo 4.1).',
          alertas: [{ tipo: 'perigo', texto: 'Fusível se coloca sempre com a fonte fora da tomada: com o plugue ligado, os bornes 7–9 da fonte ficam com 127/220 V.' }],
          acoes: [
            'Com a fonte fora da tomada, coloque o fusível de {{p:fus40}}.',
            'Ligue a fonte na tomada.',
            'Meça na régua do módulo (+12VDC e GND): {{p:tensao}}.',
            'App em ON: o LED do módulo acende. Em OFF: apaga.',
            'Depois de 5 min ligado, toque no porta-fusível e nos cabos de força: frios (sem som, a corrente é pequena).'
          ],
          verificacao: ['{{p:tensao}} na régua do módulo.', 'O LED do módulo segue o app.'],
          erro: 'Se o fusível queimar na hora, há curto ou polaridade invertida. Tire da tomada e volte ao passo 4.5. Trocar o fusível sem achar a causa só queima o próximo.'
        },
        {
          id: '4.9', fase: 'Configurar e regular', depende: ['4.7'], titulo: 'Configurar o processador', tempo: '20 min', risco: 'medio',
          alertas: [{ tipo: 'atencao', texto: 'Na ponte, **todo ajuste da saída 3 se repete na 4**: fase, atraso, filtros, nível, EQ e limitador. Fase invertida em só uma delas cancela a ponte, e o sub fica mudo ou fraco.' }],
          acoes: [
            'Entrada: Bluetooth do celular (ou RCA A = L e B = R, quando o cabo do notebook entrar).',
            'Saídas 1 e 2 (caixas): origem A e B, passa-alta {{p:filtro_sat}} em {{p:corte}}, fase 0°.',
            'Saídas 3 e 4 (sub, ponte): origem A+B, passa-baixa {{p:filtro_sub}} em {{p:corte}} e subsônico em {{p:subsonico}}, fase 0°.',
            'Salve na memória 1.'
          ],
          figuras: [{ tipo: 'tabela', ref: 'processador' }],
          basico: 'A caixa selada já corta 12 dB/oitava abaixo de ≈124 Hz. Somado ao filtro Butterworth de 12 dB, o corte que chega ao ouvido é de 24 dB/oitava e soma plano com o sub (0 a +1,3 dB na simulação). Com 24 dB elétricos nas caixas, abriria um buraco de −3 a −10 dB no cruzamento. Com a chave do módulo em F, o passa-alta das JBL é só o do processador: depois de um reset, confira se ele continua lá (passo 5.5).'
        },
        {
          id: '4.10', fase: 'Configurar e regular', depende: ['4.8', '4.9'], titulo: 'Regular o ganho', objetivo: 'Com o maior sinal que pode chegar, levar cada saída do módulo ao alvo.',
          tempo: '20 min', risco: 'alto', validar: true,
          requer: 'Módulo ligado (passo 4.8), processador configurado (4.9) e bornes de falante vazios.',
          alertas: [{ tipo: 'perigo', texto: 'Nenhum falante ligado nesta etapa: tom de teste com falante ligado danifica o falante e a audição. Não encoste na régua da fonte (127/220 V nos bornes 7–9).' }],
          acoes: [
            'No processador: master e níveis das saídas em 0 dB; filtros, EQ e limitador desligados. No celular: equalizador e efeitos desligados.',
            'Toque pelo Bluetooth o tom de {{p:tom}} com o celular a {{p:volume_teste}}. GAIN no mínimo, multímetro em V AC nos bornes de saída do módulo.',
            'CH1 e CH2: suba o GAIN CH1-CH2 até {{p:ganho_sat}}. Se no mínimo já passar, deixe no mínimo e baixe juntas as saídas 1 e 2 no app até o alvo.',
            'Ponte CH4 ⊕ / CH3 ⊖: o mesmo com o GAIN CH3-CH4 até {{p:ganho_sub}}, baixando juntas as saídas 3 e 4 se precisar.',
            'LED da saída 3 ou 4 aceso = soma A+B ceifando no processador: baixe as duas até apagar e meça de novo.',
            'Anote os valores e o nível de cada saída na tabela de medições. Não desligue: o passo 4.11 usa o mesmo tom.'
          ],
          verificacao: ['CH1 e CH2 em {{p:ganho_sat}} e ponte em {{p:ganho_sub}}, com o celular a {{p:volume_teste}}.', 'LEDs de saída apagados.'],
          erro: 'Regular com o celular a 3/4: no 100 %, a JBL receberia até o dobro da tensão.',
          basico: 'Regulando com o maior sinal possível, o módulo nunca entrega mais que o alvo. O alvo das JBL vem do curso do cone, não do calor. Com 2,1 V vindos do processador, um módulo de 2 V de sensibilidade passa do alvo já no GAIN mínimo: daí o ajuste no nível da saída.'
        },
        {
          id: '4.11', fase: 'Configurar e regular', depende: ['4.10'], titulo: 'Travar o teto e voltar os filtros', objetivo: 'Limitador no ponto regulado: nada passa da regulagem, mesmo com EQ ou nível subidos.',
          tempo: '15 min', risco: 'alto', validar: true,
          alertas: [{ tipo: 'atencao', texto: 'Daqui em diante, níveis e EQ do app **só para baixo**. O volume do dia a dia é o do celular.' }],
          acoes: [
            'Com o tom do passo 4.10 tocando: em cada saída, baixe o limiar do limitador até o LED dela acender e suba até ele apagar. Saídas 3 e 4 com o mesmo limiar.',
            'Teste o teto: suba 2 dB o nível da saída 1. O LED acende e o multímetro **não** passa de {{p:ganho_sat}}. Volte o nível.',
            'Pare o tom e reative os filtros das saídas (passo 4.9).',
            'Salve a memória 1 e exporte a configuração para o celular (Settings / Presets).',
            'Desligue o som no app e tire a fonte da tomada: a eletrônica está pronta para os falantes.',
            'Notebook pelo P2, quando entrar: toque o mesmo tom com ele a 100 % e meça. Se passar do alvo, ele vira a referência: refaça o 4.10 e este passo.'
          ],
          verificacao: ['Com o tom de referência, o LED de cada saída fica apagado.', 'Filtros ativos e configuração salva no processador e no celular.'],
          erro: 'Se no teste o multímetro passar do alvo, o limitador age antes do nível de saída e não segura o nível. Anote e nunca suba os níveis.',
          basico: 'O limitador corta o sinal que passaria do limiar. Com o limiar no ponto regulado, nenhuma saída leva ao módulo mais que o alvo, mesmo se alguém subir o EQ, o nível ou o volume de outra fonte. No app, o limiar aparece em volts, na saída do processador.'
        }
      ]
    },
    {
      id: '5', titulo: 'Integração', curto: 'Integração', peca: 'montagem',
      intro: 'Só os passos que precisam das caixas e da eletrônica prontas. Os falantes entram com a fonte fora da tomada e com o processador já filtrando e limitando. O sub pode entrar antes das caixas L/R: o passo 5.3 só precisa dele.',
      passos: [
        {
          id: '5.1', fase: 'Ligar os falantes', depende: ['4.11'], titulo: 'Ligar os falantes', objetivo: 'Cada caixa no seu canal, com a polaridade certa, sem energia.',
          tempo: '15 min', risco: 'medio', validar: true,
          requer: 'Eletrônica regulada, com filtros e limitador ativos (4.11). Entra o que estiver pronto: caixas validadas (2.12) e/ou sub com o cabo novo (3.1).',
          alertas: [{ tipo: 'atencao', texto: 'Ponte só com carga de {{p:imp_sub}} ou mais. Sub de 2 Ω em ponte faz o módulo desligar ou queimar.' }],
          acoes: [
            'Confirme: fonte fora da tomada.',
            'Nas caixas: condutor marcado (+) no faston do terminal + da JBL ({{c:I1}} / {{c:I2}}), já feito em 2.9.',
            'No módulo: {{c:F1}} no CH1 e {{c:F2}} no CH2, + no +.',
            'Sub ({{c:F3}}): o fio marcado como + no **CH4 ⊕** e o outro no **CH3 ⊖**.',
            'Antes de apertar cada par, meça na ponta do módulo: ≈3,4 Ω nas caixas e 3–3,6 Ω no sub.',
            'Puxe cada fio: nada solta, nenhum cobre aparente.'
          ],
          figuras: [{ tipo: 'mapa', equip: 'sd800.4-saida', legenda: 'Régua de saída do módulo: F1 no CH1, F2 no CH2 e o sub em ponte (CH4 ⊕ / CH3 ⊖).' }],
          verificacao: ['Leituras de 3–3,6 Ω em cada saída antes de apertar.', 'Nenhum fio encostando no vizinho.']
        },
        {
          id: '5.2', fase: 'Testar e ajustar', depende: ['5.1'], titulo: 'Primeiro som: uma saída por vez', tempo: '15 min', risco: 'medio', validar: true,
          alertas: [{ tipo: 'dica', texto: 'Audição: volume alto por horas (acima de ≈85 dB) cansa e causa perda permanente. Teste em volume baixo e suba aos poucos.' }],
          acoes: [
            'Ligue a fonte na tomada. Antes de tocar, confira no app o passa-alta das saídas 1 e 2.',
            'Ligue o som pelo app. Celular em volume baixo, música com grave.',
            'Silencie todas as saídas menos uma: a 1 toca só na caixa L, a 2 só na R, a 3 e a 4 só no sub (cada uma sozinha toca mais baixo: é a ponte).',
            'Grave cheio numa JBL = RCA trocado ou passa-alta perdido: pare e confira.',
            'Volte todas as saídas e suba o volume aos poucos.'
          ],
          verificacao: ['Cada saída toca só no seu falante.', 'Nenhum chiado ou zumbido sem música.'],
          erro: 'Zumbido sem música: cabo de sinal junto do cabo da tomada ou loop de terra (ver "Se algo der errado").'
        },
        {
          id: '5.3', fase: 'Testar e ajustar', depende: ['5.1'], titulo: 'Tipo de caixa do sub e subsônico', objetivo: 'Descobrir se a caixa do sub tem duto antes de tocar alto.',
          tempo: '15 min', risco: 'medio', validar: true,
          requer: 'Sub ligado (passo 5.1). As caixas L/R não precisam estar prontas.',
          alertas: [{ tipo: 'atencao', texto: 'Abaixo da frequência do duto, o cone fica quase solto: com duto, o subsônico precisa mudar antes de tocar alto.' }],
          acoes: [
            'No gerador do app, varredura lenta de 25 a 60 Hz em volume baixo, só nas saídas 3 e 4, com lanterna no cone do sub.',
            'Se em alguma frequência o cone quase parar, a caixa tem duto e essa é a Fb.',
            'Subsônico nas saídas 3 e 4: selada → 25 Hz; com duto → ≈0,75–0,8 × Fb, 24 dB/oit; sem conclusão → fica em {{p:subsonico}}.',
            'Anote o resultado na tabela de medições e salve a memória 1.'
          ],
          verificacao: ['Subsônico igual nas saídas 3 e 4.']
        },
        {
          id: '5.4', fase: 'Testar e ajustar', depende: ['5.2'], titulo: 'Ajustes conjuntos e validação', tempo: '40 min', risco: 'medio', validar: true,
          requer: 'Caixas L/R e sub ligados (passo 5.1).',
          acoes: [
            'Atraso: meça a distância de cada caixa e do sub até o sofá; a mais próxima recebe atraso igual à diferença (em cm, no app).',
            'Fase do sub: tom de 120 Hz e um app de decibelímetro no sofá (ou música de grave contínuo). Alterne 0° e 180° **nas saídas 3 e 4 juntas** e fique com o maior nível.',
            'Nível do sub: até o grave sumir na sala sem chamar atenção para a caixa (−3 a −9 dB no app, igual nas saídas 3 e 4).',
            'Grave embolado perto de 150 Hz: EQ paramétrico de −1 a −2 dB nas saídas 1 e 2.',
            'Depois de 15 min de música alta, toque nos cabos de força e no porta-fusível: morno é normal; quente a ponto de incomodar = mau contato ou fio fino. Desligue e confira.',
            'Salve a memória 1, exporte para o celular e preencha a tabela de medições.'
          ],
          figuras: [{ tipo: 'tabela', ref: 'medicoes' }]
        },
        {
          id: '5.5', fase: 'Usar', depende: ['5.4'], titulo: 'Uso no dia a dia', tempo: '—', risco: 'baixo', validar: true,
          acoes: [
            'Ligar: fonte já na tomada, depois ON no app. Desligar: OFF no app e só então, se quiser, a tomada (o módulo desliga pelo REM antes de faltar energia, sem estalo).',
            'Uma vez, teste a volta da energia: com o app em ON e sem música, tire a fonte da tomada, ponha de volta e anote se o processador volta ligado ou desligado.',
            'Depois de qualquer reset (Reset Audio Settings, botão RESET) ou troca de memória, confira o passa-alta das saídas 1 e 2 **antes** de tocar: sem ele, a JBL recebe grave cheio.',
            'Volume pelo celular. Níveis e EQ do app só para baixo.',
            'Depois da primeira semana, reaperte os bornes de força e de falante (com a fonte fora da tomada).'
          ],
          basico: 'O reset de áudio volta os filtros ao padrão de fábrica, sem o passa-alta das JBL. A configuração exportada para o celular (passo 4.11) traz tudo de volta.'
        },
        {
          id: '5.6', fase: 'Usar', titulo: 'Se algo der errado', tempo: '—', risco: 'medio',
          figuras: [{ tipo: 'tabela', ref: 'diagnostico' }]
        }
      ]
    }
  ],

  diagnostico: [
    { sintoma: 'Nada liga', causa: 'Fusível queimado, fonte sem tensão ou som desligado no app (modo BOB)', acao: 'Confira os fusíveis, {{p:tensao}} na régua e +12 V no REM do módulo com o app ligado.' },
    { sintoma: 'Fusível queima ao ligar', causa: 'Curto ou polaridade invertida', acao: 'Tire da tomada e refaça a conferência do passo 4.5. Não troque o fusível antes de achar a causa.' },
    { sintoma: 'Zumbido constante', causa: 'Cabo de sinal junto da rede elétrica ou loop de terra', acao: 'Afaste o RCA/P2 do cabo da tomada; teste com o notebook fora da tomada; isolador de loop de terra no P2.' },
    { sintoma: 'Distorce com grave forte', causa: 'Nível ou EQ subidos depois da regulagem, ou cone no limite do curso', acao: 'Volte níveis e EQ; refaça os passos 4.10 e 4.11; baixe o limiar das saídas 1 e 2.' },
    { sintoma: 'Sub mudo ou fraco depois de mexer na fase', causa: 'Saídas 3 e 4 com ajustes diferentes: a ponte se cancela', acao: 'Iguale fase, atraso, filtros, nível e EQ das saídas 3 e 4.' },
    { sintoma: 'JBL com grave cheio ou distorcendo no grave', causa: 'Passa-alta perdido (reset ou memória trocada) ou RCA de sub na entrada da JBL', acao: 'Confira o passa-alta das saídas 1 e 2; teste saída por saída (passo 5.2).' },
    { sintoma: 'Pouco grave no sofá', causa: 'Sub fora de fase ou uma caixa invertida', acao: 'Teste a fase em 180°; refaça o teste da pilha nas caixas.' },
    { sintoma: 'Um canal mudo', causa: 'RCA solto ou saída roteada errado no app', acao: 'Teste cada saída pelo app; troque o RCA de lugar para isolar o defeito.' },
    { sintoma: 'Cabo de força ou porta-fusível quente', causa: 'Mau contato no borne ou fio fino demais no porta-fusível', acao: 'Desligue e tire da tomada; reaperte os bornes; confira se o fio do porta-fusível tem {{p:fio_pf}}.' },
    { sintoma: 'Módulo desliga sozinho', causa: 'Calor, curto no falante ou tensão baixa', acao: 'Libere a ventilação; meça a tensão em volume alto (não pode cair abaixo de ≈11 V); confira as impedâncias.' }
  ],

  fontes: [
    { dado: 'Régua de saída e painel de entrada do SD800.4', origem: 'Fotos do usuário, 24/09/2026 · manual SD800.4 EVO (componentes/amplificadores.md)' },
    { dado: 'Régua da BOB 60A', origem: 'Fotos do usuário, 08/10/2026 · manual BOB 60A (componentes/fontes.md)' },
    { dado: 'Conector e RCA do PRO 2.4BT + AUDIO', origem: 'Fotos do usuário, 08/10/2026 · manual em componentes/manuais/' },
    { dado: 'Parâmetros e medidas da JBL 4TRMS80', origem: 'Ficha técnica impressa da caixa do produto (componentes/alto-falantes.md)' },
    { dado: 'Medidas da BS-369', origem: 'Fotos com régua e medições do usuário, 23/09/2026 (componentes/caixas.md)' },
    { dado: 'Ilustrações de procedimento (ponta de cabo, faston, porta-fusível, pilha)', origem: 'Desenhos esquemáticos próprios do modelo (documentacao/modelo/ilustracoes.js), com os valores da tabela de parâmetros' },
    { dado: 'Vista explodida da BS-369', origem: 'Medidas de componentes/caixas.md e ficha da JBL; posição das torres a validar' },
    { dado: 'Corte de 120 Hz e filtros', origem: 'Simulação de soma de 09/10/2026 (projetos/home-theater-5.1/projeto.md)' },
    { dado: 'Excursão da JBL e alvo de 11 V', origem: 'Revisão técnica de 09/10/2026 · `calc_som.py excursao` (Re 3,4 Ω; Bl 4,1; Sd 64 cm²; Fs 98 Hz; Vas 2,06 L; caixa de 3,5 L; BW2 em 120 Hz)' },
    { dado: 'Regulagem pelo sinal máximo, limitador, níveis, reset e senha', origem: 'Revisão técnica de 09/10/2026 · manual PRO 2.4BT + AUDIO, págs. 5, 11, 12, 14, 15 e 19' },
    { dado: 'Ordem de energização por ramais, conferência sem energia, fusível provisório de 5 A, porta-fusível de lâmina e silicone acético', origem: 'Análise de 10/10/2026 (projetos/home-theater-5.1/projeto.md)' },
    { dado: 'Rede elétrica exposta nos bornes 7–9 da fonte', origem: 'Foto do usuário, 08/10/2026 (componentes existentes/Fonte taramps Bob 60A)' },
    { dado: 'Mapa de tratamento da BS-369 (fotos anotadas)', origem: 'Fotos do usuário de 23/09/2026; zonas de fita, gaxeta e torres pelas medidas de componentes/caixas.md; marcas tracejadas = suposições de 23/09 a confirmar no teste da lanterna (2.3)' },
    { dado: 'Compra de 10/10 (bitolas, fusíveis, fita de espuma de 4 mm, faston amarelo, parafuso 3,5 × 19, solda no lugar da crimpagem)', origem: 'Fotos do usuário de 10/10/2026 e conferência em compras/2026-10-10-loja-fisica/conferencia.md; espessura da Adere E-105S pelo catálogo Adere (AECweb)' }
  ],

  glossario: [
    { termo: 'Atraso (delay)', busca: ['atraso'], def: 'Ajuste do processador que segura o som de uma caixa por alguns milissegundos, para o som de todas chegar junto ao sofá.' },
    { termo: 'AWG', exato: true, def: 'Escala americana de bitola: número maior, fio mais fino. 16 AWG ≈ 1,3 mm²; 13 AWG ≈ 2,5 mm².' },
    { termo: 'Bitola', busca: ['bitola', 'mm²'], def: 'Seção do cobre do cabo, em mm². É a quantidade de cobre, não o diâmetro externo do cabo.' },
    { termo: 'Blindado (cabo)', busca: ['blindad'], def: 'Cabo de sinal com uma malha metálica em volta, que protege contra ruído e zumbido.' },
    { termo: 'Bluetooth (A2DP)', busca: ['Bluetooth'], def: 'Envio de música sem fio do celular para o processador. Tem um pequeno atraso: para filme, prefira o cabo.' },
    { termo: 'Borne', busca: ['borne'], def: 'Ponto de conexão onde o fio é preso. De parafuso: o fio entra num furo e um parafuso aperta (fonte, módulo, processador, porta-fusível). De mola: uma alavanca abre e a mola segura o fio (comum em caixas prontas; a BS-369 deste projeto não tem).' },
    { termo: 'Butterworth / Linkwitz-Riley', busca: ['Butterworth', 'Linkwitz'], def: 'Tipos de filtro. Diferem na forma do corte e em como somam no cruzamento entre caixas e sub.' },
    { termo: 'Cabeça lentilha, panela e escareada', busca: ['lentilha', 'panela', 'escareada'], def: 'Formatos de cabeça de parafuso. Lentilha e panela são chatas embaixo e apertam a peça por igual; escareada é cônica e afunda num furo chanfrado.' },
    { termo: 'Capacitor', busca: ['capacitor'], def: 'Componente que guarda carga elétrica. Os da entrada do módulo se carregam com a corrente do multímetro, e a leitura em Ω sobe aos poucos.' },
    { termo: 'Caixa selada', busca: ['selada'], def: 'Caixa fechada, sem duto. O ar preso dentro funciona como mola e controla o cone; por isso não pode vazar.' },
    { termo: 'Canal (CH1–CH4)', busca: ['CH1', 'CH2', 'CH3', 'CH4'], exato: true, def: 'Cada saída de amplificação do módulo. CH1 e CH2 vão para as caixas; CH3 e CH4, juntos em ponte, para o sub.' },
    { termo: 'CCA', exato: true, def: 'Cabo de alumínio com uma capa fina de cobre. Conduz ≈60–65 % do cobre da mesma bitola e afrouxa em borne de parafuso.' },
    { termo: 'Célula fechada (espuma)', busca: ['célula fechada'], def: 'Espuma cujas bolhas não se comunicam: não deixa o ar passar. É a que veda a caixa.' },
    { termo: 'Chave X-OVER (LP / F / HP)', busca: ['X-OVER', 'chave CH', 'chaves CH', 'chaves do módulo'], def: 'Filtro fixo do módulo em 80 Hz: LP deixa só o grave, HP corta o grave, F deixa tudo passar.' },
    { termo: 'Clip', busca: ['CLIP', 'clip'], def: 'Sinal acima do máximo que o aparelho aceita: distorce. O LED INPUT CLIP do processador acende quando isso acontece.' },
    { termo: 'Conector de alavanca', busca: ['conector de alavanca', 'conectores de alavanca', 'conector de emenda'], def: 'Emenda sem ferramenta: levanta a alavanca, enfia o fio desencapado e abaixa. Aceita fios de grossuras diferentes e já é isolado.' },
    { termo: 'Continuidade', busca: ['continuidade'], def: 'Teste do multímetro que apita quando há ligação elétrica entre dois pontos (≈0 Ω).' },
    { termo: 'Crimpar', busca: ['crimp'], def: 'Prender um terminal na ponta do fio apertando com um alicate próprio, sem solda.' },
    { termo: 'Crossover', busca: ['crossover', 'cruzamento'], def: 'Divisão das frequências: o grave vai para o sub e o resto para as caixas. Neste projeto, quem faz é o processador, em 120 Hz.' },
    { termo: 'Curto (curto-circuito)', busca: ['curto-circuito', 'curto.', 'curto:', 'curto ou', 'curto entre', 'fecha curto', 'fechar curto', 'nenhum curto'], def: 'O + encostando no − (ou dois fios que não deviam se tocar). Faz o fusível abrir ou queima o aparelho.' },
    { termo: 'dB/oitava', busca: ['dB/oit'], def: 'Quão rápido um filtro corta: 12 dB/oitava corta mais suave, 24 dB/oitava mais forte.' },
    { termo: 'dBFS', exato: true, def: 'Nível de um sinal digital em relação ao máximo possível: 0 dBFS é o mais alto que um arquivo ou o Bluetooth consegue mandar.' },
    { termo: 'Duto (caixa dutada)', busca: ['duto'], def: 'Abertura na caixa que reforça o grave perto de uma frequência (Fb). Abaixo dela, o cone fica quase solto: por isso o subsônico.' },
    { termo: 'EQ paramétrico', busca: ['EQ'], exato: true, def: 'Ajuste fino do processador que sobe ou baixa uma faixa estreita de frequência, por exemplo −2 dB em 150 Hz.' },
    { termo: 'Estanhar', busca: ['estanh'], def: 'Cobrir a ponta do fio com solda. Não use em borne de parafuso: a solda cede com o aperto.' },
    { termo: 'Fase (0° / 180°)', busca: ['fase'], def: 'Inverte o sentido do movimento do sub. Muda como ele soma com as caixas; fica a posição que dá mais grave no sofá.' },
    { termo: 'Faston', busca: ['faston'], def: 'Terminal chato de encaixe. O falante tem o macho; no fio vai o fêmea.' },
    { termo: 'Fb (sintonia do duto)', busca: ['Fb'], exato: true, def: 'Frequência em que o duto da caixa trabalha. Perto dela, o cone quase para e quem toca é o duto.' },
    { termo: 'Fc (ressonância da caixa)', busca: ['Fc'], exato: true, def: 'Frequência em que o falante dentro da caixa ressoa. Abaixo dela o grave cai. Nas BS-369 com a JBL, ≈124 Hz.' },
    { termo: 'Flange', busca: ['flange'], def: 'Aba metálica do alto-falante, onde ficam os furos dos parafusos.' },
    { termo: 'Frequência de corte', busca: ['frequência de corte', 'corte em'], def: 'Frequência em que um filtro começa a atuar. Aqui, 120 Hz entre caixas e sub.' },
    { termo: 'Friso', busca: ['friso'], def: 'Listra ou relevo num dos fios do cabo paralelo. Marca qual é o +.' },
    { termo: 'Fusível midi, maxi, ANL e de lâmina', busca: ['midi', 'maxi', 'ANL', 'lâmina'], def: 'Padrões de fusível. Midi e ANL são presos por parafuso; maxi e os de lâmina (mini, média) são de encaixe. Um padrão não serve no porta-fusível do outro.' },
    { termo: 'Gaxeta', busca: ['gaxeta'], def: 'Tira de espuma ou borracha apertada entre duas peças (aqui, a flange da JBL e o plástico) para o ar não passar.' },
    { termo: 'Ganho', busca: ['ganho', 'GAIN'], def: 'Ajuste que casa o nível do sinal com a entrada do módulo. Não é volume.' },
    { termo: 'Ilhós (ponteira)', busca: ['ilhós'], def: 'Tubo metálico crimpado na ponta do cabo flexível para ele entrar firme em borne de parafuso.' },
    { termo: 'Impedância (Ω)', busca: ['Ω', 'ohm', 'impedância'], def: 'A carga que o falante representa para o amplificador, em ohms (Ω). Os falantes deste projeto são de 4 Ω.' },
    { termo: 'Jumper', busca: ['jumper'], def: 'Pedaço curto de fio que liga dois bornes do mesmo aparelho. Aqui, o +12 V ao REM IN do processador.' },
    { termo: 'Limitador', busca: ['limitador'], def: 'Função do processador que impede o sinal de passar de um nível máximo (o limiar). Aqui, o limiar fica no ponto da regulagem e serve de teto.' },
    { termo: 'Loop de terra', busca: ['loop de terra'], def: 'Zumbido constante que aparece quando o sinal passa por aparelhos aterrados em pontos diferentes.' },
    { termo: 'Manta asfáltica', busca: ['asfáltica'], def: 'Manta autoadesiva pesada que, colada nas paredes da caixa, tira a vibração do plástico.' },
    { termo: 'Modo BOB', busca: ['modo BOB', 'BOB)'], def: 'Processador com o REM IN ligado ao +12 V; o som liga e desliga pelo app, sem rádio.' },
    { termo: 'NBR NM 247-3 e INMETRO', busca: ['NBR', 'INMETRO'], exato: true, def: 'Norma brasileira dos cabos flexíveis de até 750 V e o selo que certifica o cabo. Garantem cobre e bitola reais.' },
    { termo: 'OFC', exato: true, def: 'Cobre livre de oxigênio: um cobre mais puro, que conduz ≈1 % a mais que o comum. Em casa não faz diferença.' },
    { termo: 'P2', exato: true, def: 'Plugue de 3,5 mm, o de fone de ouvido. O estéreo tem 2 anéis isolantes e 3 contatos.' },
    { termo: 'Passa-alta / passa-baixa', busca: ['passa-alta', 'passa-baixa'], def: 'Filtros que deixam passar só o que fica acima (alta) ou abaixo (baixa) da frequência de corte.' },
    { termo: 'Polaridade', busca: ['polaridade'], def: 'Qual fio é o + e qual é o −. Trocada numa só caixa, os graves das duas se cancelam.' },
    { termo: 'Ponta agulha / ponta broca', busca: ['ponta agulha', 'ponta broca'], def: 'Pontas de parafuso. Agulha é fina e serve para plástico e madeira; broca fura chapa de metal.' },
    { termo: 'Ponte (bridge)', busca: ['ponte', 'BRIDGE'], def: 'Dois canais do módulo ligados num só falante, somando a potência. Exige carga de 4 Ω ou mais no SD800.4.' },
    { termo: 'Porta-fusível', busca: ['porta-fusível'], def: 'Suporte que segura o fusível no meio do cabo de força.' },
    { termo: 'Ramal', busca: ['ramal', 'ramais'], def: 'Cada caminho de energia que sai da fonte com o seu fusível: um para o processador, outro para o módulo.' },
    { termo: 'RCA', exato: true, def: 'Conector de sinal de áudio, normalmente branco (esquerdo) e vermelho (direito).' },
    { termo: 'Re', exato: true, busca: ['Re '], def: 'Resistência da bobina do falante medida com o multímetro; fica um pouco abaixo da impedância nominal.' },
    { termo: 'Régua de bornes', busca: ['régua'], def: 'Fileira de bornes lado a lado. A da fonte tem 9 (AC, terra, 3 positivos e 3 negativos); a de saída do módulo tem 11.' },
    { termo: 'REM', exato: true, def: 'Fio de liga/desliga remoto: com +12 V nele, o aparelho liga.' },
    { termo: 'Silicone acético / neutro', busca: ['acético', 'neutro'], def: 'Tipos de cura do silicone. O acético solta ácido (cheiro de vinagre) enquanto cura e corrói o metal numa caixa fechada; o neutro, não.' },
    { termo: 'Solda fria', busca: ['solda fria'], def: 'Emenda em que o estanho não escorreu para dentro dos fios: fica fosca, com bola por cima, e solta ou faz mau contato.' },
    { termo: 'Subsônico', busca: ['subsônico'], def: 'Passa-alta muito baixo no sub, para não gastar curso do cone com frequências que não se ouvem.' },
    { termo: 'Termorretrátil (tubo)', busca: ['termorretrát'], def: 'Tubo plástico que encolhe com calor e isola uma emenda. Entra no fio antes de soldar.' },
    { termo: 'Torres (da caixa)', busca: ['torre'], def: 'Pinos de plástico com rosca por dentro da caixa, onde entram os parafusos que a fecham.' },
    { termo: 'Triaxial', busca: ['triaxial'], def: 'Alto-falante com o cone do médio-grave e dois tweeters no mesmo conjunto.' },
    { termo: 'Trimpot', busca: ['trimpot'], def: 'Pequeno ajuste giratório de chave de fenda. Na fonte, regula a tensão de saída.' },
    { termo: 'Tweeter', busca: ['tweeter'], def: 'Alto-falante pequeno que reproduz os agudos.' },
    { termo: 'V AC / V DC', busca: ['V AC', 'V DC'], exato: true, def: 'Tensão alternada (tomada, sinal de áudio) e tensão contínua (saída de 12 V da fonte). O multímetro tem uma escala para cada.' },
    { termo: 'Xmax', exato: true, def: 'Deslocamento máximo do cone (de pico, para um lado) em que o falante ainda trabalha limpo. Passar dele distorce; muito além, o cone bate no fim do curso.' }
  ],

  versoes: [
    { v: '2.7', data: '17/10/2026', nota: 'Correção do usuário: 40–50 g de fibra siliconada de almofada ocupam muito mais que a caixa. **Fibra passa a ser medida pelo volume** (forrar fundo e paredes da traseira soltas, camada de ≈3–4 cm, vão de 2–3 cm atrás do ímã, nada na borda de encaixe); a quantidade estimada cai para ≈10–20 g, e a balança serve para a 2ª caixa receber o mesmo que coube na 1ª. Mexeu no parâmetro `fibra`, na ficha M16, nos passos 2.8 e 2.11 e na medição da fibra.' },
    { v: '2.6', data: '11/10/2026', nota: 'Pedido do usuário ao começar os cabos: a fase "Preparar os cabos" virou **um passo só, 4.1** (posicionar, medir, cortar, etiquetar, desencapar, porta-fusíveis), com a tabela de conexões e a de corte dentro dele. Os passos seguintes da etapa 4 desceram três números (conector do processador 4.2 … travar o limitador 4.11). Fusíveis entram em 4.7 e 4.8. **Comprimentos de corte definidos** para todos os cabos (C1 15 cm, C2 40 cm, C3 60 cm, C4/C5/C7 50 cm, C6 4 cm, F1/F2 3,0 m, F3 1,0 m), com o leiaute assumido: fonte, módulo e processador lado a lado, módulo no meio.' },
    { v: '2.5', data: '11/10/2026', nota: 'Passo **2.4 Tampar os furos e aberturas** novo (fita asfáltica: placa dos bornes e furos extras da furação; foto da moldura de 11/10). Os passos seguintes da etapa 2 subiram um número (silicone 2.5, fita nas paredes 2.6, gaxeta 2.7, fibra 2.8, faston 2.9, JBL 2.10, fechar 2.11, validar 2.12). Um material por função: fita tampa (2.4) e amortece (2.6), silicone veda bordas e frestas (2.5), espuma é gaxeta (2.7), fibra é enchimento (2.8). O cabo pode ser passado já no 2.5 para o furo curar junto.' },
    { v: '2.4', data: '11/10/2026', nota: 'Medições de 11/10: terminais da JBL de 6,3 mm nos dois (faston nos dois); fio do porta-fusível de 40 A ≈4 mm² (aceito); caixa do sub tem duto (Fb a medir). **Traseira da BS-369 sem bornes:** o cabo de falante entra pelo furo pequeno com nó de alívio de tração e vai direto aos faston (I1/I2 redefinidos, 2.8 reescrito); rasgos e furo maior da placa fechados com fita (2.5) e silicone na borda (2.4, que passa a depender de 2.5). Torres não usadas na fixação da JBL (furos novos na moldura).' },
    { v: '2.3', data: '10/10/2026', nota: 'Fibra com desenhos: pesar num saquinho e abrir os tufos (2.7, sequência) e certo × errado da acomodação na traseira em corte (2.10), além da foto marcada. Ilustrações novas no modelo: fibra-pesar, fibra-afofar, fibra-acomodar, fibra-socada.' },
    { v: '2.2', data: '10/10/2026', nota: 'Fibra explicada de ponta a ponta: 2.7 vira "Preparar a fibra (pesar e separar)", deixando claro que ela só entra na caixa no 2.10; o 2.10 ganhou as ações de acomodar (solta, fundo e paredes, vão atrás do ímã) e uma foto marcada da traseira; ficha M16 reescrita.' },
    { v: '2.1', data: '10/10/2026', nota: 'Navegação. **Menu lateral** em todas as partes (no celular, botão Menu): partes do guia com progresso e a árvore da parte atual: na montagem, Onde estou, Mapa, etapas → fases → passos com o estado de cada um; na lista de compras, os itens por situação; na referência, as seções. **Vistas por endereço** na montagem: `#passo-2-4` abre só aquele passo (com trilha Etapa › Fase, Anterior/Próximo e setas do teclado), `#etapa-2` abre a etapa inteira, sem nada abre o painel e o mapa; "Ver tudo numa página" mostra o guia contínuo, como no PDF. O modo "passo a passo" antigo saiu. Modelo v1.9.' },
    { v: '2.0', data: '10/10/2026', nota: 'Fases 2 e 3 da revisão de navegação. **Etapas organizadas pelo trabalho, com fases:** Caixas (preparar → tratar → montar → validar, com o tratamento reunido na fase "tratar"), Cabo do sub (etapa 3, independente), Eletrônica (preparar os cabos → ligar → conferir e energizar → configurar e regular) e Integração (ligar → testar → usar). Renumeração: 3.1–3.5 viraram 2.3–2.7, os antigos 2.3–2.5 viraram 2.8–2.10, "fechar e validar" foi dividido (2.10 / 2.11), o cabo do sub virou 3.1–3.2 e a ligação dos RCA (4.7) passou para antes da conferência sem energia (4.8). **Dependências navegáveis:** cada passo declara de quais depende e, na tela, mostra o estado (feito · pode fazer agora · esperando) com links; a cura do silicone conta o tempo a partir de quando 2.4 foi concluído. **Painel "Onde estou"** na entrada e no topo da montagem: próximo passo recomendado, o que pode fazer agora (inclusive em paralelo), o que está esperando e as pendências (medições e compras adiadas). Mapa do trabalho com as fases. Modelo v1.8.' },
    { v: '1.9', data: '10/10/2026', nota: 'Fase 1 da revisão de navegação. **Mapa de tratamento da caixa** em fotos reais anotadas (traseira e moldura, com chave por cor) no passo 3.1 novo, **teste da lanterna**, que pode ser feito agora e decide onde vai silicone, fita ou gaxeta; os passos 3.2 a 3.5 foram renumerados. Cada material de tratamento (M13, M15–M18) ganhou o bloco **"Onde, como e quando"** (para quê, onde, como, quando, cuidados, usado em). Os passos passaram a listar os **materiais** que usam, com link para a ficha. Modelo: componente de foto anotada, bloco de uso e materiais por passo.' },
    { v: '1.8', data: '10/10/2026', nota: 'Compra de 10/10 conferida pelas fotos: todos os materiais em mãos (10 mm², 40 A laranja, 5 A provisório, paralelo 2 × 2,5 sem friso, fita Adere de 4 mm, Vedacit de 1 mm, parafuso 3,5 × 19, faston amarelo, fibra, silicone acético, 2 RCA). **Tratamento das caixas** virou a etapa 3, separada (silicone, fita asfáltica em duas camadas, gaxeta cortada ao meio, fibra pesada); as etapas seguintes foram renumeradas (eletrônica 4, integração 5). Terminais faston passam a ser **soldados** (passo 2.3) e a emenda do sub também (2.7): sem alicate de terminais e sem conector de alavanca (M21 vira plano B). Fio do porta-fusível de 40 A: aceito com ≥ 4 mm² (parâmetro novo, com a conta), a medir em 11/10, junto com a altura da torre e a largura dos terminais da JBL (medições novas). Fichas com as fotos reais dos itens comprados; M23 (fusíveis de reposição) e M24 (cabos de reserva) novos.' },
    { v: '1.7', data: '10/10/2026', nota: 'Montagem reorganizada pelo que depende de quê: **Caixas acústicas** (etapa 2) e **Sistema eletrônico** (etapa 3) são independentes e podem andar em paralelo; a **Integração** (etapa 4) reúne só o que precisa das duas. A eletrônica é ligada, configurada e regulada sem nenhum falante (não há mais o "desligue os falantes" da regulagem), com as chaves do módulo já em F. Energia por ramais: fonte sozinha com ajuste de 13,8 V e fusíveis fora (3.9), depois o processador (3.10), depois o módulo (3.11). Conferência com o multímetro virou passo próprio (3.7). Silicone acético com cura de 24–48 h com a caixa aberta (2.3); fusível de 5 A provisório no processador; porta-fusível de lâmina do 40 A só com fio de 6 mm² ou mais; caixa validada sozinha (2.6); toque nos cabos depois de 15 min de música (4.4). Campo novo "Antes, precisa" nos passos com dependência real.' },
    { v: '1.6', data: '09/10/2026', nota: 'Kit de solda (M22, chega em 10/10): o multímetro (M19) passa de "comprar" para "tem", porque vem no kit (compre um só se o kit não chegar antes da parte elétrica); passo 2.8 novo, a emenda do sub soldada com termorretrátil, como alternativa ao conector de alavanca, que continua na lista como plano A.' },
    { v: '1.5', data: '09/10/2026', nota: 'Revisão técnica aplicada. Ganho regulado com o sinal máximo (celular a 100 %, tom a 0 dBFS) e limitador travado no ponto regulado (passo 3.12 novo); alvo das JBL de 15,5 para 11 V (a excursão tinha sido calculada em valor eficaz: o Xmax chega com ≈12 W, não 24 W); saídas 3 e 4 sempre iguais; aviso da rede elétrica exposta na régua da fonte; teste saída por saída; teste do duto do sub e subsônico de 30 Hz, 24 dB/oit até saber o tipo de caixa; uso no dia a dia e cuidados com reset (passo 3.14 novo); antes da compra, testar se os cabos cabem nos bornes (1,5 mm² e 6 mm² como alternativas). Foto do conector de alavanca (M21), do Wikimedia Commons.' },
    { v: '1.4', data: '09/10/2026', nota: 'Cabo do sub: o atual (≈1–1,5 mm² emendado com fita a um trecho de ≈0,5 mm² com plugue) passa a ser trocado por 2 × 2,5 mm² com conector de alavanca no passo 2.7 novo, com teste da pilha para achar o +. Cabo paralelo de 6 para 7 m; conector de emenda de alavanca (M21) na lista de compras. No PDF, os passos 2.3 e 2.4 deixaram de transbordar (painéis de figura mais baixos na impressão).' },
    { v: '1.3', data: '09/10/2026', nota: 'Glossário ampliado de 11 para 55 termos (borne, régua de bornes, bitola, AWG, OFC, crimpar, fusíveis midi/maxi/lâmina, continuidade e outros); cada parte ganhou, no fim, "Termos usados nesta parte", só com os termos que aparecem nela. Guia movido para projetos/home-theater-2.1.' },
    { v: '1.2', data: '09/10/2026', nota: 'Visualização mais leve: o guia virou três partes (lista de compras, guia de montagem, referência técnica) com página de entrada; o essencial à vista e o detalhe recolhido; letra maior, mais espaço, tabelas de até 4 colunas; modo passo a passo na montagem; um passo por página no PDF; anexo de detalhes no PDF de compras.' },
    { v: '1.1', data: '09/10/2026', nota: 'Compras item por item: cada material com foto, para que serve, o que exigir, como conferir na loja e a compra errada mais comum (cabos de cobre × CCA e OFC, padrão de fusível, silicone neutro, faston, RCA, P2 estéreo).' },
    { v: '1.0', data: '09/10/2026', nota: 'Revisão final (Fase C): conferência cruzada automática de cabos, bornes, parâmetros e ilustrações; passo 3.11 passa a desligar a fonte antes de mexer nos cabos; teste de continuidade do 3.7 detalhado cabo por cabo; aviso de audição; número de página no PDF.' },
    { v: '0.2', data: '09/10/2026', nota: 'Fase B: vista explodida da BS-369 com a JBL, procedimentos em painéis (ponta de cabo, faston), certo × errado, porta-fusível e teste da pilha.' },
    { v: '0.1', data: '09/10/2026', nota: 'Esqueleto do modelo com os dados do 2.1. Mapas de bornes do SD800.4, da BOB 60A e do PRO 2.4BT desenhados a partir das fotos do usuário. Vista da BS-369 pendente.' }
  ]
};
