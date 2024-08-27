const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home');
const editar = require('./src/controllers/editar');
const adicionar = require('./src/controllers/adicionar');
 
route.get('/', home.pagInicialGet);

route.get('/abrirChamado', adicionar.chamado);
route.post('/abrirChamado', adicionar.chamadoInsert);

route.get('/editarChamado/:id', editar.chamado);
route.post('/editarChamado/:id', editar.atualizarChamado);

module.exports = route;
