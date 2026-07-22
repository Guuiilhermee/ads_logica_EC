import leia from 'readline-sync';

var vetor = [];

for (var i = 0; i < 4; i++) {

    var numero = leia.questionInt("Digite um numero par: ");

    while (numero % 2 != 0) {
        console.log("Numero invalido! Digite um numero par.");
        numero = leia.questionInt("Digite um numero par: ");
    }

    vetor[i] = numero;
}

console.log("\nVetor:", vetor);