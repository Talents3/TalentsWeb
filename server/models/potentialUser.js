var mongoose = require("mongoose");


var PotentialUserSchema = new mongoose.Schema({
     username: {
      type: String,
      required: true
    },
  
    email: {
      type: String,
      unique: true,
      required: true
    }

},{timestamps: true});
PotentialUserSchema.index({createdAt: 1},{ expireAfterSeconds: 3600 * 24 * 7 });


module.exports = mongoose.model("PotentialUser", PotentialUserSchema);