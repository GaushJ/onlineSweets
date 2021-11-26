const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");



const Authenticate = async (req,res,next)=>{
    
    try{
        console.log("hello from authenticate");
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            throw new Error("User not Found");
        } 
        
        next();
    
    }catch(err){
        res.status(401).send('unauthorized');
        console.log("Unauthorized access");
    }
}
module.exports = Authenticate;
        
        
        
        
        