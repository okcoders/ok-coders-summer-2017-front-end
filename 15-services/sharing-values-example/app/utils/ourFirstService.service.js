angular
  .module('utils')
  .service('ourFirstService', ourFirstService)

function ourFirstService() {

  this.numberOfClicks = 0

  this.incrementClicks = function() {
    this.numberOfClicks ++
  }
}
