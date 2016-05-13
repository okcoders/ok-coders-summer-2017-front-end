angular
  .module('rovers')
  .filter('properCase', properCase)

properCase.$inject = ['lodash']

function properCase(_) {
  return function(input, showReverse) {
    var reversed = _.reverse(_.split(input, '')).join('')
    console.log(reversed)
    var same = input === reversed
    if (same) {
      var returnString = `Yes ${input} is!`
    } else if (showReverse) {
      var returnString = `No ${input} is not! The reverse is ${reversed}`
    } else {
      var returnString = `No ${input} is not!`
    }
    return returnString
  }
}
