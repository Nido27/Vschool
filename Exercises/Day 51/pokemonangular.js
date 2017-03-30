var app = angular.module("app", []);
app.service("todoReq", function ($http) {
    this.getData = function (id) {
        console.log("http://pokeapi.co/api/v2/pokemon/"+id);
        return $http.get("http://pokeapi.co/api/v2/pokemon/"+id+ "/");
    }
})

app.controller("myCtrl", function ($scope, todoReq) {
    $scope.pokename = "";
    $scope.click=function(numInput){
       todoReq.getData(numInput).then(function (response) {
        //$scope.pokename = response.data.abilities[0].name;
        $scope.pokename = response.data.name;
    }, function (response) {
        console.log(response.status);
    }) 
    }
    

})