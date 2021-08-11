const Sequelize = require('sequelize')
const sequelize = new Sequelize("estoque","root", "",{
    host: "localhost",
    dialect: "mysql"
})


module.exports = sequelize