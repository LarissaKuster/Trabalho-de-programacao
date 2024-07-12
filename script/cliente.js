const sequelize = require("sequelize");
const banco = require("./banco")

var cliente = banco.conexao.define(
    "cliente",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type:sequelize.STRING,
            allowNull:false
        },
        cpf:{
            type:sequelize.STRING,
            allowNull:false
        },
        email:{
            type:sequelize.STRING,
            allowNull:false
        },

    },
    { timestamps: false }
)
module.exports = {cliente}