# Handoff — Entre Nós: memórias de casamento por NFC

## Estado atual

Pesquisa e planejamento concluídos em 17/09/2026. A direção visual do PNG foi aprovada pelo usuário e formalizada no Design System 1.0. O repositório `dougfresende/entre-nos` já contém uma primeira aplicação Vite/React, API Express, migração PostgreSQL, Docker Compose, entrada por tag e painel inicial dos noivos. Ainda não há implantação na VPS, teste com tag física ou autenticação administrativa. Não foram compradas ou gravadas etiquetas, instalados plugins ou alteradas permissões.

## Pedido e decisões confirmadas pelo usuário

- Criar um app inspirado nas funcionalidades do Dots Memories, com design próprio, para o casamento de um amigo.
- Escopo escolhido: casamento completo, incluindo álbum, fotos/vídeos, depoimentos e missões.
- NFC é o acesso principal; QR Code é a alternativa confirmada para quem não tiver NFC, sem precisar digitar. Esta decisão substitui a orientação anterior de excluir QR.
- Público estimado: 101 a 250 convidados. Prazo informado: até 30 dias, sem data exata.
- O usuário já possui VPS com Docker. Configuração, provedor, acesso e espaço livre ainda desconhecidos.
- Direção visual escolhida: editorial elegante, marfim e verde-oliva.
- Minimizar custos adicionais. Não foi autorizado contratar serviços ou comprar etiquetas.

## Leia os entregáveis nesta ordem

Todos estão na pasta `outputs` deste workspace:

1. `plano-entre-nos-nfc.md`: especificação principal, fontes pesquisadas, arquitetura proposta, regras de produto, cronograma e testes.
2. `../README.md`: execução do monorepo, Compose e geração do kit de QR.
3. `../app/`: frontend do convidado e prévia de `/organizar`.
4. `../server/`: API, contrato de rotas, migração e gerador de QR.
5. `conceito-entre-nos.png`: conceito visual com três telas e cartão NFC. Nomes e fotos são fictícios. A direção visual foi aprovada; não representa toda a interface implementada. A imagem é anterior à inclusão do QR alternativo.
6. `inventario-conectores.md`: ferramentas expostas na sessão de pesquisa. Presença de ferramenta não comprova autenticação ou capacidade de hospedagem.
7. `inventario-skills.md`: 367 arquivos SKILL.md e 274 nomes distintos encontrados no levantamento. Inclui cache e versões duplicadas; a lista ativa pode mudar entre sessões.

## Design System 1.0

Consultar `design-system/index.html` para o guia visual e `design-system/DESIGN-SYSTEM.md` para os contratos de implementação. Reutilizar `tokens.css`, `tokens.json`, `components.css`, `icons.svg` e as fontes locais com suas licenças. Paleta marfim/oliva, Cormorant Garamond para títulos e DM Sans para interface. Controles têm altura mínima de 48 px. O guia contém demonstrações locais, não integração com o app. NFC principal e QR alternativo estão documentados; o QR ilustrativo não é escaneável. Ver `design-system/VALIDACAO.md` para limites da revisão.

## Recomendação técnica, ainda não validada em execução

Adaptar [PicPeak](https://github.com/PicPeak/picpeak), preservando avisos da licença MIT. O usuário não escolheu explicitamente essa base; trata-se da recomendação apresentada no plano.

Referência examinada: commit `d7f96333686216f5aa5fc6b919182aed663b9a60` de main. A API também indicava a release v3.132.4, publicada em 16/09/2026. Não confundir funcionalidades observadas em main com garantias dessa release. Fixar a referência adotada e executar testes antes de publicar imagens próprias.

Stack implementada como fundação: React/TypeScript/Vite, Node/Express, PostgreSQL, Docker Compose e volumes persistentes. A API já resolve tags, cria sessões, recebe mídia, grava recados e lista/envia missões. Falta autenticação administrativa, processamento/moderação de mídia, álbum público e implantação na VPS.

Nenhuma execução de testes ou auditoria completa do PicPeak foi realizada. Foram lidos documentação e trechos de código, incluindo rotas de convidados, uploads e feedback. Não declarar a base segura ou pronta só por essa inspeção.

## Regras que não podem se perder

- NFC contém um registro NDEF URI com URL HTTPS curta. O celular abre o site; não é necessário usar Web NFC no navegador. NFC não envia fotos, não dispensa internet e não identifica a pessoa com segurança.
- A rota `/t/:token` resolve etiqueta e evento. O token não dá acesso de administrador. Links podem ser copiados; não tratar posse da etiqueta como identidade verificada.
- Alternativa para aparelhos sem NFC: QR Code impresso junto da etiqueta, contendo exatamente a mesma URL HTTPS. Ambos abrem o mesmo evento/mesa e fluxo, com as mesmas permissões. Link digitável permanece apenas como recurso adicional.
- Uma etiqueta por mesa é apenas o padrão proposto, não uma escolha confirmada. Separar etiqueta/mesa de identidade individual e sessão do convidado.
- Convidado informa nome; e-mail não é obrigatório. Duas pessoas na mesma rede ou com mesmo nome não devem compartilhar identidade.
- Preservar originais e verificar checksum. Nunca sobrescrever lembranças porque os nomes dos arquivos coincidem.
- Upload deve mostrar recebimento, processamento e falhas reais. Não prometer execução em segundo plano no iPhone ou recuperação de arquivo/gravação não persistido.
- Depoimentos privados: autorização e horário de abertura no servidor, incluindo arquivos, miniaturas e exportações. Limpar sessão entre pessoas em tablet compartilhado.
- Limites de tamanho/duração, quota e data de abertura no plano são padrões propostos configuráveis, não requisitos confirmados pelo usuário.
- Pontuação de missões é idempotente e depende de mídia válida/aprovada. Retry não gera pontos adicionais.
- O código examinado possui limite de cadastro por IP de 20/h; revisar para permitir convidados no mesmo Wi-Fi sem remover proteção contra abuso.
- Backup externo é requisito operacional; cópia no mesmo disco da VPS não o satisfaz.
- Não copiar marca, imagens ou textos do Dots. O nome Entre Nós é provisório.

## Limites do lançamento proposto

Inclui álbum, etapas, comentários/reações, missões, depoimentos, programação, avisos com site aberto, administração e exportações. Livro PDF/índice local e exportação final podem ser concluídos após o evento.

Não inclui aplicativos nativos, impressão e entrega de livro físico, plataforma comercial multiempresa, histórias familiares contínuas, chat privado entre pequenos grupos, reconhecimento facial ou garantia de notificação com navegador fechado. Portanto não prometer paridade integral com todo o Dots. IA não é dependência do fluxo principal.

## Pendências e premissas

Para implantação: confirmar data exata; CPU/RAM/disco e acesso da VPS; domínio e HTTPS; destino/espaço de backup; qualidade da internet no salão; quantidade e distribuição das etiquetas; modelo e material de aplicação das etiquetas; nomes, imagens e programação reais do casamento.

Não pedir credenciais no chat. Usar o mecanismo seguro disponível quando for necessário configurar infraestrutura. Não é preciso esperar esses dados para inspecionar código, preparar ambiente local ou implementar componentes independentes quando a implementação for solicitada.

A estimativa de 150 GB livres no plano é margem de cenário, não medição da VPS nem promessa de suficiência. A proposta de retenção de 12 meses depende de manutenção e quota; não foi contratada ou garantida.

## Próxima execução recomendada

Quando o usuário solicitar implementação:

1. Ler o plano e o catálogo atual de skills; verificar AGENTS.md aplicáveis e arquivos existentes. Não repetir a pesquisa inteira nem sobrescrever os entregáveis.
2. Obter checkout isolado do PicPeak no commit registrado; verificar dependências, licença e instruções locais. Conferir quais capacidades reutilizáveis funcionam de fato.
3. Criar um evento de teste, validar envio e download com checksums, autenticação e privacidade antes de ampliar a interface.
4. Implementar entrada NFC e QR alternativo, geração de QR em PNG/SVG e cartão PDF, e sessões individuais; depois galeria/etapas, missões, depoimentos e programação. Preservar o design escolhido, refinando telas ainda não especificadas.
5. Executar critérios de aceite do plano: formatos iPhone/Android, quedas de rede, 250 sessões/30 uploads simultâneos, convidados sob mesmo IP, isolamento de conteúdo e restauração de backup.
6. Testar etiquetas físicas, leitura do QR impresso e internet do local. Confirmar que NFC e QR do mesmo cartão resolvem a mesma URL, evento e mesa; revogação deve afetar ambos. Estabilizar a versão pelo menos 72 horas antes do casamento quando a data permitir; não prometer esse prazo sem confirmá-la.

O pedido atual é de handoff. Não interpretar este documento como autorização autônoma para contratar serviços, publicar o sistema ou iniciar outra tarefa.

## Texto pronto para continuar em outra tarefa

> Continue o projeto Entre Nós a partir do HANDOFF.md e do plano-entre-nos-nfc.md na pasta outputs deste workspace. O objetivo é um app de casamento para 101–250 convidados, com acesso principal por etiquetas NFC e QR Code alternativo para aparelhos sem NFC, álbum de fotos/vídeos, missões, depoimentos e design editorial marfim/oliva. A pesquisa recomenda adaptar PicPeak; ainda não existe implementação nem deploy. Preserve as decisões confirmadas, diferencie propostas de requisitos e comece verificando o código e a infraestrutura disponíveis. Use os inventários como referência, mas consulte as ferramentas e skills ativas da nova sessão. Não refaça a pesquisa do zero.
