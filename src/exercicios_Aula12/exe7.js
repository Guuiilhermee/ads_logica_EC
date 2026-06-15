// VALOR DAS PRESTAÇÕES

import leia from 'readline-sync'

var salario = leia.questionFloat('Digite seu salario: ')
var emprestimo = leia.questionFloat('Digite o valor do emprestimo: ')
var prestacoes = leia.questionInt('Digite o valor das prestacoes: ')

var valorPrestacao = emprestimo / prestacoes

if(valorPrestacao <= salario * 0.30){
    console.log('Empréstimo PODE ser concedido');
}else{
    console.log('Empréstimo NÃO pode ser concedido')
}