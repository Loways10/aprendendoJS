// Malha de repetição

const loopWhile = () =>{
    let opcao = 10
    while (opcao != -1){
        opcao = getRandomInt(5, -5)
        console.log(`Opção: ${opcao}`)
    }
}

const loopDoWhile = () => {
    let opcao = -1
    do{
        opcao = getRandomInt(5, -5)
        console.log(`Opção: ${opcao}`)
    }while(opcao != -1)
}

const loopFor = () =>{
    for(i = 0; i < 10; i++){
        console.log(`i = ${i}`)
    }
}

const loopFor2 = () => {
    const notas = [9.5, 5.7, 6.9, 7.3, 8.2, 4.1]
    for(let i in notas){
        console.log(notas[i])
    }
}

const getRandomInt = (max, min) =>{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// loopFor2()
// loopFor()

// loopWhile()
// loopDoWhile()

// Exercicio 1, fazer um contador exibindo os numeros de 1 até 50 na tela.
const contador = () =>{
    for(i = 1; i < 51; i++){
        console.log(`i = ${i}`)
    }
}
// contador() 

// Exercicio 2, fazer um programa para encontrar todos os numeros pares entre 1 e 100
const contador2 = () =>{
    for(i = 1; i < 101; i++){
        if(i % 2 == 0){
            console.log(`i = ${i}`)
        }
    }
}

// contador2()

// Exercicio 3, ler um valor inteiro(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido
const valor = getRandomInt(10, 1)
    for(n = 1; n < 11; n++){
        console.log(`${valor} X ${n} = ${valor * n}`)
    }

