var restaurantReview = angular.module('app',['ngRoute']);

restaurantReview.config(['$locationProvider','$routeProvider',
    function($locationProvider,$routeProvider) {
    // $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        template: '<restaurants></restaurants>'
      })
      .when('/restaurants/:restaurantId',{
        template:'<restaurant-detail></restaurant-detail>'
      })
      .otherwise('/');
  }
]);

restaurantReview.controller('RestaurantController',['$scope',function($scope) {
  $scope.restaurants = [
    {
      name:'Horseless Carriage Restaurant',
      photo: 'images/horseless-carriage.jpg',
      address: '15505 Roscoe Blvd, North Hills, CA 91343',
      type: 'American',
      hours: [
        {'day': 'Monday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Tuesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Wednesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Thursday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Friday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Saturday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Sunday','from': '8:00:00','to': '17:00:00'},
      ],
      reviews: [
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5}
      ]
    },
    {
      name:'Horseless Carriage Restaurant',
      photo: 'images/horseless-carriage.jpg',
      address: '15505 Roscoe Blvd, North Hills, CA 91343',
      type: 'American',
      hours: [
        {'day': 'Monday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Tuesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Wednesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Thursday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Friday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Saturday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Sunday','from': '8:00:00','to': '17:00:00'},
      ],
      reviews: [
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5}
      ]
    },
    {
      name:'Horseless Carriage Restaurant',
      photo: 'images/horseless-carriage.jpg',
      address: '15505 Roscoe Blvd, North Hills, CA 91343',
      type: 'American',
      hours: [
        {'day': 'Monday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Tuesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Wednesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Thursday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Friday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Saturday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Sunday','from': '8:00:00','to': '17:00:00'},
      ],
      reviews: [
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5}
      ]
    },
    {
      name:'Horseless Carriage Restaurant',
      photo: 'images/horseless-carriage.jpg',
      address: '15505 Roscoe Blvd, North Hills, CA 91343',
      type: 'American',
      hours: [
        {'day': 'Monday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Tuesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Wednesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Thursday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Friday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Saturday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Sunday','from': '8:00:00','to': '17:00:00'},
      ],
      reviews: [
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5}
      ]
    },
    {
      name:'Horseless Carriage Restaurant',
      photo: 'images/horseless-carriage.jpg',
      address: '15505 Roscoe Blvd, North Hills, CA 91343',
      type: 'American',
      hours: [
        {'day': 'Monday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Tuesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Wednesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Thursday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Friday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Saturday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Sunday','from': '8:00:00','to': '17:00:00'},
      ],
      reviews: [
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5}
      ]
    },
    {
      name:'Horseless Carriage Restaurant',
      photo: 'images/horseless-carriage.jpg',
      address: '15505 Roscoe Blvd, North Hills, CA 91343',
      type: 'American',
      hours: [
        {'day': 'Monday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Tuesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Wednesday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Thursday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Friday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Saturday','from': '8:00:00','to': '17:00:00'},
        {'day': 'Sunday','from': '8:00:00','to': '17:00:00'},
      ],
      reviews: [
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5},
        {'date':'','author':'Franz','comment':'I like this place','rating':5}
      ]
    },    
  ];
}])
.directive('restaurants',function() {
  return {
    templateUrl: 'templates/restaurants.html'
  }
});

