function sumOfSquares(number) {
  var total = 0
  for(var i = 1; i <= number; i++) {
    total = total + square(i)
  }
  return total
}

function square(number) {
  console.log('the number within square', number)
  return number * number
}

console.log(sumOfSquares(50))


// without multiplication and without a second loop

var total = 1
var i = 1
for (var j = 2; j < 101; j++) {
  var k =
}
