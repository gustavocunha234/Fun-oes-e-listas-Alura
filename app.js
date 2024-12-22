let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function verificarChute() {
    console.log('botao clicado')
}


let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarChute(){
    console.log('botao clicado');
}

function exibir(){
    alert('Eu amo JS');
}

function botao() {
    let cidade = prompt('Nome de uma cidade do Brasil ?');
    alert(`Estive em ${cidade} e lembrei de voce`);
}

function soma(){
   let valor1 = parseInt(prompt('digite um numero ? '));
   let valor2 = parseInt(prompt('digite outro numero ? '));
   let resultado = valor1 + valor2;

   alert(`A soma do ${valor1} + ${valor2} = ${resultado}`);

}