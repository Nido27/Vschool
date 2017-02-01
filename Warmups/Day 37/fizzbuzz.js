for ( var n=1; n<=100;n++)
{
    var res="";
    if(n%5==0 && n%3==0)
    {
        res +="fizzBuzz"+" "+n;
    }else if (n%5==0)
    {
        res +=("buzz"+" "+n);
    }else if ( n %3 ==0) 
    {
        res +=("fizz"+" "+n);
    }else {
        res += n; 
    }
    console.log(res);


}


