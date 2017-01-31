var ask = require('readline-sync');  
var input =ask.question("do you want to contiune encrypted and decrypted ? ");
do {
var text = ask.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));
var encrypted = "";
var encrypt = function(text,shift) {
    var textEncrypt = "";
    for(i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122) {
            textEncrypt += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        }
    }
    encrypted = textEncrypt;
};
encrypt(text, shift);
console.log(encrypted);

var decrypted = "";
var decrypt = function(encrypted) {
    var textDecrypt = "";
    for(i = 0; i < encrypted.length; i++) {
        var charCode = encrypted.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122) {
            textDecrypt += String.fromCharCode((charCode - 122 - shift) % 26 + 122);
        }
    }
    decrypted =  textDecrypt;
};
decrypt(encrypted);
console.log(decrypted);
    var input =ask.question("do you want to contiune encrypted and decrypted ? ");
    } while(input == "yes");