const express = require("express");
const cors = require("cors");
const app = express()

app.use(cors())

app.use(express.json())
 

const livroRouter = require("./routes/livros");

app.use("/livros", livroRouter)

app.listen(3030, () => {
    console.log('Servidor Online!')
})