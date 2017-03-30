var uniqueArray = function(firstArr,secondArr) {
    var arr = [];
    for(var i = 0; i < firstArr.length; i++) {
        var noRepeat = 0;
        for(var j = 0; j < secondArr.length; j++) {
            if(firstArr[i] == secondArr[j]) {
                noRepeat++;
            }
        }
        if(noRepeat == 0) {
           arr.push(firstArr[i]) 
        }
    }
    for(var i = 0; i < secondArr.length; i++) {
        var noRepeat = 0;
        for(var j = 0; j < firstArr.length; j++) {
            if(secondArr[i] == firstArr[j]) {
                noRepeat++;
            }
        }
        if(noRepeat == 0) {
           arr.push(secondArr[i]) 
        }
    }
    console.log(arr)
}


var arr1 = [1,2,3,4,5];
var arr2 = [3,4,5,6,7];
uniqueArray(arr1,arr2)