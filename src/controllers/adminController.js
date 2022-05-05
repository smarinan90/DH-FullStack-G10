const db = require("../../database/models");

module.exports = {
  products_list: async (req, res) => {
    const albums = await db.Albums.findAll();
    const artists = await db.Artists.findAll();

    res.render("admin/products_list", {
      albums,
      artists,
    });
  },

  // Artists CRUD

  artist_creation_page: async (req, res) => {
    try {
      const genres = await db.Genres.findAll();

      res.render("admin/artist_create", {
        genres: genres
      });
    } catch (error) {
      res.send(error)
    }
  },

  create_artist: async (req, res) => {
    try {
      // const valResult = validationResult(req);
      // if (!valResult.errors) {
      //   return res.render("admin/artist_create", {
      //     errors: valResult.mapped(),
      //     oldData: req.body,
      //   });
      // } else {

      const { name, description, genre } = req.body;
      const artist_picture = req.file.filename

      let nameVerification = await db.Artists.findOne({
        where: { name: name },
      });

      // nameVerification
      //   ? res.render("admin/artist_create", {
      //     errors: {
      //       email: {
      //         msg: "El artista ya existe",
      //       },
      //     },
      //     oldData: req.body,
      //   })
      //   : null;

      const newArtist = {
        name,
        description,
        genre_id: genre,
        artist_picture
      };

      await db.Artists.create(newArtist);
      // }

      res.redirect("/admin");
    } catch (error) {
      res.send(error);
    }
  },

  artist_edit_page: async (req, res) => {
    const genres = await db.Genres.findAll();

    try {
      const id = req.params.id;
      const artistInfo = await db.Artists.findByPk(id);

      res.render("admin/artist_create", {
        genres: genres,
        oldData: artistInfo
      });
    } catch (error) {
      res.send(error);
    }
  },

  update_artist: async (req, res) => {
    try {
      const valResult = validationResult(req);
      if (!valResult.errors) {
        return res.render("admin/artist_create", {
          errors: valResult.mapped(),
          oldData: req.body,
        });
      } else {
        const { name, artist_picture, description, genre } = req.body;

        let nameVerification = await db.Artists.findOne({
          where: { name: name },
        });

        nameVerification
          ? res.render("admin/artist_create", {
            errors: {
              email: {
                msg: "El artista ya existe",
              },
            },
            oldData: req.body,
          })
          : null;

        const newArtist = {
          name,
          banner,
          artist_picture,
          description,
          genre
        };

        await db.Artists.update(newArtist, { where: { id: req.params.id } });
      }

      res.redirect("/admin/products_list");
    } catch (error) {
      res.send(error);
    }
  },

  delete_artist: async (req, res) => {
    try {
      await db.Artists.destroy({ where: { id: req.params.id } });

      res.redirect("/admin");
    } catch (error) {
      res.send(error);
    }
  },

  // Album CRUD

  album_creation_page: (req, res) => {
    res.render("admin/album_create");
  },

  create_album: async (req, res) => {
    try {
      const valResult = validationResult(req);
      if (!valResult.errors) {
        return res.render("admin/album_create", {
          errors: valResult.mapped(),
          oldData: req.body,
        });
      } else {
        const { name, release_date, price, stock, discount, cover_image } =
          req.body;

        let nameVerification = await db.Albums.findOne({
          where: { name: name },
        });

        nameVerification
          ? res.render("admin/album_create", {
            errors: {
              email: {
                msg: "El album ya existe",
              },
            },
            oldData: req.body,
          })
          : null;

        const newAlbum = {
          name,
          release_date,
          price,
          stock,
          discount,
          cover_image,
        };

        await db.Albums.create(newAlbum);
      }

      res.redirect("/admin/products_list");
    } catch (error) {
      res.send(error);
    }
  },

  album_edit_page: async (req, res) => {
    try {
      const id = req.params.id;
      const artistInfo = await db.Albums.findByPk(id);
      res.render("admin/album_create", {
        oldData: artistInfo,
      });
    } catch (error) {
      res.send(error);
    }
  },

  update_album: async (req, res) => {
    try {
      const valResult = validationResult(req);
      if (!valResult.errors) {
        return res.render("admin/album_create", {
          errors: valResult.mapped(),
          oldData: req.body,
        });
      } else {
        const { name, release_date, price, stock, discount, cover_image } =
          req.body;

        let nameVerification = await db.Albums.findOne({
          where: { name: name },
        });

        nameVerification
          ? res.render("admin/album_create", {
            errors: {
              email: {
                msg: "El artista ya existe",
              },
            },
            oldData: req.body,
          })
          : null;

        const newAlbum = {
          name,
          release_date,
          price,
          stock,
          discount,
          cover_image,
        };

        await db.Albums.update(newAlbum, { where: { id: req.params.id } });
      }

      res.redirect("/admin/products_list");
    } catch (error) {
      res.send(error);
    }
  },

  delete_album: async (req, res) => {
    try {
      db.Albums.destroy({ where: { id: req.params.id } });
      res.redirect("/admin");
    } catch (error) {
      res.send(error);
    }
  },
};
