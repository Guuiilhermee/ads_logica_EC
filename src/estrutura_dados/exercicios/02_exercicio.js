import leia from 'readline-sync';

var numeros = [];
var soma = 0;

console.log("Digite 5 números:");

for (var i = 0; i < 5; i++) {
    var num = leia.questionFloat(`Digite o ${i + 1}º número: `);
    numeros.push(num);
    soma += num;
}

console.log("\n=== RESULTADOS ===");
console.log(`Somatório: ${soma}`);

console.log("\nNúmeros digitados (um por linha):");
for (var i = 0; i < numeros.length; i++) {
    console.log(`  ${i + 1}º número: ${numeros[i]}`);
}