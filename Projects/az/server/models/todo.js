var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  cost: Number,
  isDone: {
    type: Boolean,
    default: false
  },
  username: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Todo", todoSchema);
