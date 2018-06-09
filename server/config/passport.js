var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../models/userModel');
var config = require('../config/database'); // get db config file

module.exports = function(passport) {

    passport.use(new LocalStrategy({
  	usernameField: 'email',
  	passwordField: 'password',
  	passReqToCallback: true,
  }, async (req, username, password, done) => {
  	// this one is typically a DB call.
  	// Assume that the returned user object is pre-formatted and ready for storing in JWT
  	try {
  		const errMessage = { message: 'Incorrect email or password' };

  		const user = await models.user.findOne({
  			where: {
  				email: username,
  			},
  		});

  		if (!user) {
  			return done(null, false, errMessage);
  		}

  		const pwdValidation = await user.validPassword(password, user.password);
  		if (!pwdValidation) {
  			done(null, false, errMessage);
  		} else {
  			done(null, user, { message: 'Logged In Successfully' });
  		}
  	} catch (err) {
  		console.log(err);
  		done(err);
  	}
  }));

  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};
