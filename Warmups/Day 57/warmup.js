function largestNumber(num) {
   var Number = [];
   var result = '';
  
   for (var i = 0; i <num.length; i++) {
       Number.push(num[i]+'');
   }

  Number.sort(function (a, b) {
       var leftRight = a+b;
       var rightLeft = b+a;
      
       if (leftRight > rightLeft) {
         return -1;
       }
       if (leftRight < rightLeft) {
         return 1;
       }
       return 0;
   });

  for (var i = 0; i < Number.length; i++) {
       result += Number[i];
   }

  return parseInt(result);
}

console.log(largestNumber([61,70,9,52,52]));