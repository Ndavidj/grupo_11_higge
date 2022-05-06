const fs = require('fs');
const path = require('path');


// agrego lo de aqui para arriba
const productsController = {
  productsDetails: (req, res) => {
    res.render("products/productsDetails");
  },
  productsCart: (req, res) => {
    res.render("products/productsCart");
  },
  catalogue: (req, res) => {
    res.render("products/catalogue");
  },
  productsCreateForm: (req, res) => {
    res.render("products/productsCreateForm");
  },
  /*un store de prueba para asegurarnos que viaja por POST correctamente la petición*/ 
  store: (req, res) => {
  
  res.send("el producto se habría guardado ok");
  },
  /* (El store funcionando corresponde al sprint 4 y le hacen falta los Json para ser operativos correctamente)
  store: (req, res) => {
    let newProduct = {
      id: products[products.length -1].id + 1,
      title: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
      size: req.body.size,
      category: req.body.category,
      image: 'defaultImage',
    };
    products.push(newProduct); Agregar aqui la logica FS para modificar y agregar al Json!!
    productId = productController.productsCreateForm(product);
    res.redirect('/productsDetails/' + productId);

  }*/
  productsEditForm: (req, res) => {
    res.render("products/productsEditForm")
  },
  /*Faltará establecer el controlador que guarde la edición y sus cambios. Se hará en conjunto con la ruta y el metodo PUT*/
};

module.exports = productsController;
