var mongoose = require("mongoose");
var restoMenu = require("../model/restoMenu.js");
var express = require("express");
var apiRouter = express.Router();
var bodyParser = require("body-parser");
var User = require("../model/user.js");
var PrivOption = require("../middleware/PrivOption.js");

apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());

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


//get all item
apiRouter.get("/restoMenu", function (req, res) {
    restoMenu.find({}, function (err, data) {
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


//get specifc item
apiRouter.get("/restoMenu/:id", function (req, res) {
    restoMenu.findById(req.params.id, function (err, data) {
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


//add post
apiRouter.post("/restoMenu", function (req, res) {
    var newItem = new restoMenu(req.body);
    newItem.save(function (err, data) {
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

apiRouter.use(PrivOption);

// delete item
apiRouter.delete("/restoMenu/:id", function (req, res) {
    //to delete a specific comment
    if (req.query.index >= 0) {
        restoMenu.findById(req.params.id, function (err, result) {
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
        restoMenu.findById(req.params.id, function (err, result) {
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

//edit item
apiRouter.put("/restoMenu/:id", function (req, res) {
    restoMenu.findById(req.params.id, function (err, result) {
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







////get specifc user
//apiRouter.get("/User/:id", function (req, res) {
//    User.findById(req.params.id, function (err, data) {
//        if (err) {
//            res.status(500).send({
//                message: "Error in db",
//                err: err
//            });
//
//        } else {
//            res.status(200).send({
//                message: "here is the data",
//                data: data
//            })
//        }
//    })
//});



//    //edit User
//apiRouter.put("/User/:id", function (req, res) {
//    User.findById(req.params.id, function (err, result) {
//        if (err) {
//            res.status(500).send(err);
//        } else if (result == undefined) {
//            res.status(404).send(err);
//        } else {
//            for (key in req.query) {
//                if (key !== "Comment") {
//                    result[key] = req.query[key]
//                }
//
//            }
//            //to add a comment to comments array
//            if (req.query.Comment !== undefined && req.query.Comment !== "") {
//                result.Comment.push(req.query.Comment);
//            }
//            result.save();
//            res.status(200).send({
//                message: "Item has been updated"
//            });
//
//        }
//    })
//})

module.exports = apiRouter;