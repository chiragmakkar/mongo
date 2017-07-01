var mongoose = require('mongoose')
var assert = require('assert')

mongoose.connect('mongodb://localhost/test6');

var Schema = mongoose.Schema
var clubSchema = new Schema({
	name: String,
})

var Club = mongoose.model('Club', clubSchema)

data = [
	{ 'name' : 'Barcelona' },
	{ 'name' : 'Real Madrid' },
	{ 'name' : 'Valencia' }
]
Club.collection.insertMany(data, function(err,r) {
    assert.equal(null, err);
    assert.equal(3, r.insertedCount); 
    db.close();
})