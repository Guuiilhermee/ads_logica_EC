import leia from 'readline-sync';

// CRIA LISTA
var listaInformacoes = [
    "Gustavo",
    15,
    "Masculino",
    "Estudante",
    true,
]

function info() {

    console.log(listaInformacoes);
    console.log(listaInformacoes[0]);
    console.log(listaInformacoes[1]);
    console.log(listaInformacoes[2]);
    console.log(listaInformacoes[3]);
    console.log(listaInformacoes[4]);

    // ADICIONA EM POSIÇÃO ESPECÍFICA
    var contador = 3;
    listaInformacoes[contador] = "Senai";
    console.log(listaInformacoes[3]);
    
    // ADICIONA NO FINAL DA LISTA
    listaInformacoes.push("De Jesus");
    console.log(listaInformacoes[5]);
    
    // SUBSTITUI ITEM DA POSIÇÃO
    listaInformacoes[1] = 16
    console.log(listaInformacoes[1]);
    
    // TAMANHO DA LISTA
    console.log(listaInformacoes.length);
    
    // PRIMEIRO ITEM DA LISTA
    console.log(listaInformacoes[0]);

    // ULTIMO ITEM DA LISTA
    console.log(listaInformacoes[listaInformacoes.length - 1]);

    // PERCORRER LISTA
    listaInformacoes.forEach((item, index) => {
        listaInformacoes[2] = "Homem";
    });
    /* OU
    for(var i = 0; i < listaInformacoes.length; i++){
        if(listaInformacoes[i] === "Masculino"){
            listaInformacoes[i] = "Homem";
        }
    }*/
    
    console.log(listaInformacoes);
}

info();


// CRIA LISTA
var listaNomes = ["Joãozinho", "Mariazinha", "Pedrinh"];

// // MOSTRA LISTAGEM
// console.log(listaNomes);
// console.log(listaNomes[1])
// console.log(listaNomes[2])

// // ADICIONA EM POSIÇÃO ESPECIFICA
// var contador = 3;
// listaNomes[contador] = "Carlinh"
// console.log(listaNomes);

// // ADICIONA NO FINAL DA LISTA
// listaNomes.push("Thiaguinh")
// console.log(listaNomes);

// // ADICIONAR NO INICIO
// listaNomes.unshift("Daniel")
// console.log(listaNomes);

// // REMOVER ULTIMA POSICAO
// listaNomes.pop();
// console.log(listaNomes);

// // REMOVER PRIMEIRO POSICAO
// listaNomes.shift();
// console.log(listaNomes);

// // SUBSTITUI ITEM DA POSIÇÃO 1
// listaNomes[1] = "Lucas"
// console.log(listaNomes)

// // TAMANHO DA LISTA 
// console.log(listaNomes.length)

// // ULTIMO ITEM DA LISTA
// console.log(listaNomes[listaNomes.length - 1]);

// // PRIMEIRO ITEM DA LISTA
// console.log(listaNomes[0]);

// // PERCORRER LISTA
// for (var contador = 0; contador < listaNomes.length; contador++) {
//     listaNomes[contador] = "NADA";
// }
// console.log(listaNomes)

// listaNomes.forEach((item, index) => {
//     listaNomes[index] = "NADA 2"
// })
// console.log(listaNomes)


var matriz = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

// import leia from 'readline-sync';

function pedirPosicao(index) {
    var linha = leia.questionInt("DIGITE A LINHA: ");
    var coluna = leia.questionInt("DIGITE A COLUNA: ");
    matriz[linha][coluna] = index % 2 === 0 ? "X" : "0";
}

function desenharJogoDaVelha() {
    for (var i = 0; i < matriz[0].length; i++) {
        console.log("  " + matriz[i][0] + " | " + matriz[i][1] + " | " + matriz[i][2])
        if (i < 2) {
            console.log("--------------")
        }
    }
    console.clear();
}

for (var i = 0; i < 9; i++) {
    pedirPosicao(i);
    desenharJogoDaVelha();
}