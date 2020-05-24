const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dispoSchema = new Schema({
    date: {
        type: Date,
        

    },
    note: String,
    status: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    lead: {
        type: Schema.Types.ObjectId,
        ref:"Lead"
    }
});

const Disposition = mongoose.model("Disposition", dispoSchema);

module.exports = Disposition;