var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/IA');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  identifier: {type: String, unique: true},
  title: String
});

var ArchiveItem = mongoose.model('ArchiveItem', itemSchema);

const search = (query, callback) => {
  ArchiveItem
  .find({title: new RegExp(query, 'i')})
  .then(results => {
    callback(results);
  });
}

const updateDB = (items, callback) => {
  db.db.dropDatabase((err) => {
    if (err) { console.log('ERR', err) };
    console.log('dropped');
  });
  items.forEach(item => {
    new ArchiveItem({identifier: item['identifier'], title: item['title']})
    .save();
  });
  callback('Database Updated');
}

module.exports.updateDB = updateDB;
module.exports.search = search;