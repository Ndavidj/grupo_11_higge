const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js")


router.get('/productsDetails', productsController.productsDetails);
router.get('/productsCart', productsController.productsCart);
router.get('/catalogue', productsController.catalogue);
router.get('/productsCreateForm', productsController.productsCreateForm);


module.exports = router;