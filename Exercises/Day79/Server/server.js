var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var apiRouter = require("./Routes/api.js")
var mongoose =require("mongoose");
var PORT = process.env.PORT || 8080;
var config=require("./config.js")
var expressJwt=require("express-jwt")
var authRouter=require("./Routes/auth.js");
mongoose.connect("mongodb://localhost/");


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());




app.use("/api",expressJwt({secret :config.secret}));
app.use("/api",apiRouter);
app.use(authRouter);


app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})