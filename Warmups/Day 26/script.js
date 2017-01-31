/*var numb=[0,1,2,3,4,5,6,7,8,9];
var char=["!","@","#","$","%","^","&","*","(",")","_","-","+","=","/","*","-"];
var Aplha=["A","B","W","Q","R","T","Y","U","I","O","P","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var bata=["a","b","w","q","r","t","y","u","i","o","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

function getRandom(min,max){
    return Math.floor(Math.random()*(max -min+1))+min;
}  

    

var RandomNumb =function(pass)
{
    this.passwordnum="";
    this.generateNum=function(){
    var index = getRandom(0,numb.length-1);
        this.passwordnum=pass[index];
    };
};


var RandompasswordChar =function(pass)
{
    this.passwordchar="";
    this.generatechar=function(){
    var index = getRandom(0,char.length-1);
        this.passwordchar=pass[index];
    };
};
    
    var RandompasswordUp =function(pass)
{
    this.passwordUpper="";
    this.generateUpper=function(){
    var index = getRandom(0,Aplha.length-1);
        this.passwordUpper=pass[index];
    };
};
    
      var RandompasswordLO =function(pass)
{
    this.passwordloweer="";
    this.generateLower=function(){
    var index = getRandom(0,bata.length-1);
        this.passwordloweer=pass[index];
    };
};
      
for( var i=0;i<10;i++)
    {
        var tempnum= new RandomNumb(numb);
        tempnum.generateNum();
        var tempchar= new RandompasswordChar(char);
        tempchar.generatechar();
        var tempLow= new RandompasswordLO(bata);
        tempLow.generateLower();
        var tempUp= new RandompasswordUp(Aplha);
        tempUp.generateUpper();
       document.getElementById("dis").value= tempnum+tempchar+tempLow+tempUp;

    }
     console.log(tempnum+tempchar+tempLow+tempUp);


    
    */

function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
    myform.row_password.value = randomPassword(myform.length.value);
}