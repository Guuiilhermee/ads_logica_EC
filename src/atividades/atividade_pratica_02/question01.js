import leia from 'readline-sync';

var num1 = leia.questionInt("INFORME PRIMEIRO NUMERO: ");
var num2 = leia.questionInt("INFORME SEGUNDO NUMERO: ");
var num3 = leia.questionInt("INFORME TERCEIRO NUMERO: ");
var aux;

if(num1 > num2) {
    aux = num1;
    num1 = num2;
    num2 = aux;
}

if(num1 > num3){
    aux = num1;
    num1 = num3;
    num3 = aux;
}

if(num2 > num3){
    aux = num2;
    num2 = num3;
    num3 = aux;
}

console.log(`${num1} , ${num2} , ${num3}`)