const UserModel = require('../models/userModel');

// add a user
const register = function(newUser) {

    // check if the problem is already in the db
    return new Promise((resolve, reject) => {
    UserModel.findOne({email: newUser.email}, (err, data) => {
        if (data) {
            reject('User already exists');
        } else {
            // save to mongo db
            UserModel.count({}, (err, count) => {
                newUser.id = count + 1;
                const mongoUser = new UserModel(newUser);
                UserModel.register(mongoUser, mongoUser.password, function(err, user) {
                  if(err){
                      console.log(err);
                  }
                  passport.authenticate("local")(req, res, function(){
                    mongoUser.save();
                    resolve(mongoUser);
                    //res.redirect("/campgrounds");
                  });
                });
            });
        }
        });
    });
}

module.exports = {
    register
}
