var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var filesRouter=require("./files.js")
var apiRouter=require("./api.js")
var PORT = process.env.PORT || 8080;


//packages to handle html
var ejs = require("ejs");
var path=require("path");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");






app.use(apiRouter);
app.use(filesRouter);


app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})