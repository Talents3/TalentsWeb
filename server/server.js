const express = require('express');
const app = express();

const restRouter = require('./routes/rest');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

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

var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config/database');
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(passport.initialize());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//launch application,listen on port3000
app.listen(3000, () => console.log('Example app listening on port3000!'));
