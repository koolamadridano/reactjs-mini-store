const Cart = require("../models/cart");

module.exports = {
    async addToCart() {
        try {
            return new Cart(req.body)
                .save()
                .then((value) => res.status(200).json(value))
                .catch((err) => res.status(400).send(err.errors));
        } catch (error) {
            console.error(error);
        }
    },
    async getAllCart(req, res) {
        try {
            const customerId = req.params.customerId;
            const _select = { __v: 0 };
            return Cart.find({ customerId })
                .sort({ _id: -1 }) // filter by _id
                .select(_select) // Do not return  __v and registrant
                .then((value) => res.status(200).json(value))
                .catch((err) => res.status(400).json(err));
        } catch (error) {
            console.error(error);
        }
    },
    async updateCart(req, res) {
        try {
            const customerId = req.params.id;
            const quantity = req.query.quantity;
            Cart.findOneAndUpdate({ customerId }, {
                    quantity,
                })
                .then((value) => {
                    if (!value) {
                        return res.status(400).json({ message: "customerId not found" });
                    }
                    res.status(200).json(value);
                })
                .catch((err) => res.status(400).json(err));
        } catch (error) {
            console.error(error);
        }
    },
};
