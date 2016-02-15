'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/beer', function(req, res) {
  http.get({
    host: 'api.brewerydb.com',
    path: '/v2/beer/random?key=a48d948b32c325fe278f2b2211041388',
  }, function(response) {
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      var parsed = JSON.parse(body);
      res.send(parsed.data);
    });
  });
});

module.exports = router;
