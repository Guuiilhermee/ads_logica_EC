import leia from 'readline-sync';

var vitorias = leia.questionInt("INFORME NUMERO DE VITORIAS: ");
var empates = leia.questionInt("INFORME NUMERO DE EMPATES: ");
var derrotas = leia.questionInt("INFORME NUMERO DE DERROTAS: ");

var pontuacao = (vitorias * 3) + (empates * 1) + (derrotas * 0);

if (pontuacao >= 70) {
    console.log("CAMPEÃOOO!")
} else if (pontuacao > 45 && pontuacao < 70) {
    console.log("CLASSIFICADO!")
} else {
    console.log("REBAIXADO!")
}

