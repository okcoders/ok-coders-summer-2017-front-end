angular
  .module('basicApp')
  .config(config)

config.$inject = ['$routeProvider']

function config($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'main/main.partial.html',
      controller: 'mainController as main'
    })
    .when('/second', {
      templateUrl: 'second/second.partial.html',
      controller: 'secondController as second'
    })
    .otherwise({redirectTo: '/main'})
}
