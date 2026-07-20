import leia, { question } from 'readline-sync'

/*
var ud = leia.question("Dgite o último número da sua placa: ")
 if(ud === '0' || ud === '1'){
    console.log("Você não pode rodar na segunda-feira")
 }else if(ud === '2' || ud === '3'){
    console.log("Você não pode rodar na terça-feira")
 }else if(ud === '4' || ud === '5'){
    console.log("Você não pode rodar na quarta-feira")
 }else if(ud === '6' || ud === '7'){
    console.log("Você não pode rodar na quinta-feira")
 }else if(ud === '8' || ud === '9'){
    console.log("Você não pode rodar na sexta-feira")
 }

switch(ud) {
    case '1':
        console.log("Você não pode rodar na segunda-feira")
    break
    case '2':
        console.log("Você não pode rodar na segunda-feira")
    break
    default:
        console.log("Pode rodar")
}

var dia = "Não pode rodar na"
var mensagem = ud === '0' || ud === '1' ? `${dia} segunda-feira` : 
                ud === '2' || ud === '3' ? "Não pode rodar na terça-feira" :
                ud === '4' || ud === '5' ? "Não pode rodar na quarta-feira" : 
                ud === '6' || ud === '7' ? "Não pode rodar na quinta-feira" :
                ud === '6' || ud === '7' ? "Não pode rodar na sexta-feira" :
                "Número inválido"
console.log(mensagem) */

// EXERCICIO 4

/*
var numApples = leia.questionInt("Digite quantas macas voce vai comprar: ")

if(numApples < 12){
    var valorTotal = numApples * 0.30
    console.log(`O valor total é: R$ ${valorTotal.toFixed(2)}`)
}else{
    var valorTotal = numApples * 0.25
    console.log(`O valor total é: R$ ${valorTotal.toFixed(2)}`)
} */

// EXERCÍCIO 5

/*
var nome1 = leia.question("Nome: ")
var nome2 = leia.question("Nome: ")
var valor1 = leia.questionFloat("Valor: ")
var valor2 = leia.questionFloat("Valor: ")

var media = (valor1 + valor2) / 2

if(valor1 > 20){
    console.log(nome1)
}else if(valor2 > 20){
    console.log(nome2)
} */

// EXERCÍCIO 6

var produto = leia.questionFloat("Valor: R$ ")

var moeda1real = leia.questionInt("Quantas moedas e 1 Real: ")
var moeda50cent = leia.questionInt("Quantas moedas e 50cent: ")
var moeda25cent = leia.questionInt("Quantas moedas e 25cent: ")
var moeda10cent = leia.questionInt("Quantas moedas e 10cent: ")
var moeda5cent = leia.questionInt("Quantas moedas e 5cent: ")

var valor1 = moeda1real * 1
var valor2 = moeda50cent * 0.50
var valor3 = moeda25cent * 0.25
var valor4 = moeda25cent * 0.10
var valor5 = moeda25cent * 0.05

var valorTotal = valor1 + valor2 + valor3 + valor4 + valor5

if(valorTotal > produto){
    console.log(`Você tem R$ ${valorTotal.toFixed(2)} no cofrinho`)
    console.log("Você pode comprar")
}else{
    console.log("Você NAO pode comprar")
}

