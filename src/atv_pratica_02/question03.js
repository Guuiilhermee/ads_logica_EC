import leia from 'readline-sync';

var pontosGols = leia.questionInt("INFORME A QUANTIDADE DE GOLS") * 50;
var pontosPassesCertos = leia.questionInt("INFORME A QUANTIDADE DE PASSES CERTOS") * 10;
var pontosPassesErrados = leia.questionInt("INFORME A QUANTIDADE DE PASSES ERRADOS") * 5;

var pontuacao = pontosGols + pontosPassesCertos - pontosPassesErrados;