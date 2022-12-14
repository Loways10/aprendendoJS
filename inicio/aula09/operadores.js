console.log(`'1' == 1 ? R: ${'1' == 1 }`) 
console.log(`'1' === 1 ? R: ${'1' === 1 }`) 

console.log(`'undefined' == null ? R: ${undefined == null }`) 
console.log(`'undefined' === null ? R: ${undefined === null }`) 

// E = &&
// OU = ||
// DIF ou XOR = !=

// Operador Unário
let num = 0
num++
num--
console.log(num)

console.log(++num)
console.log(num++)
console.log(num)

// Operador Ternário  
// teste ? verdadeiro : falso
const bool = 1 > 2 ? true : false // 'verdadeiro' : 'Falso'
console.log(bool)

const nota = 4
console.log(nota > 7 ? 'Aprovado' : 'Reprovado')