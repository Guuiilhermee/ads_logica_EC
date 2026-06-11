// VIAGEM

import leia from 'readline-sync'

var idade = leia.questionInt('Digite sua idade: ')

if(idade >= 18){
    var nome = leia.question('Digite seu nome completo: ')
    console.log(`${nome}, você pode ir`)
}else if(idade < 18){
    console.log('Peça permissão aos pais')
    var permissao = leia.question('Digite SIM para permitir e NAO para nao permitir: ')

    if(permissao == 'SIM'){
        var nome = leia.question('Digite seu nome completo: ')
        console.log(`${nome}, você pode ir`)
    }else if(permissao == 'NAO'){
        console.log(`Você NÃO pode ir`)
    }
}