const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../database/products.json');
const productsList = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));


module.exports = {
    products: (req, res) => {

        res.render('client/products', {
            productsList
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