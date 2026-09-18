from pathlib import Path
import zipfile, json

root = Path('outputs')
p = root / 'HANDOFF.md'
s = p.read_text(encoding='utf-8')
s = s.replace('Existe um conceito visual ilustrativo.', 'A direção visual do PNG foi aprovada pelo usuário e formalizada no Design System 1.0, com guia HTML interativo, tokens, componentes CSS e fontes locais.')
s = s.replace('Não representa interface implementada nem aprovação detalhada do design.', 'A direção visual foi aprovada; não representa interface implementada.')
s = s.replace('## Recomendação técnica, ainda não validada em execução', '## Design System 1.0\n\nConsultar `design-system/index.html` para o guia visual e `design-system/DESIGN-SYSTEM.md` para os contratos de implementação. Reutilizar `tokens.css`, `tokens.json`, `components.css`, `icons.svg` e as fontes locais com suas licenças. Paleta marfim/oliva, Cormorant Garamond para títulos e DM Sans para interface. Controles têm altura mínima de 48 px. O guia contém demonstrações locais, não integração com o app. NFC principal e QR alternativo estão documentados; o QR ilustrativo não é escaneável. Ver `design-system/VALIDACAO.md` para limites da revisão.\n\n## Recomendação técnica, ainda não validada em execução')
p.write_text(s, encoding='utf-8')
p = root / 'plano-entre-nos-nfc.md'
s = p.read_text(encoding='utf-8').replace('É proposta visual, ainda não uma tela implementada ou aprovada em detalhe.', 'A direção visual foi aprovada pelo usuário e formalizada em `design-system/index.html` e `design-system/DESIGN-SYSTEM.md`; o app ainda não foi implementado.').replace('Botões de pelo menos 44 px', 'Botões de pelo menos 48 px, conforme o Design System 1.0')
p.write_text(s, encoding='utf-8')
p = root / 'LEIA-ME.md'
s = p.read_text(encoding='utf-8').replace('Comece por HANDOFF.md e depois leia plano-entre-nos-nfc.md.', 'Para o Design System, abra `design-system/index.html` no navegador. Mantenha a estrutura das pastas ao extrair o ZIP: fontes e estilos funcionam offline. Leia `design-system/DESIGN-SYSTEM.md` para implementar. Para continuar o projeto, comece por HANDOFF.md e depois leia plano-entre-nos-nfc.md.').replace('Arquivos:', 'Arquivos:\n- design-system/ — guia visual interativo, documentação, tokens CSS/JSON, componentes CSS, ícones SVG, fontes com licenças e relatório de validação.')
p.write_text(s, encoding='utf-8')
(root/'design-system/VALIDACAO.md').write_text('''# Validação do Design System 1.0

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
''', encoding='utf-8')
files = sorted(p for p in root.rglob('*') if p.is_file() and p.suffix.lower() != '.zip')
archive = root / 'entre-nos-design-system-completo.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as z:
    for p in files: z.write(p, p.relative_to(root).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    for p in files: assert z.read(p.relative_to(root).as_posix()) == p.read_bytes()
json.loads((root/'design-system/tokens.json').read_text(encoding='utf-8'))
print(f'ZIP validado: {archive.resolve()} | {len(files)} arquivos | {archive.stat().st_size} bytes')
