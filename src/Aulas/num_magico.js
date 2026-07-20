import leia from 'readline-sync'

var numMagico = Math.floor(Math.random() * 1000) + 1
var tentativa
var qtdTentativa = 0

console.log('jogo numero magico')

do{
    tentativa = leia.questionInt("Tentativa: ")
    qtdTentativa++
    if(tentativa > numMagico){
        console.log('Numero magico é MENOR')
    }else if(tentativa < numMagico){
        console.log('Numero magico é MAIOR')
    }else{
        console.log('Parabens ACERTOU')      
        console.log('E precisou de ' + qtdTentativa + 'tentativas')      
    }
}while(tentativa !== numMagico)