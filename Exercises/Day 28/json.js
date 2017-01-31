
document.getElementById("inp").addEventListener("click",function()
{
 
    var xhr = new XMLHttpRequest();
console.log("My script has loaded");
var Number=document.getElementById("numberreq").value;
xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
       console.log(data["objects"][0]["pokemon"][Number].name);
   document.getElementById("txt").value=data["objects"][0]["pokemon"][Number].name;
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);        
  }

};

xhr.open("GET","http://api.vschool.io:6543/pokemon.json",true);
xhr.send();
});