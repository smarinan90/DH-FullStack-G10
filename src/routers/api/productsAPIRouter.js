const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");

router.get("/albums", productsAPIController.albums);
router.get("/artists", productsAPIController.artists);
router.get("/genres", productsAPIController.genres);

module.exports = router;
