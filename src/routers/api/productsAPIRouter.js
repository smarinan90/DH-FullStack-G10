const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");

//Rutas
//Listado de todos los generos
router.get("/", productsAPIController.list);
//Detalle del genero
router.get("/:id", productsAPIController.detail);
//Películas por genero
router.get("/:id/movies", productsAPIController.genreMovies);

module.exports = router;
