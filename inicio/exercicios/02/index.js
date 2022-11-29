const usuario = "Akio"
const senha = "1234"

const p = document.getElementById('confirma')
function entrar(e){
    e.preventDefault()
    p.innerText = ""
    const log = document.getElementById("login")
    const usu = document.getElementsByName("usuario")[0].value
    const sen = document.getElementsByName("password")[0].value
    if(usu == "" || sen == ""){
        p.innerText = 'Ambos os campos devem ser preenchidos'
        alert("Os campos são obrigatórios")
    }else{
        if(usu == "Akio" && sen == "1234"){
            p.innerText = 'Logado'
            if(log.style.display === "none"){
                log.style.display = "block"
            }else{
                log.style.display = "none"
            }
        }else{
            p.innerText = 'Preencha corretamente os campos'
        }
    }
    document.getElementsByName("usuario")[0].value = ""
    document.getElementsByName("usuario")[0].focus()
    document.getElementsByName("password")[0].value = ""
}
