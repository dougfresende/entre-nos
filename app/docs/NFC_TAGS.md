# Etiquetas NFC do Entre Nós

As tags NFC compradas em marketplace abrem o aplicativo pelo sistema do celular. O navegador não lê o chip: a tag deve ter um único registro **NDEF URI** com o mesmo endereço HTTPS presente no QR Code do cartão.

## Especificação adotada

- Tecnologia: NFC Forum Type 2, compatível com **NTAG213** ou superior.
- Uso: uma tag por mesa como padrão inicial; a identificação da mesa não identifica uma pessoa.
- Conteúdo: URL HTTPS curta, por exemplo `https://seu-dominio.com/t/mesa-jardim`.
- QR: exatamente a mesma URL da tag, impressa em preto sobre branco, sem logotipo sobre o código.
- A tag não dá acesso administrativo e não deve armazenar nomes, telefones ou recados.

NTAG213 costuma acomodar URLs curtas. Se as tags compradas forem NTAG215 ou NTAG216, elas também funcionam para este caso. Não usar tags somente leitura até que a URL e a leitura física tenham sido aprovadas.

## Gravação e teste

1. Defina o domínio HTTPS e gere um token aleatório por etiqueta no servidor.
2. No aplicativo de gravação NFC, escolha **URL/URI** e grave apenas a URL do cartão.
3. Leia a tag de volta no mesmo aplicativo para conferir o conteúdo.
4. Teste NFC e QR em pelo menos um iPhone e um Android, no suporte final e com a internet real do local.
5. Confirme que ambos chegam à mesma rota `/t/:token`; revogar um token deve invalidar os dois meios de acesso.

Enquanto o domínio ainda não existe, a rota de desenvolvimento `http://127.0.0.1:5173/t/mesa-jardim` permite revisar a entrada. Ela não deve ser gravada em tag física.
