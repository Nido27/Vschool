var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var data = require("./data.js");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.status(200).send(data);
});

app.post("/", function (req, res) {
    data.push(req.body);
    res.status(200).send({
        "mesage": "success"
    });
});

app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})