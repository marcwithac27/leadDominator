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
        firstName: String,
        lastName: { type: String, required: true },
        resortName: String,
        homePhone: { type: String, required: true, unique: true, max: 10 },
        altPhone: { type: String, unique: true, default: "", max: 10 },
        otherPhone1: { type: String, unique: true,  default: "", max: 10 },
        otherPhone2: { type: String, unique: true, default: "", max: 10 },
        source: String,
        email: {
            type: String,
            unique: true
        },


    },
    meta: {
        addressInfo: {
            address: {
                type: String,
                default: "",
            },
            city: {
                type: String,
                default: "",
            },
            state: {
                type: String,
                default: "",
            },
            zip: {
                type: String,
                default: "",
            },
            source: {
                type: String,
                default: "",
            },
        },
        resortInfo: {
            deeded: {
                type: Number,
                max: 1,
                default: ""
            },
            banked: {
                type: Number,
                max: 1,
                default: ""
            },
            additional: {
                type: Number,
                max: 1,
                default: ""
            },
            exchange: {
                type: String,
                default: "",
            },
            bedrooms: {
                type: Number,
                max: 1,
                default: ""
            },
            bathrooms: {
                type: Number,
                max: 1,
                default: ""
            },
            weekType: {
                type: String,
                default: "",
            },
            wkPts: {
                type: String,
                default: "",
            },
            unit: {
                type: String,
                default: "",
            },
            usage: {
                type: String,
                default: "",
            },
            ownership: {
                type: String,
                default: "",
            },
            rentalPrice: {
                type: Number,
                default: "",
            }
        },
        billing: {
            nameOnAccount: {
                type: String,
                default: "",
            },
            billingAddress: {
                type: String,
                default: "",
            },
            billingCity: {
                type: String,
                default: "",
            },
            billingState: {
                type: String,
                default: "",
            },
            billingZip: {
                type: String,
                default: "",
            },
            cardNumber: {
                type: String,
                default: "",
            },
            expMonth: {
                type: String,
                default: "",
            },
            expYear: {
                type: String,
                default: "",
            },
            cvv: {
                type: String,
                default: "",
            },
            bankName: {
                type: String,
                default: "",
            },
            checkNumber: {
                type: Number,
                default: "",
            },
            routingNumber: {
                type: String,
                default: "",
            },
            bankAccountNumber: {
                type: String,
                default: "",
            },
            adAmount: {
                type: Number,
                default: "",
            }
        }
    },
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;