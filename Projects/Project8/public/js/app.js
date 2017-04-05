var app = angular.module("myApp", ["ngRoute", "todoReqModule", "app.Homemodule", "app.Feedback", "app.Products", "app.SignUp", "app.ContactUs", "app.Breakfast", "app.Desserts", "app.JuiceAndIceCream", "app.Platters", "app.Sandwish", "app.onePost", "app.addItem", "authModule", "tokenModule", "app.signin"]);
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/Home"
    }).otherwise("/", {
        redirectTo: "/Home"
    })
});

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
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
            $location.path("/signin");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);