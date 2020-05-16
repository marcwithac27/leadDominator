const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    disposition: {
        type: Schema.Types.ObjectId,
        ref: "Disposition",
        default: null
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    firstname: String,
    lastName: {type:String, required: true},
    resortName: String,
    homePhone: {type:String, required: true, unique: true},
    altPhone: {type:String, unique: true, default: null},
    address: String,
    city: String,
    state: String,
    zip: String,
    source: String,
    email: {
        type: String,
        unique: true
    },
    billingInfo: {
        type: Schema.Types.ObjectId,
        ref: "BillingInfo"
    }
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;