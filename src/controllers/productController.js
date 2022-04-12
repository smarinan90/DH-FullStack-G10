const db = require("../../database/models");

module.exports = {
  products: async (req, res) => {
    const artists = await db.Artists.findAll();
    const genres = await db.Genres.findAll();
    res.render("client/products", { artists, genres });
  },

  single_product: async (req, res) => {
    const id = req.params.id;
    const artist = await db.Artists.findByPk(id);
    console.log(artist);
    const albums = await db.Albums.findAll({
      where: {
        artist_id: id,
      },
    });
    console.log(albums);
    res.render("client/single_product", { artist, albums });
  },
};
