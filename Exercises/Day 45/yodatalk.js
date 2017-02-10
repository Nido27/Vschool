var app = angular.module("app", []);
var config = {
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};
app.service("todoService", function ($http) {
    this.getData = function (sentes) {
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + sentes, config)
    }
});
app.controller("httpCtrl", function ($scope, todoService) {
        $scope.trans = function () {
            todoService.getData($scope.input).then(function (response) {
                $scope.item = response.data;
            }, function (error) {
                console.log("error status: " + error.status);
            });
        };
 
});