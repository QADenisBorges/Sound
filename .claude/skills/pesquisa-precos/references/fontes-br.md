# Fontes brasileiras: como consultar cada uma

Estado observado em 2026-10. Lojas mudam o layout e as regras de bloqueio. Quando algo aqui deixar de funcionar, registre na experiência (`fontes_falharam`). Se a falha se repetir, ela vira proposta de atualização deste arquivo.

## Qual ferramenta usar

| Situação | Ferramenta | Por quê |
|---|---|---|
| Mercado Livre, Shopee, Magalu, Amazon (página de busca e de produto) | **Claude in Chrome** (`mcp__claude-in-chrome__*`), o Chrome real do usuário | O ML devolve 403 para WebFetch. O navegador embutido cai em verificação de conta. No Chrome logado aparecem o preço, o cupom, o vendedor, a nota, o estoque e o **frete para o endereço salvo**. |
| Google (busca normal e com operadores), sites de fabricantes, lojas especializadas | WebSearch / WebFetch | Rápido e não depende de navegador |
| Google Shopping | Navegador embutido ou Chrome: `https://www.google.com/search?q=<termos>&udm=28&gl=br&hl=pt-BR` | Mostra lojas fora dos marketplaces. O preço do Shopping é só uma pista e precisa ser confirmado na loja. |
| Comparadores (Buscapé, Zoom) | WebFetch ou navegador | Úteis para descobrir lojas e histórico de preço. O preço deles não vale como cotação: confirme na loja. |

Carregue as ferramentas do Chrome **de uma vez** via ToolSearch (`tabs_context_mcp, tabs_create_mcp, navigate, computer, find, get_page_text, javascript_tool, tabs_close_mcp`). Trabalhe numa aba nova e feche-a no fim. Se a extensão não conectar, avise, siga com as outras fontes e marque ML/Shopee como "não consultados" em vez de fingir cobertura.

## Mercado Livre

- Busca: `https://lista.mercadolivre.com.br/<termos-com-hifen>`. Ordenar por menor preço: acrescente `_OrderId_PRICE` ao fim da URL.
- A listagem às vezes fica no spinner até tirar um screenshot (vale até com `scale: 0.2`). Depois disso, espere ~5 s e extraia os cards por JS (`li.ui-search-layout__item`). A nota do vendedor fica no texto acessível (`.andes-visually-hidden`, "Classificação X de 5").
- Links `click1.mercadolivre` são anúncios patrocinados. Não descarte, mas não deixe que dominem a amostra.
- Na página do produto, confirme o preço à vista e o parcelado, a "Loja oficial" ou MercadoLíder, a quantidade vendida, o estoque, o frete e o prazo (calculados para o endereço da conta) e se o produto é "Internacional" (compra internacional, com imposto).
- "Full" = estoque no centro do ML. Costuma entregar mais rápido e é um sinal de vendedor estabelecido.

## Shopee

- Busca: `https://shopee.com.br/search?keyword=<termos>`. Ordenar por preço na interface.
- Muitos anúncios são **internacionais** ("Envio do exterior"). Separe-os dos nacionais.
- O frete aparece com o cupom de frete aplicado. Confira se o cupom vale para o pedido ou se tem valor mínimo.
- Variações no mesmo anúncio (cor, voltagem, quantidade) com preços diferentes: o preço da listagem é o da variação mais barata. Confirme a variação certa.

## Amazon Brasil

- Busca: `https://www.amazon.com.br/s?k=<termos>`.
- Diferencie "Vendido e entregue por Amazon" de vendedor parceiro. O preço da página do produto pode ser de outra oferta: confira em "Outras opções de compra".
- O frete depende do Prime ou do valor mínimo. Sem login Prime, o frete mostrado é o real para a conta.

## Magazine Luiza

- Busca: `https://www.magazineluiza.com.br/busca/<termos>/`.
- Tem vendedores parceiros ("Vendido por X e entregue por Magalu"). A loja própria e o parceiro têm garantias e trocas diferentes.
- O frete pede CEP. Use o do perfil quando houver campo.

## Lojas especializadas e oficiais

- Ache-as pelo Google Shopping e pela busca `"<modelo>" comprar` (excluindo marketplaces com `-site:mercadolivre.com.br -site:shopee.com.br`).
- Loja oficial do fabricante: preço às vezes mais alto, mas com garantia direta. Vale como referência de "preço cheio" e para conferir a especificação.
- Antes de recomendar uma loja pouco conhecida, cheque o CNPJ no rodapé, o tempo de domínio, a presença em Reclame Aqui e o HTTPS. Loja desconhecida + preço muito abaixo do mercado = alto risco de golpe.

## Importação (AliExpress, Shopee internacional, ML "Internacional")

- Prefira o total com impostos que a plataforma mostra no checkout ou no anúncio (Remessa Conforme).
- Se não houver total, `custo.py` estima com parâmetros vigentes até 2025: até US$ 50, II de 20%; acima disso, II de 60% com dedução de US$ 20; ICMS de importação "por dentro" de 17–20% conforme o estado (a Bahia está em 20%). **Rotule como estimativa** e, se puder, confirme a regra atual com uma busca rápida, porque ela já mudou várias vezes.
- Considere também o prazo (semanas) e a garantia (disputa na plataforma).
