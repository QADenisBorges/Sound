## Resposta curta

Faz sentido **em parte**. A base — módulo automotivo com fonte 12 V, sub de carro em caixa refeita para sala, decodificador óptico — funciona e é um caminho conhecido de home theater barato. O que **não fecha** é a conta de canais: 5.1 são cinco caixas mais o sub, ou seja, **seis canais de amplificação** (ou cinco + um mono para o sub). Você tem quatro canais e listou três caixas (duas frontais + sub). Do jeito descrito, isso é um **2.1 alimentado por um decodificador 5.1** — e sem o canal central, que carrega o diálogo e é o canal mais importante num filme.

A boa notícia: com 4 canais dá para fazer um **3.1 honesto** (frente esquerda, direita, central e sub), que para filme rende mais que um 5.1 mal resolvido — e dá para crescer para 5.1 sem jogar nada fora. Abaixo, elo por elo, o que fecha e o que precisa de ajuste, e três caminhos.

## Premissas

Não tenho os modelos, então assumi valores típicos; se algum for diferente, a conta muda e digo onde:

- **Módulo**: classe D, 4 × ~100 W RMS em 2 Ω (≈ 60 W em 4 Ω, ≈ 30 W em 8 Ω), estável em 4 Ω em ponte, filtros HPF/LPF fixos em ~80 Hz por par de canais, entrada RCA.
- **Sub**: 12", 4 Ω (ou bobina dupla 2+2 Ω), ~250 W RMS, sensibilidade ~88 dB/1W/1m.
- **Caixinhas do mini system**: full-range de 4", 6–8 Ω, ~10 W RMS reais, ~85 dB/1W/1m.
- **Sala**: ~3 m do sofá até a TV; assumo apartamento (importa para o sub).
- **Fonte de sinal**: TV com saída óptica, streaming pelos apps da própria TV.

## Elo por elo

**1. TV → decodificador.** Antes de comprar o decodificador, confira no menu de áudio da TV se existe a opção **"Bitstream" / "Dolby Digital"** na saída digital. Muitas TVs mandam só **PCM estéreo** pela óptica nos apps de streaming, e várias não passam DTS. Sem bitstream, o decodificador recebe 2.0 e não tem o que decodificar — vira um DAC caro. Segundo ponto: a saída óptica da TV costuma ter nível fixo, então o **decodificador precisa ter volume geral no controle remoto**; senão você vai regular volume no ganho do módulo, e ganho não é volume.

**2. Decodificador barato.** A spec que decide é o **gerenciamento de graves (bass management)** — ajuste de caixa "small/large" ou de frequência de corte. Sem isso, a saída SW leva **só o LFE** (a trilha de efeitos), e o grave da música e das vozes vai para as caixas — no caso, para caixinhas de 4" que não reproduzem nada abaixo de ~100 Hz. Resultado: explosão no sub e trilha sonora magra. Com bass management, o decodificador desvia tudo abaixo de ~80–100 Hz das caixas pequenas para o sub, e as caixinhas do mini system deixam de ser problema no grave. Se o modelo não tiver, o plano B é o HPF de 80 Hz do módulo nas caixas e aceitar perder o grave que não é LFE.

**3. Módulo automotivo em casa.** Funciona; precisa de **fonte chaveada de 12–14,4 V**, dimensionada pela corrente média, não pelo pico. Para 400 W RMS totais em 13,8 V (classe D, ~80 % de eficiência): 36 A na potência cheia contínua, **4,5–12 A** de média com música (`calc_som.py corrente`). Uma fonte de **30 A (~360 W)** sobra em volume doméstico; 40 A se quiser folga para o sub em ponte. Ligue o **REM no +12 V** da fonte, fusível no positivo, cabo curto (2,5–4 mm² para até 1 m). **Zumbido** (loop de terra) é o problema clássico dessa montagem: TV, decodificador e fonte na **mesma tomada/filtro de linha**, fonte com terra ligado.

**4. Caixinhas do mini system como frontais.** Servem para começar, com dois cuidados. O canal do módulo entrega ~30 W em 8 Ω — três vezes o que a caixinha aguenta —, então o **ganho tem que ser regulado baixo**: alvo de **~8,9 V AC** na saída (10 W em 8 Ω; 7,7 V se forem 6 Ω), medido com tom senoidal e falantes desconectados. E HPF em 80–100 Hz sempre ativo: o que mata falante desses é grave cheio e clipping, não "potência sobrando". Confirme a impedância com multímetro (resistência DC ≈ 0,7–0,9 × a nominal) — mini system tem caixa de 3, 4, 6 e 8 Ω; abaixo de 4 Ω, cheque se o módulo é estável em 2 Ω por canal. Em volume: 85 dB de sensibilidade com 10 W a 3 m dá ~86 dB por caixa — bom para TV e série, curto para "volume de cinema" (picos acima de 100 dB). É o **elo fraco** do sistema e o primeiro upgrade natural; quando isso acontecer, elas viram surrounds, papel em que se saem bem.

**5. Sub de carro na sala.** Funciona e costuma ser o pedaço que mais rende. Mas a caixa que ele tinha no carro provavelmente não serve em casa:

> **Vale saber — ganho de cabine:** o carro é um espaço pequeno que reforça o grave abaixo de ~50–70 Hz em vários dB (quanto menor o carro, maior). Por isso sub de carro é projetado para caixa selada pequena. Na sala esse reforço não existe, e o mesmo sub na mesma caixa soa "seco", sem peso abaixo de 50 Hz. Solução: caixa **dutada maior**, sintonizada baixo.

Ponto de partida para 12": **~55–65 L líquidos, sintonia ~30–32 Hz**. Com 60 L e Fb 32 Hz, um duto de PVC de 100 mm (9,6 cm interno) fica com **~29 cm**; com 75 mm (7,2 cm interno), ~14 cm — o de 100 mm é melhor (menos sopro). Simule com os T/S do sub no WinISD antes de cortar MDF; sem T/S, use o volume dutado recomendado pelo fabricante e sintonize ~30 Hz. Filtro subsônico (~25 Hz) se o módulo tiver; caixa dutada sem ele leva o cone além do Xmax.

Potência: um canal do módulo (~60 W em 4 Ω) dá ~96 dB a 3 m; em ponte (~200 W em 4 Ω), ~101 dB — os dois sobram para sala, e a sala ainda soma no grave. Quem decide é a **impedância do sub**: ponte pede 4 Ω (bobina dupla 2+2 Ω em série = 4 Ω; sub simples de 2 Ω não vai em ponte). Confira no manual se há chave **2CH/4CH** — sem ela, o módulo exige sinal nas quatro entradas RCA mesmo em ponte, e você precisa de um Y.

## Três caminhos

| | **A — 3.1 com o que tem** | **B — 5.1 crescendo do A** | **C — Receiver AV usado** |
|---|---|---|---|
| O que compra (estimativa) | Decodificador com bass management e controle (R$ 150–400) + fonte 12 V 30 A (R$ 100–200) + 1 caixa para central, de preferência da mesma família das frontais (R$ 50–150) + MDF 18 mm/PVC da caixa do sub (R$ 100–180) | Tudo do A + placa TPA3116 2×50 W na mesma fonte 12 V (R$ 40–90) para os surrounds + par de caixas de estante usadas para a frente (R$ 150–400) | Receiver 5.1 usado, 5–10 anos (Denon/Yamaha/Onkyo/Pioneer, R$ 400–900) + fonte 12 V ~20 A (R$ 80–150) + MDF/PVC (R$ 100–180) + 1 caixa para central (R$ 50–150) |
| Canais do módulo | par 1/2 = E/D com HPF 80 Hz; par 3/4 = central + sub em **FULL**, confiando no bass management do decodificador (o filtro do módulo é por par: LPF no par 3/4 tiraria os médios da central) | módulo: E, D, central, sub; TPA3116 (~8–12 W por canal em 12–14 V — suficiente para surround): caixinhas do mini system | módulo em ponte só no sub, a partir do "sub out" do receiver; o receiver alimenta as 5 caixas; 2 canais do módulo sobram |
| Total estimado | **R$ 400–930** | **R$ 590–1420** | **R$ 630–1380** |
| Prós | Gasta o mínimo, usa tudo o que tem, diálogo com canal próprio | 5.1 de verdade, frontais à altura, nada do A é jogado fora | Bass management, calibração automática com microfone, HDMI ARC, downmix, volume no controle — o que mais dá dor de cabeça em A já vem resolvido |
| Contras | Sem surrounds (decodificador barato pode não redistribuir os traseiros — perde ambiência); qualidade do decodificador é loteria | Dois amplificadores para casar nível "no ouvido" se o decodificador não tiver nível por canal; mais cabo, mais chance de zumbido | Se você começou por A, o decodificador fica sem uso; receiver antigo pode não passar HDMI 4K (óptica/ARC resolvem) |

Preços são estimativas de mercado (Mercado Livre, Shopee, OLX) — confira antes de comprar. Decodificador e fonte: loja nacional com nota e garantia; placa TPA3116: AliExpress/Shopee (componente genérico, sem marca a falsificar); caixas e receiver: usados (OLX/ML), testando antes.

## O que eu faria

**A, agora, desenhado para virar B** — porque você já tem 80 % do hardware, "barato" é a prioridade declarada, e um 3.1 bem regulado entrega o que importa num filme: voz clara e grave com peso. Nada comprado em A é descartado em B. Mas com uma condição de cada lado:

- A só vale se **a TV manda bitstream** e **o decodificador tem bass management e volume no controle**. Se a TV não manda bitstream, nem decodificador nem receiver salvam — resolva isso primeiro (às vezes é ajuste de menu; às vezes é usar um player/TV box como fonte).
- Se você já sabe que vai gastar na faixa de B (R$ 600+), **gaste em C em vez de B**: é o mesmo dinheiro, e a calibração automática do receiver acerta nível, distância e crossover das cinco caixas em dez minutos — coisa que em B você faz no ouvido. O módulo continua útil, em ponte no sub.

Provocação honesta: o que você quer — "5.1" no papel, ou filme com voz clara e grave presente sem brigar com o equipamento? Se é o segundo, 3.1 bem feito hoje ganha de 5.1 improvisado.

## Riscos que valem uma linha

- **Sub em apartamento**: o vizinho recebe o grave, e isolar grave é caro — sintonia baixa e volume moderado, ou selada maior (~40 L) como meio-termo.
- **Fonte sem marca**: ruído e risco; prefira fonte com terra, proteção contra curto e gabinete metálico aterrado.
- **Decodificador "genérico"**: anúncio sem spec de bass management e sem controle remoto = não compre.
- **Ventoinha do módulo**: alguns fazem barulho em sala silenciosa; teste antes de montar.
- **Audição e falantes**: com o ganho regulado no alvo acima, o sistema não passa do limite das caixinhas — é proteção para elas e para você.

## Antes de comprar qualquer coisa

1. Menu de áudio da TV: existe "Bitstream"/"Dolby Digital" na saída digital? Teste com um filme em Dolby (Netflix/Prime) e veja se a TV indica 5.1.
2. Etiqueta/manual do módulo: RMS por canal e em que tensão/impedância, impedância mínima (2 Ω estéreo / 4 Ω ponte?), chave 2CH/4CH, HPF/LPF/subsônico.
3. Etiqueta do sub: bobina simples ou dupla, impedância, RMS, e se o fabricante publica T/S ou volume dutado recomendado.
4. Multímetro nas caixinhas: resistência DC e a potência gravada no ímã.

Me responde essas quatro, mais **casa ou apartamento** e a **distância do sofá até a TV**, que eu fecho o dimensionamento (fonte, caixa do sub com os T/S reais, regulagem de ganho canal a canal) no formato de projeto — e salvo como projeto para continuarmos dali.

📝 Anotei no seu perfil (`C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-6\with_skill\run-1\outputs\perfil.md`): você possui módulo automotivo de 4 canais, sub de carro e um par de caixas de mini system; objetivo atual é um home theater 5.1 de baixo custo em casa reaproveitando essas peças.
