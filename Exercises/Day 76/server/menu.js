var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {  Number,
    type: String
          },
    date:Date
    
});

module.exports = mongoose.model('Menu', menuSchema);