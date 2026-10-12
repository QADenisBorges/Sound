As duas contas fecham. Vou direto aos números — a premissa em tudo é motor desligado (12,6 V), que é o pior caso de corrente.

**Fusível de 100 A — correto para esse cabo.**
Corrente máxima do módulo: I = P / (V × η) = 600 / (12,6 × 0,8) ≈ **60 A** (η = eficiência; classe D fica entre 75 e 85 %). Se a sua for 75 %, ~64 A. Com música a média fica em 8–20 A, mas cabo e fusível se dimensionam pelo pico.
O fusível na bateria protege o **cabo**, não o módulo — então ele precisa caber numa janela: acima da corrente máxima do sistema (~64 A), para não abrir num pico de grave, e abaixo do que o cabo aguenta — 21 mm² (4 AWG) OFC fica em torno de **125 A** (confira a tabela do fabricante do seu cabo). 100 A cabe com folga dos dois lados; 80 A também serviria, um pouco mais justo; acima de 125 A, não. Os 30 cm da bateria estão dentro do recomendado (≤ 30–45 cm). Nessa corrente, use porta-fusível midi ou mini-ANL — AGU de vidro esquenta no contato. O fusível de bordo do módulo continua lá: ele protege o módulo, o de 100 A protege o cabo.

**5 m de cabo — queda aceitável, com folga.**
ΔV = ρ × L × I / A = 0,0172 × 5 × 60 / 21,2 ≈ **0,24 V** (~2 % de 12,6 V; ρ = resistividade do cobre em Ω·mm²/m). No pior caso, 64 A e mais 0,5 m de negativo: ~0,29 V. O limite prático em 12 V é 0,5 V — você está na metade. Só pela queda, 16 mm² bastaria (área mínima calculada: 11–13 mm²); o 21 mm² é escolha confortável e é justamente o que permite o fusível de 100 A (em 16 mm² o teto seria ~80 A). Duas condições para a conta valer:
- o cabo ser OFC de verdade — CCA (alumínio cobreado) vendido como "cobre" é comum no Mercado Livre; com CCA na mesma bitola a queda vai a ~0,40 V e o fusível teria que cair para ~80 A;
- o negativo ter a mesma bitola, ser curto e ir num ponto do chassi lixado até o metal.

**Ganho a 49 V** — a conta bate: √(600 × 4) = 49,0 V. Não pediu, mas duas premissas mudam esse alvo e podem custar o sub, então deixo explícitas:
- Assumo que o sub aguenta **≥ 600 W RMS**. Se for, por exemplo, 400 W RMS, o alvo cai para √(400 × 4) = 40 V — o ganho se regula pelo menor RMS entre módulo e falante.
- Regule com o **motor ligado**. Se os 600 W são declarados a 14,4 V (padrão da maioria das marcas nacionais — veja a nota na tabela de specs do manual), a 12,6 V o módulo entrega só ~460 W, ou seja, ~43 V limpos. Se a spec for medida a 12,6 V, 49 V vale nas duas condições.

> **Vale saber — multímetro não enxerga clipping:** ele mede valor RMS, e uma onda ceifada continua subindo essa leitura. Se o módulo não tem 600 W na tensão em que você mede, você chega aos 49 V no mostrador com o sinal já quadrado — que é o que esquenta bobina. O alvo tem que ser a potência que o módulo entrega de fato na condição da medição.

O resto da cadeia fecha com o objetivo de grave limpo: 4 Ω em série é a carga mais folgada para o módulo (menos corrente, melhor fator de amortecimento), 38 L selada com Qtc 0,72 num hatch aproveita o ganho de cabine, e ~60 A de pico está bem dentro do que a elétrica original de um compacto aguenta — Big 3 aqui é melhoria opcional, não obrigação.

Salvei o projeto com o histórico de decisões em `C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-7\with_skill\run-1\outputs\projetos\sub-12-selado\projeto.md`.

📝 Anotei no seu perfil (`C:\Users\denis\Desktop\Som\.claude\skills\consultor-som-workspace\iteration-3\eval-7\with_skill\run-1\outputs\perfil.md`): equipamento do sub definido (12" DVC 2+2 Ω em série, módulo mono classe D 600 W em 4 Ω, selada 38 L Qtc 0,72, cabo 21 mm² OFC + fusível 100 A); você usa WinISD e regula ganho por multímetro; ligação DVC, Qtc e V = √(P × R) entram como conceitos dominados.
