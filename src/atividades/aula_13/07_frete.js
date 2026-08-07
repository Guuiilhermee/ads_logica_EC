import leia from 'readline-sync'

var valorCompra = leia.questionFloat('Digite o VALOR da COMPRA: ');
var operacao = leia.keyInSelect(["SP", "SC", "PR", "RS"], "Selecione o ESTADO")

if(valorCompra >= 500){
    console.log("FRETE GRÁTIS!")
}else if(valorCompra < 500){
    if(operacao === 0){
        var total = valorCompra * 1.05
        console.log(`O valor total com frete ficou em: R$ ${total.toFixed(2)}`)
    }else if(operacao === 1){
        var total = valorCompra * 1.10
        console.log(`O valor total com frete ficou em: R$ ${total.toFixed(2)}`)
    }else if(operacao === 2){
        var total = valorCompra * 1.15
        console.log(`O valor total com frete ficou em: R$ ${total.toFixed(2)}`)
    }else if(operacao === 3){
        var total = valorCompra * 1.20
        console.log(`O valor total com frete ficou em: R$ ${total.toFixed(2)}`)
    }
}