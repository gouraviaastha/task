const  userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";

const signup =async (req,res)=> {
    const {username,email,password} = req.body;
    try {
        const existingUser = await userModel.findOne({email:email})
        if(existingUser){
            return res.status(400).json({massage:"User already exist"})
        }
        const hashedPassword =await bcrypt.hash(password,10);
        const result =await userModel.create({
            email: email,
            password:hashedPassword,
            username: username        })
        const token =jwt.sign(
            {
                email:result.email,
                id : result._id
            },SECRET_KEY);
            res.status(201).json({user:result,
            token:token});
    } catch(error){
        console.log(error);
        res.status(500).json({massage:"some thing went wrong please try after some try"})
    }
}
const signin = async (req,res)=> {
    const {email,password}=req.body;
    try{
        const existingUser = await userModel.findOne({email:email});
        if (!existingUser){
            return res.status(404).json({massage: "User not found"})
        } 
        const matchPassword = await bcrypt.compare(password,existingUser.password);
        if (!matchPassword){
            return res.status(400).json({massage:"Invalid Password"})
        }
        const tokan = await jwt.sign({email : existingUser.email, id : existingUser._id},SECRET_KEY);
        res.status(200).json({user:existingUser, tokan: tokan})
    }catch(error){
        console.log(error);
        res.status(500).json({massage:"some thing went wrong please try after some try"})
    }
    
}
module.exports = {signup,signin};