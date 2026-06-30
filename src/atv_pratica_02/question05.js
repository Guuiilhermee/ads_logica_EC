import leia from 'readline-sync';

var tempAtual = leia.questionFloat("INFORME A TEMPERATURA ATUAL: ");
var opcao = leia.keyInSelect(["C -> F", "C -> K", "F -> C", "F -> K", "K -> C", "K -> F"],
    "INFORME A CONVERSAO"
)

switch(opcao) {
    case 0: 
        var F = (tempAtual * 1.8) + 32
        console.log(F)
        break;
    case 1: 
        var C = (tempAtual - 32) * (5 / 9)
        console.log(C)
        break;
    case 2: 
        var K = tempAtual + 273.15
        console.log(K)
        break;
    case 3: 
        var C = tempAtual - 273.15
        console.log(C)
        break;
    case 4: 
        var K = (tempAtual - 32) * (5 / 9) + 273.15
        console.log(K)
        break;
    case 5: 
        var F = (tempAtual - 273.15) * 1.8 + 32
        console.log(F)
        break;
}