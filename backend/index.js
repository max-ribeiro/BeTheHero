const express = require('express');

const app = express();

app.use(express.json());

app.post('/users',(request,response)=>{
    console.log(request.body)
    return response.json({
        message:"Hello World!",
        event:"Semana Omnistack11",
        name:"Max"
    });
});

app.get('/users',(request,response)=>{
    const params = request.query;
    console.log(params);
    return response.json({
        message:"Hello World!",
        event:"Semana Omnistack11",
        name:"Max"
    });
});

app.listen(3333);
