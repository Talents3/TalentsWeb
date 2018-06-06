const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: Number,
    name: String,
    education: String,
    blog: String
});

const UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel;
