const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');



//getting all things
router.get('/products', productsController.list)

//getting single thing
router.get('/products/:id', productsController.show)

//creating a thing
router.post('/products', productsController.create)

module.exports = router;