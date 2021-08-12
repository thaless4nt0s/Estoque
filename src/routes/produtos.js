const express = require("express")
const router = express.Router()
const database = require("../../config/database")
const Produto = require("../models/produtos")

router.get("/", async (req, res) => {
    try {
        await database.sync()
        const resultado = await Produto.findAll()
        res.status(200).json(resultado)
    } catch (err) {
        res.status(402).json(err)
    }
})

router.post("/", async (req, res) => {
    let { nome, preco, descricao } = req.body
    try {
        await database.sync()
        const create = Produto.create({
            nome: nome,
            preco: preco,
            descricao: descricao
        })
        res.status(200).json(create)
    } catch (err) {
        res.status(402).json(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await database.sync()
        const productToDelete = await Produto.findByPk(req.params.id)
        productToDelete.destroy()
        res.status(200).json("ok")
    } catch (err) {
        res.status(422).json(err)
    }
})

module.exports = router