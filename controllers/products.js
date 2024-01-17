const path = require('path');

const rootDirectory = require('../util/path');

const Product = require('../model/product');

exports.getAddProducts = (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
}

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save(() => res.redirect('/'));
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((product) => console.log(product));
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
}