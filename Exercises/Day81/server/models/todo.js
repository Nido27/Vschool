var mongoose = require("mongoose");
var Schema = mongoose.Schema

var todoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    cost: {
        type: Number,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Todo", todoSchema);