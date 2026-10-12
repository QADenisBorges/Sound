# Módulo de 1200 W RMS num sub de 400 W RMS — e a ideia de ligar em 1 Ω

Resposta curta: as duas conclusões estão invertidas, e a segunda piora a primeira.

1. Quem protege o sub não é a sua mão no volume — é o **ganho do módulo**, regulado para que o máximo que sai dele seja ~400 W na impedância do sub. Regulado certo, no volume máximo limpo da fonte o módulo entrega 400 W e não mais.
2. Ligar em 1 Ω **aumenta** a potência que o módulo joga no sub (é isso que "dobrar a potência" significa). Seu problema já é potência sobrando — então 1 Ω "compensa" ao contrário. O lever é a impedância, sim, mas para o **outro lado**: ligar na impedância mais alta em que o módulo entregue perto dos 400 W (normalmente 4 Ω).

## Premissas (me corrija se for diferente)

- Módulo anuncia **1200 W RMS medidos a 14,4 V em 1 Ω**, padrão das marcas nacionais (Taramps, Stetsom, SounDigital, Banda). Se o anúncio não diz tensão nem impedância, o número provavelmente é inflado — módulo "num precinho" pede essa checagem (seção 4).
- Sub de **400 W RMS de verdade** (datasheet), bobina simples 4 Ω ou bobina dupla 2+2 Ω.
- Carro com elétrica original, cabo de força de ~5 m até o porta-malas, caixa (selada ou dutada) já existente.

## 1. "Não colocar o volume no máximo" — por que isso não protege

**Volume e ganho são coisas diferentes.** O botão de volume da fonte controla o sinal de entrada; o ganho do módulo diz quanto ele amplifica esse sinal. Se o ganho estiver alto, o módulo pode chegar a 1200 W com o volume na metade — e você não tem como saber onde está esse ponto olhando para o botão. Além disso, cada música e cada fonte tem nível diferente, o EQ/bass boost muda tudo, e basta alguém "dar um tapa" no botão.

**O que queima sub** não é "potência sobrando":
- **Clipping** — quando o módulo (ou a fonte) satura e o sinal vira quadrado, a bobina recebe muito mais energia média do que o RMS musical e esquenta sem dar sinal claro antes.
- **Excursão excessiva** — grave abaixo da sintonia em caixa dutada, ou simplesmente potência demais: o cone sai do curso, bobina bate, suspensão rasga.
- **Calor acumulado** — 400 W RMS é o limite térmico contínuo da bobina; música normal tem média de 1/8 a 1/3 disso, então há folga se os picos estiverem travados.

Módulo com mais potência que o sub e ganho certo é até saudável: sobra reserva (headroom) e ele não clipa nos picos. Mas a faixa confortável é **1× a 1,5× o RMS do falante**. Você está em **3×**, e aí a margem de erro é pequena: 400 → 1200 W é só **+4,8 dB**. Em termos de botão, é "meia volta" a mais no ganho triplicando a potência.

## 2. "1 Ω dobra a potência" — verdade parcial, conclusão errada

Módulo de tensão limitada obedece P = V²/R: metade da impedância ≈ dobro da potência. Isso vale **para o módulo**. O sub não fica "mais forte" em 1 Ω — ele continua aguentando 400 W. Você estaria pedindo ao módulo o máximo que ele tem, justamente o cenário em que o sub morre.

Grosso modo, para um módulo de 1200 W @ 1 Ω @ 14,4 V (módulos reais não escalam perfeitamente; use como ordem de grandeza):

| Impedância ligada | Módulo entrega (motor ligado, ~14,4 V) | Motor desligado (12,6 V, ×0,77) | Situação para um sub de 400 W |
|---|---|---|---|
| **1 Ω** | ~1200 W | ~920 W | 2,3–3× o sub; módulo no limite térmico e de corrente |
| **2 Ω** | ~600–800 W | ~460–610 W | 1,5–2× — funciona, mas o ganho tem de ficar travado |
| **4 Ω** | ~300–400 W | ~230–310 W | **casamento natural**; ganho quase no máximo sem risco |

O que mais vem junto com 1 Ω:
- **Corrente**: 1200 W classe D em 12,6 V ≈ **119 A** de pico na alimentação (`calc_som.py corrente`). Isso pede cabo de **21 mm² (4 AWG)** de cobre OFC para 5 m (`calc_som.py cabo`), fusível grande, "Big 3" e um alternador original (70–120 A, dos quais o carro já usa 30–50 A) que vai sofrer — luz piscando e módulo em proteção.
- **Fator de amortecimento pior** e mais distorção: grave "embolado". Para grave limpo, 2 Ω ou 4 Ω é melhor escolha que 1 Ω no limite.
- **Ganho audível**: dobrar potência é **+3 dB**, mal perceptível. "O dobro de volume" na percepção exige 10× a potência. Tirar 1200 W em vez de 400 W soaria +4,8 dB mais alto — e isso custaria o sub.
- Se a **impedância mínima** do módulo for 2 Ω e você ligar 1 Ω, ele entra em proteção ou queima. Isso está na etiqueta/manual.

**Qual impedância o seu sub permite** (`calc_som.py impedancia`):
- Bobina simples 4 Ω → só 4 Ω. Ótimo, é o caso ideal aqui.
- Bobina dupla **2+2 Ω** → em **série = 4 Ω** (recomendado); em paralelo = 1 Ω (não faça).
- Bobina dupla **4+4 Ω** → série = 8 Ω (módulo entregaria só ~150–200 W, pouco); então **paralelo = 2 Ω** e ganho travado em 28,3 V (abaixo).

## 3. O que fazer, na ordem

1. **Confirmar as specs**: do módulo — tensão e impedância em que os 1200 W foram medidos, impedância mínima, se tem filtro subsônico; do sub — RMS no datasheet e configuração da bobina; da caixa — selada ou dutada (e a sintonia).
2. **Ligar o sub na impedância escolhida** (4 Ω se o sub permitir; 2 Ω se for 4+4).
3. **Elétrica coerente com o que o módulo vai realmente entregar** (~400 W): pico ≈ **40 A** → cabo **10 mm² OFC** para ~5 m (queda ≤ 0,5 V), **fusível de 50–60 A** no positivo a até 30–45 cm da bateria (ele protege o cabo, não o módulo), negativo curto, mesma bitola, no chassi lixado. Cabo CCA ("alumínio cobreado") tem ~60% da condutividade — se for o que veio no kit, suba uma bitola ou troque.
4. **Regular o ganho com multímetro** (`calc_som.py ganho`):
   - Ganho no mínimo, bass boost em zero, loudness/EQ desligados, LPF (passa-baixa) em ~80 Hz, subsônico em ~25–30 Hz se a caixa for dutada.
   - Fonte em ~75–85% do volume (máximo antes de ela mesma distorcer), tocando um tom senoidal de **40 Hz a 0 dB**.
   - **Sub desconectado**, multímetro em V AC na saída do módulo.
   - Subir o ganho até: **40,0 V AC em 4 Ω** ou **28,3 V AC em 2 Ω** (= 400 W). Se quiser margem porque módulo barato costuma clipar antes do nominal: **36 V em 4 Ω** (~325 W).
   - Não mexer mais no ganho. Se você usa EQ na fonte, regule com o EQ já ajustado como vai usar — reforço de grave depois muda o resultado.
5. **Testar com música**: se distorcer antes do volume máximo da fonte, ou o ganho ficou alto ou a caixa/sintonia está errada. Nunca ultrapassar o volume onde a **fonte** distorce: clipping da fonte é amplificado igual.

Com isso, o "não colocar no máximo" vira uma trava física no módulo em vez de uma promessa sua.

## 4. Sobre o "precinho"

1200 W RMS a 1 Ω de marca nacional é um número plausível e barato hoje — a tabela acima vale. Mas se for módulo genérico, anúncio sem tensão/impedância, ou "1200 W" que na descrição vira "potência máxima" ou PMPO, o real pode ser 400–600 W; aí em 2 Ω ele já estaria perto do sub, e a regulagem de ganho pelo multímetro resolve do mesmo jeito (a tensão alvo é a mesma). Sinais amarelos: sem datasheet, vendedor sem histórico, preço muito abaixo do mesmo modelo em Loja Oficial. Marca nacional conhecida tem assistência no Brasil — vale algo no custo total.

Uma coisa não muda em nenhum cenário: **não é o preço nem a potência do módulo que decide se o sub vive; é a tensão que sai dele na impedância ligada.** Isso você mede.

## Para afinar (se quiser, me responda estas)

1. Modelo do módulo e do sub (ou foto da etiqueta)?
2. O sub é bobina simples 4 Ω ou dupla (2+2 / 4+4)?
3. Caixa selada ou dutada? Se dutada, sabe a sintonia?

Preços e specs citados são estimativas por ordem de grandeza — confirme no datasheet do seu modelo.
