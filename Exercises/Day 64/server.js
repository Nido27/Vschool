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

app.get("/Bounty", function (req, res) {
    if (Object.keys(req.query).length === 0) {
        res.status(200).send(data);
    } else {
        var arrayAnimals = [];
        for (var i = 0; i < data.length; i++) {
            var counter=0;
            for (key in req.query) {
                if (req.query[key] == data[i][key]) {
                    counter++;
                   
                }
            }
            if (counter==Object.keys(req.query).length){
                 arrayAnimals.push(data[i]);
                counter=0;
            }
        }
        res.status(200).send(arrayAnimals);
    }

});

app.get("/Bounty/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            res.status(200).send(data[i]);
        }
    }
});


app.post("/Bounty", function (req, res) {
    var dataList = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        living: req.body.living,
        bountyAmount: req.body.bountyAmount,
        type: req.body.type
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

app.delete("/Bounty/:id", function (req, res) {
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


app.put("/Bounty/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            for (key in req.query) {
                data[i][key] = req.query[key];
            }
            res.status(200).send(data[i]);
        }
    }

    //    for (var i = 0; i < data.length; i++) {
    //        if (data[i].id == id) {
    //            var dataList = {
    //                id: req.params.id,
    //                name: req.body.name,
    //                age: req.body.age,
    //                istasty: req.body.istasty,
    //            };
    //            var didpass = fnValidate(dataList);
    //            if (didpass.pass == false) {
    //                res.status(400).send({
    //                    message: didpass.message
    //                })
    //            } else {
    //                data[i] = dataList;
    //                res.status(200).send({
    //                    sucess: true
    //                });
    //
    //            }
    //        }
    //
    //    }
});


app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})