var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('../config');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

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
  console.log('REQ', JSON.stringify(req.body.query));
  // console.log('REQ BODY', JSON.parse(req.body));
  // console.log('CONFIG', config.acc, config.pass);
  // res.sendStatus(200);
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
    // console.log('BODY', response);
    // if (!body.success) {
    //   res.status(400).send(error);
    // } else {
      res.status(response.statusCode).send(response);
    // }
  });
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

