function intToAr(num) {
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
console.log(isHappyNum(123));