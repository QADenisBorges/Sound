# Andamento da montagem do 2.1 (sessões de 11 a 14/10/2026)

> Registro do que foi feito na bancada, valores medidos e o que falta. O detalhe dia a dia está em `projetos/home-theater-5.1/projeto.md` (Histórico de decisões). O guia ilustrado (`guia/`) foi atualizado para a v2.7 com este avanço em 14/10.

## Situação por passo

| Passo | Situação | Observação |
|---|---|---|
| 4.1 Preparar os cabos | Feito (11/10) | C1–C7 cortados e etiquetados; F1, F2, F3 ainda não cortados |
| 4.2 Conector do processador | Feito (11/10) | GND C5 · REM IN C6 · REM OUT C7 · +12VDC C4+C6 |
| 4.3 Força, terra e REM | Feito (12/10) | Fonte: borne 1 C1, borne 2 C4, borne 4 C3, borne 5 C5; módulo: +12VDC C2, GND C3, REM C7 |
| 4.4 RCA, chaves e GAIN | Feito (12/10) | Chaves em F, GAIN dos dois pares no mínimo; pontas RCA alargadas para encaixar (13/10) |
| 4.5 Conferência sem energia | Aprovado (12/10) | Tabela de 12 pontos com multímetro no bip |
| 4.6 Fonte sozinha | Feito (12/10) | 13,8 V nos bornes 1/4 (trimpot ajustado) |
| 4.7 Processador | Feito (12/10) | Polaridade do conector 13,91 V; REM do módulo 12,38 V em ON e 0 V em OFF |
| 4.8 Módulo | Feito (12/10) | 13,91 V no módulo; perda 0 V nos cabos; LED segue o app. Falta o toque de 5 min |
| 4.9 Configurar o processador | Feito (12/10) | Memória 1 do processador: "setup" (filtros do projeto, níveis 0 dB) |
| 4.10 Ganho | Feito (13/10), a reconferir | Ver tabela abaixo |
| 4.11 Limitador | **Próximo** | Usar a configuração "limitador" |
| Etapa 5 | Pendente | Falantes ainda desligados |

## Regulagem do ganho (4.10)

Gerador interno do processador: GERADOR FIXO, 60 Hz, 0 dB. Filtros em OFF, GAIN do módulo no mínimo, multímetro no 200 V~.
O gerador em 0 dB fica ≈6 dB abaixo do máximo da saída; por isso os alvos com o tom são a metade do máximo real.

| Saída | Nível no app | Alvo com o tom | Máximo real com música |
|---|---|---|---|
| Canais 1 e 2 (JBL) | −16,5 dB | 5,5 V em cada | 11 V |
| Canais 3 e 4 (sub, ponte CH4⊕/CH3⊖) | −12,0 dB | ≈10 V em cada, 20 V na ponte | 40 V |

Releitura de 14/10: com os canais 3/4 em −11,5 dB a ponte deu 21,3 V. Se em −12,0 dB continuar acima de 20,5 V, usar −12,5 dB.

## Configurações salvas no celular (Modo Demo, 14/10)

Todas com roteamento A · B · A+B · A+B, fase 0°, alinhamento 0 cm, EQs zerados (15 bandas em Flat), limitador desligado.

| Nome | Para quê | Níveis (1 / 2 / 3 / 4) | Master | Crossover |
|---|---|---|---|---|
| ganho | Conferir a regulagem (4.10) | −16,5 / −16,5 / −12,0 / −12,0 | 0 dB | Tudo OFF |
| limitador | Travar o limitador (4.11) | −10,5 / −10,5 / −6,0 / −6,0 | 0 dB | Tudo OFF |
| primeiro-som | Primeiro som com falantes (5.2) | −16,5 / −16,5 / −12,0 / −12,0 | −20 dB | 1/2: HPF BT12 120 Hz; 3/4: HPF LR24 30 Hz + LPF LR24 120 Hz |
| teste-sub | Sintonia da caixa do sub (5.3) | idem, canais 1 e 2 mudos | −20 dB | 3/4: HPF OFF, LPF LR24 120 Hz |

"ganho" e "limitador" nunca com falantes ligados (sem passa-alta, a JBL recebe grave cheio).
Depois do 4.11: digitar os Thresholds em "primeiro-som" e "teste-sub" e salvar de novo. Conferir cada tela ao carregar no processador (não se sabe se o Modo Demo carrega tudo).

## Roteiro da próxima sessão

1. Carregar "ganho", conferir as telas, gerador fixo 60 Hz 0 dB: CH1 = 5,5 V, ponte = 20 V.
2. Carregar "limitador": CH1 ≈ 11 V, ponte ≈ 40 V; em cada canal, Threshold baixado até a luz acender e subido até apagar; canais 3 e 4 com o mesmo valor.
3. Teste do teto: canal 1 +2 dB, o CH1 não passa de ≈11,5 V.
4. Thresholds em "primeiro-som" e "teste-sub"; salvar a configuração final também no processador.
5. Fonte fora da tomada → ligar os falantes (5.1) → primeiro som (5.2) → sintonia do sub (5.3).

## Lições da bancada

- Multímetro: tensão do tom no **200 V~** (arco da direita); no V com linha reta o tom marca 0.
- Esperar 2–3 s a leitura parar; pontas firmes contra o parafuso, nunca só apoiadas no furo (leitura dispara para 80 V).
- Nível no app: ajustar com **+ / −**; valor digitado pode não ser enviado. Conferir sempre os dois canais de um par (o vínculo nem sempre acompanha).
- RCA que não encaixa até o fim dá 0 V no canal: conferir o encaixe antes de suspeitar da configuração.
- Cabo de 10 mm² no borne de plaquinha: dividir em duas metades, uma de cada lado do parafuso, sem fio para fora.
- Depois de tirar a fonte da tomada, o LED dela demora a apagar (capacitores); o processador desliga antes.

## Pendências

- Soldar as emendas do porta-fusível de 40 A (hoje trançadas) ou trocar por porta-fusível midi (nov/2026).
- Fusível do processador: trocar o 5 A provisório por 1–2 A.
- Conferir se as pontas RCA alargadas prendem firme (folga dá chiado).
- Toque de 5 min no porta-fusível e cabos (4.8); reaperto dos bornes depois da primeira semana.
- Cortar F1, F2 (caixas) e F3 (sub); caixas: silicone deixado para o fim (decisão de 11/10).
