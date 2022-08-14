const {body} = require('express-validator');
const path = require('path');

const validateEdit = [
    body('firstName')
		.notEmpty().withMessage('Tienes que escribir un nombre').bail()
		.isAlpha().withMessage('El nombre solo puede contener letras').bail()
		.isLength(2).withMessage('El nombre debe tener al menos 2 caracteres'),

	body('lastName')
		.notEmpty().withMessage('Tienes que escribir un apellido').bail()
		.isAlpha().withMessage('El apellido solo puede contener letras').bail()
		.isLength(2).withMessage('El apellido debe tener al menos 2 caracteres'),

	body('dateBirthday')
		.notEmpty().withMessage('Debes completar la fecha de nacimiento').bail(),

	body('address')
		.notEmpty().withMessage('Tienes que escribir una direccion').bail(),

	body('avatar')
		.custom((value, { req }) => {
			let file = req.file;
			let acceptedExtensions = ['.jpg', '.png', '.JPG', '.PNG'];
			if (!file) {
				throw new Error('Tienes que subir una imagen de perfil');
			} else {
				let fileExtension = path.extname(file.originalname);
				if (!acceptedExtensions.includes(fileExtension)) {
					throw new Error('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '))
				}
			}

			return true;
		})
]

module.exports = validateEdit;