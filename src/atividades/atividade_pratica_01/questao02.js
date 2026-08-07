import leia from 'readline-sync';

var idade = leia.questionInt("INFORME A IDADE: ");
var ehEstudante = leia.keyInYN("VOCE E ESTUDANTE: ");
var diaSemana = leia.keyInSelect(["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"], "INFORME DIA DA SEMANA");

var valorIngresso = 40;
var valorDesconto = 0;
var valorCobrado = 0;

if (idade < 12) {
    valorDesconto = valorIngresso - 15;
    valorCobrado = 15;
} else {
    if (diaSemana === 0) {
        valorDesconto = valorIngresso * 0.50;
        valorCobrado = valorIngresso - valorDesconto;
    } else if (diaSemana !== 0 && ehEstudante === true) {
        valorDesconto = valorIngresso * 0.30;
        valorCobrado = valorIngresso - valorDesconto;
    } else {
        valorCobrado = valorIngresso
    }
}

console.log("VALOR INGRESSO: R$" + valorIngresso.toFixed(2));
console.log("VALOR DESCONTO: R$" + valorDesconto.toFixed(2));
console.log("VALOR COBRADO: R$" + valorCobrado.toFixed(2));