//es5 new code 
var name="jacob";
console.log(name);
for(var i=0; i<5;i++){
    console.log(i)
}


//es6 new code 
let name="jacob";
console.log(name);
for(var i=0; i<5;i++){
    console.log(i)
}



var PI = 3.1415926535;
PI +=1;
console.log(PI);


//ES6 new code 
const PI =3.1415926535;
PI +=1;
console.log(PI);


const.app={};
app.name="jacob";
console.log(app);


//es5 old code
function Person(name,age){
    this.name=name || "hiba";
    this.age=age||9;
}

var jacob = new Person("jacob",19);
console.log(jacob);


var hiba=new Person();
console.log(hiba);


//ese6 new code 
function Person(name = "hiba",age=9){
    this.name =name;
    this.age=age;
}

let jacob=new Person("jacob",19);
console.log(jacob);

let hiba=new Person();
console.log(hiba);


// es5 old code

var name = "mustafo";
var age=4;

var mustfa ={
  name:name,
  age:age
};

console.log(mustfa)


//es6 new code 

let name ="mustfo";
let age =4;
let mustfa={
  name,
  age
};

console.log(mustfa);


//es5 old code 
var name ="subbos";
var helloString="hello"+name+"how are you?";
console.log(helloString);

//Es6 new code 
let name ="Coco";
let helloString =`I am in love with the ${name}`;
console.log(helloString);


//old es5 code 
var array=[1,2,3];
for(var i ;i<arry.length;i++){
    console.log(array[i]);
};

function printGreeting(name,age,location){
    console.log("Name: "+name+" Age : "+age+ " Location : "+location)
}

var mustfo={
    name:"mustfa",
    age:25,
    location:"china"
}

printGreeting(mustfa.name,mustfa.age,mustfa.location);

//Es6 new code // jacob don't how to solved it  hahahaha

let array=[1,2,3];
console.log(...array);

function printGreeting(name,age,location){
    console.log(`Name: ${name}  Age:${age }  Location:${location} `)
}
let mustfo={
    name:"mustfa",
    age:25,
    location:"china"
}


//es5 old code
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    btn.style.background="purple";
})

//es6 hal way 

let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    btn.style.background="purple";
})

//es6 all the way
let btn=document.getElementById("btn");
btn.addEventListener("click",() => btn.style.background="purple";)