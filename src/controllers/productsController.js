const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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


  productsStore: (req, res) => {
   
    let newProduct = {
      id: products[products.length - 1].id + 1,
      name: req.body.name,
      description: req.body.description,
      price: parseInt(req.body.price),
      discount: parseInt(req.body.discount),
      size: req.body.size,
      category: req.body.category,
      image: req.file ? req.file.filename : "defaultImage.png",
    };

    products.push(newProduct);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect('/products');

  },

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

    //ver que aqui creo que se debe aplicar Javascript para quitar este producto del array al borrarlo.

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect("/")
	}


};

module.exports = productsController;
