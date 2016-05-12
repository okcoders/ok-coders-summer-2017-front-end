angular
  .module('myRover')
  .controller('myRoverController', myRoverController)

myRoverController.$inject = [
  'myRoverResource',
  'lodash',
  '$log',
]

function myRoverController(
    myRoverResource,
    _,
    $log
) {

  vm = this

  // myRoverResource.save({name: 'test', date: '2015-02-01', planet: 'earth', deprecation: 'oops'}, myRoverGetSuccess, myRoverGetFail)

  myRoverResource.query({}, myRoverGetSuccess, myRoverGetFail)

  myRoverResource.deleteById({id: "5734f8d47c6ba47691e8c822"}, myRoverGetSuccess, myRoverGetFail)

  function myRoverGetSuccess(data) {
    $log.debug(data)
    // vm.myRoverData = data.myRover
    // vm.numberOfCameras = myRoverService.numberOfCameras()
  }

  function myRoverGetFail(error) {
    $log.debug("oops!", error)
  }
}
