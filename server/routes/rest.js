const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const userService = require('../services/userService');

//bussiness logic put in service
//router helps us to find which service we need

router.get('/users', function (req, res) {
    userService.getUsers()
    .then(users => res.json(users));
});

router.get('/users/:id', function (req, res) {
    const id = req.params.id;
    userService.getUser(+id)
    .then(user => res.json(user));
});

router.post('/users', jsonParser, (req, res) => {
    userService.addUser(req.body)
        .then(user => res.json(user),
            error => res.status(400).send('User already exists'));
});

router.put('/users', jsonParser, (req, res) => {
    userService.modifyUser(req.body)
        .then(user => res.json(user),
            error => res.status(400).send('User does not exist'));
});

module.exports = router;
