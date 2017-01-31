var ask = require('readline-sync');  
var letter = ask.question('What phrase would you like to encrypt? ');

swapcase = function swapcase(letter) {
        return letter.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }

console.log(swapcase(letter));