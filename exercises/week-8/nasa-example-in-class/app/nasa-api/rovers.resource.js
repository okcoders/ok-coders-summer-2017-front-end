angular
  .module('nasaApi')
  .factory('roversResource', roversResource)

roversResource.$inject = ['$resource']

function roversResource($resource) {
  return $resource('https://api.nasa.gov/mars-photos/api/v1/rovers',
      {api_key: '5sORWLJhulARvNQfNjW5kO8ydnnkI9GrRZaTeTuM'}, {})
}
