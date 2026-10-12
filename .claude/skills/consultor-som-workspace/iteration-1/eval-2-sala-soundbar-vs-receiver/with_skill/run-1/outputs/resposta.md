## Resumo

Você disse "música em primeiro lugar, filme de vez em quando". Nesse caso **eu não iria de soundbar**. Com R$ 3.000 eu montaria um **estéreo de verdade: um par de caixas de estante separadas e bem posicionadas**, ligado na TV por HDMI ARC ou por cabo óptico. O caminho que eu escolheria é **receiver AV usado + caixas passivas novas**. Se você quer só ligar na tomada e sem compra de usado, o plano B são **caixas ativas**.

Por quê:

- **Em música, o que dá o palco é a separação estéreo.** No jazz e na MPB você "vê" onde está o violão, a voz e o contrabaixo porque duas caixas estão afastadas 2 a 3 m uma da outra. A soundbar põe tudo numa barra de 1 m e "simula" essa largura com processamento. Em filme isso engana bem. Em música acústica soa artificial e estreito.
- **Em filme, um bom par estéreo já é muito melhor que o alto-falante da TV.** O diálogo fica no meio (o chamado "centro fantasma") se você sentar entre as caixas.
- **Dá para crescer.** Com receiver, depois você acrescenta um subwoofer e, se quiser, um canal central e as surrounds. A soundbar é um beco sem saída: quando enjoar, você troca tudo.

## Premissas

- Sala de ~20 m² (tipo 5 × 4 m), você sentado a **~2,5–3 m** das caixas, e cabe um móvel ou pedestal para duas caixas de estante dos lados da TV.
- A TV tem **HDMI ARC/eARC** e/ou **saída óptica** (quase todas as TVs dos últimos ~8 anos têm).
- É **apartamento ou casa com vizinho perto**. Por isso não coloquei subwoofer grande no começo.
- Você topa comprar **usado** em pelo menos uma peça. Se não topar, vá direto para a opção das caixas ativas.

**O que muda a recomendação:**
- Se não tem espaço para duas caixas, ou a estética manda (TV na parede, nada à vista): aí a **soundbar** é a resposta certa, e tudo bem.
- Se na prática você vê mais filme que ouve música: soundbar 3.1 com sub, ou receiver com 3.0/5.1.

## Arquitetura

```
Celular/Spotify ──(Bluetooth/Chromecast/AirPlay)──┐
TV (Netflix, etc.) ──(HDMI ARC ou óptico)──────────┤
                                                   ▼
                           Receiver AV usado (amplificação + seleção de fonte)
                                 │                        │
                     Caixa E ◄───┴───► Caixa D      [Pré-out de sub → sub no futuro]
```

Com caixas ativas, o amplificador fica dentro das próprias caixas. Aí a TV liga direto nelas pelo óptico e o celular pelo Bluetooth.

## Dimensionamento: quanto de potência precisa de verdade

Rodei a conta de SPL (nível de pressão sonora, o "volume" medido em dB) para caixas de estante comuns, com sensibilidade de **86 dB/1W/1m**, ouvidas a **3 m**:

| Potência por canal | SPL com o par (campo livre) | Na prática |
|---|---|---|
| 2 W | ~82 dB | Volume alto de conversa, música "de fundo forte" |
| 30 W | ~94 dB | Muito alto para uma sala. É onde ficam os picos do rock e as explosões do filme |
| 50 W (caixa de 88 dB) | ~95 dB por caixa (~98 dB o par) | Mais do que você vai usar numa sala de 20 m² |

Dentro de uma sala o volume real fica um pouco acima disso, porque as paredes refletem o som e ajudam.

**Interpretação:** a maior parte do tempo você vai usar **menos de 5 W**. De 30 a 50 W RMS reais por canal já sobra, desde que o amplificador aguente os picos sem distorcer ("clipar"). **Não pague por watts.** Pague por caixa boa. Receiver anunciado com "1000 W" é número de marketing.

**Grave:** caixa de estante com woofer de 5" a 6,5" desce bem até ~50–60 Hz. Isso cobre baixo de jazz, bumbo de rock e boa parte dos filmes. O que fica faltando é o "tremor" de explosão (abaixo de 40 Hz). Esse é o papel do subwoofer, que pode entrar depois.

## Opções de orçamento

Os valores são **estimativas** de faixa. Não pesquisei preço agora, e preço muda muito, então confira antes de comprar.

| Item | O que importa na especificação | A) Soundbar | B) Caixas ativas | C) Receiver usado + passivas ⭐ |
|---|---|---|---|---|
| Caixas / barra | Soundbar: 3.1 com sub sem fio, HDMI eARC. Caixas: woofer 5–6,5", sensibilidade ≥ 86 dB, 6–8 Ω | Soundbar 3.1 de marca (Samsung, LG, Sony, JBL): R$ 2.000–3.000 | Ativas com woofer 4–5", **entrada óptica + Bluetooth + saída de sub** (linhas Edifier R13xx/R17xx ou similar): R$ 1.200–2.000 | Par de caixas de estante novas, 5–6,5" (JBL Stage, Polk, Elac, Wharfedale de entrada): R$ 1.200–1.800 |
| Amplificação | 30–50 W RMS reais/canal, aguentar 6 Ω | Embutida | Embutida | Receiver AV usado de 5–10 anos (Denon, Yamaha, Onkyo, Pioneer) **com HDMI ARC e pré-out de sub**: R$ 900–1.400 |
| Streaming | Bluetooth decente ou Chromecast/AirPlay | Embutido | Bluetooth embutido | Muitos receivers dessa idade já têm rede/Bluetooth. Se não tiver, um receptor Bluetooth/streamer: R$ 100–500 |
| Cabos e acessórios | Cabo de caixa de cobre 1,5–2,5 mm² (sem "audiófilo"), óptico ou HDMI | incluso | Cabo óptico ~R$ 30 | Cabo de caixa + HDMI: ~R$ 100 |
| Suporte | Tweeter na altura do ouvido | – | Pedestal ou móvel firme: R$ 0–300 | Pedestal ou móvel firme: R$ 0–300 |
| **Total estimado** | | **R$ 2.000–3.000** | **R$ 1.300–2.300** | **R$ 2.300–3.000** |
| Sobra para o sub depois? | | Não (o sub já vem, mas é o dele) | Sim, se tiver saída de sub | Sim, pelo pré-out |

**Comparando as três:**

- **A) Soundbar.** Pró: zero fio, estética, bom para diálogo, um controle só. Contra: palco estéreo estreito, e o "sub" das soundbars costuma ser um grave inchado numa frequência só. Não evolui.
- **B) Caixas ativas.** Pró: simples, garantia de loja, ótimo custo-benefício para música, som estéreo de verdade. Contra: potência e grave limitados por woofer pequeno, sem canal central/surround no futuro. Se o amplificador interno queimar, vai o conjunto todo para a assistência.
- **C) Receiver usado + passivas.** Pró: melhor som por real gasto. Tem HDMI ARC (o controle da TV ajusta o volume), calibração automática de sala (Audyssey/YPAO: você põe o microfone que vem junto na posição de escuta e o receiver corrige atraso, nível e parte dos problemas da sala) e caminho aberto para 2.1 → 3.1 → 5.1. Contra: exige comprar usado com cuidado e ocupa mais espaço.

**O que eu faria:** a opção **C**, gastando ~R$ 1.100 no receiver e ~R$ 1.500–1.700 nas caixas. As caixas são o que mais define o som, então são elas que levam a maior parte do dinheiro. Depois, quando der, somaria um subwoofer de 8"–10" (R$ 1.000–1.500) com corte em 80 Hz. Se você não quer mexer com usado, iria de **B com um modelo que tenha saída de sub**, e guardaria o restante para o sub.

## Onde economizar / onde não economizar

- **Economize:** receiver (usado de marca tradicional rende muito), cabos (cobre comum resolve), streaming (o Bluetooth do celular já serve para começar).
- **Não economize:** **as caixas**. Elas mais a sala definem ~80% do resultado. Também não economize no posicionamento, que é de graça.

## Riscos e cuidados

- **Áudio da TV pelo óptico:** configure a saída de áudio da TV para **PCM/Estéreo**. Se ela mandar Dolby Digital (bitstream) para caixas ativas que não decodificam, dá silêncio ou chiado. No receiver via HDMI ARC isso não é problema, porque ele decodifica.
- **Receiver usado:** teste antes de pagar. Todas as entradas, os dois canais em volume médio-alto por alguns minutos (tem que tocar sem estalo, chiado ou desligamento), o HDMI e o display. Pergunte se tem o microfone de calibração: ele faz falta.
- **Impedância:** receivers de entrada preferem caixas de **6–8 Ω**. Evite caixas de 4 Ω nominais com receiver barato em volume alto.
- **Falsificação e anúncios inflados:** para caixas novas, compre em loja oficial ou "vendido e entregue por" Amazon/Magalu/Mercado Livre. Desconfie de preço bom demais em marca famosa. Ignore "PMPO" e "potência máxima".
- **Vizinhos e grave:** o grave atravessa laje e parede. Se entrar sub, use volume moderado e não coloque o sub direto no piso compartilhado sem um apoio que desacople (base de espuma densa ou borracha).
- **Posicionamento, que é o mais barato e rende mais:** caixas a ~2–2,5 m uma da outra, formando um triângulo com você. Tweeter na altura do ouvido, levemente viradas para você. Pelo menos 30–50 cm da parede de trás, e **não enfiadas no canto** (o grave fica inchado). Não sente encostado na parede do fundo. Tapete e cortina ajudam muito na clareza.

## Próximos passos

1. **Decida uma coisa:** "tenho espaço para duas caixas nos lados da TV?" Se não, vá de soundbar e me diga o tamanho da TV e o móvel que eu afino a escolha.
2. **Me diga** o modelo da TV (para confirmar ARC e óptico) e se topa usado. Com isso eu te passo uma lista curta de receivers e caixas que casam entre si, com as specs para conferir no anúncio.
3. **Ordem de compra (opção C):** caixas primeiro, enquanto procura o receiver usado com calma. Depois o receiver. Rode a calibração automática. Viva uns meses com o 2.0 antes de decidir sobre o sub.
4. **Opcional para aprender:** baixe o REW (gratuito). Com um microfone de medição USB (~R$ 400–600) você vê de verdade como a sua sala responde no grave.

Se quiser, na próxima mensagem já monto a lista de modelos concretos para a opção que você escolher e salvo como projeto para a gente ir acompanhando.
