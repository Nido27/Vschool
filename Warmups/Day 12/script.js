
function myDay()
{
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];    
    document.getElementById("day").innerHTML = days[d.getDay()];
    
}
function myTime()
{
 
     var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
  
}



myTime();
myDay();