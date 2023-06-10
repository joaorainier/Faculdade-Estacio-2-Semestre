const Livro = require('./livro-schema');


const obterLivros = async (req, res) => {
 
    const retorno =  await Livro.find()
    res.status(200).json(retorno)
    
    
    
}

const incluir = async (req, res) => {
    try {
        console.log("POST", req.body)
        const livro = {
            titulo: req.body.titulo,
            codEditora: req.body.codEditora,
            resumo: req.body.resumo,
            autores: req.body.autores
        }
        console.log(livro)
        const retorno = Livro.create(livro)
        res.status(201).json(retorno)

    } catch (error) {
        res.status(500).json({msg: "Ocorreu algum erro"})
    }
}

const excluir = async (req, res) => {
    try {
        console.log("DELETE", req.params.id)
        const retorno =  await Livro.findByIdAndDelete(req.params.id);
        
        res.status(201).json(retorno)
        
    } catch (error) {
        res.status(500).json({msg: "Ocorreu algum erro"})
    }
    
    
    
}   

module.exports = {
    obterLivros,
    incluir,
    excluir
}