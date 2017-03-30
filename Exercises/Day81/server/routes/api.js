var express = require("express");
var Todo = require("../models/todo.js");

//setup routes
var apiRouer = express.Router();

apiRouer.get("/", function(req,res) {
    Todo.find({}, function(err, data) {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send({"message": "success", data: data})
        }
    })
})

apiRouer.post("/", function(req, res) {
    var newTodo = new Todo(req.body);
    newTodo.save(function(err, data) {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send({"message": "success", data: data})
        }
    })
})

apiRouer.delete("/:id", function(req, res) {
    Todo.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send(err)
        }else {
            data.remove(function(err, data) {
                if(err) {
                    res.status(500).send(err)
                }else {
                    res.status(200).send({"message": "success", data: data})
                }
            })
        }
    })
})

apiRouer.put("/:id", function(req, res) {
    Todo.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send(err)
        }else {
            for(key in req.query) {
                data[key] = req.query[key]
            }
            data.save(function(err, data) {
                if(err) {
                    res.status(500).send(err)
                }else {
                    res.status(200).send({"message": "success", data: data})
                }
            })
        }
    })
})

module.exports = apiRouer