const Sequelize = require('sequelize')
const sequelize = new Sequelize("estoque","root", "",{
    host: "localhost",
    dialect: "mysql"
})

try{
    await sequelize.authenticate()
    console.log("Conexão iniciada com sucesso !!!")
}catch(err){
    console.log(`Erro na conexão: ${err}`)
}

module.exports = sequelize