'use strict';
var dbConn = require('../dbconfig/db.config');
//Employee object create
var Order = function(order) {
    this.user_id = order.user_id;
    this.total_amount = order.total_amount;
    this.payment_status = order.payment_status;
    this.date_ordered = order.date_ordered;
    this.product_id = order.product_id;

};
Order.create = function(newOrder, result) {
    dbConn.query("INSERT INTO orders set ?", newOrder, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Order.findById = function(id, result) {
    dbConn.query("Select * from orders where order_id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Order.findAll = function(result) {
    dbConn.query("Select * from orders", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('orders : ', res);
            result(null, res);
        }
    });
};
Order.update = function(id, order, result) {
    dbConn.query("UPDATE orders SET user_id=?,total_amount=?,payment_status=?,date_ordered=?,product_id=? WHERE order_id = ?", [order.user_id, order.total_amount, order.payment_status, order.date_ordered, order.product_id, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Order.delete = function(id, result) {
    dbConn.query("DELETE FROM orders WHERE order_id = ?", [id], function(err, res) {
        console.log(id);
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Order;