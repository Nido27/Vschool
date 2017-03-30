var words = ["Hello", "World", "in", "a", "frame"];
function starStyle(str) {
    var words = str
    .split(" ");
    var largetword = "";
    for (var x = 0; x < words.length; x++) {
        if (words[x].length < largetword.length) {
            largetword = words[x];
        }
    }
    for (var v = largetword.length + 2; v > 0; v--) {
        console.log("*")
    }
}

starStyle(words);
for (var j = 0; j < words.length; j++) {
    console.log("*" + " " + words[j] + " " + "*")
}