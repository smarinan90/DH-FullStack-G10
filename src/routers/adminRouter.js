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
router.get('/create', adminController.artist_creation_page);
router.post('/create', adminController.create_artist)
router.get('/edit/:id', adminController.artist_edit_page);
router.patch('/edit/:id', adminController.update_artist);
router.delete('/delete/:id', adminController.delete_artist);


// Export

module.exports = router;