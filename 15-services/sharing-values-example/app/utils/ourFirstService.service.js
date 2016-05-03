angular
  .module('utils')
  .service('ourFirstService', ourFirstService)

function ourFirstService() {

  this.numberOfClicks = 0

  this.getNumberOfClicks = function() {
    return this.numberOfClicks
  }

  this.incrementClicks = function() {
    this.numberOfClicks ++
  }
}
