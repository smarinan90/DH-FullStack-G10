const db = require("../../database/models");
const { validationResult } = require("express-validator");
const bcryptjs = require('bcryptjs');

module.exports = {
    home: (req, res) => {
        res.render('home');
    },

    register: (req, res) => {
        res.render("client/register");
    },

    createUser: async (req, res) => {
        const valResult = validationResult(req);

        if (!valResult.errors) {
            return res.render("client/register", {
                errors: valResult.mapped(),
                oldData: req.body,
            });
        } else {

            let { first_name, last_name, email, birth_date, password, confirmation_pwd } = req.body;
            let pwd = bcryptjs.hashSync(password, 9);
            let mailVerification = await db.Users.findOne({
                where: { email: email }
            });

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
                birthday: birth_date,
                password: pwd
            }

            bcryptjs.compareSync(confirmation_pwd, pwd) ? db.Users.create(newUser) : res.render("client/register", {
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

    loginProcess: async (req, res) => {
        let userLog = await db.Users.findOne({
            where: { email: email }
        });

        let pwd_verfification = bcryptjs.compareSync(req.body.password, userLog.password)
        pwd_verfification ? req.session.userLogged = userLog.id : res.render("client/login", {
            errors: {
                email: {
                    msg: 'La informacion no es correcta'
                }
            },
            oldData: req.body,
        })
        res.redirect('/')
    }

}