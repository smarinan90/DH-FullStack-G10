const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const adminMiddleware = require("../middleware/isAdmin");

const adminController = require("../controllers/adminController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/products_images"));
  },
  filename: (req, file, cb) => {
    cb(null, "product-" + Date.now() + path.extname("file"));
  },
});

const upload = multer({ storage });

// Admin Routes

router.get("/", adminMiddleware, adminController.products_list);

router.get("/createArtist", adminController.artist_creation_page);
router.post("/createArtist", adminController.create_artist);
router.get("/editArtist/:id", adminController.artist_edit_page);
router.patch("/editArtist/:id", adminController.update_artist);
router.delete("/deleteArtist/:id", adminController.delete_artist);

router.get("/createAlbum", adminController.album_creation_page);
router.post("/createAlbum", adminController.create_album);
router.get("/editAlbum/:id", adminController.album_edit_page);
router.patch("/editAlbum/:id", adminController.update_album);
router.delete("/deleteAlbum/:id", adminController.delete_album);

// Export

module.exports = router;
