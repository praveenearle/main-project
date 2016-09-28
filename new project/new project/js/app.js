'use strict';


var storeApp = angular.module('AngularStore', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'partials/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
      }).
      when('/vegetables', {
          templateUrl: 'partials/vegetables.htm',
          controller: storeController
      }).
       when('/grocery', {
           templateUrl: 'partials/grocery.htm',
           controller: storeController
       }).
      
      otherwise({
        redirectTo: '/store'
      });
}]);


storeApp.factory("DataService", function () {

    
    var myStore = new store();

    
    var myCart = new shoppingCart("AngularStore");

    
    return {
        store: myStore,
        cart: myCart
    };
});