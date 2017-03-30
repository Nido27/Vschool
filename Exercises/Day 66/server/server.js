var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var api =require("./api.js");
var file =require("./files.js");

//packages to handle html
var ejs = require("ejs");
var path = require("path");

//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(api);
app.use(file);


app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})