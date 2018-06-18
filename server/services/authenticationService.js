const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const TempUser = require('../models/tempUserModel');
var nodemailer = require('nodemailer');
var urlencode = require('urlencode');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'talents3Web@gmail.com',
    pass: 'talents3Web@'
  }
});



const register = function(req, res) {
  console.log(req.body);
  if (!req.body.username || !req.body.password || !req.body.email) {
    //console.log(req);
    res.json({success: false, msg: 'Please pass username, email and password.'});
  } else {
    var newUser = new TempUser({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

          // save the user
      User.findOne({email: newUser.email}, (err, user) => {
          if (err) {
              return res.json({success: false, msg: 'database error.'});
          } else if (user) {

              return res.json({success: false, msg: 'User email already exists.'});
          } else {
              newUser.save(function(err) {
                if (err) {
                  console.log(err);
                  return res.json({success: false, msg: 'User email already registered, please verify you email!'});
                }
                res.json({success: true, msg: 'Successful! Please activate it in your email! '});
              });
          }
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
          res.json({success: true, token: token, email: req.body.email, username: user.username, userId: user.id});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};

const verifyEmail = function (req, res) {
     var password = urlencode.decode(req.params.url, 'gbk');
     TempUser.findOne({password: password}, (err, user) => {
        if (err) {
            console.log(err);
            res.end();
        } else if (!user) {
            res.status(400).send({success: false, msg: 'Verify Email expired'});
            return;
        } else {
            var newUser = new User({
              email: user.email,
              username: user.username,
              password: user.password
            });
            User.count({}, (err, count) => {
                if (err) {
                    console.log("error: " + err);
                    return res.json({success: false, msg: 'failed'})
                } 

                newUser.id = count + 1;
                var username = user.username;
                var email = user.email;
                var mailOptions = {
                    from: 'talents3Web@gmail.com',
                    to: email,
                    subject: 'Confirmed your account',
                    html: '<h1>Dear ' + username + '</h1> <p> Welcome to use talents3, we are trying to make your life easier!</p> <p> Sincerely,</p><p>Talents3 Team</p>'
                  };
          
            
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                });

                newUser.save(err => {
                    if (err) {
                        console.log('error: ' + err);
                        return res.json({success: false, msg: 'User already exists'})
                    }

                    user.remove();
                    res.redirect('http://localhost:3000/login');
                });

            });
        }
     })
}

module.exports = {
    register,
    login,
    verifyEmail
}
