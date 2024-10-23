const { Timestamp } = require("bson")
const mongoose = require("mongoose")

const { Schema } = mongoose

const trascationsSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true,
        enum:{
            values:["income","expense"],
            message:`{VALUE} incorrect type allow only income or expense`
        }

    },
    category: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    description: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)

const Transaction = mongoose.model("Transaction",trascationsSchema)

module.exports = {Transaction}