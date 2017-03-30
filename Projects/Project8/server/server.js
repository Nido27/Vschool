var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var apifiles = require("./routes/files.js");
var apiRouter = require("./routes/api.js");
var PORT = process.env.PORT || 8080;



//packages to handle html
var ejs = require("ejs");
var path = require("path");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\view");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");



app.use(apifiles);
app.use(apiRouter);


app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})