import leia from 'readline-sync'

var nota1 = leia.questionFloat("Digite a primeira nota: ")
var nota2 = leia.questionFloat("Digite a segunda nota: ")
var nota3 = leia.questionFloat("Digite a terceira nota: ")
var nota4 = leia.questionFloat("Digite a quarta nota: ")
var nota5 = leia.questionFloat("Digite a quinta nota: ")

var qtdDiasPresentes = leia.questionInt("Digite a quantidade de dias presentes: ")
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5.0

var freq = (qtdDiasPresentes / 200) * 100

if(media >= 7.0 && freq >= 75.0){
    console.log(`Sua média: ${media.toFixed(2)} ; Sua Frequência: ${freq.toFixed(1)} %`)
    console.log("Você está aprovado")
}else{
    console.log(`Sua média: ${media.toFixed(2)} ; Sua Frequência: ${freq.toFixed(1)} %`)
    console.log("Você está reprovado")
}

