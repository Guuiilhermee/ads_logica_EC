import leia from 'readline-sync';

var pai = [];
var mae = [];
var filho = [];

// pai e mãe aleatórios
for (var i = 0; i < 50; i++) {
    pai[i] = Math.floor(Math.random() * 100);
    mae[i] = Math.floor(Math.random() * 100);
}

// filho
for (var i = 0; i < 50; i++) {

    if (i % 2 == 0) {
        // pai
        filho[i] = pai[i];
    } else {
        // mãe
        filho[i] = mae[i];
    }
}

console.log("\nPai:   ", pai);
console.log("Mãe:   ", mae);
console.log("Filho: ", filho);