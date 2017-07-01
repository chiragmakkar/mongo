var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');

var newCar = require('./models/car.js');

/*var name1 = process.argv[2];
var type1 = process.argv[3];
var body1 = process.argv[4];
var fuel1 = process.argv[5];*/

var Car = new newCar({
  name: process.argv[2],
  type: process.argv[3],
  body: process.argv[4],
  price: [{body: process.argv[6], date: process.argv[7]}],
  fuel: process.argv[5]
});

Car.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Car Saved.');
  }
});