import leia from 'readline-sync'

var num = leia.questionInt('Digite um numero: ')

var dobro = num + num
var triplo = dobro * 3

console.log('O dobro do numero é: ' + dobro)
console.log('O triplo do numero é: ' + triplo)