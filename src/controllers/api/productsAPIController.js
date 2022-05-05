const db = require("../../../database/models");

const genresAPIController = {
  albums: (req, res) => {
    db.Albums.findAll().then((albums) => {

      try {
        let respuesta = {
          meta: {
            status: 200,
            total: albums.length,
            url: "api/products/albums",
          },
          data: albums
        };
        res.json(respuesta);

      } catch (error) {
        throw error
      }

    });
  },
  artists: (req, res) => {
    db.Artists.findAll().then((artists) => {

      try {
        let respuesta = {
          meta: {
            status: 200,
            total: artists.length,
            url: "api/products/artists",
          },
          data: artists
        };
        res.json(respuesta);

      } catch (error) {
        throw error
      }

    });
  },
  genres: (req, res) => {
    db.Genres.findAll().then((genres) => {

      try {
        let respuesta = {
          meta: {
            status: 200,
            total: genres.length,
            url: "api/products/genres",
          },
          data: genres
        };
        res.json(respuesta);

      } catch (error) {
        throw error
      }

    });
  }
};

module.exports = genresAPIController;
