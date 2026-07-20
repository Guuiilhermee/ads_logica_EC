// DOAÇAO

import leia from 'readline-sync'

var opcoes = [
    'Doar R$10',
    'Doar R$25',
    'Doar R$50',
    'Outro valor'
]

var escolha = leia.keyInSelect(opcoes, 'Escolha uma opcao:')

var valor

if(escolha === 0){
    valor = 10;
}else if (escolha === 1){
    valor = 25;
}else if (escolha === 2){
    valor = 50;
}else if (escolha === 3){
    valor = leia.questionFloat('Digite o valor da doacao: R$ ')
}else{
    console.log('Operacao cancelada');
}

if(valor > 0){
    console.log(`Voce doou R$${valor} Obrigado pela doacao!`)
}