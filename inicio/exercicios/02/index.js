const usuario = "Akio"
const senha = "1234"

const p = document.getElementById('confirma')
function entrar(e){
    e.preventDefault()
    p.innerText = ""
    const usu = document.getElementsByName("usuario")[0].value
    const sen = document.getElementsByName("password")[0].value
    if(usu == "" || sen == ""){
        p.innerText = 'Ambos os campos devem ser preenchidos'
        alert("Os campos são obrigatórios")
        if(usu == "Akio" && sen == "1234"){
            p.innerText = 'Logado'
        }else{
            p.innerText = 'Usuário ou senha incorretos!'
        }
    }
    document.getElementsByName("usuario")[0].value = ""
    document.getElementsByName("password")[0].value = ""
}