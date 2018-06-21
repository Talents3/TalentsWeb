var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');
var nev = require('email-verification')(mongoose);
var urlencode = require('urlencode');
const config = require('../config/database');

var TempUserSchema = new mongoose.Schema({
     username: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    }

},{timestamps: true});
TempUserSchema.index({createdAt: 1},{expireAfterSeconds: 10});

nev.configure({
    verificationURL: 'http://talents3.com/api/v1/email-verification/${URL}',

    transportOptions: {
        service: 'Gmail',
        auth: {
            user: config.emailAccount,
            pass: config.emailPassword
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <talents3Web@@gmail.com>',
        subject: 'Please confirm account',
        html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
        text: 'Please confirm your account by clicking the following link: ${URL}'
    }
}, function(error, options){
});

TempUserSchema.pre('save', function (next) {
    var user = this;

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;

                var URL = urlencode(user.password,'gbk');
         		nev.sendVerificationEmail(user.email, URL, function(err, info) {
                  if (err)
                // handle error...
                console.log(err);
            // flash message of success
                  });

                next();
            });
        });
    } else {
        return next();
    }
});

module.exports = mongoose.model("TempUser", TempUserSchema);
