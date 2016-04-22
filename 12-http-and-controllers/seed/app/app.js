angular
  .module('ourSweetApp', [])

angular.module('ourSweetApp')
  .controller('ourFirstController', ourFirstController)

function ourFirstController() {
  var vm = this
  vm.show = true

  vm.ourFirstVariable = 'Wooooooooo!!!!!!'
  vm.people = [
    {first: 'zach', last: 'mays', age: 26},
    {first: 'doug', last: 'fresh', age: 34},
    {first: 'prince', last: 'prince', age: 57.4}
  ]

  vm.respondToClick = function() {
    vm.show = false
    console.log("Holy poop! This is awesome")
  }
}

