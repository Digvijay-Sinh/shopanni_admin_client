const express = require('express')
const router = express.Router()
const reviewController = require('../controller/reviewController');
// Retrieve all employees
router.get('/', reviewController.findAll);
// Create a new employee
router.post('/', reviewController.create);
// Retrieve a single employee with id
router.get('/:id', reviewController.findById);
// Update a employee with id
router.put('/:id', reviewController.update);
// Delete a employee with id
router.delete('/:id', reviewController.delete);
module.exports = router