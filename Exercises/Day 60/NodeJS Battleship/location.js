var shipArr = require("./grid.js");
var getRandomInt = require("./random.js");
var shipsType = ["Aircraft Carrier", "Battleship", "Destroyer", "Submarine", "Boat"];
var addShip = function () {
    for (var i = 0, j = 5; i < 5; i++, j--) {
        while (true) {
            var num = getRandomInt(0, 1);
            var x = getRandomInt(0, shipArr.battle.length - 1);
            var y = getRandomInt(0, shipArr.battle.length - 1);
            if (num == 0 && y + j < shipArr.battle.length) {
                var isShip = 0;
                for (var a = y; a < y + j; a++) {
                    if (shipArr.battle[x][a] != "-") {
                        isShip++
                    }
                }
                if (isShip == 0) {
                    for (var k = y; k < y + j; k++) {
                        shipArr.battle[x][k] = shipsType[i]
                    }
                    break
                }
            } else if (num == 1 && x + j < shipArr.battle.length) {
                var isShip = 0;
                for (var a = x; a < x + j; a++) {
                    if (shipArr.battle[a][y] != "-") {
                        isShip++
                    }
                }
                if (isShip == 0) {
                    for (var k = x; k < x + j; k++) {
                        shipArr.battle[k][y] = shipsType[i]
                    }
                    break
                }
            }
        }
    }
}
addShip();
module.exports = shipArr.battle;