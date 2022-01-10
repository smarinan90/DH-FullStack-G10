const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');

// Main Routes

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);

// Product Routes

router.get('/products', productController.products);
router.get('/product', productController.single_products);

// Cart Routes

router.get('/cart', cartController.cart);

// Export

module.exports = router;