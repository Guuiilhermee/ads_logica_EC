// PREÇO DAS MAÇÃS

import leia from 'readline-sync'

var qtdMacas = leia.questionInt('Digite quantas macas voce comprou: ')

if(qtdMacas < 12){
    var precoMenor = qtdMacas * 0.30
    console.log(`Você comprou ${qtdMacas} e o preço final é: R$ ${precoMenor.toFixed(2)}`)
}else if(qtdMacas >= 12){
    var precoMaior = qtdMacas * 0.25
    console.log(`Você comprou ${qtdMacas} e o preço final é: R$ ${precoMaior.toFixed(2)}`)
}