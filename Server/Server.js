const express = require('express');
const app = express();

//Middleware

const middleware = (req,res,next)=>{
    console.log('Middleware');
}

app.get('/',(req,res)=>{
    res.send('Server response succeded');
});
app.get('/about',(req,res)=>{
    res.send('About response succeded');
});
app.get('/contact',(req,res)=>{
    res.send('Contact response succeded');
});
app.get('/signin',(req,res)=>{
    res.send('signin response succeded');
});
app.listen(3000,()=>{
    console.log('Server running at port 3000');
})