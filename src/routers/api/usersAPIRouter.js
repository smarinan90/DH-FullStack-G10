const express = require("express");
const router = express.Router();
const usersAPIController = require("../../controllers/api/usersAPIController");

//Rutas
//Listado de todos los generos
router.get("/", usersAPIController.list);
//Detalle del genero
router.get("/:id", usersAPIController.detail);
//Películas por genero
router.get("/:id/movies", usersAPIController.genreMovies);

module.exports = router;
