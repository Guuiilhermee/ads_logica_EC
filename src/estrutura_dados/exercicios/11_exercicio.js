import leia from 'readline-sync';

var matriz = [];

// aleatórios
for (var i = 0; i < 8; i++) {
    matriz[i] = [];

    for (var j = 0; j < 8; j++) {
        matriz[i][j] = Math.floor(Math.random() * 21);
    }
}

console.log("\nMatriz:");
console.table(matriz);

console.log("\nNúmeros maiores que 10:");

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {

        if (matriz[i][j] > 10) {
            console.log("Linha", i, "Coluna", j, "=", matriz[i][j]);
        }

    }
}