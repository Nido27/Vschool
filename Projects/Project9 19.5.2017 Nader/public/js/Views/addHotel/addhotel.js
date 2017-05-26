var app = angular.module("app.addHotel", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/addHotel", {
        templateUrl: "/js/Views/addhotel/addhotel.html",
        controller: "addhotelCtrl"
    })
})


app.controller("addhotelCtrl", function ($scope, todoReq, TokenService, privService) {
    $scope.hotels = [];
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
    $scope.loadhotel = function () {
        todoReq.gethotel().then(function (response) {
            $scope.hotels = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.hotels.push({
                    _id: dataGet[i]._id,
                    image: dataGet[i].image,
                    name: dataGet[i].name,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
                    Season: dataGet[i].Season,
                    Comment: dataGet[i].Comment,
                    price: dataGet[i].price,
                    isShowingComment: false,
                    isShowingAddComment: false,
                    isShowingEdit: false,
                    typeTemp: dataGet[i].type
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
    $scope.addHotel = function () {
        var data = {
            image: $scope.image,
            name: $scope.name,
            description: $scope.description,
            upVoted: $scope.upVoted || 0,
            downVoted: $scope.downVoted || 0,
            Season: $scope.Season,
            Comment: $scope.Comment,
            price: $scope.price,

        }
        todoReq.posthotel(data).then($scope.loadhotel, function (error) {
            console.log(error.status);
        });
        $scope.image = "";
        $scope.name = "";
        $scope.description = "";
        $scope.Season = "Select type";
        $scope.price = "";
    }


})