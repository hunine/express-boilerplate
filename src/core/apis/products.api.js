const productController = require('../modules/products/products.controller');

exports.load = (app) => {
    app.get('/products', productController.getProducts);
};
