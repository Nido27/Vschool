var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var menuSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    upVoted: {
        type: Number,
        require: true
    },
    downVoted: {
        type: Number,
        require: true
    },
    Comment: [String]
});

module.exports = mongoose.model('Status', menuSchema);