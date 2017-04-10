var app = angular.module("myApp", ["ngRoute", "todoReqModule", "app.Homemodule", "app.Feedback", "app.Products", "app.SignUp", "app.ContactUs", "app.Breakfast", "app.Desserts", "app.JuiceAndIceCream", "app.Platters", "app.Sandwish", "app.onePost", "app.addItem", "authModule", "tokenModule", "app.signin","app.AdminRole"]);
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/Home"
    }).otherwise("/", {
        redirectTo: "/Home"
    })
});

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService, privService, IdService) {
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
            $location.path("/signin");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);

app.controller("Index", function ($scope, authSerivce, todoReq, privService, IdService, TokenService, $routeParams, $location) {
     
    $scope.navref = function () {
        $scope.token = TokenService.getToken();
        $scope.id = IdService.getId();
        $scope.priv = privService.getPriv();
    }

    $scope.signOut = function () {
        TokenService.removeToken();
        privService.removePriv();
        IdService.removeId();
          location.reload();
        $location.path("/Signin");
    }
    
})