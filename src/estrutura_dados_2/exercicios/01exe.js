import leia from 'readline-sync'

let vetorOriginal = [];
let vetorMultiplicado = [];

console.log("Digite 10 números:\n");

for (let i = 0; i < 10; i++) {
    let numero = parseFloat(leia.question(`Digite o ${i + 1}º número: `));
    
    vetorOriginal.push(numero);
    
    vetorMultiplicado.push(numero * 5);
}

console.log("\n--- Resultados ---");
console.log("Vetor Original:", vetorOriginal);
console.log("Vetor Multiplicado por 5:", vetorMultiplicado);