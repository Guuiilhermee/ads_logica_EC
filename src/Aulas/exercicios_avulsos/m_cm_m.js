import leia from 'readline-sync'

var metro = leia.questionFloat('Digite o valor em metros: ')

var cm = metro * 100
var mm = metro * 1000

console.log('O valor em metros para cm é: ' + cm + 'cm')
console.log('O valor em metros para mm é: ' + mm + 'mm')