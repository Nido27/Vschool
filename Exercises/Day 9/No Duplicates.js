
 var data="brookkeeper larry ";
  var tem=" ";
  var dup=" ";
  for ( var i=0; i<=data.length; i++)
  {
      var isDuplicate=false;
  for (var x=i+1; x<data.length; x++)
  {
   if(data[i] == data[x]){
     tem +=data[i];
       isDuplicate=true;
       break;
   }
  }if(!isDuplicate){
          dup += data[i]; 
  }
   
  }
console.log("dup "+tem + "  no dup "+dup);


 
/*var input = "brookkeeper larry";
var strNoduplicate ="";
var strDuplicate ="";
for ( var i=0; i<input.lenght; i++){
   var isDuplicate = false;
   for (var j=i+1; j<input.length; j++)
   {
       if(input[i]==input[j]){
           strDuplicate+= input[i];
           isDuplicate = true;
           break;
       }
   }
   if(!isDuplicate){
       strNoduplicate += input[i];
   }
}
console.log(strNoduplicate);
console.log(strDuplicate);*/



 /*..... var findch = function( letter ){
   var strx='';
   var misfits ='';
   
   for(var i=0; i<letter.length; i++){
       if(strx.indexOf(letter[i])==-1){
           strx += letter[i];
       } else {
           
           misfits += letter[i];
       }
   } 
  // return [strx , misfits ];
console.log(strx);
console.log(misfits);
}
//console.log(findch('bookkeeper larry'));
findch('boookeepeeer larrryobi');*/


