const express = require('express');

const app = express();

app.post('/users',(request,response)=>{
    return response.json({
        message:"Hello World!",
        event:"Semana Omnistack11",
        name:"Max"
    });
});

app.get('/',(request,response)=>{
    return response.json({
        message:"Hello World!",
        event:"Semana Omnistack11",
        name:"Max"
    });
});

app.listen(3333);
