const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentsController');

const routes = express.Router();

routes.get('/ongs',OngController.index);//Busca ongs registradas
routes.post('/ongs',OngController.create);//Cria nova ong
routes.delete('/ongs/:id',OngController.delete);//Deleta ong criada

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);
module.exports = routes;