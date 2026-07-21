import leia from 'readline-sync';

var numeros = [];
var pares = [];

console.log("Digite 10 números inteiros:");

for (var i = 0; i < 10; i++) {
    var num = leia.questionInt(`Digite o ${i + 1}º número: `);
    numeros.push(num);
    if (num % 2 === 0) pares.push(num);
}

console.log("\nVetor completo:", numeros);
console.log("Números pares:", pares);
console.log("Quantidade de pares:", pares.length);

console.log("\nLista de números pares:");
for (var i = 0; i < pares.length; i++) {
    console.log(pares[i]);
}