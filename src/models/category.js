const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: {
        type: String, required: true,
        enum: {
            values: ["income", "expense"],
            message: `{VALUE} incorrect type allow only income or expense`
        }
    }
},
    {
        timestamps: true
    }
);

const Category = mongoose.model('Category', categorySchema);
module.exports = { Category }
