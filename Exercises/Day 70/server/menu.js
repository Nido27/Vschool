var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var menuSchema = new Schema({
    name:  String,
    cost: Number,
    type: String

});

module.exports = mongoose.model('Menu', menuSchema);