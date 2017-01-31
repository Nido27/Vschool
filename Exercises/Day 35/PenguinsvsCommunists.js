var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var Parties = function (name, population) {
    this.name = name;
    this.population = population;
};

var penguins = new Parties("Penguins", 1000000);
var communists = new Parties("Communists", 1000000);
var firstAttack = randomNumber(1, 2);
var num = 0;

var timer = setInterval(function () {
    
    var sendNuke = function (party) {
        var hitChance = randomNumber(1, 2);
        if (hitChance == 1) {
            onHit(party);
        }
        if (hitChance == 2) {
            onMiss(party);
        }
    };
    
    var onHit = function (party) {
        party.population -= randomNumber(100000, 500000);
        console.log("The missle hit the " + party.name);
        if (party.population > 0) {
            console.log("The " + party.name + " population is " + party.population);
        } else {
            console.log(party.name + " are dead");
            clearInterval(timer);
        }
    };
    
    var onMiss = function (party) {
        console.log("The missle missed the " + party.name);
    };
    
    if (firstAttack == 1) {
        num++;
        if (num % 2 != 0) {
            console.log("");
            console.log("The Penguins are attacking");
            sendNuke(communists);
        } else {
            console.log("");
            console.log("The Communists are attacking");
            sendNuke(penguins);
        }
    } else {
        num++;
        if (num % 2 != 0) {
            console.log("");
            console.log("The Communists are attacking");
            sendNuke(penguins);
        } else {
            console.log("");
            console.log("The Penguins are attacking");
            sendNuke(communists);
        }
    }
    
}, 2000);