# Projeto: Caixa Bluetooth portátil para churrasco (DIY)

## Resumo
Caixa 2 vias estéreo dutada, cerca de 20 L líquidos. Componentes: 2 woofers de 6–6,5" (4 Ω), 2 tweeters de domo de 1" (4 Ω), placa TPA3116D2 com Bluetooth integrado, bateria Li-ion 6S2P com BMS e crossover passivo LR2 em ~3 kHz. Alvo: ~95 dB a 4 m ao ar livre, grave até ~55–60 Hz e ~9 h de autonomia em volume médio.

## Premissas
- Música ambiente alta ao ar livre, para 10–30 pessoas; não é "paredão".
- Portátil, com 10–13 kg carregados por uma pessoa.
- Orçamento de ~R$ 1.000 (opção Equilibrada). Preços são estimativas.
- O usuário sabe soldar e nunca fez caixa, por isso crossover passivo e não DSP.

## Arquitetura
Celular → BT → placa TPA3116D2 (tudo em uma) → 2 canais → crossover 2 vias por canal → woofer + tweeter.
Bateria 6S + BMS → fusível de 5 A → chave → placa. Carregador CC/CV de 25,2 V + indicador de carga.

## Dimensionamento
- Potência: 22,2 V em 4 Ω dá teto de ~62 W por canal e uso limpo de ~40 W por canal. Com 4S seriam só ~18 W por canal.
- SPL: 88 dB + 80 W a 4 m dá ~95 dB. A 1 m, com 40 W, dá ~104 dB.
- Gabinete: dutado, 20 L líquidos, Fb 55 Hz. Dutos: 2 × Ø5 cm × 15,8 cm ou 1 × Ø7 cm × 14 cm, com ar a ~9 m/s (OK). 1 duto de Ø5 cm deixa o ar a 18 m/s, o que dá ruído de sopro.
- Exemplo de medidas: 55 × 30 × 22 cm externos, em compensado de 15 mm.
- Critério do woofer: 4 Ω, ≥ 88 dB, Fs 45–65 Hz, Qts 0,30–0,45, Vas ≤ 15 L, Xmax ≥ 4 mm, com T/S publicado. Simular no WinISD.
- Crossover por canal (4 Ω, 3 kHz, LR2):
  - Woofer: L de 0,39–0,47 mH em série + C de 6,8 µF em paralelo.
  - Tweeter: C de 6,8 µF em série + L de 0,42 mH em paralelo, polaridade invertida.
  - L-pad para −4 dB: 1,5 Ω em série + 6,8 Ω em paralelo.
- Autonomia: 6S2P (~133 Wh) dá ~8,9 h a 12 W médios e ~4,3 h a 25 W.

## Opções de orçamento (estimativa)
- Econômico: ~R$ 615–960 (bateria 6S1P, woofers de entrada).
- **Equilibrado (escolhido): ~R$ 960–1.540** (6S2P, woofers com T/S bom).
- Caprichado: ~R$ 1.560–2.660 (6S3P, placa BT + DSP, componentes de crossover melhores).

## Riscos e cuidados
- Capacitores de entrada da placa precisam ser de 35 V ou mais (bateria 6S cheia = 25,2 V).
- Não soldar fio direto em célula 18650. Usar pack pronto ou solda a ponto. BMS com balanceamento, fusível na saída e carregador de 25,2 V.
- Células originais de marca; evitar as "9.900 mAh" falsas.
- Compensado em vez de MDF (umidade). Tela metálica nos falantes. Alça presa com porca-garra.
- Não deixar no sol nem no carro quente. Regular o volume máximo antes do clipping para proteger o tweeter.

## Próximos passos
1. Escolher os woofers pelo T/S e simular no WinISD.
2. Comprar a placa e testar em bancada com fonte de notebook de 19–20 V; conferir os capacitores.
3. Definir a bateria (pack pronto 6S2P com BMS).
4. Montar o gabinete, depois o crossover, e fazer o primeiro teste.

## Histórico de decisões
| Data | Decisão | Por quê |
|---|---|---|
| 2026-09-22 | 2 tweeters (estéreo 2 vias) em vez de 1 | A TPA3116 tem 2 canais; um tweeter só obrigaria a somar em mono |
| 2026-09-22 | Bateria 6S (22,2 V) direto, sem step-up | Mais que o dobro da potência da 4S; step-up é mais uma fonte de ruído e falha |
| 2026-09-22 | Placa com BT integrado | Evita o loop de terra e o chiado de BT separado na mesma bateria |
| 2026-09-22 | Caixa dutada de ~20 L, Fb 55 Hz | Mais grave por watt em caixa compacta, bom para bateria |
| 2026-09-22 | Crossover passivo LR2 em 3 kHz com L-pad | Simples e barato para o primeiro projeto; dá para refinar depois com medição |
| 2026-09-22 | Compensado de 15 mm em vez de MDF | Uso externo, com umidade e respingos |
