import leia from 'readline-sync'

var idade = leia.questionInt('Digite sua IDADE: ');
var salario = leia.questionFloat('Digite seu SALARIO: ');
var nomeLimpo = leia.keyInSelect(["SIM", "NAO"])

var resquisitosAtendidos = 0

if(idade >= 18){
    resquisitosAtendidos++;
}

if(salario >= 2500){
    resquisitosAtendidos++;
}

if(nomeLimpo === 0){
    resquisitosAtendidos++;
}

var result = resquisitosAtendidos === 3 ? "APROVADO" : resquisitosAtendidos === 2 ? "ANÁLISE" : "REPROVADO"
console.log(`EMPRESTIMO: ${result}`)