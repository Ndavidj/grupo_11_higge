const mainController = {
  index: (req, res) => {
    res.render("index");
  },

  aboutUs: (req, res) => {
    res.render('aboutUs')
  }
};

module.exports = mainController;
