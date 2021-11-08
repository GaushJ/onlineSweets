const express = require('express');
const router = express.Router();

require('../db/database');
const User = require("../models/userSchema")

router.get('/',(req,res)=>{
    res.send('Hello from server router');
});

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
            }
            const user = new User({name,email,phone,password,cpassword});
            await user.save();
            res.status(201).json({message:"User registered successully"});  
           
    }catch(err){
            console.log(err);
    }
   
});
module.exports = router;
