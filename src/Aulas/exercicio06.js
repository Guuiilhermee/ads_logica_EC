import leia from 'readline-sync'

//ANTECESSOR

var num = leia.questionInt('Digite um numero: ')
console.log(--num)

console.log('-----------')

//AREA

var largura = leia.questionInt('Digite a largura: ')
var altura = leia.questionInt('Digite a altura: ')
var area = (largura * altura)
console.log(`A área é: ${area}`)

console.log('-----------')

//IDADE

var ano = leia.questionInt('Digita sua idade: ')
var meses = leia.questionInt('Digita seus meses: ')
var dias = leia.questionInt('Digita seus dias: ')

var anoT = ano * 365
var mesesT = meses * 12

var total = anoT + mesesT + dias

console.log(`Sua idade em dias é ${total}`)

//ELEITORES

var eleitores = leia.questionInt('Digite o numero de eleitores: ')
var brancos = leia.questionInt('Digite o numero de votos brancos: ')
var nulos = leia.questionInt('Digite o numero de votos nulos: ')
var validos = leia.questionInt('Digite o numero de votos validos: ')

var total = eleitores + 