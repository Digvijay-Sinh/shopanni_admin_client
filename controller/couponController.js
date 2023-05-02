'use strict';
const Coupon = require('../models/couponModel');
exports.findAll = function(req, res) {
    Coupon.findAll(function(err, coupon) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', coupon);
        res.send(coupon);
    });
};
exports.create = function(req, res) {
    const new_coupon = new Coupon(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Coupon.create(new_coupon, function(err, coupon) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Coupon added successfully!", data: coupon });
        });
    }
};
exports.findById = function(req, res) {
    Coupon.findById(req.params.id, function(err, coupon) {
        if (err)
            res.send(err);
        res.json(coupon);
    });
};
exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Coupon.update(req.params.id, new Coupon(req.body), function(err, coupon) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Coupon successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    Coupon.delete(req.params.id, function(err, coupon) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Coupon successfully deleted' });
    });
};