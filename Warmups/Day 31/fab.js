var febNum=[];
febNum[0]=0;
febNum[1]=1;
var count=0;
//console.log(febNum[0]);
//console.log(febNum[1]);
for (var i=2;i<100;i++)
{
    febNum[i]=febNum[i-2]+febNum[i-1];
    count+= febNum[i]
    //console.log(febNum[i]);
}
console.log(count);