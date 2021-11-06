const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});
require('./db/database');

const PORT = process.env.PORT;



const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to Home');
});
app.get('/about',(req,res)=>{
    res.send('Welcome to about ');
});
app.get('/sweets',(req,res)=>{
    res.send('Welcome to sweets');
});
app.get('/signin',(req,res)=>{
    res.send('Welcome to signin');
});

app.listen(3000,()=>{
    console.log(`connected successfully at port ${PORT}`);
})