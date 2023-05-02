'use strict';
var dbConn = require('../dbconfig/db.config');
//Employee object create
var Product = function(product) {
    this.product_id = product.product_id;
    this.name = product.name;
    this.description = product.description;
    this.image_url = product.image_url;
    this.price = product.price;
    this.category_id = product.category_id;
};
Product.create = function(newProduct, result) {
    dbConn.query("INSERT INTO products set ?", newProduct, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Product.findById = function(id, result) {
    dbConn.query("Select * from products where product_id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Product.findAll = function(result) {
    dbConn.query("Select * from products", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('products : ', res);
            result(null, res);
        }
    });
};
Product.update = function(id, product, result) {
    dbConn.query("UPDATE products SET name=?,description=?,image_url=?,price=?,category_id=? WHERE product_id = ?", [product.name, product.description, product.image_url, product.price, product.category_id, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Product.delete = function(id, result) {
    dbConn.query("DELETE FROM products WHERE product_id = ?", [id], function(err, res) {
        console.log(id);
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Product;