const express = require('express');
const {celebrate,Segments,Joi} = require('celebrate');
 
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);//Busca ongs registradas
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.number().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().length(2)
    }),
}),OngController.create);//Cria nova ong
routes.delete('/ongs/:id',OngController.delete);//Deleta ong criada

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);


module.exports = routes;