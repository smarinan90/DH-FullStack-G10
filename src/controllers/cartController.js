const db = require("../../database/models");

module.exports = {
  cart: (req, res) => {
    res.render("client/cart");
  },
  productsInCart: (req, res) => {
    // let productsInCart = req.query.genre
    //   ? productsList.filter((p) => p.genre == genreFilter)
    //   : productsList;

    res.render("client/products", {
      productsInCart,
    });
  },
};
