import leia from 'readline-sync'

//ENTRADA

var celcius = leia.questionFloat("Digite a temperatura em Graus Celsius: ")
var fahrenheit = (celcius * 1.8) + 32
var kelvin = (celcius + 273.15)

console.log(`Em Celcius para fahrenheit é: ${fahrenheit} e em kelvin é: ${kelvin}`)
