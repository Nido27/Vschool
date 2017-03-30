var mongoose = require("mongoose");
var Person = require("./person.js");

mongoose.connect('mongodb://localhost/School');


var omar = new Person({
    name: 'omar',
    age: 4,
    isAlive: false
});

// insert and get
//omar.save(function (err, data) {
//    if (err) {
//        console.log(err);
//    } else {
//        Person.find({}, function (err, data) {
//            if (err) {
//                console.log(err);
//            } else {
//                console.log(data)
//            }
//        });
//    }
//});



// remove 
//Person.findOne({_id: "58c045d5e6f23b01789e313b"}, function (err, data) {
//    data.remove(function(err){
//        Person.find({},function(err,data){
//            if(err){
//                console.log(err);
//            }else {
//                console.log(data);
//            }
//        })
//    })
//})

//Update
Person.findOne({
    _id: "58c051871e786f0e3009806e"
}, function (err, data) {
    if (err) {
        console.log(err)
    } else {
        data.name = "jacob";
        data.save(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                Person.find({}, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
})