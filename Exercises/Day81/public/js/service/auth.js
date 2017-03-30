var app = angular.module("authModule", []);
app.service("TokenService", [function () {  
    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };
}]);

app.service("authService", function($http,TokenService) {
    this.signUp = function(data) {
        return $http.post("http://localhost:8080/signup/", data)
    }
    this.login = function(data) {
        return $http.post("http://localhost:8080/login/", data).then(function(response){
            TokenService.setToken(response.data.token);
            return response;
        })
    }
})