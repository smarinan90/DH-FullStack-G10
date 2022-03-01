const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");
const Users = requiere('usersPath')

const usersPath = path.resolve(__dirname, "../database/users.json");

module.exports = {
  home: (req, res) => {
    res.render("home");
  },

  register: (req, res) => {
    res.render("client/register");
  },

  createUser: (req, res) => {
    const valResult = validationResult(req);

    if (!valResult.errors) {
      return res.render("client/register", {
        errors: valResult.mapped(),
        oldData: req.body,
      });
    } else {
      const { first_name, last_name, email, birth_date, password, confirmation_pwd } = req.body;

      let newUser = {
        id: users[users.length - 1].id + 1,
        first_name,
        last_name,
        email,
        birth_date,
        password: bcryptjs.hashSync(password, 9)
      };

      if (bcryptjs.compareSync(confirmation_pwd, newUser.password)) {
        users.push(newUser);
        fs.writeFileSync(usersPath, JSON.stringify(users, null, " "));
        res.redirect("/login");
      } else {
        return res.render("client/register", {
          // errors: ??? ,
          oldData: req.body,
        })
      }
    }
  },

  login: (req, res) => {
    res.render("client/login");
  },
};
