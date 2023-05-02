'use strict';
var dbConn = require('../dbconfig/db.config');
//Employee object create
var Coupon = function(coupon) {
    this.code = coupon.code;
    this.discount = coupon.discount;
    this.expiration_date = coupon.expiration_date;
    console.log(this.expiration_date);
    console.log(coupon.expiration_date);

};
Coupon.create = function(newCoupon, result) {
    dbConn.query("INSERT INTO coupons set ?", newCoupon, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Coupon.findById = function(id, result) {
    dbConn.query("Select * from coupons where coupon_id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Coupon.findAll = function(result) {
    dbConn.query("Select * from coupons", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('coupons : ', res);
            result(null, res);
        }
    });
};
Coupon.update = function(id, coupon, result) {
    dbConn.query("UPDATE coupons SET code=?,discount=?,expiration_date=? WHERE coupon_id = ?", [coupon.code, coupon.discount, coupon.expiration_date, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Coupon.delete = function(id, result) {
    dbConn.query("DELETE FROM coupons WHERE coupon_id = ?", [id], function(err, res) {
        console.log(id);
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Coupon;