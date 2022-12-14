// COM OBJETO
const aluno = {
    nome: 'Akio',
    idade: 24,
    contato: {
        telefone: '(21)99685 - 3807',
        email: 'hattori_akio@hotmail.com'
    },
}

const {nome, idade} = aluno
console.log(nome, idade) // console.log(aluno.nome, aluno.idade)

const {nome: nome_aluno, idade: idade_aluno} = aluno
console.log(nome_aluno, idade_aluno)

const{turma = 101, med = 6} = aluno
console.log(turma, med) // Não cria lá encima no OBJETO ALUNO
console.log(aluno)

const {contato} = aluno
console.log(contato)
console.log(contato.email, contato.telefone)

const {contato: {telefone, email, instagram = "@loways"}} = aluno
console.log(telefone, email, instagram)

// const {nota: {nota1, nota2}} = aluno #ERRO
// console.log(nota1, nota2)

// COM ARRAY
const numeros = [10, 20, 30, 40]

const [n1, n2, n3, n4] = numeros
console.log(n1, n2, n3, n4)

// COM FUNÇÕES


// OBJETO
function getRandomOnj({min = 0, max = 100}){
    return Math.floor(Math.random() * (max - min) + min) 
}

const obj = {
    max: 30,
    min: 10
}
console.log(getRandomOnj(obj))
console.log(getRandomOnj({max: 50, min: 40}))
console.log(getRandomOnj({min: 90}))
console.log(getRandomOnj({}))

// ARRAY

function getRandomArray([min = 100, max = 2000]){
    // if(min > max)
    //     [min, max] = [max, min]
    return Math.floor(Math.random() * (max - min) + min)
}

const a = [600, 605]
console.log(getRandomArray(a))
console.log(getRandomArray([905, 907]))
console.log(getRandomArray([905]))
console.log(getRandomArray([, 907]))
