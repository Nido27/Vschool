var Student=1;
var name="jacob";
var isalive=false;
var hobbies=["football", "basketball", "volley"];
var favoriteFriend=[{
       name:"nader",
       lastName:"elSalhat",
       age:33,
               }];
var name=function(name1,name2)
{
   return name1+name2;
};

var spliceArray= function(arr)
{
 return arr.splice(1,5 );
}

var myArray=["layal","jackob","haytham","hiba","kabani","nader","water","live"];
console.log(spliceArray(myArray));

var fun12= function(array2){
  return array2.splice(1,3);  // betraje3 el part el matlob
   //return array2; //betraje3 el part ele dal men data
}
console.log(fun12([0,1,2,3,4,5,6]));