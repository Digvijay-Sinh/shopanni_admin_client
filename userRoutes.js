const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
var dbConn = require('./dbconfig/db.config');
const session = require('express-session');
const ejs = require('ejs');
const app = express.Router();

// app.get('/', (req, res) => {
//     req.session.isUserLoggedIn = true;
//     req.session.userCount1 = req.session.userCount1 ? req.session.userCount1 + 1 : 1;
//     res.send(`User Route - Count: ${req.session.userCount1}`)

// });





// app.get('/destroy', (req, res) => {
//     if (!req.session.isUserLoggedIn) {
//         res.redirect('/user')
//     } else {
//         res.send("Logged in")
//     }
// });

// app.get('/logout', (req, res) => {
//     if (!req.session.isUserLoggedIn) {
//         res.redirect('/user')
//     } else {
//         req.session.isUserLoggedIn = false
//         res.send(req.session.isUserLoggedIn)
//     }
// });


const cookieParser = require('cookie-parser');
app.use(cookieParser());

const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

app.get('/authRegister', (req, res) => {
    res.render(path.join(__dirname + '/public/register-email'));
});

const checkEmail = (req, res, next) => {
    if (!req.session.email) {
        res.redirect('/authRegister');
    } else {
        next();
    }
};

const checkOTP = (req, res, next) => {
    if (!req.session.otp) {
        res.redirect('/authRegister');
    } else {
        next();
    }
};
// const checkVerified = (req, res, next) => {
//     if (!req.session.verified) {
//         res.redirect('/authRegister');
//     } else {
//         next();
//     }
// };
const checkVerified = (req, res, next) => {
    if (req.session.verified) {
        // If the cookie is present, move on to the next middleware/route handler
        next();
    } else {
        // If the cookie is not present, redirect the user to a different page
        res.redirect('/authRegister');
    }
};

let transporter = nodemailer.createTransport({
    host: 'mail.shopannies.in',
    port: 587,
    secure: false, // use SSL
    auth: {
        user: 'no-reply@shopannies.in', // replace with your actual email address
        pass: 'ge7E&mbvO' // replace with your actual email password
    },
    tls: {
        rejectUnauthorized: false,
        agent: 'https.Agent'
    }
});




// const flash = require('connect-flash');
// app.use(flash());


app.post('/send-otp', (req, res) => {
    const { email } = req.body;

    const query = "SELECT * FROM users WHERE email = ?";
    dbConn.query(query, [email], (error, results) => {
        if (error) {
            console.log(error);
            // handle error
        } else {
            if (results.length > 0) {
                // res.json({ exists: true });


                console.log("User exists");
                res.send('<script>alert("Account with this email already exists. Please login or use a different email.");window.location.href="/authRegister";</script>');

                // handle user exists case
            } else {
                console.log("User does not exist");
                console.log(email);
                // Generate OTP
                const otp = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
                req.session.email = email;
                req.session.otp = otp;
                // Set up Nodemailer mail options

                let mailOptions = {
                    from: 'no-reply@shopannies.in', // replace with your actual email address
                    to: email, // replace with the recipient's email address
                    subject: 'OTP from shopannies',
                    text: `Your OTP is: ${otp}`
                };



                // Send email
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error(error);
                        // res.status(500).json({ error: 'Error sending OTP' });
                    } else {
                        console.log(`OTP sent to ${email}: ${otp}`);
                        res.redirect('/verify-otp');
                    }
                });
            }
        }
    });


});


app.get('/verify-otp', checkEmail, checkOTP, (req, res) => {
    const email = req.session.email;
    const otp = req.session.otp;
    res.render(path.join(__dirname + '/public/otp'), { email: email, otp: otp });
});
app.get('/registerUser', checkVerified, (req, res) => {
    // req.session.destroy(err => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // res.redirect('/');
    //     }
    // });
    // res.clearCookie('verified');
    delete request.session.verified;

    res.render(path.join(__dirname + '/public/register-user'), { email: req.session.email });

});

app.post('/verify-otp', checkEmail, checkOTP, (req, res) => {

    const userOtp = req.body.otp;
    const otp = req.session.otp;
    delete request.session.otp;

    const email = req.session.email;

    if (userOtp === otp) { // Reset expiration timer
        res.session.verified = true;
        // res.cookie('verified', 'true', { maxAge: 2 * 60 * 1000 });
        // res.cookie('email', email, { maxAge: 2 * 60 * 1000 });
        console.log(req.session.verified);
        res.redirect('/registerUser');
    } else {
        res.send('Invalid OTP');
    }
    // req.session.destroy(err => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // req.session = {};
    //         if (userOtp === otp) { // Reset expiration timer
    //             res.session.verified=true;
    //             // res.cookie('verified', 'true', { maxAge: 2 * 60 * 1000 });
    //             // res.cookie('email', email, { maxAge: 2 * 60 * 1000 });
    //             console.log(req.cookies.verified);
    //             res.redirect('/registerUser');
    //         } else {
    //             res.send('Invalid OTP');
    //         }
    //     }
    // });


});

app.get('/loginUser', (req, res) => {
    res.render(path.join(__dirname + '/public/login'));
});


app.post('/register', (req, res) => {
    const { name, email, number, address1, address2, state, district, pincode, password } = req.body;

    // Insert the new user into the MySQL database
    const sql = `INSERT INTO users2 (name, email, number, address1, address2, state, district, pincode, password) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    dbConn.query(sql, [name, email, number, address1, address2, state, district, pincode, password], (err, result) => {
        if (err) {
            console.error('Error inserting user into MySQL: ' + err.stack);
            res.send('Error inserting user into MySQL. Please try again later.');
            return;
        }

        // Render the success template with the user's name
        const data = { name: name };
        res.render('success', data);
    });
});


// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
//     store: store, // add this line to use the session store
//     cookie: {
//         maxAge: 1 * 60 * 1000 // One day in milliseconds
//     }
// }));

const userRedirectLogin = (req, res, next) => {
    if (!req.session.userLoggedIn) {
        res.redirect('/login')
    } else {
        next()
    }
}

const userRedirectHome = (req, res, next) => {
    if (req.session.userLoggedIn) {
        res.redirect('/index')
    } else {
        next()
    }
}

app.get('/userHome', userRedirectLogin, function(request, response) {
    const email = request.session.email
    response.render(path.join(__dirname + '/public/userHome'), { email: email });
    // Render login template
    // var username = request.session.username;
    // if (request.session.loggedIn) {
    //     response.render(path.join(__dirname + '/public/index'), {
    //         username: username
    //     });

    // } else {
    //     response.send("Not logged in");

    // }
});

app.post('/userLogin', (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    dbConn.query('SELECT * FROM users2 WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) {
            console.log(error);
        }
        console.log(results);
        if (results.length > 0) {
            const user = results[0];
            if (password === user.password) {
                req.session.loggedIn = true;
                req.session.email = email;
                console.log(req.session.loggedIn);
                console.log(req.session.email);
                res.redirect('/userHome');
                // res.send("Login Successful")
            } else {
                // res.redirect('http://127.0.0.1:5501/admin/Admin-login.html');
                res.send("Login unSuccessful")

            }
        } else {
            // res.redirect('http://127.0.0.1:5501/admin/Admin-login.html');
            res.send("Login unSuccessful")

        }
    });

})


module.exports = app;