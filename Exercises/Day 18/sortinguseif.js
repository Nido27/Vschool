var ask = require('readline-sync');  
var input1= ask.questionInt('enter the first number : ');
var input2= ask.questionInt('enter the second number : ');
var input3= ask.questionInt('enter the third number : ');

var array=[];

if(input1<=input2 && input1<=input3 && input2<=input3){
    array.push(input1,input2,input3);
 }else if( input1<=input2 && input1<=input3 && input3<=input2){
     array.push(input1,input3,input2);
    
}else if( input2<=input1 && input2<=input3 && input1<=input3){
    array.push(input2,input1,input3);
    
}else if( input2<=input1 && input2<=input3 && input3<=input1){
    array.push(input2,input3,input1);
    
}else if( input3<=input1 && input3<=input2 && input2<=input1){
     array.push(input3,input2,input1);
    
}else if( input3<=input1 && input3<=input2 && input1<=input2)
{
     array.push(input3,input1,input2);
}

console.log(array);