import leia from 'readline-sync';

var minimas = [];
var maximas = [];

for (var dia = 0; dia < 30; dia++) {
    
    // 12 e 35
    var valor1 = Math.floor(Math.random() * 24) + 12;
    var valor2 = Math.floor(Math.random() * 24) + 12;
    
    // Menor e Maior
    if (valor1 < valor2) {
        minimas[dia] = valor1;
        maximas[dia] = valor2;
    } else {
        minimas[dia] = valor2;
        maximas[dia] = valor1;
    }
}

console.log("\nTemperaturas mínimas:", minimas);
console.log("Temperaturas máximas:", maximas);