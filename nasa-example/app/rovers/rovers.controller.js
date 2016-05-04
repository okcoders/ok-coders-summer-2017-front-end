angular
  .module('rovers')
  .controller('roversController', roversController)

roversController.$inject = [
  'roversResource',
  'lodash',
  '$log',
]

function roversController(
    roversResource,
    _,
    $log
) {

  vm = this

  roversResource.get({}, roverGetSuccess, roverGetFail)

  function roverGetSuccess(data) {
    $log.debug(data)
    vm.roversData = data.rovers
    vm.roverGetSuccess = 'Hey! Check out these data from the Nasa Api'
  }

  function roverGetFail(error) {
    $log.debug("oops!", error)
    vm.roverGetFail = "Oops! We couldn't get the rover data!"
  }
}
