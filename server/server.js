const express = require('express');
const app = express();

const restRouter = require('./routes/rest');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/userModel');
//Make server to serve static file.
const path = require('path');

app.use('/api/v1',restRouter);
app.use(express.static(path.join(__dirname, '../public')));
//If the url does not handled by router on the server side,
//then the server send index.html from the public folder
app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://talents:Talents3@ds251210.mlab.com:51210/talents-web-user-db');
// passport configuration
app.use(require("express-session")({
     secret: "I am youxing gao!",
     resave: false,
     saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

//launch application,listen on port3000
app.listen(3000, () => console.log('Example app listening on port3000!'));


