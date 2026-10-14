# Processadores (DSP)

Manuais oficiais em `componentes/manuais/` (baixados do site da Taramps em 28/09/2026).

## Taramps PRO 2.4BT + AUDIO — escolhido para o home theater (28/09/2026)
**Unidade comprada e conferida por foto (09/10/2026):** genuína — MODEL PRO 2.4BT + AUDIO, serial 00252403010762, ANATEL 02442-26-09573, fabricada em 21/07/2026. Vem com: conector de força removível de 4 bornes de parafuso (GND · REM IN · REM OUT · +12 VDC), chicote de alto nível (conector branco, entradas A+/A−/B−/B+; **não será usado**, a entrada é por RCA) e parafusos. **Não vem fio de força**: usar 1,5 mm² (+12 V/GND) e 0,5–0,75 mm² (REM). LEDs: BT APP, INPUT CLIP e LIMITER/OUT CLIP por saída.
Comparado com o PRO 2.4BT (sem "+ AUDIO"). Fonte: os manuais oficiais em inglês (MN_PRO 2.4BT e MN_PRO 2.4BT + AUDIO).

### O que é igual nos dois
| Item | Valor |
|---|---|
| DSP | 24 bits / 48 kHz |
| Entradas / saídas | 2 (A, B) / 4, roteamento A, B ou A+B |
| Entrada | RCA (10 kΩ) + fio de alto nível (50 Ω, com acionamento automático) |
| Saída máxima | 2,1 V RMS (5,9 Vpp), impedância 47 Ω |
| Resposta / THD / SNR / diafonia | 10 Hz–22 kHz (−1 dB) / 0,01% / > 90 dB / > 80 dB |
| EQ gráfico de entrada | 15 bandas (2/3 de oitava; 25 Hz a 16 kHz), ±12 dB em passos de 0,1 dB, 12 presets |
| EQ paramétrico | **1 na entrada + 1 por saída** (10 Hz–22 kHz, ±12 dB, Q de 0,4 a 10) |
| Crossover | HPF e LPF de 10 Hz a 22 kHz; LR de 12 a 48 dB/oit; BW de 6 a 48 dB/oit |
| Atraso | 8,0 ms (272 cm), em cm por saída |
| Fase | 0 / 180° por saída |
| Níveis | Master de −80 a 0 dB; nível por saída de −45 a **+15 dB** (dá para passar do sinal de entrada) |
| Limitador | Limiar, ataque de 0,1 a 100 ms, liberação de 1 a 1.600 ms, ou modo Auto (ajusta pelo HPF). No app, o limiar aparece em volts na saída do processador (2,10 V = máximo) |
| Gerador | Senoide fixa ou varredura (3 velocidades), 10 Hz–22 kHz, −60 a 0 dB. **Não tem ruído rosa** |
| Memórias | **3 no processador + 15 no celular** (exportáveis e compartilháveis por WhatsApp) |
| Outros | Mute por saída, senha de 4 dígitos (padrão **1234**: trocar), LEDs de clip na entrada e de limitador/clip na saída |
| Reset | "Reset Audio Settings" volta o áudio ao padrão de fábrica (some o passa-alta das caixas); "Factory Reset" ou o botão RESET apagam tudo, inclusive senha e memórias. Exporte a configuração para o celular |
| App | Taramps PRO, BLE 5.4, até 4 processadores, alcance de ~25 m; Android 8.1+ / iOS 16+ |
| Display | Nenhum: tudo pelo app |
| Fusível | **1 A** no positivo; cabo de 1,5 mm² (REM 0,5–0,75 mm²) |
| Garantia | 12 meses |

### O que muda
| Item | PRO 2.4BT | **PRO 2.4BT + AUDIO** |
|---|---|---|
| Música do celular (Bluetooth A2DP) | Não | **Sim** (parear com "TARAMPS_AUDIO" fora do app e ligar "Audio BT" no app) |
| Voltímetro no app | Não | **Sim**: histórico, mínimo e máximo, alerta de tensão baixa, calibração pelo multímetro |
| Modo BOB (sem rádio) | Não citado | **Sim**: REM IN ligado ao +12 V, liga e desliga pelo botão do app |
| Ganho de entrada RCA | Controle físico: até 2 V RMS (máx.) ou até 9 V RMS (mín.) | **Fixo: até 2,1 V RMS** |
| Limiar do limitador | −24 a 0 dB | −48 a 0 dB |
| Antena | Externa (acompanha) | Interna |
| Botões no aparelho | Teclas 1–4 / FCN | Só botão de RESET |
| Tensão / consumo | 10–16 V / 200 mA | 9–16 V / **70 mA** |
| Tamanho / peso | 198 × 35 × 130 mm / 430 g | **110 × 42 × 98 mm / 110 g** |
| Preço (28/09/2026) | R$ 189,90 (Amazon) | R$ 234,99, ou ~R$ 190 com cupom (ML, loja oficial Taramps) |

### Uso no home theater
- Entrada: notebook ou projetor pelo P2 (~0,5–1,5 V RMS no volume máximo). Fica abaixo do limite de 2,1 V RMS do + AUDIO. Se o LED de clip da entrada acender, baixe o volume do notebook.
- **Modo BOB:** REM IN do processador no +12 V, REM OUT → REM do SD800.4. O som liga e desliga pelo app, sem rádio.
- Memórias: 3 no aparelho (Filme, Música, Noite). As outras (Medido, Diálogo, Carro) ficam no celular e são carregadas quando precisar.
- O EQ paramétrico tem só 1 banda por saída. Com o microfone, a correção mais fina do sub pode precisar do Peace quando a fonte for o notebook.
- Para medir com o REW, use os sinais do próprio REW pelo notebook (o gerador do processador não tem ruído rosa).
- O manual cita iOS 17 no texto e iOS 16 na ficha técnica. Confira o celular.

### App Taramps PRO — como as telas funcionam (conferido por prints em 14/10/2026)
Prints em `projetos/home-theater-2.1/fotos/2026-10-14-app-processador/`. Estado salvo de cada memória do projeto: `projetos/home-theater-2.1/memorias-processador.md`.

**Topo de toda tela:** voltar · nome da tela · **valor em dBm** · engrenagem. O dBm (−34 a −40 nos prints) é a **força do sinal Bluetooth** entre o celular e o processador, **não é nível de áudio**. Quando a ligação cai, aparece **"Desconectado"** em vermelho no lugar: os valores na tela passam a ser a cópia do app, não o que está no aparelho. Reconecte antes de conferir ou mudar algo.

**Abas Canal 1–4:** cada canal tem uma cor, e o canal ativo fica preenchido: 1 vermelho, 2 azul, 3 verde, 4 laranja.

| Tela | O que tem | Observações |
|---|---|---|
| **Home** (tela inicial) | **ON/OFF** (liga o som e o módulo pelo REM); chave **Áudio BT** (vermelha = desligada; abaixo, "Áudio Conectado/Desconectado"); **Master Level**; botão de alto-falante por canal com **ícone de corrente (link) azul entre Canal 1–2 e entre Canal 3–4**; **In Clip** (LED de entrada); **Volt.** (tensão de alimentação, ex.: 13,9 V); **Bluetooth** (LED azul = app conectado); LEDs **Limiter / Out Clip 1–4**; **5 botões de coração** (atalhos, provavelmente memórias favoritas: a confirmar); **Deslize para Bloquear** | O link azul deve espelhar os ajustes do par (bom para a ponte 3–4): **confirmar** se um mute/ajuste no Canal 1 também vai para o Canal 2 |
| **Barra inferior** | **Home · Áudio · Player · Salvar · Volt.** | "Salvar" deve ser a tela das memórias (a confirmar por print) |
| **Roteam. Ent/Saída** | Por canal: botões **A · B · A+B** (o escolhido fica vermelho) | Origem de cada saída |
| **EQ 15 Bandas** (entrada) | 25 Hz a 16 kHz; seleciona a banda com ‹ ›, ganho com − + ou barra; **Presets** (lista; "Custom" = ajuste manual) | Plano = todas em 0.0 |
| **EQ Param Entr** | 1 banda: Ganho (dB), Freq. (Hz), Fator Q | Ganho 0.0 = sem efeito, seja qual for a freq. e o Q |
| **EQ Param Saída** | 1 banda por canal (abas): Ganho, Freq., Fator Q | Idem: ganho 0.0 = neutro |
| **Crossover** | Gráfico com os dois pontos de corte; **HPF Freq.**, **LPF Freq.**, **HPF Filtro** e **LPF Filtro** (OFF, LR12…LR48, BT6…BT48); LEDs **Limiter / Out Clip 1–4**; botão de alto-falante verde; caixas "Canal 1–4" abaixo do gráfico | **A frequência só vale com o tipo de filtro escolhido**: com "Filtro = OFF" o canal passa tudo, mesmo com 120 Hz digitado. A função das caixas "Canal 1–4" (mostrar a curva × editar junto) **a confirmar** |
| **Fase** | Por canal: **0 · 180** | A mesma fase aparece na tela Alinhamento |
| **Alinhamento** | Por canal: fase 0/180, atraso em **cm / ms** com − +, botão de alto-falante verde | Atraso máximo de 272 cm (8 ms) |
| **Limiter** | Por canal: gráfico entrada × saída (valor em **V** no canto, 2,10 V = máximo); **Auto** (chave); **Threshold** (OFF ou valor); **Attack** (ms); **Release** (ms); LEDs 1–4 | Padrão visto: Threshold OFF, Attack 50,0, Release 500. Com OFF o limitador não age |
| **Nível das Saídas** | **Master Level** e nível por canal em dB (barra, − +); LED **Limiter / Out Clip** por canal; botão de alto-falante por canal | Botão verde = canal tocando (leitura dos prints; confirmar que muda ao silenciar) |

**Ainda não visto em print:** a tela **Salvar** (memórias), o **gerador de sinal**, a tela **Volt.** e a troca de senha (provavelmente na engrenagem). Completar quando houver prints.
