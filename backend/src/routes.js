const express = require('express');

const routes = express.Router();

routes.post('/users',(request,response)=>{
    console.log(request.body)
    return response.json({
        message:"Post Users"
    });
});

routes.get('/users',(request,response)=>{
    const params = request.query;
    console.log(params);
    return response.json({
        message:"Get Users"
    });
});
module.exports = routes;