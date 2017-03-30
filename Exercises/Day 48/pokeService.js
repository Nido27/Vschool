var app = angular.module("myApp", []);
app.service("todoReq", function () {
    this.favoritepoke = []
    this.addpoke = function (name) {
        if(this.favoritepoke.indexOf(name) == -1) {
            this.favoritepoke.push(name);
        }else {
            alert("you already added this pokemon");
        }
    };
    this.removepoke = function (name) {
        var index=this.favoritepoke.indexOf(name);
        
            if (index != -1) {
                this.favoritepoke.splice(index, 1)
            }else {
                alert("Your input name isn't of the favorite names list");
            }
    };
});


app.controller("myCtrl", function ($scope, todoReq) {
    $scope.display = [];
    $scope.add = function () {
        todoReq.addpoke($scope.input);
        $scope.display = todoReq.favoritepoke;
        $scope.input = "";

    }

    $scope.remove = function () {
        todoReq.removepoke($scope.input);
        $scope.display = todoReq.favoritepoke;
        $scope.input = "";
    }
});