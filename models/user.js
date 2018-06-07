var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
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
    experience: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Experience"

        }

    ],
    education: [
	    {  
	        type: mongoose.Schema.Types.ObjectId,
            ref: "Education"
           
	    }
    ],
    blog: [
      {
      	    type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"

      }
    ]

},{ usePushEach: true });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);