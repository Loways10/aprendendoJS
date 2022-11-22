//console.log("Conectou!")

calcularSalario()
calcularPeso()
numero()

function calcularSalario(){
    //console.log("Calcular")
    const horas_trabalhadas = 60
    const sal_hora = 35.67
    
    let span = document.getElementById("salario-funcionario")
    if(horas_trabalhadas > 40){
        const adicional = (sal_hora * 1.5) * (horas_trabalhadas - 40) // adicional de 50%
        const salario = (sal_hora * 40) + adicional
        // console.log("R$ " + salario.toFixed(2))
        span.innerText = "R$ " + salario.toFixed(2)
    }else{
        const salario = sal_hora * horas_trabalhadas
        // console.log("Salario Mensal")
        // console.log("R$ " + salario.toFixed(2))
        span.innerText = "R$ " + salario.toFixed(2)
    }
}

function calcularPeso(){

    let span = document.getElementById("peso-usuario")
    const nome = "Kenji Hash"
    const altura = 1.74
    const sexo = "M"
    let peso_ideal = 0

    if(sexo == "M"){
        peso_ideal = (72.7 * altura) - 58
    }else{
        peso_ideal = (62.1 * altura) - 44.7
    }
    console.log(`${nome} seu peso ideal é ${peso_ideal}`)
    console.log(nome + " seu peso ideal é: " + peso_ideal)
    span.innerText = `${nome} seu peso ideal é ${peso_ideal}`
}

function numero(){
    const numero = document.getElementsByName("numero")[0].value
    const p = document.getElementById('verificar-p')

    if(numero == ""){
        p.innerText = "Digite um valor"
    }else{
        if(numero > 0){
            //console.log(numero + " Numero POSITIVO")
            p.innerText = numero + " Numero POSITIVO"
        }else if(numero < 0){
            //console.log(numero + " Numero NEGATIVO")
            p.innerText = numero + " Numero NEGATIVO"
        }else{
            //console.log(numero + " Numero ZERO")
            p.innerText = numero + " Numero ZERO"
        }
    }
    
}

function login(e){
    e.preventDefault()
    const user = document.getElementsByName("username")[0].value
    const pass = document.getElementsByName("password")[0].value
    console.log(user, pass)
    if(user != "loways"){
        document.getElementById('res-server').innerText = "Usuario não encontrado"
        document.getElementById("res-server").style.display = "block"
    }else{
        document.getElementById('res-server').innerText = "Usuario Conectado <3"
    }
}