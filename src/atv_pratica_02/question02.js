import leia from 'readline-sync';

var nota1 = leia.questionFloat("NOTA 1: ");
var maiorNota = nota1;
var menorNota = nota1;

var nota2 = leia.questionFloat("NOTA 2: ");
maiorNota = (nota2 > maiorNota) ? nota2 : maiorNota;
menorNota = (nota2 < menorNota) ? nota2 : menorNota;

var nota3 = leia.questionFloat("NOTA 3: ");
maiorNota = (nota3 > maiorNota) ? nota3 : maiorNota;
menorNota = (nota3 < menorNota) ? nota3 : menorNota;

var nota4 = leia.questionFloat("NOTA 4: ");
maiorNota = (nota4 > maiorNota) ? nota4 : maiorNota;
menorNota = (nota4 < menorNota) ? nota4 : menorNota;

var nota5 = leia.questionFloat("NOTA 5: ");
maiorNota = (nota5 > maiorNota) ? nota5 : maiorNota;
menorNota = (nota5 < menorNota) ? nota5 : menorNota;

var nota6 = leia.questionFloat("NOTA 6: ");
maiorNota = (nota6 > maiorNota) ? nota6 : maiorNota;
menorNota = (nota6 < menorNota) ? nota6 : menorNota;

var soma = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) - (maiorNota + menorNota);
var media = soma / 4
console.log(media.toFixed(2))


