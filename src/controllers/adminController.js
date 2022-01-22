const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../database/products.json');
const productsList = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

module.exports = {
    products_list: (req, res) => {
        res.render('admin/products_list', {
            productsList
        })
    },
    product_edit: (req, res) => {
        res.render('admin/product_edit')
    },
    store: (req, res) => {
        let newProduct = req.body;


    },
    edit: (req, res) => {
        let id = req.param.id;
    }
}