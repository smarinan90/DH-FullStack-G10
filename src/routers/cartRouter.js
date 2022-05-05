const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/isAdmin");

const cartController = require("../controllers/cartController");

// Cart Routes

router.get("/", adminMiddleware, cartController.cart);

// Export

module.exports = router;
