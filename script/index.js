const express = require('express')
const banco = require("./banco.js")
const livro = require("./livro.js")
const cliente = require("./cliente.js") 
const emprestimo = require("./emprestimo.js") 


const app = express()
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
const PORTA = 3000
app.listen( PORTA, function(){
    console.log("Servidor iniciados na porta "+PORTA);
})

app.post("/livro/",async function(req,res){
    const resultado = await livro.livro.create({
        quantidade:req.body.quantidade,
        nome:req.body.nome,
        descricao:req.body.descricao
    })
    res.send(resultado)
})

app.post("/emprestimo/",async function(req,res){
    const resultado = await emprestimo.emprestimo.create({
        fk_livro:req.body.fk_livro,
        fk_cliente:req.body.fk_cliente,
        datadevolucao:req.body.datadevolucao
    })
    res.send(resultado)
}) 

app.post("/cliente/",async function(req,res){
    const resultado = await cliente.cliente.create({
        nome:req.body.nome,
        cpf:req.body.cpf,
        email:req.body.email
    })
    res.send(resultado)
}) 

app.get("/livro/",async function(req, res) {
    const resultado = await livro.livro.findAll()
    res.send(resultado);
})

app.get("/livro/:id",async function(req, res) {
    const resultado = await livro.livro.findByPk(req.params.id)
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
    
})

app.get("/livro/nome/:nome",async function(req, res) {
    const resultado = await livro.livro.findAll({
        where:{ nome:req.params.nome }
    })
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
})

app.get("/cliente/",async function(req, res) {
    const resultado = await cliente.cliente.findAll()
    res.send(resultado);
})

app.get("/cliente/:id",async function(req, res) {
    const resultado = await cliente.cliente.findByPk(req.params.id)
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
    
})

app.get("/cliente/nome/:nome",async function(req, res) {
    const resultado = await cliente.cliente.findAll({
        where:{ nome:req.params.nome }
    })
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
})

app.get("/emprestimo/",async function(req, res) {
    const resultado = await emprestimo.emprestimo.findAll()
    res.send(resultado);
})

app.get("/emprestimo/:id",async function(req, res) {
    const resultado = await emprestimo.emprestimo.findByPk(req.params.id)
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
    
})

app.get("/emprestimo/:datadevolucao",async function(req, res) {
    const resultado = await emprestimo.emprestimo.findByPk(req.params.datadevolucao)
    if( resultado == null ){
        res.status(404).send({})
    }else{
        res.send(resultado);
    }
    
})

app.delete("/livro/:id",async function(req,res){
    const resultado = await livro.livro.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})

app.delete("/cliente/:id",async function(req,res){
    const resultado = await cliente.cliente.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})

app.delete("/emprestimo/:id",async function(req,res){
    const resultado = await emprestimo.emprestimo.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})

app.put("/livro/:id",async function(req,res){
    const resultado = await livro.livro.update({
        quantidade:req.body.quantidade,
        nome:req.body.nome,
        descricao:req.body.descricao
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await livro.livro.findByPk(req.params.id))
    }
})

app.put("/cliente/:id",async function(req,res){
    const resultado = await cliente.cliente.update({
        nome:req.body.nome,
        cpf:req.body.cpf,
        email:req.body.email
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await cliente.cliente.findByPk(req.params.id))
    }
})

app.put("/emprestimo/:id",async function(req,res){
    const resultado = await emprestimo.emprestimo.update({
        fk_livro:req.body.fk_livro,
        fk_cliente:req.body.fk_cliente,
        datadevolucao:req.body.datadevolucao
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await emprestimo.emprestimo.findByPk(req.params.id))
    }
})