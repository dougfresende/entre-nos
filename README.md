# Entre Nós

Aplicativo de memórias para casamentos, com entrada principal por etiquetas NFC e QR Code alternativo. O projeto usa uma interface React/Vite e uma API Express/PostgreSQL.

## Estrutura

- `app/`: experiência do convidado e Design System aplicado.
- `server/`: API para resolução de tags e sessões de convidado.
- `server/sql/`: esquema PostgreSQL e dados de desenvolvimento.
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
