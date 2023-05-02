const express = require('express')
const router = express.Router()
const userController = require('../controller/userController');
// Retrieve all employees
router.get('/', userController.findAll);
// Create a new employee
router.post('/', userController.create);
// Retrieve a single employee with id
router.get('/:id', userController.findById);
// Update a employee with id
router.put('/:id', userController.update);
// Delete a employee with id
router.delete('/:id', userController.delete);
module.exports = router