const sequelize = require("sequelize");
const banco = require("./banco")

var livro = banco.conexao.define(
    "livro",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        quantidade:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true
        },
        nome:{
            type:sequelize.STRING,
            allowNull:false
        },
        descricao:{
            type:sequelize.STRING,
            allowNull:false
        }
    },
    { timestamps: false }
)
module.exports = {livro}