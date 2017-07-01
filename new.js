var mongoose = require('mongoose');
mongoose.connect('mongodb://chirag:myhouse143@ds139942.mlab.com:39942/comchirag');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});