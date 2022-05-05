const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/isAdmin");

const productController = require("../controllers/productController");

// Product Routes

router.get("/", adminMiddleware, productController.products);
router.get("/:id", adminMiddleware, productController.single_product);

// Export

module.exports = router;
