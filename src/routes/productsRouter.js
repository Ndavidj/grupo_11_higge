const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsController = require("../controllers/productsController.js")



/*el store que será necesario en el srpint 4 ya planteado según el proyecto*/
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: (req, file, cb)=>{
        const newProductImg = 'product-' + Date.now() + path.extname();
        cb(null, newProductImg);
    }
});

const upload = multer({storage: storage});
//Ruta para ver los detalles de producto
router.get('/', productsController.index);
router.get('/detail/:id', productsController.productsDetail); 
//Ruta para ver el carrito 
router.get('/productsCart', productsController.productsCart);
//Ruta para ver el Formulario que llega para la creación de producto -este viaja por GET porque trae la vista del form-
router.get('/productsCreateForm', productsController.productsCreateForm);
//Ruta para el Procesamiento del formulario que crea un nuevo producto -viaja por POST- Esta parte corresponde al sprint 4 pero queda hecha y comentada.
router.post('/', /*upload.single('productImage'),*/ productsController.store);
//Ruta para ver el Formulario de edición del producto -eventualmente deberá identificar el ID del mismo y se debe crear la ruta por PUT que modifique los cambios-
router.get('/productsEditForm', productsController.productsEditForm);



module.exports = router;