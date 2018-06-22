var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
// var nev = require('email-verification')(mongoose);
var UserSchema = new mongoose.Schema({
    id: Number,
    username: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    image: String,
    backgroundImage: String,
    age: Number,
    address: String,
    phone: String,
    email: {
      type: String,
      unique: true,
      required: true
    },
    isMale: Boolean,
    description: String,
    usAuthorization: Boolean,
    needVisaSponsor: Boolean,
    newGrads: Boolean,
    skills: [{
        type: String,
        "_id": false
    }],
    links: [String],
    certificates: [String],
    experiences: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Experience"

        }

    ],
    educations: [
	    {
  	        type: mongoose.Schema.Types.ObjectId,
            ref: "Education"

	    }
    ],
    projects: [
	    {
  	        type: mongoose.Schema.Types.ObjectId,
            ref: "Project"

	    }
    ],
    blogs: [
      {
      	    type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"

      }
    ]

},{ usePushEach: true });

// nev.configure({
//     verificationURL: 'http://localhost:3000/api/v1/email-verification/${URL}',

//     transportOptions: {
//         service: 'Gmail',
//         auth: {
//             user: 'talents3Web@gmail.com',
//             pass: 'talents3Web@'
//         }
//     },
//     verifyMailOptions: {
//         from: 'Do Not Reply <talents3Web@@gmail.com>',
//         subject: 'Please confirm account',
//         html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
//         text: 'Please confirm your account by clicking the following link: ${URL}'
//     }
// }, function(error, options){
// });


// UserSchema.pre('save', function (next) {
//     var user = this;

//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, null, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 user.isActive = false;
//                 var URL = user.password;
//          		nev.sendVerificationEmail(user.email, URL, function(err, info) {
//                   if (err)
//                 // handle error...
//                 console.log(err);
//             // flash message of success
//                   });

//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


module.exports = mongoose.model("UserModel", UserSchema);
