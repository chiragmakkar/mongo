var mongoose = require('mongoose');
mongoose.connect('mongodb://chirag:myhouse143@ds139942.mlab.com:39942/comchirag');

var Dog = mongoose.model('Dog', { name: String, age : Number, collarid : String});

var bulldog = new Dog({ name: 'Moti' }, {age : 5}, {collarid: 'iueg1312dq'});
bulldog.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('bhow');
  }
});