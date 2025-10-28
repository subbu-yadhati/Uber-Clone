const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const captainModel = require('../models/captain.model');
const blackListTokenModel=require('../models/blackListToken.model');

module.exports.authUser=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];

    console.log("Auth Middleware Token:",token);
    if(!token){
        return res.status(401).json({message:'Access denied. No token provided.Unauthorized from auth middleware'});
    }

    const isBlacklisted=await blackListTokenModel.findOne({token:token})

    if(isBlacklisted){
        return res.status(401).json({message:'Token is blacklisted. Unauthorized'});
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded._id);
        req.user=user;
        return next();
    }catch(err){
        return res.status(401).json({message:'Invalid token .Unauthorized'});
    }
}

module.exports.authCaptain=async(req,res,next)=>{
    console.log("Authenticated Captain:");
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Access denied. No token provided.Unauthorized from auth middleware'});
    }
    const isBlacklisted=await blackListTokenModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message:'Token is blacklisted. Unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const captain=await captainModel.findById(decoded._id);
        req.captain=captain;
        console.log("Authenticated Captain:2");
        return next();
    }catch(err){
        return res.status(401).json({message:'Invalid token .Unauthorized'});
    }

}