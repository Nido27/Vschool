var express= require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var config = require("./config.js");
var expressJwt = require("express-jwt");
var ejs = require("ejs");
var path = require("path");
//get port
var port = process.env.Port || 8080
//connect to data base
mongoose.connect("mongodb://localhost/");

//setup app
var app = express();

//seetyp to handle json
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view\\");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

//setup to handle json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setup authoriztion
app.use("/todo", expressJwt({secret: config.secret}));

//import routes
var apiRouter = require("./routes/api.js");
var signRouter = require("./routes/sign.js");
var config = require("./config.js");
var filesRouter = require("./routes/files.js");

app.use("/todo", apiRouter);
app.use(signRouter);
app.use(filesRouter);

app.listen(port, function() {
    console.log("I'm listening on port " + port)
})