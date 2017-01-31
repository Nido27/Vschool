var readlineSync = require('readline-sync'); 

var pass=[];
var fail=[];

function sortNumber(a,b) {
    return a - b;
}

var Student=function(name, grade){
    this.name=name;
    this.grade=grade;
}

for( var i=0;i<10;i++){
    var name = readlineSync.question('enter a  student name : ');
    var grade = readlineSync.question('enter a  student grade  : ');
       if( grade<60){
         fail.push(new Student(name,grade),"failed");
    }else if(90 <= grade && grade <=100)
        {
         pass.push(new Student(name,grade),"Excellent");
            }else if ( 80 <= grade && grade <=89)
        {
         pass.push(new Student(name,grade),"Very Good");
    }else if ( 70<= grade && grade <=79)
        {
         pass.push(new Student(name,grade),"Good");
    }else if ( 60 <= grade && grade <=69){
        pass.push(new Student(name,grade),"Pass");
    }
}

console.log(pass);
console.log(fail);