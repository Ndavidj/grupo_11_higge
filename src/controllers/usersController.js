const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

// const User = require('../models/User')
// Se requiere el modelo de Users
const db = require('../database/models')
const User = db.User;

const controller = {
	register: (req, res) => {
		return res.render('users/register');
	},

	// Creación del usuario
	processRegister: async (req, res) => {
        const resultValidation = validationResult(req);

        //Valida si pasan errores de validacion en la creacion del usuario

        if (resultValidation.errors.length > 0) {
            return  res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        } else {
            let newUser = req.body;
            // Valida que el email no esté en uso
            let userInDB = await User.findOne({
                where: {
                    email: newUser.email
                }
            })
                .catch((error) => console.log(error));

            if (userInDB) {
                return res.render("users/register", {
                    errors: {
                        email: { msg: "Este email ya está en uso" },
                    },
                    oldData: req.body,
                });
            } else {
            User.create({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                dateBirthday: newUser.birthdate,
                address: newUser.address,
                interest: newUser.interest,
                avatar: req.file ? req.file.filename : "default-image.png",
                password: bcryptjs.hashSync(newUser.password, 10),
				roleId: newUser.roleId

            })
                .then(() => {
                    return res.redirect('login');
                })

                .catch((error) => {
                    return res.send(error);
                })
        }}

	},

	login: (req, res) => {
		return res.render('users/login');
	},

	loginProcess: (req, res) => {
		let userToLogin = Users.findByField('email', req.body.email);

		if (userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if (req.body.remember) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/');
			}
			return res.render('users/login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				email: {
					msg: 'email no registrado'
				}
			}
		});
	},

	forgotPassword: (req, res) => {
		res.send('Se envio formulario para recuperar contraseña a su email')
	},

	profile: (req, res) => {
		return res.render('users/profile', {
			user: req.session.userLogged
		});
	},

	edit: (req, res) => {
		return res.render('users/profile', {
			user: req.session.userLogged
		});
	},

	processEdit: (req, res) => {
		const resultValidation = validationResult(req);

	},

	delete: (req, res) => {
		Users.delete(req.params.id);
		res.redirect("/");
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;