var displayGrid = function(arr) {
    var str = " ";
    for(var j = 0; j < arr.length; j++) {
        str += " " + j
    }
    console.log(str);
    for(var i = 0; i < arr.length; i++) {
        console.log(i + " " + arr[i].join(" "));
    }
}
module.exports = displayGrid