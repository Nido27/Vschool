var Person=function(name,age,status){
    this.name=name;
    this.age=age;
    this.status=status;
    this.doing=function(){
        console.log(" my name is "+this.name+"my age is "+ this.age)
    }
}


var jameel= new Person("jameel",33,"typing");
jameel.doing();

var sarah= new Person("sarah",53,"typing");
sarah.doing();


var abed= new Person("abed",13,"typing");
abed.doing();

var ola= new Person("ola",23,"typing");
ola.doing();

var hiba= new Person("hiba",23,"typing");
hiba.doing();