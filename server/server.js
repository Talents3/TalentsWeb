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
const Education = require('./models/education');
var nodemailer = require('nodemailer');   // for sending email
var config = require('./config/database');
var PotentialUser = require('./models/potentialUser');  // for sending email to potential users

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailAccount,
    pass: config.emailPassword
  }
});
var schedule = require('node-schedule'); // schedule a job

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      
      cb(null, DIR + '/' + file.fieldname );
    },
    filename: (req, file, cb) => {

      cb(null, Date.now()  +  '-' + file.originalname);
    }
});
let upload = multer({storage: storage});


const photoFolder = './uploads/photo';     // delete useless photos in server
const transcriptFolder = './uploads/transcript';

var deletePhotos = schedule.scheduleJob('0 0 0 * * *', function() {
  var filenames = [];
  fs.readdir(photoFolder, (err, files) =>{
      for(var i =0;i<files.length;i++){
        filenames.push(files[i]);
        
      }
        filenames.forEach(file => {
       User.findOne({image: file}, (error,user) => {
          if (error) {
              throw error;
          } else{
            if(!user){
             fs.unlink(photoFolder+'/'+file, function(err){
              if(err) throw err;
             });
             
            }
          }
       })
  });
     
  });
  

});


var deleteTranscript = schedule.scheduleJob('0 0 1 * * *', function() {    // delete useless transcript everyday at 1:00:00
  var filenames = [];
  fs.readdir(transcriptFolder, (err, files) =>{
      for(var i =0;i<files.length;i++){
        filenames.push(files[i]);
        
      }
        filenames.forEach(file => {
       Education.findOne({transcripts: file}, (error,education) => {
          if (error) {
              throw error;
          } else{
            if(!education){
             fs.unlink(transcriptFolder+'/'+file, function(err){
              if(err) throw err;
             });
             
            }
          }
       })
  });
     
  });
  

});



//app.use(schedule.schedule());  //use shedule


var sendInvitationEmail = schedule.scheduleJob('0 0 8 * * *', function(){  // send invitation emails to our potential users everyday at 8 am
    PotentialUser.find({}, (err, users) => {
       users.forEach(user => {
         var mailOptions = {
                    from: 'talents3Web@gmail.com',
                    to: user.email,
                    subject: 'Invitation Email From Talents3 Team',
                    text: 'Hi ' + user.username  + ',',
                    html: "<p>Hi " + user.username + ','+ "</p><p>We are three new grads from NYU engineering school. As new grads we know how difficult for new grads to find jobs, so we built talents3 websites to help students to apply positions and make their life easier. Within talents3.com, all you need to do is getting registered and update your profile page once, then we will match your skills, education, and experiences with different positions, and send your profile page to their recuiters and human resource managers.  No more searching or reading thoundsands of job descriptions by yourself.</p><p>So join <a href='http://talents3.com'>talents3.com</a> family, this summer, you will not be alone, we are gonna keep fighting together. Temporary, we are only focus on helping engineering students, because we are engineers, and we know engineering positions better. </p><br> You can sign up now by clicking <a href='http://talents3.com/register'>here.</a><p>Sincerely, <br> <a href='http://talents3.com/about'>talents3 team <br> (Youxing Gao,Rui Zhang,Liam) </a> </p> "              
                     };
    transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      throw error;
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                });

       })
    })
});
//sendInvitationEmail.cancel();


app.set("view engine", "ejs");

app.get('/getViews/user/:id', function(req,res){
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
     res.sendFile(__dirname + '/uploads/transcript/' + filename, function(err){
     	if(err){
     		res.render('error');
     	}
     });
});
// send files to front end
app.get('/api/v1/getImages/:filename', function (req, res) {
	const filename = req.params.filename;
     res.sendFile(__dirname + '/uploads/photo/' + filename, function(err){
     	if (err){
     		res.sendFile(__dirname + '/uploads/background/error.png');
     	}
     });
});

app.get('/api/v1/getBackground/:filename', function(req,res){
    const filename = req.params.fieldname;
     res.sendFile(__dirname + '/uploads/background/' + filename, function(err){
     	if(err){
     		res.sendFile(__dirname + '/uploads/background/error.png');
     	}
     });
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
