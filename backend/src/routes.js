const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/** Primeiro Exemplo
 *  routes.post('/users', (request, response) => {

        const body = request.body;

        console.log(body);

        return response.json({
            evento: 'Semana Omnistack 11.0',
            aluno: 'Felippe Faêda'
        });
    });
 */

 
routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index); 
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

module.exports = routes;