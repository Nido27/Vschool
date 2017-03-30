var mongoose = require("mongoose");
var Menu = require("./menu.js")
var express = require("express");
var apiRouter = express.Router();
var bodyParser = require("body-parser");
var uuid = require("uuid");
mongoose.connect('mongodb://localhost/Resturant');



apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/menu", function (req, res) {
    Menu.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });

        } else {
            res.status(200).send({
                message: "here is the data",
                data: data
            })
        }
    })

});


apiRouter.post("/menu", function (req, res) {
    var newMenu = new Menu(req.body);
    newMenu.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });

        } else {
            res.status(200).send({
                message: "here is the data",
                data: data
            })
        }

    })

});

apiRouter.delete("/menu/:id", function (req, res) {
    Menu.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send(err);
        } else {
            result.remove();
            res.status(200).send({
                message: "Item has been deleted"
            });
        }
    })
})

apiRouter.put("/menu/:id", function (req, res) {
    Menu.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                result[key] = req.query[key] || result[key]
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated"
            });
        }
    })
})


module.exports = apiRouter;