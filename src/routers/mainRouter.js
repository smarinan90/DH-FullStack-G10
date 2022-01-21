const express = require('express');
const router = express.Router();
const multer = require('multer');

const mainController = require('../controllers/mainController');

// Main Routes

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);

// Export

module.exports = router;