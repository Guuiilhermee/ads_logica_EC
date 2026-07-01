import leia from 'readline-sync'

// DO WHILE
/*
var numero = 10

console.log("---ABAIXO WHILE---")
while(numero < 10){
    console.log("TESTE " + numero)
    numero++
}
console.log("---ABAIXO WHILE---")

do{
    console.log("TESTE " + numero)
    numero++
}while(numero < 10)

var qtd = 0
while(qtd < 500){
    console.log("Não consigo dormir cedo " + qtd)
    qtd++
} */

// WHILE
/* 
var senha = ""
var tentativas = 3

while(senha !== "1234" && tentativas > 0){
    senha = leia.question("Digite a senha, voce tem: " + tentativas + " tentativas ")

    if(senha !== "1234"){
        console.log("Senha incorreta")
        tentativas--
    }
}

if(tentativas > 0){
    console.log("Senha correta")
}else{
    console.log("Você não tem mais tentativas")
} */

/*
var somaNotas = 0
var qtd = 5
var contador = 1

while(contador <= qtd){
    var nota = leia.questionFloat("DIGITE A NOTA: " + contador + " : ")

    if(nota > 10){
        console.log("Digite uma nota até 10")
        var nota = leia.questionFloat("DIGITE A NOTA: " + contador + " : ")
    }
    somaNotas = somaNotas + nota
    contador++
}
var media = somaNotas / qtd
console.log(media.toFixed(2)) */

// FOR
var somaNotas = 0
var qtd = 3
for(var i = 1; i <= qtd; i++){
    var nota = leia.questionFloat("DIGITE A NOTA: " + i + " : ")

    if(nota > 10){
        console.log("Digite uma nota até 10")
        var nota = leia.questionFloat("DIGITE A NOTA: " + i + " : ")
    } 

    somaNotas = somaNotas + nota
}
var media = somaNotas / qtd
console.log(media.toFixed(2))