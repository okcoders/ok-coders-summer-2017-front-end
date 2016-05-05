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
      templateUrl: 'rover/rover.partial.html',
      controller: 'roverController as rover',
      resolve: {
        id: function($route) {
          console.log($route)
          return $route.current.params.id
        }
      }
    })
    .otherwise({redirectTo: '/rovers'})
}
