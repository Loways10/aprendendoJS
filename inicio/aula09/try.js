// valor = 1
try{
    valor
}catch(err){
    console.error(err.message) // Mensagem de erro
    console.error(err.name) // Nome / Tipo do erro
    console.error(err.stack) // Bloco de todo o erro
}finally{
    console.log('Boa noite!')
}