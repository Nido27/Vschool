var letter="aaacodebbcodexxcodecozexxcopeCodxcOdccoDeCODw";
//var txt=letter.toLocaleLowerCase();
var count=function()
{
    
    var count=0;
    for (var i=0; i<letter.length;i++)
    {
       // if(txt[i]==="c"  && txt[i+1]==="o"  && txt[i+3]==="e")
     if(letter[i]==="c" || letter[i]==="C" && letter[i+1]==="o" || letter[i+1]==="O" && letter[i+3]==="e" ||letter[i+3]==="E" )
     {
          count++;
     }
        
    }
    console.log(count);
}
count();
