var singledimenisonArray = function()
{
    var omega='\u03A9';
    var alpha='\u03B1';
    
    for (var i=0; i<10 ; i++)
    {
        var t=[];
    for(var j=0; j<10;j++)
    {
        if(j%2 == 0)
        {
          t.push(omega);
        }
        else
            t.push(alpha);
    }
    console.log(t.join(" "));
}
}
singledimenisonArray();

