const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

const db='mongodb://localhost:27017/CraveCooking';

mongoose.connect(db,(err)=>{
    if(err){
        console.err(err);
    }
    else{
        console.log("Connected to Db");
    }
});


router.get("/",(req,res)=>{
   res.send("Connected to api, start using now");     
});

router.post("/register",(req,res)=>{
        const userData=req.body;
        const user = new User(userData);
        user.save((error, registeredUser)=>{
            if(error){
                console.error(error);
            }
            else{
                res.status(200).send(registeredUser);

            }
        });
});


router.post("/login",(req,res)=>{
    const userData = req.body;
    User.findOne({email: userData.email},(error,user)=>{
        if(error){
            console.log(error);
        }
        else{
            if(!user){
                res.status(401).send("Invalid Credentials");
            }
            else{
                if(user.password == userData.password){
                    res.status(200).send(user);
                }
                else{
                    res.send(401).send("Invalid Password");
                }
            }
        }
    });
})


module.exports = router;

