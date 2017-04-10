var app = angular.module("app.ContactUs", ["ngRoute", "todoReqModule", "privModule", "tokenModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/ContactUs", {
        templateUrl: "/js/Views/ContactUs/ContactUs.html",
        controller: "ContactUsCtrl"
    })
})


app.controller("ContactUsCtrl", function ($scope, todoReq, privService, TokenService, IdService) {

//  //ContactUs
//    $scope.addContactus = function () {
//        $scope.id = IdService.getId()
//        todoReq.contactUs($scope.id, $scope.Contactus).then();
//        $scope.Contactus="";
//    }

})