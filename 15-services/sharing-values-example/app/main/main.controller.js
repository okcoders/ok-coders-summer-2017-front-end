angular
  .module('main')
  .controller('mainController', mainController)

mainController.$inject = [
  'ourFirstService',
  'lodash',
  '$log',
]

function mainController(
    ourFirstService,
    _,
    $log
) {

  vm = this
  vm.numberOfClicks = ourFirstService.getNumberOfClicks()

  vm.clicked = function() {
    ourFirstService.incrementClicks()
    vm.numberOfClicks = ourFirstService.getNumberOfClicks()
  }
}
