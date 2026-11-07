# Fórmulas e referências rápidas

Todas estão implementadas em `scripts/calc_som.py`.

## Impedância
- Série: Z = Z1 + Z2 + …
- Paralelo: 1/Z = 1/Z1 + 1/Z2 + … (iguais: Z/n)
- Bobina dupla (DVC) 2+2 Ω: série 4 Ω, paralelo 1 Ω. 4+4 Ω: série 8 Ω, paralelo 2 Ω.

## Potência, tensão e corrente
- P = V² / R → V = √(P × R) (tensão alvo para regular ganho)
- Corrente de um amplificador na alimentação: I = P_saída / (V_alimentação × eficiência)
- Mudança de tensão: P2 ≈ P1 × (V2/V1)². Ex.: 1000 W a 14,4 V → ~766 W a 12,6 V.

## SPL (nível de pressão sonora)
- SPL = Sensibilidade(dB 1W/1m) + 10·log10(P) − 20·log10(d)
- Dobrar a potência: +3 dB. Dobrar a distância: −6 dB (campo livre). Duas caixas iguais juntas: +3 dB (energia) a +6 dB (grave em fase, mesma posição).
- +10 dB ≈ percepção de "o dobro do volume" → exige 10× a potência.
- Se a sensibilidade vier em dB/2,83 V em caixa de 4 Ω, ela equivale a 2 W → subtraia 3 dB para comparar com 1 W.

## Cabos
- Resistência do cobre: ρ = 0,0172 Ω·mm²/m (CCA ≈ 0,028).
- Área mínima: A = ρ × L × I / ΔV, com L = comprimento total do circuito que carrega a corrente (no carro, positivo; negativo no chassi é curto — some-o se for longo).
- Queda aceitável: ≤ 0,5 V em 12 V automotivo.
- Cabo de falante: resistência total (ida e volta) ≤ 5% da impedância do falante.
- AWG ↔ mm²: 0 AWG = 53,5; 2 = 33,6; 4 = 21,2; 6 = 13,3; 8 = 8,4; 10 = 5,3; 12 = 3,3; 14 = 2,1; 16 = 1,3; 18 = 0,82.

## Caixa dutada
- Comprimento do duto circular (cm): Lv = (23562,5 × Dv² × Np) / (Fb² × Vb) − k × Dv
  - Dv = diâmetro interno (cm), Np = nº de dutos, Fb = sintonia (Hz), Vb = volume líquido (L), k ≈ 0,732 (uma ponta com flange/parede) — varia 0,6–0,85 conforme as pontas.
- Velocidade do ar no duto: manter < ~17 m/s em potência máxima.
- Volume líquido = volume interno bruto − falante − duto − travamentos.

## Atraso (delay)
- t (ms) = distância (m) / 0,343. Ex.: 10 m → 29 ms.
- Comprimento de onda: λ = 343 / f. 50 Hz → 6,9 m; 1 kHz → 34 cm.

## Baterias
- Autonomia (h) ≈ (Ah × V × 0,8) / consumo médio (W). Música consome em média 1/8 a 1/3 da potência RMS máxima.
