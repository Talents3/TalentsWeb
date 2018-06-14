const User = require('../models/userModel');
const Experience = require('../models/experience');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const authCheckerMiddleware = require('../middleware/auth_checker');

const getExperiences = function(userEmail) {
  return new Promise((resolve, reject) => {
    Experience.find({userEmail: userEmail}, (err, experience) => {
      if (err) {
        reject(err);
      } else {
        resolve(experiences);
      }
    });
  });
}

const getExperience = function(_id) {
  return new Promise((resolve, reject) => {
    Experience.findById(_id, (err, experience) => {
                          if (err) {
                            reject(err);
                          } else {
                            resolve(experience);
                          }
                        });
  });
}

const addExperience = function(req, res) {
  return new Promise((resolve, reject) => {
    User.findOne({email: req.body.userEmail}, (err, user) => {
      if (!user) {
        reject("User not found!");
        return res.status(400).send('User Not Found');
      } else {
        Experience.findOne({companyName: req.body.companyName,
                            startDate: req.body.startDate,
                            userEmail: req.body.userEmail}, (err, experience) => {
                              if (experience) {
                                reject("Duplicate Experience!");
                                return res.status(400).send('Duplicate Experience!');
                              } else {
                                const _experience = new Experience(req.body);
                                _experience.save();
                                user.experiences.push(_experience);
                                user.save();
                                resolve(_experience);
                              }
                            });
      }
    });
  });
}

const modifyExperience = function(req, res, _id) {
  return new Promise((resolve, reject) => {
    Experience.findById(_id, (err, experience) => {
      if (err) {
        reject(err);
      } else if (!experience) {
        reject("Experience Not Found!!!");
        return res.status(400).send('Experience Not Found!');
      } else {
        experience.companyName = req.body.companyName;
        experience.title = req.body.title;
        experience.startDate = req.body.startDate;
        experience.endDate = req.body.endDate;
        experience.description = req.body.description;
        experience.save();

                            //TODO: Add more attributes of experiences.
        resolve(experience);
      }
    });
  });
}

const deleteExperience = function(req, res, _id) {
  return new Promise((resolve, reject) => {
    Experience.findById(_id, (err, experience) => {
      if (err) {
        reject(err);
      } else if (!experience){
        reject("Experience Not Found!!!");
        return res.status(400).send('Experience Not Found!');
      } else {
        User.findOne({email: experience.userEmail}, (err, user) => {
          if (!user) {
            reject("User Not Found!");
            return res.status(400).send('User Not Found!')
          } else {
            user.experiences.pull(experience);
            user.save();
            experience.remove();
            resolve(experience);
          }
        })
      }
    });
  });
}

module.exports = {
  deleteExperience,
  modifyExperience,
  getExperiences,
  getExperience,
  addExperience
}
