var request = require("request");
request("http://pokeapi.co/api/v1/pokemon/25/",function(error, response, body){
    if(response.statusCode == 200){
        var data =JSON.parse(body);
        console.log("name : "+data["name"]);
        console.log("url : "+data["resource_uri"]);
        console.log("attack : "+data["attack"]);
        console.log("defense : " +data["defense"]);
    }else{
        console.log(error);
        console.log(response.statusCode);
    }
});