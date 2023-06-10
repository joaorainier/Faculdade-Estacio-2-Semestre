const banco = require('mongoose');




async function conectar() {
    try {
        await banco.connect("mongodb+srv://leandro:tDQI9Cyh9YJlseC8@livraria.kmvr13x.mongodb.net/?retryWrites=true&w=majority")
        console.log("conectou ao bd")
    } catch (error) {
        console.log(error)
    }
} 
    
conectar()

module.exports = banco