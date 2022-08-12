const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Empiezamos a trabajar con la base de datos
let db = require('../database/models');
const product = db.Product;

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

  /*productToEdit: (req, res) => {
    db.Category.findAll()
    .then(function(categories){
      res.render("products/productsEditForm", ({category: category}))
    })
  },*/
}

module.exports = productsController;
