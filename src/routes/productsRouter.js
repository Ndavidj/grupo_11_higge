// Requires 
const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');

const productsController = require("../controllers/productsController.js")



// Config's Multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/products");
    },
    filename: function (req, file, cb) {
        const newProductImg = 'product-' + file.fieldname + Date.now() + path.extname(file.originalname)
        cb(null, newProductImg);
    }
});




const upload = multer({ storage: storage });

//Ruta para ver todos los productos
router.get('/', productsController.index);

//Ruta para ver el detalle del producto
router.get('/detail/:id', productsController.productsDetail);

//Ruta para ver el carrito 
router.get('/productsCart', productsController.productsCart);

//Ruta para ver el Formulario que llega para la creación de producto -este viaja por GET porque trae la vista del form-
router.get('/productsCreate', productsController.productsCreateForm);

//Ruta para el Procesamiento del formulario que crea un nuevo producto -viaja por POST- .
router.post('/', upload.single('productImage'), productsController.productsStore);

//Ruta para ver el Formulario de edición del producto 
router.get('/productsEditForm/:id', productsController.productsEditForm);
//Actualiza  un solo producto.
router.put('/productsEditForm/:id', upload.single('productImage'), productsController.productsUpdate);

//Elimina un producto en cuestion.
router.delete('/delete/:id', productsController.delete);



module.exports = router;