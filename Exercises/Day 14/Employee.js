var employees=[];

function Employee (name,jobtitle,salary,status){
    this.Name=name;
    this.postion=jobtitle;
    this.salary=salary;
    this.status=status || "Full Time";
    
    this.printEmployeeForm =function(){
        console.log("Name : "+this.Name+" "+"Postion : "+this.postion+" "+"Salary : "+"$"+this.salary+"/hours"+" "+this.status);
    }
};

    var empo1 = new Employee("bob"," School",3000,"full time")
    var empo2 = new Employee("jacob","V ",200,"full time")
    var empo3 = new Employee("layal"," Instructor",3000,"full time")
    var empo4 = new Employee("hiba","V School Instructor",3000,"full time")
    var empo5 = new Employee("Nader","Instructor",500)
    
    console.log(empo1 ,empo2,empo3,empo4);

empo5.printEmployeeForm();

employees.push(new Employee("sara" ,"teacher", 111111));

for(var i=0; i<employees.length;i++){
    employees[i].printEmployeeForm();
};