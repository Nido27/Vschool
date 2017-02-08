var app = angular.module("MyApp", []);
app.service("redService", function () {
    this.score = 100;
    this.inc = function () {
        this.score++;
    };

    this.dec = function () {
        this.score--;
    };

    this.rest = function () {
        this.score = 100;
    };

});


app.service("blueService", function () {
    this.score = 100;
    this.inc = function () {
        this.score++;
    };

    this.dec = function () {
        this.score--;
    };

    this.rest = function () {
        this.score = 100;
    };

});


app.controller("mainCtrl", function ($scope, blueService, redService) {
    $scope.blueScore = blueService.score;
    $scope.redScore = redService.score;
    $scope.update = function () {
        if(blueService.score <= 0){
            blueService.rest();
        }
         if(redService.score <= 0){
            redService.rest();
        }
        $scope.blueScore = blueService.score;
        $scope.redScore = redService.score;
    }

    $scope.redAction = function () {
        redService.inc();
        blueService.dec();
        $scope.update();
    };

    $scope.blueAction = function () {
        blueService.inc();
        redService.dec();
        $scope.update();
    };
});