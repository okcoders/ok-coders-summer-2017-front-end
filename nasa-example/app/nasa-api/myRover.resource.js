angular
  .module('nasaApi')
  .factory('myRoverResource', myRoverResource)

myRoverResource.$inject = ['$resource']

function myRoverResource($resource) {
  return $resource(
    'https://gentle-hamlet-68780.herokuapp.com/api/rover',
    {},
    {
      deleteById: {
        method: 'DELETE',
        url: 'https://gentle-hamlet-68780.herokuapp.com/api/rover/:id'
      }
    }
    )
}

// https://gentle-hamlet-68780.herokuapp.com/api/rover
