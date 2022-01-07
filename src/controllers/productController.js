module.exports = {
    products: (res, req) => {
        res.render('products')
    },
    single_products: (res, req) => {
        res.render('single_product')
    }
};