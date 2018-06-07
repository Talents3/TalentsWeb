var mongoose = require("mongoose");
var Experience = require("./models/experience");
var Blog   = require("./models/blog");
var Education = require("./models/education");
var User = require("./models/user");

var userInfo = {
    username: "Liam",
    password: "hahahaha",
    image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
    backgroundImage: null,
    age: 20,
    adress: "String",
    phone: "6462098552",
    email: "yg1497@nyu.edu",
    isMale: true,
    description: "nice people",
    usAuthorization: true,
    needVisaSponsor: true,
    newGrads: true,
    skills: ["ux","ui"],
    links: ["https://github.com/Talents3/TalentsWeb"],
    certificates: null,

} ;
var experience = {
          companyName: "sbcompany",
          tile: "String",
          startDate: new Date(),
          
          description: "happy",
};
var education = {
    universityName: "sb school",
           degreeType: "String",
           major: "String",
           
           inProgress: false,
           transcripts: "String",
           courses: [
               {
                courseName: "ai",
                courseCode: "String",
                courseGrade: "A+",
               }
 
           ]

};
var blog = {

        contents: "String",
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        power: 200,
        comments: [
           { 
            author: "String",
            descrition: "String",
            
            like: true,
           }
        ]

};
        


function seedDB(){
   //Remove all users
   Experience.remove({},function(err){
      if(err){
        console.log(err);
      }
   });
   Education.remove({},function(err){
       if(err){
        console.log(err);
      }
   });

   Blog.remove({},function(err){
      if(err){
        console.log(err);
      }

   });
   User.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed users!");
         //add a few campgrounds
        
            User.create(userInfo, function(err, user){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a userinfo");
                    //create a comment
                    Experience.create(
                       experience, function(err, ex){
                            if(err){
                                console.log(err);
                            } else {
                                user.experience.push(ex);
                                
                                console.log("Created an experience");
                            }
                        });
                    Education.create(education,function(err,ed){
                            if(err){
                                console.log(err);
                            } else {
                                user.education.push(ed);
                              
                                 console.log("Created an education");
                            }
                    });
                    Blog.create(blog,function(err,bl){
                            if(err){
                                console.log(err);
                            } else {
                                user.blog.push(bl);
                                user.save();
                                 console.log("Created a blog");
                            }
                    });

                }
            });

        
    }); 
  
}

module.exports = seedDB;