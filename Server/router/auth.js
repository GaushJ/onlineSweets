const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


require('../db/database');
const User = require("../models/userSchema")

router.get('/',(req,res)=>{
    res.send('Hello from server router');
    res.cookie("jwttoken" ,"start");
});

//Registering the account

router.post('/register',async (req,res)=>{
    //  console.log(req.body);  
    const {name,email,phone,password,cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({error:"Plz fill the field properly"})
    }
   
    try{
        User.findOne({email:email})
        const userExist = await User.findOne({email:email});
             if(userExist){
                return res.status(422).json({error:"Email already Exist"});
            }else if(password != cpassword){
                return res.status(422).json({error:"Password does not match"});
            }else{
                const user = new User({name,email,phone,password,cpassword});
                
            await user.save();
            res.status(201).json({message:"User registered successully"}); 
            }
             
           
    }catch(err){
           return res.status(422).json({error:"invalid credentials"});
    }
   
});
router.post('/login',async (req,res)=>{
    //  console.log(req.body);  
    res.cookie("jwttoken" ,"start");
   
    try{
        let token;
        const {email,password} = req.body;
    if( !email ||  !password ) {
        return res.status(400).json({error:"Plz fill the field properly"})
    }
        
        const userExist = await User.findOne({email:email});
        if(userExist){
            const isMatch = await bcrypt.compare(password,userExist.password);
         token = await userExist.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        });
        if(!isMatch){
             res.status(400).json({message:"Invalid credentials"});
            }else{
            res.json({message:"user Logged in seccessfully"});
            }
        }
           
    }catch(err){
            console.log(err);
    }
   
});
module.exports = router;
