
var add= function(val1,val2){
    console.log(val1+val2);
}
add(4,5)


var compareNumber = function(num1,num2,num3)
{
if ((num1>num2)&&(num1>num3))
{
     console.log(num1) ;
}else if ((num2>num1)&&(num2>num3)){
    console.log(num2) ;
}else {
    console.log(num3) ;}
} ;

compareNumber(4,6,8)





var oldEven =function(a){
    if (a%2 ==0)
        {
            console.log("even");
        }
    else {
        console.log("odd");
    }
}



oldEven(3)
oldEven(4)



var lengthArray = function(array){
    if(array.length >= 20){
        array=array.join("");
        console.log(array.concat(array))
    }else {
         array=array.join("");
        console.log(array.splice(0, array.length/2))
    }
}
lengthArray (["N","a","d","e","r","j","a","c","k","o","b",1,2,3,4,5,6,7,8,9]) 


var febNum=[];
febNum[0]=0;
febNum[1]=1;
console.log(febNum[1]);
for (var i=2;i<100;i++)
{
    febNum[i]=febNum[i-2]+febNum[i-1];
    console.log(febNum[i]);
}

/*
var fab=function(n){

  if (n <= 2) {
      return 1;
  }
  else {
      return fab(n-1) + fab(n-2);
  }
}
console.log(fab(5));
*/
var myEqu= function(a,b,c){ 
    var d=b*b-4*a*c;
    
    if(d==0){
     var root=(-b/2*a);
        console.log("this is the root"+root)
    } else if(d>0)
    {
        var rootPart=Math.sqrt(b*b-4*a*c) ;
        var deNom=2*a;
        var root1=(-b+rootPart)/deNom;
        var root2=(-b-rootPart)/deNom;
    var x=[root1,root2];
    console.log(x);
}
    if(d<0){
        console.log("no solution")
    }
}
myEqu(2,5,1);



var letterCount =function (data){
     data = data.split(" ");
    var count=0;                 
    for (var i=0;i<data.length;i++){
        var word=x[i];

                    }
                }
            }
        }
    } 
    return -1; 
    }
}
}
                                   
console.log(letterCount("I","will","kill","you","Dear","friend"));*/