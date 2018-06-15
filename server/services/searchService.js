const User = require('../models/userModel');
const Education = require('../models/education');
const Experience = require('../models/experience');

const getEmailsByUniversity = function(universityName) {
  return new Promise((resolve, reject) => {
      var emails = [];
      Education.find({universityName: {$regex : universityName, $options: 'i'}}, (err, educations) => {
          if (err) {
              reject(err);
          } else {
              educations.forEach((education) => {
                  if (!emails.includes(education.userEmail)) {
                      emails.push(education.userEmail);
                  }
              });

              resolve(emails);
          }
      });
  });
}

const getUsersByUniversity = function(universityName) {
  return new Promise((resolve, reject) => {
      getEmailsByUniversity(universityName)
        .then(emails => {
            User.find({email: {$in: emails}}, (err, users) => {
                if (!users) {
                    reject("Users no found");
                    return;
                } else {
                    resolve(users);
                }
            });
        })
        .catch(error => {
            console.log(error);
            reject(error);
        })
  });
}

const getUsersByName = function(name) {
    return new Promise((resolve, reject) => {
        User.find({username: {$regex : name, $options: 'i'}}, (err, users) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            } else if (!users) {
                reject("Users no found");
                return;
            } else {
                resolve(users);
            }
        });
    });
}

const getEmailsByExperience = function(info) {
  return new Promise((resolve, reject) => {
      var emails = [];
      Experience.find({$or: [{companyName: {$regex : info, $options: 'i'}}, {title: {$regex : info, $options: 'i'}}]}, (err, experiences) => {
          if (err) {
              reject(err);
          } else {
              experiences.forEach((experience) => {
                  if (!emails.includes(experience.userEmail)) {
                      emails.push(experience.userEmail);
                  }
              });
              resolve(emails);
          }
      });
  });
}

const getUsersByExperience = function(info) {
  return new Promise((resolve, reject) => {
      getEmailsByExperience(info)
        .then(emails => {
            User.find({email: {$in: emails}}, (err, users) => {
                if (!users) {
                    reject("Users no found");
                    return;
                } else {
                    resolve(users);
                }
            });
        })
        .catch(error => {
            console.log(error);
            reject(error);
        })
  });
}


module.exports = {
  getUsersByUniversity,
  getUsersByName,
  getUsersByExperience
}
