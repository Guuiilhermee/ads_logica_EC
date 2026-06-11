// QTD DIAS NO MÊS

import leia from 'readline-sync'

var mes = leia.questionInt('Digite o numero do mes: ')

if(
    mes === 1 || mes === 3 || mes === 5 ||
    mes === 7 || mes === 8 || mes === 10 ||
    mes === 12
){
    console.log('Esse mês tem 31 dias');
}else if(
    mes === 4 || mes === 6 ||
    mes === 9 || mes === 11
){
    console.log('Esse mês tem 30 dias');
}else if (mes === 2) {
    console.log('Esse mês tem 28 ou 29 dias');
}else{
    console.log('Mês inválido');
}