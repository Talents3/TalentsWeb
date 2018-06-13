const User = require('../models/userModel');
const Education = require('../models/education');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

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
      Education.findById(_id, (err, educations) => {
          if (err) {
              reject(err);
          } else {
              resolve(educations);
          }
      });
  });
}

const addEducation = function(req, res, id) {
  
  return new Promise((resolve, reject) => {
      User.findOne({id: id}, (err, user) => {
          if (err) {
              reject('User Not Found');
              return res.status(400).send('User does not exist');
          } else {
              Education.findOne({universityName: req.body.universityName,
                                  major: req.body.major,
                                  startDate: req.body.startDate,
                                  userEmail: req.body.userEmail}, (err, education) => {
                  if (education) {
                      reject('Education already exists');
                  } else {
                    const newEducation = new Education(req.body);
                    newEducation.save();
                    console.log(user.username);
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
  console.log("begin Modify Education backend");
  return new Promise((resolve, reject) => {
        Education.findById(_id, (err, oldEducation) => {
            if (!oldEducation) {
                reject('Education does not exist');
                return res.status(400).send('User does not exist');
            } else {
                var editedEducation = req.body;
                console.log('auth_checker: req: ' + req.headers);
                if (!req.headers.authorization) {
                  reject('Authorization header missing');
                  return res.status(401).send('Authorization header missing');
                }

                const token = req.headers.authorization.split(' ')[1];
                const email = oldEducation.userEmail;
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

module.exports = {
    getEducation,
    getEducations,
    getEmailsByUniversity,
    modifyEducation,
    addEducation
}
