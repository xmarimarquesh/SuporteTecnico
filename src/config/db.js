const sequelize = require('sequelize');
 
//configurações da base de dados
const database = new sequelize('ProvaWeb', 'AvaliacaoWeb', 'etsps2024401',
{
    //port é a porta que foi encontrado no computer managent do tcp/ip
    dialect: 'mssql', host:'localhost', port: 1434
});
 
database.sync().then(function(){
    console.log("LOGADO");
}).catch(function(erro){
    console.log("Falha" + erro);
});

module.exports = database;