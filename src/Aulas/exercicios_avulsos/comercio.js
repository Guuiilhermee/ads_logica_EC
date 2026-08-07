import leia from 'readline-sync'

var produto = leia.questionFloat('Digite o valor do produto: ')

var totalP = 0.0

if(produto <= 20.00){
    totalP = produto * 1.45
    console.log('(45%) O valor do produto ficou R$ ' + totalP)
}else if(produto > 20.00){
    totalP = produto * 1.30
    console.log('(30%) O valor do produto ficou R$ ' + totalP)
}

