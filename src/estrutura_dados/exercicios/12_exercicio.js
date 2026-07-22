import leia from 'readline-sync';

var contagem = [0, 0, 0, 0, 0, 0];

// Dado 1000 vezes
for (var i = 0; i < 1000; i++) {
    var dado = Math.floor(Math.random() * 6) + 1;
    contagem[dado - 1]++;
}

var viciado = false;

console.log("\nResultado dos lançamentos:");

for (var i = 0; i < 6; i++) {
    var porcentagem = (contagem[i] / 1000) * 100;

    console.log(
        "Valor", i + 1,
        "- Quantidade:", contagem[i],
        "- Porcentagem:", porcentagem.toFixed(2) + "%"
    );

    if (porcentagem > 22) {
        viciado = true;
    }
}

if (viciado) {
    console.log("\nO dado é viciado.");
} else {
    console.log("\nO dado não é viciado.");
}