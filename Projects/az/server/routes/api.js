var express = require("express");
var apiRouter = express.Router();

//import models
var Todo = require("../models/todo.js");

//import middleware
var userRouter = require("../middleware/userMiddle.js");
var adminPriv = require("../middleware/adminPriv.js");

apiRouter.use(userRouter);

apiRouter.get("/", function(req, res) {
  if(req.body.privilage == "admin") {
    Todo.find({}, function(err, data) {
      if(err) {
        res.status(500).send({"message": "Err", err: err});
      } else {
        res.status(200).send({"message": "Here is the data", data: data});
      }
    });
  } else {
    Todo.find({username: req.body.username}, function(err, data) {
      if(err) {
        res.status(500).send({"message": "Err", err: err});
      } else {
        res.status(200).send({"message": "Here is the data", data: data});
      }
    });
  }
});

apiRouter.post("/", function(req, res) {
  var newTodoItem = new Todo(req.body);
  newTodoItem.save(function(err, data) {
    if(err) {
      res.status(500).send({"message": "Err", err: err});
    } else {
      res.status(200).send({"message": "Data has been posted", data: data});
    }
  })
});

apiRouter.put("/:id", function(req, res) {
  Todo.findOne({"_id": req.params.id}, function(err, data) {
    if(err) {
      res.status(500).send({"message": "Err", err: err});
    } else {
      for(key in req.query) {
        data[key] = req.query[key];
      }
      data.save(function(err, data) {
        if(err) {
          res.status(500).send({"message": "Err", err: err});
        } else {
          res.status(200).send({"message": "Data has been updated", data: data});
        }
      })
    }
  })
});

apiRouter.use(adminPriv);

apiRouter.delete("/:id", function(req, res) {
  Todo.findOne({"_id": req.params.id}, function(err, data) {
    if(err) {
      res.status(500).send({"message": "Err", err: err});
    } else {
      data.remove(function(err, data) {
        if(err) {
          res.status(500).send({"message": "Err", err: err});
        } else {
          res.status(200).send({"message": "Data has been deleted", data: data});
        }
      });
    }
  })
});

module.exports = apiRouter;
