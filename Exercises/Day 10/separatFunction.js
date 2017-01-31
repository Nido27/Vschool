function addBy()
{
        num1 = Number(document.getElementById("num1").value);
        num2 = Number(document.getElementById("num2").value);
        document.getElementById("result").innerHTML = num1 + num2;
}

function subtractBy() 
{ 
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy()
{
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;
    if(num2==0)
        {
         document.getElementById("result").innerHTML="can't divide By zero";
        }else {
        document.getElementById("result").innerHTML = num1 / num2;
        }
}

function reminderBy() 
{ 
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = num1 % num2;
}