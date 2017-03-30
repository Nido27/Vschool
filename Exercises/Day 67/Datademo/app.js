var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var URL = "mongodb://localhost:27017/restaurant";

client.connect(URL, function (err, db) {
    if (err) {
        console.log(err);
    } else {
        var collection = db.collection("menu");
        collection.insert({
            name: "omar",
            cost: 5000,
            type: "human"
        }, function (err, result) {
            collection.find().toArray(function (err, docs) {
                console.log(docs);
                db.close();
            });
        });
    }
});