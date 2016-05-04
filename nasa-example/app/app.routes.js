angular
  .module('nasa')
  .config(config)

config.$inject = ['$routeProvider']

function config($routeProvider) {
  $routeProvider
    .when('/rovers', {
      templateUrl: 'rovers/rovers.partial.html',
      controller: 'roversController as rovers'
    })
    .when('/rover/:id/', {
      templateUrl: 'second/second.partial.html',
      controller: 'secondController as second',
      resolve: {
        id: function($route) {
          console.log($route)
          return $route.current.params.id
        }
      }
    })
    .otherwise({redirectTo: '/rovers'})
}
