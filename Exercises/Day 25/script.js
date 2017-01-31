document.getElementById("submit").addEventListener("click",display);

function display(){
   document.getElementById("text").value="display any thing";
};


setTimeout(function(){
    $("#par").html("You are here rigth now ")
    
},4000)


