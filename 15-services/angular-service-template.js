angular
  .module('serviceExample')
  .service('example', example)

example.$inject = ['$log', 'lodash']

function example($log, lodash) {

  this.exampleServiceMethod = function(params) {
    return params
  }
}
