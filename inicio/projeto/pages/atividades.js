const url = 'https://api-burb.onrender.com/api'

const listActivities = async () => {
    try{
        const response = await fetch(`${url}/activities`)
        const data = await response.json()
        console.log(data)
        showActivities(data.results)
    }catch(error){
        console.log(error.message)
    }
}

const showActivities = (data) => {
    const activities = document.querySelector('main .activities .card-content')
    for(let i = 0; i < data.length; i++){
        const link = document.createElement('a')
        link.setAttribute('href', `atividade.html?id=${data[i].id}`)

        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = data[i].imagens[0]

        const left = document.createElement('div')
        left.classList.add('left')

        const titulo = document.createElement('p')
        titulo.innerText = data[i].nome
        left.appendChild(titulo)

        const right = document.createElement('div')
        right.classList.add('right')

        const preco = document.createElement('p')
        preco.innerText = `R$ ${(data[i].preco / 100)}`
        right.appendChild(preco)

        card.appendChild(img)
        card.appendChild(left)
        card.appendChild(right)

        link.appendChild(card)

        activities.appendChild(link)
    }
}

listActivities()