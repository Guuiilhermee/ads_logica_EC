import leia from 'readline-sync';

var valor = leia.questionFloat("DIGITE O VALOR DA COMPRA: R$");
var estado = leia.keyInSelect(["SP", "SC", "PR", "RS", "OUTROS"], "INFORME O DESTINO: ");

if (valor > 500) {
    console.log("VALOR DA COMPRA É: R$" + valor.toFixed(2) + " E O FRETE É GRÁTIS");
} else {
    switch (estado) {
        case 0:
        case 1:
        case 2:
        case 3:
            console.log("O VALOR DA COMPRA: R$" + valor.toFixed(2) + " FRETE R$" + 400);
            break;
        case 4:
            console.log("O VALOR DA COMPRA: R$" + valor.toFixed(2) + " FRETE R$" + 500);
            break;
    }
}