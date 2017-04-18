var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var offearSchema = new Schema({
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
    date :{
        type:Date,
        require:true
    }
});

module.exports = mongoose.model('offear', offearSchema);