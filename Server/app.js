const express = require('express');
const mongoose = require('mongoose');
const DB = "mongodb+srv://Gauransh:Gauransh123@cluster0.8wqm6.mongodb.net/sweetshop?retryWrites=true&w=majority"

mongoose.connect(DB).then(()=>{
    console.log("connected to database succesully")
}).catch((err)=>{
    console.log('connection failed');
});

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
    console.log('connected successfully at port 3000');
})