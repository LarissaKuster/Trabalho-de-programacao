const sequelize = require("sequelize");
require('dotenv').config()

const conexao = new sequelize(
    "biblioteca_trabalho",
    "root",
    "root",
    {
        dialect:"mysql",
        host:process.env.DB_HOST
    }
)

module.exports = { conexao }