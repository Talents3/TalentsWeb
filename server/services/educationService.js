const User = require('../models/userModel');
const Education = require('../models/education');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const authCheckerMiddleware = require('../middleware/auth_checker');

const getEducations = function(userEmail) {
  return new Promise((resolve, reject) => {
      Education.find({userEmail: userEmail}, (err, educations) => {
          if (err) {
              reject(err);
          } else {
              resolve(educations);
          }
      });
  });
}

const getEmailsByUniversity = function(universityName) {
  return new Promise((resolve, reject) => {
      var emails = [];
      Education.find({universityName: universityName}, (err, educations) => {
          if (err) {
              reject(err);
          } else {
              educations.forEach((education) => {
                  if (!emails.includes(education.email)) {
                      emails.push(education.email);
                  }
              })

              console.log(emails);
              resolve(email);
          }
      });
  });
}

const getEducation = function(_id) {
  return new Promise((resolve, reject) => {
      Education.findById(_id, (err, education) => {
          if (err) {
              reject(err);
          } else {
              console.log(education)
              resolve(education);
          }
      });
  });
}

const addEducation = function(req, res) {

  return new Promise((resolve, reject) => {

      User.findOne({email: req.body.userEmail}, (err, user) => {
          if (!user) {
              reject('User Not Found');
              return res.status(400).send('User Not Found');
          } else {
                Education.findOne({universityName: req.body.universityName,
                                    major: req.body.major,
                                    startDate: req.body.startDate,
                                    userEmail: req.body.userEmail}, (err, education) => {
                    if (education) {
                        reject('Education already exists');
                        return res.status(400).send('Education already exists');
                    } else {
                      const newEducation = new Education(req.body);
                      newEducation.save();
                      //console.log(user.username);
                      user.educations.push(newEducation);
                      user.save();
                      resolve(newEducation);
                    }
                });
              }
      });
  });
}

const modifyEducation = function(req, res, _id) {
    //console.log("begin Modify Education backend");
    return new Promise((resolve, reject) => {
          Education.findById(_id, (err, oldEducation) => {
              if (!oldEducation) {
                  reject('Education does not exist');
                  return res.status(400).send('Education does not exist');
              } else {

                  var editedEducation = req.body;
                  oldEducation.universityName = editedEducation.universityName;
                  oldEducation.gpa = editedEducation.gpa;
                  oldEducation.degreeType = editedEducation.degreeType;
                  oldEducation.major = editedEducation.major;
                  oldEducation.startDate = editedEducation.startDate;
                  oldEducation.endDate = editedEducation.endDate;
                  oldEducation.inProgress = editedEducation.inProgress;
                  oldEducation.transcripts = editedEducation.transcripts;
                  oldEducation.courses = editedEducation.courses;

                  //TODO: add more when finish user model
                  oldEducation.save();
                  resolve(oldEducation);
              }
          });
      });
}


const deleteEducation = function(req, res, _id) {
    return new Promise((resolve, reject) => {
          Education.findById(_id, (err, deleteEducation) => {
            console.log(_id);
            if (!deleteEducation) {
                reject('Education does not exist');
            } else {
                User.findOne({email: deleteEducation.userEmail}, (err, user) => {
                    if (!user) {
                        reject('User Not Found');
                        return res.status(400).send('User Not Found');
                    } else {
                        user.educations.pull(deleteEducation);
                        user.save();
                        deleteEducation.remove();
                        resolve(deleteEducation);
                    }
                });
            }
        });
    });
}

module.exports = {
    getEducation,
    getEducations,
    getEmailsByUniversity,
    modifyEducation,
    addEducation,
    deleteEducation
}
