const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    disposition: [{
        type: Schema.Types.ObjectId,
        ref: "Disposition",
        default: ""
    }],
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    tableData: {
        firstname: String,
        lastName: {type:String, required: true},
        resortName: String,
        homePhone: {type:String, required: true, unique: true, max: 10},
        altPhone: {type:String, unique: true, default: null, max: 10},
        otherPhone1: {type:String, unique: true, default: null, max: 10},
        otherPhone2: {type:String, unique: true, default: null, max:10},
        source: String,
        email: {
            type: String,
            unique: true
    },
    meta: {
        addressInfo: {address: String,
            city: String,
            state: String,
            zip: String,
            source: String,},
        resortInfo: {
            deeded: {
            type: Number,
            max:1
        },
            banked: {
            type: Number,
            max:1
        },
            additional: {
            type: Number,
            max:1
        },
            exchange: String,
            bedrooms: {
                type: Number,
                max:1
            },
            bathrooms: {
                type: Number,
                max:1
            },
            weekType: String,
            wkPts: String,
            unit: String,
            usage: String,
            ownership: String,
            rentalPrice: Number,},
        billing: {nameOnAccount: String,
            billingAddress: String,
            billingCity: String,
            billingState: String,
            billingZip: String,
            cardNumber: String,
            expMonth: String,
            expYear: String,
            cvv: String,
            bankName: String,
            checkNumber: Number,
            routingNumber: String,
            bankAccountNumber: String,
            adAmount: String}
    },
    
    },
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;