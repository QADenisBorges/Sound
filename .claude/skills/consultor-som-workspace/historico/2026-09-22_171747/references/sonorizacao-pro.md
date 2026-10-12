# Sonorização profissional (PA, igreja, eventos, bandas)

## Perguntas que definem o projeto

Quantas pessoas, área e formato do local (m², pé-direito, coberto/aberto), estilo (fala, louvor/banda, DJ), quantos microfones e instrumentos, precisa de monitor de palco, sistema fixo ou móvel, rede elétrica (127/220 V, disjuntores).

## Arquitetura

- **Fontes** (microfones, instrumentos, DI boxes) → **mesa** (analógica ou digital) → **processamento** (EQ, crossover, limitador — muitas mesas digitais já têm) → **amplificação** (ou caixas ativas) → **caixas de PA** (principal) + **monitores** + **sub**.
- **Caixas ativas** (amplificador embutido): simples, menos erro de casamento, ideal para igrejas e eventos pequenos/médios. **Passivas + potência**: mais flexíveis e às vezes mais baratas em sistemas grandes, mas exigem acertar casamento e processamento.
- **Mesa digital** (Behringer X32/XR18, Soundcraft Ui, Yamaha TF/MG, Mackie DL etc.) dá EQ, compressor, efeitos, gravação e controle por tablet — muito custo-benefício hoje em comparação com analógica + periféricos.

## Dimensionamento

- **SPL alvo**: fala ~80–85 dB(A) no público; louvor/banda ~90–100 dB(C); show ~100–105 dB. Use `calc_som.py spl` com a sensibilidade e potência da caixa e a distância até o último ouvinte (queda de 6 dB por dobra da distância em campo livre; em ambiente fechado a queda é menor por causa da reverberação).
- **Headroom**: projete com 6–10 dB sobrando acima do SPL médio para picos.
- **Cobertura**: veja o ângulo de dispersão da caixa (ex.: 90°×60°). Em salas compridas, em vez de caixas mais fortes na frente, use **caixas de delay** no meio do salão (com atraso = distância/343 m/s). Voz inteligível vale mais que volume.
- **Sub**: necessário para banda com baixo/bumbo ou DJ; dispensável para fala.
- Microfones sem fio: faixas de frequência precisam ser homologadas pela Anatel; muitos sem fio baratos do AliExpress operam em faixas não permitidas ou conflitam com TV digital/4G. Prefira homologados.

## Estrutura de ganho e microfonia

- Ajuste o **gain/trim** de cada canal com o sinal real (pico em ~-18 a -12 dBFS em mesa digital), faders perto de 0 dB, master perto de 0 dB. Evita ruído e distorção.
- **Microfonia (feedback)**: caixas de PA à frente dos microfones, microfone o mais perto possível da boca, padrão cardioide/supercardioide apontado corretamente, monitores no nulo do microfone, EQ cortando as frequências que realimentam (ring out). Mais volume no palco = mais microfonia.
- **Cabos balanceados** (XLR, P10 TRS) para distâncias longas; **DI box** para violão/teclado/instrumentos de linha.

## Elétrica

- Separar circuito de som do de iluminação/ar-condicionado quando possível. Aterramento correto (evita zumbido e choque). Ligar potência por último e desligar primeiro.
- Somar consumo de caixas ativas/potências (veja o consumo médio em W ou A no manual, não o de pico) e verificar disjuntores.

## Custo-benefício

- Caixas ativas nacionais (Oneal, Staner, Ciclotron, Mark Audio, Leacs, Frahm) custam menos; importadas de linha de entrada (Behringer, Yamaha DBR/DXR, JBL EON, Mackie Thump, RCF ART) têm geralmente dispersão e proteção melhores. Compare pela resposta de frequência, SPL máximo e dispersão, não pelo "watts".
- Microfone dinâmico clássico (tipo SM58/Beta58 original, ou equivalentes de boa marca) dura décadas. **Cuidado com falsificados** — são muito comuns em marketplaces.
- Mesa digital usada pode ser ótimo negócio.

## Armadilhas

- Comprar caixas "mais potentes" para resolver inteligibilidade — o problema costuma ser reverberação, posicionamento ou EQ.
- Microfone falsificado; sem fio em faixa irregular.
- Sem limitador → driver de caixa queima em pico.
- Cabos desbalanceados longos → ruído.
