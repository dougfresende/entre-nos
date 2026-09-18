# Entre Nós — Design System 1.0

Direção visual aprovada pelo usuário a partir de `conceito-entre-nos.png`. Este documento formaliza o sistema para implementação; fontes, medidas e códigos de cor são escolhas explícitas de design, não propriedades recuperadas do PNG. Nome da marca provisório. Conteúdo ilustrativo não é dado real do casamento.

## 1. Contexto e identidade

Público: 101–250 convidados, incluindo pessoas com pouca familiaridade digital. Uso predominante no celular, durante um casamento, com iluminação variável e possível instabilidade de rede. Objetivo: acessar por NFC ou QR e compartilhar lembranças com facilidade.

Personalidade: íntima, editorial, acolhedora e elegante. A fotografia protagoniza; a interface não compete com os momentos. Preservar marfim, oliva, títulos serifados, composição arejada, linhas discretas e ícones de traço leve. A cena de mesa, velas e flores do PNG pertence à apresentação do conceito; não deve virar fundo decorativo atrás dos controles do app.

Assinatura verbal: “Nosso dia, pelos seus olhos.” Frase dos materiais: “Aproxime. Compartilhe. Reviva.” Instrução funcional: “Aproxime o celular ou escaneie o QR Code.”

Marca: usar composição tipográfica “Entre Nós” em Cormorant Garamond 500, tracking de −0,04em. Versão horizontal na interface, empilhada apenas em capas e materiais com espaço suficiente. Área de proteção mínima equivalente à altura do “N”. Mínimo digital recomendado: 28 px de fonte. Não adicionar anéis, corações ou brasões ao nome sem uma nova decisão de identidade.

## 2. Como usar os arquivos

- `index.html`: guia visual navegável, com demonstrações locais e sem envio de dados. Abrir no navegador, mantendo toda a pasta junta.
- `tokens.json`: tokens estruturados com `$type` e `$value`, usando cores sRGB; importadores podem exigir um adaptador. Não afirmar compatibilidade automática com qualquer plugin Figma.
- `tokens.css`: propriedades CSS da marca, com prefixo `--en-`.
- `components.css`: fontes locais e estilos base dos componentes. Inclui normalização de elementos: importar no escopo apropriado ao integrar no PicPeak para evitar alterações não planejadas no admin.
- `guide.css` e `guide.js`: apresentação e interações exclusivas do guia; não são código de backend do produto.
- `icons.svg`: sprite original de ícones simples em SVG.
- `fonts/`: arquivos de fonte e licenças OFL correspondentes.
- `contraste.json`: resultados calculados das combinações principais.

Importar `tokens.css` antes de `components.css`. Na integração React, começar com wrappers semânticos sobre as classes existentes; não portar o guia inteiro para a interface do convidado. Manter a arquitetura do PicPeak e integrar os tokens ao tema; não adicionar uma segunda biblioteca de componentes só para reproduzir este arquivo.

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components.css">
<button class="en-button">Enviar fotos e vídeos</button>
```

O guia é utilizável offline após a extração do pacote. Não contém analytics, chamadas de IA, CDN de fontes ou armazenamento de nomes. Abrir localmente não implanta o app. A folha de impressão oferece uma versão legível do guia, mas o arquivo HTML não é arte gráfica final para produção.

## 3. Cores e semântica

| Token CSS | Cor | Papel |
|---|---|---|
| `--en-canvas` | `#F7F4EE` | Fundo marfim |
| `--en-surface` | `#FFFCF7` | Campos, cartões e folhas |
| `--en-surface-muted` | `#EDE9E0` | Trilhos e agrupamentos suaves |
| `--en-ink` | `#282B23` | Texto principal |
| `--en-text-secondary` | `#626457` | Descrições e ajuda |
| `--en-olive` | `#45513D` | Ação principal, seleção e foco |
| `--en-olive-hover` | `#35402F` | Hover da ação principal |
| `--en-olive-pressed` | `#283222` | Pressionado |
| `--en-sage` | `#DDE3D5` | Sucesso e seleção suave |
| `--en-border` | `#D9D4C9` | Separador decorativo |
| `--en-border-control` | `#7A7E70` | Contorno funcional de campos/controles |
| `--en-champagne` | `#B5A68A` | Detalhe decorativo, nunca texto de ação |
| `--en-danger` / `--en-danger-soft` | `#9C3E35` / `#F8EAE6` | Erro e remoção |
| `--en-warning` / `--en-warning-soft` | `#78541C` / `#F4EBD5` | Pendência/atenção |
| `--en-info` / `--en-info-soft` | `#3B5960` / `#E6EEEC` | Informação operacional |
| `--en-disabled-bg` / `--en-disabled-text` | `#E4E1D9` / `#66695E` | Indisponível |

Mapeamento semântico: texto sobre ação = surface; sucesso = olive sobre sage; fundo padrão = canvas; superfície elevada = surface. Não usar a borda decorativa como único limite de um campo. Estados precisam de texto e, quando útil, ícone. Nunca pintar uma pendência de verde ou indicar upload concluído por antecipação.

As combinações verificadas estão no relatório de contraste. Alvos: 4,5:1 para texto normal; 3:1 para contornos essenciais. Essa verificação não constitui certificação de acessibilidade. Verificar também foco, fotos, zoom, leitor de tela e os componentes finais. O QR usa preto sobre branco como exceção técnica à paleta.

Modo claro é a especificação v1. Não inventar modo escuro invertendo tokens: demandaria outro estudo de fotos, contraste e estados.

## 4. Tipografia

**Cormorant Garamond** dá a voz editorial: nomes, títulos, frases curtas e marca. **DM Sans** dá clareza a controles, campos, ajuda, legendas e mensagens de sistema. Essa separação preserva o caráter do conceito e melhora a leitura funcional no celular. Não foi possível identificar uma fonte real no PNG gerado; estas são as famílias escolhidas para reproduzir sua direção.

| Papel | Família/peso | Tamanho / entrelinha | Uso |
|---|---|---|---|
| Display | Cormorant 400–500 | 64 / 67 px; móvel 40–48 / 44–51 | Abertura e celebração |
| Página | Cormorant 500 | 40 / 44 px; móvel 32–36 / 38–41 | Nosso álbum, Suas missões |
| Seção | Cormorant 500 | 32 / 36 px | Agrupamento principal |
| Cartão | Cormorant 500 | 24 / 29 px | Missão, pergunta |
| Destaque editorial | Cormorant 400 | 20 / 27 px | Frase curta |
| Corpo | DM Sans 400 | 16 / 25 px | Texto de leitura |
| Botão | DM Sans 500 | 16 / 22 px | Ações |
| Apoio | DM Sans 400–500 | 14 / 21 px | Ajuda, erro, metadados |
| Legenda | DM Sans 400–500 | 12 / 18 px | Informação não crítica |

16 px é o mínimo para campos. Não usar peso 300 em texto funcional. Caixa alta com tracking de 0,12–0,16em somente em rótulos editoriais curtos; o guia usa alguns rótulos de documentação de 11 px que não devem ser copiados para instruções do produto. Texto corrido limitado a cerca de 60 caracteres por linha. Nunca truncar erros, instruções ou o botão principal.

Fontes variáveis incluídas localmente, com `font-display: swap`. Pesos de interface: 400, 500, 600. Itálico Cormorant apenas para ênfase editorial. O fallback é Georgia para display e a fonte de sistema para UI. O pacote contém TTF para portabilidade; na aplicação, converter/subdividir em WOFF2 com suporte ao português e preservar as licenças. Pré-carregar apenas o peso/arquivo necessário à primeira tela.

Fontes oficiais: [Cormorant Garamond](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond) e [DM Sans](https://github.com/google/fonts/tree/main/ofl/dmsans). Licenças completas em `fonts/`.

## 5. Espaçamento, forma e layout

Escala: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80 e 96 px. Não usar todos os valores em todo componente. Distância interna menor que a distância entre grupos.

- Tela de convidado: 20 px de margem lateral abaixo de 768 px; 24 px em telas médias; conteúdo de formulários limitado a 560 px.
- Galeria: duas colunas no celular com intervalo de 8 px, três a partir de 768 px e quatro a partir de 1200 px, largura máxima de 1200 px. Usar ordem DOM coerente; evitar CSS columns que torne a navegação por teclado imprevisível.
- Cartões: 20 px no celular e 24 px em áreas amplas. Raio 16 px, borda decorativa e sombra mínima.
- Controles: raio 12 px; fotos pequenas, 8 px; painel deslizante, 24 px nos cantos superiores; filtros e estados, 999 px.
- Alvo de toque: mínimo 48 × 48 px. Navegação inferior: item com 56 px de altura mínima, além de padding e safe area. Texto de item com 12 px e ícone 22–24 px.
- Barra inferior fixa na aplicação: reservar no conteúdo sua altura real mais `env(safe-area-inset-bottom)`; o guia a demonstra em fluxo estático.
- Desktop: manter a experiência de convidado simples. Aumentar a área da galeria, não esticar formulários. Admin pode usar navegação lateral e tabelas, mantendo tokens de cor/tipo/estado.

Sombra de cartão: `0 2px 8px rgb(40 43 35 / 5%)`. Overlay: `0 12px 32px rgb(40 43 35 / 12%)`. Não aplicar sombra a cada foto nem criar cartões dentro de cartões. A dobra de papel do conceito não é efeito obrigatório da UI.

Breakpoints: 768 e 1200 px; são limites de composição, não modelos de aparelho. Validar 320, 390, 768 e 1440 px, zoom de 200% e conteúdo mais longo. Não esconder funções centrais no mobile.

## 6. Contratos de componentes

### Botões e links

`Button`: variantes primary, secondary, quiet e danger; estados default, hover, pressed, focus, busy e disabled. Ícone opcional de 22 px. Primary preenchido oliva; secondary com contorno funcional; quiet para ações menos importantes; danger reservado para remoção real. Navegação usa link, ações usam button. Não depender de hover.

Busy: manter largura, texto “Enviando…” e `aria-busy=true`; impedir submissão duplicada. Disabled precisa de motivo próximo quando não for evidente. O guia inclui o spinner CSS, mas nenhum spinner substitui texto de estado. Foco: contorno oliva de 3 px, offset de 4 px; em fundo escuro, contorno papel. Não remover o foco para parecer mais elegante.

### Filtros

`FilterChip`: rótulo e seleção exclusiva; todos operáveis por teclado. Em uma linha de botões, usar `aria-pressed`; não declarar `role=tab` sem o comportamento de teclado e painéis correspondente. Estado selecionado oliva com texto papel. Na aplicação, mudar seleção deve alterar os resultados e anunciar a quantidade real. No guia, altera somente a seleção ilustrativa.

### Campos, consentimento e erros

`TextField`: label visível, valor, ajuda, erro, required e disabled. Erro após blur ou tentativa de envio; `aria-invalid` e vínculo por `aria-describedby`. Não usar placeholder como label. Manter o valor após falha. Mensagem explica como corrigir. Checkbox nativo com texto clicável; não pré-marcar consentimento. Nenhum campo de nome deve impor apenas letras ASCII.

### Missão e pontuação

`MissionCard`: título, descrição, tipo de mídia, estado, ação e mensagem auxiliar. Estados: disponível → enviando → em processamento → aguardando aprovação → concluída; reprovação volta a permitir reenvio, com explicação. O contador considera somente missões concluídas. “Concluída” tem ícone de check, texto e superfície sálvia. Ícone ilustrativo com até 40 px, nunca fotografia de estoque como decoração da missão.

### Upload e feedback

`UploadItem`: nome do arquivo, tamanho, progresso real quando mensurável, status e retry por arquivo. Estados: aguardando, enviando, recebido, processando, pronto ou erro. 100% dos bytes não significa mídia pronta; separar processamento. Progresso sem total conhecido é indeterminado, sem percentual inventado. Usar `progress` com nome acessível. Falha individual não impede os demais arquivos.

Mensagens: “Sua foto foi recebida. Estamos preparando a prévia.”; “A conexão caiu. Tente enviar este arquivo novamente.”; “Este vídeo ultrapassa o limite de 5 minutos.” Nunca mostrar “Memória salva” antes da confirmação do servidor. Mensagens persistentes e úteis ficam junto do arquivo; toasts são somente complementares.

### Álbum e detalhe

`MediaTile`: prévia, tipo foto/vídeo, duração quando aplicável e autor quando autorizado. Prévia com proporção delimitada entre 1:1 e 3:4; não distorcer. Mostrar mídia completa no detalhe. Carregamento com superfície neutra estática, sem animação de brilho obrigatória. Não aplicar filtros destrutivos a imagens dos convidados.

`MediaViewer`: imagem/vídeo completo, autoria, ações permitidas, comentários e reações. Se implementado como dialog, manter foco dentro enquanto aberto, fechar com Escape e restaurar foco ao item original. Não ocultar controles de vídeo por estética. Downloads, autoria e mídia privada continuam sujeitos à autorização do backend.

### Recados

`RecordingPanel`: pergunta, explicação de privacidade, iniciar, tempo decorrido, parar, revisar, refazer e enviar. Não pedir câmera/microfone antes do toque. Estado gravando usa indicador e texto; não somente ponto vermelho. O usuário pode revisar antes de enviar. Se a permissão for negada, mostrar alternativa de envio de vídeo existente ou texto. No tablet compartilhado, limpar identidade e voltar à entrada após conclusão.

### Navegação, avisos e confirmação

`BottomNavigation`: quatro destinos — Álbum, Missões, Recados, Programação — com link e `aria-current=page`. Ícone acompanhado de texto. Missões e Recados não ficam escondidos no menu de três linhas.

`Notice`: informação, sucesso, atenção e erro, com texto e ícone opcional. `role=status` para atualização normal; `role=alert` somente quando exige atenção imediata. Não anunciar cada incremento de percentual ao leitor de tela.

`ConfirmationDialog`: apenas quando necessário para ações destrutivas ou saída com gravação não salva. Explicar a consequência, oferecer cancelar e ação específica. Não pedir confirmação para simples navegação sem perda de dados.

## 7. Fotografia, ícones e movimento

Fotografia: afeto, gestos e cenas espontâneas. Luz quente e tons naturais para imagens editoriais; manter originais de convidados intactos. Não forçar filtro sépia, desaturação ou corte que elimine pessoas. As imagens do PNG são referência fictícia e não devem ser usadas como supostos registros do casamento.

Preferir título sobre superfície sólida. Uma transição de foto para marfim é permitida na abertura quando necessária para reproduzir o conceito; ela deve proteger a leitura sem cobrir rostos. Não usar gradiente atrás de todas as telas nem texto transparente sobre imagem imprevisível.

Ícones: grade 24, traço 1,5, pontas arredondadas, mesma família. Símbolos SVG fornecidos podem ser usados como base. Se houver biblioteca consistente no app, mapear equivalentes sem introduzir duas famílias concorrentes. Ícone decorativo usa `aria-hidden`; botão apenas com ícone precisa de nome acessível e alvo de 48 px.

Movimento: feedback de 160 ms; mudança de painel de 240 ms; curva `cubic-bezier(.22,1,.36,1)`. Opacidade e transformação leves, sem elasticidade, parallax ou animação que adie o envio. Respeitar `prefers-reduced-motion`. Não disparar confete automático a cada foto ou missão.

## 8. NFC + QR em material físico

NFC e QR do mesmo cartão codificam exatamente a mesma URL HTTPS. Mesmas permissões, evento, mesa e fluxo. NFC é entrada, não autenticação pessoal. Não imprimir informação de administrador nem um link diferente para “facilitar” o acesso.

Modelo de referência: face de 100 × 150 mm, margem interna de 8 mm, marca no topo, nomes, frase curta, símbolo NFC, instrução explícita e QR na parte inferior. O HTML mostra uma referência de proporção, não uma arte final milimétrica. Fechar arquivo para a gráfica após definir dimensão, papel e suporte.

QR: reservar pelo menos 30 × 30 mm, fundo branco, código preto, quiet zone de quatro módulos, sem logo no centro. A dimensão final depende da densidade e da leitura real; testar em mais de um aparelho e sob iluminação semelhante à festa. A cor preta/branca é uma exceção de função à identidade. NFC deve ser testado após colar no suporte, incluindo eventuais materiais metálicos.

Não gerar QR falso ou de destino público genérico como se estivesse pronto. O guia tem área marcada “QR do evento”; substituir pelo QR real somente após domínio/token. Não fazer ninguém digitar como alternativa primária ao NFC. Link escrito pode permanecer como recurso adicional.

## 9. Estados de tela e texto

| Situação | Mensagem | Ação |
|---|---|---|
| Álbum vazio | “Os primeiros olhares começam com você.” | Enviar fotos e vídeos |
| Sem resultado no filtro | “Ainda não há fotos desta etapa.” | Ver todas |
| Sem conexão | “Você está sem conexão. Os envios ainda não confirmados precisam aguardar.” | Tentar novamente |
| Processamento | “Recebemos seu arquivo. Estamos preparando a prévia.” | Continuar no álbum |
| Permissão negada | “Não conseguimos acessar sua câmera.” | Escolher vídeo do celular |
| Recados fechados | “Seus recados estarão disponíveis em [data e hora reais].” | Voltar ao álbum |
| Link inválido | “Este acesso não está disponível.” | Orientação de contato fornecida pelo organizador |
| Capacidade atingida | “Não foi possível receber este arquivo agora. Avise a organização.” | Manter arquivo no celular |

Evitar jargões como token, bucket, codec ou job no fluxo do convidado. Na documentação e no painel técnico, usar termos precisos quando ajudarem a resolver um problema. Não prometer “para sempre” nem “ilimitado”.

## 10. Aceite e manutenção

Antes de integrar: verificar compatibilidade com o tema existente, manter classes prefixadas e mapear os tokens sem alterar inadvertidamente telas administrativas. Um revisor deve comparar abertura, galeria e missões com o PNG, preservando composição e personalidade; o PNG não define os estados operacionais que este documento acrescenta.

Antes do lançamento: testar contraste em contextos reais; teclado; labels e foco; navegação com leitor de tela; alvo de toque; zoom; textos longos; aparelho pequeno; permissão negada; envio com falha; progresso real; galeria vazia; privacidade de recados; NFC e QR impressos. Valores de testes do guia não provam funcionamento do app.

Evolução: novos componentes reutilizam tokens existentes. Nova cor ou raio exige motivo funcional registrado. Alteração incompatível de token ou contrato muda a versão principal; adição compatível muda a secundária. O conceito aprovado é a referência de direção; este Design System é a referência de valores e comportamento.

Responsabilidade da entrega: biblioteca visual e especificação, com demonstrações locais. Não inclui integração ao PicPeak, backend, publicação, teste físico de NFC ou QR funcional.
