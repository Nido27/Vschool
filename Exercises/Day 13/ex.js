var people=["jon","jacob","jingle","heimer","schmidt"];
var alphabet="abcdefghijklmnopqrstuvwxyz";
var array = alphabet.split("");
var x=[];

for(var i=0; i<people.length;i++)
{ x.push(people[i]);
    for(var j=0;j<alphabet.length; j++)
    {
     x.push(alphabet[j]);
    
}
}
console.log("["+x.join(",")+"]");
              
