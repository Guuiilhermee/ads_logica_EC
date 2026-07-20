// OPERADORES ARITMÉTICOS

var soma = 10 + 5
console.log(soma)
var somaString = "10" + "5"
console.log(somaString)

console.log('')
console.log('|-------------------------------|')
console.log('')

var divisao = 11 / 2
console.log(divisao)
var modulo = 11 % 2
console.log(modulo)

console.log('')
console.log('|-------------------------------|')
console.log('')

var media = (8 + 7 + 9) / 3
console.log(media)

console.log('')
console.log('|-------------------------------|')
console.log('')

var numero = 10
console.log(numero)
numero++
console.log(numero)
numero--
console.log(numero)

console.log('')
console.log('|-------------------------------|')
console.log('')

var num1 = 5, num2 = 5
console.log(num1++)
console.log(num1)
console.log(++num2)
console.log(num2)

console.log('')
console.log('|-------------------------------|')
console.log('')

// OPERADORES DE COMPARAÇÃO

var nome = "Guilherme" == "Gustavo"
var numero = 1 == 2
var numero2 = "1" == 2
var numero3 = true == false
var numero4 = "true" == false

var nome02 = "Guilherme" != "Gustavo"
var numero02 = 1 != 2
var numero03 = "1" != 2
var numero04 = true != false
var numero05 = "true" != false
console.log(nome,numero,numero2,numero3,numero4)
console.log(nome02,numero02,numero03,numero04,numero05)

console.log('')
console.log('|-------------------------------|')
console.log('')

var numero10 = 10 == 10
var numero11 = 10 == "10"
var numero12 = 10 === 10
var numero13 = 10 === "10"
console.log(numero10,numero11,numero12,numero13)

console.log('')
console.log('|-------------------------------|')
console.log('')

var maior = 18 > 10
var maior2 = 18 >= 10
console.log(maior, maior2)

console.log('')
console.log('|-------------------------------|')
console.log('')

// OPERADORES DE NEGAÇÃO
var vdd = !true
var fls = !false
console.log(vdd,fls)

console.log('')

// OPERADORE && ||

var teste = 18 > 10 && 10 > 5
var teste2 = 18 > 10 && 10 > 12
console.log(teste, teste2)
var test1 = 18 > 10 || 10 > 5
var test02 = 18 > 10 || 10 > 12
console.log(test1, test02)