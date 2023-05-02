const express = require('express')
const router = express.Router()
const productController = require('../controller/controller');
// Retrieve all employees
router.get('/', productController.findAll);
// Create a new employee
router.post('/', productController.create);
// Retrieve a single employee with id
router.get('/:id', productController.findById);
// Update a employee with id
router.put('/:id', productController.update);
// Delete a employee with id
router.delete('/:id', productController.delete);
module.exports = router