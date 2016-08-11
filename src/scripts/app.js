'use strict';
angular.module('restaurantReviewApp',['ngRoute','RestaurantService']);
angular.module('restaurantReviewApp')
  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider,$routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/', {
          templateUrl: 'templates/restaurant-list.html',
        })
        .when('/restaurants/:id',{
          templateUrl:'templates/restaurant-detail.html'
        })
        .otherwise('/404',{
          controller: 'ErrorController',
          templateUrl:'templates/404.html'
        });
    }
  ])
  .controller('RestaurantListController',function($scope,Restaurant) {
    $scope.restaurants = Restaurant.query();
  })
  .controller('RestaurantDetailController',function($scope,$routeParams,Restaurant) {
    $scope.restaurant = Restaurant.get({restaurantId: $routeParams.id});
  })
  .controller('ErrorController',function($scope) {
    $scope.title = '404 Error!';
    $scope.message = 'Oops! The page does not exist.';
  })

angular.module('RestaurantService',['ngResource'])
  .factory('Restaurant',['$location','$resource',
    function($location,$resource) {
      var url = $location.host();
      var Restaurant = $resource('/restaurants/:id.json',{},{
        query: {
          method: 'GET',
          params: {id:'restaurants'},
          isArray: true
        }
      });
      return Restaurant;
    }]);
