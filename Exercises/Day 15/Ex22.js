
    var omega=1;
    var alpha=2;
    var t =[];
    for (var i=0; i<10 ; i++)
    {
        for(var j=t.length ; j<10;j++)
        {
            if(j%2 === 0 && i%10 ===0)
            {
                t[[i][j]] = omega;
            }else
            {
                t[[i][j]]= alpha;
            }
        }
    }
}
console.log(t);



