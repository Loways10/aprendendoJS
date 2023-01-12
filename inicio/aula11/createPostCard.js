function createPostCard({qtyComments, title, description, imgUrl, link}){
    const a = document.createElement('a')
    const div = document.createElement('div')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const icon = document.createElement('img')

    const com = document.createElement('span')

    const iconCom = document.createElement('span')
    iconCom.classList.add('material-symbols-outlined')
    iconCom.innerText = 'comment'

    //console.log(qntComments.length)

    h3.innerText = title
    p.innerText = description

    com.innerHTML = `${qtyComments} <span class="material-symbols-outlined">comment</span>`

    //com.appendChild(iconCom)

    icon.setAttribute('src', imgUrl)
    
    //console.log(await returnImg(data[i].userId))

    

    div1.appendChild(icon)

    div2.appendChild(h3)
    div2.appendChild(p)
    div2.appendChild(com)

    div.appendChild(div1)
    div.appendChild(div2)

    a.appendChild(div)
    a.setAttribute('href', link)

    return a
}