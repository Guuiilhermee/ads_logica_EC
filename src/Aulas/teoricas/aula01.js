// console.log('Olá, Mundo!!!')

import leia from 'readline-sync'

let nome = leia.question("Digite seu nome: ")
console.log(`Olá ${nome} tudo bem?`)

let idade = leia.questionInt(`${nome}, Qual e a sua idade? `)
// let titulo = leia.question(`${nome}, Voce possui titulo de eleitor? `)

if(idade >= 16){
    let temTitulo = leia.keyInSelect(["Sim", "Nao"], "Voce tem titulo de Eleitor? ") + 1
    if(temTitulo === 1){
        console.log(`${nome} Pode votar`)
    }else{
        console.log(`${nome} Não pode votar`)
    }
}else{
    console.log(`${nome} Não pode votar`)
}