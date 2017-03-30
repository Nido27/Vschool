var uuid = require("uuid");

var bounty = [{
    id: uuid.v4(),
    firstName: "jack",
    lastName :10,
    living:false,
    bountyAmount :5,
    type:"sith"
    
}, {
   id: uuid.v4(),
    firstName: "join",
    lastName :10,
    living:true ,
    bountyAmount :10,
    type:"sith"
}, {
   id: uuid.v4(),
    firstName: "bob",
    lastName :10,
    living:false,
    bountyAmount :10,
    type:"Jedi"
}, ]

module.exports = bounty;