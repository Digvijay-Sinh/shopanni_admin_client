const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Define storage for the uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Initialize the multer middleware
const upload = multer({ storage });

// Define your endpoint for handling file uploads
app.post('/upload', upload.single('image'), (req, res) => {
    res.send('File uploaded successfully!');
});

function logout() {
    axios.get('/logout')
        .then(response => {

            // handle successful logout
            console.log(response.data);
        })
        .catch(error => {
            // handle error
            console.log(error);
        });
}