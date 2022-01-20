const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Product Routes

router.get('/', productController.products);
router.get('/product/:id', productController.single_product);

// Export

module.exports = router;