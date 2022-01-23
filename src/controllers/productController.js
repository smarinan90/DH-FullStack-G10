const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../database/products.json');
const productsList = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));


module.exports = {
    products: (req, res) => {

        let genres = [];
        productsList.forEach(el => {
            genres = genres.includes(el.genre) ? genres.push(el.genre) : genre; 
        });

        let genreFilter = req.query.genre;
        let listOfProducts = req.query.genre ? productsList.filter(p => p.genre == genreFilter) : productsList;

        res.render('client/products', {
            listOfProducts,
            genres
        })
    },
    single_product: (req, res) => {

        let id = req.params.id;
        let product = productsList.find(p => p.id == id)

        res.render('client/single_product', {
            product
        })
    }
}