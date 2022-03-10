const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    customerId: {
        type: String,
        required: [true, "accountId is required"],
    },
    productName: {
        type: String,
        required: [true, "productName is required"],
    },
    productUrl: {
        type: String,
        required: [true, "productUrl is required"],
    },
    productPrice: {
        type: String,
        required: [true, "productPrice is required"],
    },
    quantity: {
        type: String,
        required: [true, "quantity is required"],
    },
});

module.exports = Cart = mongoose.model("carts", CartSchema);