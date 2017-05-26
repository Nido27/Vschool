var mongoose = require("mongoose");
var offear = require("../model/offearSchema.js");
var hotel = require("../model/hotelsSchema.js");
var express = require("express");
var apiRouter = express.Router();
var bcrypt = require("bcrypt-nodejs");
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
                if (key !== "Password") {
                    result[key] = req.query[key]
                }
            }

            result.save();
            res.status(200).send({
                message: "Item has been updated",
                result: result
            });

        }
    })
})

// edit UserPassword 
apiRouter.put("/User/:id/Password", function (req, res) {
    User.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === undefined) {
            res.status(404).send(err);
        } else {
            //to Change Password 
            if (req.query.Password != undefined && req.query.Password !== "") {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.query.Password, salt);
                result.Password = hash;
            } else {
                res.status(400).send({
                    message: "Check Your Password"
                });
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated",
                result: result
            });

        }
    })
})

////edit User
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
    //    if (offear.privilege == "Admin") {
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
        //    } else {
        //        res.status(200).send({
        //            message: "You must be admin to make change"
        //        });
        //    }
})

apiRouter.delete("/offear/:id/:index", function (req, res) {
    offear.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === undefined) {
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

////add hotel
apiRouter.post("/hotel", function (req, res) {
    var newhotel = new hotel(req.body);
    newhotel.save(function (err, data) {
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

//// delete hotel
apiRouter.delete("/hotel/:id", function (req, res) {
    hotel.findById(req.params.id, function (err, result) {
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

////get specifc hotel
apiRouter.get("/hotel/:id", function (req, res) {
    hotel.findById(req.params.id, function (err, data) {
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




//get all hotel
apiRouter.get("/hotel", function (req, res) {
    hotel.find({}, function (err, data) {
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
apiRouter.put("/hotel/:id", function (req, res) {
    //    if (hotel.privilege == "Admin") {
    hotel.findById(req.params.id, function (err, result) {
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
        //    } else {
        //        res.status(200).send({
        //            message: "You must be admin to make change"
        //        });
})

apiRouter.delete("/hotel/:id/:index", function (req, res) {
    hotel.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result === undefined) {
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
module.exports = apiRouter;