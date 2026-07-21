import leia from 'readline-sync';

var numeros = [];

console.log("Digite 10 números:");

for (var i = 0; i < 10; i++) {
    var num = leia.questionFloat(`Digite o ${i + 1}º número: `);
    numeros.push(num);
}

console.log("\n=== VETOR ORIGINAL ===");
console.log(numeros);

var numerosInvertidos = numeros.slice().reverse();

console.log("\n=== VETOR INVERTIDO ===");
console.log(numerosInvertidos);

console.log("\n=== DETALHAMENTO DA INVERSÃO ===");
for (var i = 0; i < numeros.length; i++) {
    console.log(`Posição ${i}: ${numeros[i]} → Posição ${numeros.length - 1 - i}: ${numerosInvertidos[i]}`);
}