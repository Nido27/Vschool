var express = require("express");
var apiRouter = express.Router();
var data = require("./data.js");
var uuid = require("uuid");
var fnValidate = require("./validate.js");
var bodyParser = require("body-parser");
apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());
apiRouter.get("/Resturant", function (req, res) {
    if (Object.keys(req.query).length == 0) {
        res.status(200).send(data);
    } else {
        var arrayFood = [];
        for (var i = 0; i < data.length; i++) {
            var counter = 0;
            for (key in req.query) {
                if (req.query[key] == data[i][key]) {
                    counter++;

                }
            }
            if (counter == Object.keys(req.query).length) {
                arrayFood.push(data[i]);
                counter = 0;
            }
        }
        res.status(200).send(arrayFood);
    }

});

apiRouter.get("/Resturant/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            res.status(200).send(data[i]);
        }
    }
});


apiRouter.post("/Resturant", function (req, res) {
    var dataList = {
        id: uuid.v4(),
        name: req.body.name,
        Cost: req.body.Cost,
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

apiRouter.delete("/Resturant/:id", function (req, res) {
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


apiRouter.put("/Bounty/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            for (key in req.query) {
                data[i][key] = req.query[key];
            }
            res.status(200).send(data[i]);
        }
    }
});
module.exports = apiRouter;