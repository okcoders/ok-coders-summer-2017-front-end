angular
  .module('ourSweetApp', [])

angular.module('ourSweetApp')
  .controller('ourFirstController', ourFirstController)

function ourFirstController() {
  var vm = this

  vm.ourFirstVariable = 'Wooooooooo!!!!!!'
}

