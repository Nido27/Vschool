var express = require("express");
var authRouter = express.Router();


var User = require("../model/User.js");



authRouter.post("/signup",function(req,res){
    User.find({username:req.body.username},function(err,data){
        if(err){
            res.status(500).send(err);
        }else if (data.length>0){
            res.status(200).send({"message":"username is taken"});
        }else {
            var newUser =new User(req.body);
            newUser.save(function(err,data){
                if(err){
                    res.status(500).send(err);
                }else {
                    res.status(200).send({"message":"you just signup "});
                }
            })
        }
    })
})

authRouter.post("/signin",function(req,res){
     User.findOne({username:req.body.username},function(err,data){
         if(err){
             res.status(500).send(err);
         }else if (data == undefined){
            res.status(400).send({"message":"username is wrong"});
         }else if(data.password != req.body.password){
              res.status(400).send({"message":"password is worng"});
         }else {
             res.status(200).send({"message":"you just signing"});
         }
     })
})


module.exports =authRouter;