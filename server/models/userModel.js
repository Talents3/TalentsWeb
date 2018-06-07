var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    id: Number,
    username: {
      type: String,
      required: true
    },
    password: String,
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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("UserModel", UserSchema);
