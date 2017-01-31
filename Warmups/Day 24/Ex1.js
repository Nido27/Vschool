var Car =function(name,model,color)
{
    this.cname=name;
    this.cmodel=model;
    this.ccolor=color;
    this.star=function()
    {
        console.log("My car name is "+cname+" Car");
    };
    
}


var Lap=function(model,name,date)
{
    this.Lmodel=model;
    this.Lname=name;
    this.Ldate=date;
    this.star=function()
    {
        console.log("My Lap model is "+Lmodel);
    };
}

var Bag=function(model,name,date)
{
    this.bModel=model;
    this.bName=name;
    this.Bdate=date;
    this.star=function()
    {
        console.log("My bag name is "+bName+" bag");
    };
}

var Student=function(name,age,school)
{
    this.Sname=name;
    this.Sage=age;
    this.sSchool=school;
    this.begin=function()
    {
        console.log("the student name is "+Sname);
    };
}

var School=function(name,date,roomNumber)
{
    this.SName=name;
    this.Sdate=date;
    this.SroomNumber=roomNumber;
    this.startCount=function()
    {
        console.log("My School name is "+SroomNumber+" School");
    };
}
var team0 =
    {
        name: "Pname",
        age: 20,
        location:"Lebanon",
        trophy:[1,2,3,4]
    } ;


var Team1=
    {
        name:"VF",
        age:110,
        location:"China",
        trophy:[1,2,3,4,5,76]
    };


var Team2=
    {
        name:"CF",
        age:201,
        location:"Japan",
        trophy:[1,2,3,4,6,123,123]
    };


var Team3=
    {
        name:"SC",
        age:301,
        location:"USA",
        trophy:[1,2,3,92,6,82,72]
    };