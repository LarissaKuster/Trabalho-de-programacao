const sequelize = require("sequelize");
const banco = require("./banco");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

var administrativo = banco.conexao.define(
    "administrativo",
    {
        id_admin:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type:sequelize.STRING,
            allowNull:false
        },
        senha:{
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
module.exports = {administrativo}