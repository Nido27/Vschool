var readlineSync = require('readline-sync');  

var Num=[];
for( var i=0;i<3;i++){
    Num.push(readlineSync.questionInt('enter a  number : '));
}

function sortNumber(a,b) {
    return a - b;
}
 /*
function sortNumbers(a,b) {
    return b - a;
}
*/
var sortNum = function()
{
    Num.sort(sortNumber); 
    console.log(Num);

  
};


sortNum();

