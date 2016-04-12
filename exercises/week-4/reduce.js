var seedArray = [1, 2, 3, 4, 5]

function reduce(array, callback) {
  var reduced = array[0]
  for (var i = 1; i < array.length; i++) {
    reduced = callback(reduced, array[i])
  }
  return reduced
}

function seedCallback(total, current) {
  return total + current
}

console.log(reduce(seedArray, seedCallback))
