angular
  .module('nasaApi')
  .service('roverService', roverService)

roverService.$inject = ['roverResource', 'lodash']

function roverService(roverResource, _) {

  this.roverById = function(id, success, fail) {
    this.rover = roverResource.get({id: id}, success, fail)
    return this.rover
  }

  this.numberOfCameras = function() {
    return _.size(this.rover.rover.cameras)
  }
}
