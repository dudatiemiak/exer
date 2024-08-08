//Criando um array de alunos
let alunos= ["Leticia", "Mariana", "Pedro", "Felipe", "Vitor", "Enrico", "Israel"];

//Recuperando a lista ul que está no HTML de id 'lista'
let lista = document.getElementById('lista');

//Criar um elemento li para ser adicionado a lista
let elementoLi = document.createElement("li");
//Adicionando texto ao elemento li
elementoLi.textContent = "Novo Aluno";
