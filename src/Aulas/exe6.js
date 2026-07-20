// MOEDAS NO COFRINHO E VALOR DO PRODUTO

import leia from 'readline-sync'

var valorProduto = leia.questionFloat('Digite o valor do produto: ')

var N1real = leia.questionInt('Digite o numero de moedas de 1 real: ')
var N50cent = leia.questionInt('Digite o numero de moedas de 50 centavos: ')
var N25cent = leia.questionInt('Digite o numero de moedas de 25 centavos: ')
var N10cent = leia.questionInt('Digite o numero de moedas de 10 centavos: ')
var N5cent = leia.questionInt('Digite o numero de moedas de 5 centavos: ')

var valorM1 = N1real * 1
var valorM50 = N50cent * 0.50
var valorM25 = N25cent * 0.25
var valorM10 = N10cent * 0.10
var valorM5 = N5cent * 0.05

var totalCofre = valorM1 + valorM50 + valorM25 + valorM10 + valorM5

if(totalCofre >= valorProduto){
    console.log(`O valor do produto é: R$ ${valorProduto.toFixed(2)} e você tem R$ ${totalCofre.toFixed(2)} no cofrinho. PODE COMPRAR`)
}else if(totalCofre < valorProduto){
    console.log(`O valor do produto é: R$ ${valorProduto.toFixed(2)} e você tem R$ ${totalCofre.toFixed(2)} no cofrinho. NÃO PODE COMPRAR`)
}
