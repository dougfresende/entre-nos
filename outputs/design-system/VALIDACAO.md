# Validação do Design System 1.0

Revisado em 17/09/2026.

- Guia renderizado e inspecionado visualmente no Chrome em desktop e viewport de 390 × 844 px.
- No viewport mobile, largura de conteúdo de 375 px para janela de 390 px: sem overflow horizontal global.
- Formulário: erro de nome vazio e sucesso com nome e checkbox verificados. Dados não armazenados.
- Upload: falha, tentativa novamente, progresso até 100% e conclusão simulada verificados.
- Missão: conclusão demonstrativa atualiza contagem, progresso e texto.
- Contrastes das combinações listadas calculados em `contraste.json`; todos atendem ao mínimo indicado. Isso não constitui auditoria completa de acessibilidade.
- Fontes locais e licenças incluídas. Guia sem dependências de CDN.
- ZIP conferido por CRC e comparação de conteúdo com arquivos originais.

Limites: sem teste em aparelho físico, leitor de tela, Safari, NFC ou impressão. O guia é uma referência com simulações; não há aplicativo, envio real ou QR funcional. Validar esses fluxos na implementação.
