import leia from 'readline-sync';

var pontosGols = leia.questionInt("INFORME A QUANTIDADE DE GOLS: ") * 50;
var pontosPassesCertos = leia.questionInt("INFORME A QUANTIDADE DE PASSES CERTOS: ") * 10;
var pontosPassesErrados = leia.questionInt("INFORME A QUANTIDADE DE PASSES ERRADOS: ") * 5;

var pontuacao = pontosGols + pontosPassesCertos - pontosPassesErrados;

console.log('Pontuação da partida: ' + pontuacao)

if(pontuacao < 50){
    console.log('Péssima partida')
}else if(pontuacao <= 100){
    console.log('Partida ruim')
}else if(pontuacao <= 150){ 
    console.log('Fez o básico')
}else if(pontuacao <= 200){
    console.log('Boa partida')
}else{
    console.log('Jogou demais')
}