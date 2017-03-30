var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var data = require("./data.js");
var uuid = require("uuid");
var PORT = process.env.PORT || 8080;
var fnValidate = require("./validate.js");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/animal", function (req, res) {
    res.status(200).send(data);
});
app.get("/animal/:id", function (req, res) {
    var notFound = true;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == req.params.id) {
            res.status(200).send(data[i]);
            notFound=false;
        }
    }
    if(notFound == true){
        res.status(400).send({
        message: "the id you input is n't exist"
    });
    }
    
});
app.post("/animal", function (req, res) {
    var dataList = {
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age,
        istasty: req.body.istasty
    };
    var didpass = fnValidate(dataList);
    if (didpass.pass == false) {
        res.status(400).send({
            message: didpass.message
        })
    } else {
        data.push(dataList);
        res.status(200).send({
            sucess: true
        });
    }


});

app.put("/animal/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            var dataList = {
                id: req.params.id,
                name: req.body.name,
                age: req.body.age,
                istasty: req.body.istasty
            }
            var didpass = fnValidate(dataList);
            if (didpass.pass == false) {
                res.status(400).send({
                    message: didpass.message
                })
            } else {
                data[i] = dataList;
                res.status(200).send({
                    message: "the data is upadte of" + id
                });
            }
        }
    }
});

app.delete("/animal/:id", function (req, res) {
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