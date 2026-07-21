import leia from 'readline-sync';

var numeros = [];
var maiores_igual = [];

console.log("Digite 15 números inteiros:");

for (var i = 0; i < 15; i++) {
    var num = leia.questionInt(`Digite o ${i + 1}º número: `);
    numeros.push(num);
    if (num >= 10) maiores_igual.push(num);
}

console.log("\nVetor completo:", numeros);
console.log("Números >= 10:", maiores_igual);
console.log("Quantidade:", maiores_igual.length);

console.log("\nLista de números >= 10:");
for (var i = 0; i < maiores_igual.length; i++) {
    console.log(maiores_igual[i]);
}