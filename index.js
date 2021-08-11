(async ()=>{
    const database = require("./config/database")
    const Produto = require("./models/produtos")
    try{
        const resultado = await database.sync()
        const resultadoCreate = await Produto.create({
            nome: "mouse",
            preco: 10,
            descricao: "Um mouse USB bonitão"
        })
        console.log(resultadoCreate)

    }catch(error){
        console.log(error)
    }
})
()