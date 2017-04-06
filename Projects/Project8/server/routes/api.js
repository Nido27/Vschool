var mongoose = require("mongoose");
var restoMenu = require("../model/restoMenu.js");
var express = require("express");
var apiRouter = express.Router();
var bodyParser = require("body-parser");
var User = require("../model/user.js");
var adminRoute = require("../middleware/adminRoute.js");



//edit item
apiRouter.put("/restoMenu/:id", function (req, res) {
    restoMenu.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === null) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                if (key !== "Comment") {
                    result[key] = req.query[key]
                }
            }
            //to add a comment to comments array
            if (req.query.Comment !== null && req.query.Comment !== "") {
                result.Comment.push(req.query.Comment);
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated",result:result
            });

        }
    })
})


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
        } else if (result === null) {
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


// User Can add Comment
apiRouter.put("/restoMenu/:id/:Comment", function (req, res) {
    restoMenu.findById(req.params.id, function (err, result) {
        //to add a comment to comments array
        if (req.query.Comment !== null && req.query.Comment !== "") {
            result.Comment.push(req.query.Comment);
        }
        result.save();
        res.status(200).send({
            message: "Item has been updated" 
        });
    })
})


//to delete a specific comment
apiRouter.delete("/restoMenu/:id/:index", function (req, res) {
    restoMenu.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === null) {
            res.status(404).send({
                message: "No file the this id"
            });
        } else {
            result.Comment.splice(req.params.index, 1);
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
})

apiRouter.use(adminRoute);
//
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
//edit item
apiRouter.put("/restoMenu/:id", function (req, res) {
    restoMenu.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === null) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                if (key !== "Comment") {
                    result[key] = req.query[key]
                }
            }
            //to add a comment to comments array
            if (req.query.Comment !== null && req.query.Comment !== "") {
                result.Comment.push(req.query.Comment);
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated"
            });
        }
    })
})



// delete item
apiRouter.delete("/restoMenu/:id", function (req, res) {
    // to delete the entire item
    restoMenu.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === null) {
            res.status(404).send(err);
        } else {
            result.remove();
            res.status(200).send({
                message: "Item has been deleted"
            });
        }
    })
})



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



//edit User
apiRouter.put("/User/:id", function (req, res) {
    if(User.privilege == "Admin"){
           User.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === null) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                if (key !== "Comment") {
                    result[key] = req.query[key]
                }
            }
            //to add a comment to comments array
            if (req.query.Comment !== null && req.query.Comment !== "") {
                result.Comment.push(req.query.Comment);
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated"
            });
        }
    })
    }else {
         res.status(200).send({
                message: "You must be admin to make change"
            });
    }
 
})

module.exports = apiRouter;