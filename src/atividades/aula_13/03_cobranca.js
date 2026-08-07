import leia from 'readline-sync'

var qtdHoras = leia.questionInt("Digite a quantidade de horas: ")
var cartao = leia.question("Voce possui cartao fidelidade? Digite S para sim e N para nao: ")

if(cartao === "S" && qtdHoras == 1){
    var valor1 = 8.0
    var desconto = valor1 * 0.15
    var valorTotal = valor1 - desconto
    console.log(`Você teve o um desconto de: R$ ${desconto.toFixed(2)} , o total ficou em: R$ ${valorTotal.toFixed(2)} `)
}else if(cartao === "S" && qtdHoras > 1 && qtdHoras <= 3){
    var valor2 = 15.0
    var desconto = valor2 * 0.15
    var valorTotal = valor2 - desconto
    console.log(`Você teve o um desconto de: R$ ${desconto.toFixed(2)} , o total ficou em: R$ ${valorTotal.toFixed(2)} `)
}else if(cartao === "S" && qtdHoras > 3 && qtdHoras <= 6){
    var valor3 = 22.0
    var desconto = valor3 * 0.15
    var valorTotal = valor3 - desconto
    console.log(`Você teve o um desconto de: R$ ${desconto.toFixed(2)} , o total ficou em: R$ ${valorTotal.toFixed(2)} `)
}else if(cartao === "S" && qtdHoras > 6){
    var valor4 = 30.0
    var desconto = valor4 * 0.15
    var valorTotal = valor4 - desconto
    console.log(`Você teve o um desconto de: R$ ${desconto.toFixed(2)} , o total ficou em: R$ ${valorTotal.toFixed(2)} `)
}else if(cartao === "N" && qtdHoras == 1){
    var valor1 = 8.0
    console.log(`O valor ficou em: R$ ${valor1.toFixed(2)}`) 
}else if(cartao === "N" && qtdHoras > 1 && qtdHoras <= 3){
    var valor2 = 15.0
    console.log(`O valor ficou em: R$ ${valor2.toFixed(2)}`) 
}else if(cartao === "N" && qtdHoras > 3 && qtdHoras <= 6){
    var valor3 = 22.0
    console.log(`O valor ficou em: R$ ${valor3.toFixed(2)}`) 
}else if(cartao === "N" && qtdHoras > 6){
    var valor4 = 30.0
    console.log(`O valor ficou em: R$ ${valor4.toFixed(2)}`) 
}