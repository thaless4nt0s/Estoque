const express = require("express")
const router = express.Router()
const database = require("../../config/database")
const Produto = require("../models/produtos")

router.get("/", async (req, res)=>{
    try{
        await database.sync()
        const resultado = await Produto.findAll()
        res.status(200).json(resultado)
    }catch(err){
        res.status(402).json(err)
    }
})



module.exports = router