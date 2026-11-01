# Som do carro

## Vias (informadas pelo usuário em 01/11/2026)
| Via | Equipamento | Situação |
|---|---|---|
| Subwoofer | Protech Light 8" (caixa pronta), 4 Ω (estava em ponte no SD800.4 no carro) | No carro, sem uso |
| Dianteiros (médio-grave) | Snake, modelo não informado | Identificar modelo, tamanho, impedância e RMS (etiqueta do ímã) |
| Dianteiros (agudo) | Tweeters Bravox do kit CS50BK | Conferir se usa o divisor passivo do kit ou um capacitor |
| Traseiros | JBL 4TRMS80 (triaxial 4") | No carro, sem uso |
| Tweeters (futuro) | JBL 1TWMS80 (mini tweeter, 40 W RMS cada) | Fora do escopo por enquanto (01/11) |

Specs em `componentes/` (subwoofers.md, alto-falantes.md, tweeters.md).

## Configuração proposta (01/11/2026)
Equipamento: SounDigital SD800.4 EVO + Taramps TS 400x4 + Taramps PRO 2.4BT + AUDIO (todos já possuídos).

```
Celular (Bluetooth A2DP) e/ou rádio (RCA ou alto nível) → PRO 2.4BT + AUDIO
  Saída 1 (L) ─────────────→ SD800.4 CH1 → Snake + tweeter Bravox E (divisor passivo)
  Saída 2 (R) ─────────────→ SD800.4 CH2 → Snake + tweeter Bravox D
  Saída 3 (A+B) ─ Y ─→ SD800.4 CH3 + CH4 → ponte (CH4 ⊕ / CH3 ⊖) → sub Protech 4 Ω, 400 W
  Saída 4 (A+B) ─ Y ─→ TS 400x4 CH1 + CH2 → JBL 4TRMS80 E/D (traseiro mono)
REM: rádio/pós-chave → REM IN do processador; REM OUT → REM do SD800.4 e do TS 400x4
```

| Saída | Função | Filtro (ponto de partida) | Nível / atraso |
|---|---|---|---|
| 1 / 2 | Dianteiros L/R | HP LR4 80 Hz (100 Hz se o Snake for 5" ou Xmax baixo) | Referência; alinhar tempo ao motorista |
| 3 | Sub | LP LR4 80 Hz + subsônico (selada 25 Hz; dutada 0,75–0,8 × Fb, 24 dB/oit; sem saber 30 Hz/24) | Ajustar no ouvido/REW; fase 0/180 testando |
| 4 | Traseiro mono | HP LR4 110 Hz (ficha: mín. 100 Hz/24 dB) | −6 a −10 dB em relação à frente; +5 a 10 ms de atraso extra |

Chaves dos módulos: SD800.4 em F nos dois pares; TS 400x4 em Full/Off se existir (se só houver HP 90 Hz/12 dB, ele soma ao HP do processador).
Entradas: o SD800.4 exige as 4 RCA ligadas (atendido pelas saídas 1, 2 e Y da 3). No TS 400x4, se o manual pedir as 4, usar Y também para CH3/CH4.
Ganho: sub 40 V (ponte 4 Ω, 400 W); traseiros ~11 V (30 W); dianteiros √(P × R) com o RMS do Snake (ex.: 60 W em 4 Ω = 15,5 V).

Elétrica: soma ~790 W RMS → 78 A em potência cheia contínua; 10–26 A médios com música. Cabo principal **16 mm² OFC** (60 A, 5 m, queda ≤ 0,5 V),
fusível de **60 A** a ≤ 30–45 cm da bateria, distribuidor com 40 A (SD800.4), 20 A (TS 400x4) e 1–2 A (processador). Terra curto no chassi lixado, mesma bitola.

## Pendências
1. ~~Conflito com o home theater~~: resolvido em 01/11 — tudo está no carro, sem uso.
2. Rádio (original ou não, com saída RCA?) e onde ficam os módulos.
3. Modelo do carro e elétrica (bateria, alternador).
4. Motivo da troca dos tweeters Bravox pelos JBL 1TWMS80 (adiado).
5. Snake: modelo, tamanho, impedância e RMS; se usa o divisor passivo do kit Bravox.
6. Caixa do sub: selada ou dutada (varredura lenta 25–60 Hz).
7. TS 400x4: versão, tensão de medição da potência, se tem posição Full/Off e se exige as 4 entradas.

## Histórico de decisões
- 2026-11-01: Vias do carro registradas como informadas; pendências acima abertas.
- 2026-11-01: Usuário esclarece que tudo está no carro, sem uso; JBL 1TWMS80 fora do escopo. Pede configuração com SD800.4 + TS 400x4 + PRO 2.4BT + AUDIO.
  Proposta: dianteiros e sub no SD800.4 (sub em ponte por uma saída só, com Y, que garante sinal idêntico nos dois canais), traseiros mono no TS 400x4 pela saída 4,
  para ter passa-alta, nível e atraso próprios. Alternativa: traseiro estéreo em Y das saídas 1/2, sem ajuste próprio (ver conversa).
