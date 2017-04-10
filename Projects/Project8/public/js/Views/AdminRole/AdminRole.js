var app = angular.module("app.AdminRole", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/AdminRole", {
        templateUrl: "/js/Views/AdminRole/AdminRole.html",
        controller: "AdminRoleCtrl"
    })
})
app.controller("AdminRoleCtrl", function ($scope, todoReq, privService, TokenService, IdService) {
    
    $scope.getIndex = function (_id) {
        for (var i = 0; i < $scope.Users.length; i++) {
            if ($scope.Users[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }
    $scope.updateUser = function () {
        todoReq.getUser().then(function (response) {
                $scope.Users = [];
            var dataGet = response.data.data;
            for (var i = 0; i < dataGet.length; i++) {
                $scope.Users.push({
                    id: dataGet[i]._id,
                    Username: dataGet[i].Username,
                    privilege: dataGet[i].privilege,
                    image: dataGet[i].image,
                    privilegeTemp: dataGet[i].privilege
                })
            }
           
        }, function (response) {
            console.log(response.status);
        })
    }
    $scope.loadUser = function () {
        $scope.makeAdmin = function ($index) {
            var data = {
                id: $scope.Users[$index].id,
                Username: $scope.Users[$index].Username,
                privilege: $scope.Users[$index].privilegeTemp,
            }
            todoReq.editUser(data.id, data).then(function () {
                 $scope.updateUser();
            }, function (error) {
                $scope.userErr = "You You must be Admin to make User Admin";
                console.log(error.status);
            });
        }
    }
    $scope.RoleOption = function () {
        $scope.AdminRole = true;
        $scope.Showadmin = function () {
            $scope.AdminRole = true;
            $scope.UserRole = false;
        }
        $scope.ShowUser = function () {
            $scope.AdminRole = false;
            $scope.UserRole = true;
        }
    }
    
})