var jamilcar=[];
function Car (color,model, miles){
    this.color=color || "red";
    this.model=model || "BMW";
    this.miles=miles || 1000;
    
    this.run =function(){
        console.log("color : "+this.color+" "+"model : "+this.model+" "+"miles : "+this.miles+" "+"is running");
    };
};
    var car1= new Car("green", "WWW",1000);
    jamilcar.push(new Car("yellow", "CC",100));
    jamilcar.push(new Car("black", "BB",300));
    jamilcar.push( new Car("white", "MMM",400));
     

        for(var i=0;i<jamilcar.length;i++)
        {
            jamilcar.run();
        };

car1.run();