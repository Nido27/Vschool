var app = angular.module("myApp", ["ngRoute", "todoReqModule", "app.Homemodule", "app.SignUp", "authModule", "tokenModule", "app.signin", "app.AdminRole", "app.addOffear", "app.addHotel", "app.Fall", "app.Spring", "app.Summer", "app.Winter", "app.Hotels"]);
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/Home"
    }).otherwise("/", {
        redirectTo: "/Home"
    })
});

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService, privService, IdService, UsernameService) {

    this.request = function (config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            IdService.removeId();
            privService.removePriv();
            UsernameService.removeUsername();
            $location.path("/signin");
        }
        return $q.reject(response);
    };

}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");

}]);

app.controller("Index", function ($scope, authSerivce, todoReq, privService, IdService, TokenService, $routeParams, $location, UsernameService) {
    $scope.usedUser=UsernameService.getUsername();
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

    $scope.navref = function () {
        $scope.token = TokenService.getToken();
        $scope.id = IdService.getId();
        $scope.priv = privService.getPriv();
        $scope.Username = UsernameService.getUsername();
    }

    $scope.signOut = function () {
        TokenService.removeToken();
        privService.removePriv();
        IdService.removeId();
        UsernameService.removeUsername();
        location.reload();
        $location.path("/SignUp");
    }
    $(document).ready(function () {
        $("#XXXX").click(function () {
            $("#ZZZZ").modal();
        });
    });
    $scope.userinput = {};
    $scope.signin = function () {
        authSerivce.signin($scope.userinput).then(function (response) {
            TokenService.save(response.data.token);
            privService.setPriv(response.data.priv);
            IdService.setId(response.data.id);
            UsernameService.setUsername(response.data.Username);
            $scope.userinput = {};
            location.reload();
            $location.path("/Home");
        }, function (response) {
            $scope.userErr = "You Enter Wrong Username Or Password Please try to Sign in Agin !!!";
            console.log(response);
        })

    };

})