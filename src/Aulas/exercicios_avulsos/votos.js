import leia from 'readline-sync'

var eleitores = leia.questionInt('Digite o numero de ELEITORES: ')
var vtBranco = leia.questionInt('Digite o numero de votos BRANCOS: ')
var vtVal = leia.questionInt('Digite o numero de votos VALIDOS: ')
var vtNul = leia.questionInt('Digite o numero de votos NULOS: ')

let porcentB = (vtBranco / eleitores) * 100
let porcentV = (vtVal / eleitores) * 100
let porcentN = (vtNul / eleitores) * 100

console.log('A porcentagem de votos BRANCOS é: ' + porcentB.toFixed(2) + '%')
console.log('A porcentagem de votos VALIDOS é: ' + porcentV.toFixed(2) + '%')
console.log('A porcentagem de votos NULOS é: ' + porcentN.toFixed(2) + '%')

