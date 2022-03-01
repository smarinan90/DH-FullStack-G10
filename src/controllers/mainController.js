const { validationResult } = require("express-validator");
const path = require("path");
const usersMethods = path.resolve(__dirname, "../../models/Users.js");
const CRUD = require(usersMethods);
const bcryptjs = require('bcryptjs');


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

      let { first_name, last_name, email, birth_date, password, confirmation_pwd } = req.body;
      let pwd = bcryptjs.hashSync(password, 9);
      let mailVerification = CRUD.findByEmail(email);

      mailVerification ? res.render("client/register", {
        errors: {
          email: {
            msg: 'El usuario ya se encuentra registrado'
          }
        },
        oldData: req.body,
      }) : null;

      newUser = {
        first_name,
        last_name,
        email,
        birth_date,
        password: pwd
      } 

      bcryptjs.compareSync(confirmation_pwd, pwd) ? CRUD.create(newUser) : res.render("client/register", {
        errors: {
          email: {
            msg: 'Hay un error en la informacion'
          }
        },
        oldData: req.body,
      }) 
    }

    res.redirect("/login");
  },

  login: (req, res) => {
    res.render("client/login");
  },
};
