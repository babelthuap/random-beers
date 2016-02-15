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
  User.findByIdAndUpdate(req.user._id, {
    $addToSet: { sampled: req.body.beer }
  }, (err, user) => {
    if (err) return res.status(400).send(err);
    res.send('added');
  })
});

router.get('/getsampled', User.isAuthenticated, function(req, res) {
  User.findById(req.user._id, (err, user) => {
    if (err) return res.status(400).send(err);
    res.send(user.sampled);
  })
});

module.exports = router;
