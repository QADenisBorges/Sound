# Memórias do processador Taramps PRO 2.4BT + AUDIO

Registro do que está gravado no processador e no celular, para restaurar depois de um reset e para não depender da memória de ninguém. Como cada tela do app funciona: `componentes/processadores.md` (seção "App Taramps PRO").

**Regra:** toda vez que uma memória for salva ou alterada no app, a tabela dela aqui é atualizada no mesmo dia, com prints em `fotos/<data>-app-processador/`.

## Plano das memórias (definido em 28/09/2026)
| Espaço | Onde | Nome | Uso | Situação |
|---|---|---|---|---|
| 1 | Processador | **Filme** | Base do 2.1: filtros, ganho, limitador, atraso | ⏳ A salvar no passo A7 (4.11 do guia) |
| 2 | Processador | Música | Variação da base | ⏳ Futuro |
| 3 | Processador | Noite | Sub e limitador mais baixos | ⏳ Futuro |
| — | Celular | Medido | Depois do microfone | ⏳ Futuro |
| — | Celular | Filme – diálogo | Voz reforçada | ⏳ Futuro |

**Não existe memória de teste.** Os testes usam o gerador e o mute do app, nunca uma memória gravada com os filtros desligados: carregada por engano com as caixas ligadas, ela manda grave cheio para as JBL.

---

## Estado lido em 14/10/2026 (antes da regulagem de ganho)
Prints: `fotos/2026-10-14-app-processador/` (01 a 15 com o app conectado; 16 a 19 com o app **desconectado**, valores da cópia do app). Ainda não houve memória salva pelo projeto; a tela de memórias não foi vista.

| Tela | Canal 1 | Canal 2 | Canal 3 | Canal 4 |
|---|---|---|---|---|
| Roteamento | A | B | A+B | A+B |
| Crossover: HPF | 120 Hz, **filtro OFF** | 120 Hz, **filtro OFF** | 30 Hz, **filtro OFF** | 30 Hz, **filtro OFF** |
| Crossover: LPF | 22000 Hz, OFF | 22000 Hz, OFF | 120 Hz, **filtro OFF** | 120 Hz, **filtro OFF** |
| Fase | 0 | 0 | 0 | 0 |
| Alinhamento | 0,0 cm | 0,0 cm | 0,0 cm | 0,0 cm |
| Limiter | Threshold OFF, Auto off, 50 ms / 500 ms | idem | idem | idem |
| EQ Param Saída | 0,0 dB (1 kHz, Q 1,0) | 0,0 dB* | 0,0 dB* | 0,0 dB* |
| **Nível da saída** | **−16,5 dB** | **−16,5 dB** | **−12,0 dB** | **−12,0 dB** |

Entrada: EQ 15 bandas todo em 0,0 (preset "Custom"); EQ paramétrico de entrada 0,0 dB (1 kHz, Q 1,0). Master Level 0,0 dB.
\* Lido com o app desconectado (Q 0,4): conferir conectado.

**Leitura:**
- Para a regulagem de ganho (A2 a A6), só falta levar os **níveis das saídas 1 a 4 a 0,0 dB**. O resto já está "cru": filtros com tipo OFF, limitador OFF e EQ neutro.
- As frequências de corte já estão digitadas (120 / 30 / 120). No A7 basta escolher o **tipo** do filtro.

---

## Memória 1 — Filme (alvo; preencher com os valores reais ao salvar no A7)
| Ajuste | Canal 1 (JBL L) | Canal 2 (JBL R) | Canal 3 (sub, ponte) | Canal 4 (sub, ponte) |
|---|---|---|---|---|
| Roteamento | A | B | A+B | A+B |
| HPF | **BT12** em 120 Hz ✅ (14/10: 60 Hz → 2,3 V) | **BT12** em 120 Hz | **BT24** em 30 Hz (subsônico; muda no 5.3 com a Fb do duto) | igual ao canal 3 |
| LPF | OFF | OFF | **LR24** em 120 Hz | igual ao canal 3 |
| Fase | 0 | 0 | 0 (testar 180 no 5.4, **nos dois juntos**) | igual ao canal 3 |
| Alinhamento | (5.4) | (5.4) | (5.4) | igual ao canal 3 |
| Nível da saída | **−11,0 dB** (11,0 V, 14/10) | **−11,0 dB** (11,0 V, 14/10) | (A5) | igual ao canal 3 |
| Limiter: Threshold | **−11,0 dB = 564 mV** (Auto off, 50 ms / 500 ms; teto 10,8 V, 14/10) | −11,0 dB (a confirmar) | (A6) | igual ao canal 3 |
| EQ Param Saída | 0,0 dB (−1 a −2 dB em ~150 Hz se embolar, 5.4) | idem | 0,0 dB | igual ao canal 3 |
| GAIN no módulo | CH1-CH2: **mínimo** (14/10) | — | CH3-CH4: (A5) | — |

Data em que foi salva: ____ · Exportada para o celular: ☐ · Prints: ____

---

## Histórico
- 2026-10-14: Primeira leitura das telas do app (prints 01–19). Nenhuma memória salva ainda; níveis das saídas encontrados em −16,5 / −16,5 / −12 / −12 dB; filtros com frequências digitadas e tipo OFF; limitador OFF.
- 2026-10-14 (2): Tela Home (print 00): som ON, **Áudio BT desligado**, Volt. **13,9 V**, canais ligados em pares (link 1–2 e 3–4). Foto 20: LED do módulo aceso. Foto 21: multímetro (VC830L) mostrando **15,6** em V~ 200 — **ponto medido a confirmar** (saída do módulo com tom × régua de 13,9 V DC na escala AC); não registrado como ganho.
