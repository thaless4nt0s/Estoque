const express = require("express")
const app = express()
const produtoRouter = require("./src/routes/produtos")
require("./config/database")

app.use(express.json())
app.use("/produtos", produtoRouter)

app.listen(3000, () => {
    console.log('Conectado com sucesso')
})