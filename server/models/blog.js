var mongoose = require("mongoose");

var blogSchema = mongoose.Schema({
   		postTime: Date,
      	contents: String,
      	image: String,
        power: Number,
      	comments: [
           { 
            author: String,
           	descrition: String,
           	commentDate: Date,
           	like: Boolean,
           }
      	]
});

module.exports = mongoose.model("Blog", blogSchema);