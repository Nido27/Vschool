Jacob Evans [18:35] 
https://en.wikipedia.org/wiki/Happy_number
Wikipedia
Happy number
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers).

Jacob Evans [18:50] 
```function intToAr(num) {
  var temp = num.toString();
  var ar = [];
  for(var i = 0; i < temp.length; i++) {
    ar.push(parseInt(temp[i]));
  }
  return ar;
}

function sqrArr(ar) {
  var value = 0;
  for(var i = 0; i < ar.length; i++) {
    value += Math.pow(ar[i], 2);
  }
  return value;
}

function isHappyNum(num) {
  var result = num;
  var count = 0;
  do {
    result = sqrArr(intToAr(result));
    if(result == 1) {
      return true;
    } else if(count > 10000) {
      return false;
    }
    count += 1;
  } while(result > 1);
}
console.log(isHappyNum(123));```

[18:50]  
 ```function changeIntIntoArrayOfInt(x){
    
    var y = x.toString();
    var arr=[];
     var sum = 0;
    
    for (var i=0 ; i< y.length ; i++){
        var temp = parseInt(y[i]);
        arr.push(temp);
       sum += (arr[i] * arr[i])
        
    }
    console.log(arr);
    console.log(sum);
    
    if( sum > 1 ){
        
        changeIntIntoArrayOfInt(sum)
        
    }else{
        
        console.log("happy number")
    }
    
}

changeIntIntoArrayOfInt(19);
```

[18:51]  
Happy number solution ^

Hiba Jarjour [18:51] 
``````