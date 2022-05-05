const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const adminMiddleware = require("../middleware/isAdmin");

const adminController = require("../controllers/adminController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/img/artists_banner"));
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  }
});

const upload = multer({ storage });

// Admin Routes

router.get("/", adminMiddleware, adminController.products_list);

router.get("/createArtist", adminController.artist_creation_page);
router.post("/createArtist", upload.single('artist_picture'), adminController.create_artist);
router.get("/editArtist/:id", adminController.artist_edit_page);
router.patch("/editArtist/:id", upload.single('artist_picture'), adminController.update_artist);
router.delete("/deleteArtist/:id", adminController.delete_artist);

// router.get("/createAlbum", adminController.album_creation_page);
// router.post("/createAlbum", upload2.single('cover_image'), adminController.create_album);
// router.get("/editAlbum/:id", adminController.album_edit_page);
// router.patch("/editAlbum/:id", upload2.single('cover_image'), adminController.update_album);
// router.delete("/deleteAlbum/:id", adminController.delete_album);

// Export

module.exports = router;
