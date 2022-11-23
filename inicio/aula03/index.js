const body = document.body

// NUMEROS
body.innerHTML += "<h1> NUMBERS </h1>"
const x = 2
const y = 4
const pi = 3.141592

console.log('Potência')
console.log(Math.pow(x, y))
body.innerHTML = returnTextEdit('Potência', 'Math.pow(x, y)')
body.innerHTML += returnTextEdit(`${x} <sup>${y} </sup> = `, Math.pow(x, y))
        // `<p> 
        //     A Potencia é executada utilizando o metodo Math.sqrt(x) 
        //     : ${x} <sup>${y}</sup> = ${Math.pow(x, y)}
        // </p>`

console.log('Raiz Quadrada')
console.log(Math.sqrt(y))
body.innerHTML += returnTextEdit('Raiz Quadrada', 'Math.sqrt(x)')
body.innerHTML += returnTextEdit(`V${y} = `, Math.sqrt(y))

console.log('PI')
console.log(Math.PI)
body.innerHTML += returnTextEdit('PI', 'Math.PI')
body.innerHTML += returnTextEdit(`PI = `, Math.PI)

console.log('Arredondamento')
console.log(Math.ceil(pi)) // arredonda pra cima
console.log(Math.floor(pi)) // arredonda pra baixo
console.log(Math.round(pi)) // arredonda para o mais proximo
console.log(Math.trunc(pi)) // arredonda para o inteiro mais proximo

body.innerHTML += returnTextEdit('', 'Arredondamento')
body.innerHTML += returnTextEdit(`Arredonda para cima `, "Math.ceil(pi)")
body.innerHTML += returnTextEdit(`${pi} = `, Math.ceil(pi))
body.innerHTML += returnTextEdit(`Arredonda para baixo  `, "Math.floor(pi)")
body.innerHTML += returnTextEdit(`${pi} = `, Math.floor(pi))
body.innerHTML += returnTextEdit(`Arredonda para o inteiro mais proximo  `, "Math.round(pi)")
body.innerHTML += returnTextEdit(`${pi} = `, Math.round(pi))
body.innerHTML += returnTextEdit(`Exclui casas decimais  `, "Math.trunc(pi)")
body.innerHTML += returnTextEdit(`${pi} = `, Math.trunc(pi))

console.log('Aleatorio')
console.log(Math.random()) // Sempre da um numero aleatorio entre 0 e 1
console.log(Math.random() * 10) // multiplica para aumentar o random
console.log(getRandomInt(50, 100))
body.innerHTML += returnTextEdit(`Aleatório  `, "Math.random()")
body.innerHTML += returnTextEdit("Math.floor(Math.random() * 10) = ", Math.random() * 10)

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
function returnTextEdit(texto, strong){
    return `<p>${texto} <strong>${strong}</strong></p>`
}





// Strings
body.innerHTML += "<h1> Strings </h1>"
const curso = 'Quattro Edtech'
console.log(curso)
console.log(curso.length)

body.innerHTML += returnTextEdit("Verificar Tamanho", "str.lengh")
body.innerHTML += returnTextEdit("Verificar Tamanho", curso.length)


console.log('Upper Case')
console.log(curso.toUpperCase())
console.log(curso.toLowerCase())

console.log(curso.charAt(10))
console.log(curso.charAt(14))
console.log(curso.indexOf("E"))
console.log(curso.charCodeAt(0))

console.log(curso.substring(10))
console.log(curso.substring(10, 13))
console.log(curso.slice(-2))

console.log(curso)
console.log(curso.replace('E', "X"))
console.log(curso.replaceAll('t', "X"))

const alunos = "Akio;Sayumi;Kenji;Emerson;Mateus;Davi;Igor;Felipe;Erick"
console.log(alunos)
const list_alunos = alunos.split(';')
console.log(list_alunos)




// Booleans
body.innerHTML += "<h1> Booleans </h1>"
let continuar = true
console.log(continuar)
continuar = false
console.log(continuar)
console.log(typeof continuar)

continuar = 0
console.log(typeof continuar)
console.log(continuar)

console.log('Teste bool')
continuar = false
console.log(!!continuar)
continuar = true
console.log(!!continuar)

console.log('Verdadeiros')
console.log(!!15)
console.log(!!" ")
console.log(!!"Texto de teste")
console.log(!![])
console.log(!!{})

console.log('Falsos')
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)

