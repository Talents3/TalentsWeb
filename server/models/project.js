var mongoose = require("mongoose");

var projectSchema = mongoose.Schema({
          userEmail: {
            type: String,
            required: true
          },
   		    projectName: String,
          startDate: String,
          endDate: String,
          projectContent: String,
          skills: [
                {
                	skillName: String,
                }
 	       ]
});

module.exports = mongoose.model("Project", projectSchema);
