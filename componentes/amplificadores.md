# Amplificadores disponíveis

## SounDigital SD800.4 (EVO) — módulo automotivo de 4 canais, classe D

**Unidade do usuário** (fotos em `componentes existentes/SD800.4/`, 2026-09-25): tampa "800.4 EVO" (primeira EVO).
- Painel de entrada: 4 RCA (CH1, CH4 em cima; CH2, CH3 vermelhos embaixo), GAIN CH1-CH2 e GAIN CH3-CH4, chave X-OVER LP / F / HP em cada par.
- Régua de saída, com as letras do painel de pé (conferido em 09/10/2026 girando a foto 180°): **GND · REM · +12VDC | CH4 + − · CH3 + − · CH2 + − · CH1 + −** (bornes de parafuso). A ordem que constava antes (CH1 −/+ … GND) era a da foto de cabeça para baixo. Mapa desenhado em `documentacao/modelo/equipamentos.js` (`sd800.4-saida`).
- **Ponte 4 Ω CH3/CH4: sub + → CH4 ⊕, sub − → CH3 ⊖** (marcação "BRIDGE 4Ω" no painel). A outra ponte é CH2 ⊕ / CH1 ⊖.

Fonte: manuais oficiais 800.4 EVO6 (rev. SET/2023) e EVO4.0 (soundigital.com). As duas versões são quase iguais; as diferenças estão marcadas. **Versão do usuário: a confirmar** (etiqueta do módulo).

### Potência (medida a **12,6 V**, 60 Hz, 1% THD, norma CTA-2006, ou seja, números honestos)
| Configuração | Potência |
|---|---|
| 4 canais @ 2 Ω | 4 × 200 W RMS |
| 4 canais @ 4 Ω | 4 × 132 W RMS |
| Ponte @ 4 Ω (2 canais) | 2 × 400 W RMS |
| Ponte @ 8 Ω | 2 × 264 W (EVO4.0) |
| Ponte @ 2 Ω | **não permitido** |

Impedância mínima: 2 Ω por canal, **4 Ω em ponte**.

### Alimentação
| Item | EVO6 | EVO4.0 |
|---|---|---|
| Tensão de operação | 9–16 V | 8–16 V |
| Corrente com música | 39 A | 40 A |
| Corrente máxima | 78,7 A | 80 A |
| Fusível recomendado | 40 A | 40 A |
| Cabo de força e terra | 10 mm² OFC (CCA proibido) | 10 mm² |
| Cabo de falante | 2,5 mm² | — |
| Eficiência | 80% | 79% |
| Ligação | +12 V, GND, REM (fio do REM ≥ 1,5 mm²) | idem |

### Entradas
- Só **RCA** (4 entradas). Sensibilidade 0,2–2 V (EVO6) / 0,2–4 V (EVO4.0). Uma saída P2 de notebook (~0,5–1 V) está dentro da faixa.
- **Não há chave 2CH/4CH.** O manual exige: "todas as entradas RCA devem estar ligadas" para o módulo funcionar direito. Fonte mono → usar Y.
- Entrada de alto nível: citada só no EVO4.0 (verificar no seu).

### Crossover
- Uma chave por par (CH1/CH2 e CH3/CH4): **LP – F – HP**, **fixo em 80 Hz**, 12 dB/oitava. Não é ajustável.

### Tabela de ganho do fabricante (tom de 60 Hz a 0 dB, fonte em 3/4 do volume, chave em "F", falantes desligados)
No home theater, a referência é outra: celular a 100 % com tom a 0 dBFS (o maior sinal possível), para não sobrar volume acima da regulagem. Ver "Uso no home theater".
| Modo | Carga | Tensão alvo |
|---|---|---|
| Estéreo | 2 Ω / 200 W | 20 V |
| Ponte | 4 Ω / 400 W | 40 V |
Para outras cargas: V = √(P × R) (`calc_som.py ganho`). JBL 4TRMS80 em uso doméstico: ~11 V (30 W) até 17,9 V (80 W).

### Dimensões / peso (EVO6)
~104 × 112 × 52 mm, 0,55 kg. Mantenha a ventilação lateral livre (chega a mais de 60 °C).

### Uso no home theater (fase 1, 2.1)
- CH1/CH2 → JBL L/R, chave em **F**: o corte é o do processador PRO 2.4BT + AUDIO (Butterworth de 12 dB/oit em 120 Hz). O HP de 80 Hz empilhado abriria um buraco no cruzamento. Não use capacitor em série: com a impedância da caixa na Fc, ele reforça o grave em vez de cortar.
- CH3+CH4 em ponte → sub (só se o sub fechar em **≥ 4 Ω**), chave em **F**; passa-baixa e subsônico no processador, com ajustes **iguais** nas saídas 3 e 4.
- Entradas: as 4 RCA ligadas às saídas 1–4 do processador.
- Ganho (revisão de 09/10/2026): referência = celular a 100 % com tom de 60 Hz a 0 dBFS; alvos de **11 V** (JBL) e **40 V** (ponte). Se a versão for a EVO6 (0,2–2 V), o GAIN no mínimo já passa do alvo com os 2,1 V do processador: o ajuste fino fica no nível da saída no app.
- Fonte 12–14,4 V: consumo com música ~40 A no máximo do módulo; em casa, bem menos.
