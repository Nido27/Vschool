var readlineSync = require("readline-sync");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var printAsciiArt = function (str) {
    var strArray = str.split("\n");
    for (var i = 0; i < strArray.length; i++) {
        console.log(strArray[i]);
    }
};
/*
var art = "\n";
art +="                   " +"\n";
art +="\n";
art +="                 ,_> `.   ,';"+"\n";
art +="                ,-`'      `'   '`'._"+"\n";
art +="             ,,-) ---._   |   .---''`-),."+"\n";
art +="           ,'      `.  \  ;  /   _,'     `,"+"\n";
art +="        ,--' ____       \   '  ,'    ___  `-,"+"\n";
art +="       _>   /--. `-.              .-'.--\   \__"+"\n";
art +="      '-,  (    `.  `.,`~ \~'-. ,' ,'    )    _\""+"                   Wecolme to The RBG Game ^_^ \n";
art +="      _<    \     \ ,'  ') )   `. /     /    <,."+"\n";
art +="   ,-'   _,  \    ,'    ( /      `.    /        `-,"+"                Try to don't Meet me (O.o) \n";
art +="   `-.,-'     `.,'       `         `.,'  `\    ,-'"+"\n";
art +="    ,'       _  /   ,,,      ,,,     \     `-. `-._"+"                Or I Will kill You -_- \n";
art +="   /-,     ,'  ;   ' _ \    / _ `     ; `.     `(`-\""+"\n";
art +="    /-,        ;    (o)      (o)      ;          `'`,"+"             Muhahhahahahahahaha  !!!! \n";
art +="  ,~-'  ,-'    \     '        `      /     \      <_"+"\n";
art +="  /-. ,'        \                   /       \     ,-'"+"               Haitham The Big Boss (*_*) \n";
art +="    '`,     ,'   `-/             \-' `.      `-. <"+"\n";
art +="     /_    /      /   (_     _)   \    \          `,"+"\n";
art +="       `-._;  ,' |  .::.`-.-' :..  |       `-.    _\""+"\n";
art +="         _/       \  `:: ,^. :.:' / `.        \,-'"+"\n";
art +="       '`.   ,-'  /`-..-'-.-`-..-'\            `-."+"\n";
art +="         >_ /     ;  (\/( ' )\/)  ;     `-.    _<"+"\n";
art +="         ,-'      `.  \`-^^^-'/  ,'        \ _<"+"\n";
art +="          `-,  ,'   `. `''''' ,'   `-.   <`"+"\n";
art +="            ')        `._.,,_.'        \ ,-'"+"\n";
art +="             '._        '`'`'   \       <"+"\n";
art +="                >   ,'       ,   `-.   <`'"+"\n";
art +="                 `,/          \      ,-`"+"\n";
art +="                  `,   ,' |   /     /"+"\n";
art +="                   '; /   ;        ("+"\n";
art +="                    _)|   `       ("+"\n";
art +="                    `')         .-'"+"\n";
art +="                      <_   \   /"+"\n";
art +="                        \   /\("+"\n";
art +="                         `;/  `"+"\n"; */

var art = "";
art += "";
art += "                      _" + "\n";
art += "                     : \"" + "\n";
art += "                     ;\ \_                   _" + "\n";
art += "                     ;@: ~:              _,-;@)" + "\n";
art += "                     ;@: ;~:          _,' _,'@;" + "\n";
art += "                     ;@;  ;~;      ,-'  _,@@@,'" + "\n";
art += "                    |@(     ;      ) ,-'@@@-;" + "\n";
art += "                    ;@;   |~~(   _/ /@@@@@@/" + "\n";
art += "                    \@\   ; _/ _/ /@@@@@@;~" + "\n";
art += "                     \@\   /  / ,'@@@,-'~" + "\n";
art += "                       \\  (  ) :@@(~" + "\n";
art += "                    ___ )-'~~~~`--/ ___" + "\n";
art += "                   (   `--_    _,--'   )" + "\n";
art += "                  (~`- ___ \  / ___ -'~)" + "\n";
art += "                 __~\_(   \_~~_/   )_/~__" + "\n";
art += " /\ /\ /\     ,-'~~~~~`-._ 0\/0 _,-'~~~~~`-." + "\n";
art += "| |:  ::|    ;     ______ `----'  ______    :" + "\n";
art += "| `'  `'|    ;    {      \   ~   /      }   |" + "\n";
art += " \_   _/     `-._      ,-,' ~~  `.-.      _,'        |\"" + "                        Wecolme to The RBG Game ^_^\n";
art += "   \ /_          `----' ,'       `, `----'           : \"" + "\n";
art += "   |_( )                `-._/#\_,-'                  :  )" + "                      Try to don't Meet me (O.o)\n";
art += " ,-'  ~)           _,--./  (###)__                   :  :" + "\n";
art += " (~~~~_)          /       ; `-'   `--,               |  ;" + "                     Or I Will kill You -_-\n";
art += " (~~~' )         ;       /@@@@@@.    `.              | /" + "\n";
art += " `.HH~;        ,-'  ,-   |@@@ @@@@.   `.             .')" + "                      Muhahhahahahahahaha  !!!! \n";
art += "  `HH `.      ,'   /     |@@@@@ @@@@.  `.           / /(~)" + "\n";
art += "   HH   \_   ,'  _/`.    |@@@@@ @@@@@;  `.          ; (~~)" + "                     Haitham The Big Boss (*_*) \n";
art += "   ~~`.   \_,'  /   ;   .@@@@@ @@@@@@;\_  \___      ; H~\)" + "\n";
art += "       \_     _/    `.  |@@@@@@ @@@@@;  \     `----'_HH[~)" + "\n";
art += "         \___/       `. :@@@@@ @@@@@@'   \__,------' HH ~" + "\n";
art += "        ______        ; |@@@@@@ @@@'                 HH                         .___." + "\n";
art += "      _)      \_,     ; :@@@@@@@@@;                         /)               ,-^     ^-. " + "\n";
art += "    _;          \\   ,' |@@@@@@@@@:                        //               /           \"" + "\n";
art += "  ,'     ; :      \_,   :@@@@@@@@@@.              .-------| |--------------/  __     __  \-------------------.__" + "\n";
art += "  `.__,-'~~`._,-.  ,    :@@@@@@@@@@`.             |WMWMWMW| |>>>>>>>>>>>>> | />>\   />>\ |>>>>>>>>>>>>>>>>>>>>>>:>" + "\n";
art += "                 \/    /@@@@@@@@@@@@:             `-------| |--------------| \__/   \__/ |-------------------'^^" + "\n";
art += "                 /    ,@@@@@@@@@@@@@@.                     \\               \    /|\    /" + "\n";
art += "                |    ,@@@@@@@@@@@@@@@:                      \)               \   \_/   /" + "\n";
art += "                |    :@@@@@@@@@@@@@@@'                                        |       |" + "\n";
art += "                `.   \@@@@/  `@@@@@/(                                         |+H+H+H+|" + "\n";
art += "                  )   ~~~/    \~~~~  \                                        \       /" + "\n";
art += "                  :     /       \_    \                                        ^-----^" + "\n";
art += "                  (    /          \_   `." + "\n";
art += "                  /   ;             \_  `." + "\n";
art += "                 /   /                \  `." + "\n";
art += "                /   /                  `.  \"" + "\n";
art += "              ,'  ,'/~~)                ;  /" + "\n";
art += "              {   `'   (               /  /" + "\n";
art += "              `.___,-'  \             /  /" + "\n";
art += "                 __/     |           /  /" + "\n";
art += "                /        |           : :   __" + "\n";
art += "                :        |           ; : _;  )__" + "\n";
art += "                (  |  |  /          /  `,'  ~   )_" + "\n";
art += "                 `-:__;-'          :  ,'      ~~  ;" + "\n";
art += "                                  /          (_,--'" + "\n";
art += "                                 (       ,-'~~" + "\n";
art += "                                  \__,-'~" + "\n";
art += " ";
art += " ";
printAsciiArt(art);
var Begin = readlineSync.question("Do You want to Begin the Game  ( yes / no) : ");
if (Begin == "yes" || Begin == "Yes") {
    var Pname = readlineSync.question("Enter your Name ");
    console.log(Pname + " Let the Game begin");
    var Player = {
        name: Pname,
        Hp: 100,
        Inventeory: [],
        score: 0,
        move: 0,
        Attack: getRandom(100, 70)
    };
    var possiblEenemy = ["Jacob", "Hiba", "Haitham"];
    var possibleAward = ["Sword", "Knife", "Bag", "Flower", "Hp"];

    var RandomEnemey = function (ename) {
        ename = ename;
        this.EnemyName = "";
        this.health = 100;
        this.attack = 0;
        this.generate = function () {
            var index = getRandom(0, possiblEenemy.length - 1);
            this.EnemyName = ename[index];
            if (ename[index] == "Haitham") {
                this.attack = getRandom(20, 40);

            } else if (ename[index] == "Jacob") {
                this.attack = getRandom(10, 20);
            } else if (ename[index] == "Hiba") {
                this.attack = getRandom(1, 10);
            }
        };
    };
    var randomAward = function (Award) {
        Award = Award;
        this.YourAward = "";
        this.generateAward = function () {
            var index = getRandom(0, Award.length - 1);
            this.YourAward = Award[index];
        };
    };


    while (Player.Inventeory.length < 10) {
        var userinput = readlineSync.question("Enter Your option (walk or view) ");
        if (userinput == "view" || userinput == "View") {
            console.log("Your name : " + Player.name + "\n" + "Your Hp : " + Player.Hp + "\n" + "Your Score : " + Player.score + "\n" + "Your Move : " + Player.move + "\n" + "Your Attack Power : " + Player.Attack + "\n" + "Your Inventeory : " + Player.Inventeory);
        } else if (userinput == "walk" || userinput == "Walk") {
            Player.move += 1;
            var chance = getRandom(0, 100);
            if (chance > 50) {
                var enemy = new RandomEnemey(possiblEenemy);
                enemy.generate();
                console.log("You have met an enemy " + enemy.EnemyName);
                while (Player.Hp > 0 && enemy.health > 0) {
                    console.log("Attack or run");
                    var userinput = readlineSync.question("You want to Attack or Run  ");
                    Player.move += 1;
                    if (userinput == "run" || userinput == "Run") {
                        chance = getRandom(0, 100);
                        if (chance > 50) {
                            console.log("You have escaped");
                            Player.score += 5;
                            console.log("Your Hp : " + Player.Hp + "\n" + " Your Score : " + Player.score);
                            break;
                        } else {
                            console.log("No luck you didnt escape");
                        }
                    } else if (userinput == "attack" || userinput == "Attack") {
                        chance = getRandom(0, 100);
                        if (chance > 50) {
                            var damage = Player.Attack;
                            console.log("You hit the enemy for " + damage);
                            enemy.health -= damage;
                            if (enemy.health <= 0) {
                                var tempAward = new randomAward(possibleAward);
                                tempAward.generateAward();
                                console.log("You killed the enemy here is your Award " + tempAward.YourAward);
                                if (tempAward.YourAward == "Hp") {
                                    Player.Hp += 50;
                                } else if (tempAward.YourAward == "Sword") {
                                    Player.Attack += 10;
                                } else if (tempAward.YourAward == "Knife") {
                                    Player.Attack += 5;
                                }

                                if (enemy.EnemyName == "Haitham") {
                                    Player.score += 50;
                                } else if (enemy.EnemyName == "Jacob") {
                                    Player.score += 40;
                                } else {
                                    Player.score += 30;
                                }
                                Player.Inventeory.push(tempAward.YourAward);
                                console.log("Your Hp : " + Player.Hp + "\n" + "Your Score : " + Player.score);
                                break;
                            }
                        } else {
                            console.log("YOu missed");
                        }

                    } else {
                        console.log("Thats not an option");
                    }
                    console.log("Its now the enemies turn");
                    chance = getRandom(0, 100);
                    if (chance > 50) {
                        var damage = enemy.attack;
                        console.log("enimey hit you for " + damage);
                        Player.Hp -= damage;
                        console.log("Your Hp : " + Player.Hp);
                        console.log("the Enemy Hp : " + enemy.health);
                    } else {
                        console.log("Enemy missed");
                        console.log("You Hp : " + Player.Hp);
                        console.log("the Enemy Hp : " + enemy.health);
                    }

                }

            }
            if (Player.Hp <= 0) {
                console.log("You died  " + Pname);
                break;

            }
        } else {
            console.log("Thats not an option");
        }
    }
    if (Player.Hp <= 0) {
        console.log("You lost");
        console.log(Player.Inventeory);
    } else {
        console.log("You won heres all the gear you got");
        console.log(Player.Inventeory);
    }

} else if (Begin == "no" || Begin == "Yes") {
    console.log("Go Away and stop annoying me \n The Game End Before Start ^_^");

} else {
    console.log("Thats not an option The Game exit ");
}