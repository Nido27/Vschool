var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
var ejs = require("ejs");
var path = require("path");

//import config
var config = require("./config.js");

//get port
var PORT = process.env.Port || 8080;

//setup connection
mongoose.connect("mongodb://localhost/" + config.database);

//setup base app
var app = express();

//setup to handle json
app.use(bodyParser.urlencoded({extended: false}));        
app.use(bodyParser.json());


//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

//setup routes
var apifiles = require("./routes/files.js");
var apiRouter = require("./routes/api.js");
var authRouter = require("./routes/auth.js");

//check json token
app.use("/api", expressJwt({secret: config.secret}));

app.use(apifiles);
app.use(authRouter);
app.use(apiRouter);

app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})