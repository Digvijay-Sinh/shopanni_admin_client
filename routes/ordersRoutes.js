const express = require('express')
const router = express.Router()
const orderController = require('../controller/orderController');
// Retrieve all employees
router.get('/', orderController.findAll);
// Create a new employee
router.post('/', orderController.create);
// Retrieve a single employee with id
router.get('/:id', orderController.findById);
// Update a employee with id
router.put('/:id', orderController.update);
// Delete a employee with id
router.delete('/:id', orderController.delete);
module.exports = router