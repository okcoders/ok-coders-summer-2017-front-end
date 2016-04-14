function higherOrder(aFunction) {
  aFunction()
}

higherOrder(function() {
  // console.log("I was called")
})

var myArray = [1, 2, 3, 4, 5]

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    console.log(callback(array[i]))
  }
}

function addOne(current) {
  return current + 1
}

function lame(current) {
  return current
}

function subtracts1(current) {
  return current - 1
}

forEach(myArray, function(value) { returns value + 1})
