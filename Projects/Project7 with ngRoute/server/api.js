var mongoose = require("mongoose");
var Status = require("./Status.js")
var express = require("express");
var apiRouter = express.Router();
var bodyParser = require("body-parser");
var uuid = require("uuid");
mongoose.connect('mongodb://localhost/Resturant');



apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/Status", function (req, res) {
    Status.find({}, function (err, data) {
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

apiRouter.get("/Status/:id", function (req, res) {
    Status.findById(req.params.id, function (err, data) {
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

apiRouter.post("/Status", function (req, res) {
    var newStatus = new Status(req.body);
    newStatus.save(function (err, data) {
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

apiRouter.delete("/Status/:id", function (req, res) {
    //to delete a specific comment
    if (req.query.index >= 0) {
        Status.findById(req.params.id, function (err, result) {
                if (err) {
                    res.status(500).send(err);
                } else if (result == undefined) {
                    res.status(404).send({
                        message: "No file the this id"
                    });
                } else {
                    result.Comment.splice(req.query.index, 1);
                    result.save(function (err, result) {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.status(200).send({
                                message: "a comment has been deleted"
                            });
                        }
                    });
                }
            })
            // to delete the entire item
    } else {
        Status.findById(req.params.id, function (err, result) {
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
    }
})

//Add Comment

apiRouter.put("/Status/:id", function (req, res) {
    Status.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                if (key !== "Comment") {
                    result[key] = req.query[key]
                }

            }
            //to add a comment to comments array
            if (req.query.Comment !== undefined && req.query.Comment !== "") {
                result.Comment.push(req.query.Comment);
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated"
            });

        }
    })
})

module.exports = apiRouter;