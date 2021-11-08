const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/database');
// const User = require('./models/userSchema');
app.use(express.json()); 

const PORT = process.env.PORT;

app.use(require('./router/auth'));

//Middleware
const middleware = (req,res,next)=>{
    console.log('hello middleware');
    next();
}



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