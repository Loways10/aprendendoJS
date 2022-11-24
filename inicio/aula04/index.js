// Array
const notas = [15, 18, 20]
console.log(notas[0], notas[2])
console.log(notas[1])
console.log(notas)
console.log(notas.length)

notas[16] = 8.9
console.log(notas)
console.log(notas[12])

notas.push(9.3, 7.5, 8.2, 5.1, 9.7)
console.log(notas)

notas.push("Alunos", 6, true, {id: 10})
console.log(notas)
const nomes = new Array()
const p = document.getElementById('msg')

function adicionar(e){
    e.preventDefault()
    p.innerText = ""
    const nome = document.getElementsByName("name")[0].value 
    if (nome.trim()){ //trim limpa os espaços brancos no final
        nomes.push(nome)
        p.innerText = nomes
    }else{
        p.innerText = "Digite um nome valido"
    }

    
    document.getElementsByName("name")[0].value = ""
    document.getElementsByName("name")[0].focus()
}

const alunos = {
    id: 321456,
    nome: "Gabriel",
    notas:{
        nota1: 8.6,
        nota2: 7.2,
        nota3: {
            professor: ['Junior', "Silva", "Batista"]
        },
        nota4: 6.9
    },
    faltas: [1, 2, 5, 8, 9, 16]
}

console.log(alunos)
console.log(alunos.id)
console.log(alunos.nome)
console.log(alunos.notas)

console.log(typeof alunos)

console.log(alunos.notas.nota3.professor[2])
console.log(alunos.nome)
console.log(alunos.faltas[5])

const funcionarios = []
function adicionarFuncionario(e){
    e.preventDefault()
    const funcionario = {}
    const codigo = document.getElementsByName("codigo")[0].value
    const nome = document.getElementsByName("nomeFunc")[0].value
    const salario = document.getElementsByName("salario")[0].value

    funcionario['codigo'] = codigo
    funcionario['nome'] = nome
    funcionario['salario'] = salario
    
    funcionarios.push(funcionario)
    console.log(funcionarios)
}
