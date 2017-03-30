var app = angular.module("app", ["apiModule", "app.home", "app.login", "app.signup", "authModule"]);

app.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo : "/home"
    }).otherwise({
        redirectTo : "/home"
    })
})

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {  
    this.request = function(config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function(response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {  
    $httpProvider.interceptors.push("AuthInterceptor");
}]);


app.controller("ctrl",function($scope,TokenService,$location){
    $scope.logout=function(){
        TokenService.removeToken();
        $location.path("/");
    }
})

