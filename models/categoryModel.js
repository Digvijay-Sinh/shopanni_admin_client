'use strict';
var dbConn = require('../dbconfig/db.config');
//Employee object create
var Category = function(category) {
    this.name = category.name;
    this.description = category.description;

};
Category.create = function(newCategory, result) {
    dbConn.query("INSERT INTO categories set ?", newCategory, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Category.findById = function(id, result) {
    dbConn.query("Select * from categories where category_id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Category.findAll = function(result) {
    dbConn.query("Select * from categories", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('categories : ', res);
            result(null, res);
        }
    });
};
Category.update = function(id, category, result) {
    dbConn.query("UPDATE categories SET name=?,description=? WHERE category_id = ?", [category.name, category.description, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Category.delete = function(id, result) {
    dbConn.query("DELETE FROM categories WHERE category_id = ?", [id], function(err, res) {
        console.log(id);
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Category;