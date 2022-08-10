const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Empiezamos a trabajar con la base de datos
let db = require('../database/models');

const productsController = {
  index: function (req, res) {
    db.Product.findAll()
    .then(function(products){
      return res.render("products/catalogue", {products:products});
    })
  },

  productsStore: function (req, res) {
   db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: parseInt(req.body.price),
      discount: parseInt(req.body.discount),
      image: req.file ? req.file.filename : "defaultImage.png",
      categoryId: req.body.category,
    })
    .then(function(){
      res.redirect('/products')
    });

  },

  productsDetails: function (req, res) {
    db.Product.findByPk(req.params.id)
      .then(function(product){
        res.render('../views/products/productsDetails', {product:product})
      })
  },

  productsEditForm: function(req, res){
    db.Product.findByPk(req.params.id)
    .then(function(product){
      res.render('products/productsEditForm', {productToEdit:product})
    })

  },

  update: function(req, res){
    db.Product.update({
      name: req.body.name,
      description: req.body.description,
      price: parseInt(req.body.price),
      discount: parseInt(req.body.discount),
      image: req.file ? req.file.filename : req.session.image,
      categoryId: req.body.category,
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function(){
      res.redirect('/products/detail/' + req.params.id)
    })

  },

  delete: function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }})
      .then(function(){
    res.redirect('/')
  })
  },

  productsDetail: function(req,res) {
    db.Product.findByPk(req.params.id)
      .then(function(product) {
        res.render('product/productsDetail', {product:product})

      })
    /*
        let id = req.params.id
        let product = products.find(product => product.id == id)
    res.render('products/productsDetails', {
      product
    })*/
  },
  productsCart: (req, res) => {
    res.render("products/productsCart");
  },

  productsCreateForm: (req, res) => {
    db.Category.findAll()
    .then(function(categories){
        res.render("products/productsCreateForm", ({categories: categories}));
    })
  },

  

}


/*
// agrego lo de aqui para arriba
const productsController = {
  // Root - Show all products
  index: (req, res) => {
    res.render('products/catalogue', {
      products
    })
  },

  // Detail - Detail from one product
  productsDetail: (req, res) => {
    let id = req.params.id
    let product = products.find(product => product.id == id)
    res.render('products/productsDetails', {
      product
    })
  },
  productsCart: (req, res) => {
    res.render("products/productsCart");
  },

  productsCreateForm: (req, res) => {
    res.render("products/productsCreateForm");
  },

//Reemplazar x CREATE con metodo base de datos
  productsStore: (req, res) => {
   
    let newProduct = {
      id: products[products.length - 1].id + 1,
      name: req.body.name,
      description: req.body.description,
      price: parseInt(req.body.price),
      discount: parseInt(req.body.discount),
      image: req.file ? req.file.filename : "defaultImage.png",
      categoryId: req.body.category,
    };

    products.push(newProduct);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect('/products');

  },
// Reemplazar x UPDATE
  productsEditForm: (req, res) => {
    let id = req.params.id
    let productToEdit = products.find(product => product.id == id)
    res.render("../views/products/productsEditForm", ({ productToEdit: productToEdit }));
  },

  update: (req, res) => {
    const id = req.params.id;
    let productToEdit = products.find(product => product.id == id);

    let productToSave = {
      id: productToEdit.id,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
      description: req.body.description,
      image: req.file ? req.file.filename : productToEdit.image
    }

    let indice = products.findIndex(product => {
      return product.id == id
    })
    products[indice] = productToSave;

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/")
  },

	delete : (req, res) => {
		const id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

    products.splice(finalProducts)
    //ver que aqui creo que se debe aplicar Javascript para quitar este producto del array al borrarlo.

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect("/")
	}


};
*/

module.exports = productsController;
