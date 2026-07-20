// SENHA

import leia from 'readline-sync'

var senha = leia.question('Digite a senha: ')

if (senha === '1234') {
    console.log('Acesso permitido')
} else {
    console.log('Acesso negado')
}