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

var palavraSecreta = palavras[Math.floor(Math.random() + palavras.length)];
