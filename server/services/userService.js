
const User = require('../models/userModel');
const Experience = require('../models/experience');
const Education = require('../models/education');
const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const getUsers = function() {
    // return new Promise((resolve, reject) => {
    //     resolve(users);
    // });
    return new Promise((resolve, reject) => {
        User.find({}, (err, users) => {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getUser = function(id) {
    // return new Promise((resolve, reject) => {
    //     resolve(problems.find(problem => problem.id === id));
    // });
    return new Promise((resolve, reject) => {
        User.findOne({id: id}, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

const modifyUser = function(req, res, id) {
  return new Promise((resolve, reject) => {
        User.findOne({id: id}, (err, oldUser) => {
            if (!oldUser) {
                reject('User does not exist');
                return res.status(400).send('User does not exist');
            } else {
                var editedUser = req.body;
                console.log('auth_checker: req: ' + req.headers);
                if (!req.headers.authorization) {
                  reject('Authorization header missing');
                  return res.status(401).send('Authorization header missing');
                }

                const token = req.headers.authorization.split(' ')[1];
                const email = oldUser.email;
                console.log('auth_checker: token: ' + token);

                jwt.verify(token, config.secret, (err, decoded) => {
                  // the 401 code is for unauthorized status
                  if (err) {
                    reject('Token unvalid');
                    return res.status(401).send('Token unvalid');
                  }

                  const decodeEmail = decoded.sub;
                  if (decodeEmail !== email) {
                    reject('Email authentication not match');
                    return res.status(401).send('Email authentication not match');
                  }

                  console.log('Verify succesful!!');
                });

                oldUser.description = editedUser.description;
                oldUser.phone = editedUser.phone;
                //TODO: add more when finish user model
                oldUser.save();
                resolve(oldUser);
            }
        });
    });
}

module.exports = {
    getUsers,
    getUser,
    modifyUser
}
