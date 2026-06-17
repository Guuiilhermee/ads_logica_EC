import leia from 'readline-sync'

var nota1 = leia.questionFloat("Digite a primeira nota: ")
var nota2 = leia.questionFloat("Digite a segunda nota: ")
var nota3 = leia.questionFloat("Digite a terceira nota: ")
var nota4 = leia.questionFloat("Digite a quarta nota: ")
var nota5 = leia.questionFloat("Digite a quinta nota: ")

var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5.0

var freq = leia.questionInt("Digite sua frequencia, entre 0 a 100: ")

if(media >= 7.0 && freq >= 75 && freq <= 100){
    console.log(`Sua média: ${media.toFixed(2)} . Sua Frequência: ${freq}`)
    console.log("Você está aprovado")
}else{
    console.log(`Sua média: ${media.toFixed(2)} . Sua Frequência: ${freq}`)
    console.log("Você está reprovado")
}

