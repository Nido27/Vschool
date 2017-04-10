var app = angular.module("app.Homemodule", ["ngRoute", "todoReqModule", "privModule", "tokenModule", "authModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "/js/Views/Home/Home.html",
        controller: "HomeCtrl"
    })
})


app.controller("HomeCtrl", function ($scope, authSerivce, todoReq, privService, IdService, TokenService, $routeParams, $location) {

    $scope.loadPageData = function () {
        TokenService.getToken();
        IdService.getId();
        privService.getPriv();
        $scope.signOut = function () {
                TokenService.removeToken();
                privService.removePriv();
                IdService.removeId();
            }
            // item part
        $scope.items = [];
        $scope.sort = function (item) {
            return item.upVoted - item.downVoted;
        }
        $scope.getIndex = function (_id) {
            for (var i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i]._id == _id) {
                    return i;
                }
            }
            return -1;
        }
        $scope.loadData = function () {
            console.log("load")
            todoReq.getData().then(function (response) {
                $scope.items = [];
                var dataGet = response.data.data;
                for (var i = 0; i < dataGet.length; i++) {
                    $scope.items.push({
                        _id: dataGet[i]._id,
                        title: dataGet[i].title,
                        description: dataGet[i].description,
                        image: dataGet[i].image,
                        upVoted: dataGet[i].upVoted || 0,
                        downVoted: dataGet[i].downVoted || 0,
                        Comment: dataGet[i].Comment
                    })
                }
            }, function (response) {
                console.log(response.status);
            })
        };
        //upVoted
        $scope.like = function (_id) {
            $index = $scope.getIndex(_id);
            var upvote = $scope.items[$index].upVoted;
            upvote++;
            var data = {
                upVoted: upvote
            }
            todoReq.upVoted(_id, data).then($scope.loadData)

        }

    }
    $scope.Option = function () {
        $scope.SmallPlates = true;

        $scope.ShowSmallPlates = function () {
            $scope.SmallPlates = true;
            $scope.BarService = false;
            $scope.Catering = false;
        }
        $scope.ShowBarService = function () {
            $scope.SmallPlates = false;
            $scope.BarService = true;
            $scope.Catering = false;
        }
        $scope.ShowCatering = function () {
            $scope.SmallPlates = false;
            $scope.BarService = false;
            $scope.Catering = true;
        }
    }
});