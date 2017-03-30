var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var restoSchema = new Schema({
    image: {
        type: String,
        require: true
    },
    name: {
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
    type: {
        type: String,
        require: true
    },
    Comment: [String]
});

module.exports = mongoose.model('restoMenu', restoSchema);