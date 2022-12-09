
const carteira = [ 2, 10, 5, 10, 20, 2, 5, 100, 50, 50, 10, 50, 10, 5, 2, 10, 50, 2, 100, 200, 200, 10, 5, 2, 100, 5, 2, 20, 2, 10, 50, 100, 10, 5, 2, 20, 10, 5, 10, 50, 20, 200, 2, 10, 50, 5, 5, 5, 10, 10, 10, 2, 20, 50, 10, 100, 20, 2, 10, 5, 5, 10, 5, 10, 2, 10, 2, 10, 50, 10, 20, 50, 20, 2, 10, 5, 20, 10, 50, 10, 5, 2, 10, 20, 2, 10, 5, 50, 100, 50, 100, 2, 10, 20, 50, 2, 5, 5, 10, 2]

const exibirLista = () => {
    const divTeste = document.querySelector("body div")
    for(let i = 0; i < carteira.length; i++){
        if(carteira[i] === 2){
            divTeste.innerHTML += ` 
            <span class="dois"> 
                ${carteira[i]} 
            </span>
            `
        }else if(carteira[i] === 10){
            divTeste.innerHTML += ` 
            <span class="dez"> 
                ${carteira[i]} 
            </span>
            `
        }else if(carteira[i] === 5){
            divTeste.innerHTML += ` 
            <span class="vinte"> 
                ${carteira[i]} 
            </span>
            `
        }else if(carteira[i] === 20){
            divTeste.innerHTML += ` 
            <span class="cem"> 
                ${carteira[i]} 
            </span>
            `
        }else if(carteira[i] === 50){
            divTeste.innerHTML += ` 
            <span class="cinquenta"> 
                ${carteira[i]} 
            </span>
            `
        }else if(carteira[i] === 200){
            divTeste.innerHTML += ` 
            <span class="duzentos"> 
                ${carteira[i]} 
            </span>
            `
        }
    }
}
exibirLista()

function soma(){
    let soma = 0
    for(let valor in carteira){
        soma += carteira[valor]
    } return soma
}

soma()
console.log(soma(carteira))

const dois = []
qnt = 0

function notaDois(){
    for(let i = 0; i < carteira.length; i++){
        if (carteira[i] === 2){
            qnt += 1
            console.log(qnt)
        }
    }
}

var estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA", "SP"];
var buscar = "SP";
var indice = estados.indexOf(buscar);
while(indice >= 0){
    estados.splice(indice, 1);
    indice = estados.indexOf(buscar);
}
console.log(estados);