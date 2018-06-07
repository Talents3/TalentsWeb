
const UserModel = require('../models/userModel');
const Experience = require('../models/experience');
const Education = require('../models/education');
const Blog = require('../models/blog');

const getUsers = function() {
    // return new Promise((resolve, reject) => {
    //     resolve(users);
    // });
    return new Promise((resolve, reject) => {
        UserModel.find({}, (err, users) => {
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
        UserModel.findOne({id: id}, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}


//modify a user
const addUserEducation = function(editedUser) {
  return new Promise((resolve, reject) => {
        UserModel.findOne({id: editedUser.id}, (err, oldUser) => {
            if (!oldUser) {
                reject('Userdoes not exist');
            } else {
            // update new info to mongo db
                oldUser.education = editedUser.education;
                oldUser.blog = editedUser.blog;
                //TODO: add more when finish user model
                oldUser.save();
                resolve(oldUser);
            }
        });
    });
}

const modifyUserEducation = function(editedUser) {
  return new Promise((resolve, reject) => {
        UserModel.findOne({id: editedUser.id}, (err, oldUser) => {
            if (!oldUser) {
                reject('Userdoes not exist');
            } else {
            // update new info to mongo db
                oldUser.education = editedUser.education;
                oldUser.blog = editedUser.blog;
                //TODO: add more when finish user model
                oldUser.save();
                resolve(oldUser);
            }
        });
    });
}



module.exports = {
    getUsers,
    getUser
}
