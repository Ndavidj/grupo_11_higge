const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const path = require('path')
const fs = require("fs");

const Users = require('../models/User')
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
			return res.render('users/register', {
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
			}
		}

	},

	login: (req, res) => {
		return res.render('users/login');
	},

	loginProcess: async (req, res) => {
		const resultValidation = validationResult(req);

		//Valida si pasan errores de validacion en la creacion del usuario
		if (resultValidation.errors.length > 0) {
			res.render("users/login", {
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		} else {
			let userToLogin = await User.findOne({
				where: { email: req.body.email },

			}).catch((error) => console.log(error));


			/* Comparing the password that the user entered with the password that is stored in the database. */
			if (userToLogin) {
				let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
				console.log(req.body.password)
				console.log(userToLogin.password)
				console.log(isOkThePassword)
				if (isOkThePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;

					if (req.body.rememberUser) {
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
						msg: 'No se encuentra este email en nuestra base de datos'
					}
				}
			});

		}
	},

	forgotPassword: (req, res) => {
		res.send('Se envio formulario para recuperar contraseña a su email')
	},

	profile: (req, res) => {
		return res.render('users/profile');
	},

	edit: (req, res) => {
		return res.render("users/editProfile")
	},

	processEdit: (req, res) => {
		let errors = validationResult(req);

		if (!errors.isEmpty()) {

			return res.render("users/editProfile", { errorMessages: errors.mapped(), oldData: req.body });
			
		} else {
			User.update({
				...req.body,
			}, {
				where: {
					id: req.session.userLogged.id
				}
			})
				.then(() => {

					return res.redirect('users/profile');
				})
				.catch((error) => {
					console.log(error)
				})
		};
	},


	delete: (req, res) => {
		User.destroy({
			where: { email: req.session.userLogged.email },

		})
			.then(res.redirect("/"));
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;