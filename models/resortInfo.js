const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resortSchema = new Schema ({
   lead: {
      type: Schema.Types.ObjectId,
      ref: "Lead"
   },
   resortName: String,
   resortLocation: String,
   rentalPrice: Number,
   weekType: String,
   deeded: Number,
   banked: Number,
   additional: Number,
   pointAmount: Number,
   bedrooms: Number,
   bathrooms: Number, 
   weekNumber: Number,
   ownership: String,
   unit: String,
   usage: String,
   exchange: String,

});

const Resorts = mongoose.model("Resorts", resortSchema);

module.exports = Resorts;