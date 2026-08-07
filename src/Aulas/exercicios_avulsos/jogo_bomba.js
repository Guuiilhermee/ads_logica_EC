// JOGO CORTAR FIO DAS BOMBAS

import leia from 'readline-sync'

console.log("=== DESARMAR BOMBA ===")
console.log("UMA BOMBA FOI ENCONTRADA, VOCÊ PRECISA CORTAR O FIO CORRETO")
console.log("E VOCÊ POSSUI 3 TENTATIVAS")
console.log("======================")

var fios = ['Vermelho', 'Azul', 'Verde', 'Marrom', 'Preto', 'Branco', 'Laranja', 'Roxo', 'Amarelo']

var fioCorreto = fios[Math.floor(Math.random() * fios.length)]
var tentativas = 3
var desarmou = false

do{
    var escolha = leia.keyInSelect(fios, `Escolha um fio para cortar, voce possui: ${tentativas} tentativas!`)
    var fioEscolhido = fios[escolha]

    if(fioEscolhido === fioCorreto){
        console.log(`Você cortou o fio correto`)
        desarmou = true
    }else{
        console.log(`Você cortou o fio: ${fioCorreto}, esse NÃO era o fio correto`)
        tentativas--
        fios.splice(escolha, 1)
    }
}while(tentativas > 0 && desarmou === false)

if(desarmou === false){
    console.log(`EXPLODIU A BOMBA! o fio correto era: ${fioCorreto}`)
}else{
    console.log(`PARABÉNS você DERSARMOU a bomba!`)
}