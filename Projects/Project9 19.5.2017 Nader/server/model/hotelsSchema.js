var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var hotelSchema = new Schema({
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
    price: {
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
    Season: {
        type: String,
        require: true
    },
    Comment: [String]
});

module.exports = mongoose.model('hotel', hotelSchema);