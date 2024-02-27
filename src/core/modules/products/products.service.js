const productRepository = require('./products.repository');

class ProductService {
    constructor() {
        this.repository = productRepository;
    }

    getProducts() {
        console.log('getProducts');
    }
}

module.exports = new ProductService();
