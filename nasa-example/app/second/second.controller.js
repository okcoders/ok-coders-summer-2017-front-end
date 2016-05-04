angular
  .module('second')
  .controller('secondController', secondController)

secondController.$inject = [
  'id',
  'roverResource',
  'lodash',
  '$log',
]

function secondController(
    roverId,
    roverResource,
    _,
    $log
) {

  console.log("inside the controller", roverId)
  vm = this

  roverResource.get({id: roverId}, roverGetSuccess, roverGetFail)

  function roverGetSuccess(data) {
    $log.debug(data)
    vm.secondData = data.second
    vm.roverGetSuccess = 'Hey! Check out these data from the Nasa Api'
  }

  function roverGetFail(error) {
    $log.debug("oops!", error)
    vm.roverGetFail = "Oops! We couldn't get the rover data!"
  }
}
