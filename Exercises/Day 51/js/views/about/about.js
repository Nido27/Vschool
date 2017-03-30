var app = angular.module("app.about", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/about", {
        templateUrl: "/js/views/about/about.html",
        controller: "aboutController"
    })
})

app.controller("aboutController", function ($scope) {
    $scope.aboutmessage ="Palestine (region), a geographical and historical region in the Middle East State of Palestine, a modern de - jure sovereign state in the Middle East recognized by 136 UN members and with non - member observer state status in the United Nations Palestinian territories, or occupied Palestinian territories, terms referring to the West Bank(including East Jerusalem) and the Gaza Strip which are occupied or otherwise under the control of IsraelPalestinian National Authority, also known as the Palestinian Authority, an interim self - government body established in 1994 to govern parts of the territories.Since 2013, the Palestinian National Authority is officially referred to as the State of Palestine by most international organisations.";
    
    $scope.aboutpopl ="The population of palestine is 4.55 million ."
});