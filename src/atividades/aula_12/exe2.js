// NÚMERO É PAR OU ÍMPAR

import leia from 'readline-sync'

var num = leia.questionFloat('Digite o numero: ')

if(num % 2 === 0){
    console.log(`${num} é par`)
}else{
    console.log(`${num} é impar`)
}