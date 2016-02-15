'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var moment = require('moment');
var JWT_SECRET = process.env.JWT_SECRET;

var User;

var userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.statics.register = function(user, cb) {
  var username = user.username;
  var password = user.password;
  User.findOne({username: username}, function(err, user){
    if(err || user) return cb(err || 'Username already taken.');
    bcrypt.genSalt(13, function(err1, salt) {
      bcrypt.hash(password, salt, function(err2, hash) {
        if(err1 || err2) return cb(err1 || err2);
        var newUser = new User();
        newUser.username = username;
        newUser.password = hash;
        newUser.save(function(err, savedUser){
          savedUser.password = null;
          cb(err, savedUser.token());
        });
      });
    });
  });
};

userSchema.statics.login = function(inputUser, cb){
  User.findOne({username: inputUser.username}, function(err, dbUser) {
    if(err || !dbUser) return cb(err || 'Incorrect username or password.');
    bcrypt.compare(inputUser.password, dbUser.password, function(err, isGood){
      if(err || !isGood) return cb(err || 'Incorrect username or password.');
      dbUser.password = null;
      cb(null, dbUser.token());
    });
  });
};

// Generate JWT token for a user
userSchema.methods.token = function() {
  var payload = {
    username: this.username,
    _id: this._id,
    exp: moment().add(1, 'day').unix()
  };
  var token = jwt.encode(payload, JWT_SECRET);
  return token;
};

// Authentication Middleware
userSchema.statics.isAuthenticated = function(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Authentication required.');
  }
  var auth = req.headers.authorization.split(' ');
  if (auth[0] !== 'Bearer') {
    return res.status(401).send('Authentication required.');
  }
  var token = auth[1];
  try {
    var payload = jwt.decode(token, JWT_SECRET);
  } catch (err) {
    return res.status(401).send('Authentication failed.  Invalid token.');
  }
  if(moment().isAfter(moment.unix(payload.exp))) {
    return res.status(401).send('Authentication failed.  Token expired.');
  }
  var userId = payload._id;
  User.findById(userId, function (err, user) {
    if (err || !user) return res.status(401).send(err || 'Authentication failed.  User not found.');
    user.password = null;
    req.user = user;
    next();
  });
};

User = mongoose.model('User', userSchema);
module.exports = User;
