// VALOR CLIENTE E MÉDIA

import leia from 'readline-sync'

var cliente1 = leia.question('Digite seu nome: ')
var cliente2 = leia.question('Digite seu nome: ')
var valorCliente1 = leia.questionFloat('Digite o valor da sua compra: ')
var valorCliente2 = leia.questionFloat('Digite o valor da sua compra: ')

var media = (valorCliente1 + valorCliente2) / 2
console.log(`O valor médio foi: R$ ${media.toFixed(2)}`)

if(valorCliente1 > 20){
    console.log(`${cliente1}, você pagou mais que R$20,00`)
}else if(valorCliente2 > 20){
    console.log(`${cliente2}, você pagou mais que R$20,00`)
}else if(valorCliente1 < 20 && valorCliente2 < 20){
    console.log('Nenhum dos clientes fez compra acima de R$20,00')
}