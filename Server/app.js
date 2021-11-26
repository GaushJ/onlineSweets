const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cookieparser = require('cookie-parser') ;

dotenv.config({path:'./config.env'});
require('./db/database');
app.use(cookieparser());
app.use(express.json()); 
app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Welcome to Home');
});

app.get('/signin',(req,res)=>{
    res.send('Welcome to signin');
});

app.listen(5000,()=>{
    console.log(`connected successfully at port ${PORT}`);
})










