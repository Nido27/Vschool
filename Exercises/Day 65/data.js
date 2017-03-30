var uuid = require("uuid");

var resturant = [{
    id: uuid.v4(),
    name: "cake",
    Cost :10,
    type:"dessert"
    
}, {
   id: uuid.v4(),
    name: "main course",
    Cost :50,
    type:"pitzza"
}, {
    id: uuid.v4(),
    name: "appetizer",
    Cost :5,
    type:"homs"
}, ]

module.exports = resturant;