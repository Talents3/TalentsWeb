const User = require('../models/userModel');
const Experience = require('../models/experience');
const Education = require('../models/education');
const Project = require('../models/project');
const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const getUsers = function() {

    return new Promise((resolve, reject) => {
        User.find({})
            .limit(config.initialNumOfUsers)
            .populate('educations').populate('experiences')
            .exec((err, users) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    })
}

const getMoreUsers = function(curNum) {
    const usersPerPage = 5;
    console.log("curNum: " + curNum);
    return new Promise((resolve, reject) => {
        User.find({})
            .skip(curNum)
            .limit(config.numsPerPage)
            .populate('educations').populate('experiences')
            .exec((err, users) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    })
}

const getUser = function(id) {
    return new Promise((resolve, reject) => {
        User.findOne({id: id}).populate('educations').populate('experiences').populate('projects').exec((err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

const getEmailById = function(id) {
        User.findOne({id: id}, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                console.log(user.email);
                return user.email;
            }
        });
}

const modifyUser = function(req, res, id) {
  console.log("begin Modify backend");
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

                oldUser.username = editedUser.username;
                oldUser.age = editedUser.age;
                oldUser.isMale = editedUser.isMale;
                oldUser.newGrads = editedUser.newGrads;
                oldUser.description = editedUser.description;
                oldUser.phone = editedUser.phone;
                oldUser.needVisaSponsor = editedUser.needVisaSponsor;
                oldUser.image = editedUser.image;   // for storing image
                oldUser.address = editedUser.address;
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
    getMoreUsers,
    modifyUser,
    getEmailById
}
