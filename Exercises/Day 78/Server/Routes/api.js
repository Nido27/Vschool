var mongoose = require("mongoose");
var todo = require("../model/todoSchema.js");
var express = require("express");
var apiRouter = express.Router();
var bodyParser = require("body-parser");




apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/", function (req, res) {
    todo.find({}, function (err, data) {
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


apiRouter.post("/", function (req, res) {
    var newtodo = new todo(req.body);
    newtodo.save(function (err, data) {
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

apiRouter.delete("/:id", function (req, res) {
    todo.findById(req.params.id, function (err, result) {
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

apiRouter.put("/:id", function (req, res) {
    todo.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                result[key] = req.query[key]
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated"
            });
        }
    })
})



module.exports = apiRouter;