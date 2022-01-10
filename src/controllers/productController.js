module.exports = {
    products: (req, res) => {
        res.render('products')
    },
    single_products: (req, res) => {
        res.render('single_product')
    }
};