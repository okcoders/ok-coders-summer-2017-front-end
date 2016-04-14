function map(array, callback) {
  var newarray = []
  for (var i = 0; i < array.length; i++) {
    newarray[i] = callback(array[i])
  }
  return newarray
}

var people = [
  {
          firstName: "OK",
          lastName: "Coders",
          age: 1,
          city: "OKC"
  },
  {
          firstName: "Zach",
          lastName: "Mays",
          age: 26,
          city: "OKC"
  }
]

var firstNames = map(people, function(item) {
  return item.firstName
})

console.log(firstNames)
