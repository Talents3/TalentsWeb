const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Education = require('../models/education');

//For router.put/post
const checkUserEmail = (req, res, next) => {
    //console.log('auth_checker: req: ' + req.headers);
    if (!req.headers.authorization) {
      //console.log('Authorization header missing')
      return next('Authorization header missing');
    }

    const token = req.headers.authorization.split(' ')[1];
    const email = req.body.userEmail;
    //console.log('auth_checker: token: ' + token);

    jwt.verify(token, config.secret, (err, decoded) => {
      // the 401 code is for unauthorized status
      if (err) {
        //console.log('Token unvalid');
        return next('Token unvalid');
      }

      const decodeEmail = decoded.sub;
      if (decodeEmail !== email) {
        //console.log('Email authentication not match');
        return next('Email authentication not match');
      }

      console.log('Verify succesful!!');
    });

    return next();
}

const checkDeleteEducation = (req, res, next) => {
    //console.log('auth_checker: req: ' + req.headers);
    Education.findById(req.params._id, (err, deleteEducation) => {
      if (!deleteEducation) {
          return next('Education does not exist');
      } else {
          const email = deleteEducation.userEmail;
          if (!req.headers.authorization) {
            return next('Authorization header missing');
          }

          const token = req.headers.authorization.split(' ')[1];

          jwt.verify(token, config.secret, (err, decoded) => {
            // the 401 code is for unauthorized status
            if (err) {
              return next('Token unvalid');
            }

            const decodeEmail = decoded.sub;
            if (decodeEmail !== email) {
              return next('Email authentication not match');
            }

            console.log('Verify succesful!!');
          });

          return next();
        }
    });
}

module.exports = {
    checkUserEmail,
    checkDeleteEducation
}
