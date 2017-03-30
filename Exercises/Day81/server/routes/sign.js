var express = require("express");
var User = require("../models/auth.js");
var config = require("../config.js");
var jwt = require("jsonwebtoken")
var authRouter = express.Router();

authRouter.post("/signup", function(req, res) {
    User.find({username: req.body.username}, function(err, data) {
        if(err){
            res.status(500).send(err)
        }else if(data.length > 0) {
            res.status(400).send({"message": "this username exists"})
        }else {
            var newUser = new User(req.body);
            newUser.save(function(err, data) {
                if(err){
                    res.status(500).send(err)
                }else {
                    res.status(200).send({"message": "you are signed up"})
                }
            })
        }
    })
})

authRouter.post("/login", function(req, res) {
    User.findOne({username: req.body.username}, function(err, user) {
        if(err){
            res.status(500).send(err)
        }else if(user == undefined) {
            res.status(400).send({"message": "username doesn't exist"})
        }else if(user.password != req.body.password) {
            res.status(400).send({"message": "the password is wrong"})
        }else {
            var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "1h"});
            res.status(200).send({"message": "the user is logged in", token : token})
        }
    })
})

module.exports = authRouter