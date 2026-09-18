# Entre Nós — plano do app de memórias com NFC

Pesquisa realizada em 17/09/2026. Nome provisório. Entrega de planejamento: o aplicativo ainda não foi implementado, instalado ou testado na VPS.

## 1. Objetivo e decisões

Criar uma aplicação web para o casamento do seu amigo, com acesso por etiquetas NFC, álbum colaborativo, fotos e vídeos, depoimentos e missões. Atender de 101 a 250 convidados, em português brasileiro, aproveitando sua VPS com Docker. Prazo informado: até 30 dias; a data exata não foi informada.

Decisões confirmadas: casamento completo; infraestrutura própria; visual editorial elegante; NFC é o acesso principal e QR Code é a alternativa para aparelhos sem NFC, sem necessidade de digitar. Esta decisão substitui a orientação anterior de excluir QR.

Padrão proposto para distribuição: uma etiqueta por mesa, mais uma no ponto de depoimentos. A quantidade física depende do mapa de mesas. Cada pessoa terá uma sessão própria no celular; compartilhar etiqueta não significa compartilhar identidade. A pergunta sobre distribuição ainda não foi respondida; esse padrão pode mudar para etiquetas individuais sem alterar o núcleo do aplicativo.

Recomendação: fazer uma derivação própria do PicPeak e acrescentar as experiências do casamento. O código já cobre uma parte importante da infraestrutura de mídia. Não iniciar a construção completa do armazenamento, da galeria e dos downloads do zero.

## 2. O que encontrei no Dots e como traduzir para o app

Foram consultadas a página principal, Como funciona, Planos, FAQs, a área Weddings, Álbum, Confessionário, Missão secreta e os destinos públicos de demonstração. O navegador confirmou o visual do álbum e o caminho Criar álbum → Planos. Na demonstração do confessionário, observei a capa e a etapa de nome. Não houve compra, cadastro, gravação ou acesso a áreas privadas. As demais capacidades abaixo são descritas pelo site, não validadas por teste ponta a ponta.

| Capacidade de referência | Implementação planejada |
|---|---|
| Entrada por link/QR, sem instalação | Etiqueta NFC abre link HTTPS; QR Code alternativo abre a mesma URL sem digitação |
| Álbum coletivo com fotos e vídeos | Preservar originais, gerar prévias leves e permitir envio em lote |
| Organização por data e etapas | Linha do tempo e filtros de preparação, cerimônia, recepção e festa |
| Programação e avisos | Horário, local, traje e avisos no site aberto |
| Comentários e reações | Comentários, curtidas e favoritos vinculados ao convidado |
| Controle de visibilidade e downloads | Galeria dos convidados ou somente organizadores; exportação por etapa |
| Depoimentos guiados | Perguntas próprias, vídeo com nome e foto, prévia antes de enviar |
| Missões e classificação | Desafios por pessoa e classificação por desafios válidos concluídos |
| Material impresso e livro | Cartões próprios com NFC e QR alternativo; álbum PDF com links; impressão contratada separadamente |

Fontes: [álbum de casamento](https://weddings.dotsmemories.app/album), [Como funciona](https://dotsmemories.app/como-funciona/), [confessionário](https://weddings.dotsmemories.app/confesionario), [missões](https://weddings.dotsmemories.app/mision-secreta).

Há diferenças entre marketing e condições: a tabela de planos exige registro no Intimate, embora o texto geral anuncie acesso sem cadastro. As FAQs informam 12 meses de armazenamento, apesar do uso da expressão “para sempre”. Nosso app deve informar sua política real e a capacidade disponível. [Planos](https://dotsmemories.app/planes/) e [FAQs](https://dotsmemories.app/preguntas-frecuentes/).

O produto completo também inclui histórias familiares contínuas e livro físico. Esses serviços não entram na primeira versão para o casamento. Chat privado entre pequenos grupos, aplicativos nativos, impressão/entrega de livros e notificações confiáveis com o navegador fechado ficam fora do lançamento; não alegar equivalência integral com todo o Dots. Os recados e avisos no site cobrem a comunicação do evento.

## 3. Pesquisa de bases, modelos e habilidades

| Projeto | Evidência examinada | Decisão |
|---|---|---|
| [PicPeak](https://github.com/PicPeak/picpeak) | README, licença MIT, Compose, dependências React e rotas de convidados, upload e feedback | Base recomendada; reutilizar mídia, identidade e administração |
| [EventDrop](https://github.com/acaranta/eventdrop) | FastAPI, SQLite/MySQL, disco/S3, ZIP e licença AGPL-3.0 | Alternativa enxuta; não selecionada. O README descreve sobrescrita por mesmo nome de arquivo/convidado, comportamento inadequado para preservar lembranças sem revisão |
| [event-photo-share](https://github.com/lucafluri/event-photo-share) | README declara MIT, Node/Express, HEIC, FFmpeg e Docker; API do GitHub não identificou licença | Referência simples; confirmar arquivo de licença antes de reutilizar código |
| [Pixfête](https://github.com/jeherve/pixfete) | Plugin WordPress, uploads e mural | Mais adequado para quem já usa WordPress; não escolhido para a VPS Docker |
| [Memtly Community](https://github.com/Memtly/Memtly.Community) | Descrição pública e metadados GPL-3.0 | Escopo descrito como frontend comunitário; não assumir backend completo reutilizável |
| [Photobooth](https://github.com/PhotoboothProject/photobooth) | Cabine local, colagens, câmera e impressão | Referência para estação física; o próprio projeto desaconselha exposição direta à internet |

Não foi feita auditoria completa desses projetos nem execução de seus testes nesta pesquisa. Popularidade, README e licença não comprovam confiabilidade operacional.

No PicPeak, a referência de código examinada em main foi `d7f96333686216f5aa5fc6b919182aed663b9a60`; a última release indicada pela API foi v3.132.4, publicada em 16/09/2026. A implementação deve partir de uma cópia local fixada no commit examinado, passar pela validação prevista e gerar imagens próprias identificadas por commit. Não acompanhar automaticamente main em produção. Manter os avisos da licença MIT e criar marca, textos e materiais próprios.

No Hugging Face, examinei [Whisper Small](https://huggingface.co/openai/whisper-small), para transcrição, e [CLIP ViT-B-32](https://huggingface.co/sentence-transformers/clip-ViT-B-32), para representações de imagens e similaridade. São componentes de IA, não aplicativos completos de casamento. Não usar IA no caminho crítico do envio. Transcrição revisável e busca semântica podem vir depois; não é necessário enviar fotos privadas para Spaces públicos. Duplicatas idênticas serão identificadas por hash, sem IA.

O inventário local está em `inventario-skills.md`; as ferramentas expostas estão em `inventario-conectores.md`. Priorizar ImageGen/Frontend App Builder para design, React Best Practices, Frontend Testing Debugging, Codex Security e PDF/Canva para materiais. O catálogo oficial também oferece Playwright e skills de segurança. A coleção [Codezela Web Skills](https://github.com/codezelat/codezela-web-skills) inclui mídia e armazenamento, mas não há evidência de superioridade sobre as opções já disponíveis. Nenhuma skill ou integração nova foi instalada.

## 4. Experiência, NFC e design

### Acesso NFC com QR alternativo

Gravar um único registro NDEF URI com endereço HTTPS curto, por exemplo `https://<dominio>/t/<token-aleatorio>`. O sistema operacional lê a etiqueta e oferece a abertura do link. O site não precisa usar Web NFC e não lê o identificador físico da etiqueta.

Etiquetas NFC Forum Type 2, como NTAG213, são uma opção adequada para URLs curtas; a NTAG213 possui 144 bytes de memória de usuário. Validar o tamanho efetivamente gravável com o registro completo. O comportamento de abertura depende do aparelho e das configurações. [NXP](https://www.nxp.com/products/NTAG213_215_216), [Apple](https://developer.apple.com/videos/play/tech-talks/702/) e [Android](https://developer.android.com/develop/connectivity/nfc/nfc).

O painel gera uma lista CSV com rótulo da etiqueta, mesa e URL, além do QR correspondente em PNG/SVG e cartões em PDF. NFC e QR de cada cartão contêm exatamente a mesma URL HTTPS de `/t/:token`, evitando dois fluxos ou permissões divergentes. Gerar QR localmente no sistema, sem encurtador ou serviço externo. Usar alto contraste, margem livre e não sobrepor logotipo ao código; validar a leitura no tamanho real de impressão. A gravação física pode ser feita com [NFC Tools](https://www.wakdev.com/en/apps/nfc-tools-android.html) em aparelho compatível. Ler de volta e testar cada etiqueta no suporte final. Não tornar etiquetas irreversivelmente somente leitura antes da aprovação física. A compra, gravação e colocação das etiquetas são etapas operacionais, não executadas nesta pesquisa.

O token resolve no servidor a mesa e o evento. Permitir desativar etiqueta perdida e alterar seu destino interno sem regravar a URL. O destino deve ser interno e validado, sem redirecionamento arbitrário. Uma etiqueta abre o evento, mas nunca concede acesso de administrador nem acesso a depoimentos privados. Um link copiado tem a mesma capacidade de acesso que a etiqueta; NFC não é autenticação de identidade.

Fluxo: aproximar celular → confirmar abertura quando o aparelho solicitar → informar primeiro nome e concordar com a participação → enviar lembranças. Não pedir e-mail por padrão. O convidado sem NFC aponta a câmera para o QR impresso junto da etiqueta e segue o mesmo fluxo. O cartão deve dizer “Aproxime o celular ou escaneie o QR Code”. Link curto e compartilhamento manual permanecem recursos adicionais, não necessários ao fluxo principal. Internet continua necessária para receber e enviar conteúdo.

### Identidade visual

Conceito entregue em `conceito-entre-nos.png`, com nomes e fotografias fictícios. A direção visual foi aprovada pelo usuário e formalizada em `design-system/index.html` e `design-system/DESIGN-SYSTEM.md`; o app ainda não foi implementado. A imagem foi criada antes da decisão de incluir QR alternativo; o cartão ilustrado ainda não o mostra. Na implementação e nos materiais finais, combinar NFC e QR legível conforme a especificação atual.

Aplicar fundo marfim `#F7F4EE`, verde-oliva `#45513D`, texto carvão e separadores discretos. Títulos com serifada editorial; controles com fonte sem serifa legível, hospedadas junto da aplicação. Fotografias em destaque, sem reproduzir materiais ou identidade do Dots. Navegação inferior: Álbum, Missões, Recados e Programação. Ação principal permanente: Enviar fotos e vídeos.

Telas necessárias: entrada e nome; álbum e filtros; envio com progresso; detalhe da mídia; missões e classificação; recado com pergunta/gravação/prévia; programação e avisos; painel de organização. Botões de pelo menos 48 px, conforme o Design System 1.0, contraste legível, foco por teclado e estados de vazio, erro e processamento. O mural de projeção usa somente conteúdo autorizado e aprovado.

### Regras das experiências

- Álbum: visitantes autorizados pelo link podem ver mídia aprovada. No modo “somente noivos”, os convidados enviam e consultam o estado dos próprios envios, mas não listam o acervo. Todas as rotas de mídia, inclusive miniaturas, vídeo e exportações, respeitam essa política.
- Missões: catálogo inicial de 20 desafios originais e editáveis, cinco atribuídos por pessoa. Cada desafio vale um ponto, uma única vez, após mídia válida e aprovação. Empates são desempatados pelo horário em que a última conclusão pontuada ocorreu. Reenvios não pontuam novamente. Exclusão/reprovação retira o ponto. Não ligar identidade apenas ao nome ou ao IP.
- Recados: biblioteca inicial de 20 perguntas originais, com seleção pelo organizador e perguntas próprias. Gravação de até 90 segundos, prévia, refazer ou enviar. Foto opcional. Vídeos privados, com abertura automática aos noivos às 09h do dia seguinte, no fuso do evento; organizador pode alterar esse horário. A restrição vale no servidor. Estação compartilhada limpa a sessão de convidado após cada conclusão.
- Compatibilidade de gravação: escolher formato suportado por MediaRecorder; se indisponível ou sem permissão, oferecer envio de vídeo já gravado e recado de texto. Não abrir câmera/microfone automaticamente ao aproximar NFC.
- Programação: etapas com horários editáveis; avisos são atualizados enquanto o site está aberto. Não prometer entrega de avisos com o navegador fechado.
- Pós-evento: downloads de originais e álbum PDF com seleção manual de fotos/legendas. Links para vídeos permanecem dependentes do servidor; o backup inclui mídia e índice HTML para consulta local. Impressão física não está incluída.

## 5. Arquitetura e operação

### Reaproveitamento e extensões

Manter React/TypeScript e Vite no frontend, Node/Express no backend e PostgreSQL no Compose. Usar o processamento Sharp/FFmpeg e a infraestrutura de filas existente. Armazenamento inicial em volume persistente da VPS, servido por rotas com autorização. Não introduzir Supabase, Firebase, Lovable ou Hugging Face como dependência de execução.

Acrescentar migrações para etiquetas, etapas, atribuições/conclusões de missões, perguntas/respostas e avisos, relacionadas aos eventos, convidados e mídias existentes. Preservar o modelo de feedback do PicPeak para comentários e reações. Não criar um segundo banco de identidades nem uma API paralela de mídia.

Interfaces novas sob `/api/wedding`: gestão de etiquetas e programação para administradores; consulta de missões e classificação para convidados; submissão de conclusão vinculada a uma mídia já recebida; gravação de recado vinculada à pergunta e ao arquivo; leitura dos recados restrita aos noivos após a abertura. A resolução `/t/:token` cria acesso de convidado limitado ao evento; as rotas existentes de cadastro e upload continuam sendo a base.

Vincular cada upload ao convidado autenticado pelo servidor. Validar também evento, propriedade da mídia e estado de processamento ao registrar uma missão ou recado. Rotas de administração requerem autenticação separada. Não aceitar IDs do cliente como prova de propriedade.

### Recebimento de mídia

- Manter original intacto e checksum SHA-256; gerar derivados para visualização. Mesmo nome de arquivo nunca sobrescreve outro original. Deduplicação física preserva autoria e vínculo de cada envio.
- Aceitar JPEG, PNG, WebP e HEIC/HEIF, além de MP4, MOV e WebM suportados pelo processamento. Validar tipo real, tamanho e duração no servidor. Prévia HEIC/HEVC pode exigir conversão; não confirmar sucesso de reprodução antes do teste em iPhone e Android.
- Limites iniciais propostos: 30 MB por foto; 500 MB e cinco minutos por vídeo; 90 segundos por depoimento. Exibir esses limites antes da seleção. Limites totais dependem da quota configurada, sem promessa de armazenamento ilimitado.
- Reutilizar envio segmentado onde compatível e estendê-lo ao fluxo de convidados se necessário. Estado por arquivo: aguardando, enviando, recebido, processando, pronto ou erro. Sucesso só depois de persistência confirmada. Arquivo inválido não interrompe os demais.
- Guardar estado da fila no navegador; após recarga, solicitar nova seleção se o navegador não preservar o arquivo. Não prometer envio em segundo plano no iPhone nem recuperação de gravação não salva após fechar a aba. Em falha de envio de recado, oferecer download local da gravação.
- Ordenar por captura EXIF quando disponível, assumindo o fuso do evento quando ausente; usar data de envio como fallback e permitir correção de etapa. Não expor GPS em prévias públicas do grupo.

### Capacidade, segurança e backup

A documentação do PicPeak recomenda pelo menos dois núcleos e 4 GB de RAM para uso normal e mais cuidado com vídeos. Para este evento, propor 4 vCPU/8 GB quando já disponíveis, sem pressupor necessidade de contratar upgrade; começar com um processamento pesado por vez. A VPS real ainda não foi acessada. [Requisitos oficiais](https://docs.picpeak.app/deployment/system-requirements).

Cenário de dimensionamento, não previsão: 250 pessoas × 20 fotos × 5 MB = 25 GB; 250 × dois vídeos × 50 MB = 25 GB. São aproximadamente 50 GB de originais, antes de recados, miniaturas, versões compatíveis e exportações. Planejar cerca de 150 GB livres como margem inicial, mais uma cópia externa. Medir arquivos reais e ajustar; vídeos 4K podem exceder muito esse cenário.

Configurar quota do evento, reserva de disco para banco/serviço e alerta antes da saturação. Quando faltar capacidade, recusar novos envios claramente e preservar o acervo existente. Não apagar automaticamente lembranças para abrir espaço.

Rever o limite de cadastro por IP observado no PicPeak: 20/h bloquearia convidados no mesmo Wi-Fi. Adotar limites por sessão/convidado e limite agregado compatível com 250 pessoas, com teto de cadastro inicial de 500/h por IP para esse evento e limitação independente por sessão. Testar também proteção contra abuso; não desativar toda limitação.

HTTPS, cookies seguros para a nova sessão, proteção CSRF, validação de arquivos, limites de processamento, autorização em cada arquivo e logs sem tokens completos. Miniaturas privadas não podem ser servidas por cache público. Não usar reconhecimento facial ou rastreadores publicitários no lançamento.

Backup externo de banco e originais, diário antes do evento e incremental a cada hora durante a festa, com revisão das falhas e restauração de amostra. O destino de backup ainda precisa ser identificado; possuir conector Google Drive não comprova espaço nem configura backup automático. Uma cópia no mesmo disco da VPS não conta como backup externo. Downloads finais para os noivos e verificação por checksum.

A política inicial é manter o álbum online por 12 meses, condicionada à manutenção da infraestrutura e à quota. Nenhuma exclusão automática no fim desse período; exportar e combinar arquivamento com o organizador. “Sem nova mensalidade de software” é viável se a infraestrutura já cobrir o uso; etiquetas, domínio, espaço adicional ou backup podem ter custo.

## 6. Sequência e critérios de aceite

Estimativa de organização para uma janela de até quatro semanas; não representa garantia de entrega sem conhecer a data, VPS e internet do local.

1. Dias 1–3: verificar recursos e acesso da VPS, domínio e backup; preparar cópia fixada do PicPeak e ambiente de teste; testar upload/download original em celulares; detalhar conceito visual e adaptar identidade.
2. Dias 4–8: criar entrada NFC e QR alternativo, sessões individuais, galeria, filtros por etapas, tradução e políticas de acesso. Testar duas pessoas usando a mesma etiqueta sem compartilhar perfil.
3. Dias 9–14: adicionar missões, depoimentos, programação, avisos, moderação e materiais com NFC e QR alternativo. Integrar upload e tratamento de falhas de rede.
4. Dias 15–20: carga, compatibilidade, restauração, permissões e ajuste dos limites. Ensaio presencial com etiquetas e internet reais.
5. Antes do evento: estabilizar pelo menos 72 horas antes, registrar imagem Docker aprovada, backup e rollback. Se a data real permitir menos tempo, reordenar o cronograma antes de prometer todo o escopo.
6. Depois do evento: exportar originais, gerar álbum PDF/índice local, conferir backup e entregar acesso aos noivos.

### Testes obrigatórios

- NFC real em iPhone compatível e Android, com aparelho bloqueado/desbloqueado e configurações habituais; conferir URL após gravação, QR no tamanho real de impressão e link digitável. NFC e QR do mesmo cartão devem abrir a mesma URL, evento e mesa; a revogação do token deve invalidar ambos. Testar também com NFC desligado usando somente a câmera para ler o QR. O comportamento pode variar entre aparelhos.
- 250 sessões, 30 uploads simultâneos e cadastro concentrado em um único IP. Aprovar somente se não houver perda de arquivo confirmado, duplicação por retry nem falhas persistentes por memória/disco.
- Fotos de diferentes orientações, HEIC, MOV/HEVC, vídeo no limite, arquivo inválido e ausência de EXIF. Comparar checksum de original enviado e baixado.
- Cortar rede, voltar, recarregar a página, interromper processamento e reiniciar container. Explicar claramente qualquer ação necessária do convidado.
- Dois convidados na mesma mesa têm nomes e missões independentes; sessão trocada em tablet não revela dados do anterior.
- Tentar acessar mídia de outro evento, recado antes da abertura, endpoints de administrador, miniaturas e arquivos sem autorização. Nenhuma dessas tentativas deve entregar conteúdo.
- Pontuação idempotente; retry, múltiplos arquivos e mudança de nome não geram novos pontos. Moderação altera classificação corretamente.
- ZIP/PDF/índice local funcionam; links preservam privacidade; restauração em ambiente limpo recupera banco e uma amostra de originais.
- Navegação móvel legível, controles acessíveis e sucesso/erro de upload compreensíveis para uma pessoa sem familiaridade técnica.

O lançamento depende de passar esses testes na infraestrutura real. Domínio, espaço livre, destino de backup, data exata e condições de internet são dados de implantação ainda pendentes. O app não foi declarado pronto nem houve alteração da VPS.
