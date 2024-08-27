
const chamado = require('../model/chamado');
const { Sequelize } = require('sequelize');

module.exports = {
    async pagInicialGet(req, res){
 
        const chamados = await chamado.findAll({
            raw: true,
            attributes: ['IDChamado', 'Cliente', 'Problema', 'Tipo']
        });

        res.render('../views/index', {chamados});
 
    }
}

