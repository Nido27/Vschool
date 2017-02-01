var Num=[1,2,3,4,5,6,7,8,9,10];
function addRed(Num){
var count=0;
console.log(Num.reduce(function(a,b) {
    return a + b;
}))
}

addRed(Num);
// second way
var Num=[1,2,3,4,5,6,7,8,9,10];
function add(Num){
var count=0;
for( var i=0; i<Num.length ;i++){
    count=count+Num[i];
}
    console.log(count);
}

add(Num);