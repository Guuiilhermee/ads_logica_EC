import leia from 'readline-sync'

var nota1 = leia.questionFloat('Digite a primeira nota: ')
var nota2 = leia.questionFloat('Digite a segunda nota: ')
var nota3 = leia.questionFloat('Digite a terceira nota: ')

var media = (nota1 + nota2 + nota3) / 3

console.log('A media foi: ' + media)