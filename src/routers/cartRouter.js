const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

// Cart Routes

router.get('/', cartController.cart);

// Export

module.exports = router;