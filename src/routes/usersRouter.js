const express = require("express");
const router = express.Router();
const multer = require('multer');
const usersController = require("../controllers/usersController.js")


router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', fileUpload.single('userImage'), usersController.store);
router.get('/contact', usersController.contact);


module.exports = router;