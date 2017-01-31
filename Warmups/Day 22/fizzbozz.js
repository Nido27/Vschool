for ( var i=1; i<=100;i++)
{
    var res="";
    if(i%5==0 && i%3==0)
    {
        res +="fizzBuzz"+" "+i;
    }else if (i%5==0)
    {
        res +=("buzz"+" "+i);
    }else if ( i %3 ==0) 
    {
        res +=("fizz"+" "+i);
    }else {
        res += i; 
    }
    console.log(res);


}


