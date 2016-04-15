function higherOrder(callback) {
  console.log("Logging the function value, but not calling it", callback)
  console.log(callback)
  callback()
}

function toPassIn() {
  console.log("I was passed in!")
}

higherOrder(toPassIn)

function lowerOrder(regValue) {
  console.log(regValue)
}

lowerOrder("stuff")

function sayHello(name) {
  console.log("", name, "How are you today?")
}

// don't do this, it is not dry
console.log("Hello Zach, How are you today?")
console.log("Hello David, How are you today?")
console.log("Hello Susan, How are you today?")

var array1 = [5, 3, 4, 3, 2, 1]
var array2 = [5, 3, 4, 3, 2, 1, 7, 8, 9, 10]
var array3 = [5, 3, 4, 3, 2, 1, 7, 8, 9, 10, 14, 15]

var array1Prime = []
for (var i = 0; i < array1.length; i++) {
  array1Prime[i] = array1[i] + 10
}

var array2Prime = []
for (var i = 0; i < array2.length; i++) {
  array2Prime[i] = array2[i] + 100
}

function map(array, action) {
  var arrayPrime = []
  for (var i = 0; i < array.length; i++) {
    arrayPrime[i] = action(array[i])
  }
  return arrayPrime
}

map(array3, function(v) { return v + 100 })
map(array3, function(v) { return v + 10 })
map(array3, function(v) { return v + 1000 })
map(array3, function(v) { return v + 10000 })
var newArrayPlus10000 = map(array3, v => v + 10000)
console.log(newArrayPlus10000)

