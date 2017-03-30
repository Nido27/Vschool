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

function multiplyByS()
{
        num4 = Number(document.getElementById("num4").value);
        document.getElementById("res4").value = num4 * 9;
  
       
}

function addByPB()
{
    var res1 = Number(document.getElementById("res1").value);
    var res3 = Number(document.getElementById("res3").value);
    var totalPB=document.getElementById("addPB").value = res1+res3;
}

function addByCS()
{
    var res2 = Number(document.getElementById("res2").value);
    var res4 = Number(document.getElementById("res4").value);
    var totalCS = document.getElementById("addCS").value = res2+res4;
}

function addBy()
{
    var res1 = Number(document.getElementById("res1").value);
    var res2 = Number(document.getElementById("res2").value);
    var res3 = Number(document.getElementById("res3").value);
    var res4 = Number(document.getElementById("res4").value);
    var total= document.getElementById("addRes").value = res1+res2+res3+res4;
  
}


