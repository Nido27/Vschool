var arr = require("./location.js");
var viewArr = require("./grid.js");
var score = [];
var numberOfShipsdestroyed = [];
var battleship = 0;
var destroyer = 0;
var submarine = 0;
var boat = 0;
var aircraftCarrier = 0;
var hitNumber = [];
var missNumber = [];
var shipsType = ["Aircraft Carrier", "Battleship", "Destroyer", "Submarine", "Boat"];
var hitOrMiss = function (x, y) {
    if (arr[x][y] != "-") {
        console.log("You have hitted a ship");
        if (arr[x][y] == "Aircraft Carrier") {
            aircraftCarrier++;
            if (aircraftCarrier == 5) {
                shipsType.splice(0,1);
                console.log("You have destroyed the enemy's Aircraft Carrier");
                numberOfShipsdestroyed.push("1");
                for (var i = 0; i < 5; i++) {
                    score.push("1");
                }
            }
        }
        if (arr[x][y] == "Battleship") {
            battleship++;
            if (battleship == 4) {
                shipsType.splice(1,1);
                console.log("You have destroyed the enemy's Battleship");
                numberOfShipsdestroyed.push("1");
                for (var i = 0; i < 4; i++) {
                    score.push("1");
                }
            }
        }
        if (arr[x][y] == "Destroyer") {
            destroyer++;
            if (destroyer == 3) {
                shipsType.splice(2,1);
                console.log("You have destroyed the enemy's Destroyer");
                numberOfShipsdestroyed.push("1");
                for (var i = 0; i < 3; i++) {
                    score.push("1");
                }
            }
        }
        if (arr[x][y] == "Submarine") {
            submarine++;
            if (submarine == 2) {
                shipsType.splice(3,1);
                console.log("You have destroyed the enemy's Submarine");
                numberOfShipsdestroyed.push("1");
                for (var i = 0; i < 2; i++) {
                    score.push("1");
                }
            }
        }
        if (arr[x][y] == "Boat") {
            boat++;
            if (boat == 1) {
                shipsType.splice(4,1);
                console.log("You have destroyed the enemy's Boat");
                numberOfShipsdestroyed.push("1");
                score.push("1");
            }
        }
        arr[x][y] = "-";
        viewArr.view[x][y] = "X";
        score.push("1");
        hitNumber.push("1");
    } else if (viewArr.view[x][y] == "-") {
        console.log("You didn't hit the ship");
        viewArr.view[x][y] = "O";
        missNumber.push("1");
    } else if (viewArr.view[x][y] == "O" || viewArr.view[x][y] == "X") {
        console.log("You have already selected this coordinate");
    }
}
module.exports = {
    hitOrMiss: hitOrMiss,
    score: score,
    numberOfShips: numberOfShipsdestroyed,
    missNumber: missNumber,
    hitNumber: hitNumber,
    shipsType : shipsType
}