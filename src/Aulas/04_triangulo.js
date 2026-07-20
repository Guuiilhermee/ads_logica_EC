var readline = require('readline-sync');

var lado1 = leia.questionFloat('Digite o primeiro lado: ');
var lado2 = leia.questionFloat('Digite o segundo lado: ');
var lado3 = leia.questionFloat('Digite o terceiro lado: ');

if (lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1) {

    console.log('Os lados podem formar um triângulo.');

    if (lado1 == lado2 && lado2 == lado3) {
        console.log('Triângulo Equilátero');
    } 
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log('Triângulo Isósceles');
    } 
    else {
        console.log('Triângulo Escaleno');
    }

} else {
    console.log('Os lados não podem formar um triângulo.');
}
