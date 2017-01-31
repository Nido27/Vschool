function notVol(x){
    var countNotvol=0;
    for(var i=0; i<x.length;i++){
        if(x[i] !="a" && x[i] !="e" && x[i] !="i" && x[i] !="o" && x[i] !="u" && x[i]=" ")
        {
            countNotvol++;
        }
    }
    console.log("not volew = "+countNotvol)
}



function vol(x){
    var countvol=0;
    for(var i=0; i<x.length;i++){
        if(x[i] =="a" || x[i] =="e" || x[i] =="i" || x[i] =="o" || x[i] =="u")
        {
            countvol++;
        }
    }
    console.log(" volew = "+countvol)
}



notVol("ok go to hell");
vol("ok go to hell");