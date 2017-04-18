var mongoose = require("mongoose");
var offear = require("../model/offearSchema.js");
var express = require("express");
var apiRouter = express.Router();
var bodyParser = require("body-parser");
var User = require("../model/user.js");
var adminRoute = require("../middleware/adminRoute.js");

////get specifc user
apiRouter.get("/User/:id", function (req, res) {
    User.findById(req.params.id, function (err, data) {
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




//get all user
apiRouter.get("/User", function (req, res) {
    User.find({}, function (err, data) {
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



//// delete user
apiRouter.delete("/User/:id", function (req, res) {
    User.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === undefined) {
            res.status(404).send(err);
        } else {
            result.remove();
            res.status(200).send({
                message: "Item has been deleted"
            });
        }
    })
})


////add user
apiRouter.post("/User", function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, data) {
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


// edit User
apiRouter.put("/User/:id", function (req, res) {
    User.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === undefined) {
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
                message: "Item has been updated",
                result: result
            });

        }
    })
})

//edit User
apiRouter.put("/User/:id", function (req, res) {
    if (User.privilege == "Admin") {
        User.findById(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else if (result === undefined) {
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
    } else {
        res.status(200).send({
            message: "You must be admin to make change"
        });
    }

})

////add offear
apiRouter.post("/offear", function (req, res) {
    var newoffear = new offear(req.body);
    newoffear.save(function (err, data) {
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

//// delete offear
apiRouter.delete("/offear/:id", function (req, res) {
    offear.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === undefined) {
            res.status(404).send(err);
        } else {
            result.remove();
            res.status(200).send({
                message: "Item has been deleted"
            });
        }
    })
})

////get specifc offear
apiRouter.get("/offear/:id", function (req, res) {
    offear.findById(req.params.id, function (err, data) {
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




//get all offear
apiRouter.get("/offear", function (req, res) {
    offear.find({}, function (err, data) {
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
})

//edit offear
apiRouter.put("/offear/:id", function (req, res) {
    if (offear.privilege == "Admin") {
        offear.findById(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else if (result === undefined) {
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
    } else {
        res.status(200).send({
            message: "You must be admin to make change"
        });
    }

})
module.exports = apiRouter;