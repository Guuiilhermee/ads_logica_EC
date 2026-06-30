import leia from 'readline-sync';

var nota1 = leia.questionFloat("NOTA 1");
var maiorNota = nota1;
var menorNota = nota1;

var nota2 = leia.questionFloat("NOTA 2");
maiorNota = (nota2 > maiorNota) ? nota2 : maiorNota;
menorNota = (nota2 < menorNota) ? nota2 : menorNota;

var soma = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) - (maiorNota + menorNota);


