import leia from 'readline-sync';

var gabarito = ["A", "B", "C", "D", "A", "C", "B", "D", "A", "B"];
var respostas = [];
var acertos = 0;

// Respostas do aluno
for (var i = 0; i < 10; i++) {
    respostas[i] = leia.question("Resposta da questao " + (i + 1) + ": ").toUpperCase();
}

// Acertos
for (var i = 0; i < 10; i++) {
    if (respostas[i] == gabarito[i]) {
        acertos++;
    }
}

// Calcular
var nota = acertos;

console.log("\nGabarito:", gabarito);
console.log("Respostas:", respostas);
console.log("Acertos:", acertos);
console.log("Nota:", nota);