// SALÁRIO MAIS % DE DEPENDENTES

import leia from 'readline-sync'

var nome = leia.question('Digite seu nome: ')
var salario = leia.questionFloat('Digite seu salario: ')
var qtdDependente = leia.questionInt('Digite a quantidade de dependentes: ')

if(qtdDependente === 0){
    var salarioTotal = salario * 1.02
    console.log(`Seu salário final é: R$ ${salarioTotal.toFixed(2)}`)
}else if(qtdDependente === 1){
    var salarioTotal = salario * 1.05
    console.log(`Seu salário final é: R$ ${salarioTotal.toFixed(2)}`)
}else if(qtdDependente === 2){
    var salarioTotal = salario * 1.07
    console.log(`Seu salário final é: R$ ${salarioTotal.toFixed(2)}`)
}else if(qtdDependente === 3){
    var salarioTotal = salario * 1.10
    console.log(`Seu salário final é: R$ ${salarioTotal.toFixed(2)}`)
}else if(qtdDependente === 4){
    var salarioTotal = salario * 1.15
    console.log(`Seu salário final é: R$ ${salarioTotal.toFixed(2)}`)
}
