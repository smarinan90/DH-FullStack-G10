const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "../database/products.json");
const productsList = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
// console.log(productsList);
// console.log(productsList[0].albums[0].price);
// console.log(productsList.forEach((el) => console.log(el.albums[0].price)));
module.exports = {
  products: (req, res) => {
    let genres = [];
    productsList.forEach((el) => {
      genres.includes(el.genre) ? genres : genres.push(el.genre);
    });

    let genreFilter = req.query.genre;
    let listOfProducts = req.query.genre
      ? productsList.filter((p) => p.genre == genreFilter)
      : productsList;

    res.render("client/products", {
      listOfProducts,
      genres,
    });
  },
  single_product: (req, res) => {
    let id = req.params.id;
    let product = productsList.find((p) => p.id == id);
    let albums = product.albums;
    res.render("client/single_product", {
      product,
      albums,
    });
  },
};