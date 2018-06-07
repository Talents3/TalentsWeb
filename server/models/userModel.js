var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    image: String,
    backgroundImage: String,
    age: Number,
    adress: String,
    phone: String,
    email: String,
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
