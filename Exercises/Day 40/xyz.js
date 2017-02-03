var ask = require('readline-sync');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var countP = [];
var countPC = [];
var possibleChoose = ["rock", "paper", "caesar"];
var randomChoose = function (choose) {
    this.pcChoose = "";
    this.generate = function () {
        var index = getRandom(0, choose.length - 1);
        this.pcChoose = choose[index];
    };
};

while (countP.length < 3 && countPC.length < 3) {
    var input = ask.question("enter your choice ( rock/ paper / caesar ) : ");
    if (input == "rock") {
        console.log("You choose : " + input);
        var tempChoose = new randomChoose(possibleChoose);
        tempChoose.generate();
        console.log("PC choose : " + tempChoose.pcChoose);
        if (tempChoose.pcChoose == "caesar") {
            countP.push(tempChoose.pcChoose);
            console.log("Pc lose you are the winner");
        } else if (tempChoose.pcChoose == "paper") {
            console.log("Pc winner you are the loser");
            countPC.push(input);;
        } else if (tempChoose.pcChoose == "rock") {
            console.log("Pc and  you draw");
        }

    } else if (input == "paper") {
        console.log("You choose : " + input);
        var tempChoose = new randomChoose(possibleChoose);
        tempChoose.generate();
        console.log("Pc choose : " + tempChoose.pcChoose);
        if (tempChoose.pcChoose == "caesar") {
            console.log("Pc winner you are the loser");
            countPC.push(input);;
        } else if (tempChoose.pcChoose == "rock") {
            console.log("Pc lose you are the winner");
            countP.push(tempChoose.pcChoose);
        } else if (tempChoose.pcChoose == "paper") {
            console.log("Pc and  you draw");
        }
    } else if (input == "caesar") {
        console.log("You choose : " + input);
        var tempChoose = new randomChoose(possibleChoose);
        tempChoose.generate();
        console.log("Pc choose : " + tempChoose.pcChoose);
        if (tempChoose.pcChoose == "rock") {
            console.log("Pc winner you are the loser");
            countPC.push(input);;
        } else if (tempChoose.pcChoose == "paper") {
            console.log("Pc lose you are the winner");
            countP.push(tempChoose.pcChoose);
        } else if (tempChoose.pcChoose == "caesar") {
            console.log("Pc and  you draw");
        }

    } else {
        console.log("Your input is no valid");
        var input = ask.question("enter your choice ( rock/ paper / caesar ) : ");
    }
     console.log("Your score is :"+countP.length)
    console.log("Pc score is :"+countPC.length)
    
    if(countP.length == 3){
        console.log(" YOU WON !!!!!");
    }else if(countPC.length == 3){
        console.log(" PC Won hahahahaha !!!!!");
    }
}