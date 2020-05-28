const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    leads: [{
        type: Schema.Types.ObjectId,
        ref: "Lead"
    }],
    disposition: [{
        type: Schema.Types.ObjectId,
        ref: "Disposition",
    }],
    userName: {
        type: String,
        required: true,
        unique: "true"
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: { type: String, required: true },
    email: String,
});
userSchema.methods.checkPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};
// encrypt the password when a new user is added or updated
userSchema.pre("save", function (next) {
	if (this.isNew || this.isModified("password")) {
		this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
		next();
	} else {
		next();
	}

});

const Users = mongoose.model("Users", userSchema);

module.exports = Users