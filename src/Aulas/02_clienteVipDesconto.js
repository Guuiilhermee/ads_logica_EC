import leia from 'readline-sync'

var precoCompra = leia.questionFloat("Digite o valor da compra: ")
var tipoCliente = leia.question("Voce e cliente Vip? Digite S para sim e N para nao: ")

if(tipoCliente === "S" && precoCompra > 1000){
    var desconto = precoCompra * 0.20
    var precoTotal = precoCompra - desconto
    console.log(`Você teve um desconte de 20% que foi: ${desconto.toFixed(2)}, o total ficou em: R$ ${precoTotal.toFixed(2)}`)
}else if(tipoCliente === "S" && precoCompra > 500 && precoCompra < 1000){
    var desconto = precoCompra * 0.10
    var precoTotal = precoCompra - desconto
    console.log(`Você teve um desconte de 10% que foi: ${desconto.toFixed(2)}, o total ficou em: R$ ${precoTotal.toFixed(2)}`)
}else if(tipoCliente === "N"){
    var desconto = precoCompra * 0.05
    var precoTotal = precoCompra - desconto
    console.log(`Você teve um desconte de 5% que foi: ${desconto.toFixed(2)}, o total ficou em: R$ ${precoTotal.toFixed(2)}`)
}