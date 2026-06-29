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
  "javascript", "computador", "programacao", "algoritmo", "variavel",
  "funcao", "terminal", "internet", "logica", "senai", "teclado"
]

var letrasCertas = [];
var letrasErradas = [];
var tentativas = 6;
var venceu = false;

var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

function desenhaForca(erros) {
  console.log(partes[erros]);
}

while(tentativas > 0 && venceu === false){
  console.clear();
  console.log("=== JOGO DA FORCA ===");
  
  desenhaForca(letrasErradas.length);

  var palavraMontada = "";
  for(var i = 0; i < palavraSecreta.length; i++) {
    if(letrasCertas.includes(palavraSecreta[i])) {
      palavraMontada += palavraSecreta[i] + " ";
    }else {
      palavraMontada += "_ "
    }
  }

  console.log("Palavra: " + palavraMontada);
  console.log("Tentativas restantes: " + tentativas);
  console.log("Letras erradas: " + letrasErradas.join(', '))
  
  var letra = leia.question("Digite uma letra: ").toLowerCase(); 

  if(letra.length !== 1) {
    console.log("Digite apenas uma letra.");
    leia.question("Precione ENTER para continuar...")
  } else if(letrasCertas.includes(letra) || letrasErradas.includes(letra)){
    console.log("Voce ja digitou essa letra.")
    leia.question("Precione ENTER para continuar...")
  } else if(palavraSecreta.includes(letra)) {
    letrasCertas.push(letra);
  } else {
    letrasErradas.push(letra);
    tentativas--;
  }

  venceu = true;
  for(var i = 0; i < palavraSecreta.length; i++) {
    if(letrasCertas.includes(palavraSecreta[i]) === false) {
      venceu = false;
    }
  }
}

console.clear();
console.log("=== JOGO DA FORCA ===");
desenhaForca(letrasErradas.length);
if(venceu === true) {
  console.log("Parabens, voce acertou!!!");
} else {
  console.log("Voce errou");
  console.log("A palavra era: " + palavraSecreta)
}