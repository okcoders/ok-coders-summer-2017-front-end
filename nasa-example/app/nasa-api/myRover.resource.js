angular
  .module('nasaApi')
  .factory('myRoverResource', myRoverResource)

myRoverResource.$inject = ['$resource']

function myRoverResource($resource) {
  return $resource('http://localhost:5000/api/rover', {}, {
      deleteById: {method: 'DELETE', url: 'http://localhost:5000/api/rover/:id' }})
}

// https://gentle-hamlet-68780.herokuapp.com/api/rover
