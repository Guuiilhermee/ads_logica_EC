import leia from 'readline-sync'

/*
var nome = "Guilherme"
nome = "Guilherme Ambrósio"

var idade1 = "22"
var idade2 = 22

if(idade1 == idade2){ // OPERADOR DE IGUALDADE (VALOR)
    console.log("São iguais (==)")
}
if(idade1 === idade2){
    console.log("São iguais (===)")
}else{
    console.log("Não são iguais")
}
*/

var nota1, nota2, nota3

nota1 = leia.questionFloat('Digite a primeira nota: ')
nota2 = leia.questionFloat('Digite a segunda nota: ')
nota3 = leia.questionFloat('Digite a terceira nota: ')

var soma = nota1 + nota2 + nota3
var media = soma / 3

console.log(`A média do aluno é: ${media.toFixed(2)}`)