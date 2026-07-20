// NÚMERO DA PLACA

import leia from 'readline-sync'

var ultimoNum = leia.questionInt('Digite o ultimo numero da placa: ')

if(ultimoNum === 0 || ultimoNum === 1){
    console.log('NÃO pode rodar na SEGUNDA-FEIRA')
}else if(ultimoNum === 2 || ultimoNum === 3){
    console.log('NÃO pode rodar na TERÇA-FEIRA')
}else if(ultimoNum === 4 || ultimoNum === 5){
    console.log('NÃO pode rodar na QUARTA-FEIRA')
}else if(ultimoNum === 6 || ultimoNum === 7){
    console.log('NÃO pode rodar na QUINTA-FEIRA')
}else if(ultimoNum === 8 || ultimoNum === 9){
    console.log('NÃO pode rodar na SEXTA-FEIRA')
}