const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products')

// /admin/add-products
router.get('/add-product', productsController.getAddProducts);

//  /admin/products
router.post('/add-product', productsController.postAddProducts);

module.exports = router;