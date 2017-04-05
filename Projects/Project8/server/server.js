var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var path = require("path");

var config = require("./config.js");

var PORT = process.env.PORT || 8080;


mongoose.connect('mongodb://localhost/Resto');


var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");


var apifiles = require("./routes/files.js");
var apiRouter = require("./routes/api.js");
var authRouter = require("./routes/auth.js");
app.use(apifiles);
app.use(authRouter);
app.use(apiRouter);



app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})