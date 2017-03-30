var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    image: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    Username: {
        type: String,
        require: true,
        unique: true
    },
    Password: {
        type: String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    Country: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true,
         unique: true
    }
});

module.exports = mongoose.model('User', userSchema);