'use strict';
var dbConn = require('../dbconfig/db.config');
//Employee object create
var User = function(user) {
    this.email = user.email;
    this.password = user.password;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.address = user.address;
    this.city = user.city;
    this.state = user.state;
    this.country = user.country;
    this.postal_code = user.postal_code;



};
User.create = function(newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.findById = function(id, result) {
    dbConn.query("Select * from users where user_id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
User.findAll = function(result) {
    dbConn.query("Select * from users", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};
User.update = function(id, user, result) {
    dbConn.query("UPDATE users SET email=?,password=?,first_name=?,last_name=?,address=?,city=?,state=?,country=?,postal_code=? WHERE user_id = ?", [user.email, user.password, user.first_name, user.last_name, user.address, user.city, user.state, user.country, user.postal_code, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
User.delete = function(id, result) {
    dbConn.query("DELETE FROM users WHERE user_id = ?", [id], function(err, res) {
        console.log(id);
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = User;