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
    price:{
        type:String,
        require:true
    },
    rate:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('hotel', hotelSchema);