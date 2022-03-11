const express = require("express");
const router = express.Router();

const orderController = require("../controllers/ordersController");

router.get("/order/:customerId", (req, res) => {
    orderController.getAllOrders(req, res);
});
router.post("/order", (req, res) => {
    orderController.addOrder(req, res);
});
router.post("/initialize-checkout", (req, res) => {
    orderController.initializeCheckout(req, res);
});
module.exports = router;