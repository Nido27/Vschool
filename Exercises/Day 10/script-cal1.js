    var myCal = function(num1,num2)
    {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result="";
        
 if (document.getElementById("num1").value ==="" || isNaN(document.getElementById("num1").value))
    {

		alert("Please enter the first number!");
		document.getElementById("num1").focus();
		return false;
        
        
        
	}else if(document.getElementById("num2").value==="" || isNaN(document.getElementById("num2").value))
    {
		alert("Please enter the second number!");
		document.getElementById("num2").focus();
		return false;
        
        
    }else if(document.getElementById("opr").value==="")  
    {
		alert("Please select an operand!");
		return false;
        
        
	} else if(document.getElementById("opr").value=="+")
    {   
        
        document.getElementById("result").value =num1+num2;
        
        
    }else if(document.getElementById("opr").value=="-")
    {
      
      document.getElementById("result").value= num1-num2;
        
    }else if(document.getElementById("opr").value=="*")
    {
        
      document.getElementById("result").value = num1*num2;
        
    }else if(document.getElementById("opr").value=="/")
    {
     
      document.getElementById("result").value = num1/num2;
        
    }else if (document.getElementById("opr").value=="%")
    {
        
      document.getElementById("result").value = num1%num2;
    }
   
      // onclick=document.getElementById("Calculate").innerHTML = myCal(num1,num2);
    
      //document.getElementById("Calculate").addEventListener("click", myCal(num1,num2));
    

};

