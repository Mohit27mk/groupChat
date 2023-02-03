const express =require('express');
const bodyParser=require('body-parser');

const login=require('./routes/login');
const chat=require('./routes/chat')

const app=express(); 


app.use(bodyParser.urlencoded({extended:false}));

app.use(login);
app.use(chat);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000);