# Multimídia / fonte de sinal (carro)

## Pioneer AVH-A208BT /XFBR — DVD 2-DIN com Bluetooth (no carro do usuário)
**Unidade do usuário** (fotos em `componentes existentes/Pioneer AVH-A208BT/`, 05/11/2026): etiqueta AVH-A208BT XFBR, 14,4 V, terra negativo, região 4, Anatel 04983-17-03270, fabricada em Manaus (Pioneer Corporation, CAV1129-A).

### Painel traseiro (conferido nas fotos)
- **3 pares de saída RCA (pré-amplificada)**: FL/FR (frente), RL/RR (traseira), **SWL/SWR (subwoofer)**.
- AUX (entrada P2), VOUT (saída de vídeo, amarelo), entrada de câmera de ré (RCA amarelo, em uso — com fio vermelho fino junto, provável sinal de ré/alimentação da câmera), USB.
- Chicote principal (ISO) com o amplificador interno de 4 canais.

### Estado em 05/11/2026
- Plugados: cabo RCA (capa transparente/vermelha) em **RL/RR**; câmera de ré na entrada amarela; USB.
- FL/FR e SWL/SWR livres.
- O que o cabo em RL/RR alimenta: **a confirmar** (módulo SD800.4 está em casa no home theater).

### A confirmar no manual (Pioneer, linha AVH-A208BT)
- Tensão da saída RCA (2 V é o típico da linha; conferir).
- Faixa do crossover interno: HPF para frente/traseira e LPF da saída SW (frequência e inclinação), fase do sub.
- Se a saída traseira pode ser reconfigurada como sub no menu.
- Amplificador interno: potência "máxima" de catálogo (50 W × 4) é pico; RMS real fica na faixa de ~14–22 W por canal.

### Ajustes de áudio (pesquisa de 05/11/2026; manual do A208BT não baixado, sites bloqueados na sessão)
Pelos manuais dos irmãos AVH-A200BT/A205BT/A215BT (mesma plataforma), a confirmar no manual PT do A208BT (Koerich/Casas Bahia):
- Crossover: HPF/LPF com corte e inclinação por grupo de alto-falante (frente, traseira).
- Subwoofer: liga/desliga, fase, LPF (corte e inclinação), nível.
- Nível por saída (Speaker Level) e **Posição de audição** (preset de atraso por assento; não é alinhamento de tempo livre em cm por canal).
- Sem indício de **Network Mode** (3 vias ativo): a frente sai como um par só, sem separar tweeter de médio.
Consequência: tweeter independente (corte, ganho e atraso próprios) exige processador externo; ver conversa de 05/11/2026.

### Menu Áudio real (fotos do usuário, 05/11/2026 — `componentes existentes/Pioneer AVH-A208BT/menu/`)
Itens: Equalizador Gráfico (Sertanejo) · Balanço (E/D 0) · Ajuste Nível Fonte (0) · Subwoofer (On) · Nível Alto-falante · Crossover · Configuração do subwoofer · Posição de escuta (Todos) · **Alinhamento de Tempo** (submenu) · BASS Boost (+1) · **Saída alto-falante tras. (Subwoofer)** · Loudness (Alto).
- **Tem alinhamento de tempo** — corrige o que foi dito antes com base nos irmãos. Faixa e se inclui a traseira: a confirmar no submenu.
- "Saída alto-falante tras." = Subwoofer: as saídas RL/RR (e os fios traseiros) levam sinal de sub. Explica o RCA plugado em RL/RR: é o sub hoje. Não há "Fader" na lista, coerente com a traseira virando sub.
- Para usar falantes traseiros: mover o RCA do sub para SWL/SWR **antes** de mudar a opção para "Traseiro".

### Submenus (fotos de 05/11/2026, mesma pasta)
| Item | Opções vistas | Valor atual |
|---|---|---|
| Alinhamento de Tempo | Posição (Listening Position) + distância em cm por saída: Front Left, Front Right, Rear Left, Rear Right, Subwoofer; passo de 2,5 cm | FL 135,0 · FR 135,0 · **RL/RR vazios** (traseira está como sub) · Sub 137,5 |
| Posição de escuta | Front. · Frontal-E · Frontal-D · Todos · Off | Todos |
| Crossover — Front. | HPF On/Off, frequência, slope (−24 visto) | **HPF 200 Hz, −24 dB/oit** |
| Crossover — Subwoofer | LPF On/Off, frequência, slope, **Phase** (normal/invertida). **Sem subsônico** | LPF 63 Hz, −24 dB/oit |
| BASS Boost | +1 … +5 (lista rola; 0 provável acima) | +1 |
| Loudness | Off · Baixo · Médio · Alto | Alto |
| Ajuste Nível Fonte | −4 … +4 por fonte, relativo ao FM | USB −3 |
| Balanço | E/D | 0 |
| Equalizador Gráfico | 13 bandas (50 Hz–12,5 kHz, ±12 dB); presets Pop Rock, Eletrônica, Samba, Sertanejo, PRO, Person., Uniforme | Sertanejo (≈ +3 a +9 dB em todas as bandas) |

Leitura:
- **Buraco entre 63 e 200 Hz** na configuração atual (sub corta em 63, frente só começa em 200, ambos −24 dB/oit): falta justamente o grave do bumbo/baixo (80–150 Hz).
- **EQ Sertanejo sobe quase tudo +6 a +9 dB**: tira margem da saída RCA e faz a multimídia distorcer antes do volume máximo. Para regulagem e uso com o PRO 2.4: "Uniforme".
- **Sem subsônico** na multimídia: a proteção da caixa dutada continua dependendo de Bass Boost no mínimo e do ganho, ou de um processador com HPF no sub.
- **Atraso da traseira** possível: com a saída traseira em "Traseiro", os campos RL/RR devem aceitar distância; frente com distância grande e traseira pequena = traseira atrasada ((dist. frente − dist. traseira) / 34,3 cm por ms). Distância máxima: a testar.
