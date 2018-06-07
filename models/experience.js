var mongoose = require("mongoose");

var experienceSchema = mongoose.Schema({
   		    companyName: String,
          tile: String,
          startDate: Date,
          endDate: Date,
          description: String,
});

module.exports = mongoose.model("Experience", experienceSchema);