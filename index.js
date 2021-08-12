(async () => {
    const database = require("./config/database")
    const Produto = require("./src/models/produtos")
    try {
        const resultado = await database.sync()
        /* const resultadoCreate = await Produto.create({
            nome: "mouse",
            preco: 10,
            descricao: "Um mouse USB bonitão"
        }) 
        console.log(resultadoCreate)*/
        const produtos = await Produto.findAll()
        /*  const prod = await Produto.findByPk(9)
        prod.nome = "Dente de Ouro !"
        prod.save()
        console.log(prod) */
        Produto.destroy({ where: { id: 9 } })
        console.log(produtos)
    } catch (error) {
        console.log(error)
    }
})
    ()