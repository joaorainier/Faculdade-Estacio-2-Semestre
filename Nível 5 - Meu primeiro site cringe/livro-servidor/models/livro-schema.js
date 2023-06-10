const banco = require("./conexao")
const { Schema } = banco;



const livroSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        require: false
    },
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores:[String]
})

const Livro = banco.model("Livro", livroSchema)

module.exports = Livro