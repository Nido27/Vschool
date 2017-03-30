/*document.getElementById("num1").addEventListener("click", multiplyByF);
document.getElementById("num3").addEventListener("click", multiplyByE);
document.getElementById("num2").addEventListener("click", multiplyByT);*/




function multiplyByP()
{
     
       num1 = Number(document.getElementById("num1").value);
        document.getElementById("res1").value = num1 * 5;
}


function multiplyByC()
{
        num2 =Number(document.getElementById("num2").value);
        document.getElementById("res2").value = num2 * 11;
  
}


function multiplyByB()
{
        num3 = Number(document.getElementById("num3").value);
        document.getElementById("res3").value = num3 * 7;
       
}



function addBy()
{
    var res1 = Number(document.getElementById("res1").value);
    var res2 = Number(document.getElementById("res2").value);
    var res3 = Number(document.getElementById("res3").value);
    var total= document.getElementById("addRes").value = res1+res2+res3;
         
    
}


