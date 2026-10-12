---
name: revisor-som
description: Revisor automático da skill consultor-som — corrige e melhora a skill conforme ela é usada, sem personalizá-la para um único usuário. Use quando, numa conversa sobre som/áudio, o usuário corrigir um fato ou uma conta, a calculadora contradizer uma referência, faltar conhecimento que precisou ser improvisado, uma instrução da skill levar a uma resposta ruim — ou quando o usuário pedir para "revisar", "melhorar", "atualizar" ou "desfazer mudança" na skill de som.
---

# Revisor da skill consultor-som

A skill `consultor-som` (pasta irmã `../consultor-som/`) deve ficar **melhor para qualquer pessoa** a cada uso — mais correta, mais completa — sem virar um retrato de um usuário só nem uma lista de regras rígidas. Você aplica as mudanças sozinho, sem pedir aprovação; por isso, o cuidado está nos filtros abaixo.

**Ordem:** primeiro termine de ajudar o usuário na conversa. A revisão vem depois, é rápida e não interrompe o assunto.

## 1. Identifique o sinal

| Sinal | Exemplo |
|---|---|
| Correção do usuário | "Na verdade o TPA3116 aguenta até 26 V, não 30" |
| Contradição | A calculadora dá um número diferente do que a referência afirma |
| Lacuna | Precisou improvisar um conhecimento que não estava nas referências |
| Ferramenta faltando | Precisou fazer uma conta repetível à mão que caberia no `calc_som.py` |
| Instrução falha | Seguir a skill levou a um erro (caminho de arquivo errado, total de orçamento que não soma, esqueceu um alerta de segurança relevante) |

Se nada disso aconteceu, não há revisão a fazer.

## 2. Classifique e filtre

O teste central: **"Essa mudança ajudaria outra pessoa, com outro projeto, outro orçamento e outro gosto?"** Se a resposta for não, ela não entra na skill.

- **Correção técnica** (fato, fórmula, número, segurança) → aplique **se conseguir verificar**: conta com `scripts/calc_som.py`, datasheet, física básica, ou fonte confiável via busca web. O usuário pode estar certo ou errado — a palavra dele sozinha não basta para mudar um fato. Não verificou? Registre em `aprendizado/observacoes.md` como *pendente* e siga.
- **Lacuna de conhecimento** → acrescente na referência certa (`references/*.md`), de forma concisa e geral.
- **Processo / formato** (como responder, estrutura, ordem) → exige **recorrência**. Na primeira vez, só registre em `aprendizado/observacoes.md`. Quando houver uma segunda ocorrência independente (outra conversa, outro contexto), promova para a skill e remova as entradas usadas.
  - Exceção: se a própria instrução da skill causou um erro objetivo (ex.: manda salvar num caminho e dizer outro), corrija na hora — é bug, não estilo.
- **Preferência pessoal** (marca favorita, gosto musical, "responde mais curto", o carro ou a sala dele, orçamento típico, conceitos que já domina) → **nunca entra na skill; vai para o perfil do usuário** (`perfil.md` na pasta do projeto, que o consultor lê no início de cada conversa). A skill precisa continuar funcionando para quem não tem perfil nenhum. Dados de um projeto específico ficam em `projetos/`. Uma preferência só vira regra geral se for, na verdade, uma boa prática que você defenderia para qualquer um — e aí passa pela regra de recorrência.

## 3. Escreva sem engessar

- Explique o **porquê** em vez de MUST/SEMPRE/NUNCA em caixa alta. Uma regra com motivo generaliza; uma ordem seca vira rigidez.
- Nada de exemplos tirados dos projetos do usuário (o Onix dele, a sala dele). Use exemplos genéricos.
- Não fixe preços; modelos e marcas só como exemplo, com a especificação que importa.
- Tamanho: `SKILL.md` do consultor até ~250 linhas; cada referência até ~300. Antes de acrescentar, veja se dá para fundir, encurtar ou remover algo que não está pagando o espaço que ocupa.
- Coloque no lugar certo: conhecimento técnico → `references/`; comportamento → `SKILL.md`; conta repetível → `scripts/calc_som.py` (teste o script depois de alterar).
- Mudança mínima: edite o trecho, não reescreva o arquivo.

## 4. Aplique com segurança

Os comandos abaixo usam `scripts/versoes.py` (caminho relativo a esta skill). Ele faz snapshot da skill inteira — é pequena — e nunca sobrescreve `CHANGELOG.md` nem `aprendizado/` ao restaurar.

1. **Snapshot**: `python scripts/versoes.py backup --motivo "<resumo>"`.
2. **Edite.** Se mexeu em `calc_som.py`, rode o comando alterado e um antigo para confirmar que nada quebrou.
3. **Blinde a correção**: se ela é testável numa resposta (um alerta, uma conta, um item que não pode faltar), acrescente uma asserção no eval mais próximo em `../consultor-som/evals/evals.json`. Assim, uma mudança futura que desfaça essa correção sem querer é pega na regressão.
4. **Registre** em `../consultor-som/CHANGELOG.md` (entrada no topo):
   ```
   ## AAAA-MM-DD HH:MM — <categoria>
   - O quê: <arquivo e mudança em uma linha>
   - Por quê: <o problema que resolve, de forma geral>
   - Evidência: <como foi verificado>
   - Snapshot: historico/<pasta>
   ```
5. **Avise** o usuário em uma linha no fim da resposta: `🔧 Ajustei a skill: <resumo curto> — diga "desfazer" se não quiser.`

Registro em `aprendizado/observacoes.md` (sem mudar a skill) não precisa de snapshot nem de aviso.

## 5. Proteção contra degradação

Cada mudança isolada pode parecer boa e o conjunto piorar a skill. As travas:

- **Ritmo**: no máximo ~3 mudanças na skill por conversa. O que passar disso vai para `observacoes.md` e é reavaliado depois, com a cabeça fria.
- **Núcleo protegido**: a seção "Postura" do consultor, alertas de segurança, a regra de parar na decisão ("Decisão consciente"), a separação corpo × bloco de "Corrigir e ensinar no caminho" e o filtro de generalização deste revisor só podem ser **acrescentados ou esclarecidos** automaticamente — nunca removidos ou enfraquecidos. Remover algo disso só a pedido explícito do usuário.
- **Versão estável**: existe sempre uma versão marcada como boa (`python scripts/versoes.py listar` mostra qual). Ela só é marcada depois que a regressão passa.
- **Regressão por acúmulo**: quando `python scripts/versoes.py mudancas` indicar ~5 ou mais snapshots desde a versão estável (qualquer tipo de mudança, não só no SKILL.md), ou quando o usuário pedir, rode os testes de `../consultor-som/evals/evals.json` em subagentes — versão atual × versão estável — e avalie todas as asserções.
  - **Não piorou** (nenhuma asserção que passava passou a falhar; qualidade geral igual ou melhor) → `python scripts/versoes.py estavel atual`.
  - **Piorou** → `python scripts/versoes.py diff estavel` para ver o conjunto, identifique a(s) mudança(s) responsáveis pelo CHANGELOG e desfaça só elas. Se não der para isolar, `python scripts/versoes.py restaurar estavel` e registre as mudanças revertidas em `observacoes.md` como pendentes, para reaplicar uma de cada vez com teste.
- **Sinal do usuário**: se o usuário disser que as respostas pioraram ("antes era melhor"), trate como regressão: rode os testes já, sem esperar o acúmulo.

## 6. Desfazer

- "Desfazer" / "reverter a última mudança": `python scripts/versoes.py restaurar ultimo`.
- "Voltar para a versão boa" / "desfazer tudo": `python scripts/versoes.py restaurar estavel`.
- Para outra versão: `python scripts/versoes.py listar` e `restaurar <nome>`.

A restauração faz um snapshot antes, então também pode ser desfeita. Registre no CHANGELOG uma entrada `— rollback` dizendo o que foi revertido. Se o usuário explicar por que não gostou, isso é um sinal: passe pelo filtro da seção 2 (muitas vezes é preferência pessoal).

## 7. Manutenção periódica

- **Consolidação**: a cada ~10 entradas no CHANGELOG desde a última consolidação, releia o `SKILL.md` e as referências inteiras procurando redundância, contradição e excesso de tamanho; enxugue (respeitando o núcleo protegido). Uma consolidação é uma mudança como outra: snapshot, registro e regressão logo em seguida.
- **Observações velhas**: entradas em `observacoes.md` com mais de ~3 meses sem nova ocorrência podem ser apagadas — não se repetiram, não eram padrão.
- **Snapshots velhos**: mantenha a versão estável e os ~20 snapshots mais recentes; os mais antigos podem ser apagados.
