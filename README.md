# Entre Nós

Aplicativo de memórias para casamentos, com entrada principal por etiquetas NFC e QR Code alternativo. O projeto usa uma interface React/Vite e uma API Express/PostgreSQL.

## Estrutura

- `app/`: experiência do convidado e Design System aplicado.
- `server/`: API para resolução de tags e sessões de convidado.
- `server/sql/`: esquema PostgreSQL e dados de desenvolvimento.
- `server/API.md`: contrato das rotas já implementadas.
- `outputs/design-system/`: guia de design, tokens e fontes.

## Executar localmente

Com Docker Desktop em execução:

```bash
docker compose up --build
```

Em outro terminal, execute o frontend:

```bash
cd app
npm install
npm run dev
```

Abra `http://localhost:5173/t/mesa-jardim`. A tag de desenvolvimento e o QR de desenvolvimento devem resolver a mesma URL.

## Segurança e NFC

Cada etiqueta usa somente um NDEF URI HTTPS, por exemplo `https://dominio.com/t/<token>`. A posse da tag não é uma credencial administrativa. Leia [o guia de tags](app/docs/NFC_TAGS.md) antes de gravar os itens comprados no marketplace.

O `docker-compose.yml` contém credenciais exclusivamente locais. Antes de publicar na VPS, trocar senha, domínio, CORS e configurar backup externo.

O PostgreSQL possui tabelas para mídias, recados, missões e conclusões idempotentes. O álbum público deve consultar apenas mídias aprovadas; o estado inicial de qualquer envio é `received`.

Depois de configurar um domínio HTTPS real e gravar as tags, execute `npm run tags:generate` em `server/` para gerar QR Codes SVG e `manifest.csv`. O comando recusa URLs HTTP ou localhost para evitar imprimir links de desenvolvimento.
