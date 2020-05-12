const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userType: String,
    firstName: String,
    lastName: {type: String, required: true},
    email: String,
    team: String,
    password: String,
    sfAccountId: String
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users