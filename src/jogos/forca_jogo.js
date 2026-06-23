import leia from 'readline-sync';

const partes = [
    `
  +---+
  |   |
      |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

var palavras = [
  "javascript", "computador", "internet", "algoritmo", "python",
  "senai", "monitor", "teclado", "mouse", "celular", "fone", "carro"
];

var letrasCertas = [];
var letrasErradas = [];
var tentativas = 6;
var venceu = false;

var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

do{
  var escolha = leia.keyInSelect(fios, `Escolha um fio para cortar, voce possui: ${tentativas} tentativas!`)
  var fioEscolhido = fios[escolha]
  
  if(letrasCertas === palavraSecreta){
    console.log(`Você acertou a palavra`)
    venceu = true
  }else{
    console.log(`Você errou a palavra: ${palavraSecreta}`)
    tentativas--
    palavras.splice(escolha, 6)
  }
}while(tentativas > 0 && venceu === false)
