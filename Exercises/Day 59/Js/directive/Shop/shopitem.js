var app=angular.module("shopModule",[]);
app.directive("itemInShop",function(){
    return{
        restrict:"AE",
        scope:{
            name:"=",
            currency:"@",
            amount:"=",
            price:"="
        },
        templateUrl: "Js/directive/shop/shopitem.html",
        link:function(scope,elem,attrs){
            var btn=elem.find("button");
            btn.bind("click",function(){
                scope.total=scope.amount*scope.price;
                scope.$apply();
            });
        }
    }
});