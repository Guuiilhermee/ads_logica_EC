import leia from 'readline-sync'
import { DIFICULDADES } from './config/config.js'
import { jogo } from './objects/jogo.js'

function mostrarMenu(){
    console.log("======================")
    console.log("   JOGO DA COBRINHA   ")
    console.log("======================")

    console.log("1 - Fácil")
    console.log("2 - Médio")
    console.log("3 - Difícil")

    console.log("Escola a opção")

    var opcao = leia.questionInt("Escolha uma opcao: ")
    var dificuldade = DIFICULDADES[opcao]

    if(dificuldade === undefined){
        console.log("Opção inválida")
        return;
    }
    jogo.iniciar(dificuldade)
}
mostrarMenu()