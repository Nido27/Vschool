var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var data = require("./data.js");
var uuid = require("uuid");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/bounty", function (req, res) {
    res.status(200).send(data);
});

app.post("/bounty", function (req, res) {
    if (req.body.firstName == undefined || req.body.firstName == "") {
        res.status(400).send({
            "message": "must enter the first name"
        });

    } else if (req.body.lastName == undefined || req.body.lastName == "") {
        res.status(400).send({
            "message": "must enter the last name"
        });
    } else {
        var dataList = {
            id: uuid.v4(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            isAlive: req.body.isAlive,
            bountyAmount: req.body.bountyAmount,
            type: req.body.type,
        }
        data.push(dataList);
        res.status(200).send({
            sucess: true
        });
    }

});

app.delete("/bounty/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data.splice(i, 1);
            res.status(200).send({
                sucess: true
            });
        }
    }

});

app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})