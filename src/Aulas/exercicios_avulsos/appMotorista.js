import leia from 'readline-sync'

var run1 = leia.questionFloat('Digite o valor da sua corrida 1: ')
var run2 = leia.questionFloat('Digite o valor da sua corrida 2: ')
var run3 = leia.questionFloat('Digite o valor da sua corrida 3: ')
var run4 = leia.questionFloat('Digite o valor da sua corrida 4: ')
var run5 = leia.questionFloat('Digite o valor da sua corrida 5: ')

var somaRun = (run1 + run2 + run3 + run4 + run5) 
var desconto = somaRun / 4
var total = somaRun - desconto

console.log('Você recebeu R$ ' + somaRun.toFixed(2) + ' e terá um desconto de R$ ' + desconto.toFixed(2) + ' tendo um total de R$ ' + total.toFixed(2))