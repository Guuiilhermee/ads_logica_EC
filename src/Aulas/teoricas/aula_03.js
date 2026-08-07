import leia from 'readline-sync'

var idade = leia.questionInt('Qual a sua idade? ')

var meses = 12 * idade
var dias = 365 * idade
console.log(`Você viveu ${meses} meses e ${dias} dias`)

