const url = "https://api-burb.onrender.com/api"

const listAllPackages = async () => {
    const response = await fetch(`${url}/packages`)
    const data = await response.json()
    // console.log(response)
    for(let i = 0; i < data.results.length; i++){
        console.log(data.results[i])
    }
}

listAllPackages()