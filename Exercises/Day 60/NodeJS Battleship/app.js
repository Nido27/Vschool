var readlineSync = require("readline-sync");
var arr = require("./location.js");
var viewArr = require("./grid.js");
var change = require("./displayGrid.js");
var attack = require("./attack.js");
var score = attack.score;
var shipsNumber = attack.numberOfShips;
var hitNumber = attack.hitNumber;
var missNumber = attack.missNumber;
var numberToAttacks = 0;
var remainingShip = attack.shipsType;
console.log("a : Attack , s : Status , o : options, p : position");
while (shipsNumber.length < 5) {
    var playerChoice = readlineSync.question('');
    if (playerChoice == "a") {
        console.log("choose a coordinate between 0-9");
        var x = readlineSync.question('x: ');
        while (!x.match(/[0-9]/) || x > 9 || x < 0) {
            var x = readlineSync.question('x: ');
        }
        var y = readlineSync.question('y: ');
        while (!y.match(/[0-9]/) || y > 9 || y < 0) {
            var y = readlineSync.question('y: ');
        }
        numberToAttacks++
        attack.hitOrMiss(x, y);
        change(viewArr.view);
    } else if (playerChoice == "s") {
        console.log("My score : " + score.length);
        console.log("Number of attacks : " + numberToAttacks);
        console.log("Number of hits : " + hitNumber.length);
        console.log("Number of misses : " + missNumber.length);
        console.log("Number of destroyed ships : " + shipsNumber.length);
        console.log("Remaining Ships : " + remainingShip.join(", "))
    } else if (playerChoice == "o") {
        console.log("a : Attack , s : Score , o : options, p : position")
    } else if (playerChoice == "p") {
        change(viewArr.view)
    } else {
        console.log("Invalid input");
        console.log("a : Attack , s : Status , o : options, p : position");
    }
}
console.log("My score : " + score.length);
console.log("Number of attacks : " + numberToAttacks);
console.log("Number of hits : " + hitNumber.length);
console.log("Number of misses : " + missNumber.length);
console.log("Number of destroyed ships : " + shipsNumber.length);