import leia from 'readline-sync';

var numeros = [];
var numerosMultiplicados = [];

console.log("Digite 10 números:");

for (let i = 0; i < 10; i++) {
    let num = leia.questionFloat(`Digite o ${i + 1}º número: `);
    numeros.push(num);
    numerosMultiplicados.push(num * 5);
}

console.log("\nVetor original:", numeros);
console.log("Vetor multiplicado por 5:", numerosMultiplicados);