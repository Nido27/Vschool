var char="ggggggggxkljfvlsjkfg";

function find(any){
    var array=[];
    for(var i=0; i<char.length;i++){
        if(char[i] == char[i+1]){
            
        }else if (char[i] != char[i+1] ){
             array.push(char[i+1]);
        }
}
    return array[0]; 
}


var test=find(char);
console.log(test);
