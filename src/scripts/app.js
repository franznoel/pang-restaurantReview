'use strict';
angular.module('restaurantReviewApp',[
    'ngRoute',
    'RestaurantService',
    'RestaurantList',
    'RestaurantDetail'
  ]);
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
        .when('/restaurants/:id/review',{
          templateUrl:'templates/restaurant-review.html'
        })
        .otherwise('/404',{
          controller: 'ErrorController',
          templateUrl:'templates/404.html'
        });
    }
  ]);

angular.module('RestaurantList',[
    'RestaurantService'
  ])
  .controller('RestaurantListController',function($scope,Restaurant) {
    $scope.restaurants = Restaurant.query();
  });

angular.module('RestaurantDetail',[
    'ngRoute',
    'RestaurantService'
  ])
  .controller('RestaurantDetailController',function($scope,$routeParams,Restaurant) {
    // var self = this;
    // console.log($routeParams.id);
    $scope.restaurant = Restaurant.get({restaurantId:$routeParams.id});
  });

angular.module('RestaurantError',[
    'ngRoute',
  ])
  .controller('RestaurantErrorController',function($scope) {
    $scope.title = '404 Error!';
    $scope.message = 'Oops! The page does not exist.';
  });

angular.module('RestaurantService',['ngResource'])
  .factory('Restaurant',['$resource',
    function($resource) {
      var restaurant = $resource('/restaurants/:restaurantId.json',{},{
        query: {
          method: 'GET',
          params: {restaurantId:'restaurants'},
          isArray: true
        }
      });
      return restaurant;
    }]);
