import leia from 'readline-sync';

var tempAtual = leia.questionFloat("INFORME A TEMPERATURA ATUAL: ");
var opcao = leia.keyInSelect(["C -> F", "C -> K", "F -> C", "F -> K", "K -> C", "K -> F"],
    "INFORME A CONVERSÃO"
)

switch(opcao) {
    case 0: 
        // conversão C -> F
        var F = (tempAtual * 1.8) + 32
        console.log(F)
        break;
    case 1: 
        // conversão C -> K
        break;
    case 2: 
        // conversão F -> C
        break;
}