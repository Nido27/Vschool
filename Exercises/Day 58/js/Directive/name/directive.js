var app = angular.module("nameMoudle", []);
app.directive("name", function () {
    return {
        scope: {
            title: "=",
            colorOfText: "@"
        },
        restrict: "AE",
        templateUrl: "js/Directive/name/name.html",
        link: function (scope, elem, attrs) {
            console.log("Loaded the directive");
            elem.bind("click", function () {
                console.log(scope.title);
                console.log(scope.colorOfText);
                elem.css("color", scope.colorOfText);
            })
        }
    }
})