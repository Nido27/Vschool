function changeIntIntoArrayOfInt(x){
    
    var y = x.toString();
    var arr=[];
     var sum = 0;
    
    for (var i=0 ; i< y.length ; i++){
        var temp = parseInt(y[i]);
        arr.push(temp);
       sum += (arr[i] * arr[i])
        
    }
    console.log(arr);
    console.log(sum);
    
    if( sum > 1 ){
        
        changeIntIntoArrayOfInt(sum)
        
    }else{
        
        console.log("happy number")
    }
    
}

changeIntIntoArrayOfInt(19);