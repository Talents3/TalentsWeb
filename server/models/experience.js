var mongoose = require("mongoose");

var experienceSchema = mongoose.Schema({
          userEmail: {
            type: String,
            required: true
          },
   		    companyName: String,
          title: String,
          startDate: String,
          endDate: String,
          description: String,
});

module.exports = mongoose.model("Experience", experienceSchema);
