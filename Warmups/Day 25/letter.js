var readlineSync = require("readline-sync");
var phrase= readlineSync.question("enter a pharse :");
phrase.split();
var count=0;
var letterCount=[];
for ( var i=0; i<phrase.length;i++){
    var temp=phrase[i];
   letterCount.push(temp);
    
    for ( var j=0;j<phrase.length;j++){
        if ( phrase[j]==temp ){
            count++;
        }
    }
    
     console.log(temp +" the count is  "+ count);
    count=0;
}

/*  
function letterFreq(str) {
  str = str.toLowerCase();
  var freq = {};
  for(var i = 0; i < str.length; i++) {
    if(freq[str[i]] == undefined) {
      freq[str[i]] = 0;
    }
    freq[str[i]] += 1;
  }
  return freq;
}

var phrase = "Slimy love suicide sundus candy";
console.log(letterFreq(phrase));*/