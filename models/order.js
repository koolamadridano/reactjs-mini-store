const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const OrderSchema = new Schema({
    customerId: {
        type: String,
        required: [true, "accountId is required"],
    },
    customerAddress: {
        type: String,
        required: [true, "customerAddress is required"],
    },
    orderId: { type: String, default: uuidv4() },
    total: { type: Number, required: [true, "total is required"] },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Order = mongoose.model("orders", OrderSchema);
