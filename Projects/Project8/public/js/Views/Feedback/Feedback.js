var app = angular.module("app.Feedback", ["ngRoute", "todoReqModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/Feedback", {
        templateUrl: "/js/Views/Feedback/Feedback.html",
        controller: "FeedbackCtrl"
    })
})


app.controller("FeedbackCtrl", function ($scope, todoReq) {

})