Nem uma coisa nem outra — e as duas ideias puxam em sentidos opostos: você quer se proteger de potência sobrando e, ao mesmo tempo, escolher a ligação que faz o módulo entregar o **máximo** que ele tem. Vou por partes e, no fim, mostro como usar a impedância a seu favor — que é a versão certa da sua segunda ideia.

**Premissas:** módulo monocanal classe D, "1200 W RMS" medidos a 14,4 V na impedância mínima dele (1 Ω ou 2 Ω, que é como as marcas nacionais anunciam); sub de 400 W RMS com sensibilidade ~88 dB; carro com elétrica original e ~5 m de cabo de força. Se algo for diferente, a lógica é a mesma e os números mudam pouco.

## 1. "Não pôr o volume no máximo" não protege o sub

O que decide quanta potência chega ao sub é o **ganho** do módulo, não o botão do rádio. Ganho é casamento de nível: define quanto sinal do rádio basta para o módulo atingir a potência cheia. Com o ganho alto, o rádio em 50 % já pode estar entregando os 1200 W; com o ganho regulado para 400 W, o rádio no máximo limpo entrega 400 W. E "volume confortável" não é um número fixo: gravações variam 6–10 dB entre faixas, bass boost e loudness somam mais, e um dia alguém gira o botão. Isso é sorte, não proteção.

O perigo específico do módulo grande é que ele queima **em silêncio**. Os 400 W RMS do sub são um limite térmico — quanto calor a bobina dissipa por tempo longo. Um módulo de 400–500 W, quando é forçado, clipa (corta o topo do sinal, vira onda quadrada e esquenta a bobina) e você ouve o grave "rasgar" antes do estrago. Um módulo de 1200 W entrega 800 W *limpos* num sub de 400: o grave só fica mais forte, sem distorção avisando, enquanto a bobina cozinha — ou o cone passa do curso mecânico (Xmax) antes disso, principalmente em caixa dutada sem filtro subsônico.

E o que 3× de potência compraria? 10·log(3) = **+4,8 dB**: com o sub de 88 dB, 400 W dão ~114 dB e 1200 W dão ~119 dB a 1 m. É "um pouco mais alto" — o dobro perceptivo são +10 dB, ou seja, 10× a potência. Não vale a vida do sub.

O que protege de verdade:

- **Ganho regulado com multímetro** para o teto de 400 W. Tom senoidal de 40 Hz a 0 dB, rádio no máximo sem distorção (~75–85 %), bass boost/loudness desligados, sub desconectado — e você sobe o ganho até a tensão AC na saída bater V = √(P × R): **40,0 V em 4 Ω**, **28,3 V em 2 Ω**, 20,0 V em 1 Ω. Se em 4 Ω o módulo não chegar a 40 V, é sinal de que o teto dele já está abaixo de 400 W nessa carga: ajuste até o limite sem clipar e pronto.
- **Passa-baixa (~80 Hz)** e, se a caixa for dutada, **subsônico** na sintonia da caixa ou logo abaixo (corta o grave que o cone não controla mais).
- **Impedância certa** — que é o item 3.

## 2. 1 Ω: a conta está certa, o sentido está invertido

A parte verdadeira: num módulo estável em 1 Ω, ir de 2 Ω para 1 Ω *quase* dobra a potência entregue (na prática 1,7–2×, porque a fonte do módulo cede em 1 Ω). O resto não fecha:

- **Dobra em relação a quê?** Os "1200 W" desse módulo quase certamente já são o número em 1 Ω (ou 2 Ω) a 14,4 V — é assim que Taramps, Stetsom, SounDigital etc. anunciam. Não existe degrau acima; e com o motor desligado (12,6 V) ele entrega ~920 W, não 1200.
- **Compensar o quê?** Você já tem 3× a potência do sub. 1 Ω é a ligação que entrega o *máximo* ao sub — o contrário de compensar.
- **Impedância não se escolhe no módulo**, vem da bobina do sub. Bobina simples de 4 Ω é 4 Ω e acabou. Bobina dupla 2+2 Ω: em série 4 Ω, em paralelo 1 Ω. Bobina dupla 4+4 Ω: série 8 Ω, paralelo 2 Ω.
- **Se o módulo for de 2 Ω mínimo**, 1 Ω derruba em proteção ou queima a saída.
- **Custo elétrico**: 1200 W classe D a 12,6 V puxam ~119 A de pico (contra ~40 A para 400 W). Alternador de carro popular tem 70–120 A e o carro já usa 30–50 A: farol piscando, tensão caindo, módulo protegendo. E em 1 Ω o fator de amortecimento (o quanto o módulo "segura" o cone) piora — grave mais solto, menos definido.

> **Vale saber — por que a impedância define a potência do módulo:** a saída do módulo tem um teto de tensão, fixado pela fonte interna. Com o teto fixo, P = V²/R: metade da impedância ≈ dobro da potência e dobro da corrente da bateria. Por isso o mesmo módulo é "1200 W" em 1 Ω, ~600–700 W em 2 Ω e ~300–400 W em 4 Ω — e por isso a impedância em que você liga é o jeito mais confiável de escolher quanto ele entrega: não depende de botão.

## 3. O caminho: use a impedância para o módulo "caber" no sub

Sua intuição de que a impedância muda a potência está certa — use-a ao contrário. Ligando o sub na impedância **mais alta** disponível, o teto do módulo cai para perto dos 400 W por física, e o ganho vira ajuste fino em vez de única barreira:

| Bobina do sub | Ligação | Módulo "1200 W @ 1 Ω" entrega ~ | Ganho: tensão alvo |
|---|---|---|---|
| Simples 4 Ω | 4 Ω (única opção) | 300–400 W → casamento praticamente perfeito | 40,0 V |
| Dupla 2+2 Ω | **série = 4 Ω** | 300–400 W | 40,0 V |
| Dupla 2+2 Ω | paralelo = 1 Ω | 900–1200 W → **não** | — |
| Dupla 4+4 Ω | **paralelo = 2 Ω** | 600–700 W → 1,5–1,75× o sub, ok com ganho regulado | 28,3 V |
| Dupla 4+4 Ω | série = 8 Ω | 150–200 W → subaproveita o sub | — |

Se o módulo for especificado em 2 Ω (1200 W @ 2 Ω), tudo desce uma linha: em 4 Ω ele entrega ~600–700 W, ainda 1,5–1,75× — ok com o ganho em 40 V. O manual do módulo traz a tabela exata por impedância; use ela, não a minha estimativa.

**Elétrica coerente com isso:** com o módulo limitado a 400–700 W pela impedância + ganho, a corrente máxima fica em 40–70 A → cabo de **16 mm² OFC** (cobre de verdade, não CCA — alumínio cobreado, que conduz ~60 %) para ~5 m com queda ≤ 0,5 V, **fusível de 60–80 A** a no máximo 30–45 cm da bateria, e negativo da mesma bitola, curto, no chassi lixado. Se um dia quiser mesmo 1 Ω (segundo sub, SPL), aí a conta é outra: 21–35 mm², Big 3 (reforço dos três cabos principais alternador–bateria–chassi) e provavelmente bateria auxiliar.

## Para eu fechar a ligação exata

Duas informações, e te digo o esquema de fios e a tensão do ganho sem estimativa:

1. **O sub**: bobina simples ou dupla, e quantos ohms por bobina (está na etiqueta do ímã: "4 Ω", "2+2", "DVC 4").
2. **O módulo**: marca/modelo ou a tabela do manual — potência em 1 Ω / 2 Ω / 4 Ω e a impedância mínima.

E, sabendo de tudo isso, se ainda quiser ligar em 1 Ω, me diz o objetivo (SPL? segundo sub depois?) — aí montamos a elétrica e o sub para isso, em vez de arriscar o que você já tem.

📝 Anotei no seu perfil (neste teste, gravado em `C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-4\with_skill\run-1\outputs\perfil.md`): módulo monocanal 1200 W RMS + sub 400 W RMS, impedâncias a confirmar; conceitos em construção: ganho ≠ volume e potência × impedância.
