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
  }
};

module.exports = productsController;
