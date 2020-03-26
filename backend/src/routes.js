//importações
const express = require('express');

const ongcontroller = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller'); 
const sessioncontroller = require('./controllers/sessioncontroller');

const routes = express.Router();
//

//metodo de listagem das ongs
routes.get('/ongs', ongcontroller.index);

//metodo de criação das ongs
routes.post('/ongs', ongcontroller.create);

routes.post('/incidents', incidentcontroller.create);

routes.get('/incidents', incidentcontroller.index);

routes.delete('/incidents/:id', incidentcontroller.delete);

routes.get('/profile', profilecontroller.index);

routes.post('/sessions',sessioncontroller.create);
module.exports = routes;//exportando a variavel