const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const userService = require('../services/userService');
const educationService = require('../services/educationService');
const authenticationService = require('../services/authenticationService');

const passport = require('passport');
const localStrategy = require('passport-local');

//bussiness logic put in service
//router helps us to find which service we need

//Get All Users
router.get('/users', function (req, res) {
    userService.getUsers()
    .then(users => res.json(users));
});

//Get User By Id
router.get('/users/:id', function (req, res) {
    const id = req.params.id;
    userService.getUser(+id)
    .then(user => res.json(user));
});

//Modify User By Id
router.put('/users/:id', jsonParser, (req, res) => {
    const id = req.params.id;
    userService.modifyUser(req, res, +id)
      .then(user => res.json(user))
      .catch(function(err) {
        console.log("Failed:", err);
      });
});

//SignUp a User / Add a User
router.post('/register', jsonParser, (req, res) => {
    authenticationService.register(req,res);
});

//Login
router.post('/login', jsonParser, (req, res) => {
    authenticationService.login(req, res);
});

//Logout
router.get('/logout', (res, req) => {
    authenticationService.logout(req, res);
});

//Get Educations of a User by ID
router.get('/users/:id/educations', (req, res) => {
    const id = req.params.id;
    userService.getUser(+id)
    .then(user => {
      educationService.getEducations(user.email)
      .then(educations => res.json(educations));
    });
});

//Get a Education by EducationID
router.get('/users/:id/educations/:_id', (req, res) => {
    const _id = req.params._id;
    educationService.getEducation(_id)
    .then(education => res.json(education));
});

//Add a Education
router.post('/users/:id/educations', jsonParser, (req, res) => {
    const id = req.params.id;
    educationService.addEducation(req, res, +id)
      .then(education => res.json(education))
      .catch(function(err) {
        console.log("Failed:", err);
      });
});

//Modify a User's Education by UserID and EducationID
router.put('/users/:id/educations/:_id', jsonParser, (req, res) => {
    const _id = req.params._id;
    educationService.modifyEducation(req, res, _id)
      .then(education => res.json(education))
      .catch(function(err) {
        console.log("Failed:", err);
      });
})

//......................................................//
// For Filter Search

router.get('users/educations/:universityName', (req, res) => {
    const universityName = req.params.universityName;
    educationService.getEmailsByUniversity(universityName)
      .then(emails => res.json(emails))
})


module.exports = router;
