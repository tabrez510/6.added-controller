const path = require('path');

const rootDirectory = require('../util/path');

const productList = [];

exports.getAddProducts = (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
}

exports.postAddProducts = (req, res, next) => {
    productList.push({title : req.body.title});
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    console.log(productList);
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
}