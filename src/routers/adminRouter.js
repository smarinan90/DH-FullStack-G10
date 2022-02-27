const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const adminController = require('../controllers/adminController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/products_images'))
    },
    filename: (req, file, cb) => {
        cb(null, 'product-' + Date.now() + path.extname('file'))
    }
})

const upload = multer({ storage })


// Admin Routes

router.get('/', adminController.products_list);

router.get('/edit/:id', adminController.product_edit);
router.post('/edit/:id', adminController.store)

// Export

module.exports = router;