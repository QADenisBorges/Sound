## Conferência do fusível e da queda no cabo

**Resposta curta: os dois fecham.** Fusível de 100 A está na faixa certa para proteger 21 mm² (4 AWG) e sobra ~1,5× sobre a corrente máxima do módulo. Os 5 m de 21 mm² OFC dão **0,24 V de queda** na corrente máxima — limite é 0,5 V, então você está com uma bitola de sobra.

### Premissas que usei (se alguma não for assim, a conta muda)

- Módulo classe D com eficiência entre 75 e 85 %; os 600 W são RMS reais em 4 Ω.
- Tensão de 12,6 V (motor desligado — pior caso de corrente) a 14,4 V (motor ligado).
- Os 5 m são **só o positivo**; o negativo é curto (até ~50 cm), na mesma bitola, em ponto do chassi lixado.
- Cabo é OFC de verdade (cobre puro), não CCA.
- O módulo tem fusível próprio (ou o manual indica um valor externo) que soma até 100 A.

### 1. Quanto o módulo puxa da bateria

I = P / (V × η) — η é a eficiência (quanto da energia da bateria vira som; o resto vira calor no módulo).

| Situação | Corrente máxima contínua |
|---|---|
| 14,4 V, η 0,80 (motor ligado) | 52 A |
| 12,6 V, η 0,80 | 59,5 A |
| 12,6 V, η 0,75 (pior caso realista) | 63,5 A |
| 11,5 V sob carga, η 0,75 (bateria fraca) | ~70 A |

Isso é com senoide em potência cheia. Com música a média fica em 7–20 A (fator de crista). Cabo e fusível se dimensionam pelo pico; alternador e bateria, pela média — e 600 W está bem dentro do que um alternador original aguenta com bons cabos, sem precisar de bateria auxiliar.

### 2. Fusível de 100 A — confere

O fusível junto da bateria protege o **cabo** (se ele encostar no chassi num acidente ou desgaste), não o módulo — o módulo tem os dele. Então ele precisa caber entre dois limites:

- **≥ corrente máxima do sistema:** 63,5–70 A → 100 A dá folga de 1,4–1,6×. Não abre com pico musical nem com a carga dos capacitores ao ligar.
- **≤ o que o cabo aguenta:** 21 mm² / 4 AWG de cobre, pelas tabelas usuais de som automotivo, aceita fusível de 125 a 150 A (as mais conservadoras param em 125 A). 100 A fica abaixo de todas.
- **30 cm da bateria:** dentro do recomendado (até ~30–45 cm).

Faixa que funciona no seu caso: **80 a 125 A**. 100 A é o valor "de tabela" para 4 AWG e o mais fácil de achar. 80 A também serviria, um pouco mais justo; abaixo de ~70 A arrisca abrir à toa, acima de 150 A deixa de proteger o cabo.

Conferência cruzada com a calculadora: pedindo cabo para os próprios 100 A do fusível, em 5 m e 0,5 V de queda, ela devolve 17,2 mm² → 21,2 mm² comercial (4 AWG). Ou seja, mesmo que o cabo conduzisse os 100 A do fusível, ainda ficaria dentro do limite de queda. Fusível, cabo e comprimento fecham entre si.

Dois detalhes que a conta não mostra:
- Em 100 A use porta-fusível **ANL, mini-ANL (AFS) ou MIDI** com terminal crimpado. Os de vidro (AGU) esquentam e dão mau contato nessa corrente.
- O fusível principal deve ser **≥ a soma dos fusíveis internos do módulo** (ou ao valor externo que o manual pede). Se o seu vier com 2 × 40 A ou 1 × 80 A, 100 A está coerente; se somar mais que 100 A, me fala que eu reviso.

### 3. Queda em 5 m de 21 mm² — aceitável, com folga

R = ρ × L / A = 0,0172 × 5 / 21 = **4,1 mΩ** (ρ = resistividade do cobre, 0,0172 Ω·mm²/m)

| Corrente | Queda no cabo | Vira calor no cabo |
|---|---|---|
| 52 A (motor ligado) | 0,21 V | 11 W |
| 59,5 A (12,6 V) | 0,24 V | 14 W |
| 63,5 A (pior caso) | 0,26 V | 16 W |
| 100 A (valor do fusível) | 0,41 V | 41 W |

Limite: 0,5 V. No pior caso real você está na metade; até no valor do fusível ainda passa. Esse cabo aguenta ~122 A em 5 m dentro dos 0,5 V.

Conta inversa (`calc_som.py cabo --corrente 63.5 --comprimento 5 --queda 0.5`): o mínimo seria 10,9 mm² → 16 mm² comercial. Você está **uma bitola acima do mínimo** — é onde eu deixaria: sobra para envelhecimento de terminais, para um negativo um pouco mais longo e para um módulo maior no futuro sem trocar cabo.

Três "e se":
- **Negativo de ~1 m** até o chassi → 6 m de circuito → 0,29 V a 59,5 A. Ainda ok.
- **Negativo voltando até a bateria** (10 m de circuito) → 0,49 V, no limite; a calculadora pediria 25 mm². Não faça isso: terra no chassi, curto, mesma bitola.
- **Se o cabo for CCA** (alumínio cobreado, comum em kit barato vendido como "OFC") → 0,40 V a 59,5 A e 0,67 V a 100 A. Vale conferir: corte uma ponta — cobre puro é cor de cobre até o miolo; CCA fica prateado por dentro e o rolo é bem mais leve.

### O que você não pediu, mas afeta os 49 V do ganho

Fusível e cabo, entendido. Só que o alvo de 49 V depende de duas coisas que não apareceram, e é rápido:

1. **49 V = √(600 × 4) está certo** — para 600 W. Mas regule pelo **menor RMS entre sub e módulo**. Se o seu 12" for de 400 W RMS, o alvo é √(400 × 4) = **40 V**; 49 V colocaria 600 W num sub de 400.
2. **Em que tensão o fabricante mediu os 600 W?** Marcas nacionais costumam anunciar a 14,4 V. Com motor desligado (12,6 V) o módulo entrega ~460 W (potência cai com V²) → alvo de **42,9 V**. Se girar o ganho até ler 49 V com o motor desligado, você está regulando em clipping. Regule com motor ligado (~14 V) ou use o alvo menor.

Procedimento: bass boost, loudness e EQ desligados; passa-baixa no lugar (~80 Hz); tom senoidal de 40 Hz a 0 dB; fonte em ~75–85 % do volume; **sub desconectado**; multímetro em V AC nos bornes de saída; sobe o ganho até o alvo e para.

O resto que você descreveu está coerente: 2+2 Ω em série = 4 Ω (conferido); 38 L selada com Qtc 0,72 num 12" é boa escolha para grave limpo no carro — quase o 0,707 de resposta mais plana, e o ganho de cabine compensa a queda natural da selada abaixo de ~50 Hz.

### Onde salvei

Como você fechou o projeto, registrei componentes, contas e o histórico de decisões em:

`C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-7\old_skill\run-1\outputs\projetos\sub-12-selado\projeto.md`

Se preferir não guardar, me avisa e apago. Se quiser, na próxima eu fecho a lista de miudezas da instalação (porta-fusível, terminais, remote, RCA ou alto nível) e o roteiro de teste no dia da montagem.
