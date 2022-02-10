const express = require('express');
const dotenv = require('dotenv');
const app = express();
var cors = require('cors')
const cookieparser = require('cookie-parser') ;

dotenv.config({path:'./config.env'});
require('./db/database');
app.use(cookieparser());
app.use(cors());
app.use(express.json()); 
app.use(require('./router/auth'));


const PORT = process.env.PORT;

app.listen(5000,()=>{
    console.log(`connected successfully at port ${PORT}`);
})










