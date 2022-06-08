const express = require("express");
const router = express.Router();
const path = require('path'); 
const multer = require('multer');
const usersController = require("../controllers/usersController.js");

// Config's Multer 
const userStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users/userImage'))
    },
    filename: function (req, file, cb) {
        const userImg = 'user-' + file.fieldname + Date.now() + path.extname(file.originalname)
        cb(null, userImg);
    }
});

const upload = multer ({storage: userStorage});


router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', usersController.store);
router.get('/contact', usersController.contact);


module.exports = router;