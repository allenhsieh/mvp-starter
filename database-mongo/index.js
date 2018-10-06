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

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

const updateDB = (items, callback) => {
  db.db.dropDatabase((err) => {
    if (err) { console.log('ERR', err) };
    console.log('dropped');
  });
  items.forEach(item => {
    new ArchiveItem({identifier: item['identifier'], title: item['title']})
    .save()
    .catch((err) => {
      console.log(err);
    });
  });
  callback('all done');
}

module.exports.updateDB = updateDB;