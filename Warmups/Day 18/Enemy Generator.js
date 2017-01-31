function getRandom(min,max){
    return Math.floor(Math.random()*(max -min+1))+min;
}

var Enemies =function(type)
{
    var type =type;
    this.EnemiesType="";
    this.hitPoints=0;
    this.defense=0;
    this.generate=function(){
        var index = getRandom(0,type.length-1);
        this.EnemiesType=type[index];
        if(type[index] =="Ancient Dragon")
        {
            this.hitPoints=getRandom(80,100);
            this.defense=this.hitPoints*3;
            

        }else if (type[index]=="Prowler")
        {
            this.hitPoints=getRandom(50,79);
            this.defense=this.hitPoints*3;
           
        }else if (type[index]=="Mighty Grunt")
        {
            this.hitPoints=getRandom(20,49);
            this.defense=this.hitPoints*3;
            
        }
    
        }
}
    var possibleType=["Ancient Dragon","Prowler","Mighty Grunt"];
    
    for( var i=0;i<100;i++)
    {
        var tempEnemies= new Enemies(possibleType);
        tempEnemies.generate();
       console.log(tempEnemies.EnemiesType+ " \n"+tempEnemies.hitPoints+ " \n"+tempEnemies.defense);
    }
     