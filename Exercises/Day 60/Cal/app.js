var readlineSync = require('readline-sync');
var opeartor = require("./function.js");

var input1 = readlineSync.question('enter the first number :');
var input2 = readlineSync.question('enter the second number :');
var input3 = readlineSync.question('enter your opeartor : ');

while (input3 != "+" && input3 != "-" && input3 != "*" && input3 != "/" && input3 != "^") {
    console.log(" you enter a unvalid opeartor retry again please : ")
    var input3 = readlineSync.question('enter your opeartor : ')
}  if (input3 == "+") {
    console.log(opeartor.add(parseInt(input1), parseInt(input2)));
} else if (input3 == "-") {
    console.log(opeartor.sub(parseInt(input1), parseInt(input2)));
} else if (input3 == "*") {
    console.log(opeartor.multi(parseInt(input1), parseInt(input2)));
} else if (input3 == "/") {
    console.log(opeartor.div(parseInt(input1), parseInt(input2)));
} else if (input3 == "^") {
    console.log(opeartor.exp(parseInt(input1), parseInt(input2)));
}
