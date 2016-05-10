angular
  .module('rovers')
  .filter('properCase', properCase)

properCase.$inject = ['lodash']

function properCase(_) {
  return function(input) {
    return _.startCase(input)
  }
}
