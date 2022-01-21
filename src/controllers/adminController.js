module.exports = {
    products_list: (req, res) => {
        res.render('admin/products_list')
    },
    product_edit: (req, res) => {
        res.render('admin/product_edit')
    }
}