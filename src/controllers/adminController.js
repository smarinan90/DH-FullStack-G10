const db = require("../../database/models");

module.exports = {
    products_list: async (req, res) => {
        const artists = db.Artists.findAll();

        res.render('admin/products_list', {
            artists
        });
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