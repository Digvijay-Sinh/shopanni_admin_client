const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categoryController');
// Retrieve all employees
router.get('/', categoryController.findAll);
// Create a new employee
router.post('/', categoryController.create);
// Retrieve a single employee with id
router.get('/:id', categoryController.findById);
// Update a employee with id
router.put('/:id', categoryController.update);
// Delete a employee with id
router.delete('/:id', categoryController.delete);
module.exports = router