var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');

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
    hash: String,
    salt: String,
    image: String,
    backgroundImage: String,
    age: Number,
    adress: String,
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
    skills: [String],
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
    blogs: [
      {
      	    type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"

      }
    ]

},{ usePushEach: true });

UserSchema.pre('save', function (next) {
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
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


module.exports = mongoose.model("UserModel", UserSchema);
