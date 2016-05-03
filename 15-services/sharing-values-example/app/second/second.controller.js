angular
  .module('second')
  .controller('secondController', secondController)

secondController.$inject = [
  'ourFirstService',
  'lodash',
  '$log',
]

function secondController(
    ourFirstService,
    _,
    $log
) {

  vm = this

  vm.numberOfClicks = ourFirstService.getNumberOfClicks()

  vm.clicked = function() {
    ourFirstService.incrementClicks()
    ourFirstService.incrementClicks()
  }
}
