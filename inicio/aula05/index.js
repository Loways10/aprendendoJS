function somar(a, b){
    console.log( a + b)
}
somar(15, 2)

function returnSoma(a, b = 0){
    return a + b
}
console.log(returnSoma(5, 2))

// Armazenar uma função em uma variavel
const vlSomar = function(a, b){
    console.log(a + b)
}
vlSomar(1, 5)

// Arrow Function
const soma = (a, b) => {
    // Bloco Lógico
    console.log('teste arrow')
}

console.log(soma())

const subtracao = (a, b) => a - b

console.log(subtracao (15, 3))