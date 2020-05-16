const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billingSchema = new Schema({
   lead: {
      type: Schema.Types.ObjectId,
      ref: "Lead"
   },
   nameOnAccount: String,
   creditCard: String,
   last4: String,
   expMonth: String,
   expYear: String,
   cVV: String,
   bankName: String,
   checkNumber: String,
   bankAccount: String,
   routing: String,
   billingAddress: String,
   billingCity: String,
   billingState: String,
   billingZip: String,
   advertismentFee: Number     
});

const BillingInfo = mongoose.model("BillingInfo", billingSchema);

module.exports = BillingInfo;