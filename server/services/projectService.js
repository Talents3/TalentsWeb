const User = require('../models/userModel');
const Project = require('../models/project');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const getProjects = function(userEmail) {
  return new Promise((resolve, reject) => {
    Project.find({userEmail: userEmail}, (err, projects) => {
      if (err) {
        reject(err);
      } else {
        resolve(projects);
      }
    });
  });
}

const getProject = function(_id) {
  return new Promise((resolve, reject) => {
    Project.findById(_id, (err, project) => {
                          if (err) {
                            reject(err);
                          } else {
                            resolve(project);
                          }
                        });
  });
}

const addProject = function(req, res) {
  return new Promise((resolve, reject) => {
    User.findOne({email: req.body.userEmail}, (err, user) => {
      if (!user) {
        reject("User not found!");
        return res.status(400).send('User Not Found');
      } else {
        Project.findOne({companyName: req.body.projectName,
                            startDate: req.body.startDate,
                            endDate: req.body.endDate,
                            userEmail: req.body.userEmail}, (err, project) => {
                              if (project) {
                                reject("Duplicate project!");
                                return res.status(400).send('Duplicate project!');
                              } else {
                                const _project = new Project(req.body);
                                _project.save();
                                user.projects.push(_project);
                                user.save();
                                resolve(_project);
                              }
                            });
      }
    });
  });
}

const modifyProject = function(req, res, _id) {
  return new Promise((resolve, reject) => {
    Project.findById(_id, (err, project) => {
      if (err) {
        reject(err);
      } else if (!project) {
        reject("project Not Found!!!");
        return res.status(400).send('project Not Found!');
      } else {
        User.findOne({email: project.userEmail}, (err, user) => {
          if (err) {
            resolve(err);
            return;
          } else if (!user){
            resolve('user no found');
            return;
          } else {
            project.companyName = req.body.companyName;
            project.startDate = req.body.startDate;
            project.endDate = req.body.endDate;
            project.projectContent = req.body.projectContent;
            project.projectLink = req.body.projectLink;
            project.skills = req.body.skills;
            project.save();
            project.skills.forEach((skill) => {
                if (!user.skills.includes(skill.skillName)) {
                    user.skills.push(skill.skillName);
                }
            });
            user.save();
            resolve(project);
          }
        });
      }
    });
  });
}

const deleteProject = function(req, res, _id) {
  return new Promise((resolve, reject) => {
    Project.findById(_id, (err, project) => {
      if (err) {
        reject(err);
      } else if (!project){
        reject("project Not Found!!!");
        return res.status(400).send('project Not Found!');
      } else {
        User.findOne({email: project.userEmail}, (err, user) => {
          if (!user) {
            reject("User Not Found!");
            return res.status(400).send('User Not Found!')
          } else {
            user.projects.pull(project);
            user.save();
            project.remove();
            resolve(project);
          }
        })
      }
    });
  });
}

module.exports = {
  deleteProject,
  modifyProject,
  getProjects,
  getProject,
  addProject
}
