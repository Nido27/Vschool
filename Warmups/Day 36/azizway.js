var wordVowels = function (str) {
    var vowelNum = 0;
    var strLowerCase = str.toLocaleLowerCase();
    var nopun = "";
    for (var i = 0; i < strLowerCase.length; i++) {
        if (strLowerCase[i].match(/[a-z]/i)) {
            nopun += strLowerCase[i];
        }
    }
    for (var i = 0; i < nopun.length; i++) {
        if (nopun[i] == "a" || nopun[i] == "i" || nopun[i] == "o" || nopun[i] == "e" || nopun[i] == "u") {
            vowelNum++;
        }
    }
    console.log("vowel num = " + vowelNum);
};

wordVowels("HEllo/ wO#r%$ld");

var wordConst = function (str) {
    var constNum = 0;
    var strLowerCase = str.toLocaleLowerCase();
    var nopun = "";
    for (var i = 0; i < strLowerCase.length; i++) {
        if (strLowerCase[i].match(/[a-z]/i)) {
            nopun += strLowerCase[i];
        }
    }
    for (var i = 0; i < nopun.length; i++) {
        if (nopun[i] != "a" && nopun[i] != "i" && nopun[i] != "o" && nopun[i] != "e" && nopun[i] != "u") {
            constNum++;
        }
    }
    console.log("consonants num = " + constNum);
};

wordConst("HEllo/ wO#r%$ld");