angular
  .module('rover')
  .controller('roverController', roverController)

roverController.$inject = [
  'id',
  'roverService',
  'lodash',
  '$log',
]

function roverController(
    roverId,
    roverService,
    _,
    $log
) {

  console.log("inside the controller", roverId)
  vm = this

  roverService.roverById(roverId, roverGetSuccess, roverGetFail)

  function roverGetSuccess(data) {
    $log.debug(data)
    vm.roverData = data.rover
    vm.numberOfCameras = roverService.numberOfCameras()
    console.log(vm.numberOfCameras)
  }

  function roverGetFail(error) {
    $log.debug("oops!", error)
  }
}
