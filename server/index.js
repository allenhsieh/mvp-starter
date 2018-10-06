var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('../config');
var updateUrl = 'https://archive.org/advancedsearch.php?q=allenh100%40gmail.com&fl%5B%5D=identifier&fl%5B%5D=title&sort%5B%5D=addeddate+desc&sort%5B%5D=&sort%5B%5D=&rows=9999&page=1&output=json';

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/data', (req, res) => {
  let options = {
    url: 'https://archive.org/metadata/allenAPI',
    form: {
      '-target': 'metadata',
      '-patch': JSON.stringify(req.body.query),
      'access': config.acc,
      'secret': config.pass
    },
    json: true
  }
  request.post(options, (error, response, body) => {
    res.status(response.statusCode).send(response);
  });
})

app.post('/search', (req, res) => {
  db.search(req.body.q, (results) => {
    console.log('these are results', results);
    res.json(results);
  });
});

app.get('/updateDB', (req, res) => {
  let options= {
    url: updateUrl,
    json: true,
  }
  request(options, (err, response, body) => {
    db.updateDB(body.response.docs, (item) => {
      res.send('Database updated');
    });
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

