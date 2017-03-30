var mongoose = require("mongoose");
var Menu = require("./menu.js")
var express = require("express");
var apiRouter= express.Router();
var bodyParser = require("body-parser");
var uuid = require("uuid");
mongoose.connect('mongodb://localhost/resturant');




apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/resturant", function (req, res) {
 Menu.find({},function(err,data){
     if (err){
         res.status(500).send({message:"Error in db", err:err});
         
     }else {
         res.status(200).send({message:"here is the data" ,data:data})
     }
 })

});


apiRouter.post("/resturant", function (req, res) {
   var newMenu= new Menu(req.body);
    newMenu.save(function(err,data){
         if (err){
         res.status(500).send({message:"Error in db", err:err});
         
     }else {
         res.status(200).send({message:"here is the data" ,data:data})
     }
        
    })
    
   
 
    
    
});




module.exports=apiRouter;

//apiRouter.get("/Resturant/:id", function (req, res) {
//    var id = req.params.id;
//    for (var i = 0; i < data.length; i++) {
//        if (data[i].id == id) {
//            res.status(200).send(data[i]);
//        }
//    }
//});


//apiRouter.post("/", function (req, res) {
//    var dataList = {
//        id: uuid.v4(),
//        firstName: req.body.firstName,
//        lastName: req.body.lastName,
//        living: req.body.living,
//        bountyAmount: req.body.bountyAmount,
//        type: req.body.type
//    };
//    var didpass = fnValidate(dataList);
//    if (didpass.pass == false) {
//        res.status(400).send({
//            message: didpass.message
//        })
//    } else {
//        data.push(dataList);
//        res.status(200).send({
//            sucess: true
//        });
//    }
//});
//
//apiRouter.delete("/Resturant/:id", function (req, res) {
//    var id = req.params.id;
//    for (var i = 0; i < data.length; i++) {
//        if (data[i].id == id) {
//            data.splice(i, 1);
//            res.status(200).send({
//                sucess: true
//            });
//        }
//    }
//
//});


























//var newmenu = new menu({
//    name: "food",
//    cost:500,
//    type: 'main'
//})

//newstd.save( function (err, new_student) {  
//if (err){
//    console.log(err)  
//}
//    else{
//       Student.find({}, function (err, students) {
//           if (err){
//       console.log(err)  
//}
//           else{
//              console.log(students); 
//           }
//       
//})
//    }
//});

//menu.find({}, function (err, menus) {
//    if (err) {
//        console.log(err)
//    } else {
//        console.log(menus);
//    }
//})


//Student.findOne({_id: '58c047535a1ed4305cf22828'}, function (err, new_student) {  
//  new_student.remove( function (err) {
//   Student.find({}, function (err, students) {
//    if (err) {
//        console.log(err)
//    } else {
//        console.log(students);
//    }
//})
//  });
//});


//menu.findOne({_id: '58c046a5ef96d61cb001e166'}, function (err, mnu) {  
//  mnu.name= "talal"
//  mnu.save( function (err, data) {
//   menu.find({}, function (err, menus) {
//    if (err) {
//        console.log(err)
//    } else {
//        console.log(menus);
//    }
//})
//
//  });
//});

