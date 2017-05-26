var app = angular.module("app.addOffear", ["ngRoute", "todoReqModule", "privModule" ,"tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/addOffear", {
        templateUrl: "/js/Views/addOffear/addOffear.html",
        controller: "addOffearCtrl"
    })
})


app.controller("addOffearCtrl", function ($scope, todoReq, TokenService, privService) {
  $scope.offears = [];
    $scope.sort = function (item) {
        return item.upVoted - item.downVoted;
    }
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.length; i++) {
            if ($scope[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.loadOffear = function () {
        todoReq.getoffear().then(function (response) {
            $scope.offears = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.offears.push({
                    _id: dataGet[i]._id,
                    image: dataGet[i].image,
                    name: dataGet[i].name,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
                    type: dataGet[i].type,
                    Comment: dataGet[i].Comment,
                    location: dataGet[i].location,
                    Season: dataGet[i].Season,
                    price:dataGet[i].price,
                    isShowingComment: false,
                    isShowingAddComment: false,
                    isShowingEdit: false,
                })
            }
        }, function (response) {
            console.log(response.status);
        })
    };




    //show/hide Post
    $scope.addStatus = function () {
            $scope.showStatus = !$scope.showStatus;
        }
        //Post
    $scope.addOffear = function () {
        var data = {
            image: $scope.image,
            name: $scope.name,
            description: $scope.description,
            upVoted: $scope.upVoted || 0,
            downVoted: $scope.downVoted || 0,
            location: $scope.location,
            Comment: $scope.Comment,
            price: $scope.price,
            Season:$scope.Season

        }
        todoReq.postOffear(data).then($scope.loadOffear, function (error) {
            console.log(error.status);
        });
        $scope.image = "";
        $scope.name = "";
        $scope.description = "";
        $scope.location = "Select Location";
        $scope.price = "";
    }
})