const express = require('express')
const router = express.Router()
const couponController = require('../controller/couponController');
// Retrieve all employees
router.get('/', couponController.findAll);
// Create a new employee
router.post('/', couponController.create);
// Retrieve a single employee with id
router.get('/:id', couponController.findById);
// Update a employee with id
router.put('/:id', couponController.update);
// Delete a employee with id
router.delete('/:id', couponController.delete);
module.exports = router