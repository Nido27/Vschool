var express = require("express");
var files = express.Router();

files.get("/", function (req, res) {
    res.render("index.html");
});

module.exports = files;