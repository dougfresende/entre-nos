# API inicial

Todas as rotas de convidado usam a sessão criada depois da resolução da tag. O token da etiqueta identifica apenas evento/mesa; não é credencial administrativa.

| Método | Rota | Função |
|---|---|---|
| `GET` | `/health` | Verifica API e PostgreSQL |
| `GET` | `/api/v1/tags/:token` | Resolve o cartão NFC/QR |
| `POST` | `/api/v1/tags/:token/sessions` | Cria sessão com nome e consentimento |
| `POST` | `/api/v1/sessions/:id/media` | Recebe uma foto ou vídeo, até 50 MB |
| `POST` | `/api/v1/sessions/:id/notes` | Guarda recado de até 500 caracteres |
| `GET` | `/api/v1/sessions/:id/missions` | Lista missões do evento |
| `POST` | `/api/v1/sessions/:id/missions/:missionId` | Envia missão uma única vez |

Mídias entram como `received` e ficam no volume `entre_nos_uploads`. A moderação e a geração de derivados ainda precisam ser conectadas antes de exibir o arquivo no álbum público.
