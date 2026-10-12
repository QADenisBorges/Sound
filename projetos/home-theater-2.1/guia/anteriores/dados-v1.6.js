/* Dados do guia — Home Theater 2.1 (fase 1 do projeto home-theater-5.1)
   Fonte do conteúdo: ../montagem-2.1.md, ../doc-rascunho-fotos-e-conexoes.md, ../../../componentes/*.md
   Formato: ver ../../../documentacao/modelo/LEIAME.md */
window.GUIA = {
  meta: {
    id: 'ht21',
    tipo: 'Guia de montagem',
    titulo: 'Home Theater 2.1',
    resumo: 'Duas caixas JBL 4TRMS80 em carcaças Britânia BS-369 e um sub de 8", amplificados por um SD800.4 alimentado por fonte. Montagem em três etapas: materiais, preparação e montagem.',
    versao: '1.6',
    data: '09/10/2026',
    autor: 'Denis',
    nivel: 'Intermediário',
    tempo: '7–9 h',
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
    { id: 'fus1', rotulo: 'Fusível do processador', valor: '1', un: 'A', como: 'Valor do manual do processador.', fonte: 'Manual PRO 2.4BT + AUDIO' },
    { id: 'bit_forca', rotulo: 'Cabo de força e terra', valor: '10', un: 'mm²', como: 'Manual do módulo; ou calcule: `calc_som.py cabo --corrente <A> --comprimento <m>`. Se o 10 mm² não entrar no borne da fonte, um cabo de 6 mm² serve com o fusível de 40 A (queda de ≈0,25 V a 40 A em 2 m).', fonte: 'Manual SD800.4 · revisão técnica de 09/10/2026' },
    { id: 'bit_fal', rotulo: 'Cabo de falante', valor: '2,5', un: 'mm²', como: 'Manual do módulo. Até ~5 m, 2,5 mm² serve para qualquer caixa de 4 Ω. Se não couber no borne da caixa, 1,5 mm² serve: em 2,5 m soma 0,06 Ω ida e volta (−0,15 dB, inaudível).', fonte: 'Manual SD800.4 (EVO6) · revisão técnica de 09/10/2026' },
    { id: 'bit_proc', rotulo: 'Fio do processador', valor: '1,5', un: 'mm²', como: 'Manual do processador.', fonte: 'Manual PRO 2.4BT + AUDIO' },
    { id: 'dist_fus', rotulo: 'Distância máxima fusível–fonte', valor: '30', un: 'cm', como: 'O fusível fica o mais perto possível de quem fornece a corrente.', fonte: 'Prática de instalação' },
    { id: 'imp_sat', rotulo: 'Impedância das caixas L/R', valor: '4', un: 'Ω', como: 'Etiqueta do falante. O multímetro mede um pouco menos (Re).', fonte: 'Ficha JBL 4TRMS80 (Re 3,4 Ω)' },
    { id: 'imp_sub', rotulo: 'Impedância do sub (ponte)', valor: '4', un: 'Ω', como: 'Em ponte, nunca abaixo do mínimo do módulo (4 Ω no SD800.4).', fonte: 'Manual SD800.4 · medição' },
    { id: 'ganho_sat', rotulo: 'Ganho das caixas L/R', valor: '11', un: 'V AC', como: 'V = √(P × R): 30 W × 4 Ω → 11 V. Quem limita aqui é o curso do cone, não o calor: com o filtro em 120 Hz, a JBL chega ao Xmax (1,75 mm de pico) com ≈12 W perto de 122 Hz. Para outro falante, rode `calc_som.py excursao` com os dados dele e da caixa.', fonte: '`calc_som.py excursao` · revisão técnica de 09/10/2026' },
    { id: 'ganho_sub', rotulo: 'Ganho do sub em ponte', valor: '40', un: 'V AC', como: 'Tabela do fabricante (ponte 4 Ω / 400 W) ou V = √(P × R).', fonte: 'Manual SD800.4' },
    { id: 'corte', rotulo: 'Frequência de corte', valor: '120', un: 'Hz', como: 'Perto da frequência de ressonância da caixa satélite (Fc ≈ 124 Hz). Confira por simulação.', fonte: 'Simulação de 09/10/2026' },
    { id: 'filtro_sat', rotulo: 'Filtro das caixas L/R', valor: 'Butterworth 12 dB/oit', un: '', como: 'Caixa selada + filtro de 12 dB = corte acústico de 24 dB/oit.', fonte: 'Simulação de 09/10/2026' },
    { id: 'filtro_sub', rotulo: 'Filtro do sub', valor: 'Linkwitz-Riley 24 dB/oit', un: '', como: 'Padrão para somar com as caixas no cruzamento.', fonte: 'Simulação de 09/10/2026' },
    { id: 'subsonico', rotulo: 'Subsônico do sub', valor: '30', un: 'Hz, 24 dB/oit', como: 'Depende da caixa (teste do passo 3.13). Selada: 25 Hz basta. Com duto: ≈0,75–0,8 × a frequência do duto (Fb), 24 dB/oit. Sem conclusão: 30 Hz, 24 dB/oit.', fonte: 'Revisão técnica de 09/10/2026 · tipo da caixa do sub a confirmar' },
    { id: 'tom', rotulo: 'Tom de teste do ganho', valor: '60 Hz', un: 'a 0 dBFS', como: 'Frequência do manual do módulo, no nível mais alto que um arquivo digital pode ter (0 dBFS), igual nos dois canais.', fonte: 'Manual SD800.4 · revisão técnica de 09/10/2026' },
    { id: 'volume_teste', rotulo: 'Volume da fonte na regulagem', valor: '100 %', un: '', como: 'O maior sinal que pode chegar ao processador: celular no máximo, com equalizador e efeitos do celular desligados. Regulando no máximo, não existe volume acima da regulagem. O notebook pelo P2, quando entrar, também é medido a 100 %.', fonte: 'Revisão técnica de 09/10/2026 · manual PRO 2.4BT + AUDIO (saída máxima de 2,1 V RMS; nível de saída até +15 dB)' },
    { id: 'limiar', rotulo: 'Limiar do limitador', valor: 'No ponto regulado', un: '', como: 'Com o tom de referência tocando, baixe o limiar de cada saída até o LED dela acender e suba até apagar. O limitador passa a cortar só o que passaria da regulagem.', fonte: 'Manual PRO 2.4BT + AUDIO, pág. 11 (limitador e LEDs de saída) · revisão técnica de 09/10/2026' },
    { id: 'fibra', rotulo: 'Enchimento por caixa', valor: '40–50', un: 'g', como: '~10–15 g de fibra por litro de caixa (a BS-369 tem ~3,5 L).', fonte: 'componentes/caixas.md' },
    { id: 'broca', rotulo: 'Broca piloto', valor: '2,5', un: 'mm', como: '~70 % do diâmetro do parafuso (3,5 mm) para plástico.', fonte: 'Prática' }
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
    { id: 'M05', item: 'Carcaça Britânia BS-369', spec: 'Selada, ~3,5 L, bornes de mola', qtd: '2', sit: 'tem',
      alerta: 'Bornes de mola e torres dos cantos inteiros',
      foto: { src: 'img/m05-bs369.jpg', alt: 'Moldura frontal prateada da caixa Britânia BS-369', credito: 'Foto do usuário, 23/09/2026' },
      papel: 'Caixa das JBL. Precisa ficar bem vedada: é ela que controla o grave do falante.',
      conferir: ['Duas carcaças completas (moldura prata + traseira preta + tela).', 'Bornes de mola funcionando e torres dos cantos inteiras.', 'Furo do borne de mola: o cabo de 2,5 mm² flexível tem ≈2,0 mm de cobre; o de 1,5 mm², ≈1,6 mm. Leve uma traseira à loja e teste.'] },
    { id: 'M06', item: 'Sub Protech 8" em caixa', spec: '4 Ω, ligado em ponte; plugue de 2 vias; caixa selada ou com duto (a confirmar)', qtd: '1', sit: 'tem',
      alerta: 'O cabo atual até o módulo será trocado (passo 2.7)',
      foto: { src: 'img/m06-sub.jpg', alt: 'Caixa do subwoofer Protech de 8 polegadas', credito: 'Foto do usuário, 24/09/2026' },
      papel: 'Graves abaixo de {{p:corte}}. O cabo que veio com ele (azul/branco de ≈1–1,5 mm², emendado com fita isolante a um trecho vermelho/preto de ≈0,5 mm² com plugue) será trocado por 2 × 2,5 mm² no passo 2.7: a emenda de fita pode soltar, e em ponte os dois fios carregam sinal.',
      conferir: ['Fio solto do módulo, multímetro em Ω: 3–3,6 Ω (4 Ω).', 'Plugue de 2 vias firme, com os pinos sem escurecer (oxidação).', 'Procure um duto (abertura) na caixa, inclusive atrás do painel escuro. Com duto, o subsônico muda (passo 3.13).'] },

    { id: 'M07', item: 'Cabo de força 10 mm², vermelho e preto', spec: 'Cobre (não CCA), 10 mm² de cobre, flexível', qtd: '1 m vermelho + 1 m preto', sit: 'comprar',
      pedir: 'Cabo flexível de cobre **10 mm²**: 1 m vermelho e 1 m preto (6 mm² se o 10 não entrar no borne da fonte)',
      alerta: 'Raspe a ponta: tem que ser cobre por dentro (nada de CCA)', onde: 'Material elétrico', preco: 'R$ 30–50',
      foto: { src: 'img/m07-cabo-10mm2.jpg', alt: 'Rolos de cabo flexível de cobre', credito: 'Imagem do anúncio de referência (Mercado Livre)', licenca: 'uso pessoal: trocar antes de compartilhar', url: 'https://produto.mercadolivre.com.br/MLB-3871194095-cabo-flexivel-10mm-rolo-1m-fio-eletrico-100-cobre-por-metro-_JM', legenda: 'Cabo flexível de 750 V, vendido por metro. O anúncio diz "10mm"; confira se o isolamento traz "10 mm²".' },
      papel: 'Leva até 40 A da fonte ao módulo (+12 V e terra). É o cabo que mais trabalha no sistema.',
      exigir: ['Condutor de **cobre** nos dois (o manual do módulo proíbe CCA).', '**10 mm²** impresso no isolamento: é a seção de cobre, não o diâmetro.', 'Flexível (muitos fios finos), não rígido.', 'Vermelho para o +, preto para o − (ou marque com fita).'],
      conferir: ['Raspe ou corte a ponta: tem que ser cor de cobre **por dentro** também.', 'Leia a marcação: "10 mm²", "750 V" e selo INMETRO (cabo de material elétrico).', 'Pegue na mão: alumínio pesa 1/3 do cobre. Cabo grosso e leve é suspeito.', 'Teste uma ponta no borne da fonte (leve a BOB). Se o 10 mm² não entrar, compre **6 mm²**: um cabo só basta.'],
      armadilha: '"Cabo de 10 mm" de loja de som que mede 10 mm **por fora** e tem 4–6 mm² de cobre; embalagem escrita "OFC" com alumínio (CCA) por dentro.',
      nota: '**OFC** (cobre livre de oxigênio) é um cobre mais puro e conduz ≈1 % a mais que o cobre comum. Em casa não faz diferença: o que importa é ser cobre e ter a bitola real. O cabo flexível de 750 V de material elétrico atende e costuma custar menos. Se o 10 mm² não entrar no borne da fonte, **um** cabo de 6 mm² serve: o fusível de 40 A o protege, e a queda em 2 m é de ≈0,25 V a 40 A (com música, a corrente média fica em 3–8 A).' },
    { id: 'M08', item: 'Porta-fusível + fusível de 40 A', spec: 'Mesmo padrão nos dois; 40 A; entrada para 10 mm²', qtd: '1 + 1', sit: 'comprar',
      pedir: 'Porta-fusível **midi** + fusível **midi de 40 A**, do mesmo padrão',
      alerta: 'Encaixe o fusível no porta-fusível ainda na loja', onde: 'Autopeças / som automotivo', preco: 'R$ 20–40',
      foto: { src: 'img/m08-porta-fusivel-midi.jpg', alt: 'Porta-fusíveis midi com tampa transparente', credito: 'Imagem do anúncio de referência (Mercado Livre)', licenca: 'uso pessoal: trocar antes de compartilhar', url: 'https://www.mercadolivre.com.br/porta-fusivel-midi-universal-para-sistemas-eletricos-carro/up/MLBU4120705403?pdp_filters=item_id%3AMLB4796991513', legenda: 'Porta-fusível midi: o fusível é preso por dois parafusos, não encaixado.' },
      papel: 'Protege o cabo de força: num curto, o fusível abre antes de o cabo esquentar e pegar fogo.',
      exigir: ['Fusível e porta-fusível do **mesmo padrão**: midi com midi, maxi com maxi, ANL com ANL.', 'Fusível de **{{p:fus40}}** (o valor do manual do módulo).', 'Porta-fusível que aceite o cabo de 10 mm² (borne de parafuso).'],
      conferir: ['Encaixe o fusível no porta-fusível ainda na loja.', 'Veja o valor gravado no corpo do fusível.', 'Leve um reserva (vem em kit de 2).'],
      armadilha: 'Fusível **maxi** (lâmina grande, de encaixe) não serve em porta-fusível **midi** (fusível de parafuso). Isso aconteceu na cotação deste projeto. Fusível maior "por garantia" (60–80 A) não protege o cabo de 10 mm².' },
    { id: 'M09', item: 'Porta-fusível de lâmina + fusível de 1 A', spec: 'Lâmina média (ATO/ATC); 1 A; fio ≥ 1,5 mm²', qtd: '1 + 1', sit: 'comprar',
      pedir: 'Porta-fusível de lâmina **média** com fio + fusível de lâmina média de **1 A**',
      alerta: 'Lâmina mini e média não se encaixam: confira o tamanho', onde: 'Autopeças', preco: 'R$ 8–15',
      foto: { src: 'img/m09-fusiveis-lamina.jpg', alt: 'Fusíveis de lâmina de tamanhos diferentes', credito: 'havarhen, Wikimedia Commons', licenca: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Electrical_fuses,_plug-in_type,_different_sizes.jpeg', legenda: 'Lâminas de tamanhos diferentes: mini, média e maxi não se encaixam umas nas outras.' },
      papel: 'Protege o fio fino de alimentação do processador (que consome só 70 mA).',
      exigir: ['Fusível e porta-fusível do **mesmo tamanho de lâmina**: média (ATO/ATC) é a mais comum.', 'Fusível de **{{p:fus1}}** (2 A se não houver 1 A).', 'Porta-fusível "em linha", com fio de pelo menos 1,5 mm².'],
      conferir: ['Encaixe o fusível no porta-fusível na loja.', 'O valor vem gravado no topo do fusível.'],
      armadilha: 'Lâmina **mini** e lâmina **média** parecem iguais em foto de anúncio e não se encaixam uma na outra. Fusível de 10–15 A no lugar de 1 A não protege o fio fino.' },
    { id: 'M10', item: 'Cabo paralelo 2 × 2,5 mm² (ou 2 × 1,5 mm²)', spec: 'Cobre, 2,5 mm² por condutor (1,5 mm² se o borne da caixa não aceitar), com friso de polaridade', qtd: '7 m de cabo', sit: 'comprar',
      pedir: 'Cabo paralelo cristal **2 × 2,5 mm²** (ou **2 × 1,5 mm²**, se o 2,5 não couber no borne da caixa): **7 metros** (cada metro já tem os dois fios)',
      alerta: 'Antes de comprar, teste se o cabo cabe no borne de mola da caixa', onde: 'Material elétrico', preco: 'R$ 21–35',
      foto: { src: 'img/m10-cabo-falante.jpg', alt: 'Carretel de cabo de falante transparente', credito: 'Matthieu149, Wikimedia Commons', licenca: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Speaker_wire.JPG', legenda: 'Cabo transparente: dá para ver o cobre. Este é 16 AWG (≈1,3 mm²), mais fino que o pedido aqui (2,5 mm² ≈ 13 AWG).' },
      papel: 'Leva o som do módulo até cada caixa L/R e até o sub (troca o cabo fino com emenda que veio com ele).',
      exigir: ['Cobre (o transparente "cristal" deixa ver a cor do condutor).', '**2,5 mm²** por condutor (ou 1,5 mm², ver a dica), impresso no isolamento.', 'Um dos condutores com **friso** ou listra (marca o +).'],
      conferir: ['Leve uma traseira da BS-369 e teste uma ponta no borne de mola (ou use uma broca de 2 mm como calibre).', 'Raspe a ponta: cobre por dentro.', 'Procure o friso antes de pagar.', 'Meça a distância do módulo até cada caixa e até o sub e some 10 % antes de comprar.'],
      armadilha: 'Cabo "cristal" muito barato de alumínio (CCA) e cabo vendido como "2,5 mm" que é o diâmetro, não a seção. Cabo sem friso faz você inverter a polaridade sem perceber.',
      nota: 'São **7 m de cabo**, não 14: o cabo paralelo é vendido pelo metro e cada metro já traz os dois fios (+ e −) grudados. Dá ≈2,5 m até cada caixa e ≈1 m para o sub, com pouca sobra. Se o 2,5 mm² não couber no borne de mola, compre 7 m de **2 × 1,5 mm²** e use em tudo, inclusive no sub: em 2,5 m ele soma 0,06 Ω ida e volta (−0,15 dB, inaudível). Desencapar menos não resolve a grossura.' },
    { id: 'M11', item: 'Fio flexível 1,5 mm²', spec: 'Cobre, flexível', qtd: '~2 m', sit: 'comprar',
      pedir: 'Fio flexível de cobre **1,5 mm²**: 2 metros',
      alerta: 'Flexível (muitos fios finos), não rígido', onde: 'Material elétrico', preco: 'R$ 4–8',
      foto: { src: 'img/m11-fio-flexivel.jpg', alt: 'Quadro de detalhes de cabo flexível de 750 V com corte mostrando os fios de cobre', credito: 'Imagem do anúncio de referência (Mercado Livre)', licenca: 'uso pessoal: trocar antes de compartilhar', url: 'https://produto.mercadolivre.com.br/MLB-3871194095-cabo-flexivel-10mm-rolo-1m-fio-eletrico-100-cobre-por-metro-_JM', legenda: 'Mesmo tipo de cabo, em outra bitola: flexível (classe 4 ou 5), norma NBR NM 247-3, muitos fios finos de cobre.' },
      papel: 'Alimentação, terra e REM do processador (C4, C5, C6, C7).',
      exigir: ['Cobre **flexível** (muitos fios finos).', '1,5 mm² (para o jumper C6, 0,75 mm² se dois fios não couberem no borne).'],
      conferir: ['Leia a bitola no isolamento.', 'Dobre a ponta: não pode ser um fio único e duro.'],
      armadilha: 'Fio **rígido** (um fio só, de instalação de parede) quebra com a vibração e não prende bem no conector pequeno do processador.' },
    { id: 'M12', item: 'Cabo RCA duplo curto', spec: 'Macho-macho, 2 vias, blindado, 0,5–1 m', qtd: '2', sit: 'comprar',
      pedir: '**2** cabos RCA duplos macho-macho, 0,5–1 m, plugue fino',
      alerta: 'Não é cabo Y', onde: 'Eletrônica / informática', preco: 'R$ 20–40',
      foto: { src: 'img/m12-cabo-rca.jpg', alt: 'Cabo com conectores RCA preto e vermelho', credito: 'Mariofergo, Wikimedia Commons', licenca: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Cable_con_conectores_RCA.jpg', legenda: 'Cabo RCA de 2 vias, macho nas pontas.' },
      papel: 'Leva o sinal das 4 saídas do processador às 4 entradas do módulo (S1–S4).',
      exigir: ['**Macho nas duas pontas**, 2 vias por cabo: 2 cabos = 4 ligações.', 'Blindado.', 'Curto: 0,5–1 m (os aparelhos ficam lado a lado).'],
      conferir: ['Plugues finos: no processador e no módulo os RCA ficam juntinhos, e plugue gordo não cabe ao lado do outro.', 'Ponta metálica firme, sem folga.'],
      armadilha: 'Cabo **Y** (1 fêmea → 2 machos), que era do plano antigo; cabo comprido demais, que sobra enrolado e capta ruído; plugue grosso que não encaixa lado a lado.' },
    { id: 'M13', item: 'Terminal faston fêmea isolado', spec: 'Fêmea, isolado, larguras dos terminais da JBL', qtd: '4 + 4', sit: 'comprar',
      pedir: 'Faston fêmea **isolado**: 4 de **6,3 mm** e 4 de **4,8 mm** (confirme na JBL)',
      alerta: 'Fêmea e com capa isolante', onde: 'Autopeças / eletrônica', preco: 'R$ 5–10',
      foto: { src: 'img/m13-terminal-femea.jpg', alt: 'Terminal fêmea de crimpar sem capa isolante', credito: 'Suyash Dwivedi, Wikimedia Commons', licenca: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Brass_crimp-terminal_female_spade_electrical_connector.jpg', legenda: 'Formato do terminal fêmea. A foto mostra o terminal sem a capa: compre o isolado.' },
      papel: 'Liga o fio interno da caixa nos terminais da JBL sem solda (I1, I2).',
      exigir: ['**Fêmea** e **isolado** (com capa plástica).', 'Largura igual à dos terminais da JBL: **meça antes** (6,3 mm e 4,8 mm são as comuns).', 'Cor pela bitola do fio: vermelho 0,5–1,5 mm²; azul 1,5–2,5 mm².'],
      conferir: ['Leve uma JBL ou a medida dos terminais.', 'Encaixe um faston no terminal da JBL na loja: tem que entrar firme.'],
      armadilha: 'Terminal **macho**, sem isolamento, de largura 2,8 mm, ou do tipo olhal/garfo (de parafuso). Nenhum deles encaixa no terminal do falante.' },
    { id: 'M14', item: 'Parafuso autoatarraxante', spec: 'AA 3,5 × 13–16 mm, ponta agulha, cabeça lentilha (ou panela + arruela)', qtd: '8–10', sit: 'comprar',
      pedir: 'Parafuso **AA cabeça lentilha** Phillips, **ponta agulha**, 3,5 × 13 (tipo nº 3 da foto)',
      alerta: 'Ponta agulha, não ponta broca', onde: 'Ferragem', preco: 'R$ 3–8',
      foto: { src: 'img/m14-tipos-parafuso.jpg', alt: 'Parafusos com cabeças e pontas de vários tipos', credito: 'Ssawka, Wikimedia Commons', licenca: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Screw_types.jpg', legenda: 'Compre como o **nº 3** (cabeça lentilha larga, ponta fina) ou o **nº 5** curto, com arruela. Não servem: 1, 4 e 7 (ponta broca, para metal), 2 e 6 (cabeça cônica), 8 e 9 (sextavados).' },
      papel: 'Fixa a JBL na moldura da BS-369.',
      exigir: ['Autoatarraxante (**AA**) com **ponta agulha** (fina), não ponta broca.', '3,5 mm de diâmetro, **13–16 mm** de comprimento.', 'Cabeça chata embaixo e **larga**: lentilha. Os furos da flange da JBL são ovais (≈5 × 6,3 mm, pela ficha); com cabeça panela comum (≈7 mm), use **arruela lisa de 4 mm**.', 'Fenda Phillips (mais fácil de apertar que fenda simples).'],
      conferir: ['Compare o comprimento com a espessura do plástico + flange: não pode atravessar a frente da moldura.', 'Encoste a cabeça no furo da flange da JBL: tem que cobrir o furo com sobra (ou levar arruela).'],
      nota: 'Na ferragem, peça: "parafuso AA, cabeça lentilha Phillips, ponta agulha, 3,5 × 13" (ou 3,5 × 16).',
      armadilha: 'Parafuso longo (25 mm ou mais) que fura a frente da moldura; cabeça **escareada** (cônica), que não assenta na flange chata; **ponta broca** (para chapa de metal); cabeça pequena que afunda no furo oval da flange.' },
    { id: 'M15', item: 'Fita de vedação de espuma EVA', spec: 'Autoadesiva, célula fechada, 2–3 mm de espessura', qtd: '~2 m', sit: 'comprar',
      pedir: 'Fita de espuma **EVA** autoadesiva, 2–3 mm de espessura: 2 metros',
      alerta: 'Espuma firme (célula fechada), não esponja', onde: 'Ferragem / material de construção', preco: 'R$ 10–20',
      foto: { src: 'img/m15-fita-eva.jpg', alt: 'Rolo de fita de espuma EVA autoadesiva preta', credito: 'Imagem do anúncio de referência (Mercado Livre)', licenca: 'uso pessoal: trocar antes de compartilhar', url: 'https://www.mercadolivre.com.br/fita-eva-espuma-vedacao-autocolante-2mm-10-metros-preto/p/MLB53344616', legenda: 'Fita EVA de 2 mm, autoadesiva.' },
      papel: 'Junta do falante e da emenda da carcaça. Sem vedação, a caixa selada vaza ar e perde o grave.',
      exigir: ['Espuma de **célula fechada** (EVA): não deixa o ar passar.', 'Autoadesiva.', '**2–3 mm** de espessura, ≈10 mm de largura.'],
      conferir: ['Aperte a espuma: tem que ser firme e voltar, não "esponja".', 'Sopre através de um pedaço: não pode passar ar.'],
      armadilha: 'Espuma **aberta** (tipo esponja de poliuretano, o "veda-frestas" mais macio) deixa o ar passar. Fita grossa (5 mm ou mais) deixa a JBL torta e a carcaça sem fechar.' },
    { id: 'M16', item: 'Fibra siliconada', spec: 'Fibra de poliéster (enchimento de almofada)', qtd: '~100 g', sit: 'comprar',
      pedir: 'Fibra siliconada de poliéster: ≈**100 g**',
      alerta: 'Nada de espuma, algodão ou lã de vidro', onde: 'Armarinho / tecidos', preco: 'R$ 10–20',
      foto: { src: 'img/m16-fibra-poliester.jpg', alt: 'Chumaço de fibra de poliéster', credito: 'KamillaŚ, Wikimedia Commons', licenca: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:Polyfill.jpg', legenda: 'Fibra de poliéster solta, a de encher almofada.' },
      papel: 'Enchimento das caixas: tira o "som de caixa" (reflexo do som por dentro) e faz a caixa se comportar como ≈10–15 % maior.',
      exigir: ['Fibra **siliconada de poliéster** (a de encher almofada).', '{{p:fibra}} por caixa; ≈100 g no total.'],
      conferir: ['Fibra solta e fofa, sem cola nem cheiro forte.'],
      armadilha: 'Espuma, algodão (empelota e segura umidade) ou lã de vidro (irrita a pele e é desnecessária numa caixa pequena).',
      nota: 'Um travesseiro velho de fibra de poliéster serve.' },
    { id: 'M17', item: 'Silicone neutro', spec: 'Cura neutra ("não acético")', qtd: '1', sit: 'comprar',
      pedir: 'Silicone **neutro** (cura neutra): 1 bisnaga',
      alerta: 'O rótulo tem que dizer "neutro": o acético corrói o cobre', onde: 'Ferragem', preco: 'R$ 12–20',
      foto: { src: 'img/m17-silicone-aplicador.jpg', alt: 'Aplicador com bisnaga de silicone', credito: 'Frank C. Müller, Wikimedia Commons', licenca: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Silikonpistole_(fcm).jpg', legenda: 'Bisnaga no aplicador. O que decide é o rótulo: tem que dizer "neutro".' },
      papel: 'Fecha frestas e furos por dentro da caixa (placa dos bornes, grade decorativa).',
      exigir: ['A embalagem tem que dizer **"neutro"** ou "cura neutra".'],
      conferir: ['Leia o rótulo inteiro: "acético" ou "acetoxi" = não serve.', 'Não pode ter cheiro de vinagre.'],
      armadilha: 'Silicone **acético** (o mais comum e barato, cheiro de vinagre) solta ácido enquanto cura e oxida o cobre e os terminais dentro da caixa fechada.' },
    { id: 'M18', item: 'Manta asfáltica autoadesiva', spec: 'Aluminizada, fina (≈1,5–2 mm), rolo de 10 cm', qtd: '1', sit: 'comprar',
      pedir: 'Fita asfáltica **aluminizada autoadesiva**, rolo de 10 cm (fina)',
      alerta: 'Autoadesiva: nada de maçarico', onde: 'Material de construção', preco: 'R$ 20–30',
      foto: { src: 'img/m18-manta-asfaltica.jpg', alt: 'Rolo de fita asfáltica aluminizada Vedatudo', credito: 'Imagem do anúncio de referência (Mercado Livre)', licenca: 'uso pessoal: trocar antes de compartilhar', url: 'https://www.mercadolivre.com.br/fita-asfaltica-adesiva-aluminizada-vedatudo-10cm-x-10m-dryko-cor-prateado/p/MLB24767615', legenda: 'Fita asfáltica aluminizada de 10 cm, autoadesiva.' },
      papel: 'Tira a vibração das paredes de plástico da caixa, que colore o som. É recomendada, não obrigatória: dá para pôr depois.',
      exigir: ['**Autoadesiva**, com face de alumínio.', 'Fina: ≈1,5–2 mm (a caixa só tem 3,5 L).'],
      conferir: ['Tem que colar sem fogo nem maçarico.'],
      armadilha: 'Manta líquida ou manta de telhado de aplicar com maçarico; manta grossa, que rouba volume da caixa pequena.' },
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
      papel: 'Traz o multímetro do projeto e permite soldar a emenda do cabo do sub (passo 2.8), como alternativa ao conector de alavanca.',
      conferir: ['Voltagem na etiqueta ou no cabo do ferro: ferro de 127 V ligado em 220 V queima na hora.', 'Ponta chata (2.4D) para o fio de 2,5 mm²; a fina é para eletrônica.', 'Tubos termorretráteis de ≈4–5 mm (um por emenda) e de ≈10 mm (por cima das duas).'],
      armadilha: 'Estanhar a ponta de fio que vai em borne de parafuso (fonte, módulo, processador, porta-fusível): a solda cede com o aperto, o contato afrouxa e esquenta. Nesses bornes, só ponta torcida.',
      nota: 'Chega em 10/10. Para fio de cobre, ≈350 °C (até ≈380 °C se o 2,5 mm² demorar a pegar a solda).' },
    { id: 'M21', item: 'Conector de emenda de alavanca, 2 vias', spec: 'Tipo Wago 221: aceita 0,2–4 mm², corpo isolado, 450 V / 32 A', qtd: '3 (2 + 1 reserva)', sit: 'comprar', onde: 'Material elétrico', preco: 'R$ 6–15',
      pedir: 'Conector de emenda **de alavanca, 2 vias** (tipo Wago 221-412), para fio de **0,2 a 4 mm²**: 3 unidades',
      alerta: 'Um conector por fio: os dois fios do sub nunca no mesmo conector',
      foto: { src: 'img/m21-conector-alavanca.jpg', alt: 'Dois conectores de emenda de alavanca WAGO 221 de 3 vias, transparentes com alavancas laranja, ao lado de um palito de fósforo', credito: 'im_tau, Wikimedia Commons', licenca: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:WAGO_221.jpg', legenda: 'WAGO 221 de 3 vias; o de 2 vias é igual, com duas alavancas. O corpo transparente deixa ver o cobre entrar até o fim.' },
      papel: 'Emenda o cabo novo de 2,5 mm² do sub no fio fino (≈0,5 mm²) que sai do plugue da caixa, sem solda e sem fita isolante.',
      exigir: ['Aceita fios **de 0,2 a 4 mm²** (o de 2,5 mm² e o de 0,5 mm² no mesmo conector).', 'Para fio **flexível** (muitos fios finos).', 'Corpo isolado, de preferência transparente (dá para ver o cobre entrar até o fim).'],
      conferir: ['Leia a faixa de bitola gravada no conector.', 'Abra e feche a alavanca: tem que travar firme.'],
      armadilha: 'Conector só para fio rígido (o flexível escapa), cópia sem a faixa de bitola gravada, ou os dois fios do sub no mesmo conector (curto na saída em ponte).',
      nota: 'Com o kit de solda (M22) dá para soldar (passo 2.8), mas compre os conectores: são o plano A. Fita isolante sozinha não serve.' },
    { id: 'M20', item: 'Cabo P2 → 2 RCA blindado', spec: 'P2 estéreo (3 contatos), blindado, 10 m', qtd: '1', sit: 'adiado',
      pedir: 'Cabo **P2 estéreo** → 2 RCA, blindado, **10 m**',
      alerta: 'Plugue com 2 anéis = estéreo', onde: 'Eletrônica', preco: 'R$ 30–60',
      foto: { src: 'img/m20-plugue-p2.jpg', alt: 'Plugue P2 estéreo de 3,5 mm', credito: 'Evan-Amos, Wikimedia Commons', licenca: 'domínio público', url: 'https://commons.wikimedia.org/wiki/File:Audio-TRS-Mini-Plug.jpg', legenda: 'P2 estéreo: dois anéis isolantes separam três contatos.' },
      papel: 'Leva o som do notebook ao processador. Sem pressa: dá para começar pelo Bluetooth do celular.',
      exigir: ['Plugue P2 **estéreo**: 2 anéis isolantes, 3 contatos.', 'Blindado.', '10 m (notebook embaixo do projetor, passando pela parede).'],
      conferir: ['Conte os anéis do plugue: 2 anéis = estéreo.'],
      armadilha: 'P2 **mono** (1 anel, 2 contatos) toca só um lado. Cabo sem blindagem, em 10 m, capta zumbido.' }
  ],

  cabos: [
    { id: 'AC', tipo: 'ac', de: 'Tomada aterrada', para: 'BOB 60A, bornes 7–9', bitola: 'Cabo original da fonte', comp: '—', pontas: 'Plugue de 3 pinos (já ligado de fábrica)', protecao: 'Disjuntor da casa', verificar: 'Tomada com o pino de terra (central) ligado', bornes: ['bob60a:T7', 'bob60a:T8', 'bob60a:T9'] },
    { id: 'C1', tipo: 'energia', de: 'BOB 60A, borne 1 (+)', para: 'Porta-fusível de 40 A (entrada)', bitola: '{{p:bit_forca}}, vermelho', comp: 'Curto: fusível a até {{p:dist_fus}} da fonte', corte: 'Profundidade do borne (≈10–15 mm)', pontas: 'Ponta torcida (ou ilhós de 10 mm²)', verificar: 'Puxão firme não solta', bornes: ['bob60a:T1'], validar: true },
    { id: 'C2', tipo: 'energia', de: 'Porta-fusível de 40 A (saída)', para: 'SD800.4 +12VDC', bitola: '{{p:bit_forca}}, vermelho', comp: 'Medir', corte: '≈10–15 mm', pontas: 'Ponta torcida (ou ilhós)', protecao: 'Fusível de {{p:fus40}}', verificar: '{{p:tensao}} na régua do módulo', bornes: ['sd800.4-saida:12V'] },
    { id: 'C3', tipo: 'terra', de: 'BOB 60A, borne 4 (−)', para: 'SD800.4 GND', bitola: '{{p:bit_forca}}, preto', comp: 'Igual a C1 + C2', corte: '≈10–15 mm', pontas: 'Ponta torcida (ou ilhós)', verificar: 'Continuidade ≈ 0 Ω de ponta a ponta', bornes: ['bob60a:T4', 'sd800.4-saida:GND'] },
    { id: 'C4', tipo: 'energia', de: 'BOB 60A, borne 2 (+)', para: 'Processador +12VDC', bitola: '{{p:bit_proc}}', comp: 'Medir', corte: '≈8 mm', pontas: 'Ponta torcida', protecao: 'Fusível de {{p:fus1}}', verificar: 'LED do processador acende', bornes: ['bob60a:T2', 'pro24bt-alimentacao:12V'] },
    { id: 'C5', tipo: 'terra', de: 'BOB 60A, borne 5 (−)', para: 'Processador GND', bitola: '{{p:bit_proc}}', comp: 'Igual a C4', corte: '≈8 mm', pontas: 'Ponta torcida', verificar: 'Continuidade ≈ 0 Ω', bornes: ['bob60a:T5', 'pro24bt-alimentacao:GND'] },
    { id: 'C6', tipo: 'rem', de: 'Processador +12VDC', para: 'Processador REM IN (jumper)', bitola: '{{p:bit_proc}} (0,75 mm² se dois fios não couberem no mesmo borne)', comp: '≈3 cm', corte: '≈8 mm', pontas: 'Torcida junto com C4 no borne +12', verificar: 'Liga e desliga pelo app (modo BOB)', bornes: ['pro24bt-alimentacao:12V', 'pro24bt-alimentacao:REMIN'], validar: true },
    { id: 'C7', tipo: 'rem', de: 'Processador REM OUT', para: 'SD800.4 REM', bitola: '0,75–1,5 mm²', comp: 'Medir', corte: '≈8 mm', pontas: 'Ponta torcida', verificar: 'LED do módulo acende junto com o app', bornes: ['pro24bt-alimentacao:REMOUT', 'sd800.4-saida:REM'], validar: true },
    { id: 'S0', tipo: 'sinal', de: 'Celular (Bluetooth) ou notebook (P2 → 2 RCA)', para: 'Processador A (L) e B (R)', bitola: 'Sem fio · ou cabo P2 → 2 RCA', comp: '— · 10 m', pontas: 'RCA', verificar: 'Equalizador e efeitos do celular desligados', bornes: ['pro24bt-rca:A', 'pro24bt-rca:B'] },
    { id: 'S1', tipo: 'sinal', de: 'Processador saída 1', para: 'SD800.4 entrada CH1', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Som só na caixa L ao testar a saída 1', bornes: ['pro24bt-rca:OUT1', 'sd800.4-entrada:CH1'] },
    { id: 'S2', tipo: 'sinal', de: 'Processador saída 2', para: 'SD800.4 entrada CH2', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Som só na caixa R ao testar a saída 2', bornes: ['pro24bt-rca:OUT2', 'sd800.4-entrada:CH2'] },
    { id: 'S3', tipo: 'sinal', de: 'Processador saída 3', para: 'SD800.4 entrada CH3', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Sub toca com as saídas 3 e 4', bornes: ['pro24bt-rca:OUT3', 'sd800.4-entrada:CH3'] },
    { id: 'S4', tipo: 'sinal', de: 'Processador saída 4', para: 'SD800.4 entrada CH4', bitola: 'RCA', comp: '0,5–1 m', pontas: 'RCA', verificar: 'Sub toca com as saídas 3 e 4', bornes: ['pro24bt-rca:OUT4', 'sd800.4-entrada:CH4'] },
    { id: 'F1', tipo: 'falante', de: 'SD800.4 CH1 + / −', para: 'BS-369 L (bornes de mola)', bitola: '2 × {{p:bit_fal}} (friso = +)', comp: 'Medir (≈2,5 m)', corte: '≈8–10 mm', pontas: 'Módulo: ponta torcida · caixa: borne de mola', verificar: '≈3,4 Ω medindo na ponta do módulo, com a caixa ligada', bornes: ['sd800.4-saida:CH1+', 'sd800.4-saida:CH1-'] },
    { id: 'F2', tipo: 'falante', de: 'SD800.4 CH2 + / −', para: 'BS-369 R (bornes de mola)', bitola: '2 × {{p:bit_fal}} (friso = +)', comp: 'Medir (≈2,5 m)', corte: '≈8–10 mm', pontas: 'Módulo: ponta torcida · caixa: borne de mola', verificar: '≈3,4 Ω', bornes: ['sd800.4-saida:CH2+', 'sd800.4-saida:CH2-'] },
    { id: 'F3', tipo: 'falante', de: 'SD800.4 CH4 ⊕ / CH3 ⊖ (ponte)', para: 'Plugue do sub (+ / −)', bitola: '2 × {{p:bit_fal}} (friso = +), troca o cabo antigo', comp: 'Medir (≈0,5–1 m)', corte: '≈8–10 mm', pontas: 'Módulo: ponta torcida · sub: conector de alavanca (ou solda, passo 2.8) no fio do plugue', verificar: 'Teste da pilha: o fio que faz o cone avançar vai no CH4 ⊕; 3–3,6 Ω na ponta do módulo', bornes: ['sd800.4-saida:CH4+', 'sd800.4-saida:CH3-'], validar: true },
    { id: 'I1', tipo: 'falante', de: 'Borne interno da BS-369 L', para: 'JBL L (+ / −)', bitola: 'Fio interno original', comp: 'Curto', corte: '≈5 mm', pontas: 'Faston fêmea isolado (largura a medir)', verificar: 'Teste da pilha: o cone avança', validar: true },
    { id: 'I2', tipo: 'falante', de: 'Borne interno da BS-369 R', para: 'JBL R (+ / −)', bitola: 'Fio interno original', comp: 'Curto', corte: '≈5 mm', pontas: 'Faston fêmea isolado (largura a medir)', verificar: 'Teste da pilha: o cone avança', validar: true }
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
    { id: 'caixa-sub', medida: 'Caixa do sub: selada ou com duto (Fb)', como: 'Passo 3.13, varredura de 25 a 60 Hz', esperado: '—' },
    { id: 'dist', medida: 'Distâncias até o sofá (L / R / sub)', como: 'Trena', esperado: '—' },
    { id: 'fibra', medida: 'Fibra por caixa', como: 'Balança de cozinha', esperado: '{{p:fibra}}' }
  ],

  etapas: [
    {
      id: '1', titulo: 'Materiais e componentes', curto: 'Materiais', peca: 'compras',
      intro: 'Separe tudo antes de começar. A lista traz a especificação que importa: com ela dá para trocar qualquer item por um equivalente.',
      blocos: [{ titulo: 'Lista de materiais', tipo: 'tabela', ref: 'materiais' }],
      passos: [
        {
          id: '1.1', titulo: 'Conferir o que você já tem', objetivo: 'Garantir que cada peça é a certa e está boa antes de cortar qualquer cabo.',
          tempo: '15 min', risco: 'baixo', ferramentas: ['Multímetro'],
          acoes: [
            'Confira o modelo na etiqueta da fonte, do processador, do módulo e das JBL contra a lista de materiais.',
            'Meça cada JBL com o multímetro em Ω, nos terminais do falante: esperado ≈3,4 Ω.',
            'Confira se a borda de borracha e o cone das JBL estão inteiros e se o cone não raspa ao ser empurrado de leve.',
            'Confira se a tomada onde a fonte vai ficar tem o pino de terra (central) ligado. Um testador de tomada (≈R$ 20–30) mostra fase, neutro e terra sem expor a mão.',
            'Procure um duto (abertura) na caixa do sub, inclusive atrás do painel escuro, e anote.'
          ],
          figuras: [{ tipo: 'compras', sit: ['tem'] }],
          verificacao: ['Todas as peças batem com a lista.', 'Cada JBL mede entre 3 e 4 Ω (nominal de {{p:imp_sat}}).'],
          erro: 'Medir o falante ainda ligado ao módulo dá leitura errada. Meça com o falante solto.',
          basico: 'Impedância (Ω) é a carga que o falante representa para o amplificador. O multímetro mede só a resistência da bobina (Re), que fica um pouco abaixo do valor nominal: um falante de 4 Ω mede ≈3,2–3,6 Ω.'
        },
        {
          id: '1.2', titulo: 'Comprar o que falta', objetivo: 'Comprar pela especificação, não pela marca.',
          tempo: '1–2 h', risco: 'baixo',
          alertas: [{ tipo: 'atencao', texto: 'Onde mais se erra na compra: **cabos** (alumínio CCA vendido como cobre ou "OFC"; "10 mm" de diâmetro no lugar de 10 mm² de cobre), **fusível e porta-fusível** de padrões diferentes, **silicone acético** e **faston** de largura errada. Cada ficha abaixo diz o que exigir e como conferir na loja.' },
            { tipo: 'atencao', texto: 'Antes de comprar os cabos, veja se cabem nos bornes: leve uma traseira da BS-369 e a fonte BOB e teste uma ponta na loja. Não coube: **2 × 1,5 mm²** nas caixas e no sub, **6 mm²** na força.' }],
          acoes: [
            'Leve as fichas abaixo (no celular ou impressas) e compre os itens marcados como "Comprar".',
            'Em cada item, confira na loja os pontos de "Confira na loja" e marque.',
            'Leve uma JBL (ou a medida dos terminais dela) e o valor dos fusíveis anotado.'
          ],
          figuras: [{ tipo: 'compras', sit: ['comprar', 'adiado'] }],
          verificacao: ['Tudo separado na bancada e marcado na lista de materiais.', 'Nenhum cabo de alumínio (todas as pontas raspadas são cobre por dentro).']
        },
        {
          id: '1.3', titulo: 'Separar as ferramentas', tempo: '5 min', risco: 'baixo',
          acoes: [
            'Chaves Phillips e de fenda pequena (o conector do processador é pequeno).',
            'Estilete e alicate desencapador (o kit de solda traz os dois).',
            'Alicate de crimpar com matriz para terminal isolado (vermelho / azul / amarelo).',
            'Furadeira com broca de {{p:broca}}.',
            'Multímetro com escalas V AC e Ω (vem no kit de solda).',
            'Kit de solda, se for soldar a emenda do sub (passo 2.8).',
            'Trena, régua, caneta, fita crepe (etiquetas), fita isolante, abraçadeiras e 1 pilha AA.'
          ],
          erro: 'Crimpar faston com alicate universal deixa o terminal frouxo, e ele solta com a vibração do grave. Se for o único alicate, puxe cada terminal com força depois de crimpar.'
        }
      ]
    },
    {
      id: '2', titulo: 'Preparação', curto: 'Preparação', peca: 'montagem',
      intro: 'Corte, prepare as pontas e etiquete os cabos antes de levar qualquer coisa até os aparelhos. Tudo desligado da tomada.',
      blocos: [{ titulo: 'Tabela de conexões', tipo: 'tabela', ref: 'cabos' }],
      passos: [
        {
          id: '2.1', titulo: 'Medir e cortar os cabos', objetivo: 'Cabo de força curto; cabo de falante com folga.',
          tempo: '20 min', risco: 'baixo', ferramentas: ['Trena', 'Alicate de corte'],
          acoes: [
            'Deixe fonte, módulo e processador no lugar definitivo (ou marque o lugar) antes de medir.',
            'Meça o caminho real de cada cabo, contornando os móveis. Some 10 % de folga nos de falante.',
            'Corte {{c:C1}}, {{c:C2}} e {{c:C3}} o mais curto possível: o fusível fica a até {{p:dist_fus}} da fonte.',
            'Anote o comprimento cortado na coluna "Medido".'
          ],
          figuras: [{ tipo: 'tabela', ref: 'corte' }],
          verificacao: ['Nenhum cabo esticado, nenhuma sobra grande enrolada.'],
          basico: 'Cabo de força comprido perde tensão no caminho e o módulo rende menos. Por isso a fonte fica ao lado do módulo e o cabo de 10 mm² é curto. No cabo de falante, alguns metros de 2,5 mm² não fazem diferença audível.'
        },
        {
          id: '2.2', titulo: 'Etiquetar os cabos', tempo: '10 min', risco: 'baixo',
          acoes: [
            'Escreva o código do cabo (C1, F1…) em fita crepe e cole nas duas pontas.',
            'No cabo de falante, use o condutor com friso (listra) como + em todos os cabos.'
          ],
          verificacao: ['Cada ponta tem o código da tabela de conexões.'],
          erro: 'Inverter + e − só de um lado faz a caixa tocar fora de fase, e o grave some no meio da sala.'
        },
        {
          id: '2.3', titulo: 'Desencapar as pontas', objetivo: 'Todo o cobre dentro do borne, nada exposto.',
          tempo: '15 min', risco: 'medio', ferramentas: ['Alicate desencapador', 'Estilete'],
          alertas: [{ tipo: 'atencao', texto: 'Não estanhe (solda) ponta que vai em borne de parafuso: a solda cede sob o aperto, o contato afrouxa e esquenta. Use ponta torcida ou ilhós.' }],
          acoes: [
            'Meça a profundidade de cada borne antes de desencapar.',
            'Desencape só essa medida: cabo de 10 mm² ≈10–15 mm; falante e processador ≈8–10 mm.',
            'Torça os fios de cobre no mesmo sentido, firme, sem deixar fio solto.',
            'Se tiver ilhós (ponteira), coloque e crimpe.'
          ],
          figuras: [
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
            ] }
          ],
          verificacao: ['Com a ponta no borne, o isolamento chega até a entrada do borne.', 'Nenhum fio de cobre solto.'],
          erro: 'Desencapar demais deixa cobre para fora do borne, e ele pode encostar no borne vizinho: curto.'
        },
        {
          id: '2.4', titulo: 'Crimpar os terminais faston das caixas', objetivo: 'Ligar a fiação interna da BS-369 na JBL sem solda.',
          tempo: '15 min', risco: 'baixo', validar: true, ferramentas: ['Alicate de crimpar'],
          acoes: [
            'Meça a largura dos terminais da JBL ({{c:I1}} / {{c:I2}}) e separe um faston de cada largura.',
            'Desencape ≈5 mm do fio interno da caixa e enfie no faston até o cobre aparecer no fim do tubo.',
            'Crimpe na matriz da cor do terminal (vermelho: 0,5–1,5 mm²; azul: 1,5–2,5 mm²).',
            'Puxe com força: o terminal não pode sair.'
          ],
          figuras: [
            { tipo: 'sequencia', legenda: 'Terminal faston no fio interno da caixa. Use o terminal da cor que corresponde à bitola do fio.', passos: [
              { id: 'faston-desencapar' },
              { id: 'faston-inserir', params: { terminal: 'vermelho' } },
              { id: 'faston-crimpar', params: { terminal: 'vermelho' }, texto: 'Na matriz vermelha do alicate; um aperto só, até o fim.' },
              { id: 'faston-puxar', params: { terminal: 'vermelho' } }
            ] }
          ],
          verificacao: ['Puxão firme não solta.', 'O isolamento do faston cobre todo o cobre.']
        },
        {
          id: '2.5', titulo: 'Montar os porta-fusíveis, sem o fusível', tempo: '10 min', risco: 'alto',
          alertas: [{ tipo: 'perigo', texto: 'O fusível protege o **cabo** contra curto. Ele só entra no passo 3.9, depois de toda a polaridade conferida.' }],
          acoes: [
            'Ligue {{c:C1}} na entrada e {{c:C2}} na saída do porta-fusível de {{p:fus40}}. **Não coloque o fusível.**',
            'Monte também o porta-fusível de lâmina do processador em {{c:C4}}, vazio.',
            'Aperte os parafusos e confira com um puxão.'
          ],
          figuras: [{ tipo: 'ilustracao', id: 'porta-fusivel', params: { fusivel: '{{p:fus40}}', passo: '3.9' }, legenda: 'Porta-fusível principal entre C1 e C2, a até {{p:dist_fus}} da fonte, ainda sem o fusível.' }],
          verificacao: ['Porta-fusíveis montados, vazios e fechados.']
        },
        {
          id: '2.6', titulo: 'Preparar o conector do processador', objetivo: 'Montar o conector de 4 vias fora do aparelho, onde dá para ver e apertar.',
          tempo: '10 min', risco: 'medio', validar: true, ferramentas: ['Chave de fenda pequena'],
          acoes: [
            'Tire o conector de 4 vias do processador.',
            'GND: {{c:C5}}. +12VDC: {{c:C4}} e o jumper {{c:C6}}. REM IN: a outra ponta do jumper {{c:C6}}. REM OUT: {{c:C7}}.',
            'Se dois fios não couberem no borne +12VDC, torça {{c:C4}} e {{c:C6}} juntos antes de inserir, ou use 0,75 mm² no jumper.',
            'Aperte e puxe cada fio.'
          ],
          figuras: [{ tipo: 'mapa', equip: 'pro24bt-alimentacao', legenda: 'Conector de alimentação do processador com os cabos do projeto. C6 é o jumper entre +12VDC e REM IN (modo BOB).' }],
          basico: 'REM é o fio de liga/desliga remoto: com +12 V nele, o aparelho liga. Com o REM IN ligado ao +12 V (modo BOB), o processador fica sempre pronto e o som liga e desliga pelo app. O REM OUT leva esse comando ao módulo.'
        },
        {
          id: '2.7', titulo: 'Refazer o cabo do sub', objetivo: 'Trocar o cabo fino com emenda de fita por 2 × 2,5 mm², com o + identificado.',
          tempo: '15 min', risco: 'medio', validar: true, ferramentas: ['Alicate desencapador', 'Multímetro', 'Pilha AA', 'Abraçadeira'],
          alertas: [{ tipo: 'atencao', texto: 'Em ponte, os **dois** fios do sub carregam sinal: fio solto encostando no chassi ou no outro fio queima o módulo.' }],
          acoes: [
            'Com tudo fora da tomada, solte o cabo do sub no módulo e corte fora o azul/branco com a emenda de fita, deixando ≈5 cm do vermelho/preto do plugue.',
            'Corte {{c:F3}} do cabo paralelo, do módulo até o plugue, com folga (≈0,5–1 m).',
            'Desencape ≈10 mm e emende com conector de alavanca, **um conector por fio**: o condutor com friso no fio vermelho. Se for soldar, faça aqui o passo 2.8 e volte.',
            'Prenda os conectores no cabo com abraçadeira, para o peso do cabo não puxar a emenda.',
            'Teste da pilha na ponta do módulo: o fio que faz o cone **avançar** com o + da pilha é o + (vai no CH4 ⊕). Marque com fita crepe.',
            'Meça em Ω entre as duas pontas do lado do módulo: 3–3,6 Ω.'
          ],
          verificacao: ['Nenhuma emenda com fita isolante no cabo do sub.', 'O cone avança com o + da pilha no fio marcado como +.', '3–3,6 Ω na ponta do módulo.'],
          erro: 'Emendar fios de grossuras diferentes só torcendo e passando fita: solta com a vibração do grave e pode encostar no chassi.',
          basico: 'A grossura quase não muda o som: 20 cm de fio de 0,5 mm² somam ≈0,014 Ω, menos de 1 % dos 4 Ω do sub. O que importa é a emenda firme e isolada e a polaridade certa, porque em ponte nenhum dos dois fios é terra.'
        },
        {
          id: '2.8', titulo: 'Soldar a emenda do sub (alternativa ao conector)', objetivo: 'Só se o kit chegou e uma emenda de treino numa sobra saiu lisa, brilhante e aguentou puxão; senão, conector (passo 2.7).',
          tempo: '25 min', risco: 'medio', validar: true, ferramentas: ['Kit de solda (M22)', 'Alicate desencapador', 'Isqueiro'],
          alertas: [{ tipo: 'atencao', texto: 'Ferro a ≈350 °C: no suporte sempre que sair da mão.' }],
          acoes: [
            'Ferro a ≈350 °C, ponta chata (2.4D) limpa na esponja úmida e com um pouco de estanho.',
            'Enfie os tubos termorretráteis **antes**: um de ≈4–5 mm em cada fio e um de ≈10 mm no cabo.',
            'Desencape ≈15 mm e enrole o fio fino em volta do grosso (vermelho com o condutor de friso).',
            'Aqueça o fio por baixo e encoste o estanho no fio, não no ferro: ele tem que escorrer para dentro.',
            'Esfriou sem mexer? Puxe firme. Tubos sobre as emendas, o maior por cima das duas; encolha com o isqueiro a alguns centímetros.',
            'Volte ao passo 2.7: teste da pilha e 3–3,6 Ω.'
          ],
          verificacao: ['Emendas lisas e brilhantes, cada uma no seu tubo e as duas no tubo maior.'],
          erro: 'Esquecer os tubos antes de soldar, ou mexer o fio enquanto esfria (a "solda fria": fosca e fraca).',
          basico: 'Solda boa escorre para dentro dos fios porque o cobre está quente. Se o estanho forma uma bola por cima, o fio está frio: espere mais. No som, solda e conector dão o mesmo resultado.'
        }
      ]
    },
    {
      id: '3', titulo: 'Montagem', curto: 'Montagem', peca: 'montagem',
      intro: 'Primeiro as caixas; depois a elétrica com a fonte desligada; por último energizar, configurar e regular.',
      passos: [
        {
          id: '3.1', titulo: 'Encaixe a seco da JBL na BS-369', objetivo: 'Conferir se o falante cabe antes de cortar ou furar.',
          tempo: '20 min', risco: 'medio', validar: true,
          alertas: [{ tipo: 'atencao', texto: 'Se algo não encaixar, pare e fotografe antes de cortar. Corte em plástico não tem volta.' }],
          acoes: [
            'Abra a BS-369 (parafusos das torres dos cantos) e tire o falante original.',
            'Apresente a JBL no assento, por dentro da moldura, com o tweeter para a frente.',
            'Largura: a flange tem 118 mm e o vão interno ≈126 mm, sobram ≈4 mm de cada lado.',
            'Torres do falante antigo (10 cm na diagonal): se impedirem a JBL de assentar, rebaixe-as. As torres dos cantos fecham a caixa: nelas não se mexe.',
            'Abertura do cone: o furo do anel (≈92 mm) não pode encostar na borda de borracha da JBL.',
            'Tweeter × tela: com a tela encaixada, o tweeter não pode encostar nela.',
            'Feche a carcaça sem forçar (profundidade da JBL: 68 mm; espaço livre: 120 mm).'
          ],
          figuras: [{ tipo: 'ilustracao', id: 'bs369-explodida', legenda: 'Ordem de montagem da caixa, da frente para trás. Medidas registradas; a posição das torres em relação à flange da JBL ainda precisa ser conferida no encaixe a seco.' }],
          verificacao: ['A JBL assenta plana, sem forçar nas laterais.', 'A tela frontal encaixa sem tocar no tweeter.']
        },
        {
          id: '3.2', titulo: 'Furar a fixação', tempo: '15 min', risco: 'medio', ferramentas: ['Furadeira', 'Broca {{p:broca}}'],
          acoes: [
            'Com a JBL centralizada no furo, marque os 4 furos dela com caneta.',
            'Fure com broca de {{p:broca}} sem atravessar a frente da moldura (marque a profundidade na broca com fita).',
            'Confira o comprimento do parafuso contra a espessura do plástico.'
          ],
          erro: 'Furo grande demais faz o parafuso espanar o plástico. Na dúvida, comece com broca menor.'
        },
        {
          id: '3.3', titulo: 'Tratamento interno', objetivo: 'Caixa selada de verdade e paredes que não vibram.',
          tempo: '30 min', risco: 'baixo',
          acoes: [
            'Limpe e seque o interior.',
            'Manta asfáltica: retalhos de ≈10 × 10 cm nas paredes grandes da traseira, a 1 cm das torres, dos bornes e da emenda.',
            'Feche por dentro qualquer furo ou fresta (grade decorativa de cima, placa dos bornes) com manta ou silicone neutro.',
            'Fita de vedação em todo o contorno da emenda entre a traseira e a moldura.'
          ],
          basico: 'Na caixa selada, o ar de dentro funciona como uma mola que controla o cone. Um vazamento deixa a mola frouxa: o grave cai e aparece chiado. A manta tira a vibração do plástico, que colore o som.'
        },
        {
          id: '3.4', titulo: 'Ligar a JBL e conferir a polaridade', tempo: '10 min', risco: 'baixo', validar: true,
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
          id: '3.5', titulo: 'Fechar a caixa e testar a vedação', tempo: '15 min', risco: 'baixo',
          acoes: [
            'Fita de vedação no assento, sob a flange da JBL.',
            'Parafuse a JBL em cruz, firme, sem espanar.',
            'Fibra solta: {{p:fibra}} por caixa, sem comprimir e sem encostar atrás do falante.',
            'Feche a carcaça e aperte as torres em cruz.',
            'Empurre o cone de leve, por igual: ele deve voltar devagar, amortecido.'
          ],
          verificacao: ['O cone volta devagar e sem chiado.'],
          erro: 'Fibra encostada atrás do cone abafa o som e pode raspar. Deixe um vão atrás do ímã.'
        },
        {
          id: '3.6', titulo: 'Posicionar fonte, módulo e processador', tempo: '15 min', risco: 'medio',
          acoes: [
            'Fonte ao lado do módulo, com 20 cm livres nas laterais da fonte (ventilação).',
            'Longe de tapete, cortina e passagem: o módulo passa de 60 °C.',
            'Cabo de sinal (RCA/P2) longe do cabo da tomada; se precisar cruzar, cruze em 90°.'
          ],
          basico: 'Cabo de sinal correndo junto do cabo da rede capta zumbido de 60 Hz.'
        },
        {
          id: '3.7', titulo: 'Ligar a força com a fonte desligada', objetivo: 'Todos os cabos de energia e terra no lugar, sem fusível.',
          tempo: '20 min', risco: 'alto',
          alertas: [{ tipo: 'perigo', texto: 'Inverter + e − queima o módulo e o processador. Confira a polaridade com o multímetro **antes** de pôr os fusíveis.' },
            { tipo: 'atencao', texto: 'Os bornes 7–9 da régua da fonte são da rede (127/220 V) e ficam expostos ao lado dos de 12 V. Só mexa na régua com o plugue fora da tomada.' }],
          acoes: [
            'Confirme: fonte fora da tomada e porta-fusíveis vazios.',
            'Na fonte: {{c:C1}} no borne 1 (+), {{c:C4}} no borne 2 (+), {{c:C3}} no borne 4 (−), {{c:C5}} no borne 5 (−).',
            'No módulo: {{c:C2}} no +12VDC e {{c:C3}} no GND.',
            'Encaixe no processador o conector montado no passo 2.6 e leve {{c:C7}} até o REM do módulo.',
            'Multímetro em continuidade, cabo por cabo: borne 4 (−) da fonte → GND do módulo ≈0 Ω; saída do porta-fusível de 40 A → +12VDC do módulo ≈0 Ω; borne 5 (−) → GND do processador ≈0 Ω; saída do porta-fusível de 1 A → +12VDC do processador ≈0 Ω.',
            'Por último, entre +12VDC e GND do módulo: a leitura pode subir aos poucos (os capacitores do módulo carregando com a corrente do multímetro). O que **não** pode é ficar parada perto de 0 Ω: isso é curto.'
          ],
          figuras: [
            { tipo: 'mapa', equip: 'bob60a', legenda: 'Régua da fonte com os cabos do projeto. Os bornes 1–3 (+) e 4–6 (−) são ligados por dentro; 3 e 6 ficam livres.' },
            { tipo: 'mapa', equip: 'sd800.4-saida', legenda: 'Régua de saída do módulo com os cabos do projeto. Atenção: com o módulo de cabeça para baixo, a ordem se inverte.' }
          ],
          verificacao: ['Cada cabo de força e terra chega ao borne certo (≈0 Ω de ponta a ponta).', 'Nenhum curto entre +12VDC e GND.']
        },
        {
          id: '3.8', titulo: 'Ligar sinal e falantes', tempo: '20 min', risco: 'medio',
          alertas: [{ tipo: 'atencao', texto: 'Ponte só com carga de {{p:imp_sub}} ou mais. Sub de 2 Ω em ponte faz o módulo desligar ou queimar.' }],
          acoes: [
            'RCA: saídas 1–4 do processador nas entradas CH1–CH4 do módulo ({{c:S1}}–{{c:S4}}). O módulo precisa das 4 entradas ligadas.',
            'Falantes: {{c:F1}} no CH1 e {{c:F2}} no CH2, + no +.',
            'Sub ({{c:F3}}, refeito no passo 2.7): o fio marcado como + no **CH4 ⊕** e o outro no **CH3 ⊖**.',
            'Chaves do módulo nesta fase: CH1/CH2 em HP e CH3/CH4 em LP. Ganhos no mínimo.'
          ],
          figuras: [
            { tipo: 'mapa', equip: 'pro24bt-rca', legenda: 'Conexões RCA do processador. A entrada HIGH IN (alto nível) não é usada.' },
            { tipo: 'mapa', equip: 'sd800.4-entrada', legenda: 'Painel de entrada do módulo. CH1 e CH4 em cima; CH2 e CH3 (vermelhos) embaixo.' }
          ],
          verificacao: ['Nenhum cobre aparente nos bornes e nenhum fio encostando no vizinho.'],
          basico: 'Em ponte, dois canais trabalham juntos num só falante: um empurra enquanto o outro puxa. A potência sobe (2 × 132 W viram 400 W em 4 Ω), mas a carga mínima também sobe.'
        },
        {
          id: '3.9', titulo: 'Energizar', tempo: '15 min', risco: 'alto',
          alertas: [{ tipo: 'perigo', texto: 'Com o plugue na tomada, os bornes 7–9 da fonte ficam com 127/220 V, expostos na mesma régua do 12 V. Ajuste o trimpot com chave de fenda isolada e não encoste nos parafusos da régua.' },
            { tipo: 'dica', texto: 'Audição: volume alto por horas (acima de ≈85 dB) cansa e causa perda permanente. Teste em volume baixo e suba aos poucos.' }],
          acoes: [
            'Coloque o fusível de {{p:fus1}} do processador e depois o de {{p:fus40}} principal.',
            'Ligue a fonte na tomada aterrada.',
            'Meça na régua do módulo (+12VDC e GND) e ajuste para {{p:tensao}} no trimpot ADJ VOLTAGE da fonte.',
            'Ligue o som pelo app do processador (modo BOB): o LED do módulo acende.',
            'Em volume baixo, teste **uma saída por vez**, silenciando as outras no app: a 1 só na caixa L, a 2 só na R, a 3 e a 4 só no sub (cada uma sozinha toca mais baixo: é a ponte). Grave cheio numa JBL = RCA trocado.',
            'Se não sair som com os ganhos no mínimo, suba o ganho só um pouco: a regulagem certa vem no passo 3.11.'
          ],
          verificacao: ['{{p:tensao}} na régua do módulo.', 'LED do módulo aceso com o app ligado e apagado com ele desligado.', 'Cada saída toca só no seu falante.'],
          erro: 'Se o fusível queima na hora, há curto ou polaridade invertida. Tire da tomada e volte ao passo 3.7.'
        },
        {
          id: '3.10', titulo: 'Configurar o processador', tempo: '20 min', risco: 'medio',
          alertas: [{ tipo: 'atencao', texto: 'Na ponte, **todo ajuste da saída 3 se repete na 4**: fase, atraso, filtros, nível, EQ e limitador. Fase invertida em só uma delas cancela a ponte, e o sub fica mudo ou fraco.' }],
          acoes: [
            'Entrada A = L e B = R (ou Bluetooth do celular).',
            'Saídas 1 e 2 (caixas): passa-alta {{p:filtro_sat}} em {{p:corte}}, fase 0°.',
            'Saídas 3 e 4 (sub, ponte): passa-baixa {{p:filtro_sub}} em {{p:corte}} e subsônico em {{p:subsonico}}, fase 0°.',
            'Atraso: meça a distância de cada caixa e do sub até o sofá; a mais próxima recebe atraso igual à diferença (em cm, no app).',
            'Troque a senha do app (padrão 1234), para outro celular por perto não mudar os filtros.',
            'Com o processador configurado, passe a chave CH1/CH2 do módulo para F.'
          ],
          figuras: [{ tipo: 'tabela', ref: 'processador' }],
          basico: 'A caixa selada já corta 12 dB/oitava abaixo de ≈124 Hz. Somado ao filtro Butterworth de 12 dB, o corte que chega ao ouvido é de 24 dB/oitava e soma plano com o sub (0 a +1,3 dB na simulação). Com 24 dB elétricos nas caixas, abriria um buraco de −3 a −10 dB no cruzamento. Com a chave em F, o passa-alta das JBL é só o do processador: depois de um reset, confira se ele continua lá (passo 3.14).'
        },
        {
          id: '3.11', titulo: 'Regular o ganho', objetivo: 'Com o maior sinal que pode chegar, levar cada saída do módulo ao alvo.',
          tempo: '20 min', risco: 'alto', validar: true,
          alertas: [{ tipo: 'perigo', texto: 'Falantes **soltos** nesta etapa: tom de teste com falante ligado danifica o falante e a audição. Cabos só com a fonte fora da tomada; não encoste na régua dela (127/220 V nos bornes 7–9).' }],
          acoes: [
            'Desligue o som no app e tire a fonte da tomada. Solte os fios dos falantes no módulo ({{c:F1}}, {{c:F2}} e {{c:F3}}) e ligue a fonte de novo.',
            'No processador: master e níveis das saídas em 0 dB; filtros, EQ e limitador desligados. No celular: equalizador e efeitos desligados.',
            'Toque pelo Bluetooth o tom de {{p:tom}} com o celular a {{p:volume_teste}}. Chaves do módulo em F, GAIN no mínimo, multímetro em V AC nos bornes de saída.',
            'CH1 e CH2: suba o GAIN CH1-CH2 até {{p:ganho_sat}}. Se no mínimo já passar, deixe no mínimo e baixe juntas as saídas 1 e 2 no app até o alvo.',
            'Ponte CH4 ⊕ / CH3 ⊖: o mesmo com o GAIN CH3-CH4 até {{p:ganho_sub}}, baixando juntas as saídas 3 e 4 se precisar.',
            'LED da saída 3 ou 4 aceso = soma A+B ceifando no processador: baixe as duas até apagar e meça de novo.',
            'Anote os valores e o nível de cada saída na tabela de medições. Não desligue: o passo 3.12 usa o mesmo tom.'
          ],
          verificacao: ['CH1 e CH2 em {{p:ganho_sat}} e ponte em {{p:ganho_sub}}, com o celular a {{p:volume_teste}}.', 'LEDs de saída apagados.'],
          erro: 'Regular com o celular a 3/4: no 100 %, a JBL receberia até o dobro da tensão.',
          basico: 'Regulando com o maior sinal possível, o módulo nunca entrega mais que o alvo. O alvo das JBL vem do curso do cone, não do calor. Com 2,1 V vindos do processador, um módulo de 2 V de sensibilidade passa do alvo já no GAIN mínimo: daí o ajuste no nível da saída.'
        },
        {
          id: '3.12', titulo: 'Travar o teto e voltar os filtros', objetivo: 'Limitador no ponto regulado: nada passa da regulagem, mesmo com EQ ou nível subidos.',
          tempo: '15 min', risco: 'alto', validar: true,
          alertas: [{ tipo: 'atencao', texto: 'Daqui em diante, níveis e EQ do app **só para baixo**. O volume do dia a dia é o do celular.' }],
          acoes: [
            'Com o tom do passo 3.11 tocando e os falantes ainda soltos: em cada saída, baixe o limiar do limitador até o LED dela acender e suba até ele apagar. Saídas 3 e 4 com o mesmo limiar.',
            'Teste o teto: suba 2 dB o nível da saída 1. O LED acende e o multímetro **não** passa de {{p:ganho_sat}}. Volte o nível.',
            'Pare o tom, desligue o som no app e tire a fonte da tomada. Religue os falantes.',
            'Ligue de novo e reative os filtros das saídas (passo 3.10). Chaves CH1/CH2 e CH3/CH4 em F.',
            'Salve a memória 1 e exporte a configuração para o celular (Settings / Presets).',
            'Notebook pelo P2, quando entrar: toque o mesmo tom com ele a 100 % e meça. Se passar do alvo, ele vira a referência: refaça o 3.11 e este passo.'
          ],
          verificacao: ['Com o tom de referência, o LED de cada saída fica apagado.', 'Configuração salva no processador e no celular.'],
          erro: 'Se no teste o multímetro passar do alvo, o limitador age antes do nível de saída e não segura o nível. Anote e nunca suba os níveis.',
          basico: 'O limitador corta o sinal que passaria do limiar. Com o limiar no ponto regulado, nenhuma saída leva ao módulo mais que o alvo, mesmo se alguém subir o EQ, o nível ou o volume de outra fonte. No app, o limiar aparece em volts, na saída do processador.'
        },
        {
          id: '3.13', titulo: 'Ajuste de ouvido e validação', tempo: '40 min', risco: 'medio', validar: true,
          alertas: [{ tipo: 'atencao', texto: 'Antes de tocar alto, descubra se a caixa do sub tem duto: abaixo da frequência do duto, o cone fica quase solto e o subsônico precisa mudar.' }],
          acoes: [
            'Teste do duto: no gerador do app, varredura lenta de 25 a 60 Hz em volume baixo, só nas saídas 3 e 4, com lanterna no cone do sub. Se em alguma frequência o cone quase parar, a caixa tem duto e essa é a Fb.',
            'Subsônico nas saídas 3 e 4: selada → 25 Hz; com duto → ≈0,75–0,8 × Fb, 24 dB/oit; sem conclusão → fica em {{p:subsonico}}.',
            'Fase do sub: tom de 120 Hz e um app de decibelímetro no sofá (ou música de grave contínuo). Alterne 0° e 180° **nas saídas 3 e 4 juntas** e fique com o maior nível.',
            'Nível do sub: até o grave sumir na sala sem chamar atenção para a caixa (−3 a −9 dB no app, igual nas saídas 3 e 4).',
            'Grave embolado perto de 150 Hz: EQ paramétrico de −1 a −2 dB nas saídas 1 e 2.',
            'Salve a memória 1, exporte para o celular e preencha a tabela de medições.'
          ],
          figuras: [{ tipo: 'tabela', ref: 'medicoes' }]
        },
        {
          id: '3.14', titulo: 'Uso no dia a dia', tempo: '—', risco: 'baixo', validar: true,
          acoes: [
            'Ligar: fonte já na tomada, depois ON no app.',
            'Desligar: OFF no app e só então, se quiser, a tomada. O módulo desliga pelo REM antes de faltar energia, sem estalo.',
            'Uma vez, teste a volta da energia: com o app em ON e sem música, tire a fonte da tomada, ponha de volta e anote se o processador volta ligado ou desligado.',
            'Depois de qualquer reset (Reset Audio Settings, botão RESET) ou troca de memória, confira o passa-alta das saídas 1 e 2 **antes** de tocar: sem ele, a JBL recebe grave cheio.',
            'Volume pelo celular. Níveis e EQ do app só para baixo.'
          ],
          basico: 'O reset de áudio volta os filtros ao padrão de fábrica, sem o passa-alta das JBL. A configuração exportada para o celular (passo 3.12) traz tudo de volta.'
        },
        {
          id: '3.15', titulo: 'Se algo der errado', tempo: '—', risco: 'medio',
          figuras: [{ tipo: 'tabela', ref: 'diagnostico' }]
        }
      ]
    }
  ],

  diagnostico: [
    { sintoma: 'Nada liga', causa: 'Fusível queimado, fonte sem tensão ou som desligado no app (modo BOB)', acao: 'Confira os fusíveis, {{p:tensao}} na régua e +12 V no REM do módulo com o app ligado.' },
    { sintoma: 'Fusível queima ao ligar', causa: 'Curto ou polaridade invertida', acao: 'Tire da tomada e refaça o passo 3.7.' },
    { sintoma: 'Zumbido constante', causa: 'Cabo de sinal junto da rede elétrica ou loop de terra', acao: 'Afaste o RCA/P2 do cabo da tomada; teste com o notebook fora da tomada; isolador de loop de terra no P2.' },
    { sintoma: 'Distorce com grave forte', causa: 'Nível ou EQ subidos depois da regulagem, ou cone no limite do curso', acao: 'Volte níveis e EQ; refaça os passos 3.11 e 3.12; baixe o limiar das saídas 1 e 2.' },
    { sintoma: 'Sub mudo ou fraco depois de mexer na fase', causa: 'Saídas 3 e 4 com ajustes diferentes: a ponte se cancela', acao: 'Iguale fase, atraso, filtros, nível e EQ das saídas 3 e 4.' },
    { sintoma: 'JBL com grave cheio ou distorcendo no grave', causa: 'Passa-alta perdido (reset ou memória trocada) ou RCA de sub na entrada da JBL', acao: 'Confira o passa-alta das saídas 1 e 2; teste saída por saída (passo 3.9).' },
    { sintoma: 'Pouco grave no sofá', causa: 'Sub fora de fase ou uma caixa invertida', acao: 'Teste a fase em 180°; refaça o teste da pilha nas caixas.' },
    { sintoma: 'Um canal mudo', causa: 'RCA solto ou saída roteada errado no app', acao: 'Teste cada saída pelo app; troque o RCA de lugar para isolar o defeito.' },
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
    { dado: 'Rede elétrica exposta nos bornes 7–9 da fonte', origem: 'Foto do usuário, 08/10/2026 (componentes existentes/Fonte taramps Bob 60A)' }
  ],

  glossario: [
    { termo: 'Atraso (delay)', busca: ['atraso'], def: 'Ajuste do processador que segura o som de uma caixa por alguns milissegundos, para o som de todas chegar junto ao sofá.' },
    { termo: 'AWG', exato: true, def: 'Escala americana de bitola: número maior, fio mais fino. 16 AWG ≈ 1,3 mm²; 13 AWG ≈ 2,5 mm².' },
    { termo: 'Bitola', busca: ['bitola', 'mm²'], def: 'Seção do cobre do cabo, em mm². É a quantidade de cobre, não o diâmetro externo do cabo.' },
    { termo: 'Blindado (cabo)', busca: ['blindad'], def: 'Cabo de sinal com uma malha metálica em volta, que protege contra ruído e zumbido.' },
    { termo: 'Bluetooth (A2DP)', busca: ['Bluetooth'], def: 'Envio de música sem fio do celular para o processador. Tem um pequeno atraso: para filme, prefira o cabo.' },
    { termo: 'Borne', busca: ['borne'], def: 'Ponto de conexão onde o fio é preso. De parafuso: o fio entra num furo e um parafuso aperta (fonte, módulo, processador, porta-fusível). De mola: uma alavanca abre e a mola segura o fio (caixas BS-369).' },
    { termo: 'Butterworth / Linkwitz-Riley', busca: ['Butterworth', 'Linkwitz'], def: 'Tipos de filtro. Diferem na forma do corte e em como somam no cruzamento entre caixas e sub.' },
    { termo: 'Cabeça lentilha, panela e escareada', busca: ['lentilha', 'panela', 'escareada'], def: 'Formatos de cabeça de parafuso. Lentilha e panela são chatas embaixo e apertam a peça por igual; escareada é cônica e afunda num furo chanfrado.' },
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
    { termo: 'RCA', exato: true, def: 'Conector de sinal de áudio, normalmente branco (esquerdo) e vermelho (direito).' },
    { termo: 'Re', exato: true, busca: ['Re '], def: 'Resistência da bobina do falante medida com o multímetro; fica um pouco abaixo da impedância nominal.' },
    { termo: 'Régua de bornes', busca: ['régua'], def: 'Fileira de bornes lado a lado. A da fonte tem 9 (AC, terra, 3 positivos e 3 negativos); a de saída do módulo tem 11.' },
    { termo: 'REM', exato: true, def: 'Fio de liga/desliga remoto: com +12 V nele, o aparelho liga.' },
    { termo: 'Silicone acético / neutro', busca: ['acético', 'neutro'], def: 'Tipos de cura do silicone. O acético solta ácido (cheiro de vinagre) e corrói o cobre; o neutro, não.' },
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
