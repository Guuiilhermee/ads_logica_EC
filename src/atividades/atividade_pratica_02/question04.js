import leia from 'readline-sync';

var diarias = leia.questionInt("INFORME A QUANTIDADE DE DIARIAS: ")
var idade = leia.questionInt("INFORME A IDADE: ")

var valorDiaria;

if (diarias <= 5) {
    valorDiaria = 100;
} else if (diarias <= 10) {
    valorDiaria = 90;
} else {
    valorDiaria = 80;
}

var total = diarias * valorDiaria;

if (idade > 60) {
    total = total * 0.8;
}

console.log(`Valor total da hospedagem: R$ ${total.toFixed(2)}`);