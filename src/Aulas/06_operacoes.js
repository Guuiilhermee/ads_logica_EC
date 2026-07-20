import leia from 'readline-sync'

var numeroUm = leia.questionFloat('Digite o PRIMEIRO NUMERO: ');
var numeroDois = leia.questionFloat('Digite o SEGUNDO NUMERO: ');
var operacao = leia.keyInSelect(["+", "-", "*", "/", "%"], "Selecione a OPERACAO")

switch(operacao){
    case 0:
        var result = numeroUm + numeroDois
        console.log(result)
        break;
    case 1:
        var result = numeroUm - numeroDois
        console.log(result)
        break;
    case 2:
        var result = numeroUm * numeroDois
        console.log(result)
        break;
    case 3:
        if(numeroDois === 0){
            console.log("Não é possível dividir por ZERO")
            break;
        }
        var result = numeroUm / numeroDois
        console.log(result)
        break;
    case 4:
        if(numeroDois === 0){
            console.log("Não é possível dividir por ZERO")
            break;
        }
        var result = numeroUm % numeroDois
        console.log(result)
        break;
}