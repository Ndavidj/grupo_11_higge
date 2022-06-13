const express = require('express');
const router = express.Router();

const usersController = require ("../controllers/usersController");

// Middlewares
const uploadFile = require('../middlewares/routes/users/multerMiddleware');
const validations = require('../middlewares/routes/users/validateRegisterMiddleware');
const validateLogin = require('../middlewares/routes/users/validateLoginMiddleware')
const guestMiddleware = require('../middlewares/routes/users/guestMiddleware');
const authMiddleware = require('../middlewares/routes/users/authMiddleware');

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validateLogin, usersController.loginProcess);

// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Formulario de edición de perfil
router.get("/edit", authMiddleware, usersController.edit);
router.put("/edit", uploadFile.single ('avatar'), /* validateEdit,  */usersController.processEdit);
router.post("/delete", usersController.delete);


// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

/* A route that is going to be used to render the forgot-password view. */
router.get('/forgot-password', usersController.forgotPassword);


module.exports = router;
