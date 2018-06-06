
const UserModel = require('../models/userModel');

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

// add a user
const addUser = function(newUser) {
    // return new Promise((resolve, reject) => {
    //     // check if the problem exists
    //     if (problems.find(problem => problem.name === newProblem.name)) {
    //         reject('problem already exists');
    //     } else {
    //         newProblem.id = problems.length + 1;
    //         problems.push(newProblem);
    //         resolve(newProblem);
    //     }

    // });
    // check if the problem is already in the db
    return new Promise((resolve, reject) => {
    UserModel.findOne({name: newUser.name}, (err, data) => {
        if (data) {
            reject('User already exists');
        } else {
            // save to mongo db
            UserModel.count({}, (err, count) => {
                newUser.id = count + 1;
                const mongoUser = new UserModel(newUser);
                mongoUser.save();
                resolve(mongoUser);
            });
        }
        });
    });
}

//modify a user
const modifyUser = function(editedUser) {
  return new Promise((resolve, reject) => {
        UserModel.findOne({name: editedUser.name}, (err, oldUser) => {
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
    getUser,
    addUser,
    modifyUser
}
