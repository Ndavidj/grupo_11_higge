const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

// const User = require('../models/User')
// Se requiere el modelo de Users
const db = requiere('../database/models')

const controller = {
	register: (req, res) => {
		return res.render('users/register');
	},

	processRegister: async (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		} else {

			let newUser = req.body;

			let userInDB = await Users.findOne({
				where: {
					user_email: newUser.user_email
				},

			})
				.catch((error) => console.log(error));

			if (userInDB) {
				return res.render("users/register", {
					errors: {
						email: { msg: "*Este email ya está en uso" },
					},
					oldData: req.body,
				});
			}


			let userToCreate = {
				...req.body,
				password: bcryptjs.hashSync(req.body.password, 10),
				avatar: req.file ? req.file.filename : "default-image.png"
			}
			//aplicar la lógica para que el checkbox al marcar uno solo venga dentro de un array
			let userCreated = Users.create(userToCreate);


			return res.redirect('login');
		}
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