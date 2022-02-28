const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator')

const usersPath = path.resolve(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

module.exports = {
    home: (req, res) => {
        res.render('/');
    },
    register: (req, res) => {
        res.render('client/register');
    },
    createUser: (req, res) => {
        const valResult = validationResult(req);

        if (valResult.errors.length > 0) {
            return res.render('client/register', {
                errors: valResult.mapped(),
                oldData: req.body
            });
        } else {
            console.log(req.body);
            let newUser = {
                id: users[users.length - 1].id + 1,
                ...req.body
            };
            users.push(newUser)
            fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
            res.redirect('/login');
        }
    },
    login: (req, res) => {
        res.render('client/login');
    }
};