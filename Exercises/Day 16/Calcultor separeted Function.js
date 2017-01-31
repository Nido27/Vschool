var readlineSync = require("readline-sync");
var num1= readlineSync.questionInt("Enter first number : ");
var num2= readlineSync.questionInt("Enter second number : ");
var cal=function(){

var opr= readlineSync.question("Enter oprand number : ");
    
    if (opr == "+")
    {
        addBy();
    
        }else if( opr == "-"){
            subtractBy();
        }else if( opr == "*"){
            multiplyBy();
        }else if( opr == "/"){
            divideBy();
        }else if( opr == "%"){
            reminderBy();
        }
     
    }




function addBy()
{
  var res= num1+num2;
    console.log("The result is "+res);
}

function subtractBy() 
{ 
 var res= num1-num2;
    console.log("The result is "+res);
}

function multiplyBy()
{
   var res= num1*num2;
    console.log("The result is "+res);
}

function divideBy() 
{ 
        if(num2==0)
        {
        console.log("can't divide By zero" );
        }else{
             var res= num1/num2;
        }
    console.log("The result is "+res);
}

function reminderBy() 
{ 
 var res=num1%num2;
    console.log("The result is "+res);
}

 
    cal();