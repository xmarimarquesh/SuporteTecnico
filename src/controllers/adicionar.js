const chamado = require('../model/chamado');
const { Sequelize } = require('sequelize');
 
 
module.exports = {
    async chamado(req, res){
        res.render('../views/abrirChamado');
    },
 
    async chamadoInsert(req, res){
 
        const dados = req.body;
 
        await chamado.create({
            Cliente: dados.cliente,
            Problema: dados.problema,
            Tipo: dados.tipo
        });
 
        res.redirect('/');
 
    }

}