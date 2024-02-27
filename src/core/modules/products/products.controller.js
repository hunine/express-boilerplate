const productService = require('./products.service');

class ProductController {
    getProducts(req, res) {
        productService.getProducts();
        res.send('PRODUCTS');
    }
}

module.exports = new ProductController();
