const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.json({
        message:"Hello World!",
        event:"Semana Omnistack11",
        name:"Max"
    });
});

app.listen(3333);
