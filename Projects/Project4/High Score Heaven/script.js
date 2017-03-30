
function render(){
    document.getElementById("myTalbe").innerHTML="";
    scores.sort(function(a,b){
        return b.score - a.score;
    });
    for(var i=0;i<scores.length;i++){
        var table =document.getElementById("myTalbe");
        var row = table.insertRow(-1);
        var playerName = row.insertCell(0);
        var GameName = row.insertCell(1);
        var playingDate = row.insertCell(2);
        var highScore = row.insertCell(3);
        var Comment =row.insertCell(4);
        playerName.innerHTML =scores[i].Pname;
        GameName.innerHTML =scores[i].Gname;
        playingDate.innerHTML =scores[i].Pdate;
        highScore.innerHTML =scores[i].score;
        if(scores[i].comment){
    
         Comment.innerHTML=scores[i].comment;
    }
    }


}  

if(localStorage.getItem("scores")) {
     var scores = JSON.parse(localStorage.getItem("scores"));
     render(); 
  } else {
    var scores = [];
  }

$(".title").hover(function(){
    $(this).css(
        {"text-align":"center" ,
         "color": "#B1008F",
         "font-size":"50px",
         "font-family":"'Fjalla One', sans-serif",
         "background-color":"#F7B300",
        "border-radius": "70%",
         "padding":"3%"
        });
    },function()
    {$(this).css(
        {"text-align":"center",
         "color":"#051169",
         "font-size":"50px",
         "font-family":"'Indie Flower', cursive",
         "background-color":"",
        
        });
});

function getRandom(min,max){
    return Math.floor(Math.random()*(max -min+1))+min;
}


var possibleText=["go to hell","shut up","Idoit","stop talking","talkative","loser","genuis"]; 
var Commentgen =function(text)
{
    
    this.commentText="";
    this.generate=function()
    {
        var index = getRandom(0,text.length-1);
        this.commentText=text[index];
    };
};



function add() {

    
    if (document.getElementById("Pname").value ==="")
    {

		alert("Please enter the the Player name!");
		document.getElementById("Pname").focus();
		return false;
        
	}else if (document.getElementById("Gname").value ==="" )
    {
        alert("Please enter the name of the Game !");
		document.getElementById("Gname").focus();
		return false;
    }else if (document.getElementById("Pdate").value ==="")
    {
        alert("Please enter the Playing date !");
		document.getElementById("Pdate").focus();
		return false;
    }else if (document.getElementById("Score").value ==="")
    {
        alert("Please enter the your score !");
		document.getElementById("Score").focus();
		return false;
    }else 
    {
    var Pname =document.getElementById("Pname").value;
   var Gname =document.getElementById("Gname").value;
   var Pdate =document.getElementById("Pdate").value;
    var score=document.getElementById("Score").value;
        document.getElementById("Pname").value="";
        document.getElementById("Gname").value="";
        document.getElementById("Pdate").value="";
        document.getElementById("Score").value="";
     if(document.getElementById("comment").checked)
    {
        
        var tempComment= new Commentgen(possibleText);
        tempComment.generate();
         var comment= tempComment.commentText;
        scores.push({
            Pname: Pname,
            Gname:Gname,
            Pdate:Pdate,
            score:score,
            comment:comment
        });
    }else {
        scores.push({
            Pname: Pname,
            Gname:Gname,
            Pdate:Pdate,
            score:score,
         
        });
    }

    }
     localStorage.setItem("scores", JSON.stringify(scores));
    render();
}




