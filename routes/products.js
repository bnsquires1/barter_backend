const { Router } = require('express');
const productsCtrl = require('../controllers/products.js');

const router = Router();

//create a new product/service
router.post('/', productsCtrl.createProduct);
//view all products/services available
router.get('/', productsCtrl.getProducts);
//display all products/services provided by a business
router.get('/display', productsCtrl.displayProducts);
//update a product listing by id
router.patch('/:id', productsCtrl.updatedProduct);
//delete a product listing by id
router.delete('/:id', productsCtrl.deleteProduct);

module.exports = router;