const url = 'https://jsonplaceholder.typicode.com/posts'
const urlParams = new URLSearchParams(window.location.search)

let itens = 0
let number = 0
let data = '' // Dados de todos os posts
const qntArtigos = 15


const allPosts = async () => {
    if(!data){
        const response = await fetch(`${url}`)
        data = await response.json()
        // console.log(data)
        // Quantas paginas devem ter para aparecer todos os artigos
        itens = Math.ceil(data.length / qntArtigos) // 20 artigos por pagina
        //console.log(itens)
    }
    
    
    const article = document.querySelector('main article')
    article.innerHTML = ''

    for(let i = number; i < (qntArtigos + number); i++){
        //console.log(data[i].id, data[i].userId, data[i].title, data[i].body)
        
        const comments = await returnComments(data[i].id)
        //console.log(qntComments.length)

        const title = data[i].title
        const description = data[i].body.replaceAll('\n', '')
        const imgUrl = await returnImg(data[i].userId)
        const link = `post.html?id=${data[i].id}`

        const postCard = createPostCard({qtyComments: comments.length, title, description, imgUrl, link})
        console.log(postCard)
        document.querySelector('main article').appendChild(postCard)

        removeView()
    }
    
    const buttons = document.querySelectorAll('main #buttons button')
    //console.log(buttons)
    if(!buttons.length){
        for(let i = 0; i < itens; i++){
            const button = document.createElement('button')
            button.innerText = i + 1 // exibe i + 1
            button.setAttribute('name', i) // nome = i
            button.addEventListener('click', alterPage)
            document.querySelector('main #buttons').appendChild(button)
        }
    }
    
}

function alterPage(e){
    //console.log(e.target.name)
    number = qntArtigos
    number = number * Number(e.target.name)
    allPosts()
    window.scrollTo(0, 0)
}

const readPost = () => {
    fetch(`${url}/${urlParams.get('id')}`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data.title)
        //console.log(data.body)
        //console.log(data.userId)
        //console.log(data.id)

        const article = document.querySelector('main article')

        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const icon = document.createElement('img')

        returnImg(data.userId)
        .then((res) => {
            icon.setAttribute('src', res)
        })
        

        h3.innerText = `${data.title}`
        p.innerText = `${data.body.replaceAll('\n', '')}`

        div.appendChild(icon)
        div.appendChild(h3)
        div.appendChild(p)

        article.appendChild(div)

        listCommentsPost(data.id)

        removeView()
    })
    .catch((error) => {
        console.log(error)
    })
}

const listCommentsPost = (id) => {
    fetch(`${url}/${id}/comments`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)

        for(let i = 0; i < data.length; i++){
            //console.log(data[i].name, data[i].body, data[i].email, data[i].id, data[i].postId )
            
            const div = document.createElement('div')
            const icon = document.createElement('img')
            const name = document.createElement('p')
            const email = document.createElement('p')
            const msg = document.createElement('p')

            name.innerText = `Nome: ${data[i].name}`
            email.innerText = `Email: ${data[i].email}`
            msg.innerText = `Comentario:\n ${data[i].body.replaceAll('\n', '')}`

            returnImg(data[i].id)
            .then((linkImg) => icon.setAttribute('src', linkImg))

            div.appendChild(icon)
            div.appendChild(name)
            div.appendChild(email)
            div.appendChild(msg)

            document.querySelector('main section.content-comments').appendChild(div)
        }

        document.querySelector('main .c-loader').classList.add('hiden')
        document.querySelector('main section.content-comments').classList.remove('hiden')
    })
    .catch((error) => console.log(error))
}

const toComment = (e) => {
    e.preventDefault()
    const name = document.getElementsByName('name')[0].value
    const email = document.getElementsByName('email')[0].value
    const message = document.getElementsByName('message')[0].value
    //console.log(name, email, message)

    // Criando um objeto
    const body = {
        body: message,
        email: email,
        name: name
    }

    fetch(`${url}/${urlParams.get('id')}/comments`,
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    body:message,
                    email,
                    name,
                }
            ),
            headers: {
                'Content-type':'application/json; charset=UTF-8'
            }
        }
    )
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        writeComment(data)
    })

    document.querySelector('main section form').reset()
    window.scrollTo(0, window.innerHeight)
}

function writeComment(data){
    const div = document.createElement('div')
    const icon = document.createElement('img')
    const name = document.createElement('p')
    const email = document.createElement('p')
    const msg = document.createElement('p')

    name.innerText = `Nome: ${data.name}`
    email.innerText = `Email: ${data.email}`
    msg.innerText = `Comentario:\n ${data.body.replaceAll('\n', '')}`
    returnImg(data.id)
    .then((linkImg) => icon.setAttribute('src', linkImg))

    div.appendChild(icon)
    div.appendChild(name)
    div.appendChild(email)
    div.appendChild(msg)

    document.querySelector('main section.content-comments').appendChild(div)
}

const returnImg = async (id) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        return data.sprites.front_default
    }catch(error){
        console.log(error)
    }  
}

const returnComments = async (id) => {
    const response = await fetch(`${url}/${id}/comments`)
    return await response.json() 
}

function removeView(){
    document.querySelector('div.loading').classList.add('hiden')
    document.querySelector('main').classList.remove('hiden')
}

urlParams.get('id')? readPost() : allPosts()


/* 
artigos/paginas  = 20
pagina 1
comecar -> 20 *0
finalizar -> 20
pagina 2
comaçar -> 20 * 1
finalizar -> 40
    
*/