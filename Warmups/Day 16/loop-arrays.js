 
 var evenOnlyArray=[];
var createEvenArray = function(highestNum)
{
  
    for ( var i=1; i <=highestNum;i++){
        if( i%2 ==0)
        {
            evenOnlyArray.push(i);
        }
    }
    console.log(evenOnlyArray.join(" "));
}
createEvenArray(10);



var addOdds = function(evenOnlyArray) {
   for (var j=1;j<=evenOnlyArray.length+1 ;j++)
       if (j%2 != 0)
           {
              evenOnlyArray.push(j)
           }
   
}

addOdds(evenOnlyArray);

console.log(evenOnlyArray);

function sortNumber(a,b) {
   return a - b;
}

evenOnlyArray.sort(sortNumber);
console.log(evenOnlyArray);