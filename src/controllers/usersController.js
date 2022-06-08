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

  // store con la lógica para que guarde la info del nuevo usuario al registrarse
  store: (req, res)=> {
    let newUser = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      birthdate: Date(req.body.birthdate),
      address: req.body.address,
      interest: req.body.interest,
      password: req.body.password,
      image: req.file ? req.file.filename : "userDefaultImage.png",
    };

    users.push(newUser);

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

    res.redirect('/login');

  },
  }
;

module.exports = usersController;
