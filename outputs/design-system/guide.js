const $ = id => document.getElementById(id);
document.querySelectorAll('.en-chip').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('.en-chip').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 document.querySelector('.filter-status').textContent = `Filtro de demonstração: ${button.textContent}.`;
}));
$('demo-action').addEventListener('click', () => $('action-status').textContent = 'No aplicativo, esta ação abre a seleção de fotos e vídeos. Este guia não envia arquivos.');
$('demo-secondary').addEventListener('click', () => $('action-status').textContent = 'No aplicativo, esta ação abre a pergunta do recado. Nenhuma câmera foi ativada.');
$('demo-form').addEventListener('submit', event => {
 event.preventDefault(); const input = $('guest-name'); const missing = !input.value.trim();
 input.setAttribute('aria-invalid', String(missing)); $('name-error').textContent = missing ? 'Informe como podemos chamar você.' : '';
 $('form-status').textContent = '';
 if (missing) { input.focus(); return; }
 if (!$('demo-consent').checked) { $('form-status').textContent = 'Marque a opção para continuar a demonstração.'; $('demo-consent').focus(); return; }
 $('form-status').textContent = 'Tudo certo nesta demonstração. Nenhum dado foi armazenado.';
});
let timer; let completionTimer; let value = 0;
function stopUpload(){clearInterval(timer);clearTimeout(completionTimer);$('simulate-upload').disabled=false;$('simulate-upload').removeAttribute('aria-busy');}
$('simulate-upload').addEventListener('click', () => {
 stopUpload(); value=0; $('upload-error').hidden=true; $('upload-progress').value=0; $('upload-percent').textContent='0%';
 $('simulate-upload').disabled=true; $('simulate-upload').setAttribute('aria-busy','true'); $('upload-state').textContent='Simulação: enviando arquivo…';
 timer=setInterval(() => {value+=20;$('upload-progress').value=value;$('upload-percent').textContent=`${value}%`;
  if(value===100){clearInterval(timer);$('upload-state').textContent='Simulação: recebido; preparando prévia…';completionTimer=setTimeout(()=>{stopUpload();$('upload-state').textContent='Simulação concluída. Nenhum arquivo real foi enviado.';},600);}
 },300);
});
$('simulate-error').addEventListener('click', () => {stopUpload();$('upload-error').hidden=false;$('upload-state').textContent='Falha simulada. Você pode tentar novamente.';$('simulate-upload').textContent='Tentar novamente';});
let completed=false;
$('mission-button').addEventListener('click', () => {completed=!completed;$('mission-progress').value=completed?1:0;$('mission-count').textContent=completed?'1 de 1 concluída · demonstração':'0 de 1 concluída · demonstração';$('mission-button').textContent=completed?'Reiniciar demonstração':'Simular conclusão';$('mission-status').textContent=completed?'Conclusão simulada. No app, depende de envio válido e aprovação.':'No app, a missão só pontua após mídia válida e aprovação.';});
