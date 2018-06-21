const express = require('express');
const app = express();

const restRouter = require('./routes/rest');
const authCheckerMiddleware = require('./middleware/auth_checker');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const User = require('./models/userModel');
//Make server to serve static file.
const path = require('path');

// for file uploading
const multer = require('multer');
const fs = require('fs');
const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      
      cb(null, DIR );
    },
    filename: (req, file, cb) => {

      cb(null, file.fieldname + '-' + Date.now()  +  '-' + file.originalname);
    }
});
let upload = multer({storage: storage});




//app.use(schedule.schedule());  //use shedule
var nodemailer = require('nodemailer');
var config = require('./config/database');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailAccount,
    pass: config.emailPassword
  }
});
var schedule = require('node-schedule');
var y = { ccName: '🐷', receiverName: 'rui', bccAddress: 'yg1497@nyu.edu', receiverAddress: 'rz1113@nyu.edu'};
var j = schedule.scheduleJob('0 * * * * *', function(x){
    var mailOptions = {
                    from: 'talents3Web@gmail.com',
                    to: x.receiverAddress, 
                    bcc: x.bccAddress,
                    subject: 'Testing email',
                    text: 'Dear ' + x.receiverName + ',',
                    html: {path: 'http://localhost:3000/getViews/5'}                 
                     };
    transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                });
 
  
}.bind(null, y));
j.cancel();


app.set("view engine", "ejs");

app.get('/getViews/:id', function(req,res){
   const id = +req.params.id;
   console.log("hit it",id);
   User.findOne({id: id}).populate('educations').populate('experiences').exec((err, finduser) => {
       if(err){
       	console.log(err);
       }
       else {

       	res.render("profileView", {user: finduser});
	   }
   });
   

});

// end here



// end here

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 


app.use('/api/v1',restRouter);
// upload images
app.post('/api/v1/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
      	
        console.log('file received');
        return res.send({
          success: true,
          filename: req.file.filename
        })
      }
});

// upload transcript
app.post('/api/v1/transcripts',upload.single('transcript'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
      	
        console.log('file received');
        return res.send({
          success: true,
          filename: req.file.filename
        })
      }
});
  
// send transcript files to front end
app.get('/getTranscripts/:filename', function (req, res) {
	const filename = req.params.filename;
     res.sendFile(__dirname + '/uploads/' + filename);
});
// send files to front end
app.get('/api/v1/getImages/:filename', function (req, res) {
	const filename = req.params.filename;
     res.sendFile(__dirname + '/uploads/' + filename);
});

app.use(express.static(path.join(__dirname, '../public')));
//If the url does not handled by router on the server side,
//then the server send index.html from the public folder
app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});

var morgan = require('morgan');
var mongoose = require('mongoose');

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
app.listen(3000, () => console.log('Example app listening !'));
