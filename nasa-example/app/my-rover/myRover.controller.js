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

  // myRoverResource.save(
  //   {
  //     name: 'Ok Coders',
  //     date: '2032-02-01',
  //     planet: 'mars',
  //     deprecation: 'a variable was undefined'
  //   },
  //   myRoverGetSuccess,
  //   myRoverGetFail)

  myRoverResource.query({}, myRoverGetSuccess, myRoverGetFail)

  // myRoverResource.deleteById({id: "573524f562c1b303001f8c6a"}, myRoverGetSuccess, myRoverGetFail)

  function myRoverGetSuccess(data) {
    $log.debug(data)
    vm.myRoverData = data
  }

  function myRoverGetFail(error) {
    $log.debug("oops!", error)
  }

  vm.deleteRover = function(id) {
    myRoverResource.deleteById(
        {id: id}
        )
  }

  vm.submitRoverForm = function() {
    myRoverResource.save(vm.newRover)
  }
}
