console.log("Hello, World!")

// Isto é linha de comentário in-line

/* 
    Isto é um comentario em bloco
    pode utilizar varias 
    linhas 

*/

{
    console.log("Foi asssim")
    console.log("Assim também")
}

numero = "uma string "
console.log("Valor do Numero: ", numero)
console.log(typeof numero)

// Declarando variaveis

var a = 10
let b = 15
console.log(a, b)

var a = 20
// let b = 15 não deixa criar outro let pois ja foi criado um igual mas pode alterar
b = 25
console.log(a, b)

const c = "Alunos" // não sobrescreve nem recria
console.log(c)