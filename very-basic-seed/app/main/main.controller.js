angular
  .module('main')
  .controller('mainController', mainController)

mainController.$inject = [
  'lodash',
  '$log',
]

function mainController(
    _,
    $log
) {

  vm = this
}
