const chamado = require('../model/chamado');
const { Sequelize } = require('sequelize');

module.exports = {
    async chamado(req, res){
 
        const id = req.params.id;
     
        const chamados = await chamado.findByPk(id, {
            raw: true,
            attributes: ['IDChamado', 'Cliente', 'Problema', 'Tipo']
        });
     
        res.render('../views/editarChamado', {chamados});
     
    },

    async atualizarChamado(req, res){
 
        const dados = req.body;
        const id = req.params.id;

        if (dados.envio == 'Excluir') {
            await chamado.destroy({ where: { IDChamado: id } });
            res.redirect('/');
            return;
        }

        await chamado.update({
            Cliente: dados.cliente,
            Problema: dados.problema,
            Tipo: dados.tipo
        },
        {
            where: { IDChamado: id }
        });
     
        res.redirect('/');
    }
}