## Resumo — o que eu faria

Eu **não** compraria soundbar nem receiver novo. Montaria um **estéreo 2.0 com um par de caixas de estante passivas + amplificador classe D compacto** (Bluetooth, entrada RCA, saída para subwoofer), ligado na TV por um conversor óptico. O subwoofer entra depois, como etapa 2 (vira 2.1). Cabe nos R$ 3.000 com folga na versão com usados e no limite na versão nova com nota fiscal.

Por quê, em três linhas:

1. Seu uso é **música primeiro**. MPB, jazz e rock pedem duas caixas afastadas 2–2,5 m, com woofer de 5–6,5" e médio natural — exatamente o que soundbar não entrega, por geometria (a conta está logo abaixo).
2. Em 20 m², sentado a ~3 m, **30–50 W reais por canal já dão ~95 dB de pico** na poltrona. Receiver de 5–7 canais gasta o dinheiro em canais que você não vai usar agora.
3. É a montagem que **evolui sem jogar nada fora**: o par de caixas fica para sempre; o sub entra pela saída dedicada; se um dia virar home theater 5.1, um receiver AV entra no lugar do amp e o amp compacto vai para o quarto ou a mesa.

## As três opções que você levantou

| | Soundbar boa (R$ 2.500–3.500) | Receiver + caixas | Caixas ativas |
|---|---|---|---|
| Música (MPB/jazz/rock) | Fraca: drivers de 4–5 cm, "largura" simulada por DSP, grave de um sub pequeno afinado para efeito de filme | Boa — depende só das caixas | Boa em ambiente pequeno; em 20 m² só os modelos maiores dão volume de rock sem esforço |
| Filme | Excelente para diálogo (canal central, eARC, um controle só) | Muito bom; *bass management* de verdade (corta as caixas em 80 Hz e manda o resto ao sub) | Ok; vários modelos (Edifier S2000, R2000DB) não têm saída de sub |
| Integração com a TV | A melhor | HDMI ARC | Óptico + remoto (Edifier) ou nada disso (monitores de estúdio) |
| Evolução / conserto | Nenhuma — ecossistema fechado | Total | Quando o amplificador embutido morre, morre o par |
| Onde o dinheiro vai | Processamento e conveniência | Novo: R$ 3.000–4.500 **só o receiver**, não sobra caixa. **Usado** (R$ 800–1.300): fecha | Tudo nas caixas — bom custo/benefício |

O número que resolve a soundbar para música: sentado a 3 m, um par de caixas afastadas 2,5 m abre um ângulo de **45°** para você (o ideal é ~60°, o triângulo equilátero). Uma soundbar de 1 m de largura abre **19°**. Nenhum DSP transforma 19° em palco de jazz — ele simula largura com reflexões e truques de fase, e o preço disso é o médio (voz, piano, violão) perder corpo. Soundbar faz sentido quando estética e "nenhuma caixa aparecendo na sala" mandam. Se for o seu caso, me diga e eu monto a escolha por esse caminho sem culpa.

Receiver AV: a única versão que cabe no orçamento é o **usado de 5–10 anos** (Denon AVR-X/S, Yamaha RX-V, Onkyo TX-NR) — e essa versão é boa. Ganha HDMI ARC, calibração automática (Audyssey/YPAO) e crossover real para o sub. Perde em: caixa de 43 cm e ~10 kg na estante, esquenta, consome em standby, e o risco clássico de placa HDMI em usados. Um detalhe que derruba um medo comum: como só o **áudio** passa pelo receiver (via ARC), a versão HDMI dele ser antiga (sem 4K/HDR) **não importa** — o vídeo continua indo direto para a TV.

Caixas ativas: para mesa ou quarto eu escolheria. Para sala com TV, você paga o mesmo que caixas passivas + amp e fica sem saída de sub, ou sem volume no controle remoto e com duas tomadas na parede (monitores de estúdio). Empate técnico, derrota prática.

## Premissas (o que muda se não for assim)

- Sala de ~5 × 4 m, pé-direito 2,7 m; você senta a **~3 m** das caixas, que ficam na parede da TV, afastadas 2–2,5 m entre si. Se a escuta for a 2 m, sobra ainda mais potência.
- **Apartamento ou casa com vizinhos**: começar em 2.0 sem sub é também prudente. Em casa isolada, o sub sobe de prioridade e pode entrar já.
- A TV tem **saída óptica** (praticamente todas têm) e/ou HDMI ARC. Filme vem dos apps da TV; música vem do celular (Spotify/YouTube Music) por Bluetooth — ou, melhor, pelo app de streaming da própria TV via óptico, que tem mais qualidade que Bluetooth.
- Nível de escuta: "alto, mas não festa" — ~85 dB médio na poltrona, picos de 95–100 dB. Se você ouve rock em volume de festa com frequência, sobe um degrau na sensibilidade das caixas (Klipsch) ou na fonte do amp (48 V).
- Você não tem nada aproveitável hoje (amp, caixas, sub). Se tiver, me diga: muda a lista.
- R$ 3.000 é o total **agora**, incluindo cabos; o sub pode ser etapa 2.
- Preços são estimativas de memória, sem pesquisa hoje — confira antes de comprar.

## Arquitetura

```
Celular (Spotify) ──Bluetooth──────────────────┐
                                               ├─► Amplificador classe D compacto ──► Caixa E (6–8 Ω)
TV (apps) ──óptico──► DAC óptico→RCA ──RCA─────┤   TPA3255, fonte ≥ 32 V          ──► Caixa D (6–8 Ω)
                                               │   entradas: Bluetooth + RCA
                                               └─ saída SUB (RCA) ──► [etapa 2] Subwoofer ativo 8–10", passa-baixa ~80 Hz

Elétrica: TV + amp + DAC na mesma tomada/filtro de linha (evita zumbido de loop de terra).
```

Dois ajustes que decidem se isso funciona no primeiro dia:

- **Saída de áudio da TV em PCM**, não "Dolby Digital / Bitstream / Auto". Conversor óptico barato não decodifica Dolby — em bitstream ele entrega silêncio ou ruído.
- **Volume no sofá.** O controle da TV normalmente não atua na saída óptica. Ou o amp tem controle remoto (confira no anúncio — nem todo TPA3255 compacto tem), ou você escolhe um amp com **entrada óptica embutida e remoto** (dispensa o DAC), ou aceita ajustar o volume pelo celular no Bluetooth e no botão para filme.

## Dimensionamento

**Alvo.** 85 dB médio na poltrona já é "alto" (não dá para conversar); rock e jazz com dinâmica têm picos 10–15 dB acima → precisamos de **~95–100 dB de pico a 3 m**.

**Quanto de potência isso pede** (`calc_som.py spl`, campo livre — em sala fechada soma uns 3 dB):

| Caixa (sensibilidade real) | Potência por canal | SPL a 3 m, 2 caixas |
|---|---|---|
| Tipo JBL Stage A130: "86 dB" em 2,83 V/6 Ω = **84,7 dB/1 W** | 30 W | ~93 dB |
| Tipo Polk Monitor XT15: 86 dB em 2,83 V/8 Ω = 86 dB/1 W | 30 W | ~94 dB |
| Tipo Klipsch R-41M: 90 dB/1 W | 15 W | ~95 dB |

Ou seja: **30–50 W reais por canal fecham** com qualquer caixa de estante de marca. Mais potência compra folga (headroom), não mais volume perceptível — para +10 dB seriam 10× os watts. A média da música fica em 2–5 W; os 30–50 W são para o pico.

> **Vale saber — sensibilidade em dB/2,83 V × dB/1 W:** catálogo adora "2,83 V/1 m" porque 2,83 V em 8 Ω é exatamente 1 W. Em 6 Ω vira 1,33 W (a caixa parece 1,3 dB melhor do que é); em 4 Ω vira 2 W (+3 dB de mentira). Para comparar duas caixas, converta tudo para 1 W — a calculadora faz isso com `--ref 2.83v --impedancia`.

**Qual amp entrega isso.** Placa classe D em ponte tem o teto de potência dado pela **fonte**: com **32 V** o TPA3255 faz ~38–45 W limpos em 8 Ω e ~50–60 W em 6 Ω — fecha. Com 24 V (TPA3116) ficam ~22–34 W — fecha justo, só com caixa de 87 dB ou mais. Fonte de 19 V (tipo notebook) não dá para rock alto em 20 m². **Compre o amp com fonte de 32 V ou mais** — é ela que define a potência real, não o "2×150 W" da caixa do produto.

> **Vale saber — potência de placa classe D depende da fonte:** teto teórico por canal P ≈ V²/(2·Z); conte com 60–70% disso sem distorção. 32 V em 8 Ω → 64 W de teto, ~40 W limpos. O "2×150 W" do anúncio é com 48 V em 4 Ω — não é mentira, mas não é a sua condição.

**Cabo de caixa.** 5 m por lado, caixa de 6 Ω: mínimo 0,57 mm² para a resistência ficar abaixo de 5% da impedância (`calc_som.py cabo-falante`). Cabo paralelo comum de **cobre 2×1,5 mm²** sobra e custa R$ 5–8/m. Cabo "audiófilo" não muda nada mensurável aqui.

**Sala.** 5 × 4 × 2,7 m tem modos axiais (ressonâncias entre paredes paralelas) em ~34, 43 e 64 Hz e múltiplos — é onde o grave "incha" ou "some" conforme a posição. Caixa de estante para em ~50–60 Hz, então em 2.0 você quase não sofre com isso; quando o sub entrar, a posição dele vale mais que o preço dele.

## Opções de orçamento

| Item | Especificação que importa | Onde comprar | Econômico | Equilibrado (minha escolha) | Caprichado (caminho home theater) |
|---|---|---|---|---|---|
| Caixas de estante (par) | Woofer 5–6,5", tweeter dome ou corneta, **≥ 85 dB/1 W**, 6–8 Ω, resposta até ~55 Hz | Usadas: OLX / ML usados (testar antes) · Novas: ML Loja Oficial / Amazon "vendido e entregue por Amazon" | Usadas de marca (JBL, Polk, Wharfedale, Klipsch): **600–1.000** | Novas com NF, ex. JBL Stage A130, Polk Monitor XT15, Klipsch R-41M: **1.300–1.800** | Um degrau acima, ex. Wharfedale Diamond 12.1, Polk Signature ES15, Elac Debut B5.2 (promoção ou usadas): **1.700–2.300** |
| Amplificação | Classe D **TPA3255, fonte ≥ 32 V**, Bluetooth 5.x, entrada RCA, saída SUB; de preferência remoto ou entrada óptica (exemplos da faixa: Fosi ZA3 / BT30D Pro, Aiyima A07 Pro — confira entradas e remoto no anúncio) | AliExpress / Shopee, ou vendedor nacional do mesmo item (mais caro, entrega rápida) | TPA3116/3255 com Bluetooth e fonte 24–32 V: **350–600** | TPA3255 com fonte 32–36 V e saída SUB: **550–800** | **Receiver AV usado** 5–10 anos com HDMI ARC, saída SUB e calibração (Denon AVR-X/S, Yamaha RX-V, Onkyo TX-NR): **800–1.300** |
| Ligação com a TV | Conversor óptico→RCA (TV em PCM) | Shopee / ML | **60–120** | **80–150** | (via ARC — cabo HDMI na linha de cabos) |
| Cabos | Falante cobre 2×1,5 mm² 10–12 m, RCA, óptico ou HDMI, plugues banana | Loja nacional / ML | **60–100** | **80–120** | **100–180** |
| Apoio das caixas | Tweeter na altura da orelha (~1 m sentado): estante existente, suporte de parede ou pedestal (DIY de MDF/PVC serve) | Já tem / ML | **0–100** | **0–150** | **0–200** |
| **Total estimado** | | | **R$ 1.070–1.920** | **R$ 2.010–3.020** | **R$ 2.600–3.980** |

Leitura das colunas:

- **Econômico** é a que mais rende por real — o mercado de usados é onde Hi-Fi compensa. Sobra dinheiro para o sub já. O custo é o seu tempo: testar a caixa (suspensão do woofer sem rachaduras, tweeter tocando, sem chiado num "sweep" de frequências rodado no celular).
- **Equilibrado** é o que eu compraria com R$ 3.000, nota fiscal e garantia. Encosta no orçamento na ponta alta; o sub vem em 2–4 meses.
- **Caprichado** só cabe nos R$ 3.000 se receiver e caixas saírem na ponta baixa. É a coluna certa **se filme vai crescer** (central + surrounds no futuro): o receiver dá crossover real em 80 Hz, calibração e ARC com um controle só. Para música pura, ela não soa melhor que a Equilibrado — você paga funcionalidade, não som.

**Etapa 2 (para qualquer coluna): subwoofer ativo de 8–10"**, amplificador interno ≥ 100 W RMS, passa-baixa ajustável e entrada RCA — novo R$ 900–1.600, usado R$ 500–900. Ligado na saída SUB do amp.

## Onde economizar / onde não

- **Economize** em: cabos (1,5 mm² de cobre resolve), pedestal (DIY), conversor óptico (o de R$ 80 é transparente para isso) e no amplificador em si — o classe D compacto entrega o que a sala pede.
- **Não economize** em: **caixas** (definem a maior parte do som e ficam para sempre), **fonte do amp** (32 V ou mais, a do kit oficial ou de marca — fonte genérica de 12 V de câmera dá zumbido e metade da potência) e, quando chegar, no **sub** (sub ruim em volume alto é o que faz o vizinho bater na porta e o grave embolar).

## Riscos e cuidados

- **Saída em ponte (BTL).** Nas placas TPA3116/TPA3255 os dois fios de cada caixa são "vivos". Nunca ligue o sub pela entrada de **nível de falante** (high-level) nem junte os negativos dos canais — é curto na saída, placa queimada. Sub sempre pela saída RCA "SUB".
- **TV em bitstream** → conversor mudo. Ajuste PCM antes de achar que veio com defeito.
- **Falsificação e potência de mentira.** Klipsch/JBL/Polk com preço muito abaixo do mercado em vendedor sem histórico = provável falso. Compre em Loja Oficial ou Amazon. Em amp classe D, ignore o número da caixa e olhe a tensão da fonte.
- **Receiver usado** (coluna Caprichado): teste o ARC com **a sua TV** antes de pagar e prefira modelos de ~2012 em diante (ARC funcional). Placas HDMI de Onkyo 2009–2012 têm histórico ruim.
- **Posicionamento**: caixa encostada no canto ou dentro de nicho fechado = grave inchado. 20–40 cm da parede de trás, fora dos cantos.
- **Vizinhos**: grave atravessa parede; isolar é caro. Em apartamento, o sub entra com volume moderado e cortado em ~80 Hz, não como festa.
- **Audição**: 95 dB de pico é normal; 85 dB de média por horas seguidas já cansa e fere. Volume alto de vez em quando, não como padrão.

## Próximos passos

1. **Decida a família de caixas** (e, se puder, ouça antes). JBL Stage e Polk são mais neutras/quentes — para voz de MPB e jazz eu iria nelas. Klipsch (tweeter de corneta) é mais viva e brilhante — ótima para rock, pode cansar em voz e piano. Compre as caixas primeiro: são elas que definem o som, e o resto se ajusta a elas.
2. **Amp + conversor + cabo**: TPA3255 com fonte ≥ 32 V, Bluetooth, saída SUB (e remoto ou óptico embutido, se achar na faixa); conversor óptico→RCA; 10–12 m de cabo 2×1,5 mm².
3. **Montagem**: caixas afastadas 2–2,5 m, tweeter na altura da orelha, levemente viradas para você (toe-in), 20–40 cm da parede; TV em PCM; volume do amp em ~70% e ajuste fino pelo celular/remoto.
4. **Duas semanas em 2.0** com seus discos de referência. Aí você decide se quer sub, e de que tamanho — com a sala já "falando".
5. **Sub (etapa 2)**: 8–10", ligado na saída SUB. Como o amp compacto não corta o grave das caixas, ajuste o passa-baixa do sub em ~60–70 Hz (onde as caixas começam a cair) para não somar grave duplicado. E faça o *sub crawl*: sub na poltrona, você anda pela sala procurando onde o grave soa uniforme, e o sub vai para lá.
6. Se um dia filme virar 5.1, o receiver AV usado entra no lugar do amp compacto — as caixas ficam, o amp vai para o quarto ou a mesa.

## O que mudaria minha resposta

- Se **estética / "nenhuma caixa visível"** pesa mais que música → soundbar boa, sem culpa; eu monto a escolha.
- Se **filme vai crescer** para 5.1 nos próximos 1–2 anos → vá direto para a coluna Caprichado (receiver usado).
- Se **você senta a menos de 2 m** ou a sala tem mesa de trabalho → caixas ativas voltam a competir.

Se decidir seguir por esse caminho, eu salvo como projeto e a gente fecha modelos e preços atuais a partir dele.

📝 Anotei no seu perfil (C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-2\with_skill\run-1\outputs\perfil.md): sala de ~20 m², ouve MPB/jazz/rock e prioriza música sobre filme.
