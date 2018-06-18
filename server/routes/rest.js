const express = require('express');
const router = express.Router();

const userService = require('../services/userService');
const educationService = require('../services/educationService');
const searchService = require('../services/searchService');
const experienceService = require('../services/experienceService');
const authenticationService = require('../services/authenticationService');

const passport = require('passport');
const localStrategy = require('passport-local');
const authCheckerMiddleware = require('../middleware/auth_checker');


//bussiness logic put in service
//router helps us to find which service we need

// Users Route ===========================================================
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

//Get More Users based on curruent loaded users
router.get('/users/nums/:num', (req, res) => {
    const num = req.params.num;
    userService.getMoreUsers(+num)
      .then(users => res.json(users));
});

//Modify User By Id
router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    userService.modifyUser(req, res, +id)
      .then(user => res.json(user))
      .catch(function(err) {
        console.log("Failed:", err);
      });
});


//SignUp a User / Add a User
router.post('/register', (req, res) => {
    authenticationService.register(req,res);
});

router.get('/email-verification/:url', (req, res) => {
    authenticationService.verifyEmail(req, res);

})
//Login
router.post('/login', (req, res) => {
    authenticationService.login(req, res);
});

//Logout
router.get('/logout', (res, req) => {
    authenticationService.logout(req, res);
});

// Education Route ===========================================================
//Get Educations of a User by ID
router.get('/users/:id/educations', (req, res) => {
    const id = req.params.id;
    userService.getUser(+id)
    .then(user => {
      educationService.getEducations(user.email)
      .then(educations => res.json(educations));
    });
});

//router.use('/educations', authCheckerMiddleware);

//Get a Education by EducationID
router.get('/educations/:_id', (req, res) => {
    const _id = req.params._id;
    educationService.getEducation(_id)
    .then(education => res.json(education));
});

//Add a Education
router.post('/educations', authCheckerMiddleware.checkUserEmail, (req, res) => {
    educationService.addEducation(req, res)
      .then(education => res.json(education))
      .catch((err) => {
        console.log("Failed:", err);
      });
});

//Modify a User's Education by UserID and EducationID
router.put('/educations/:_id', authCheckerMiddleware.checkUserEmail, (req, res) => {
    const _id = req.params._id;
    educationService.modifyEducation(req, res, _id)
      .then(education => res.json(education))
      .catch(function(err) {
        console.log("Failed:", err);
      });
})

//Delete a education by ID
router.delete('/educations/:_id', authCheckerMiddleware.checkDeleteEducation, (req, res) => {
    const _id = req.params._id;
    educationService.deleteEducation(req, res, _id)
      .then(education => res.json(education))
      .catch(function(err) {
        console.log("Failed:", err);
      });
})

// Experience Route ===========================================================
// Add Experience
router.post('/experiences', authCheckerMiddleware.checkUserEmail, (req, res) => {
    experienceService.addExperience(req, res)
    .then(experience => res.json(experience))
    .catch((err) => {
      console.log("Unable to add experience due to: ", err);
    });
});

// Modify Experience
router.put('/experiences/:_id', authCheckerMiddleware.checkUserEmail, (req, res) => {
    const _id = req.params._id;
    experienceService.modifyExperience(req, res, _id)
    .then(experience => res.json(experience))
    .catch(function(err) {
      console.log(err);
    });
});

// Delete an Experience
router.delete('/experiences/:_id', authCheckerMiddleware.checkDeleteExperience, (req, res) => {
    const _id = req.params._id;
    experienceService.deleteExperience(req, res, _id)
    .then(experience => res.json(experience))
    .catch(function(err) {
      console.log(err);
    });
});

// Get a user's experience by UserID
router.get('users/:id/experiences', (req, res) => {
    const id = req.params.id;
    userService.getUser(id)
    .then(user => experienceService.getExperience(user.email).then(experiences => res.json(experiences)));
});

// Get an Experience by ExperienceID
router.get('/experiences/:_id', (req, res) => {
    const _id = req.params._id;
    experienceService.getExperience(_id)
    .then(experience => res.json(experience));
})

// Search Route ===========================================================
// Search Users By universityName based on curruent search result
router.get('/users/educations/:universityName/nums/:num', (req, res) => {
    const universityName = req.params.universityName;
    const num = req.params.num;
    searchService.getUsersByUniversity(universityName, +num)
      .then(users => {res.json(users)})
      .catch(err => console.log("Failed: " + err));
})

// Search Users By Name based on curruent search result
router.get('/users/name/:name/nums/:num', (req, res) => {
    const name = req.params.name;
    const num = req.params.num;
    searchService.getUsersByName(name, +num)
      .then(users => res.json(users))
      .catch(err => console.log("Failed: " + err));
})


// Search Users By Experience(companyName or title) based on curruent search result
router.get('/users/experiences/:info/nums/:num', (req, res) => {
    const info = req.params.info;
    const num = req.params.num;
    searchService.getUsersByExperience(info, +num)
      .then(users => res.json(users))
      .catch(err => console.log("Failed: " + err));
})


module.exports = router;
