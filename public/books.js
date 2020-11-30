"use strict";
const titulo = document.querySelector('#title');
const subtitulo = document.querySelector('#subtitle');
const edição = document.querySelector('#edition');
const volume = document.querySelector('#volume');
const tipo = document.querySelector('#type');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
});
const valorTitulo = titulo.value.trim();
const valorSubtitulo = subtitulo.value.trim();
const valoredição = edição.value;
const valorvolume = volume.value;
const valortipo = tipo.value;
if (!valorTitulo) {
    resposta.innerText = 'O campo Titulo é obrigatório!';
    resposta.className = 'negative';
    titulo.className = 'negative';
    titulo.focus();
    return;
}
const regexTitulo = /\w+\s\w+/g;
if (!regexTitulo.test(valorTitulo)) {
    resposta.innerText = 'Informe o Titulo completo!';
    resposta.className = 'negative';
    titulo.className = 'negative';
    titulo.focus();
    return;
}
if (!valorSubtitulo) {
    resposta.innerText = 'O campo Subtitulo é obrigatório!';
    resposta.className = 'negative';
    subtitulo.className = 'negative';
    subtitulo.focus();
    return;
}
const regexSubtitulo = /\w+\s\w+/g;
if (!regexSubtitulo.test(valorSubtitulo)) {
    resposta.innerText = 'Informe o Subtitulo completo!';
    resposta.className = 'negative';
    subtitulo.className = 'negative';
    subtitulo.focus();
    return;
}
if (!edição.value) {
    resposta.innerText = 'O campo Edição é obrigatório!';
    resposta.className = 'negative';
    nascimento.className = 'negative';
    edição.focus();
    return;
}
if (!volume.value) {
    resposta.innerText = 'O campo Volume é obrigatório!';
    resposta.className = 'negative';
    volume.className = 'negative';
    volume.focus();
    return;
}
if (!tipo.value) {
    resposta.innerText = 'O campo Tipo é obrigatório!';
    resposta.className = 'negative';
    tipo.className = 'negative';
    tipo.focus();
    return;
}
