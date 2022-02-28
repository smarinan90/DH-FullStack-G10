const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator')

const usersPath = path.resolve(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

module.exports = {
    home: (req, res) => {
        res.render('home');
    },
    register: (req, res) => {
        res.render('client/register');
    },
    createUser: (req, res) => {
        newUser = {
            id: users[users.length - 1].id + 1,
            ...req.body
        };
        users.push(newUser)
        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));

        // const valResult = validationResult(req);

        // if (!valResult.errors) {
        //     return res.render('client/register', {
        //         errors: valResult.mapped(),
        //         oldData: req.body
        //     });
        // } else {
        //     let newUser = {
        //         id: users[users.length - 1].id + 1,
        //         ...req.body
        //     };
        //     users.push(newUser)
        //     fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
        //     res.redirect('/')
        // }
    },
    login: (req, res) => {
        res.render('client/login');
    }
};