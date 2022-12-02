const alunos = []

const formulario = (e) =>{
    e.preventDefault()
    console.log(e.submitter.defaultValue)
    switch(e.submitter.defaultValue){
        case "Cadastrar":
            //faça tal coisa
            cadastrarAluno()
            break
        case "Alterar":
            console.log('Chamar função Alterar')
            //faça tal coisa
            break
        case "Pesquisar":
            console.log('Chamar função Pesquisar')
            //faça tal coisa
            break
        default:
            console.log('Chamar função default')
            //faça tal coisa
            break

    }
}

const cadastrarAluno = () => {
    const nome = document.getElementsByName('name')[0].value.trim().toUpperCase()
    const media = Number(document.getElementsByName('mean')[0].value.replace(",", "."))
    let situacao
    if(media < 6){
        situacao = "REPROVADO"
    }else{
        situacao = "APROVADO"
    }
    const id = returnLastID(alunos)
    console.log(nome, media, situacao, id)
    const aluno = {
        id: id,
        nome: nome,
        media: media,
        situacao: situacao
    }
    alunos.push(aluno)
    exibirTabela(alunos)
    limparCampos()
}

const returnLastID = (array) =>{
    if(!array.length){
        return 1
    }else{
        return array[array.length - 1].id + 1
    }
}

const exibirTabela = (array) => {
    const tbody = document.querySelector('table tbody')
    tbody.innerHTML = ""
    if(!array.length){
        tbody.innerHTML = `
        <tr>
            <td colspan="4"> Aluno não encontrado </td>
        </tr>
        `
    }else{
        for(let i = 0; i < array.length; i++){
            tbody.innerHTML +=
            `
            <tr>
                <td>${array[i].id}</td>
                <td>${array[i].nome}</td>
                <td>${array[i].media}</td>
                <td>${array[i].situacao}</td>
            </tr>
            `
        }
    }
}

function limparCampos(){
    document.querySelector("form").reset()
    document.getElementsByName("name")[0].focus()
}