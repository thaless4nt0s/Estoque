const Sequelize = require("sequelize")
const database = require("../config/database")

const Produto = database.define('produtos',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});