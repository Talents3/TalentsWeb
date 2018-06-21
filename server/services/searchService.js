const User = require('../models/userModel');
const Education = require('../models/education');
const Experience = require('../models/experience');
const config = require('../config/database');

const getEmailsByUniversity = function(universityName, num) {
  return new Promise((resolve, reject) => {
      var emails = [];
      Education.find({universityName: {$regex : universityName, $options: 'i'}})
               .skip(num)
               .limit(config.numsPerPage)
               .populate('educations').populate('experiences')
               .exec((err, educations) => {
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

const getUsersByUniversity = function(universityName, num) {
  return new Promise((resolve, reject) => {
      getEmailsByUniversity(universityName, num)
        .then(emails => {
            User.find({email: {$in: emails}})
                .populate('educations').populate('experiences')
                .exec((err, users) => {
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

const getUsersByName = function(name, num) {
    return new Promise((resolve, reject) => {
        User.find({username: {$regex : name, $options: 'i'}})
            .skip(num)
            .limit(config.numsPerPage)
            .exec(
              (err, users) => {
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

const getEmailsByExperience = function(info, num) {
  return new Promise((resolve, reject) => {
      var emails = [];
      Experience.find({$or: [{companyName: {$regex : info, $options: 'i'}}, {title: {$regex : info, $options: 'i'}}]})
                .skip(num)
                .limit(config.numsPerPage)
                .exec((err, experiences) => {
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

const getUsersByExperience = function(info, num) {
  return new Promise((resolve, reject) => {
      getEmailsByExperience(info, num)
        .then(emails => {
            User.find({email: {$in: emails}})
                .populate('educations').populate('experiences')
                .exec((err, users) => {
                    if (!users) {
                        reject("Users no found");
                        return;
                    } else {
                        resolve(users);
                    }
                })
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
