angular
  .module('main')
  .controller('mainController', mainController)

mainController.$inject = [
  'ourFirstService',
  'lodash',
  '$log',
  '$scope'
]

function mainController(
    ourFirstService,
    _,
    $log,
    $scope
) {

  vm = this
  vm.numberOfClicks = ourFirstService.numberOfClicks

  vm.clicked = function() {
    ourFirstService.incrementClicks()
    vm.numberOfClicks = ourFirstService.numberOfClicks
  }

  $scope.$on("$destroy", () => console.log("destroyed"))
}
