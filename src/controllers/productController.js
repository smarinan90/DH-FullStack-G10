module.exports = {
    products: (req, res) => {
        res.render('client/products')
    },
    single_product: (req, res) => {
        res.render('client/single_product')
    }
};