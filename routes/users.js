'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/register', function(req, res) {
  User.register(req.body, (err, token) => {
    if (err) return res.status(400).send(err);
    res.send(token);
  });
});

module.exports = router;
