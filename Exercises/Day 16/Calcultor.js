var readlineSync = require("readline-sync");
var num1= readlineSync.questionInt("Enter first number : ");
var num2= readlineSync.questionInt("Enter second number : ");
var opr= readlineSync.question("Enter oprand number : ");
    
    if(opr == "+")
    {   
        var res=num1+num2;  
    }else if(opr == "-")
    {   
        var res=num1-num2;  
    }else if(opr == "*")
    {   
        var res=num1*num2;  
    }else if(opr =="/")
    {   
           if(num2==0)
        {
        console.log("can't divide By zero" );
        }else{
             var res= num1/num2;
        }    
    }else if(opr ==="%")
    {   
        var res= num1%num2;
    }else {
        console.log("You were enter unaccepted orpand")
    }

  console.log("The result is "+res);