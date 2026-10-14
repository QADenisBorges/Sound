# Andamento do 2.1 — onde o projeto está

**Leia este arquivo primeiro** ao retomar o projeto. Ele diz o que já foi feito, o que está em curso, o próximo passo e o que está pendente. **Atualize no fim de cada sessão de trabalho** (e sempre que um passo for concluído, uma medição for feita ou uma decisão mudar algo).

- Passo a passo completo: `montagem-2.1.md` e `guia/montagem.html`.
- Memórias e estado do processador: `memorias-processador.md`.
- Decisões com data e motivo: histórico em `../home-theater-5.1/projeto.md`.
- Como o app do processador funciona: `../../componentes/processadores.md`.

Legenda: ✅ feito · 🔄 em curso · ⏳ a fazer · ❓ a confirmar com o usuário

**Última atualização:** 14/10/2026

---

## ▶ Próximo passo
**Regulagem de ganho do CH1/CH2 (A3–A4 = passo 4.10 do guia), sem falante ligado.** Antes:
1. ✅ Os **5,6 V~ no CH1** foram medidos com o **gerador de sinal do app** ligado (frequência e nível do gerador não anotados; níveis das saídas em −16,5 dB; GAIN ❓). Não serve como regulagem. Próximo: print da tela do gerador, gerador em **60 Hz / 0 dB**, níveis 0 dB, medir CH1/CH2 e testar se o nível da saída age sobre o gerador (−6 dB → leitura cai à metade).
2. ✅ Bornes de falante do módulo vazios (confirmado 14/10).
3. ⏳ No app: **níveis das saídas 1–4 em 0,0 dB** (estavam −16,5 / −16,5 / −12 / −12) e **Áudio BT ligado** (estava desligado).

---

## Sequência combinada na conversa (detalhe do guia para ligar uma caixa por vez)
| Bloco | O que é | Passo do guia | Situação |
|---|---|---|---|
| A1 | Preparar: bornes de falante vazios, X-OVER em F, GAIN no mínimo, multímetro em V~ 200 | 4.10 | ✅ 14/10 (usuário: "pronto") |
| A2 | Processador "cru": níveis 0 dB, filtros/EQ/limitador OFF, roteamento, Áudio BT | 4.10 | 🔄 Tudo certo pelos prints, **faltam níveis 0 dB e Áudio BT** |
| A3 | Tom de 60 Hz a 0 dBFS pelo Bluetooth, celular a 100 % | 4.10 | ⏳ |
| A4 | CH1 e CH2 → **11 V** (GAIN CH1-CH2 ou nível no app) | 4.10 | ⏳ |
| A5 | Ponte CH4⊕/CH3⊖ → **40 V** | 4.10 | ⏳ |
| A6 | Limitador no ponto regulado; teste +2 dB | 4.11 | ⏳ |
| A7 | Filtros de volta (BT12 120 Hz nos 1–2; LR24 120 Hz + BT24 30 Hz nos 3–4), salvar **memória 1 "Filme"** e exportar | 4.9 + 4.11 | ⏳ |
| B1 | Conferir a caixa L pela ponta do cabo: ≈3,4 Ω e pilha | 5.1 | ⏳ |
| B2–B3 | Prender no CH1 (marcado no +) e medir no borne | 5.1 | ⏳ |
| C1–C4 | Primeiro som só no CH1: gerador ≤ −20 dB (1 kHz, 5 kHz, 60 Hz = prova do passa-alta, varredura, vazamento), música, desligar | 5.2 | ⏳ |
| — | Repetir B e C para a caixa R no CH2 | 5.1–5.2 | ⏳ |
| — | Sub: cabo novo (etapa 3), ligar na ponte, achar a Fb do duto e acertar o subsônico | 3, 5.1, 5.3 | ⏳ |
| — | Ajustes conjuntos: atraso, fase do sub, nível, EQ | 5.4 | ⏳ |

---

## Estado por frente

### 2. Caixas (BS-369 + JBL 4TRMS80)
| Item | Situação |
|---|---|
| Furação, manta, gaxeta, fibra, faston soldados, fechamento | ✅ Caixa com fiação pronta (usuário, 14/10). ❓ Confirmar se as **duas** caixas estão prontas ou só a L |
| Silicone (2.5) | ⏳ **Deixado para o fim** (decisão de 11/10): testar tocando, depois desmontar, passar silicone e curar 24–48 h com a JBL fora |
| Validação (2.12): ≈3,4 Ω e pilha | ⏳ Faz parte do B1 |

### 3. Cabo do sub
| Item | Situação |
|---|---|
| Cabo novo F3 (1,0 m) com emenda soldada | ❓ Não registrado como feito |
| Fb do duto (caixa tem duto) | ⏳ Faltam diâmetro interno e comprimento do duto e medidas da caixa, ou o teste de varredura do 5.3 |

### 4. Eletrônica
| Passo | Situação |
|---|---|
| 4.1 Cabos cortados, etiquetados (C1–C7) | ✅ 11/10 |
| 4.2 Conector do processador | ✅ 11/10 (conferido por foto) |
| Porta-fusível 5 A do processador | ✅ Soldado 11/10 (5 A provisório) |
| Linha de 40 A | ✅ Montada 11/10, **provisória: emendas trançadas sem solda** (decisão consciente) |
| 4.5 Conferência sem energia (linha do processador) | ✅ 11/10 |
| 4.6–4.8 Energizar fonte, processador e módulo | ✅ Até 14/10: app conectado, som ON, **13,9 V** no voltímetro do app, LED do módulo aceso (foto 20). ❓ Teste de toque nas emendas de 40 A a 1 e 5 min não registrado |
| 4.9 Configuração | 🔄 Frequências digitadas (120 / 30 / 120), tipos de filtro em OFF, nenhuma memória salva |
| 4.10 Ganho | 🔄 A1 feito, A2 quase |
| 4.11 Limitador | ⏳ |

### 5. Integração
⏳ Nada ligado ainda.

---

## Medições
| Medida | Esperado | Medido | Data |
|---|---|---|---|
| Alimentação (voltímetro do app) | 13,8 V | **13,9 V** | 14/10 |
| CH1 +/− em V~ 200, gerador do app (freq./nível ❓), saída −16,5 dB | ≈0 V sem sinal | 5,6 (usuário) · foto: 15,6 | 14/10 |
| CH1 com gerador 60 Hz / 0 dB, nível 0 dB, GAIN mínimo | — | **26 V** (provável ceifamento do módulo sem carga) | 14/10 |
| Ganho CH1 / CH2 | 11,0 V | **CH1 11,0 V** com o Canal 1 em **−11,0 dB** · **CH2 11,0 V** com o Canal 2 em **−11,0 dB** · GAIN CH1-CH2 no mínimo | 14/10 |
| Teste −6 dB no CH1 (Canal 1 em −17 dB) | ≈5,5 V | **5,3 V** ✅ (região linear; o gerador passa pelo nível) | 14/10 |
| Ganho ponte CH4⊕/CH3⊖ | 40 V | | |
| Resistência caixa L / R (na ponta do cabo) | ≈3,4 Ω | | |
| Resistência do sub | 3–3,6 Ω | | |
| Fb do duto do sub | — | | |

---

## Pendências fora da sequência
- **Soldar as emendas da linha de 40 A** antes da montagem definitiva; trocar por **porta-fusível midi** (plano: nov/2026).
- Fusível de 1–2 A (lâmina média) no lugar do 5 A provisório do processador.
- Silicone das caixas (2.5), no fim.
- Prints do app que faltam: tela **Salvar** (memórias), **corações** da Home, tela **Volt.**
- Confirmar o que o **link azul** entre os canais 1–2 e 3–4 faz: **não espelha o nível** (Canal 1 a −17 dB, Canal 2 ficou em −11 dB, 14/10); falta ver mute, filtros e limitador.
- `../home-theater-5.1/projeto.md` tem linhas desatualizadas sobre o 2.1 (6TR4A/APSOUND, ganho 15,5 V, chave HP, fusível 3 A). **O guia v2.6 e este arquivo é que valem.**

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
