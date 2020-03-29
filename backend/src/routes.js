const express = require('express');
const {celebrate,Segments,Joi} = require('celebrate');
 
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
// Session
routes.post('/sessions',celebrate({
    [Segments.BODY]:Joi.object().keys({
        ong_id:Joi.string().length(8).required(),
    }),
}),SessionController.create);
// Ong
routes.get('/ongs',OngController.index);//Busca ongs registradas

routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().length(2)
    }),
}),OngController.create);//Cria nova ong
routes.delete('/ongs/:id',OngController.delete);//Deleta ong criada
// Profile
routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
    }).unknown(),
}),ProfileController.index);
// Incidents
routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number(),
    }),
}),IncidentController.index);

routes.post('/incidents',celebrate({
    [Segments.BODY]:Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
        value:Joi.number().min(1).required(),
    }),
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().length(8).required(),
    }).unknown(),
}),IncidentController.create);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.string().required(),
    }),
}),IncidentController.delete);

module.exports = routes;