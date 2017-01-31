var car=function(type,color,model){
    this.carType=type;
    this.carColor=color;
    this.carModel=model;
    this.star=function(){
        console.log("turn the key on"+ this.carType+" car ")
    }
}


var Car1= new car("Bmw","red",2002);
Car1.star();
