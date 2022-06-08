const fs = require('fs');
const path = require('path');
//Configuro a continuación el archivo de usuarios de la base de datos de Json
const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
  login: (req, res) => {
    res.render("users/login");
  },

  register: (req, res) => {
    res.render("users/register");
  },

  contact: (req, res) => {
    res.render("users/contact");
  },
};

module.exports = usersController;
