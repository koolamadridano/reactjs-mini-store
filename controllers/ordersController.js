require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const Order = require("../models/order");

module.exports = {
    async initializeCheckout(req, res) {
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                success_url: `${process.env.BASE_URL}/success`,
                cancel_url: `${process.env.BASE_URL}`,
                customer_email: req.body.email,
                line_items: req.body.items,
            });
            res.status(200).json(session);
        } catch (error) {
            console.error(error);
        }
    },
    async addOrder(req, res) {
        try {
          return new Order(req.body)
                .save()
                .then((value) => res.status(200).json(value))
                .catch((err) => res.status(400).send(err.errors));
        } catch (error) {
            console.error(error);
        }
        
    },
    async getAllOrders(req, res) {
        try {
            const customerId = req.params.customerId;
            const _select = { __v: 0 };
            return Order.find({ customerId })
                .sort({ _id: -1 }) // filter by _id
                .select(_select) // Do not return  __v and registrant
                .then((value) => res.status(200).json(value))
                .catch((err) => res.status(400).json(err));
        } catch (error) {
            console.error(error);
        }
    },
};
