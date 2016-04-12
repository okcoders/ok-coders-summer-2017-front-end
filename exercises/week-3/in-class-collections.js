var person = {
  firstName: 'Zach',
  lastName: 'Mays',
  fullName: function() {
    return this.firstName + ' ' + this.lastName
  },
  age: 26,
  house: {color: 'blue', rent: {temp: 'test'}, squareFootage: 1000, squareFootageUnits: 'feet' }
}
var person2 = {
  firstName: 'Jack',
  lastName: 'Mays',
  fullName: function() {
    return this.firstName + ' ' + this.lastName
  },
  age: 26,
  house: {color: 'blue', rent: {temp: 'test'}, squareFootage: 1000, squareFootageUnits: 'feet' }
}

var myFirstArray = ['first value', 'second value', 'third value']


personArray = [person, person2]

for(i = 0; i < personArray.length; i++) {
  console.log("wow!")
  console.log(personArray[i])
}
