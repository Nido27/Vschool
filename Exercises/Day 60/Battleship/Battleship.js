var readlineSync = require("readline-sync");
var newStr = ""
var Position = [];
var moves = [];
var hitscount = 5;
var score = 0;

function getRand(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create a grid of 10 col 10 row
for (var x = 0; x < 10; x++) {
    Position[x] = [];
    for (var y = 0; y < 10; y++) {
        Position[x][y] = " X ";
        newStr += Position[x][y];

    }
    newStr += "\n";
    console.log(newStr);
    newStr = "";
}
//Set the 5 ships by random way
var setShips = function () {
    for (var i = 0; i < 5; i++) {
        var x = getRand(0, 9);
        var y = getRand(0, 9);
        Position[x][y] = " S "
    }
}
setShips();

while (hitscount > 0 || score == 50) {
    var x = readlineSync.questionInt("Enter coordinate for x-axis : ");
    var y = readlineSync.questionInt("Enter coordinate for y-axis: ");
            //Check if there isn't ship to Change it to 0 hit point
            if (Position[x][y] != " S ") {
                Position[parseInt(x)][parseInt(y)] = " 0 "

                for (var x = 0; x < 10; x++) {
                    for (var y = 0; y < 10; y++) {

                        newStr += Position[x][y];

                    }
                    newStr += "\n"
                    console.log(newStr);
                    newStr = "";
                }

                hitscount--;
                console.log("You have a chance to move : " + hitscount);
                console.log("Your Score is  : " + score + "\n");
                //Check if there a ship to Change it to I hit point
            } else if (Position[x][y] == " S ") {
                Position[parseInt(x)][parseInt(y)] = " I "

                for (var x = 0; x < 10; x++) {
                    for (var y = 0; y < 10; y++) {

                        newStr += Position[x][y];

                    }
                    newStr += "\n"
                    console.log(newStr);
                    newStr = "";
                }
                hitscount = 5;
                score += 10;
                console.log("You have a chance to move : " + hitscount);
                console.log("Your Score is  : " + score + "\n");
            }
      if (hitscount == 0) {
        console.log("\n" + "Sry You Lose !!!");
    } else if (score == 50) {
        console.log("\n" + "Congratulations You WIN  !!!");
    }
    }
  