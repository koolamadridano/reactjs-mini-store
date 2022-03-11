const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/cart", (req, res) => {
    cartController.addToCart(req, res);
});
router.get("/cart/:customerId", (req, res) => {
    cartController.getAllCart(req, res);
});
router.put("/cart", (req, res) => {
    cartController.updateCart(req, res);
});
module.exports = router;