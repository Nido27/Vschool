var app = angular.module("app.addItem", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/addItem", {
        templateUrl: "/js/Views/Products/addItem/addItem.html",
        controller: "addItemCtrl"
    })
})


app.controller("addItemCtrl", function ($scope, todoReq) {

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
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.push({
                    _id: dataGet[i]._id,
                    image: dataGet[i].image,
                    name: dataGet[i].name,
                    description: dataGet[i].description,
                    upVoted: dataGet[i].upVoted || 0,
                    downVoted: dataGet[i].downVoted || 0,
                    type: dataGet[i].type,
                    Comment: dataGet[i].Comment,
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
    $scope.add = function () {
        var data = {
            image: $scope.image,
            name: $scope.name,
            description: $scope.description,
            upVoted: $scope.upVoted || 0,
            downVoted: $scope.downVoted || 0,
            type: $scope.type,
            Comment: $scope.Comment

        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.image = "";
        $scope.name = "";
        $scope.description = "";
        $scope.type = "Select type";
    }

})