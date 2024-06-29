const sequelize = require("sequelize");
const banco = require("./banco");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

var emprestimo = banco.conexao.define(
    "emprestimo",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        fk_livro:{
            type:sequelize.INTEGER,
            allowNull:false,
            foreignKey: true
        },
        fk_cliente:{
            type:sequelize.INTEGER,
            allowNull:false,
            foreignKey: true
        },
        datadevolucao:{
            type:sequelize.STRING,
            allowNull:false
        },

    }, 
    { timestamps: false }
)
module.exports = {emprestimo}