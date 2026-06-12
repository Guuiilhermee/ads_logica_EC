// PARTIDA DE FUTEBOL

import leia from 'readline-sync'

var timeA_gols = leia.questionInt('Digite a quantidade de gols do Time A: ')
var timeB_gols = leia.questionInt('Digite a quantidade de gols do Time B: ')

if(timeA_gols > timeB_gols){
    var diferenca = timeA_gols - timeB_gols
}else{
    var diferenca = timeB_gols - timeA_gols
}

if(diferenca === 0){
    console.log(`EMPATE. Time A ${timeA_gols} X ${timeB_gols} Time B`)
}else if(diferenca >= 1 && diferenca <= 3){
    console.log(`PARTIDA NORMAL. Time A ${timeA_gols} X ${timeB_gols} Time B`)
}else{
    console.log(`GOLEADA. Time A ${timeA_gols} X ${timeB_gols} Time B`)
}