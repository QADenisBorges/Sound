# Fiação modular do 2.1: engate rápido, pod removível casa ↔ carro
Versão 1.1 · 01/11/2026 · complementa `montagem-2.1.md` (sistema já montado e funcionando).
Versão ilustrada (desenhos em escala sobre fotos reais): `rack-modular.html`.
Prioridade definida pelo usuário: **o máximo de segurança possível**, tudo organizado lado a lado em cima do subwoofer.

---

## Resumo
O processador e o módulo vão juntos numa **placa removível (o "pod")**, com toda a fiação de parafuso feita **uma vez só**, por dentro. Para fora, o pod tem só engates rápidos, iguais em casa e no carro:

| Engate | Conector | Por quê |
|---|---|---|
| 1 · Energia (+12 / GND) | **Anderson SB50** (50 A), vermelho | Feito para corrente contínua alta, contatos cobertos, não inverte a polaridade |
| 2 · Liga/desliga (REM) | Conector **selado de 2 vias** com trava | Em casa: plugue-jumper (modo BOB). No carro: REM do rádio (não descarrega a bateria) |
| 3, 4, 5 · Caixas L, R e SUB | **Speakon NL4** com trava | Padrão de PA: 40 A por contato, nenhum metal exposto, trava girando |
| Entrada de áudio | Bluetooth / RCA A-B do processador | Sem mudança |

A fonte BOB 60A **fica em casa**, presa na mesma mesa, com o fusível de 40 A. O pod sai com 5 desencaixes e 2 manípulos, sem chave de fenda.

---

## Premissas e correções

**Conector MIDI não serve aqui.** O MIDI é um DIN de 5 pinos para dados, com contatos de ~2–5 A e sem trava firme. As correntes reais:
- Força do módulo: até **40 A** (fusível), ~7,5–20 A com música (`calc_som.py corrente`, 664 W a 13,8 V).
- JBL: 132 W em 4 Ω → I = √(P/R) = **5,7 A**.
- Sub em ponte: 400 W em 4 Ω → **10 A**, com **40 V** AC nos pinos.
Para força o MIDI derrete. Para falante fica no limite, e com 40 V no pino ainda é perigoso tocar. Por isso: SB50 na força, Speakon nos falantes e um conector selado só para o REM.

**O duto do sub fica no topo** (foto de 11/10). Equipamento apoiado direto ali tem três problemas:
1. Tampa o duto. O ar do duto precisa de pelo menos **um diâmetro do duto livre** na frente (o ideal é 1,5×). Com menos, a sintonia muda e aparece barulho de vento.
2. **Vibração:** bornes de parafuso e conectores se soltam aos poucos, e as soldas da placa cansam.
3. **Espaço:** BOB (132 mm) + pod (~320 mm) + folgas não cabem no topo de uma caixa de 8".
→ Solução: uma **mesa-ponte** (prancha em U) que passa por cima do sub **sem encostar nele** e se apoia no chão. Continua "em cima do sub", lado a lado, e o duto fica livre.

**Calor.** O manual da BOB pede **20 cm livres nas laterais**, e o módulo passa de 60 °C. Coloque a BOB numa ponta da mesa, com o lado da ventoinha/grade para fora (conferir na fonte onde ela fica), e deixe **≥ 10 cm** entre a BOB e o pod. Depois de 1 h de som alto, toque nas peças: se a mão não aguenta segurar (> ~50 °C), aumente a folga.

---

## Arquitetura

```
CASA (fixo na mesa-ponte)
REDE ── BOB 60A (+) ── C1 ── fusível 40 A ── C2 ──┐
               (−) ── C3 ─────────────────────────┴── SB50 "CASA"  ═╗
Plugue-jumper REM (pino A ↔ pino B)                                ║
                                                                   ║ 1 ENERGIA
POD (placa removível: módulo + processador)                        ║
  SB50 "POD" ══╝
     ├─ 10 mm² vermelho ── BARRAMENTO + ─┬─ 10 mm² ── SD800.4 +12V
     │                                   └─ fusível 2 A ── PRO 2.4 +12 ──┬── conector REM pino A (+12 protegido)
     └─ 10 mm² preto ──── BARRAMENTO − ─┬─ 10 mm² ── SD800.4 GND         │
                                        └─ 1,5 mm² ── PRO 2.4 GND        │
  conector REM pino B ── PRO 2.4 REM IN      (casa: jumper A↔B = modo BOB; carro: REM do rádio no B)
  PRO 2.4 REM OUT ── SD800.4 REM
  PRO 2.4 saídas 1, 2, 3, 4 ── RCA de 25 cm feitos por você ── SD800.4 CH1, CH2, CH3, CH4
  SD800.4 CH1 + / −           ── Speakon "L"   pinos 1+ / 1−   ─ 3 · caixa L
  SD800.4 CH2 + / −           ── Speakon "R"   pinos 1+ / 1−   ─ 4 · caixa R
  SD800.4 CH4 ⊕ / CH3 ⊖ (ponte) ── Speakon "SUB" pinos 2+ / 2− ─ 5 · sub

CARRO (chicote próprio, feito depois)
Bateria (+) ── fusível midi 40 A (≤ 30 cm da bateria) ── 10 mm² ── SB50 "CARRO"
Chassi ── 10 mm² curto ── SB50 "CARRO"
REM do rádio/pós-chave ── plugue REM (só o pino B)
Falantes do carro ── NL4FX nos pinos 1± (L / R)
```

### Pinagem codificada (segurança contra plugue trocado)
- Caixas L e R: Speakon nos pinos **1+/1−**. Sub: pinos **2+/2−**.
- O soquete SUB do pod só tem os pinos 2± ligados, e os soquetes L/R só os 1±.
- Se você ligar a JBL no soquete SUB, ela não recebe nada (não chegam 40 V de grave nela). Se ligar o sub no L, também fica mudo. Trocar L com R só inverte os lados, sem dano.

### Mesa-ponte (casa)
- MDF ou compensado de **18 mm**: tampo + 2 laterais em U, com feltro ou borracha nos pés.
- Vão interno = largura do sub + **2 cm** (não encosta em nada). Altura livre acima do topo do sub = **≥ 1 diâmetro do duto** (meça; provavelmente 8–10 cm).
- Tampo do tamanho do sub + folgas. Pela foto, o sub tem ~60 × 26 × 30 cm, o que dá um tampo de **≈ 66 × 32 cm** (confirmar medindo). BOB numa ponta (parafusada), ≥ 10 cm de folga, o pod ao lado.
- 4 insertos roscados M6 no tampo. O pod prende com **2–4 manípulos M6** (parafuso de rosca com cabeça de girar na mão). No carro, uma tábua com os mesmos furos.

### Placa do pod
- Compensado de 15 mm, ~34 × 23 cm. Ele segura parafuso melhor que MDF, e no carro isso conta.
- **Cantoneira de alumínio** 2" × 1/8" na borda de trás, como painel: 3 furos D (24 mm + 2 parafusos M3) para os NL4MP. Etiqueta L / R / SUB e uma cor em cada.
- SB50 e conector REM saem em **rabicho de ~20 cm**, com abraçadeira de base parafusada a 3–5 cm do conector (quem segura o puxão é a placa, não o borne).
- Layout: barramentos + e − | SD800.4 | PRO 2.4, com ≥ 3 cm entre eles e as aletas do módulo livres.

---

## Dimensionamento

| Trecho | Corrente | Peça | Folga |
|---|---|---|---|
| Força casa / carro | 40 A máx. (fusível) · 7,5–20 A com música | SB50, 50 A | 25 % |
| Cabo do carro (até ~5 m de circuito) | 40 A, queda ≤ 0,5 V | 10 mm² (mín. 6,9 mm²) · acima de ~6 m: 16 mm² | ok |
| Caixas L/R | 5,7 A | Speakon NL4, 40 A por contato | 7× |
| Sub em ponte | 10 A, 40 V | Speakon NL4 | 4× |
| Processador | 70 mA | fusível de **2 A** no ramal de 1,5 mm² | protege o fio |
| REM | mA | conector selado de 2 vias | — |

O fusível de 40 A protege o cabo de 10 mm², não o fio de 1,5 mm² do processador. Por isso **todo ramal fino tem seu próprio fusível no ponto onde sai do barramento**.

---

## Lista de materiais (casa + pod)
Preços estimados (01/11/2026): confira antes de comprar.

| # | Item | Especificação que importa | Qtd | Onde | Estimativa |
|---|---|---|---|---|---|
| 1 | **Anderson SB50** vermelho + contatos | Carcaça SB50 + contato de cobre **prateado** para **6 AWG** (aceita 10 e 16 mm²). Genuíno: "Anderson Power Products" gravado | 3 carcaças + 6 contatos (pod, casa, carro) | Loja de baterias/empilhadeira, Mouser, ML (vendedor que mostra o contato) | R$ 120–200 |
| 2 | **Speakon NL4MP** (painel) + **NL4FX** (cabo) | 4 polos, trava; Neutrik ou marca equivalente (Amphenol, Seetronic) | 3 + 3 | Loja de áudio profissional (Santa Ifigênia, ML loja oficial) | R$ 270–480 |
| 3 | Conector selado de 2 vias com chicote | Trava, vedação, fio ≥ 0,5 mm² | 2 pares | Autopeças / ML | R$ 10–25 |
| 4 | Barramento (bus bar) com tampa | 4 parafusos M5/M6, ≥ 100 A | 2 (+ e −) | ML / AliExpress | R$ 60–120 |
| 5 | Fusíveis de lâmina média (ATO) | 2 A (×3) + 40 A de reserva | 4 | Autopeças | R$ 8–15 |
| 6 | Terminal olhal estanhado | 10 mm² furo M6 (×6) · 1,5 mm² furo M6 (×4) | 10 | Autopeças / material elétrico | R$ 15–30 |
| 7 | Kit de ilhós (terminal tubular isolado) | 0,5 a 10 mm² | 1 kit | Material elétrico / ML | R$ 25–50 |
| 8 | Plugue RCA metálico de solda | Corpo de metal, mola/alívio de tração, aceita cabo de 6 mm (Rean NYS373, Amphenol ACPR) | 8 | Loja de áudio | R$ 100–170 |
| 9 | Cabo blindado de instrumento | 1 condutor + malha ≥ 90 %, OFC, Ø ≤ 6 mm | 2 m | Loja de áudio / instrumentos | R$ 15–35 |
| 10 | Cabo 10 mm² OFC (interno do pod) | Cobre, não CCA | 1 m vermelho + 1 m preto (se as sobras não bastarem) | Som automotivo | R$ 30–60 |
| 11 | Placa do pod + painel | Compensado 15 mm (~34 × 23) + cantoneira de alumínio 2" × 1/8" (30 cm) | 1 | Madeireira / serralheria | R$ 30–60 |
| 12 | Mesa-ponte | MDF ou compensado 18 mm cortado na medida + pés de borracha | 1 | Marcenaria (corte) | R$ 70–140 |
| 13 | Fixação removível | Inserto roscado M6 para madeira (×8) + manípulo M6 (×4) | — | Ferragens | R$ 25–50 |
| 14 | Organização | Abraçadeira com base parafusável, malha expansível 10 mm (3 m), etiquetas | — | ML / material elétrico | R$ 30–60 |
| 15 | **Alicate crimpador de ilhós** | Autoajustável 0,25–6 mm² (tipo HSC8 6-4A) | 1 | ML / AliExpress | R$ 60–110 |
| 16 | **Alicate crimpador hexagonal** | Matrizes de 6 a 16 mm²: contato do SB50, olhal e ilhós de 10 mm² | 1 | ML / AliExpress | R$ 100–180 |
| | **Total** | | | | **R$ 968–1.785** |

**Para economizar sem perder segurança (≈ R$ 130–230 a menos):** barramento genérico (item 4), plugue RCA metálico genérico com mola (item 8) e crimpador hexagonal mais simples (item 16).
**Não economize em:** contatos do SB50 (item 1), Speakon (item 2) e alicates. Crimpagem malfeita é a causa nº 1 de conector esquentando.

### Kit carro (depois, quando o pod for para o carro)
| Item | Qtd | Estimativa |
|---|---|---|
| Porta-fusível **midi** + fusível midi 40 A (mesmo padrão) | 1 + 2 | R$ 30–60 |
| Cabo 10 mm² OFC vermelho (bateria → porta-malas; 16 mm² se passar de ~6 m) | ~5 m | R$ 100–175 |
| Cabo 10 mm² preto (terra curto no chassi) | 1 m | R$ 20–35 |
| NL4FX para os falantes do carro | 2 | R$ 100–180 |
| Passa-fio de borracha (firewall) | 1–2 | R$ 5–15 |
| **Total** | | **R$ 255–465** |
(O SB50 do carro e o plugue REM já estão nos itens 1 e 3.)

---

## Como montar (resumo)
1. **Mesa-ponte:** medir o sub (largura, profundidade, altura, diâmetro do duto) → cortar → montar → BOB parafusada numa ponta.
2. **Chicote da casa:** reaproveitar C1, C2 e C3. O C2 e o C3 agora terminam no **SB50 "CASA"**, e não no módulo. Os cabos do processador que saíam da BOB (C4–C7) deixam de existir, porque o processador passa a ser alimentado dentro do pod.
3. **Pod:** fixar módulo, processador, barramentos e cantoneira → força com **olhal** no barramento e **ilhós** no módulo → ramal do processador com o porta-fusível que já existe (trocar o 5 A provisório por **2 A**) → REM → 4 RCA de 25 cm → Speakon (L/R nos pinos 1±, SUB nos pinos 2±) → etiquetas.
4. **Cabos das caixas:** a ponta que hoje vai no módulo recebe um NL4FX. O paralelo 2 × 2,5 mm² é chato e a garra do NL4FX espera cabo redondo (6–15 mm): faça uma luva de 2–3 camadas de termorretrátil na entrada até ficar redonda e firme. Ilhós nos condutores. Marcado = **1+** (caixas) ou **2+** (sub).
5. **RCA:** malha no terminal de massa, condutor no pino central, alívio de tração apertado na capa do cabo. Teste: continuidade ponta a ponta, **sem continuidade** entre pino e massa, e um puxão.
6. **Conferência sem energia** (como no 4.5): bip ponta a ponta; **polaridade do SB50**: com a BOB ligada e o pod fora, + no contato do fio vermelho do SB50 "CASA", medindo pelo lado de trás da carcaça. O SB50 não tem macho e fêmea: se os dois lados foram montados com o vermelho na mesma posição, o encaixe não inverte.
7. Energizar por ramais (como 4.6–4.8) e conferir os ajustes salvos. **Ganho e limitador não mudam:** o GAIN do módulo e a memória continuam os mesmos.

## Procedimentos de engate
**Tirar o pod:** OFF no app → BOB fora da tomada → esperar 30 s → soltar Speakons, REM e SB50 → manípulos.
**Pôr o pod (casa):** manípulos → Speakons → REM (jumper) → SB50 → BOB na tomada → ON no app.
**No carro:** fusível midi **fora** → pod no lugar → SB50, REM e Speakons → fusível → carregar a memória "Carro" **antes** do primeiro som.

Regras: SB50 e REM só se encaixam **sem energia** (a carga dos capacitores do módulo faz faísca e marca o contato). Speakon só com o app em OFF. Pod fora de casa → BOB fora da tomada. Pod fora do carro → fusível midi fora.

---

## Riscos e cuidados
- **Classe D em ponte:** os "−" das saídas **não são terra**. Nunca junte negativos de canais diferentes, nem ligue um "−" ao GND ou à malha do RCA. Cada Speakon leva os 2 fios do seu canal.
- **Memória e ganho no carro:** o GAIN físico vale para os dois lugares. No carro, os falantes mudam (Selenium 6TR4A) e a memória "Carro" precisa de **passa-alta, nível e limitador** próprios, refeitos com o multímetro no carro (como no 4.10–4.11). Até lá, comece com os níveis das saídas no mínimo.
- **REM no carro:** nunca use o modo BOB (jumper) no carro, porque o processador ficaria sempre ligado (~70 mA ≈ 1,7 Ah por dia). O plugue do carro só tem o pino B.
- **Clone de SB50:** se for genérico, depois de 15 min de som alto o conector pode estar morno, nunca quente. Quente = contato ruim: troque.
- **Bornes da rede na régua da BOB (7–9):** a régua continua com tampa, e nada se mexe nela com o plugue na tomada.
- Reaperte os bornes internos do pod depois da 1ª semana e depois de cada ida ao carro, nas primeiras vezes.

## Medidas que faltam
| Medida | Para quê |
|---|---|
| Largura, profundidade e altura do sub; diâmetro interno do duto | Mesa-ponte |
| Lado da ventoinha/grade da BOB | Orientação na mesa |
| Se o borne do SD800.4 aceita ilhós de 10 mm² | Senão: ponta torcida (só dentro do pod, que não se mexe mais) |
| Sobras de 10 mm² (vermelho ≈ 45 cm, preto ≈ 40 cm?) | Se dispensa o item 10 |

---

## Histórico de decisões
- **01/11/2026:** fiação modular definida. Pod removível (PRO 2.4BT + AUDIO + SD800.4) com SB50 (força), conector selado de 2 vias (REM, jumper em casa / rádio no carro) e Speakon NL4 (L/R pinos 1±, SUB pinos 2± como codificação). Fonte fica em casa. Conector MIDI descartado (contatos de 2–5 A contra 40 A da força e 10 A / 40 V da ponte). Rack sobre o sub em mesa-ponte desacoplada, porque o duto do sub fica no topo e a vibração solta os bornes. Prioridade do usuário: segurança máxima.
- **01/11/2026:** Wago avaliado. **221** (alavanca, 0,2–4 mm², 32 A; versão de 6 mm², 41 A) é **emenda fixa**, não engate: não aceita 10 mm² e não tem trava contra puxão. Uso só em emendas finas dentro do pod ou como plano B de emenda. **WINSTA MIDI** (linha 770, plugável com trava, até 4 mm², 25 A) seria a alternativa ao Speakon nas caixas se o "MIDI" do pedido era esse. Fica o Speakon (feito para áudio e fácil de achar), e o SB50 na força continua sem alternativa Wago.
