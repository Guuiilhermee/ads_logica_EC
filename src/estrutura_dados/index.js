import leia from 'readline-sync'
import {exercicio03} from './exercicios/03_exercicio.js'

console.log("=== MENU EXERCÍCIOS ===")
var opcao = leia.keyInSelect([
    "Exercicio 01",
    "Exercicio 02",
    "Exercicio 03",
    "Exercicio 04",
    "Exercicio 05",
    "Exercicio 06"
])

switch(opcao){
    case 0: 
        break;
    case 1:
        break;
    case 2:
        exercicio03()
        break;
}