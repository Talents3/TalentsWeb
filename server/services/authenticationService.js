const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const register = function(req, res) {
  console.log(req.body);
  if (!req.body.username || !req.body.password || !req.body.email) {
    //console.log(req);
    res.json({success: false, msg: 'Please pass username, email and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    User.count({}, (err, count) => {
      newUser.id = count + 1;
      console.log(newUser.id);
      // save the user
      newUser.save(function(err) {
        if (err) {
          console.log(err);
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    });
  }
}

const login = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {

          const payload = {
            sub: user.email // mongodb unique email
          };
          // if user is found and password is right create a token
          var token = jwt.sign(payload, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: token, email: req.body.email, username: req.body.username});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};

module.exports = {
    register,
    login
}
