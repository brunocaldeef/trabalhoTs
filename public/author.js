"use strict";
const nome = document.querySelector('#nome');
const nascimento = document.querySelector('#birth');
const sexo = document.querySelector('#gender');
const resposta = document.querySelector('#resposta');
const formulario = document.querySelector('form');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    nome.className = nascimento.className = sexo.className = '';
    const valorNome = nome.value.trim();
    if (!valorNome) {
        resposta.innerText = 'O campo Nome é obrigatório!';
        resposta.className = 'negative';
        nome.className = 'negative';
        nome.focus();
        return;
    }
    const regexNome = /\w+\s\w+/g;
    if (!regexNome.test(valorNome)) {
        resposta.innerText = 'Informe seu nome completo!';
        resposta.className = 'negative';
        nome.className = 'negative';
        nome.focus();
        return;
    }
    if (!nascimento.value) {
        resposta.innerText = 'O campo Nascimento é obrigatório!';
        resposta.className = 'negative';
        nascimento.className = 'negative';
        nascimento.focus();
        return;
    }
    const dataNascimento = new Date(`${nascimento.value}T00:00:00`);
    console.log(nascimento.value);
    if (Date.now() - Number(dataNascimento) < 0) {
        resposta.innerText = 'O nascimento deve ter ocorrido no passado!';
        resposta.className = 'negative';
        nascimento.className = 'negative';
        nascimento.focus();
        return;
    }
    if (!sexo.value) {
        resposta.innerText = 'O campo Sexo é obrigatório!';
        resposta.className = 'negative';
        sexo.className = 'negative';
        sexo.focus();
        return;
    }
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    if (dataNascimento.getMonth() > hoje.getMonth()) {
        idade--;
    }
    else if (hoje.getMonth() == dataNascimento.getMonth()) {
        if (dataNascimento.getDate() > hoje.getDate()) {
            idade--;
        }
    }
});
