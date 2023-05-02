'use strict';
var dbConn = require('../dbconfig/db.config');
//Employee object create
var Review = function(review) {
    this.user_id = review.user_id;
    this.product_id = review.product_id;
    this.rating = review.rating;
    this.comment = review.comment;


};
Review.create = function(newReview, result) {
    dbConn.query("INSERT INTO reviews set ?", newReview, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Review.findById = function(id, result) {
    dbConn.query("Select * from reviews where review_id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Review.findAll = function(result) {
    dbConn.query("Select * from reviews", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('reviews : ', res);
            result(null, res);
        }
    });
};
Review.update = function(id, review, result) {
    dbConn.query("UPDATE reviews SET user_id=?,product_id=?,rating=?,comment=? WHERE review_id = ?", [review.user_id, review.product_id, review.rating, review.comment, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Review.delete = function(id, result) {
    dbConn.query("DELETE FROM reviews WHERE review_id = ?", [id], function(err, res) {
        console.log(id);
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Review;