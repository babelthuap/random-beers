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

router.post('/login', function(req, res) {
  User.login(req.body, (err, token) => {
    if (err) return res.status(400).send(err);
    res.send(token);
  });
});

router.post('/addsampled', User.isAuthenticated, function(req, res) {
  res.send(req.user);
});

module.exports = router;
