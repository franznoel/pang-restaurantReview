'use strict';
angular.module('restaurantReviewApp',['ngRoute']);
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
  .controller('RestaurantDetailController',function($scope,$location,Restaurant) {
    var path = $location.path();
    path = path.split("/");
    path = path[2];
    console.log(path);
    $scope.restaurant = Restaurant.get({id:path});
  })
  .controller('ErrorController',function($scope) {
    $scope.location = $location.absUrl();
    $scope.title = '404 Error!';
    $scope.message = 'Oops! The page does not exist.';
  })
  .factory('Restaurant',function(filterFilter) {
    var restaurants = [
      {
        "id": "horseless-carriage-restaurant",
        "name":"Horseless Carriage Restaurant",
        "photo": "images/horseless-carriage.jpg",
        "address": "15505 Roscoe Blvd, North Hills, CA 91343",
        "type": "American"
      },
      {
        "id": "kinarra-thai",
        "name":"Kinnara Thai",
        "photo": "images/horseless-carriage.jpg",
        "address": "15355 Sherman Way, Van Nuys, CA 91406",
        "type": "Thai"
      },
      {
        "id": "mercado-buenos-aires",
        "name":"Mercado Buenos Aires",
        "photo": "images/horseless-carriage.jpg",
        "address": "7540 Sepulveda Blvd, Van Nuys, CA 91405",
        "type": "Thai"
      },
      {
        "id": "norms-restaurant",
        "name":"Norms Restaurant",
        "photo": "images/horseless-carriage.jpg",
        "address": "13640 Sherman Way, Van Nuys, CA 91405",
        "type": "American"
      },
      {
        "id": "pho-999",
        "name":"Pho 999",
        "photo": "images/horseless-carriage.jpg",
        "address": "6411 Sepulveda Blvd #1L, Van Nuys, CA 91411",
        "type": "Thai"
      },
      {
        "id": "sam-woo-bbq",
        "name":"Sam Woo BBQ",
        "photo": "images/horseless-carriage.jpg",
        "address": "6411 Sepulveda Blvd #1L, Van Nuys, CA 91411",
        "type": "Chinese"
      },
      {
        "id": "sam-woo-bbq",
        "name":"Sam Woo BBQ",
        "photo": "images/horseless-carriage.jpg",
        "address": "6411 Sepulveda Blvd #1L, Van Nuys, CA 91411",
        "type": "Chinese"
      },
      {
        "id": "the-habit-burger-grill",
        "name":"The Habit Burger Grill",
        "photo": "images/horseless-carriage.jpg",
        "address": "7221 Van Nuys Blvd, Van Nuys, CA 91405",
        "type": "Fast Food"
      }
    ];

    return {
      query: function(params) {
        return filterFilter(restaurants, params);
      },
      get: function(params) {
        return this.query(params)[0];
      }
    };

  });

