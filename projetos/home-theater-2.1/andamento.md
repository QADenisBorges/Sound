# Andamento do 2.1 — onde o projeto está

**Leia este arquivo primeiro** ao retomar o projeto. Ele diz o que já foi feito, o que está em curso, o próximo passo e o que está pendente. **Atualize no fim de cada sessão de trabalho** (e sempre que um passo for concluído, uma medição for feita ou uma decisão mudar algo).

- Passo a passo completo: `montagem-2.1.md` e `guia/montagem.html`.
- Memórias e estado do processador (valores de cada canal): `memorias-processador.md`.
- Decisões com data e motivo: histórico em `../home-theater-5.1/projeto.md`.
- Como o app do processador funciona: `../../componentes/processadores.md`.

Legenda: ✅ feito · 🔄 em curso · ⏳ a fazer · ❓ a confirmar com o usuário

**Última atualização:** 15/10/2026

---

## Onde estamos (resumo)
**O 2.1 está tocando:** caixa L no CH1, caixa R no CH2, sub em ponte (CH4⊕ / CH3⊖), música pelo Bluetooth, memória **"filme" v2** carregada. Agudo aprovado pelo usuário. **Problema aberto: zumbido estranho no grave** (causa não identificada). Uso em volume **alto, mas não máximo**, até resolver o zumbido, o cabo do sub e as emendas da linha de 40 A.

## ▶ Próximos passos (em ordem)
1. **Diagnosticar o zumbido do grave** (roteiro de 15/10):
   a. Zumbe **sem música** (volume 0)? → elétrico (RCA perto do cabo da tomada / loop de terra).
   b. **Mute Canais 1–2** → zumbe? = sub. **Mute Canais 3–4** → zumbe? = caixas. Tirar todos os mutes no fim.
   c. Sub: gerador FIXO −30 dB em 35 / 45 / 55 / 70 / 90 Hz; encostar a mão na caixa e no painel; mexer na emenda de fita do cabo; testar EQ 55 Hz em 0. Caixas: SWEEP −30 dB, dedo na tela / emenda / parafusos (começar pela caixa R, que não passou pelos testes).
   d. Correções conforme a causa: subsônico 35–40 Hz (canais 3 **e** 4), cabo novo do sub, fixar o que vibra, EQ do sub +1/+2.
2. ✅ Pontas encostadas = **1,2 Ω** (15/10): caixa L 3,6 Ω e sub 3,8 Ω reais, ambos normais. O ~1 Ω extra era do multímetro.
3. **Cabo novo do sub** (etapa 3 do guia: 2 × 2,5 mm², emenda soldada no plugue). Obrigatório antes de volume alto.
4. **Testes da caixa R** (CH2): tweeter a 5 kHz, prova do passa-alta a 60 Hz (−25 dB, quase mudo), varredura e vazamento.
5. **Memória "Rock" (espaço 2)** — configuração planejada abaixo; aplicar e salvar depois do zumbido resolvido. Fase do sub (0/180) e alinhamento por distância entram nela e na filme.
6. **Liberar ~400 W no sub (opcional):** níveis dos Canais 3 e 4 de −12 para **−8 dB** (cálculo: 25 V → ~39,6 V, limitado em ~39 V). **Só depois** do zumbido e do cabo novo.
7. Pendências de segurança e acabamento (lista abaixo): solda das emendas de 40 A / porta-fusível midi, fusível 1–2 A do processador, silicone das caixas.

---

## Sequência de execução (detalhe do guia, uma caixa por vez)
| Bloco | O que é | Passo do guia | Situação |
|---|---|---|---|
| A1 | Preparar: bornes vazios, X-OVER em F, GAIN mínimo, multímetro V~ 200 | 4.10 | ✅ 14/10 |
| A2 | Processador "cru": níveis 0 dB, filtros/EQ/limitador OFF | 4.10 | ✅ 14/10 |
| A3 | Sinal de referência: **gerador do app, 60 Hz, 0 dB** | 4.10 | ✅ 14/10 |
| A4 | CH1 e CH2 → **11 V** | 4.10 | ✅ 14/10: Canais 1 e 2 em −11 dB, GAIN no mínimo |
| A5 | Ponte CH4⊕/CH3⊖ | 4.10 | ✅ 15/10: **25 V** com nível −12 (≈156 W); limite calculado ~39 V pelo limitador |
| A6 | Limitador no ponto regulado | 4.11 | ✅ Canais 1–2 (−11 dB, medido) · Canais 3–4 (−6 dB = 1,00 V, por cálculo) |
| A7 | Filtros e memória 1 | 4.9 + 4.11 | ✅ **filme v2** salva em 15/10 (exportação para o celular ❓) |
| B | Caixa L: Ω e pilha, prender no CH1 | 5.1 | ✅ 14/10 (4,8 Ω bruto; polaridade ok) |
| C | Primeiro som CH1: vida, tweeter, passa-alta a 60 Hz, música | 5.2 | ✅ 15/10 (testes 1–3 ok; varredura e vazamento ❓) |
| — | Caixa R no CH2 | 5.1–5.2 | 🔄 Ligada e tocando (foto 15/10); testes da caixa ⏳ |
| — | Sub: resistência, ligar na ponte | 5.1 | ✅ 15/10 (5 Ω bruto; CH4⊕ vermelho, CH3⊖ branco) — **cabo ainda é o original com emenda de fita** |
| — | Fb do duto / subsônico | 5.3 | ⏳ (30 Hz provisório) |
| — | Ajustes conjuntos: fase, atraso, nível, EQ | 5.4 | ⏳ (dentro da memória Rock e da filme) |

---

## Estado por frente

### 2. Caixas (BS-369 + JBL 4TRMS80)
| Item | Situação |
|---|---|
| Montagem (furação, manta, gaxeta, fibra, faston, fechamento) | ✅ L e R montadas e tocando |
| Silicone (2.5) | ⏳ No fim (decisão de 11/10): desmontar, passar silicone, curar 24–48 h com a JBL fora |
| Caixa L | ✅ 4,8 Ω bruto, polaridade ok, testes vida / tweeter / passa-alta ok |
| Caixa R | 🔄 Ligada no CH2; Ω, pilha e testes não registrados |

### 3. Sub
| Item | Situação |
|---|---|
| Ligação em ponte | ✅ CH4⊕ (fio com termorretrátil vermelho) / CH3⊖ (branco); CH4⊖ e CH3⊕ vazios |
| Resistência | 5 Ω bruto (sub de 4 Ω; seguro para ponte) |
| Emenda do cabo do sub | 🔄 15/10: emenda de fita trocada por **solda** (fotos em `fotos/2026-10-15-sub-cabo/`): **azul (+ do sub) → vermelho do plugue**, branco → preto. Termorretrátil individual + **tubo externo** sobre as duas emendas e a capa (fotos 03–06) ✅. Falta: medir Ω de novo e testar o zumbido |
| Fb do duto | ⏳ |
| Zumbido no grave | ❓ Em diagnóstico |

### 4. Eletrônica
| Passo | Situação |
|---|---|
| 4.1–4.5 Cabos, conector, porta-fusíveis, conferência sem energia | ✅ 11/10 |
| Linha de 40 A | ✅ Funcionando; **emendas trançadas sem solda** (provisório, decisão consciente de 11/10) |
| 4.6–4.8 Energizar | ✅ 13,9 V, LED do módulo aceso. ❓ Teste de toque nas emendas de 40 A com música alta |
| 4.9–4.11 Configuração, ganho, limitador | ✅ Canais 1–2 medidos; canais 3–4 por cálculo + ponte medida (25 V) |

### 5. Integração
🔄 2.1 completo tocando. Faltam: zumbido, fase e alinhamento, memória Rock.

---

## Memória "Rock" (espaço 2) — planejada, ainda NÃO salva
Base: filme v2. Mudanças:
| Ajuste | Canais 1 e 2 (caixas) | Canais 3 e 4 (sub, sempre iguais) |
|---|---|---|
| Nível das Saídas | −11,0 (igual) | **−9,0** (ou −8,0 para ~400 W, depois do zumbido) |
| Crossover HPF | BT12 · 120 (igual) | **BT24 · 35 Hz** (rock quase não tem conteúdo < 40 Hz) |
| EQ Param Saída | **150 Hz · −2,0 dB · Q 1,0** (tira o "embolado") | 55 Hz · +3,0 · Q 1,0 (igual; ajuste fino +2 a +5) |
| Limiter | −11,0 (igual) | −6,0 (igual — **nunca subir**) |
| Fase | 0 | 0 ou 180 (teste com tom de 120 Hz a −25 dB, caixas tocando) |
| Alinhamento | diferença em cm até a fonte mais distante do sofá | igual nos dois |
EQ 15 bandas plano (não usar preset "Rock" com reforços). Sub perto de parede ou canto (+3 a +6 dB de graça).

---

## Medições
| Medida | Esperado | Medido | Data |
|---|---|---|---|
| Alimentação (voltímetro do app) | 13,8 V | **13,9 V** | 14/10 |
| CH1 com gerador 60 Hz / 0 dB, nível 0 dB, GAIN mínimo | — | **26 V** (teto/ceifamento do módulo sem carga) | 14/10 |
| Ganho CH1 / CH2 | 11,0 V | **11,0 / 11,1 V** com Canais 1 e 2 em **−11,0 dB**, GAIN CH1-CH2 no mínimo | 14/10 |
| Teste −6 dB no CH1 | ≈5,5 V | **5,3 V** ✅ | 14/10 |
| Limitador Canal 1 (−12,2 dB → −11,0 dB final) | ≈9,6 V · ≤ 11,2 V no teto | **9,7 V · teto 10,8 V** ✅ | 14/10 |
| Limitador Canal 2 (−11,0 dB) · teto | 10,8–11,0 · ≤ 11,2 V | **10,8 · 11,2 V** ✅ | 14/10 |
| Passa-alta BT12 120 Hz, tom de 60 Hz | ≈2,7 V | **CH1 2,3 V · CH2 2,2 V** ✅ | 14/10 |
| Ponte CH4⊕/CH3⊖ (gerador 60 Hz / 0 dB, sem o sub; nível −12, limiar −6, EQ +3) | 36–41 V (cálculo com A+B somando) | **25 V** (≈156 W): o gerador entra como **um canal só** no A+B; conta prevê 25,7 V ✅ | 15/10 |
| Caixa L (Ω 200, ponta do cabo, bruto) | ≈3,7 Ω | **4,8 Ω** (pontas ❓) | 14/10 |
| Sub (Ω 200, bruto) | 3,3–4,2 Ω | **5 Ω** (pontas ❓; seguro em ponte) | 15/10 |
| Pontas encostadas (Ω 200) | 0,2–1,2 Ω | **1,2 Ω** → explica o "~1 Ω a mais": **caixa L = 4,8 − 1,2 = 3,6 Ω ✅**, **sub = 5 − 1,2 = 3,8 Ω ✅** | 15/10 |
| Caixa R (Ω) | ≈3,7 Ω | ⏳ | |
| Fb do duto do sub | — | ⏳ | |

**Modelo de ganho validado (útil para ajustes sem medir):** módulo com GAIN mínimo ≈ **19,5×** por canal (564 mV → 11,0 V), **≈39×** em ponte. Limiar do app: 0 dB ≈ 2,0 V (−6 dB = 1,00 V → teto da ponte ≈ 39 V; −11 dB = 564 mV → 11 V por canal). Cada +1 dB no nível = ×1,12 na tensão.

---

## Pendências fora da sequência
- **Zumbido no grave** (próximo passo 1).
- **Cabo novo do sub** com emenda soldada (antes de volume alto).
- **Soldar as emendas da linha de 40 A**; trocar por **porta-fusível midi** (plano: nov/2026).
- Fusível de 1–2 A (lâmina média) no lugar do 5 A provisório do processador.
- Silicone das caixas (2.5), no fim.
- **Exportar as memórias para o celular** (backup contra reset) — não confirmado.
- Descobrir se o **A+B do processador soma ou faz média** com música (tom de 60 Hz pelo Bluetooth a 100 %, sub desligado, medir a ponte). Define quanto o sub realmente recebe.
- Prints do app que faltam: tela **Salvar**, **corações** da Home, tela **Volt.**
- Link azul entre canais: **não copia nível, limitador nem filtros** — tudo dos canais 3 e 4 se digita duas vezes.
- `../home-theater-5.1/projeto.md` tem linhas desatualizadas sobre o 2.1 (6TR4A/APSOUND, ganho 15,5 V, chave HP, fusível 3 A). **O guia v2.6, este arquivo e `memorias-processador.md` é que valem.**

---

## Registro das sessões
- **14/10/2026:** Sequência de testes por canal definida (A1–A7, B, C). A1 concluído. Prints do app (20 telas) documentados; processador sem memória salva, níveis das saídas em −16,5/−16,5/−12/−12 dB, filtros com tipo OFF, limitador OFF. Módulo energizado (LED aceso, 13,9 V). Leitura de 15,6 V no multímetro com o ponto a confirmar.
- **14/10/2026 (2):** Bornes de falante vazios confirmados. CH1 mediu 5,6 V~ com sinal desconhecido: próximo é a linha de base sem sinal, depois níveis 0 dB, Áudio BT e tom de 60 Hz (A3/A4).
- **14/10/2026 (3):** Os 5,6 V do CH1 eram com o gerador do app. Decidido usar o gerador interno em 60 Hz / 0 dB como sinal de referência (conferido uma vez contra o tom pelo Bluetooth a 100 %), depois de verificar que o nível da saída age sobre ele.
- **14/10/2026 (4):** Print do Gerador de Áudio: já em Gerador Fixo, 60 Hz, ganho 0,0 dB, desligado. Sem seleção de canal.
- **14/10/2026 (5):** Multímetro em V~ 200 mostrando 00.0 (foto 23; linha de base sem sinal, se o gerador estava OFF). Decidido: **fazer o CH1 inteiro primeiro** (ganho 11 V, −6 dB, limitador, passa-alta BT12 120 Hz com prova a 60 Hz ≈ 2,7 V, salvar; depois ligar a caixa L e testar). CH2 e sub depois.
- **14/10/2026 (6):** Parte 1 do CH1: 26 V com nível 0 dB (GAIN mínimo); **11,0 V com o Canal 1 em −11,0 dB**. Pela conta seriam −7,5 dB: a diferença indica que os 26 V já eram o teto (ceifamento) do módulo. Próximo: teste do −6 dB (1.5) para confirmar a região linear.
- **14/10/2026 (7):** 1.5 ok: Canal 1 em −17 dB → CH1 5,3 V (esperado 5,5). Canal 2 **não** acompanhou o Canal 1 (link não espelha o nível). CH2 com o Canal 2 em −11 dB = 11,0 V: **CH1 e CH2 regulados**. Próximo: limitador (1.6) nos canais 1 e 2.
- **14/10/2026 (8):** Limitador do Canal 1: LED apagou em **Threshold −10,4 dB = 604 mV** (o app mostra o limiar em dB e em mV; 0 dB ≈ 2,0 V). Com o sinal em −11 dB, isso deixa o teto em ≈11,8 V; recomendado **−11,0 dB** para o teto coincidir com os 11,0 V. Próximo: teste do teto e Canal 2.
- **14/10/2026 (9):** Descendo o Threshold do Canal 1, o LED 1 só acendeu em **−12,2 dB (491 mV)**, embora o sinal esteja em −11 dB: o LED não marca o início exato da limitação. Ajuste passa a ser feito **pelo multímetro**: Threshold em −11,0 e CH1 ≈ 11,0 V.
- **14/10/2026 (10):** **1.6 concluído no Canal 1:** Threshold −11,0 dB (564 mV), 9,7 V com −12,2 dB, teto 10,8 V com o canal em −9 dB. Falta conferir o Canal 2 em −11,0. Próximo: 1.7 passa-alta BT12 120 Hz (prova: CH1 ≈2,7 V a 60 Hz).
- **14/10/2026 (11):** **1.7 Canal 1 ok:** HPF BT12 em 120 Hz, LPF OFF (print 30); CH1 a 60 Hz caiu de 11 para 2,3 V. Falta Canal 2 (BT12 120 Hz e limiar −11,0) e salvar (1.8, aguardando print da tela Salvar).
- **14/10/2026 (12):** Limiter do Canal 2 não acompanhou o Canal 1 (continua sem −11). Próximo: limiar −11,0 no Canal 2 (com o HPF do Canal 2 em OFF durante a conferência a 60 Hz), depois BT12 120 Hz no Canal 2 e salvar.
- **14/10/2026 (13):** **Canais 1 e 2 prontos** (ganho 11 V, limitador −11,0 dB, BT12 120 Hz). Canal 2: 11,1 V sem filtro, 10,8 V com limiar −11, teto 11,2 V, 2,2 V com BT12 a 60 Hz. Próximo: gerador OFF, salvar (print da tela Salvar), depois Parte 2 (ligar caixa L no CH1).
- **14/10/2026 (14):** Memória 1 salva como **"filme"** (v1, só canais 1–2 configurados). Valores completos em `memorias-processador.md`. Próximo: **Parte 2** (desligar, conferir a caixa L: Ω 200 → ≈3,4 Ω e pilha; prender no CH1).
- **14/10/2026 (15):** Caixa L mediu **4,8 Ω** na ponta do cabo (Ω 200), acima do esperado (≈3,7 bruto). Investigar: descontar pontas, contato firme, mexer no cabo durante a medição, comparar com a caixa R.
- **15/10/2026:** Sub configurado no app (sem medir): canais 3–4 com HPF 30 Hz, LPF LR24 120 Hz, limiar −6,0 dB (1,00 V), nível −12 dB, EQ +3 dB em 55 Hz (Q 1,0), fase 0 (prints em `fotos/2026-10-15-app-sub/`). **Erros achados nos prints:** Canal 4 com HPF **LR12** (Canal 3 BT24) e Canal 2 com nível **−9,9 dB** (regulado em −11,0). Corrigir e então salvar filme v2. Ganho da ponte é cálculo: medir 40 V sem o sub antes de ligá-lo.
- **15/10/2026 (2):** Correções feitas e **filme v2 salva**. Próximo: medições mínimas para tocar CH1 + sub (ponte 40 V sem o sub, resistência do sub ≥ 3 Ω), ligar o sub (polaridade acertada pela fase do app).
- **15/10/2026 (3):** Ponte mediu **25 V** com o gerador (esperado 39 V se A+B somasse +6 dB). A conta fecha se o gerador entra como um canal só (−12 + 2,9 − 0,5 dB → 0,66 V → ×39 ≈ 25,7 V). Com música, o máximo fica entre 25 V e ~39 V (limitador em 1,0 V): **seguro nos dois casos**. Para saber se A+B soma ou faz média: tom de 60 Hz pelo Bluetooth a 100 % (pendente, opcional).
- **15/10/2026 (4):** Medições mínimas para tocar: ponte **25 V** (seguro), sub **5 Ω** bruto (seguro). Sub ligado em CH4⊕/CH3⊖ e **caixa R ligada no CH2** (foto da régua conferida). Música tocando nas 3 vias com a filme v2: **agudo aprovado**, **zumbido estranho no grave** (diagnóstico pendente). Planejada a memória **Rock** (sub −9 dB e HPF 35 Hz, −2 dB em 150 Hz nas caixas, fase e alinhamento) — **não salva**; prints de 15/10 mostraram que ainda estava igual à filme e com Canais 1–2 em mute (orientado a tirar o mute antes de salvar). Dúvida do usuário sobre 400 W em ponte: o módulo entrega; a configuração limita (~156 W hoje); liberar com nível −8 dB **depois** de resolver o zumbido e o cabo.
- **15/10/2026 (5):** Sub: usuário informou **azul = + do sub**; soldou **azul → vermelho** e **branco → preto** do plugue (logo, **vermelho do plugue = +**). Solda granulada (estanho não escorreu bem): orientado a refundir antes de encolher o termorretrátil. Medir a resistência de novo: se cair de ~5 para ~4 Ω, o ~1 Ω extra era a emenda de fita (e pode ter relação com o zumbido).
- **15/10/2026 (6):** Emenda do sub finalizada: termorretrátil em cada fio e tubo externo cobrindo emendas e a ponta derretida da capa (fotos 03–06). Próximo: medir Ω (esperado cair de 5 para ~4), religar (vermelho → CH4⊕, preto → CH3⊖) e testar o zumbido com a mesma música.
- **15/10/2026 (7):** Pontas do multímetro encostadas em Ω 200 = **1,2 Ω** (foto 07). Caixa L real 3,6 Ω e sub real 3,8 Ω: **normais**. A emenda de fita não era a causa do ~1 Ω extra; a causa do zumbido segue em aberto (testar depois de religar o sub com a emenda soldada). Para medir resistência com este multímetro: **sempre descontar 1,2 Ω**.
- **15/10/2026 (8):** Sub com a emenda soldada: **5,2 Ω na tela → 4,0 Ω real** ✅. Próximo: religar (vermelho → CH4⊕, outro → CH3⊖) e testar o zumbido.
