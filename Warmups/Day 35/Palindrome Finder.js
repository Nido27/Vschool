function getLetters(str) {
    var strLetters = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            strLetters = strLetters + str[i].toLowerCase();
        }
    }
    return strLetters;
}

function palindrome(str) {
    var isPal = true;
    for (var i = 1; i < str.length / 2; i++) {
        if ((str[i - 1] != str[str.length - i])) {
            isPal = false;
        }
    }
    return isPal;
}

console.log(palindrome(getLetters("Star Rats!")));
console.log(palindrome(getLetters("palindrome")));
console.log(palindrome(getLetters("I madam, I made radio! So I dared! Am I mad?? Am I?!")));