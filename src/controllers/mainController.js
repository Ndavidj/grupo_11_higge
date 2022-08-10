const fs = require("fs");
const path = require("path");
const db = require("../database/models")
const Op = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const newArrivals = products.filter(function (product) {
  return product.category == "novedad";
});
const inOffer = products.filter(function (product) {
  return product.category == "en oferta";
});

const mainController = {
  index: (req, res) => {
    //products.findAll
    res.render("index", {
      newArrivals,
      inOffer,
    });
  },

  /*   search: (req, res) => {
      let search = req.query.keywords;
      let productsToSearch = products.filter((product) =>
        product.name.toLowerCase().includes(search)
      );
      res.render("results", {
        products: productsToSearch,
        search,
      });
    }, */

  search: (req, res) => {
    db.Product.findAll({
      where: {
        name: { [Op.like]: `%${req.query.search}%` }
      }
    })
      .then(higgeProducts => {
        res.render('resultSearch', { higgeProducts });
      });
  },

  aboutUs: (req, res) => {
    res.render("aboutUs");
  },

  contact: (req, res) => {
    res.render('contact')
  },

};

module.exports = mainController;
