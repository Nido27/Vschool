var uuid = require("uuid");

var bounty = [{
    id: uuid.v4(),
    firstName: "nader",
    lastName: "trump",
    isAlive: true,
    bountyAmount: 10,
    type: "jedi"
}, {
    id: uuid.v4(),
    firstName: "jacob",
    lastName: "trump",
    isAlive: true,
    bountyAmount: 100,
    type: "sith"
}, {
    id: uuid.v4(),
    firstName: "talal",
    lastName: "trump",
    isAlive: false,
    bountyAmount: 40,
    type: "jedi"
}, ]

module.exports = bounty;